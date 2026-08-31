import Link from "next/link";
import { SearchIcon, PinIcon, Chevron } from "./Art";

const NAV = [
  { label: "สินค้า", href: "/products" },
  { label: "บริการ", href: "/services" },
  { label: "จองคิว", href: "#booking" },
  { label: "โปรโมชั่น", href: "/promotions" },
  { label: "สาขา", href: "#branches" },
  { label: "สาระเรื่องรถ", href: "/blog" },
  { label: "เกี่ยวกับเรา", href: "/about" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
      <div className="shell flex items-center gap-4 py-3 md:gap-8 md:py-4">
        <Link href="/" className="shrink-0" aria-label="Autobacs Thailand หน้าแรก">
          {/* Plain img: next/image does not optimise SVG, and it warns when CSS
              controls only one axis. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/logo.svg" alt="Autobacs" width={132} height={32} className="h-7 w-auto md:h-8" />
        </Link>

        <nav aria-label="เมนูหลัก" className="hidden xl:block">
          <ul className="flex items-center gap-6">
            {NAV.map((n) => (
              <li key={n.label}>
                <Link href={n.href} className="t-label-m text-ink transition-colors duration-150 hover:text-ink-brand">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <form action="/search" role="search" className="ml-auto hidden min-w-0 flex-1 md:block xl:max-w-sm">
          <label htmlFor="site-search" className="sr-only">
            ค้นหาสินค้า บริการ สาขา หรือบทความ
          </label>
          <div className="flex items-center gap-2 rounded-[8px] border border-line bg-surface px-4 py-2.5 focus-within:border-brand">
            <SearchIcon className="size-5 shrink-0 text-ink-3" />
            <input
              id="site-search"
              name="q"
              type="search"
              placeholder="ค้นหาสินค้า บริการ สาขา หรือบทความ"
              className="min-w-0 flex-1 bg-transparent t-body-s text-ink outline-none placeholder:text-ink-3"
            />
          </div>
        </form>

        <div className="ml-auto flex items-center gap-4 md:ml-0">
          <Link href="#branches" className="hidden items-center gap-1.5 t-label-s text-ink-2 hover:text-ink-brand lg:flex">
            <PinIcon className="size-4" />
            สาขาใกล้คุณ
          </Link>
          <a href="tel:1234" className="hidden t-label-s text-ink-2 hover:text-ink-brand lg:block">
            โทร 1234
          </a>
          <Link href="/en" className="t-label-s text-ink-2 hover:text-ink-brand" hrefLang="en">
            EN
          </Link>
          <a
            href="https://www.ptmaxcard.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-line-strong px-3 py-1.5 t-label-s text-ink transition-colors duration-150 hover:border-brand hover:text-ink-brand lg:block"
          >
            PT Max Card ↗
          </a>

          {/* Mobile menu — CSS-only, no JS cost against the LCP budget */}
          <details className="group xl:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-1 t-label-m text-ink [&::-webkit-details-marker]:hidden">
              เมนู
              <Chevron className="size-4 transition-transform duration-150 group-open:rotate-180" />
            </summary>
            <nav
              aria-label="เมนูหลัก (มือถือ)"
              className="absolute inset-x-0 top-full border-b border-line bg-surface p-4 shadow-lg"
            >
              <form action="/search" role="search" className="mb-3 md:hidden">
                <label htmlFor="site-search-m" className="sr-only">
                  ค้นหา
                </label>
                <div className="flex items-center gap-2 rounded-[8px] border border-line px-4 py-2.5">
                  <SearchIcon className="size-5 text-ink-3" />
                  <input
                    id="site-search-m"
                    name="q"
                    type="search"
                    placeholder="ค้นหาสินค้า บริการ สาขา บทความ"
                    className="min-w-0 flex-1 bg-transparent t-body-s outline-none placeholder:text-ink-3"
                  />
                </div>
              </form>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                {NAV.map((n) => (
                  <li key={n.label}>
                    <Link href={n.href} className="block py-2 t-label-m text-ink">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
