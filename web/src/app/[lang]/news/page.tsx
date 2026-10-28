import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Badge, Grid, PageHero, Photo, Section } from "@/components/ui";
import { IMG } from "@/content/images";
import { ARTICLES, EVENTS, formatDate, TAGS } from "@/content/news";
import { ui } from "@/content/site";
import { href, type Lang, type PageParams } from "@/lib/i18n";

const NEWS_IMG: Record<string, string> = { "ct-vs-mri": IMG.mri, "pm-vs-cm": IMG.xray, "philips-ct-update": IMG.ct, "mri-trends": IMG.hospital };

const copy = {
  title: { th: "ข่าวสารและกิจกรรม", en: "News & Events" },
  desc: {
    th: "ความเคลื่อนไหวด้านเทคโนโลยีภาพวินิจฉัย บทความความรู้ และกิจกรรมสัมมนาจาก Srima-Medic",
    en: "Imaging technology news, knowledge articles and seminars from Srima-Medic.",
  },
  news: { th: "ข่าวสารและบทความ", en: "News & articles" },
  ceoPhoto: { th: "รอรูป CEO ร่วมงาน", en: "CEO event photo pending" },
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
                <Photo variant="square" height={150} src={NEWS_IMG[a.slug] ?? IMG.hospital} alt="" sizes="(max-width: 768px) 100vw, 33vw" note={ui.aiSample[lang]} />
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
            <div key={e.title.en} className="card card--flush">
              <div className="ph ph--square" style={{ height: 180 }}>
                <Icon name="users" size={32} />
                <span className="ph__tag">PHOTO</span>
                <span className="sample">{copy.ceoPhoto[lang]}</span>
              </div>
              <div className="card__body">
                <div className="mono" style={{ fontSize: 14, fontWeight: 600, color: "var(--marine)", marginBottom: 10 }}>
                  {e.date[lang]}
                </div>
                <h3 style={{ fontSize: 18, margin: 0 }}>{e.title[lang]}</h3>
                <p style={{ marginTop: 8 }}>
                  {e.desc[lang]}
                  <span className="sample">{ui.sample[lang]}</span>
                </p>
              </div>
            </div>
          ))}
        </Grid>
      </Section>
    </>
  );
}
