import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";
import { Marquee, PageHero, QuoteMark, Section } from "@/components/ui";
import { MAP_POINTS, THAILAND_PATH, THAILAND_VIEWBOX } from "@/content/thailand-map";
import { IMG, IMG_REGIONS } from "@/content/images";
import { NAV, REGIONS, ui } from "@/content/site";
import { href, withBase, type Lang, type PageParams } from "@/lib/i18n";

const copy = {
  title: { th: "ผลงานการติดตั้ง", en: "Installations" },
  desc: {
    th: "ติดตั้งระบบภาพวินิจฉัยไปแล้วกว่า 320 ระบบ และพัฒนาศูนย์ภาพวินิจฉัยกว่า 150 แห่งทั่วประเทศ",
    en: "More than 320 imaging systems installed and over 150 imaging centers developed across Thailand.",
  },
  mapTitle: { th: "จุดติดตั้งทั่วประเทศและเรื่องราวการส่งมอบเครื่อง", en: "Installations nationwide and delivery stories" },
  listTitle: { th: "โรงพยาบาลและศูนย์ภาพวินิจฉัย แยกตามภูมิภาค", en: "Hospitals & imaging centers by region" },
  listIntro: { th: "ทีมขายและทีมบริการดูแลลูกค้าครอบคลุม 5 ภูมิภาคทั่วประเทศ", en: "Our sales and service teams cover five regions across Thailand." },
  mapLabel: { th: "แผนที่ประเทศไทย แสดงพื้นที่ที่มีการติดตั้งใน 5 ภูมิภาค", en: "Map of Thailand showing installations across five regions" },
  galleryLabel: { th: "ภาพการติดตั้งและอุปกรณ์", en: "Installation and equipment photos" },
  galleryNote: { th: "ภาพประกอบ รอภาพการติดตั้งจริงจากลูกค้า", en: "Illustrative photos — pending the client's installation photos" },
  statement: {
    th: "ทีมงาน Srima-Medic ดูแลตั้งแต่การติดตั้งจนถึงบำรุงรักษา ทำให้เครื่องพร้อมใช้งานอย่างต่อเนื่อง",
    en: "The Srima-Medic team looks after every system from installation through maintenance, keeping it ready for use.",
  },
  reviewPending: { th: "พื้นที่สำหรับรีวิวจากโรงพยาบาลลูกค้า", en: "Space for a review from a customer hospital" },
  reviewName: { th: "ชื่อโรงพยาบาล", en: "Hospital name" },
};


/** Stock photos (Magnific, no people) and existing room drafts, until the client sends installation photos. */
const GALLERY = ["/gallery/stock-ct.webp", IMG.mri, "/gallery/stock-suite.webp", IMG.igt, "/gallery/stock-mri.webp", IMG.xray, "/gallery/stock-workstation.webp", IMG.renovation, "/gallery/stock-reading.webp", IMG.ct];

/** Confirmed figures from the client (PRODUCT.md). The total leads; categories and centers surround the map. */
const STATS = [
  { value: "320+", label: { th: "ระบบที่ติดตั้งแล้วทั่วประเทศ", en: "systems installed nationwide" } },
  { value: "200+", label: { th: "CT · ระบบ", en: "CT · systems" } },
  { value: "60+", label: { th: "IGT · ระบบ", en: "IGT · systems" } },
  { value: "150+", label: { th: "ศูนย์ภาพวินิจฉัย", en: "imaging centers" } },
  { value: "40+", label: { th: "MRI · ระบบ", en: "MRI · systems" } },
  { value: "20+", label: { th: "X-ray · ระบบ", en: "X-ray · systems" } },
];

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { lang } = (await params) as { lang: Lang };
  return { title: copy.title[lang], description: copy.desc[lang] };
}

export default async function InstallationsPage({ params }: PageParams) {
  const { lang } = (await params) as { lang: Lang };
  return (
    <>
      <PageHero title={copy.title[lang]} description={copy.desc[lang]} crumbs={[{ label: NAV[0].label[lang], href: href(lang, "") }, { label: NAV.find((n) => n.path === "/installations")!.label[lang] }]} image={IMG.hospital} note={ui.aiSample[lang]} />

      {/* Installed base around a map of Thailand: the outline draws in, region markers pulse, figures count up */}
      <Section>
        <h2 className="h2 h2--sm" style={{ textAlign: "center", marginInline: "auto" }}>
          {copy.mapTitle[lang]}
        </h2>
        <Reveal className="install-map">
          {STATS.map((st, i) => (
            <div key={st.label.en} className={`install-stat install-stat--${i + 1}${i === 0 ? " is-total" : ""}`}>
              <span className="counts__value">
                <CountUp value={st.value} />
              </span>
              <span className="counts__label">{st.label[lang]}</span>
            </div>
          ))}
          <figure className="install-map__figure">
            <svg viewBox={THAILAND_VIEWBOX} role="img" aria-label={copy.mapLabel[lang]}>
              <path className="install-map__land" d={THAILAND_PATH} pathLength={1} />
              {MAP_POINTS.map((pt, i) => (
                <g key={i} className="install-map__pin" style={{ "--i": i } as CSSProperties} transform={`translate(${pt.x} ${pt.y})`}>
                  <circle className="install-map__pulse" r="12" />
                  <circle className="install-map__dot" r="7" />
                </g>
              ))}
            </svg>
            <figcaption className="install-map__legend">
              {REGIONS.map((r) => (
                <span key={r.en}>{lang === "th" && r.en !== "Bangkok" ? `ภาค${r.th}` : r[lang]}</span>
              ))}
            </figcaption>
          </figure>
        </Reveal>
      </Section>

      <Section>
        <div className="testimonials">
          <blockquote className="quote testimonials__lead">
            <QuoteMark />
            <p>{copy.statement[lang]}</p>
          </blockquote>
          <ul className="testimonials__cards">
            {[0, 1].map((n) => (
              <li key={n} className="review">
                <p className="review__text">{copy.reviewPending[lang]}</p>
                <div className="review__who">
                  <span className="review__avatar" aria-hidden="true" />
                  <span>
                    <strong>{copy.reviewName[lang]}</strong>
                    <span className="sample">{ui.pending[lang]}</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section alt className="no-rings">
        {/* Region showcase after the client's "image 1" reference (Mayo Clinic Locations) */}
        <div className="region-grid">
          <div className="region-grid__intro">
            <h2 className="h2 h2--sm">{copy.listTitle[lang]}</h2>
            <p className="section-intro">{copy.listIntro[lang]}</p>
          </div>
          {REGIONS.map((r, i) => (
            <div key={r.en} className="region-card">
              <Image src={withBase(IMG_REGIONS[i])} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" />
              <span className="photo__note">{ui.aiSample[lang]}</span>
              <span className="region-card__text">
                {/* Thai labels read "ภาค…" except Bangkok */}
                <span className="region-card__title">{lang === "th" && r.en !== "Bangkok" ? `ภาค${r.th}` : r[lang]}</span>
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Installation and equipment photos drifting left; pauses on hover */}
      <section className="gallery gallery--end" aria-label={copy.galleryLabel[lang]}>
        <Marquee label={copy.galleryLabel[lang]} seconds={70}>
          {GALLERY.map((src) => (
            <span key={src} className="marquee__photo">
              <Image src={withBase(src)} alt="" fill sizes="360px" />
            </span>
          ))}
        </Marquee>
        <p className="caption container" style={{ marginTop: 12 }}>
          <span className="sample">{copy.galleryNote[lang]}</span>
        </p>
      </section>
    </>
  );
}
