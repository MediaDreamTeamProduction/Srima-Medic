import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { withBase } from "@/lib/i18n";
import { Icon, type IconName } from "./Icon";

export function Section({ alt, className = "", id, children, style }: { alt?: boolean; className?: string; id?: string; children: ReactNode; style?: CSSProperties }) {
  return (
    <section id={id} className={`section ${alt ? "section--alt" : ""} ${className}`} style={style}>
      <div className="container">{children}</div>
    </section>
  );
}

/** Responsive auto-fit grid. */
export function Grid({ min = 280, gap = 20, children, style }: { min?: number; gap?: number; children: ReactNode; style?: CSSProperties }) {
  return (
    <div className="grid" style={{ "--min": `${min}px`, "--gap": `${gap}px`, ...style } as CSSProperties}>
      {children}
    </div>
  );
}

type BadgeTone = "region" | "brand" | "sky" | "success";
export function Badge({ tone = "region", children }: { tone?: BadgeTone; children: ReactNode }) {
  return <span className={`badge badge--${tone}`}>{children}</span>;
}

type ButtonVariant = "primary" | "secondary" | "ghost";
export function ButtonLink({
  href,
  variant = "primary",
  size,
  icon,
  iconAfter,
  external,
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  size?: "sm" | "lg";
  icon?: IconName;
  iconAfter?: IconName;
  external?: boolean;
  children: ReactNode;
}) {
  const className = `btn btn--${variant} ${size ? `btn--${size}` : ""}`;
  const inner = (
    <>
      {icon ? <Icon name={icon} size={18} /> : null}
      {children}
      {iconAfter ? <Icon name={iconAfter} size={18} /> : null}
    </>
  );
  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}

export function StatTile({ value, label }: { value: ReactNode; label: ReactNode }) {
  return (
    <div className="stat">
      <div className="stat__value">{value}</div>
      <div className="stat__label">{label}</div>
    </div>
  );
}

/** Proof figures set inline with hairline dividers, instead of a row of stat tiles. */
export function Figures({ items, min = 160, small, className = "" }: { items: { value: ReactNode; label: ReactNode }[]; min?: number; small?: boolean; className?: string }) {
  return (
    <ul className={`figures ${small ? "figures--sm" : ""} ${className}`} style={{ "--min": `${min}px` } as CSSProperties}>
      {items.map((it, i) => (
        <li key={i}>
          <span className="figure__value">{it.value}</span>
          <span className="figure__label">{it.label}</span>
        </li>
      ))}
    </ul>
  );
}

/** Labelled image placeholder — no photography supplied yet. */
export function Placeholder({ tag = "PHOTO", label, height = 160, variant, icon, style }: { tag?: string; label?: ReactNode; height?: number | string; variant?: "rounded" | "square"; icon?: IconName; style?: CSSProperties }) {
  return (
    <div className={`ph ${variant ? `ph--${variant}` : ""}`} style={{ height, ...style }}>
      {icon ? <Icon name={icon} size={40} /> : null}
      <span className="ph__tag">{tag}</span>
      {label ? <span>{label}</span> : null}
    </div>
  );
}

/** Draft photo with a pending chip; drop `note` once the client's real photo replaces `src`. */
export function Photo({ src, alt, note, height = 160, variant, sizes = "(max-width: 768px) 100vw, 50vw", style }: { src: string; alt: string; note?: ReactNode; height?: number | string; variant?: "rounded" | "square"; sizes?: string; style?: CSSProperties }) {
  return (
    <div className={`photo ${variant ? `ph--${variant}` : ""}`} style={{ height, ...style }}>
      <Image src={withBase(src)} alt={alt} fill sizes={sizes} />
      {note ? <span className="photo__note">{note}</span> : null}
    </div>
  );
}

const MOCK_HOSPITALS = [
  { th: "โรงพยาบาลตัวอย่าง ก", en: "Sample Hospital A", shape: "cross", color: "#0B6E65" },
  { th: "ศูนย์ภาพวินิจฉัยตัวอย่าง", en: "Sample Imaging Center", shape: "circle", color: "#2563A6" },
  { th: "โรงพยาบาลตัวอย่าง ข", en: "Sample Hospital B", shape: "leaf", color: "#3E7D3A" },
  { th: "โรงพยาบาลตัวอย่าง ค", en: "Sample Hospital C", shape: "shield", color: "#8A3B5C" },
  { th: "ศูนย์การแพทย์ตัวอย่าง", en: "Sample Medical Center", shape: "cross", color: "#B05A1E" },
  { th: "โรงพยาบาลตัวอย่าง ง", en: "Sample Hospital D", shape: "circle", color: "#4B4E9C" },
] as const;

