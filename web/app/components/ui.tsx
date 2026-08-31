import Link from "next/link";
import type { ReactNode } from "react";
import { Star } from "./Art";
import type { SlotState, Stock } from "../data";

/* --- Button -------------------------------------------------------------
   Primary uses brand orange with ink label (5.89:1). White on orange would
   be 2.95:1 and fail WCAG AA, so it is deliberately not an option here.
   ---------------------------------------------------------------------- */
const BTN_BASE =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-[8px] font-medium transition-[background-color,box-shadow,transform,border-color] duration-200 ease-out disabled:pointer-events-none disabled:opacity-60";
const BTN_VARIANT = {
  primary:
    "bg-brand text-on-brand shadow-[var(--shadow-brand)] hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-surface text-ink border border-line-strong shadow-[var(--shadow-xs)] hover:bg-subtle hover:border-line-brand",
  ghost: "text-ink-brand hover:bg-brand-subtle",
} as const;
const BTN_SIZE = {
  lg: "px-6 py-4 t-label-l",
  md: "px-5 py-3 t-label-m",
  sm: "px-4 py-2 t-label-s",
} as const;

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type,
}: {
  children: ReactNode;
  href?: string;
  variant?: keyof typeof BTN_VARIANT;
  size?: keyof typeof BTN_SIZE;
  className?: string;
  type?: "button" | "submit";
}) {
  const cls = `${BTN_BASE} ${BTN_VARIANT[variant]} ${BTN_SIZE[size]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} className={cls}>
      {children}
    </button>
  );
}

/* --- Badge — status never relies on colour alone: dot + label ----------- */
const STOCK_STYLE: Record<Stock, { cls: string; label: string }> = {
  in: { cls: "bg-stock-in-bg text-stock-in", label: "มีสินค้าที่สาขา" },
  low: { cls: "bg-stock-low-bg text-stock-low", label: "เหลือน้อย" },
  out: { cls: "bg-stock-out-bg text-stock-out", label: "สินค้าหมด" },
};

export function StockBadge({ stock }: { stock: Stock }) {
  const s = STOCK_STYLE[stock];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 t-label-s ${s.cls}`}>
      <span className="size-2 rounded-full bg-current" aria-hidden />
      {s.label}
    </span>
  );
}

export function Badge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 t-label-s ${className}`}>
      <span className="size-2 rounded-full bg-current" aria-hidden />
      {children}
    </span>
  );
}

/* --- Booking slot ------------------------------------------------------- */
const SLOT_STYLE: Record<SlotState, string> = {
  open: "bg-slot-open-bg text-slot-open hover:ring-2 hover:ring-brand cursor-pointer",
  full: "bg-slot-full-bg text-slot-full cursor-not-allowed",
  closed: "bg-muted text-slot-closed cursor-not-allowed",
};
const SLOT_LABEL: Record<SlotState, string> = {
  open: "ว่าง",
  full: "เต็ม",
  closed: "ปิด",
};

export function SlotChip({ time, state }: { time: string; state: SlotState }) {
  return (
    <button
      type="button"
      disabled={state !== "open"}
      aria-label={`${time} ${SLOT_LABEL[state]}`}
      className={`rounded-[8px] px-4 py-2 t-num-m transition-shadow duration-150 ease-out ${SLOT_STYLE[state]}`}
    >
      {time}
    </button>
  );
}

/* --- Rating (Google Business Profile) ----------------------------------- */
export function Rating({ score, reviews }: { score: number; reviews: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5 text-stock-low" aria-hidden>
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className="size-4" />
        ))}
      </div>
      <span className="t-label-m text-ink">{score.toFixed(1)}</span>
      <span className="t-label-s text-ink-3">({reviews} รีวิว)</span>
      <span className="sr-only">คะแนน {score} จาก 5 จาก {reviews} รีวิว</span>
    </div>
  );
}

/* --- Section scaffolding ------------------------------------------------ */
export function Section({
  id,
  children,
  tone = "surface",
  texture = false,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  tone?: "surface" | "subtle" | "dark" | "brand";
  texture?: boolean;
  className?: string;
}) {
  const tones = {
    surface: "bg-surface",
    subtle: "bg-subtle",
    dark: "dark bg-surface",
    brand: "bg-brand-subtle",
  } as const;
  const tex = texture ? (tone === "dark" ? "tread" : "grid-faint") : "";
  return (
    <section id={id} className={`relative ${tones[tone]} ${tex} py-16 md:py-24 ${className}`}>
      <div className="shell relative">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  action,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-5 md:mb-14">
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="mb-3 flex items-center gap-2.5 t-eyebrow text-ink-brand">
            <span className="h-px w-8 bg-brand" aria-hidden />
            {eyebrow}
          </p>
        )}
        <h2 className="t-heading-xl text-ink">{title}</h2>
        {lead && <p className="mt-3 t-body-m text-ink-2">{lead}</p>}
      </div>
      {action && (
        <Button href={action.href} variant="ghost" size="md">
          {action.label} →
        </Button>
      )}
    </div>
  );
}

export function Rule({ className = "" }: { className?: string }) {
  return <span className={`block h-1 w-14 rounded-full bg-brand ${className}`} aria-hidden />;
}
