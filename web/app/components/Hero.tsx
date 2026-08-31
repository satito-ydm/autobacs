"use client";

import { useState } from "react";
import { Wheel, Chevron } from "./Art";
import { Button } from "./ui";
import { tyreWidths, tyreSeries, tyreRims } from "../data";

const TABS = [
  { id: "size", short: "ไซซ์ยาง", label: "ค้นจากขนาดยาง" },
  { id: "car", short: "รุ่นรถ", label: "ค้นจากรุ่นรถ" },
  { id: "plate", short: "ทะเบียน", label: "ค้นจากทะเบียน" },
] as const;

function Field({
  label,
  options,
  defaultValue,
}: {
  label: string;
  options: string[];
  defaultValue: string;
}) {
  const id = `f-${label}`;
  return (
    <div className="min-w-0 flex-1">
      <label htmlFor={id} className="mb-1.5 block t-label-s text-ink-2">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          defaultValue={defaultValue}
          className="w-full appearance-none rounded-[8px] border border-line bg-surface px-4 py-3 pr-9 t-body-m text-ink outline-none transition-colors duration-150 focus:border-brand focus:ring-1 focus:ring-brand"
        >
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <Chevron className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-ink-2" />
      </div>
    </div>
  );
}

function TextField({ label, placeholder }: { label: string; placeholder: string }) {
  const id = `t-${label}`;
  return (
    <div className="min-w-0 flex-1">
      <label htmlFor={id} className="mb-1.5 block t-label-s text-ink-2">
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        className="w-full rounded-[8px] border border-line bg-surface px-4 py-3 t-body-m text-ink outline-none transition-colors duration-150 placeholder:text-ink-3 focus:border-brand focus:ring-1 focus:ring-brand"
      />
    </div>
  );
}

export function Hero() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("size");

  return (
    <section className="dark tread relative overflow-hidden bg-surface py-14 md:py-28">
      {/* Drawn wheel + glow. Decorative only; the LCP element is the H1 text. */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 hidden size-[620px] md:block"
        aria-hidden
      >
        <div className="absolute inset-[-8%] rounded-full bg-[radial-gradient(circle,rgba(243,111,33,0.30)_0%,rgba(243,111,33,0.07)_55%,transparent_72%)]" />
        <Wheel className="absolute inset-0 size-full" />
      </div>
      <div
        className="pointer-events-none absolute -right-20 -top-28 size-[330px] opacity-50 md:hidden"
        aria-hidden
      >
        <div className="absolute inset-[-10%] rounded-full bg-[radial-gradient(circle,rgba(243,111,33,0.28)_0%,rgba(243,111,33,0.06)_55%,transparent_72%)]" />
        <Wheel className="absolute inset-0 size-full" />
      </div>

      <div className="shell relative grid gap-10 lg:grid-cols-[1fr_500px] lg:items-center lg:gap-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-3 py-1.5 t-eyebrow text-ink-brand">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden />
            มาตรฐานญี่ปุ่น · 60+ สาขา
          </span>
          {/* Thai has no inter-word spaces, so Chrome will break inside a word
              (ติดตั้ง -> ติด / ตั้ง). Pin each phrase so breaks land on the
              spaces we actually wrote. */}
          <h1 className="mt-6 t-display-xl text-ink">
            <span className="whitespace-nowrap">เปลี่ยนยางรถยนต์</span>{" "}
            <span className="whitespace-nowrap">
              ราคา<span className="text-ink-brand">รวมติดตั้ง</span>
            </span>{" "}
            <span className="whitespace-nowrap">จองคิวออนไลน์</span>
          </h1>
          <p className="mt-6 max-w-lg t-body-l text-ink-2">
            เลือกยางจากไซซ์ รุ่นรถ หรือทะเบียน แล้วจองคิวที่สาขาใกล้คุณได้ทันที
            เห็นคิวว่างจริงและราคาที่รวมทุกอย่างก่อนตัดสินใจ
          </p>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-6">
            {[
              ["60+", "สาขาทั่วประเทศ"],
              ["4.8", "คะแนนเฉลี่ยบน Google"],
              ["45 นาที", "เปลี่ยนยางเสร็จ 4 เส้น"],
            ].map(([n, label]) => (
              <div key={label}>
                <dt className="t-num-l text-ink">{n}</dt>
                <dd className="mt-0.5 t-label-s text-ink-2">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Light island on the dark band */}
        <div className="light rounded-[16px] bg-surface p-5 shadow-[0_24px_64px_-12px_rgba(0,0,0,0.65)] ring-1 ring-white/10 md:p-8">
          <div role="tablist" aria-label="วิธีค้นหายาง" className="flex border-b border-line">
            {TABS.map((t) => {
              const active = tab === t.id;
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setTab(t.id)}
                  className={`flex-1 px-2 pb-3 pt-1 t-label-m transition-colors duration-150 ease-out md:t-label-l ${
                    active
                      ? "border-b-[3px] border-brand font-semibold text-ink"
                      : "border-b-[3px] border-transparent text-ink-3 hover:text-ink-2"
                  }`}
                >
                  <span className="md:hidden">{t.short}</span>
                  <span className="hidden md:inline">{t.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-5 flex gap-3">
            {tab === "size" && (
              <>
                <Field label="ความกว้าง" options={tyreWidths} defaultValue="215" />
                <Field label="ซีรีส์" options={tyreSeries} defaultValue="55" />
                <Field label="ขอบล้อ" options={tyreRims} defaultValue="R17" />
              </>
            )}
            {tab === "car" && (
              <>
                <Field label="ยี่ห้อ" options={["Toyota", "Honda", "Isuzu", "Mazda", "Nissan", "Mitsubishi"]} defaultValue="Toyota" />
                <Field label="รุ่น" options={["Yaris", "Vios", "Altis", "Fortuner", "Hilux Revo"]} defaultValue="Fortuner" />
                <Field label="ปี" options={["2026", "2025", "2024", "2023", "2022", "2021"]} defaultValue="2024" />
              </>
            )}
            {tab === "plate" && (
              <>
                <TextField label="เลขทะเบียน" placeholder="กก 1234" />
                <Field label="จังหวัด" options={["กรุงเทพมหานคร", "นนทบุรี", "ปทุมธานี", "ชลบุรี", "เชียงใหม่"]} defaultValue="กรุงเทพมหานคร" />
              </>
            )}
          </div>

          <Button size="lg" className="mt-5 w-full">
            ค้นหายางที่ใช่
          </Button>
          <p className="mt-3 t-body-s text-ink-3">
            ไม่รู้ไซซ์ยาง? ดูที่แก้มยางด้านข้าง เช่น 215/55R17
          </p>
        </div>
      </div>
    </section>
  );
}
