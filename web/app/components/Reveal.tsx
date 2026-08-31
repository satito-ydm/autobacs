"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll reveal. One shared IntersectionObserver for the whole page rather than
 * an animation library — the LCP budget does not have room for GSAP, and the
 * effect is a fade + 18px rise.
 *
 * Elements opt in with class "reveal"; `stagger` walks direct children and
 * offsets each one so grids arrive as a wave instead of a block.
 */
export function Reveal({
  children,
  stagger = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  stagger?: number;
  className?: string;
  as?: "div" | "section" | "ul" | "ol";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets: HTMLElement[] = stagger
      ? (Array.from(root.children) as HTMLElement[])
      : [root as HTMLElement];

    targets.forEach((el, i) => {
      el.classList.add("reveal");
      if (stagger) el.style.setProperty("--reveal-delay", `${i * stagger}ms`);
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [stagger]);

  return (
    // @ts-expect-error - polymorphic ref across the small set of tags above
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
