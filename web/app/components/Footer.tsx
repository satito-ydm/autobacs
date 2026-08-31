
import Link from "next/link";

const COLS = [
  {
    heading: "สินค้าและบริการ",
    links: [
      ["ยางรถยนต์", "/products/tyre"],
      ["โช้คอัพ", "/products/shock-absorber"],
      ["ผ้าเบรก", "/products/brake-pads"],
      ["น้ำมันเครื่อง", "/products/engine-oil"],
      ["แบตเตอรี่", "/products/battery"],
      ["บริการทั้งหมด", "/services"],
    ],
  },
  {
    heading: "เกี่ยวกับเรา",
    links: [
      ["เรื่องราวของเรา", "/about"],
      ["ร่วมงานกับเรา", "/careers"],
      ["ข่าวสาร", "/news"],
      ["ติดต่อเรา", "/contact"],
    ],
  },
  {
    heading: "ช่วยเหลือ",
    links: [
      ["จองคิว", "#booking"],
      ["ติดตามคำสั่งซื้อ", "/orders"],
      ["ประวัติการเข้ารับบริการ", "/service-history"],
      ["นโยบายความเป็นส่วนตัว", "/privacy"],
      ["เงื่อนไขการใช้งาน", "/terms"],
    ],
  },
];

const SOCIAL = [
  ["facebook", "Facebook", "https://facebook.com/autobacsthailand"],
  ["instagram", "Instagram", "https://instagram.com/autobacsthailand"],
  ["tiktok", "TikTok", "https://tiktok.com/@autobacsthailand"],
  ["youtube", "YouTube", "https://youtube.com/@autobacsthailand"],
];

export function Footer() {
  return (
    <footer className="dark bg-surface pb-28 pt-14 md:pb-14 md:pt-20">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/logo.svg"
              alt="Autobacs Thailand"
              width={148}
              height={36}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-4 t-body-s text-ink-2">
              ศูนย์บริการรถยนต์ครบวงจรมาตรฐานญี่ปุ่น ดำเนินการโดยกลุ่ม PTG Energy
            </p>
            <p className="mt-4 t-label-m text-ink">
              <a href="tel:1234" className="hover:text-ink-brand">โทร 1234</a>
            </p>
            <p className="mt-1 t-label-s text-ink-2">LINE @autobacsthailand</p>
          </div>

          {COLS.map((c) => (
            <nav key={c.heading} aria-label={c.heading}>
              <h2 className="t-label-l text-ink">{c.heading}</h2>
              <ul className="mt-3 space-y-2">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="t-body-s text-ink-2 hover:text-ink-brand">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="t-label-s text-ink-2">
            © {new Date().getFullYear()} Autobacs Thailand · บริษัทในกลุ่ม PTG Energy
          </p>
          <ul className="flex items-center gap-4">
            {SOCIAL.map(([icon, label, href]) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/img/icons/${icon}.svg`}
                    alt=""
                    width={20}
                    height={20}
                    className="size-5 opacity-70 transition-opacity duration-150 hover:opacity-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface p-3 md:hidden">
      <div className="flex gap-2">
        <a
          href="#top"
          className="flex-1 rounded-[8px] border border-line-strong px-4 py-3 text-center t-label-m text-ink"
        >
          ค้นหายาง
        </a>
        <a
          href="#booking"
          className="flex-1 rounded-[8px] bg-brand px-4 py-3 text-center t-label-m text-on-brand"
        >
          จองคิว
        </a>
      </div>
    </div>
  );
}
