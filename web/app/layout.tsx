import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

const plex = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-plex-thai",
});

const SITE = "https://www.autobacs.co.th";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "เปลี่ยนยางรถยนต์ ราคารวมติดตั้ง จองคิวออนไลน์ | Autobacs Thailand",
    template: "%s | Autobacs Thailand",
  },
  description:
    "ศูนย์บริการรถยนต์ครบวงจรมาตรฐานญี่ปุ่น เปลี่ยนยาง เช็กระยะ เปลี่ยนแบตเตอรี่ ราคารวมค่าติดตั้ง ถ่วงล้อ และ VAT จองคิวออนไลน์ที่สาขาใกล้คุณ 60+ สาขาทั่วประเทศ",
  keywords: [
    "เปลี่ยนยางรถยนต์",
    "ราคายางรถยนต์",
    "ร้านยางใกล้ฉัน",
    "จองคิวเปลี่ยนยาง",
    "ศูนย์บริการรถยนต์",
    "Autobacs",
  ],
  alternates: { canonical: "/", languages: { "th-TH": "/", "en-US": "/en" } },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: SITE,
    siteName: "Autobacs Thailand",
    title: "เปลี่ยนยางรถยนต์ ราคารวมติดตั้ง จองคิวออนไลน์ | Autobacs Thailand",
    description:
      "ค้นยางจากไซซ์ รุ่นรถ หรือทะเบียน เห็นคิวว่างจริงที่สาขา และราคาที่รวมทุกอย่างก่อนตัดสินใจ",
  },
  robots: { index: true, follow: true },
};

/** Structured data — Organization, WebSite+SearchAction, LocalBusiness, FAQ (BR-03) */
function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE}/#organization`,
        name: "Autobacs Thailand",
        url: SITE,
        logo: `${SITE}/img/logo.svg`,
        telephone: "+66-2-000-1234",
        parentOrganization: { "@type": "Organization", name: "PTG Energy" },
        sameAs: [
          "https://www.facebook.com/autobacsthailand",
          "https://www.tiktok.com/@autobacsthailand",
          "https://www.youtube.com/@autobacsthailand",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: "Autobacs Thailand",
        inLanguage: "th-TH",
        publisher: { "@id": `${SITE}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: { "@type": "EntryPoint", urlTemplate: `${SITE}/search?q={search_term_string}` },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "AutoRepair",
        "@id": `${SITE}/branch/rama2/#localbusiness`,
        name: "ออโต้แบคส์ สาขาพระราม 2",
        image: `${SITE}/img/photo/shop-1.jpg`,
        address: {
          "@type": "PostalAddress",
          streetAddress: "ถ.พระราม 2 แขวงแสมดำ เขตบางขุนเทียน",
          addressLocality: "กรุงเทพมหานคร",
          postalCode: "10150",
          addressCountry: "TH",
        },
        geo: { "@type": "GeoCoordinates", latitude: 13.6455, longitude: 100.4212 },
        openingHours: "Mo-Su 08:00-20:00",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "126" },
        parentOrganization: { "@id": `${SITE}/#organization` },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={plex.variable}>
      <body className="font-sans bg-surface text-ink antialiased">
        <StructuredData />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-on-brand t-label-m"
        >
          ข้ามไปเนื้อหาหลัก
        </a>
        {children}
      </body>
    </html>
  );
}
