"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { withBase } from "@/lib/i18n";
import { Icon } from "./Icon";

const INTERVAL = 7000;

export type HeroSlide = {
  title: string;
  /** Background photo. */
  image: string;
  /** Pending-photo chip text for AI stand-ins; omit for real photos. */
  note?: string;
  /** Optional mark shown over the photo, e.g. the Philips logo on the partnership slide. */
  badge?: ReactNode;
};

/**
 * Home hero: rotating headline over a full-bleed photo per slide. Only the visible slide is the h1;
 * the others keep their space (no layout jump) but are hidden from people and crawlers.
 * Rotation pauses on hover/focus, on the pause button, and under prefers-reduced-motion.
 */
export function HeroCarousel({ slides, labels, children, proof }: { slides: HeroSlide[]; labels: { pause: string; play: string }; children: ReactNode; proof?: ReactNode }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (paused || hovered || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % slides.length), INTERVAL);
    return () => clearInterval(id);
  }, [slides.length, i, paused, hovered]);

  const active = slides[i];

  return (
    <section
      className="hero hero-home"
      aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <div className="hero-bg" aria-hidden="true">
        {slides.map((s, si) => (
          <div key={si} className={`hero-bg__slide${si === i ? " is-active" : ""}`}>
            <Image src={withBase(s.image)} alt="" fill sizes="100vw" priority={si === 0} />
          </div>
        ))}
      </div>
      {active.badge ? <div className="hero-badge">{active.badge}</div> : null}
      {active.note ? <span className="photo__note hero-note">{active.note}</span> : null}

      <div className="hero__inner">
        <div className="hero-slides" aria-live={paused ? "polite" : "off"}>
          {slides.map((s, si) =>
            si === i ? (
              <h1 key={si} className="hero__title is-active">
                {s.title}
              </h1>
            ) : (
              <div key={si} className="hero__title" aria-hidden="true">
                {s.title}
              </div>
            ),
          )}
        </div>
        {children}
        <div className="hero-controls">
          <button type="button" aria-label={paused ? labels.play : labels.pause} aria-pressed={paused} onClick={() => setPaused((p) => !p)}>
            <Icon name={paused ? "play" : "pause"} size={16} />
          </button>
          {slides.map((s, si) => (
            <button key={si} type="button" className="hero-dot" aria-label={s.title} aria-current={si === i} onClick={() => setI(si)} />
          ))}
        </div>
        {proof ? <div className="hero-proof">{proof}</div> : null}
      </div>
    </section>
  );
}
