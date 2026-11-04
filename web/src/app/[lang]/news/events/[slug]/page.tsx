import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink, PageHero, Section } from "@/components/ui";
import { EVENTS, getEvent } from "@/content/news";
import { NAV, ui } from "@/content/site";
import { href, LANGS, withBase, type Lang, type PageParams } from "@/lib/i18n";

const copy = {
  pending: { th: "รอรูป CEO ร่วมงานจากลูกค้า ภาพที่เห็นเป็นภาพตัวอย่าง", en: "CEO event photos pending from the client; these are stand-ins" },
  back: { th: "กลับไปหน้าข่าวสารและกิจกรรม", en: "Back to News & Events" },
};

export function generateStaticParams() {
  return LANGS.flatMap((lang) => EVENTS.map((e) => ({ lang, slug: e.slug })));
}

export async function generateMetadata({ params }: PageParams<{ slug: string }>): Promise<Metadata> {
  const { lang, slug } = (await params) as { lang: Lang; slug: string };
  const e = getEvent(slug);
  return e ? { title: e.title[lang] } : {};
}

/** Event page: the title and the photos, nothing else (the client's events are photo records of the CEO attending). */
export default async function EventPage({ params }: PageParams<{ slug: string }>) {
  const { lang, slug } = (await params) as { lang: Lang; slug: string };
  const e = getEvent(slug);
  if (!e) notFound();
  const newsLabel = NAV.find((n) => n.path === "/news")!.label[lang];

  return (
    <>
      <PageHero title={e.title[lang]} description={e.date[lang]} crumbs={[{ label: NAV[0].label[lang], href: href(lang, "") }, { label: newsLabel, href: href(lang, "/news") }, { label: e.title[lang] }]} />
      <Section>
        <p className="caption" style={{ marginBottom: 20 }}>
          <span className="sample">{copy.pending[lang]}</span>
        </p>
        <ul className="event-gallery">
          {e.photos.map((src, i) => (
            <li key={src} className={i === 0 ? "is-lead" : undefined}>
              <Image src={withBase(src)} alt={`${e.title[lang]} ${i + 1}`} fill sizes={i === 0 ? "(max-width: 760px) 100vw, 66vw" : "(max-width: 760px) 100vw, 33vw"} />
              <span className="photo__note">{ui.aiSample[lang]}</span>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 32 }}>
          <ButtonLink href={href(lang, "/news")} variant="ghost">
            ← {copy.back[lang]}
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
