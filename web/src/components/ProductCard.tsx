import { IMG_BY_CATEGORY } from "@/content/images";
import type { Product } from "@/content/products";
import { ui } from "@/content/site";
import { href, type Lang } from "@/lib/i18n";
import { ButtonLink, Photo } from "./ui";

/**
 * Figma home_section_product card, shared by the home and products pages:
 * photo, category code, name, summary, then an outline Philips link and a ghost details link.
 */
export function ProductCard({ product: p, lang, summary, as: H = "h3" }: { product: Product; lang: Lang; summary: string; as?: "h2" | "h3" }) {
  return (
    <li className="product-card">
      <Photo src={IMG_BY_CATEGORY[p.category]} alt={p.name} height={220} sizes="(max-width: 860px) 100vw, 50vw" note={ui.aiSample[lang]} />
      <div className="product-card__head">
        <H className="product-card__code">{p.category}</H>
        <span className="product-card__installed">
          {ui.installed[lang]} <strong>{p.installed}</strong> {ui.systems[lang]}
        </span>
      </div>
      <p className="product-card__name">{p.name}</p>
      <p className="product-card__summary">{summary}</p>
      <div className="product-card__actions">
        <ButtonLink href={p.philipsUrl} variant="secondary" iconAfter="external" external>
          {ui.viewOnPhilips[lang]}
        </ButtonLink>
        <ButtonLink href={href(lang, `/products/${p.slug}`)} variant="ghost" iconAfter="arrow-right">
          {ui.viewDetails[lang]}
        </ButtonLink>
      </div>
    </li>
  );
}
