import type { Metadata } from "next";
import Image from "next/image";
import { Figures, Grid, PageHero, Photo, Section } from "@/components/ui";
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
  storiesNote: { th: "ใช้ภาพบรรยากาศการส่งมอบและการใช้งานจริงที่ได้รับอนุญาต (ไม่เน้นภาพบุคคล)", en: "Approved photos of handovers and systems in use (no close-ups of people)" },
};


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
        <p className="section-intro">{copy.storiesNote[lang]}</p>
        <Figures small min={110} items={SYSTEMS.map((s) => ({ value: s.value, label: `${s.label} · ${ui.systems[lang]}` }))} />
        <Grid min={240} style={{ margin: "40px 0 32px" }}>
          {[IMG.hospital, IMG.seminar, IMG.ct].map((src) => (
            <Photo key={src} variant="rounded" height={190} src={src} alt="" sizes="(max-width: 768px) 100vw, 33vw" note={ui.aiSample[lang]} />
          ))}
        </Grid>
        <blockquote className="quote" style={{ margin: 0 }}>
          <svg className="quote__mark" viewBox="0 0 24 24" aria-hidden>
            <path d="M10 7H6a2 2 0 0 0-2 2v4h4v4H4M20 7h-4a2 2 0 0 0-2 2v4h4v4h-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p>
            {lang === "th"
              ? "ทีมงาน Srima-Medic ดูแลตั้งแต่การติดตั้งจนถึงบำรุงรักษา ทำให้เครื่องพร้อมใช้งานอย่างต่อเนื่อง"
              : "The Srima-Medic team supported us from installation through maintenance, keeping our system ready for use."}
          </p>
          <cite>
            {lang === "th" ? "ความเห็นจากโรงพยาบาลลูกค้า" : "Customer hospital"} <span className="sample">{ui.sample[lang]}</span>
          </cite>
        </blockquote>
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
