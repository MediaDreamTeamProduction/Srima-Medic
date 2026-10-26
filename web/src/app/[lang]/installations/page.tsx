import type { Metadata } from "next";
import { SiteList } from "@/components/Filters";
import { Icon } from "@/components/Icon";
import { Figures, Grid, PageHero, Placeholder, Section } from "@/components/ui";
import { REGIONS, ui } from "@/content/site";
import type { Lang, PageParams } from "@/lib/i18n";

const copy = {
  title: { th: "ผลงานการติดตั้ง", en: "Installations" },
  desc: {
    th: "ติดตั้งระบบภาพวินิจฉัยไปแล้วกว่า 320 ระบบ และพัฒนาศูนย์ภาพวินิจฉัยกว่า 150 แห่งทั่วประเทศ",
    en: "More than 320 imaging systems installed and over 150 imaging centers developed across Thailand.",
  },
  mapTitle: { th: "จุดติดตั้งทั่วประเทศ", en: "Installations nationwide" },
  mapIntro: {
    th: "แผนที่ประเทศไทยปักหมุดจุดติดตั้งเครื่อง เพื่อแสดงพื้นที่ที่เราดูแลลูกค้าอยู่ในแต่ละจังหวัด",
    en: "A map of Thailand pinning each installation, showing the provinces where we support customers.",
  },
  listTitle: { th: "รายชื่อโรงพยาบาลและศูนย์ภาพวินิจฉัย แยกตามภูมิภาค", en: "Hospitals & imaging centers by region" },
  storiesTitle: { th: "เรื่องราวการส่งมอบเครื่อง", en: "Delivery stories" },
  storiesNote: { th: "ใช้ภาพบรรยากาศการส่งมอบและการใช้งานจริงที่ได้รับอนุญาต (ไม่เน้นภาพบุคคล)", en: "Approved photos of handovers and systems in use (no close-ups of people)" },
};

const SITES = [
  { region: 0, equipment: "CT", name: { th: "โรงพยาบาลในภาคเหนือ", en: "Hospital, Northern region" } },
  { region: 1, equipment: "MRI", name: { th: "โรงพยาบาลในภาคอีสาน", en: "Hospital, Northeast region" } },
  { region: 2, equipment: "X-ray", name: { th: "ศูนย์ภาพวินิจฉัยภาคกลาง", en: "Imaging center, Central region" } },
  { region: 3, equipment: "IGT", name: { th: "โรงพยาบาลในภาคใต้", en: "Hospital, Southern region" } },
  { region: 4, equipment: "CT", name: { th: "โรงพยาบาลในกรุงเทพฯ", en: "Hospital, Bangkok" } },
  { region: 2, equipment: "MRI", name: { th: "ศูนย์ภาพวินิจฉัยภาคกลาง", en: "Imaging center, Central region" } },
];

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
        <div className="split">
          <div>
            <h2 className="h2 h2--sm">{copy.mapTitle[lang]}</h2>
            <p className="section-intro" style={{ marginBottom: 24 }}>
              {copy.mapIntro[lang]}
            </p>
            <Figures small min={110} items={SYSTEMS.map((s) => ({ value: s.value, label: `${s.label} · ${ui.systems[lang]}` }))} />
          </div>
          <div className="ph ph--rounded" style={{ height: 380, background: "var(--surface)" }}>
            <Icon name="map-pin" size={40} />
            <span className="ph__tag">MAP</span>
            <span>{lang === "th" ? "แผนที่ประเทศไทยปักหมุดจุดติดตั้ง" : "Thailand installation map"}</span>
            <div className="row" style={{ justifyContent: "center", marginTop: 8 }}>
              {REGIONS.map((r) => (
                <span key={r.en} className="badge badge--region">
                  {r[lang]}
                </span>
              ))}
            </div>
            <span className="sample">{ui.pending[lang]}</span>
          </div>
        </div>
      </Section>

      <Section alt>
        <h2 className="h2">{copy.listTitle[lang]}</h2>
        <SiteList lang={lang} sites={SITES} />
      </Section>

      <Section>
        <h2 className="h2 h2--sm">{copy.storiesTitle[lang]}</h2>
        <p className="section-intro">{copy.storiesNote[lang]}</p>
        <Grid min={240} style={{ marginBottom: 32 }}>
          {[1, 2, 3].map((n) => (
            <Placeholder key={n} variant="rounded" height={190} label={<span className="sample">{ui.sample[lang]}</span>} />
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
    </>
  );
}
