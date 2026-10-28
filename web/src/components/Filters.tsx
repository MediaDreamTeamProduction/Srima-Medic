"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import type { Product } from "@/content/products";
import { REGIONS, ui } from "@/content/site";
import { href, type L, type Lang } from "@/lib/i18n";
import { IMG_BY_CATEGORY } from "@/content/images";
import { Icon } from "./Icon";
import { Photo } from "./ui";

/** Category badges that filter the product grid; active badge uses the brand tone. */
export function ProductGrid({ lang, products }: { lang: Lang; products: Product[] }) {
  const [active, setActive] = useState<string | null>(null);
  const shown = active ? products.filter((p) => p.category === active) : products;
  const categories = [null, ...products.map((p) => p.category)];

  return (
    <>
      <div className="row" style={{ gap: 8, marginBottom: 24 }} role="group" aria-label="Filter">
        {categories.map((cat) => (
          <button key={cat ?? "all"} className={`badge ${active === cat ? "badge--brand" : "badge--region"}`} aria-pressed={active === cat} onClick={() => setActive(cat)}>
            {cat ?? ui.all[lang]}
          </button>
        ))}
      </div>
      <div className="grid" style={{ "--min": "260px" } as CSSProperties}>
        {shown.map((p) => (
          <article key={p.slug} className="card card--flush" style={{ display: "flex", flexDirection: "column" }}>
            <Photo variant="square" height={170} src={IMG_BY_CATEGORY[p.category]} alt={p.name} sizes="(max-width: 768px) 100vw, 25vw" note={ui.aiSample[lang]} />
            <div className="card__body stack" style={{ flex: 1 }}>
              <div className="row" style={{ gap: 6 }}>
                <span className="badge badge--region">{p.category}</span>
                <span className="badge badge--success">
                  {ui.installed[lang]} {p.installed}
                </span>
              </div>
              <div>
                <h2 className="h3" style={{ margin: 0 }}>{p.name}</h2>
                <div className="caption" style={{ marginTop: 4, color: "var(--text-soft)" }}>
                  {p.localName[lang]}
                </div>
              </div>
              <p>{p.summary[lang]}</p>
              <div className="stack" style={{ marginTop: "auto", paddingTop: 8, "--gap": "14px" } as CSSProperties}>
                <a href={p.philipsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--full">
                  {ui.viewOnPhilips[lang]} <Icon name="external" size={16} />
                </a>
                <Link href={href(lang, `/products/${p.slug}`)} className="btn btn--ghost" style={{ alignSelf: "flex-start" }}>
                  {ui.viewDetails[lang]} <Icon name="arrow-right" size={18} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

type Site = { region: number; name: L; equipment: string };

/** Region badges filtering the installation reference list. */
export function SiteList({ lang, sites }: { lang: Lang; sites: Site[] }) {
  const [active, setActive] = useState<number | null>(null);
  const shown = active === null ? sites : sites.filter((s) => s.region === active);
  return (
    <>
      <div className="row" style={{ gap: 8, marginBottom: 24 }} role="group" aria-label="Region">
        <button className={`badge ${active === null ? "badge--brand" : "badge--region"}`} aria-pressed={active === null} onClick={() => setActive(null)}>
          {ui.all[lang]}
        </button>
        {REGIONS.map((r, i) => (
          <button key={r.en} className={`badge ${active === i ? "badge--brand" : "badge--region"}`} aria-pressed={active === i} onClick={() => setActive(i)}>
            {r[lang]}
          </button>
        ))}
      </div>
      <div className="grid" style={{ "--min": "260px" } as CSSProperties}>
        {shown.map((s, i) => (
          <div key={i} className="card card--flush">
            <Photo variant="square" height={140} src={IMG_BY_CATEGORY[s.equipment]} alt="" sizes="(max-width: 768px) 100vw, 33vw" note={ui.aiSample[lang]} />
            <div className="card__body">
              <div className="row" style={{ gap: 6, marginBottom: 10 }}>
                <span className="badge badge--region">{REGIONS[s.region][lang]}</span>
                <span className="badge badge--success">{s.equipment}</span>
              </div>
              <div style={{ fontWeight: 600, fontSize: 16 }}>
                {s.name[lang]} <span className="sample">{ui.sample[lang]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/** Region selector on the services page. */
export function RegionPicker({ lang }: { lang: Lang }) {
  const [active, setActive] = useState(2);
  return (
    <>
      <div className="row" style={{ gap: 8 }} role="group" aria-label="Region">
        {REGIONS.map((r, i) => (
          <button key={r.en} className={`badge ${active === i ? "badge--brand" : "badge--region"}`} aria-pressed={active === i} onClick={() => setActive(i)}>
            {r[lang]}
          </button>
        ))}
      </div>
      <div className="grid-2x2" style={{ marginTop: 24, gridTemplateColumns: "1fr 1fr" }}>
        <div className="stat">
          <div className="stat__value">
            {REGIONS[active][lang]}
          </div>
          <div className="stat__label">{lang === "th" ? "ภูมิภาคที่เลือก" : "Selected region"}</div>
        </div>
        <div className="stat">
          <div className="stat__value">
            24/7
          </div>
          <div className="stat__label">{lang === "th" ? "ให้คำปรึกษาตลอด 24 ชม. ทุกวัน" : "Consultation, every day"}</div>
        </div>
      </div>
    </>
  );
}
