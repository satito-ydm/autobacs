/**
 * Screenshot + layout audit against the running dev server.
 * Headless Chrome's CLI clamps the window to ~500px, so phone widths are
 * emulated through CDP here instead of --window-size.
 *
 *   node scripts/shot.mjs [outDir] [url]
 */
import { mkdir, writeFile } from "node:fs/promises";
import puppeteer from "puppeteer-core";

const OUT = process.argv[2] ?? "./shots";
const URL = process.argv[3] ?? "http://localhost:3000/";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const VIEWPORTS = [
  { name: "mobile-390", width: 390, height: 844, dsf: 2, mobile: true },
  { name: "tablet-834", width: 834, height: 1112, dsf: 2, mobile: true },
  { name: "desktop-1440", width: 1440, height: 900, dsf: 1, mobile: false },
];

await mkdir(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "shell",
  args: ["--no-sandbox", "--force-prefers-reduced-motion", "--hide-scrollbars"],
});

const report = [];

for (const v of VIEWPORTS) {
  const page = await browser.newPage();
  await page.setViewport({
    width: v.width,
    height: v.height,
    deviceScaleFactor: v.dsf,
    isMobile: v.mobile,
    hasTouch: v.mobile,
  });
  await page.goto(URL, { waitUntil: "networkidle0", timeout: 60_000 });
  await page.evaluate(() => document.fonts.ready);

  // Walk the page so lazy images actually load, otherwise every below-fold
  // image reports naturalWidth 0 and looks broken when it is merely deferred.
  await page.evaluate(async () => {
    const step = window.innerHeight;
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
    await Promise.all(
      [...document.images]
        .filter((i) => !i.complete)
        .map((i) => new Promise((r) => { i.onload = i.onerror = r; }))
    );
  });

  // Measure overflow rather than eyeballing it.
  const audit = await page.evaluate(() => {
    const doc = document.documentElement;
    const vw = doc.clientWidth;
    const offenders = [];
    for (const el of document.querySelectorAll("body *")) {
      const r = el.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) continue;
      if (r.right > vw + 1 || r.left < -1) {
        const cs = getComputedStyle(el);
        if (cs.position === "fixed" || cs.position === "absolute") continue;
        offenders.push({
          tag: el.tagName.toLowerCase(),
          cls: (el.className || "").toString().slice(0, 60),
          left: Math.round(r.left),
          right: Math.round(r.right),
        });
      }
    }
    const imgs = [...document.images].map((i) => ({
      src: i.currentSrc.split("/").slice(-1)[0].slice(0, 46),
      natural: `${i.naturalWidth}x${i.naturalHeight}`,
      broken: i.naturalWidth === 0,
    }));
    return {
      viewportWidth: vw,
      scrollWidth: doc.scrollWidth,
      docHeight: doc.scrollHeight,
      horizontalOverflow: doc.scrollWidth > vw + 1,
      offenders: offenders.slice(0, 12),
      brokenImages: imgs.filter((i) => i.broken),
      imageCount: imgs.length,
      h1: [...document.querySelectorAll("h1")].map((h) => h.textContent?.trim().slice(0, 70)),
      h2Count: document.querySelectorAll("h2").length,
      jsonLdBlocks: document.querySelectorAll('script[type="application/ld+json"]').length,
    };
  });

  await page.screenshot({ path: `${OUT}/${v.name}.png`, fullPage: true });
  report.push({ viewport: v.name, ...audit });
  await page.close();
}

await browser.close();
await writeFile(`${OUT}/report.json`, JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
