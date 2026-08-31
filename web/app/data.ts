/** Homepage content. Mirrors the approved Figma design; swap for CMS/API later. */

import type { CategoryIconName } from "./components/Art";

export const productCategories: { title: string; href: string; icon: CategoryIconName; note: string }[] = [
  { title: "ยางรถยนต์", href: "/products/tyre", icon: "tyre", note: "8 แบรนด์ · ทุกไซซ์" },
  { title: "โช้คอัพ", href: "/products/shock-absorber", icon: "shock", note: "KYB · Tokico" },
  { title: "ผ้าเบรก", href: "/products/brake-pads", icon: "brake", note: "Bendix · Bosch" },
  { title: "น้ำมันเครื่อง", href: "/products/engine-oil", icon: "oil", note: "Mobil · Motul · ENEOS" },
  { title: "แบตเตอรี่", href: "/products/battery", icon: "battery", note: "GS · เปลี่ยนได้ทันที" },
  { title: "สินค้าอื่น ๆ", href: "/products/other", icon: "more", note: "ใบปัดน้ำฝน · หัวเทียน" },
];

export const services: {
  title: string;
  desc: string;
  href: string;
  icon: CategoryIconName;
  featured: boolean;
}[] = [
  {
    title: "ล้างแอร์ + ฆ่าเชื้อ Air Klean",
    desc: "บริการเฉพาะทางสำหรับรถญี่ปุ่น ล้างตู้แอร์และฆ่าเชื้อในระบบปรับอากาศ ที่ศูนย์บริการทั่วไปไม่มี",
    href: "/services/air-klean",
    icon: "air",
    featured: true,
  },
  {
    title: "สลับยาง + ถ่วงล้อ",
    desc: "ยืดอายุยางให้สึกเท่ากันทั้ง 4 เส้น แนะนำทุก 10,000 กม.",
    href: "/services/rotation-balancing",
    icon: "rotate",
    featured: false,
  },
  {
    title: "เติมลมยางไนโตรเจน",
    desc: "แรงดันลมนิ่งกว่าลมธรรมดา ลดการสูญเสียลมระหว่างขับ",
    href: "/services/nitrogen",
    icon: "nitrogen",
    featured: false,
  },
  {
    title: "ล้างระบบเบรกด้วย Brake Cleaner",
    desc: "ล้างคราบผงเบรก คืนการตอบสนองของแป้นเบรก",
    href: "/services/brake-clean",
    icon: "brake",
    featured: false,
  },
];

export type SlotState = "open" | "full" | "closed";
export const slots: { time: string; state: SlotState }[] = [
  { time: "09:00", state: "open" },
  { time: "10:00", state: "open" },
  { time: "11:00", state: "full" },
  { time: "13:00", state: "open" },
  { time: "14:00", state: "open" },
  { time: "15:00", state: "closed" },
  { time: "16:00", state: "open" },
  { time: "17:00", state: "full" },
];

export const priceLines = [
  { label: "ยาง MICHELIN Primacy 4 ST 215/55R17 × 4 เส้น", value: "13,160", strong: true },
  { label: "ค่าติดตั้ง 4 เส้น", value: "รวมแล้ว", strong: false },
  { label: "ถ่วงล้อ 4 ล้อ", value: "รวมแล้ว", strong: false },
  { label: "จุ๊บลมใหม่ 4 ตัว", value: "รวมแล้ว", strong: false },
  { label: "ค่ากำจัดยางเก่า", value: "รวมแล้ว", strong: false },
  { label: "VAT 7%", value: "รวมแล้ว", strong: false },
];

export type Stock = "in" | "low" | "out";
export const products: {
  brand: string;
  title: string;
  size: string;
  price: string;
  stock: Stock;
  img: string;
  href: string;
}[] = [
  {
    brand: "MICHELIN",
    title: "Primacy SUV+",
    size: "215/55R17",
    price: "3,290",
    stock: "in",
    img: "/img/products/michelin-primacy-thumb.webp",
    href: "/products/tyre/michelin-primacy-suv",
  },
  {
    brand: "MICHELIN",
    title: "Agilis 3",
    size: "205/70R15",
    price: "3,150",
    stock: "in",
    img: "/img/products/michelin-agilis3-thumb.webp",
    href: "/products/tyre/michelin-agilis-3",
  },
  {
    brand: "DUNLOP",
    title: "ENASAVE EC300+",
    size: "195/65R15",
    price: "2,450",
    stock: "low",
    img: "/img/products/dunlop-enasave-thumb.webp",
    href: "/products/tyre/dunlop-enasave-ec300",
  },
  {
    brand: "AUTOBACS",
    title: "T88",
    size: "205/55R16",
    price: "2,190",
    stock: "in",
    img: "/img/products/autobacs-t88.webp",
    href: "/products/tyre/autobacs-t88",
  },
];

