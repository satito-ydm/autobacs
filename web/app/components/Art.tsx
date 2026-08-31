/** Drawn artwork — wheel, tread motif and map. Decorative, so aria-hidden. */

export function Wheel({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 520" className={className} aria-hidden fill="none">
      <circle cx="260" cy="260" r="250" fill="#121110" />
      <circle cx="260" cy="260" r="224" stroke="#0B0A09" strokeWidth="36" strokeDasharray="26 17" />
      <circle cx="260" cy="260" r="243" stroke="#2C2925" strokeWidth="3" />
      <circle cx="260" cy="260" r="200" stroke="#221F1C" strokeWidth="3" />
      <circle cx="260" cy="260" r="188" fill="#1A1917" />
      <circle cx="260" cy="260" r="152" fill="#E8E6E3" />
      <circle cx="260" cy="260" r="152" stroke="#A8A29B" strokeWidth="3" />
      <path d="M260 210V120" stroke="#C9C5BF" strokeWidth="24" strokeLinecap="round" />
      <path d="M307.6 244.5L393.1 216.7" stroke="#C9C5BF" strokeWidth="24" strokeLinecap="round" />
      <path d="M289.4 300.5L342.3 373.3" stroke="#C9C5BF" strokeWidth="24" strokeLinecap="round" />
      <path d="M230.6 300.5L177.7 373.3" stroke="#C9C5BF" strokeWidth="24" strokeLinecap="round" />
      <path d="M212.4 275.5L126.9 303.3" stroke="#C9C5BF" strokeWidth="24" strokeLinecap="round" />
      <circle cx="260" cy="260" r="46" fill="#D6D3CE" stroke="#A8A29B" strokeWidth="3" />
      <circle cx="260" cy="260" r="17" fill="#F36F21" />
      <path d="M260 12a248 248 0 0 1 175 73" stroke="#F36F21" strokeOpacity="0.55" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function TreadMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 200" className={className} aria-hidden fill="none">
      {[10, 66, 122, 178, 234, 290].map((x) => (
        <g key={x}>
          <rect x={x} y="10" width="40" height="180" rx="6" fill="#0E0D0C" />
          <path d={`M${x + 10} 40h20`} stroke="#F36F21" strokeOpacity="0.5" strokeWidth="4" strokeLinecap="round" />
          <path d={`M${x + 10} 100h20`} stroke="#3A3631" strokeWidth="4" strokeLinecap="round" />
          <path d={`M${x + 10} 160h20`} stroke="#3A3631" strokeWidth="4" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}

function Pin({ x, y, active }: { x: number; y: number; active?: boolean }) {
  return (
    <g>
      <path
        d={`M${x} ${y}c0 0 -16 -16 -16 -26a16 16 0 1 1 32 0c0 10 -16 26 -16 26Z`}
        fill={active ? "#F36F21" : "#5C574F"}
      />
      <circle cx={x} cy={y - 26} r="6" fill="#fff" />
    </g>
  );
}

export function MapArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 860 420" className={className} aria-hidden fill="none" preserveAspectRatio="xMidYMid slice">
      <rect width="860" height="420" fill="#F5F4F2" />
      {[
        [40, 30, 150, 90], [250, 30, 200, 70], [520, 40, 120, 110], [700, 30, 130, 80],
        [60, 200, 180, 120], [300, 190, 160, 90], [520, 230, 200, 120], [120, 360, 240, 60],
      ].map(([x, y, w, h]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} rx="8" fill="#E8E6E3" />
      ))}
      <path d="M0 160H860M0 340H860" stroke="#fff" strokeWidth="22" />
      <path d="M220 0V420M480 0V420M680 0V420" stroke="#fff" strokeWidth="18" />
      <path d="M0 160H860M0 340H860" stroke="#D6D3CE" strokeWidth="1" />
      <path d="M220 0V420M480 0V420M680 0V420" stroke="#D6D3CE" strokeWidth="1" />
      <path d="M-10 250C120 250 180 120 320 120S560 300 870 240" stroke="#C9C5BF" strokeWidth="10" strokeLinecap="round" />
      <Pin x={220} y={160} active />
      <Pin x={480} y={340} />
      <Pin x={680} y={120} />
    </svg>
  );
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden fill="currentColor">
      <path d="M8 1.5l1.95 4.15 4.55.62-3.3 3.2.78 4.53L8 11.85 3.02 14l.78-4.53-3.3-3.2 4.55-.62L8 1.5Z" />
    </svg>
  );
}

