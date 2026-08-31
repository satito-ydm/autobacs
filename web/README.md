# Autobacs Thailand — Homepage (revamp)

หน้าแรกเวอร์ชันใหม่ สร้างจากดีไซน์ที่อนุมัติแล้วใน Figma
[`PFvLzLsDtQ7oQebvETOc7Z`](https://www.figma.com/design/PFvLzLsDtQ7oQebvETOc7Z/Autobach)
ตาม spec ที่ `../docs/superpowers/specs/2026-08-25-autobacs-revamp-design.md`

## รันดูที่ไหน

**ระหว่างแก้งาน — dev server**

```bash
npm install
npm run dev
```
เปิด **http://localhost:3000** แก้ไฟล์แล้วหน้าเว็บอัปเดตทันที

**ดูตัวจริง / ส่งให้คนอื่น — static HTML**

```bash
npm run build          # ได้โฟลเดอร์ out/ เป็น HTML ล้วน
npx serve out          # หรือ: cd out && python3 -m http.server 4000
```
เปิด **http://localhost:3000** (serve) หรือ **http://localhost:4000** (python)

> ต้องเปิดผ่าน web server เล็ก ๆ แบบนี้ อย่าดับเบิลคลิก `out/index.html` ตรง ๆ
> เพราะ `file://` โหลด asset ของ `_next/` ไม่ได้

**ขึ้น hosting** — อัปโหลดโฟลเดอร์ `out/` ทั้งก้อนขึ้นที่ไหนก็ได้ที่รับ static file
(Vercel, Netlify, Cloudflare Pages, S3, หรือ hosting ธรรมดา) ไม่ต้องมี Node บนเซิร์ฟเวอร์

## Static export

`next.config.ts` ตั้ง `output: "export"` ไว้แล้ว ผลลัพธ์คือ `out/index.html` + `out/_next/`
ขนาดรวม **2.2 MB**

ข้อแลกเปลี่ยนที่ต้องรู้: static export ไม่มีเซิร์ฟเวอร์ จึงใช้ Image Optimization API
ของ Next ไม่ได้ (`images.unoptimized: true`) รูปทุกไฟล์จึงถูกบีบอัดไว้ล่วงหน้าแล้ว —
ภาพถ่ายย่อเหลือกว้างสุด 1600px คุณภาพ 76 และภาพสินค้าแปลงเป็น WebP
รวม `public/img` จาก 15.8 MB เหลือ **628 KB**

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS v4 · TypeScript

Tailwind v4 ใช้ CSS-first config จึง **ไม่มี `tailwind.config.js`** — token ทั้งหมดอยู่ใน
`app/globals.css` ภายใต้ `@theme`

## Design token

โครงสร้างเหมือนใน Figma ทุกประการ: **Primitives → Semantic → utility**

```
:root, .light   ค่า primitive ทั้งหมด + semantic ชุด Light
.dark           override เฉพาะ semantic (ใช้ต่อ section ไม่ใช่ทั้งเว็บ)
@theme inline   map semantic เป็น utility ของ Tailwind
```

**กติกา:** ห้ามใช้ primitive ตรง ๆ ใน markup ใช้ได้เฉพาะชื่อ semantic เช่น
`bg-surface` `text-ink` `text-ink-2` `border-line` `bg-brand` `text-on-brand`
`bg-stock-in-bg` `text-slot-open`

Section พื้นเข้ม (Trust bar, Why Autobacs, Footer, Banner) ใส่ `class="dark"`
แล้วใช้ token ปกติ **ห้าม hardcode สีกลับด้าน** ส่วนการ์ด finder ที่เป็นเกาะสีขาว
บนพื้นดำใช้ `class="light"` ซ้อนกลับ

### สองจุดที่ต้องรู้เรื่อง accessibility

| token | ค่า | เหตุผล |
|---|---|---|
| `--on-brand` | `#1a1a1a` (ไม่ใช่ขาว) | ตัวอักษรขาวบนส้ม `#F36F21` ได้ contrast 2.95:1 ตก WCAG AA — สี ink ได้ 5.89:1 และไม่ต้องเปลี่ยนสี CI |
| `--ink-brand` | `#9c3f0c` (orange/800) | `#F36F21` เป็นตัวอักษรบนพื้นขาวได้ 2.9:1 ตกมาตรฐาน |

ทดสอบคู่สี text × surface ทั้ง Light และ Dark รวม 50 คู่ ผ่าน AA ทั้งหมด

## โครงไฟล์

```
app/
  globals.css          design token ทั้งหมด + type ramp (.t-*)
  layout.tsx           font, metadata, JSON-LD (Organization / WebSite / LocalBusiness)
  page.tsx             ประกอบ 16 section
  data.ts              เนื้อหาทั้งหมด — เปลี่ยนเป็น CMS/API ได้โดยไม่แตะ component
  components/
    Art.tsx            กราฟิกเวกเตอร์ (ล้อ ลายดอกยาง แผนที่) + ไอคอนหมวดสินค้า
    ui.tsx             Button · StockBadge · SlotChip · Rating · Section · SectionHead
    Header.tsx         nav + global search (เมนูมือถือเป็น CSS ล้วน ไม่ใช้ JS)
    Hero.tsx           tyre finder 3 แท็บ (client component ตัวเดียวของหน้า)
    Sections.tsx       section ที่เหลือทั้งหมด
    Footer.tsx         footer + sticky CTA มือถือ
scripts/shot.mjs       audit layout + screenshot 3 breakpoint
public/img/            รูปจาก autobacs.co.th (ดู "รูปภาพ" ด้านล่าง)
```

## SEO ที่ทำไว้แล้ว (อ้างอิง BRD)

| ข้อกำหนด | สถานะ |
|---|---|
| BR-01 ข้อความจริงที่ crawl ได้ | H1 เป็น text จริง 1 ตัว · H2 17 ตัว · section "ทำไมต้อง Autobacs" กับ FAQ เป็นเนื้อหาข้อความล้วน |
| BR-02 title / meta ไม่ซ้ำ | `metadata` ใน `layout.tsx` พร้อม template สำหรับหน้าย่อย |
| BR-03 structured data | Organization · WebSite + SearchAction · AutoRepair + AggregateRating · FAQPage |
| BR-04 Core Web Vitals | หน้าแรกเป็น static ทั้งหน้า · LCP element เป็น text ไม่ใช่รูป · ไม่มี carousel · JS มีแค่ tyre finder |
| BR-07 internal linking | section "ค้นหายางแบบที่คุณถนัด" (Link hub) 24 ลิงก์ |
| BR-13 CTA ชัดเจน | ทุกการ์ดสินค้ามีปุ่มจองคิว ไม่มีคำว่า "สนใจติดต่อสาขา" |

## รูปภาพ

รูปทั้งหมดใน `public/img/` ดึงมาจาก **autobacs.co.th ของลูกค้าเอง** (โลโก้แบรนด์ยาง 8 แบรนด์
ภาพสินค้า ภาพหน้างาน ไอคอน) ไม่มีรูปจากคู่แข่ง

รูปหมวดสินค้าและบริการ **ไม่ได้ใช้ภาพ** เพราะแบนเนอร์ของเว็บเดิมมีตัวหนังสือฝังอยู่ในภาพ
พอ crop เป็นไทล์แล้วตัวหนังสือโดนตัด จึงใช้ไอคอนตามที่ออกแบบไว้ใน Figma แทน

ภาพหน้างานที่ใช้ในส่วนบทความเป็น **placeholder ชั่วคราว** ตาม art direction ข้อ 4.4
ต้องเปลี่ยนเป็นภาพถ่ายจริงที่ถ่ายใหม่ก่อนขึ้น production

## ตรวจงาน

```bash
npm run build                              # type-check + lint + static export
npx eslint app scripts
node scripts/shot.mjs ./shots                          # ตรวจ dev server (:3000)
node scripts/shot.mjs ./shots http://127.0.0.1:4000/   # ตรวจ static export
```

`shot.mjs` วัด horizontal overflow ที่ 390 / 834 / 1440 นับรูปที่โหลดไม่ขึ้น
และนับ H1/H2/JSON-LD แล้ว screenshot เต็มหน้าทั้งสามขนาด

> **หมายเหตุ:** headless Chrome ผ่าน CLI บังคับความกว้างหน้าต่างขั้นต่ำ ~500px
> ทำให้ screenshot ที่ 390px แสดง overflow ปลอม `shot.mjs` จึง emulate ผ่าน CDP แทน
> ผลล่าสุด (ตรวจกับ static export ที่ `out/`): **ไม่มี overflow ทั้งสามขนาด ·
> รูปโหลดครบ 21/21 · H1 หนึ่งตัว · H2 17 ตัว · JSON-LD 2 บล็อก**

## ยังไม่ได้ทำ

หน้าอื่นนอกจากหน้าแรก · เชื่อม API จริง (คิว สต๊อก ราคา สาขา) · e-Commerce checkout ·
บัญชีลูกค้า · ภาษาอังกฤษ (`/en`) · dark mode ทั้งเว็บ — ทั้งหมดอยู่นอกขอบเขตรอบนี้
