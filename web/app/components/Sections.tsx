import Image from "next/image";
import Link from "next/link";
import { CategoryIcon, MapArt, TreadMotif, PinIcon } from "./Art";
import { Badge, Button, Rating, Rule, Section, SectionHead, SlotChip, StockBadge } from "./ui";
import {
  articles,
  branches,
  brands,
  faqs,
  linkHub,
  priceLines,
  productCategories,
  products,
  promos,
  services,
  slots,
  whyPoints,
} from "../data";

/* --- Trust bar ---------------------------------------------------------- */
export function TrustBar() {
  const items = [
    ["ช่างมาตรฐานญี่ปุ่น", "อบรมด้วยหลักสูตรเดียวกับ Autobacs ญี่ปุ่น"],
    ["รับประกันงานติดตั้ง", "เป็นลายลักษณ์อักษร เข้าสาขาไหนก็ได้"],
    ["60+ สาขาทั่วประเทศ", "เปิดทุกวัน จองคิวล่วงหน้าได้"],
  ];
  return (
    <div className="dark border-t border-line bg-surface py-6">
      <div className="shell grid gap-5 sm:grid-cols-3">
        {items.map(([big, small]) => (
          <div key={big}>
            <p className="t-label-l text-ink">{big}</p>
            <p className="mt-0.5 t-label-s text-ink-2">{small}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --- Promotional banner — one static image band, never a carousel ------- */
export function Banner() {
  return (
    <div className="bg-surface py-10 md:py-12">
      <div className="shell">
        <div className="dark relative overflow-hidden rounded-[16px] bg-surface px-6 py-10 md:px-16 md:py-12">
          <div className="relative z-10 max-w-xl">
            <Rule />
            <p className="mt-4 t-label-m text-ink-brand">โปรโมชั่นเดือนกันยายน</p>
            <h2 className="mt-2 t-heading-xl text-ink">ซื้อยาง 4 เส้น ฟรีค่าติดตั้ง + ถ่วงล้อ</h2>
            <p className="mt-3 t-body-m text-ink-2">
              ถึง 30 กันยายน 2569 เฉพาะยางที่ร่วมรายการ จองคิวออนไลน์ล่วงหน้ารับสิทธิ์ทันที
            </p>
            <Button href="/promotions/free-fitting" size="lg" className="mt-6">
              ดูยางที่ร่วมรายการ
            </Button>
          </div>
          <TreadMotif className="pointer-events-none absolute -right-6 top-1/2 hidden h-52 w-96 -translate-y-1/2 -rotate-6 md:block" />
        </div>
      </div>
    </div>
  );
}

/* --- Products ----------------------------------------------------------- */
export function Categories() {
  return (
    <Section id="products" tone="subtle">
      <SectionHead
        title="สินค้า"
        lead="อะไหล่และของใช้รถยนต์ที่คัดมาแล้ว พร้อมช่างติดตั้งที่สาขาทั่วประเทศ"
        action={{ label: "ดูสินค้าทั้งหมด", href: "/products" }}
      />
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-6">
        {productCategories.map((c) => (
          <li key={c.title}>
            <Link href={c.href} className="card lift flex h-full flex-col gap-4 p-5">
              <span className="grid size-14 place-items-center rounded-[8px] bg-brand-subtle text-ink">
                {CategoryIcon[c.icon]("size-7")}
              </span>
              <span>
                <span className="block t-heading-s text-ink">{c.title}</span>
                <span className="mt-1 block t-label-s text-ink-3">{c.note}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* --- Services ----------------------------------------------------------- */
export function Services() {
  return (
    <Section id="services">
      <SectionHead
        title="บริการ"
        lead="งานที่ช่างเราทำให้ได้เลยวันนี้ จองคิวล่วงหน้าไม่ต้องรอ"
        action={{ label: "ดูบริการทั้งหมด", href: "/services" }}
      />
      <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {services.map((s) => (
          <li key={s.title}>
            <Link
              href={s.href}
              className={`lift flex h-full flex-col gap-3 rounded-[12px] border p-6 ${
                s.featured ? "border-2 border-line-brand bg-brand-subtle" : "border-line bg-surface"
              }`}
            >
              <span className="text-ink">{CategoryIcon[s.icon]("size-7")}</span>
              {s.featured && <Badge className="w-fit bg-brand text-on-brand">เฉพาะที่ Autobacs</Badge>}
              <h3 className="t-heading-s text-ink">{s.title}</h3>
              <p className="t-body-s text-ink-2">{s.desc}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* --- Booking — real slot availability ----------------------------------- */
export function Booking() {
  const steps = [
    ["เลือกบริการและสาขา", "ค้นจากตำแหน่งปัจจุบันหรือสาขาโปรดที่บันทึกไว้"],
    ["เลือกวันและเวลาที่ว่าง", "ตารางคิวดึงจากระบบหน้าสาขาแบบเรียลไทม์"],
    ["ยืนยัน รับ QR ทาง SMS / LINE", "แสดง QR ที่เคาน์เตอร์ ไม่ต้องกรอกข้อมูลซ้ำ"],
  ];
  return (
    <Section id="booking" tone="subtle">
      <div className="grid gap-10 lg:grid-cols-[1fr_480px] lg:gap-16">
        <div>
          <h2 className="t-heading-xl text-ink">จองคิว 3 ขั้นตอน เห็นคิวว่างจริง</h2>
          <p className="mt-3 t-body-l text-ink-2">
            ไม่ต้องโทรถามสาขา ไม่ต้องรอเจ้าหน้าที่โทรกลับ เลือกเวลาที่ระบบบอกว่าว่างแล้วยืนยันได้ทันที
          </p>
          <ol className="mt-8 space-y-5">
            {steps.map(([title, sub], i) => (
              <li key={title} className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand t-label-l text-on-brand">
                  {i + 1}
                </span>
                <div>
                  <p className="t-heading-s text-ink">{title}</p>
                  <p className="mt-1 t-body-s text-ink-2">{sub}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="card h-fit p-6 md:p-8">
          <h3 className="t-heading-m text-ink">คิวว่างวันนี้ · สาขาพระราม 2</h3>
          <p className="mt-1 t-label-m text-ink-3">อัปเดตจากระบบหน้าสาขาแบบเรียลไทม์</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {slots.map((s) => (
              <SlotChip key={s.time} time={s.time} state={s.state} />
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-3 t-label-s text-ink-3">
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-slot-open" aria-hidden /> ว่าง
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-slot-full" aria-hidden /> เต็ม
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-slot-closed" aria-hidden /> ปิดรับ
            </span>
          </div>
          <Button size="lg" className="mt-6 w-full">
            จองคิวที่สาขานี้
          </Button>
        </div>
      </div>
    </Section>
  );
}

/* --- Price transparency ------------------------------------------------- */
export function PriceBlock() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="t-heading-xl text-ink">ราคานี้รวมอะไรบ้าง</h2>
          <p className="mt-3 t-body-l text-ink-2">
            ความกังวลอันดับหนึ่งของคนซื้อยางคือไปถึงหน้าร้านแล้วโดนบวกเพิ่ม
            เราจึงแสดงทุกรายการที่รวมอยู่ในราคาตั้งแต่บนเว็บ ราคาที่คุณเห็นคือราคาที่จ่ายจริงที่เคาน์เตอร์
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-[12px] bg-brand-subtle px-6 py-5">
            <span className="t-heading-s text-ink">รวมที่ต้องจ่ายจริง</span>
            <span className="t-num-xl text-ink-brand">13,160 บาท</span>
          </div>
        </div>

        <div className="card px-6 py-2">
          <dl>
            {priceLines.map((l) => (
              <div key={l.label} className="flex items-center justify-between gap-6 border-b border-line py-4 last:border-0">
                <dt className="t-body-m text-ink-2">{l.label}</dt>
                <dd className={`shrink-0 t-label-l ${l.strong ? "text-ink" : "text-ink-success"}`}>{l.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}

/* --- Product highlights ------------------------------------------------- */
export function Highlights() {
  return (
    <Section tone="subtle">
      <SectionHead
        title="ยางแนะนำสำหรับรถคุณ"
        lead="ติ๊กเลือกเพื่อเปรียบเทียบสเปกและราคาได้สูงสุด 3 รุ่น"
        action={{ label: "ดูยางทั้งหมด", href: "/products/tyre" }}
      />
      <ul className="grid grid-cols-2 gap-3 md:gap-4 xl:grid-cols-4">
        {products.map((p) => (
          <li key={p.title} className="card lift flex flex-col overflow-hidden">
            <div className="relative aspect-square bg-surface p-4">
              <Image src={p.img} alt={`ยาง ${p.brand} ${p.title}`} fill sizes="(max-width: 768px) 45vw, 300px" className="object-contain p-4" />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-4">
              <p className="t-label-s text-ink-3">{p.brand}</p>
              <h3 className="t-heading-s text-ink">{p.title}</h3>
              <p className="t-num-m text-ink-2">{p.size}</p>
              <StockBadge stock={p.stock} />
              <p className="mt-auto pt-2">
                <span className="t-num-l text-ink-brand">{p.price}</span>{" "}
                <span className="t-body-s text-ink-2">บาท / เส้น รวมติดตั้ง+ถ่วงล้อ</span>
              </p>
              <label className="flex items-center gap-2 t-label-s text-ink-2">
                <input type="checkbox" className="size-4 accent-[var(--brand)]" />
                เปรียบเทียบ
              </label>
              <Button href={p.href} size="md" className="w-full">
                จองคิวบริการ
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* --- Promotions --------------------------------------------------------- */
const PROMO_TONE = {
  dark: "dark bg-surface text-ink",
  brand: "bg-brand text-on-brand",
  light: "bg-muted text-ink",
} as const;

export function Promotions() {
  return (
    <Section id="promotions">
      <SectionHead
        title="โปรโมชั่น"
        lead="สิทธิ์ที่ใช้ได้จริงที่สาขา ไม่มีเงื่อนไขซ่อน"
        action={{ label: "ดูโปรโมชั่นทั้งหมด", href: "/promotions" }}
      />
      <ul className="grid gap-4 md:grid-cols-3">
        {promos.map((p) => (
          <li key={p.title}>
            <Link href={p.href} className="card lift block h-full overflow-hidden">
              <div className={`grid aspect-[4/3] place-items-center text-center ${PROMO_TONE[p.tone]}`}>
                <div>
                  <p className="t-display-xl">{p.big}</p>
                  <p className="mt-1 t-heading-s">{p.unit}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="t-label-s text-ink-brand">{p.kicker}</p>
                <h3 className="mt-1 t-heading-s text-ink">{p.title}</h3>
                <p className="mt-2 t-body-s text-ink-2">{p.desc}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* --- PT Max Card Plus — link out, not an in-site member area ------------ */
export function MaxCard() {
  return (
    <Section tone="brand">
      <div className="flex flex-wrap items-center justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="t-heading-l text-ink">สมาชิก PT Max Card Plus</h2>
          <p className="mt-3 t-body-l text-ink-2">
            สะสมแต้มจากการเติมน้ำมันที่ PT และใช้บริการที่ Autobacs ได้ในบัตรใบเดียว
            รับราคาสมาชิกทันทีที่สาขา
          </p>
        </div>
        <div>
          <Button href="https://www.ptmaxcard.com" variant="secondary" size="lg">
            ดูสิทธิประโยชน์ทั้งหมด ↗
          </Button>
          <p className="mt-2 t-label-s text-ink-3">เปิดเว็บไซต์ PT Max Card Plus ในแท็บใหม่</p>
        </div>
      </div>
    </Section>
  );
}

/* --- Why Autobacs — carries the crawlable text weight (BR-01) ----------- */
export function Why() {
  return (
    <Section tone="dark">
      <h2 className="t-heading-xl text-ink">ทำไมต้องเปลี่ยนยางที่ Autobacs</h2>
      <ul className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {whyPoints.map((p) => (
          <li key={p.title}>
            <Rule />
            <h3 className="mt-4 t-heading-s text-ink">{p.title}</h3>
            <p className="mt-2 t-body-s text-ink-2">{p.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* --- Brand partners ----------------------------------------------------- */
export function Brands() {
  return (
    <Section>
      <h2 className="t-heading-l text-ink">แบรนด์ยางที่มีจำหน่าย</h2>
      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-8">
        {brands.map((b) => (
          <li key={b.name}>
            <Link
              href={`/products/tyre/brand/${b.name.toLowerCase()}`}
              className="lift relative block h-24 rounded-[8px] border border-line bg-subtle"
            >
              {/* Source PNGs are 350×350 with heavy transparent padding, so let
                  them fill the tile rather than capping their height. */}
              <Image src={b.img} alt={b.name} fill sizes="180px" className="object-contain p-2" />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* --- Branch locator ----------------------------------------------------- */
export function Branches() {
  return (
    <Section id="branches" tone="subtle">
      <SectionHead
        title="สาขาใกล้คุณ"
        lead="60+ สาขาทั่วประเทศ เปิดทุกวัน คะแนนและรีวิวดึงจาก Google Business Profile ของแต่ละสาขาโดยตรง"
        action={{ label: "ดูสาขาทั้งหมด", href: "/branch" }}
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
        <div className="relative min-h-64 overflow-hidden rounded-[16px] border border-line lg:min-h-[420px]">
          <MapArt className="absolute inset-0 size-full" />
          <Button variant="secondary" size="md" className="absolute bottom-4 left-4">
            <PinIcon className="size-4" /> ใช้ตำแหน่งปัจจุบัน
          </Button>
        </div>
        <ul className="grid gap-4">
          {branches.map((b) => (
            <li key={b.name} className="card p-5">
              <h3 className="t-heading-s text-ink">{b.name}</h3>
              <p className="mt-1 t-body-s text-ink-2">{b.address}</p>
              <div className="mt-3">
                <Rating score={b.rating} reviews={b.reviews} />
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <Badge className="bg-slot-open-bg text-slot-open">
                  {b.open ? `เปิดอยู่ · ปิด ${b.closes}` : "ปิดแล้ว"}
                </Badge>
                <span className="t-label-m text-ink-2">ห่างจากคุณ {b.distance}</span>
              </div>
              <div className="mt-4 flex gap-2">
                <Button href={b.href} size="md" className="flex-1">
                  จองคิวที่สาขานี้
                </Button>
                <Button href={b.href} variant="secondary" size="md">
                  นำทาง
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* --- Articles ----------------------------------------------------------- */
export function Articles() {
  return (
    <Section>
      <SectionHead title="สาระเรื่องรถ" action={{ label: "อ่านทั้งหมด", href: "/blog" }} />
      <ul className="grid gap-6 md:grid-cols-3">
        {articles.map((a) => (
          <li key={a.title}>
            <Link href={a.href} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[12px] bg-muted">
                <Image src={a.img} alt="" fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover" />
              </div>
              <h3 className="mt-3 t-heading-s text-ink group-hover:text-ink-brand">{a.title}</h3>
              <p className="mt-1 t-label-s text-ink-3">{a.meta}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* --- FAQ — matches the FAQPage JSON-LD emitted below -------------------- */
export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <Section id="faq" tone="subtle">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h2 className="t-heading-xl text-ink">คำถามที่ลูกค้าถามบ่อย</h2>
      <div className="mt-8 max-w-3xl space-y-2">
        {faqs.map((f, i) => (
          <details key={f.q} className="card group px-5 py-4 md:px-6" open={i === 0}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 t-heading-s text-ink [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="t-heading-m text-ink-brand transition-transform duration-150 group-open:rotate-45" aria-hidden>
                +
              </span>
            </summary>
            <p className="mt-3 t-body-m text-ink-2">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

/* --- Internal link hub (BR-07) ----------------------------------------- */
export function LinkHub() {
  return (
    <Section>
      <h2 className="t-heading-l text-ink">ค้นหายางแบบที่คุณถนัด</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {linkHub.map((col) => (
          <div key={col.heading}>
            <h3 className="t-label-l text-ink">{col.heading}</h3>
            <ul className="mt-3 space-y-1.5">
              {col.links.map((l) => (
                <li key={l}>
                  <Link
                    href={col.base + encodeURIComponent(l.toLowerCase().replace(/\s+/g, "-"))}
                    className="t-body-s text-ink-brand hover:underline"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
