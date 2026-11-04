"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { withBase } from "@/lib/i18n";

/**
 * Background photos that cross-fade slowly, one after another. `offset` staggers neighbouring cards so
 * they don't all change at once. Holds still under prefers-reduced-motion. Decorative: no alt text.
 */
export function SlowFade({ photos, interval = 6000, offset = 0, sizes = "33vw" }: { photos: string[]; interval?: number; offset?: number; sizes?: string }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (photos.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let id: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      setI((n) => (n + 1) % photos.length);
      id = setInterval(() => setI((n) => (n + 1) % photos.length), interval);
    }, interval + offset);
    return () => {
      clearTimeout(start);
      if (id) clearInterval(id);
    };
  }, [photos.length, interval, offset]);

  return (
    <div className="slow-fade" aria-hidden="true">
      {photos.map((src, pi) => (
        <div key={src} className={`slow-fade__slide${pi === i ? " is-active" : ""}`}>
          <Image src={withBase(src)} alt="" fill sizes={sizes} />
        </div>
      ))}
    </div>
  );
}
