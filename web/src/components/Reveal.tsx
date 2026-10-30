"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Fades and lifts its content into place the first time it scrolls into view. Static under prefers-reduced-motion. */
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Reduced motion is handled in CSS (.reveal stays visible), so only observe here.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${shown ? "is-shown" : ""} ${className}`}>
      {children}
    </div>
  );
}