export function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden fill="none">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden fill="none">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.7" />
      <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

/* --- Category / service icons — currentColor, 28px grid ---------------- */
const S = (props: { className?: string; children: React.ReactNode }) => (
  <svg viewBox="0 0 28 28" className={props.className} aria-hidden fill="none" stroke="currentColor" strokeWidth="2">
    {props.children}
  </svg>
);

export const CategoryIcon = {
  tyre: (c?: string) => (
    <S className={c}>
      <circle cx="14" cy="14" r="11" />
      <circle cx="14" cy="14" r="4.5" />
      <path d="M14 3v4.5M14 20.5V25M3 14h4.5M20.5 14H25" strokeLinecap="round" />
    </S>
  ),
  shock: (c?: string) => (
    <S className={c}>
      <path d="M14 2.5v4M14 21.5v4" strokeLinecap="round" />
      <rect x="9" y="6.5" width="10" height="15" rx="1.5" />
      <path d="M9 11h10M9 14h10M9 17h10" />
    </S>
  ),
  brake: (c?: string) => (
    <S className={c}>
      <circle cx="14" cy="14" r="10.5" />
      <circle cx="14" cy="14" r="3" />
      <path d="M14 3.5v3M14 21.5v3M3.5 14h3M21.5 14h3" strokeLinecap="round" />
    </S>
  ),
  oil: (c?: string) => (
    <S className={c}>
      <path d="M14 3.5C14 3.5 6.5 12 6.5 17a7.5 7.5 0 0 0 15 0C21.5 12 14 3.5 14 3.5Z" strokeLinejoin="round" />
    </S>
  ),
  battery: (c?: string) => (
    <S className={c}>
      <rect x="3.5" y="8" width="18" height="12" rx="2" />
      <path d="M24.5 12.5v3M8.5 14h3M10 12.5v3M16 14h3" strokeLinecap="round" />
    </S>
  ),
  more: (c?: string) => (
    <svg viewBox="0 0 28 28" className={c} aria-hidden fill="currentColor">
      <circle cx="6.5" cy="14" r="2.2" />
      <circle cx="14" cy="14" r="2.2" />
      <circle cx="21.5" cy="14" r="2.2" />
    </svg>
  ),
  air: (c?: string) => (
    <S className={c}>
      <path d="M3.5 10h12a3.5 3.5 0 1 0-3.5-3.5" strokeLinecap="round" />
      <path d="M3.5 15.5h16a3.5 3.5 0 1 1-3.5 3.5" strokeLinecap="round" />
    </S>
  ),
  rotate: (c?: string) => (
    <S className={c}>
      <path d="M23 14a9 9 0 1 1-2.6-6.3" strokeLinecap="round" />
      <path d="M23 4v5h-5" strokeLinecap="round" strokeLinejoin="round" />
    </S>
  ),
  nitrogen: (c?: string) => (
    <S className={c}>
      <circle cx="14" cy="14" r="10.5" />
      <path d="M10 18V10l8 8v-8" strokeLinecap="round" strokeLinejoin="round" />
    </S>
  ),
} as const;

export type CategoryIconName = keyof typeof CategoryIcon;

export function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden fill="none">
      <path d="M10 18s6-5.4 6-9.2A6 6 0 0 0 4 8.8C4 12.6 10 18 10 18Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="10" cy="8.6" r="2.1" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
