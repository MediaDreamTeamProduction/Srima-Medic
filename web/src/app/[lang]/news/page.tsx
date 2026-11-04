import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import Image from "next/image";
import { SlowFade } from "@/components/SlowFade";
import { PageHero, Section } from "@/components/ui";
import { IMG } from "@/content/images";
import { ARTICLES, EVENTS, formatDate, TAGS } from "@/content/news";
import { NAV, ui } from "@/content/site";
import { href, withBase, type Lang, type PageParams } from "@/lib/i18n";

const NEWS_IMG: Record<string, string> = { "ct-vs-mri": IMG.mri, "pm-vs-cm": IMG.xray, "philips-ct-update": IMG.ct, "mri-trends": IMG.hospital };

const copy = {
  title: { th: "ข่าวสารและกิจกรรม", en: "News & Events" },
  desc: {
    th: "ความเคลื่อนไหวด้านเทคโนโลยีภาพวินิจฉัย บทความความรู้ และกิจกรรมสัมมนาจาก Srima-Medic",
    en: "Imaging technology news, knowledge articles and seminars from Srima-Medic.",
  },
  news: { th: "ข่าวสารและบทความ", en: "News & articles" },
  ceoPhoto: { th: "รอรูป CEO ร่วมงาน", en: "CEO event photo pending" },
  eventsEyebrow: { th: "กิจกรรม", en: "Events" },
};

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { lang } = (await params) as { lang: Lang };
  return { title: copy.title[lang], description: copy.desc[lang] };
}

export default async function NewsPage({ params }: PageParams) {
  const { lang } = (await params) as { lang: Lang };
  return (
    <>
      <PageHero title={copy.title[lang]} description={copy.desc[lang]} crumbs={[{ label: NAV[0].label[lang], href: href(lang, "") }, { label: NAV.find((n) => n.path === "/news")!.label[lang] }]} image={IMG.seminar} note={ui.aiSample[lang]} />

      {/* Figma: blog. Four article cards: photo, tag pill, title, excerpt, date and read-more */}
      <Section>
        <h2 className="h2 h2--sm">{copy.news[lang]}</h2>
        <ul className="article-cards">
          {ARTICLES.map((a) => {
            const inner = (
              <>
                <div className="article-card__photo">
                  <Image src={withBase(NEWS_IMG[a.slug] ?? IMG.hospital)} alt="" fill sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                  <span className="photo__note">{ui.aiSample[lang]}</span>
                </div>
                <div className="article-card__body">
                  <span className="article-card__tag">{TAGS[a.tag][lang]}</span>
                  <h3>{a.title[lang]}</h3>
                  <p>
                    {a.excerpt[lang]}
                    {a.sample ? <span className="sample">{ui.sample[lang]}</span> : null}
                  </p>
                  <div className="article-card__foot">
                    <time dateTime={a.date}>{formatDate(a.date, lang)}</time>
                    {a.body ? (
                      <span className="article-card__more">
                        {ui.readMore[lang]} <Icon name="arrow-right" size={18} />
                      </span>
                    ) : null}
                  </div>
                </div>
              </>
            );
            return (
              <li key={a.slug} className="article-card">
                {a.body ? (
                  <Link href={href(lang, `/news/${a.slug}`)} className="article-card__link">
                    {inner}
                  </Link>
                ) : (
                  <div className="article-card__link">{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Events: photos cross-fade slowly; each card opens a page of photos and the title only */}
      <Section>
        <p className="eyebrow">{copy.eventsEyebrow[lang]}</p>
        <h2 className="h2 h2--sm">Events &amp; Seminars</h2>
        <ul className="event-cards">
          {EVENTS.map((e, i) => (
            <li key={e.slug}>
              <Link href={href(lang, `/news/events/${e.slug}`)} className="event-card">
                <SlowFade photos={e.photos} interval={7000} offset={i * 2300} sizes="(max-width: 860px) 100vw, 33vw" />
                <span className="photo__note">{copy.ceoPhoto[lang]}</span>
                <span className="event-card__text">
                  <span className="event-card__date">{e.date[lang]}</span>
                  <span className="event-card__title">{e.title[lang]}</span>
                  <span className="event-card__desc">{e.desc[lang]}</span>
                </span>
                <span className="event-card__go" aria-hidden="true">
                  <Icon name="arrow-right" size={20} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
