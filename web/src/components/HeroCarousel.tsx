"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Icon } from "./Icon";
import { HeroArt } from "./ui";

const INTERVAL = 7000;

/**
 * Home hero: rotating headline over the forest band. Only the visible slide is the h1;
 * the others keep their space (no layout jump) but are hidden from people and crawlers.
 * Rotation pauses on hover/focus, on the pause button, and under prefers-reduced-motion.
 */
export function HeroCarousel({ slides, labels, children, proof }: { slides: { title: string }[]; labels: { pause: string; play: string }; children: ReactNode; proof?: ReactNode }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (paused || hovered || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % slides.length), INTERVAL);
    return () => clearInterval(id);
  }, [slides.length, i, paused, hovered]);

  return (
    <section
      className="hero hero-home"
      aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
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
      <HeroArt />
    </section>
  );
}