export const promos = [
  {
    kicker: "ถึง 30 กันยายน 2569",
    title: "ซื้อยาง 4 เส้น ฟรีค่าติดตั้ง + ถ่วงล้อ",
    desc: "เฉพาะยางที่ร่วมรายการ จองคิวออนไลน์ล่วงหน้ารับสิทธิ์ทันที",
    big: "4",
    unit: "เส้น",
    tone: "dark" as const,
    href: "/promotions/free-fitting",
  },
  {
    kicker: "สิทธิ์สมาชิก",
    title: "สมาชิก PT Max Card Plus ลดเพิ่ม 5%",
    desc: "แสดงบัตรที่สาขา รับส่วนลดทันทีทุกใบเสร็จ",
    big: "5%",
    unit: "ส่วนลดสมาชิก",
    tone: "brand" as const,
    href: "/promotions/maxcard",
  },
  {
    kicker: "ทุกการเข้ารับบริการ",
    title: "เช็กระยะ 30 จุด ฟรี",
    desc: "ช่างตรวจสภาพรถให้ 30 จุด ไม่มีค่าใช้จ่าย ไม่ต้องนัดล่วงหน้า",
    big: "30",
    unit: "จุดตรวจ",
    tone: "light" as const,
    href: "/promotions/30-point-check",
  },
];

export const whyPoints = [
  {
    title: "ช่างผ่านการอบรมมาตรฐาน Autobacs ญี่ปุ่น",
    body: "ทุกสาขาใช้ขั้นตอนการทำงานชุดเดียวกันกับที่ญี่ปุ่น ตั้งแต่การตรวจสภาพยางเดิม แรงขันน็อตตามค่าที่ผู้ผลิตกำหนด ไปจนถึงการถ่วงล้อและตรวจซ้ำก่อนส่งมอบรถ",
  },
  {
    title: "เครื่องมือรุ่นเดียวกันทุกสาขา",
    body: "ไม่ว่าคุณเข้าสาขาไหน ผลลัพธ์ที่ได้เท่ากัน เพราะเราลงทุนเครื่องถ่วงล้อและตั้งศูนย์มาตรฐานเดียวกันทั้งเครือ ไม่ใช่แล้วแต่ช่างแต่ละร้าน",
  },
  {
    title: "รับประกันงานติดตั้งเป็นลายลักษณ์อักษร",
    body: "ถ้ามีปัญหาจากการติดตั้งภายในระยะประกัน กลับมาที่สาขาใดก็ได้ ไม่จำเป็นต้องกลับสาขาเดิมที่ติดตั้ง",
  },
  {
    title: "ความชำนาญเฉพาะรถญี่ปุ่น",
    body: "เราเริ่มต้นจากตลาดรถญี่ปุ่น จึงเข้าใจสเปกและจุดที่ต้องระวังเป็นพิเศษ รวมถึงบริการอย่าง Air Klean ที่ออกแบบมาสำหรับระบบแอร์ของรถกลุ่มนี้",
  },
];

export const brands = [
  { name: "MICHELIN", img: "/img/brands/michelin.png" },
  { name: "BRIDGESTONE", img: "/img/brands/bridgestone.png" },
  { name: "DUNLOP", img: "/img/brands/dunlop.png" },
  { name: "YOKOHAMA", img: "/img/brands/yokohama.png" },
  { name: "PIRELLI", img: "/img/brands/pirelli.png" },
  { name: "CONTINENTAL", img: "/img/brands/continental.png" },
  { name: "BFGOODRICH", img: "/img/brands/bfgoodrich.png" },
  { name: "DEESTONE", img: "/img/brands/deestone.png" },
];

export const branches = [
  {
    name: "ออโต้แบคส์ สาขาพระราม 2",
    address: "ถ.พระราม 2 แขวงแสมดำ เขตบางขุนเทียน กรุงเทพฯ 10150",
    rating: 4.8,
    reviews: 126,
    distance: "3.2 กม.",
    open: true,
    closes: "20:00",
    href: "/branch/rama-2",
  },
  {
    name: "ออโต้แบคส์ สาขาบางนา",
    address: "ถ.บางนา-ตราด กม.4 แขวงบางนาเหนือ เขตบางนา กรุงเทพฯ 10260",
    rating: 4.7,
    reviews: 208,
    distance: "8.6 กม.",
    open: true,
    closes: "20:00",
    href: "/branch/bangna",
  },
];

export const articles = [
  {
    title: "ยางหมดอายุกี่ปี ดูตรงไหนถึงจะรู้",
    meta: "อ่าน 4 นาที · ความรู้เรื่องยาง",
    img: "/img/photo/shop-2.jpg",
    href: "/blog/tyre-age",
  },
  {
    title: "ถ่วงล้อกับตั้งศูนย์ ต่างกันยังไง จำเป็นต้องทำทั้งคู่ไหม",
    meta: "อ่าน 6 นาที · ดูแลรักษา",
    img: "/img/photo/shop-3.jpg",
    href: "/blog/balancing-vs-alignment",
  },
  {
    title: "เลือกยาง EV ต่างจากยางรถน้ำมันตรงไหน",
    meta: "อ่าน 5 นาที · รถไฟฟ้า",
    img: "/img/photo/shop-1.jpg",
    href: "/blog/ev-tyres",
  },
];

