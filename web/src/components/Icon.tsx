/* Inline 24×24 stroke icons (1.6px, round caps), ported from the design system's
   ICON_PATHS and extended with a few Lucide-style shapes. currentColor by default. */
const PATHS = {
  phone: "M6.6 10.8c1.5 3 3.9 5.4 6.9 6.9l2.3-2.3c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.6 22 2 13.4 2 3c0-.6.4-1 1-1h3.3c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z",
  "arrow-up": "M12 19V5M5 12l7-7 7 7",
  "arrow-right": "M5 12h14M13 5l7 7-7 7",
  "message-circle": "M21 11.5a8.4 8.4 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.4 8.4 0 0 1 12.5 3a8.5 8.5 0 0 1 8.5 8.5z",
  lock: "M8 10V7a4 4 0 0 1 8 0v3M5 10h14v10H5z",
  check: "M4 12l5 5L20 6",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 3",
  "map-pin": "M12 22s7-7.2 7-12.5A7 7 0 0 0 5 9.5C5 14.8 12 22 12 22zM12 11.8a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6z",
  info: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v6M12 7.8h.01",
  "badge-check": "M12 2l2.4 1.4 2.7-.3 1 2.5 2.5 1-.3 2.7L22 12l-1.4 2.4.3 2.7-2.5 1-1 2.5-2.7-.3L12 22l-2.4-1.4-2.7.3-1-2.5-2.5-1 .3-2.7L2 12l1.4-2.4-.3-2.7 2.5-1 1-2.5 2.7.3L12 2zM9 12l2 2 4-4",
  "file-check": "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 2v6h6M9 15l2 2 4-4",
  ruler: "M2 9h20v6H2zM6 9v3M10 9v3M14 9v3M18 9v3",
  wrench: "M14.7 6.3a4 4 0 1 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2.5-2.5z",
  "monitor-dot": "M2 4h20v14H2zM8 21h8M12 18v3",
  "clipboard-list": "M9 2h6a1 1 0 0 1 1 1v2H8V3a1 1 0 0 1 1-1zM6 4h12v17H6zM9 11h6M9 15h6M9 8h3",
  "package-check": "M21 8l-9-5-9 5 9 5 9-5zM3 8v9l9 5 9-5V8M12 13v9",
  "refresh-cw": "M21 12a9 9 0 1 1-3-6.7M21 4v5h-5",
  external: "M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5",
  menu: "M4 7h16M4 12h16M4 17h16",
  x: "M6 6l12 12M18 6L6 18",
  mail: "M3 5h18v14H3zM3 6l9 7 9-7",
  scan: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2 12h2M20 12h2",
  magnet: "M6 3v9a6 6 0 0 0 12 0V3h-4v9a2 2 0 0 1-4 0V3zM6 7h4M14 7h4",
  activity: "M3 12h4l3-8 4 16 3-8h4",
  "x-ray": "M4 4h16v16H4zM12 7v10M9 9h6M8.5 12h7M9 15h6",
  users: "M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM20 20v-1.5a3.5 3.5 0 0 0-2.5-3.4M15.5 4.2a3.5 3.5 0 0 1 0 6.6",
  building: "M4 21V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v17M15 9h4a1 1 0 0 1 1 1v11M2 21h20M8 7h3M8 11h3M8 15h3",
  handshake: "M11 17l2 2a1.4 1.4 0 0 0 2-2M13 15l2.5 2.5a1.4 1.4 0 0 0 2-2l-3-3M2 12l5-5 4 1 3-2 3 1 5 5M7 14l2 2a1.4 1.4 0 0 0 2-2l-2-2",
  calendar: "M4 6h16v15H4zM4 10h16M8 3v4M16 3v4",
  shield: "M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10zM9 12l2 2 4-4",
  pause: "M9 5v14M15 5v14",
  play: "M7 5l12 7-12 7z",
  "check-circle": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8 12l3 3 5-6",
} as const;

const FILLED = {
  facebook: "M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z",
} as const;

export type IconName = keyof typeof PATHS | keyof typeof FILLED;

export function Icon({ name, size = 24, title, className }: { name: IconName; size?: number; title?: string; className?: string }) {
  const filled = name in FILLED ? FILLED[name as keyof typeof FILLED] : null;
  const d = filled ?? PATHS[name as keyof typeof PATHS];
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={{ flex: "0 0 auto", display: "inline-block" }}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {filled ? (
        <path d={d} fill="currentColor" />
      ) : (
        <path d={d} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}
