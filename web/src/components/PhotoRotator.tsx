"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { withBase } from "@/lib/i18n";

const INTERVAL = 5000;

export type RotatorPhoto = { src: string; alt: string; note?: string };

/**
 * One photo at a time, cross-fading through the set. Pauses on hover/focus and under
 * prefers-reduced-motion; the dots let people pick a photo themselves.
 */
export function PhotoRotator({ photos, height = 340, label }: { photos: RotatorPhoto[]; height?: number; label: string }) {
  const [i, setI] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % photos.length), INTERVAL);
    return () => clearInterval(id);
  }, [photos.length, i, hovered]);

  const active = photos[i];

  return (
    <div
      className="rotator ph--rounded"
      style={{ height }}
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      {photos.map((p, pi) => (
        <div key={p.src} className={`rotator__slide${pi === i ? " is-active" : ""}`} aria-hidden={pi !== i}>
          <Image src={withBase(p.src)} alt={p.alt} fill sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      ))}
      {active.note ? <span className="photo__note">{active.note}</span> : null}
      <div className="rotator__dots">
        {photos.map((p, pi) => (
          <button key={p.src} type="button" aria-label={p.alt} aria-current={pi === i} className={pi === i ? "is-active" : ""} onClick={() => setI(pi)} />
        ))}
      </div>
    </div>
  );
}
