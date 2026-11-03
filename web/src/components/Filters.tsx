"use client";

import { useState } from "react";
import type { Product } from "@/content/products";
import { REGIONS, ui } from "@/content/site";
import type { Lang } from "@/lib/i18n";
import { ProductCard } from "./ProductCard";

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
      <ul className="product-cards">
        {shown.map((p) => (
          <ProductCard key={p.slug} product={p} lang={lang} summary={p.summary[lang]} as="h2" />
        ))}
      </ul>
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
