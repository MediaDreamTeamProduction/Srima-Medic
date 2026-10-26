import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Badge, Grid, PageHero, Section } from "@/components/ui";
import { ARTICLES, EVENTS, formatDate, TAGS } from "@/content/news";
import { ui } from "@/content/site";
import { href, type Lang, type PageParams } from "@/lib/i18n";

const copy = {
  title: { th: "ข่าวสารและกิจกรรม", en: "News & Events" },
  desc: {
    th: "ความเคลื่อนไหวด้านเทคโนโลยีภาพวินิจฉัย บทความความรู้ และกิจกรรมสัมมนาจาก Srima-Medic",
    en: "Imaging technology news, knowledge articles and seminars from Srima-Medic.",
  },
  news: { th: "ข่าวสารและบทความ", en: "News & articles" },
  events: { th: "กิจกรรม — Events & Seminars", en: "Events & Seminars" },
};

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { lang } = (await params) as { lang: Lang };
  return { title: copy.title[lang], description: copy.desc[lang] };
}

export default async function NewsPage({ params }: PageParams) {
  const { lang } = (await params) as { lang: Lang };
  return (
    <>
      <PageHero title={copy.title[lang]} description={copy.desc[lang]} art="calendar" />

      <Section style={{ paddingTop: 56 }}>
        <h2 className="h2">{copy.news[lang]}</h2>
        <Grid min={260}>
          {ARTICLES.map((a) => {
            const inner = (
              <>
                <div className="ph ph--square" style={{ height: 150 }}>
                  <span className="ph__tag">PHOTO</span>
                </div>
                <div className="card__body">
                  <Badge tone={a.tag === "news" ? "sky" : "region"}>{TAGS[a.tag][lang]}</Badge>
                  <div className="caption mono" style={{ marginTop: 12, color: "var(--text-soft)" }}>
                    {formatDate(a.date, lang)}
                  </div>
                  <h3 style={{ fontSize: 18, margin: "6px 0 8px" }}>{a.title[lang]}</h3>
                  <p>
                    {a.excerpt[lang]}
                    {a.sample ? <span className="sample">{ui.sample[lang]}</span> : null}
                  </p>
                  {a.body ? (
                    <span className="btn btn--ghost" style={{ marginTop: 12 }}>
                      {ui.readMore[lang]} <Icon name="arrow-right" size={16} />
                    </span>
                  ) : null}
                </div>
              </>
            );
            return a.body ? (
              <Link key={a.slug} href={href(lang, `/news/${a.slug}`)} className="card card--flush card--link">
                {inner}
              </Link>
            ) : (
              <article key={a.slug} className="card card--flush">
                {inner}
              </article>
            );
          })}
        </Grid>
      </Section>

      <Section alt>
        <h2 className="h2">{copy.events[lang]}</h2>
        <Grid min={260}>
          {EVENTS.map((e) => (
            <div key={e.title.en} className="card">
              <div className="mono" style={{ fontSize: 14, fontWeight: 600, color: "var(--forest)", marginBottom: 10 }}>
                {e.date[lang]}
              </div>
              <h3 style={{ fontSize: 18, margin: 0 }}>{e.title[lang]}</h3>
              <p style={{ marginTop: 8 }}>
                {e.desc[lang]}
                <span className="sample">{ui.sample[lang]}</span>
              </p>
            </div>
          ))}
        </Grid>
      </Section>
    </>
  );
}
