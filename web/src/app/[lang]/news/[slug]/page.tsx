import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge, ButtonLink, Photo, Section } from "@/components/ui";
import { IMG } from "@/content/images";
import { ARTICLES, formatDate, getArticle, TAGS } from "@/content/news";
import { NAV, ui } from "@/content/site";
import { href, LANGS, type Lang, type PageParams } from "@/lib/i18n";

const NEWS_IMG: Record<string, string> = { "ct-vs-mri": IMG.mri, "pm-vs-cm": IMG.xray, "philips-ct-update": IMG.ct, "mri-trends": IMG.hospital };

export function generateStaticParams() {
  return LANGS.flatMap((lang) => ARTICLES.filter((a) => a.body).map((a) => ({ lang, slug: a.slug })));
}

export async function generateMetadata({ params }: PageParams<{ slug: string }>): Promise<Metadata> {
  const { lang, slug } = (await params) as { lang: Lang; slug: string };
  const a = getArticle(slug);
  return a ? { title: a.title[lang], description: a.excerpt[lang] } : {};
}

export default async function ArticlePage({ params }: PageParams<{ slug: string }>) {
  const { lang, slug } = (await params) as { lang: Lang; slug: string };
  const a = getArticle(slug);
  if (!a?.body) notFound();
  const newsLabel = NAV.find((n) => n.path === "/news")!.label[lang];

  return (
    <Section>
      <article className="article" style={{ margin: "0 auto" }}>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href={href(lang, "/news")}>{newsLabel}</Link> / {TAGS[a.tag][lang]}
        </nav>
        <Badge>{TAGS[a.tag][lang]}</Badge>
        <h1 style={{ fontSize: "clamp(1.7rem, 3.4vw, 2.4rem)", margin: "14px 0 10px" }}>{a.title[lang]}</h1>
        <div className="caption mono" style={{ marginBottom: 24 }}>
          {formatDate(a.date, lang)}
          {a.sample ? <span className="sample"> {lang === "th" ? "(ตัวอย่างบทความ — รอเนื้อหาจริงจากลูกค้า)" : "(sample article — pending client content)"}</span> : null}
        </div>
        <Photo variant="rounded" height={300} src={NEWS_IMG[a.slug] ?? IMG.hospital} alt="" sizes="(max-width: 768px) 100vw, 720px" note={ui.aiSample[lang]} style={{ marginBottom: 28 }} />
        {a.body[lang].map((block, i) => (block.startsWith("## ") ? <h2 key={i}>{block.slice(3)}</h2> : <p key={i}>{block}</p>))}
        <div className="card" style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontWeight: 600 }}>{lang === "th" ? "ต้องการคำปรึกษาเรื่องเครื่องมือแพทย์?" : "Need advice on imaging equipment?"}</span>
          <ButtonLink href={href(lang, "/contact")}>{ui.contactSales[lang]}</ButtonLink>
        </div>
      </article>
    </Section>
  );
}
