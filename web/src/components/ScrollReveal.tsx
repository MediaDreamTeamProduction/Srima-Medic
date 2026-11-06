"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Blocks that fade up as a whole: each direct child of a section's container. */
const BLOCKS = "main section > .container > *, .disclaimer__panel";
/** Rows of cards: the cards fade up one after another instead of the row as one block. */
const GROUPS = [
  ".product-cards",
  ".service-row",
  ".awards",
  ".article-cards",
  ".event-cards",
  ".group-cards",
  ".leaders",
  ".journey",
  ".process",
  ".region-grid",
  ".faq",
  ".grid",
  ".figures",
  ".partnership__facts",
  ".office",
  ".testimonials__cards",
].join(", ");
/** Parts that already animate on their own, or sit in the first screen (heroes). */
const SKIP = ".hero, .hero-home, .page-hero, .intro-b, .install-map, .services-quote, .reveal";
const STAGGER_MS = 90;
const DURATION_MS = 700;

/**
 * Site-wide scroll-in: content fades and rises about 24px as it reaches the viewport, cards in a row one
 * after another. Runs once per page view, leaves what is already on screen alone, and does nothing under
 * prefers-reduced-motion or without JS (the page is fully visible by default).
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets: HTMLElement[] = [];
    const add = (el: HTMLElement, delay = 0) => {
      if (el.closest(SKIP) || targets.includes(el)) return;
      // Already in view on arrival: show it as it is rather than flash it out and back in
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
      el.style.setProperty("--sr-delay", `${delay}ms`);
      el.classList.add("sr");
      targets.push(el);
    };

    document.querySelectorAll<HTMLElement>(BLOCKS).forEach((el) => {
      // A row of cards staggers its cards; any other block (which may hold a row) rises as one
      if (el.matches(GROUPS)) {
        Array.from(el.children).forEach((child, i) => add(child as HTMLElement, Math.min(i, 6) * STAGGER_MS));
      } else {
        add(el);
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          io.unobserve(el);
          el.classList.add("sr-in");
          // Hand the element back to its own hover/transition styles once it has arrived
          const delay = parseFloat(el.style.getPropertyValue("--sr-delay")) || 0;
          window.setTimeout(() => {
            el.classList.remove("sr", "sr-in");
            el.style.removeProperty("--sr-delay");
          }, DURATION_MS + delay + 50);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    targets.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      targets.forEach((el) => {
        el.classList.remove("sr", "sr-in");
        el.style.removeProperty("--sr-delay");
      });
    };
  }, [pathname]);

  return null;
}
