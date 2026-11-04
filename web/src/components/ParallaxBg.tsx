"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { withBase } from "@/lib/i18n";

/**
 * Section background photo that scrolls slower than the page (parallax). The layer is taller than its
 * section by `speed` × its height at each end and is shifted within that on scroll; still under
 * prefers-reduced-motion. Decorative.
 */
export function ParallaxBg({ src, className = "", speed = 0.18 }: { src: string; className?: string; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = ref.current;
    const section = layer?.parentElement;
    if (!layer || !section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      // -1 → 1 while the section crosses the viewport; the shift never exceeds the layer's overhang
      const travel = window.innerHeight / 2 + rect.height / 2;
      const progress = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - window.innerHeight / 2) / travel));
      const overhang = rect.height * speed;
      layer.style.transform = `translate3d(0, ${(-progress * overhang).toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`parallax-bg ${className}`} aria-hidden="true">
      <Image src={withBase(src)} alt="" fill sizes="100vw" />
    </div>
  );
}