/** Fictional hospital marks standing in for client logos until real ones are cleared for publication. */
export function MockHospitalLogo({ index, lang }: { index: number; lang: "th" | "en" }) {
  const h = MOCK_HOSPITALS[index % MOCK_HOSPITALS.length];
  const mark = {
    cross: <path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7z" />,
    circle: <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />,
    leaf: <path d="M20 3C9 3 3 9 3 17c0 1.5.3 2.8.7 4C6 13 12 9 17 8c-5 3-8 7-9.5 12.5C17 20 21 13 20 3z" />,
    shield: <path d="M12 2l8 3v6c0 5.5-3.4 9.7-8 11-4.6-1.3-8-5.5-8-11V5zm-1 6v3H8v2h3v3h2v-3h3v-2h-3V8z" />,
  }[h.shape];
  return (
    <span className="mock-logo" style={{ color: h.color }}>
      <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden>
        {mark}
      </svg>
      <span>{h[lang]}</span>
    </span>
  );
}

/** "(ข้อมูลตัวอย่าง)" marker: keep until real client content replaces the value. */
export function Sample({ children }: { children: ReactNode }) {
  return <span className="sample">{children}</span>;
}

/** Page header: the image band shows the page title only; supporting copy sits below it. */
/** `art` names the photo subject for this band; the cross mark stands in until photography arrives. */
export function PageHero({ title, description, height = 260 }: { title: string; description?: ReactNode; height?: number; art?: IconName }) {
  return (
    <section>
      <div className="hero" style={{ "--hero-h": `${height}px` } as CSSProperties}>
        <div className="hero__inner">
          <h1 className="hero__title">{title}</h1>
        </div>
        <HeroArt />
      </div>
      {description ? (
        <div className="hero__desc">
          <div className="container">
            <p>{description}</p>
          </div>
        </div>
      ) : null}
    </section>
  );
}

/** The logo's cross as a hairline outline, cropped by the hero band. Stands in until room photography arrives. */
export function HeroArt() {
  return (
    <svg className="hero__art" viewBox="0 0 200 200" aria-hidden>
      <path
        d="M76 14h48a8 8 0 0 1 8 8v46h46a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8h-46v46a8 8 0 0 1-8 8H76a8 8 0 0 1-8-8v-46H22a8 8 0 0 1-8-8V76a8 8 0 0 1 8-8h46V22a8 8 0 0 1 8-8z"
        fill="rgba(33,172,160,.10)"
        stroke="rgba(33,172,160,.6)"
        strokeWidth="1"
      />
      <path d="M88 40h24v48h48v24h-48v48H88v-48H40V88h48z" fill="none" stroke="rgba(11,110,101,.22)" strokeWidth="1" />
    </svg>
  );
}

export type TimelineItem = { year: string; title: string; sub?: ReactNode; logos?: string[] };
export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="timeline">
      {items.map((it, i) => (
        <li key={`${it.year}-${i}`}>
          <div className="timeline__dotrow">
            <span className="timeline__dot" />
            {i < items.length - 1 ? <span className="timeline__line" /> : null}
          </div>
          <div className="timeline__year">{it.year}</div>
          <div className="timeline__title">{it.title}</div>
          {it.sub ? <div className="timeline__sub">{it.sub}</div> : null}
          {it.logos?.map((l, li) => (
            <span key={li} className="logo-chip">
              {l}
            </span>
          ))}
        </li>
      ))}
    </ol>
  );
}

export function ServiceCard({ icon, title, children, as: H = "h3" }: { icon: IconName; title: ReactNode; children: ReactNode; as?: "h2" | "h3" }) {
  return (
    <div className="card">
      <div className="icon-head">
        <Icon name={icon} size={26} />
        <H className="h3">{title}</H>
      </div>
      <p>{children}</p>
    </div>
  );
}