export const faqs = [
  {
    q: "เปลี่ยนยางรถยนต์ 4 เส้น ราคาเท่าไหร่",
    a: "ราคาขึ้นกับยี่ห้อและขนาดยาง ยางขนาดยอดนิยมอย่าง 215/55R17 เริ่มต้นประมาณ 12,000–16,000 บาทต่อชุด 4 เส้น ราคาที่แสดงบนเว็บรวมค่าติดตั้ง ถ่วงล้อ จุ๊บลมใหม่ ค่ากำจัดยางเก่า และ VAT แล้ว ไม่มีค่าใช้จ่ายเพิ่มที่หน้าร้าน",
  },
  {
    q: "ยางหมดอายุกี่ปี",
    a: "โดยทั่วไปยางรถยนต์มีอายุใช้งานประมาณ 3–5 ปีนับจากวันผลิต แม้ดอกยางยังไม่หมด เพราะเนื้อยางจะแข็งตัวและเกาะถนนได้น้อยลง ดูวันผลิตได้จากรหัส 4 หลักบนแก้มยาง เช่น 2524 หมายถึงสัปดาห์ที่ 25 ปี 2024",
  },
  {
    q: "ต้องถ่วงล้อทุกครั้งที่เปลี่ยนยางไหม",
    a: "ต้องถ่วงทุกครั้ง เพราะยางเส้นใหม่มีการกระจายน้ำหนักไม่เท่ากันตามธรรมชาติ ถ้าไม่ถ่วงจะเกิดอาการสั่นที่พวงมาลัยเมื่อใช้ความเร็วสูง และทำให้ยางสึกไม่สม่ำเสมอ ค่าถ่วงล้อรวมอยู่ในราคายางที่แสดงบนเว็บแล้ว",
  },
  {
    q: "จองคิวออนไลน์แล้วต้องรอนานไหม",
    a: "คิวที่แสดงบนเว็บดึงจากระบบหน้าสาขาแบบเรียลไทม์ เวลาที่คุณเลือกคือเวลาที่ช่างว่างจริง เมื่อถึงสาขาแสดง QR ที่ได้รับทาง SMS หรือ LINE ได้เลย ไม่ต้องกรอกข้อมูลซ้ำ",
  },
  {
    q: "เปลี่ยนยางใช้เวลากี่นาที",
    a: "โดยเฉลี่ยประมาณ 45–60 นาทีสำหรับยาง 4 เส้น รวมถ่วงล้อและตรวจสอบก่อนส่งมอบรถ หากทำพร้อมบริการอื่นเช่นเช็กระยะ 30 จุด จะใช้เวลาเพิ่มอีกประมาณ 20 นาที",
  },
  {
    q: "รับบัตรเครดิตและผ่อน 0% ไหม",
    a: "รับบัตรเครดิตทุกธนาคาร พร้อมเพย์ และผ่อนชำระ 0% นาน 3–10 เดือนผ่านบัตรที่ร่วมรายการ ชำระออนไลน์ผ่าน PTG MaxPay หรือชำระที่สาขาก็ได้",
  },
  {
    q: "ยาง EV ต้องใช้ยางเฉพาะไหม",
    a: "แนะนำให้ใช้ยางที่ออกแบบมาสำหรับรถไฟฟ้าโดยเฉพาะ เพราะรถ EV หนักกว่ารถน้ำมันรุ่นเดียวกันและมีแรงบิดสูงตั้งแต่ออกตัว ยาง EV จึงเน้นโครงสร้างรับน้ำหนัก ความทนทานของดอกยาง และลดเสียงรบกวนเป็นพิเศษ",
  },
];

export const linkHub = [
  {
    heading: "ยางตามยี่ห้อ",
    links: ["MICHELIN", "BRIDGESTONE", "DUNLOP", "YOKOHAMA", "PIRELLI", "CONTINENTAL"],
    base: "/products/tyre/brand/",
  },
  {
    heading: "ยางตามขนาด",
    links: ["185/65R15", "195/65R15", "205/55R16", "215/55R17", "225/45R18", "265/65R17"],
    base: "/products/tyre/size/",
  },
  {
    heading: "ยางตามรุ่นรถ",
    links: ["Toyota Yaris", "Honda City", "Isuzu D-Max", "Toyota Fortuner", "Honda CR-V", "Mazda 2"],
    base: "/products/tyre/car/",
  },
  {
    heading: "สาขาตามจังหวัด",
    links: ["กรุงเทพฯ", "นนทบุรี", "ปทุมธานี", "ชลบุรี", "เชียงใหม่", "ขอนแก่น"],
    base: "/branch/province/",
  },
];

export const tyreWidths = ["165", "175", "185", "195", "205", "215", "225", "235", "245", "265"];
export const tyreSeries = ["45", "50", "55", "60", "65", "70"];
export const tyreRims = ["R14", "R15", "R16", "R17", "R18", "R19", "R20"];
