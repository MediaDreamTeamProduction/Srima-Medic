import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { AWARDS } from "@/content/recognition";
import { REGIONS, ui } from "@/content/site";
import { withBase, type Lang } from "@/lib/i18n";
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

/**
 * Logo strip that drifts slowly to the left, forever. The set renders twice so the loop is seamless;
 * the copy is hidden from assistive tech. Pauses on hover/focus and stops under prefers-reduced-motion.
 */
export function Marquee({ label, seconds = 38, children }: { label: string; seconds?: number; children: ReactNode }) {
  return (
    <div className="marquee" role="group" aria-label={label} style={{ "--marquee-duration": `${seconds}s` } as CSSProperties}>
      <div className="marquee__track">
        <div className="marquee__set">{children}</div>
        <div className="marquee__set" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

const MOCK_HOSPITALS = [
  { shape: "cross", color: "#0B6E65" },
  { shape: "circle", color: "#2563A6" },
  { shape: "leaf", color: "#3E7D3A" },
  { shape: "shield", color: "#8A3B5C" },
  { shape: "cross", color: "#B05A1E" },
  { shape: "circle", color: "#4B4E9C" },
] as const;

/** Fictional, nameless hospital marks standing in for client logos until real ones are cleared for publication. */
export function MockHospitalLogo({ index }: { index: number }) {
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
    </span>
  );
}

/** Philips award photos in equal frames; shared by the home and About pages. */
export function AwardGrid({ lang }: { lang: Lang }) {
  return (
    <ol className="awards">
      {AWARDS.map((a) => (
        <li key={a.name} className="award">
          <div className="award__frame">
            <Image src={withBase(a.photo)} alt={a.name} width={300} height={360} sizes="(max-width: 600px) 45vw, 220px" />
          </div>
          <span className="award__year">{a.year}</span>
          <h3>{a.name}</h3>
          <p>{a.detail[lang]}</p>
        </li>
      ))}
    </ol>
  );
}

/** One card per region with a pending phone line; the contact page lists sales reps, the services page service engineers. */
export function RegionCards({ lang, role }: { lang: Lang; role: string }) {
  return (
    <Grid min={200} gap={16}>
      {REGIONS.map((r) => (
        <div key={r.en} className="card" style={{ padding: 18 }}>
          <span className="badge badge--region">{r[lang]}</span>
          <div style={{ marginTop: 12, fontWeight: 600, fontSize: 16 }}>{role}</div>
          <div className="caption mono" style={{ marginTop: 4, color: "var(--text-soft)" }}>
            0X-XXX-XXXX <span className="sample">{ui.pending[lang]}</span>
          </div>
        </div>
      ))}
    </Grid>
  );
}

/** "(ข้อมูลตัวอย่าง)" marker: keep until real client content replaces the value. */
export function Sample({ children }: { children: ReactNode }) {
  return <span className="sample">{children}</span>;
}

export type HeroFact = { value: string; label: string };
export type Crumb = { label: string; href?: string };

/**
 * Page header (layout A): breadcrumb, title, accent rule and description on the left; a photo on the right
 * that sits on the band's lower edge, with one fact chip. Without an image the text runs full width.
 */
export function PageHero({ title, description, crumbs, image, imageAlt = "", note, fact }: { title: string; description?: ReactNode; crumbs?: Crumb[]; image?: string; imageAlt?: string; note?: string; fact?: HeroFact }) {
  return (
    <section className={`page-hero${image ? "" : " page-hero--text"}`}>
      <div className="container page-hero__grid">
        <div className="page-hero__text">
          {crumbs ? (
            <nav className="page-hero__crumbs" aria-label="Breadcrumb">
              {crumbs.map((c, i) => (
                <span key={c.label}>
                  {i > 0 ? <span aria-hidden="true">/</span> : null}
                  {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                </span>
              ))}
            </nav>
          ) : null}
          <h1 className="page-hero__title">{title}</h1>
          <span className="page-hero__rule" aria-hidden="true" />
          {description ? <p className="page-hero__desc">{description}</p> : null}
        </div>
        {image ? (
          <div className="page-hero__photo">
            <Image src={withBase(image)} alt={imageAlt} fill priority sizes="(max-width: 760px) 100vw, 50vw" />
            {note ? <span className="photo__note">{note}</span> : null}
            {fact ? (
              <div className="page-hero__fact">
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
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
