import type { Metadata } from "next";
import Image from "next/image";
import { Marquee, PageHero, Section } from "@/components/ui";
import { IMG, IMG_REGIONS } from "@/content/images";
import { REGIONS, ui } from "@/content/site";
import { withBase, type Lang, type PageParams } from "@/lib/i18n";

const copy = {
  title: { th: "ผลงานการติดตั้ง", en: "Installations" },
  desc: {
    th: "ติดตั้งระบบภาพวินิจฉัยไปแล้วกว่า 320 ระบบ และพัฒนาศูนย์ภาพวินิจฉัยกว่า 150 แห่งทั่วประเทศ",
    en: "More than 320 imaging systems installed and over 150 imaging centers developed across Thailand.",
  },
  mapTitle: { th: "จุดติดตั้งทั่วประเทศและเรื่องราวการส่งมอบเครื่อง", en: "Installations nationwide and delivery stories" },
  listTitle: { th: "โรงพยาบาลและศูนย์ภาพวินิจฉัย แยกตามภูมิภาค", en: "Hospitals & imaging centers by region" },
  listIntro: { th: "ทีมขายและทีมบริการดูแลลูกค้าครอบคลุม 5 ภูมิภาคทั่วประเทศ", en: "Our sales and service teams cover five regions across Thailand." },
  totalLabel: { th: "ระบบภาพวินิจฉัยที่ติดตั้งแล้วทั่วประเทศ", en: "imaging systems installed nationwide" },
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

const SYSTEMS = [
  { value: "200+", label: "CT" },
  { value: "60+", label: "IGT" },
  { value: "40+", label: "MRI" },
  { value: "20+", label: "X-ray" },
];

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { lang } = (await params) as { lang: Lang };
  return { title: copy.title[lang], description: copy.desc[lang] };
}

export default async function InstallationsPage({ params }: PageParams) {
  const { lang } = (await params) as { lang: Lang };
  return (
    <>
      <PageHero title={copy.title[lang]} description={copy.desc[lang]} art="map-pin" />

      <Section>
        <h2 className="h2 h2--sm">{copy.mapTitle[lang]}</h2>
        {/* Installed base: the total leads, the four categories follow at a size that still reads as numbers first */}
        <div className="counts">
          <div className="counts__total">
            <span className="counts__value">320+</span>
            <span className="counts__label">{copy.totalLabel[lang]}</span>
          </div>
          <ul className="counts__list">
            {SYSTEMS.map((s) => (
              <li key={s.label}>
                <span className="counts__value">{s.value}</span>
                <span className="counts__label">
                  {s.label} · {ui.systems[lang]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Installation and equipment photos drifting left; pauses on hover */}
      <section className="gallery" aria-label={copy.galleryLabel[lang]}>
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

      <Section>
        <div className="testimonials">
          <blockquote className="quote testimonials__lead">
            <svg className="quote__mark" viewBox="0 0 24 24" aria-hidden>
              <path d="M10 7H6a2 2 0 0 0-2 2v4h4v4H4M20 7h-4a2 2 0 0 0-2 2v4h4v4h-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
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

      <Section alt>
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
    </>
  );
}
