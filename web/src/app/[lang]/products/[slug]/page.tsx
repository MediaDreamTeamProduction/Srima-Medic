import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge, ButtonLink, Grid, PageHero, Photo, Section } from "@/components/ui";
import { IMG_BY_CATEGORY } from "@/content/images";
import { getProduct, PRODUCTS } from "@/content/products";
import { NAV, ui } from "@/content/site";
import { href, LANGS, type Lang, type PageParams } from "@/lib/i18n";

const copy = {
  gallery: { th: "ภาพเครื่อง (รอภาพจริง / ภาพ AI สำหรับ Draft)", en: "Product photo (pending real / AI draft image)" },
  fda: { th: "เลขที่ใบรับแจ้งรายการละเอียด / ใบจดแจ้ง (อย.)", en: "Thai FDA notification no." },
  ad: { th: "เลขที่ใบอนุญาตโฆษณา", en: "Advertising licence no." },
  related: { th: "ผลิตภัณฑ์อื่น", en: "Other products" },
};

export function generateStaticParams() {
  return LANGS.flatMap((lang) => PRODUCTS.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }: PageParams<{ slug: string }>): Promise<Metadata> {
  const { lang, slug } = (await params) as { lang: Lang; slug: string };
  const p = getProduct(slug);
  return p ? { title: p.name, description: p.summary[lang] } : {};
}

export default async function ProductDetailPage({ params }: PageParams<{ slug: string }>) {
  const { lang, slug } = (await params) as { lang: Lang; slug: string };
  const p = getProduct(slug);
  if (!p) notFound();
  const productsLabel = NAV.find((n) => n.path === "/products")!.label[lang];

  return (
    <>
      <PageHero title={p.name} height={260} art={p.icon} />

      <Section style={{ paddingTop: 32 }}>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href={href(lang, "/products")}>{productsLabel}</Link> / {p.category}
        </nav>
        <div className="split" style={{ alignItems: "start", gap: 40 }}>
          <div>
            <Photo variant="rounded" height={340} src={IMG_BY_CATEGORY[p.category]} alt={p.name} note={copy.gallery[lang]} style={{ marginBottom: 12 }} />
            <div className="row" style={{ gap: 10, flexWrap: "nowrap" }}>
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="ph" style={{ flex: 1, height: 64, border: "1px solid var(--border)" }} />
              ))}
            </div>
          </div>
          <div>
            <div className="row" style={{ gap: 8, marginBottom: 14 }}>
              <Badge>{p.category}</Badge>
              <Badge tone="success">
                {ui.installed[lang]} {p.installed} {ui.systems[lang]}
              </Badge>
            </div>
            <h2 style={{ fontSize: 26 }}>{p.name}</h2>
            <p className="soft" style={{ margin: "6px 0 18px" }}>
              {p.localName[lang]}
            </p>
            <p className="prose">{p.description[lang]}</p>

            <div className="card card--flush" style={{ marginTop: 24 }}>
              <div className="spec-row">
                <span className="soft">{copy.fda[lang]}</span>
                <span className="sample">{ui.pending[lang]}</span>
              </div>
              <div className="spec-row">
                <span className="soft">{copy.ad[lang]}</span>
                <span className="sample">ฆพ. XX/YYYY</span>
              </div>
            </div>

            <div className="row" style={{ gap: 16, marginTop: 24 }}>
              <ButtonLink href={p.philipsUrl} iconAfter="external" external>
                {ui.viewOnPhilips[lang]}
              </ButtonLink>
              <ButtonLink href={href(lang, "/contact")} variant="secondary">
                {ui.contactSales[lang]}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section alt>
        <h2 className="h2">{copy.related[lang]}</h2>
        <Grid min={220}>
          {PRODUCTS.filter((o) => o.slug !== p.slug).map((o) => (
            <Link key={o.slug} href={href(lang, `/products/${o.slug}`)} className="card card--link">
              <span className="modality__code" style={{ display: "block", fontSize: 26, marginBottom: 12 }}>{o.category}</span>
              <h3 style={{ fontSize: 17 }}>{o.name}</h3>
              <p>{o.localName[lang]}</p>
            </Link>
          ))}
        </Grid>
      </Section>
    </>
  );
}
