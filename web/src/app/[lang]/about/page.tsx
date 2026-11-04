import type { Metadata } from "next";
import Image from "next/image";
import { PhotoRotator } from "@/components/PhotoRotator";
import { AwardGrid, ButtonLink, Figures, Grid, PageHero, Placeholder, Sample, Section } from "@/components/ui";
import { IMG, REAL } from "@/content/images";
import { NAV, ui } from "@/content/site";
import { href, withBase, type Lang, type PageParams } from "@/lib/i18n";

const copy = {
  title: { th: "เกี่ยวกับ Srima-Medic", en: "About Srima-Medic" },
  desc: {
    th: "ผู้จัดจำหน่ายโซลูชันภาพวินิจฉัยทางการแพทย์ในประเทศไทย ในฐานะพันธมิตรที่ได้รับอนุญาตจาก Philips พร้อมดูแลตั้งแต่ติดตั้งระบบจนถึงบริการหลังการขาย",
    en: "A distributor of medical imaging solutions in Thailand and an authorised partner of Philips — supporting hospitals from installation to after-sales service.",
  },
  historyTitle: { th: "ประวัติความเป็นมา", en: "Our story" },
  history: {
    th: [
      "บริษัท สีมา‑เมดิก จำกัด ก่อตั้งขึ้นในปี พ.ศ. 2558 โดยคุณธนานันต์ เตชะธรรมนุกูล เริ่มต้นจากความร่วมมือกับบริษัทในเครือสีมาคอร์ปอเรท เพื่อจัดหาอุปกรณ์ทางการแพทย์ให้แก่บริษัทในเครือที่ดำเนินโครงการความร่วมมือระหว่างภาครัฐและเอกชน (PPP)",
      "บริษัทดำเนินธุรกิจจัดจำหน่ายอุปกรณ์การแพทย์ รวมถึงเครื่องเอกซเรย์ พร้อมสนับสนุนการให้บริการแก่บริษัทในเครือ ต่อมาในปี พ.ศ. 2559 บริษัทได้เป็นพันธมิตรทางการค้ากับ Philips เพื่อขยายโซลูชันด้านเทคโนโลยีทางการแพทย์",
      "ปัจจุบัน บริษัททำงานร่วมกับ Philips และบริษัทในเครือ เพื่อให้บริการแก่โรงพยาบาลทั้งภาครัฐและเอกชนทั่วประเทศ ครอบคลุมการจัดหาและจำหน่ายเครื่องมือแพทย์ การให้บริการ และโครงการร่วมลงทุนเครื่อง CT และ MRI รวมถึงเครื่องเอกซเรย์และอุปกรณ์อื่น ๆ ที่ใช้ในแผนกรังสีวินิจฉัย",
    ],
    en: [
      "Srima-Medic Co., Ltd. was founded in 2015 by Thananan Taechadhumnukul, initially supplying medical equipment to companies within the Sima Corporate group that run public–private partnership (PPP) projects.",
      "The company distributes medical equipment, including X-ray systems, and supports services across the group. In 2016 it became a trade partner of Philips, broadening its range of medical technology solutions.",
      "Today Srima-Medic works with Philips and its sister companies to serve public and private hospitals nationwide — supplying and servicing medical equipment and co-investing in CT and MRI projects, as well as X-ray and other radiology equipment.",
    ],
  },
  timelineTitle: { th: "เส้นทางของกลุ่มบริษัท", en: "Our group's journey" },
  groupTitle: { th: "Sima Group of Companies", en: "Sima Group of Companies" },
  groupIntro: {
    th: "โซลูชันด้านสุขภาพแบบครบวงจร ตั้งแต่การลงทุนจนถึงการติดตั้งและการดูแลระยะยาว",
    en: "End-to-end healthcare solutions — from investment to installation and long-term support.",
  },
  group: [
    {
      image: IMG.hospital,
      logos: [
        { src: "/logos/tomograph.png", alt: "Tomograph" },
        { src: "/logos/sima-mri.png", alt: "Sima MRI" },
        { src: "/logos/sima-healthcare.png", alt: "Sima Health Care" },
      ],
      title: { th: "การลงทุนด้านสุขภาพและ PPP", en: "Healthcare investment & PPP" },
      body: {
        th: "จัดหาเครื่อง CT, MRI และระบบภาพทางการแพทย์ ผ่านรูปแบบการลงทุน การเช่า และการแบ่งปันผลประโยชน์ (PPP) สำหรับโรงพยาบาลภาครัฐและเอกชน",
        en: "CT, MRI and imaging systems through investment, rental and profit-sharing (PPP) models for public and private hospitals.",
      },
    },
    {
      image: IMG.ct,
      logos: [{ src: "/brand/logo-srima.png", alt: "Srima-Medic" }],
      title: { th: "จัดจำหน่ายเครื่องมือแพทย์", en: "Medical equipment distribution" },
      body: {
        th: "Srima-Medic ตัวแทนจำหน่ายที่ได้รับอนุญาตจาก Philips ครอบคลุม CT, MRI, X-ray และระบบรังสีร่วมรักษา",
        en: "Srima-Medic, an authorised Philips distributor of CT, MRI, X-ray and interventional systems.",
      },
    },
    {
      image: IMG.renovation,
      logos: [
        { src: "/logos/sima-solutions.png", alt: "Sima Solutions" },
        { src: "/logos/sima-renovation.png", alt: "Sima Renovation" },
      ],
      title: { th: "ระบบสนับสนุนและโครงสร้างพื้นฐาน", en: "Supporting solutions & infrastructure" },
      body: {
        th: "Sima Solutions จัดหาระบบสนับสนุน เช่น UPS และ Injector · Sima Renovation งานก่อสร้าง ปรับปรุง และเตรียมพื้นที่สำหรับสถานพยาบาล",
        en: "Sima Solutions supplies support systems such as UPS and injectors; Sima Renovation handles construction, renovation and site preparation.",
      },
    },
  ],
  visionTitle: { th: "วิสัยทัศน์และพันธกิจ", en: "Vision & mission" },
  vision: {
    th: "เป็นบริษัทที่จัดหาเครื่องมือแพทย์ที่ปลอดภัยและเป็นนวัตกรรม เพื่อสนับสนุนความแม่นยำและคุณภาพการรักษาของสถานพยาบาลทั่วประเทศ",
    en: "Be a company providing safe and innovative medical equipment contributing to the accuracy and quality treatments of all medical institutions nationwide.",
  },
  mission: {
    th: "จัดหาและบริหารจัดการเครื่องมือแพทย์ให้โรงพยาบาล เพื่อให้ทุกคนเข้าถึงและได้รับประโยชน์สูงสุด",
    en: "Supply and manage medical equipment for hospitals to ensure accessibility and utmost benefits to all.",
  },
  leadersTitle: { th: "ผู้บริหาร", en: "Leadership" },
  teamTitle: { th: "ความแข็งแกร่งของทีม", en: "Team strength" },
  certsTitle: { th: "การรับรองและรางวัล", en: "Certifications & awards" },
  certsIntro: {
    th: "ได้รับการยกย่องจาก Philips ด้านผลการดำเนินงานและความเป็นพันธมิตรในภูมิภาคเอเชียแปซิฟิก",
    en: "Recognised by Philips for performance and partnership across the Asia-Pacific region.",
  },
  partnershipTitle: { th: "พันธมิตรทางการค้ากับ Philips", en: "Trade partner of Philips" },
  partnershipBody: {
    th: "ตั้งแต่ปี พ.ศ. 2559 Srima-Medic เป็นพันธมิตรทางการค้าและตัวแทนจำหน่ายที่ได้รับอนุญาตจาก Philips ดูแลโรงพยาบาลภาครัฐและเอกชนทั่วประเทศ ตั้งแต่การเลือกระบบ ติดตั้ง ไปจนถึงบริการหลังการขาย",
    en: "Since 2016 Srima-Medic has been a trade partner and authorised distributor of Philips, supporting public and private hospitals nationwide from system selection and installation to after-sales service.",
  },
  partnershipFacts: [
    { value: "2016", label: { th: "เริ่มเป็นพันธมิตรกับ Philips", en: "Partner of Philips since" } },
    { value: "4", label: { th: "กลุ่มผลิตภัณฑ์ CT · MRI · IGT · X-ray", en: "Product lines: CT · MRI · IGT · X-ray" } },
    { value: "5", label: { th: "รางวัลจาก Philips (2021–2024)", en: "Philips awards (2021–2024)" } },
  ],
  partnershipCta: { th: "ดูผลิตภัณฑ์ Philips", en: "View Philips products" },
};

const LEADERS = [
  { photo: "/leaders/thananan.webp", name: { th: "คุณธนานันต์ เตชะธรรมนุกูล", en: "Thananan Taechadhumnukul" }, role: { th: "ประธานเจ้าหน้าที่บริหาร (CEO)", en: "Chief Executive Officer (CEO)" } },
  { photo: "/leaders/chatuphong.webp", name: { th: "Chatuphong Nudchanart", en: "Chatuphong Nudchanart" }, role: { th: "Chief Service Officer (CSO)", en: "Chief Service Officer (CSO)" } },
  { photo: "/leaders/natsanu.webp", name: { th: "Natsanu Bamphenthamsakul", en: "Natsanu Bamphenthamsakul" }, role: { th: "Director of Project Operations", en: "Director of Project Operations" } },
];

const TEAM = [
  { value: "12", label: { th: "ทีมขาย ดูแล 5 ภูมิภาค", en: "Sales professionals across 5 regions" } },
  { value: "9", label: { th: "วิศวกรบริการ", en: "Service engineers" } },
  { value: "5", label: { th: "ทีมสนับสนุนการขาย", en: "Sales support staff" } },
  { value: "600+", label: { th: "บุคลากรทั้งกลุ่มบริษัท", en: "Staff across the group" } },
];

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { lang } = (await params) as { lang: Lang };
  return { title: copy.title[lang] };
}

export default async function AboutPage({ params }: PageParams) {
  const { lang } = (await params) as { lang: Lang };

  const milestones = [
    { year: "2001", title: "Tomograph Co., Ltd.", sub: lang === "th" ? "จุดเริ่มต้นของกลุ่ม" : "Where the group began", logos: [{ src: "/logos/tomograph.png", alt: "Tomograph" }] },
    {
      year: "2013",
      title: "Sima Health Care · Sima MRI",
      sub: lang === "th" ? "ลงทุนด้านสุขภาพและโครงการ PPP" : "Healthcare investment and PPP",
      logos: [
        { src: "/logos/sima-healthcare.png", alt: "Sima Health Care" },
        { src: "/logos/sima-mri.png", alt: "Sima MRI" },
      ],
    },
    { year: "2015", title: "Srima-Medic Co., Ltd.", sub: lang === "th" ? "ก่อตั้งบริษัท" : "Company founded", logos: [{ src: "/brand/logo-srima.png", alt: "Srima-Medic" }], highlight: true },
    { year: "2016", title: lang === "th" ? "พันธมิตรทางการค้ากับ Philips" : "Philips trade partnership", logos: [{ src: "/logos/philips.png", alt: "Philips" }] },
    { year: "2017", title: "Sima Solutions Co., Ltd.", sub: lang === "th" ? "ระบบสนับสนุน เช่น UPS และ Injector" : "Support systems such as UPS and injectors", logos: [{ src: "/logos/sima-solutions.png", alt: "Sima Solutions" }] },
    { year: "2018", title: "Sima Renovation Co., Ltd.", sub: lang === "th" ? "ก่อสร้างและเตรียมพื้นที่ติดตั้ง" : "Construction and site preparation", logos: [{ src: "/logos/sima-renovation.png", alt: "Sima Renovation" }] },
  ];

  const historyPhotos = [
    { src: IMG.office, alt: lang === "th" ? "สำนักงาน" : "Office", note: ui.aiSample[lang] },
    { src: IMG.seminar, alt: lang === "th" ? "งานสัมมนา" : "Seminar", note: ui.aiSample[lang] },
    { src: IMG.hospital, alt: lang === "th" ? "โรงพยาบาลที่ร่วมงาน" : "Partner hospital", note: ui.aiSample[lang] },
    { src: REAL.building, alt: lang === "th" ? "อาคารสำนักงาน Srima-Medic" : "Srima-Medic office building" },
  ];

  return (
    <>
      <PageHero title={copy.title[lang]} description={copy.desc[lang]} crumbs={[{ label: NAV[0].label[lang], href: href(lang, "") }, { label: NAV.find((n) => n.path === "/about")!.label[lang] }]} image={REAL.building} imageAlt={lang === "th" ? "อาคารสำนักงาน Srima-Medic" : "Srima-Medic office building"} />

      <Section>
        <div className="split" style={{ alignItems: "start" }}>
          <div>
            <h2 className="h2">{copy.historyTitle[lang]}</h2>
            <div className="prose">
              {copy.history[lang].map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <PhotoRotator photos={historyPhotos} height={380} label={copy.historyTitle[lang]} />
        </div>
      </Section>

      {/* Group journey: one card per milestone on a rail, logos instead of placeholders */}
      <Section alt>
        <h2 className="h2">{copy.timelineTitle[lang]}</h2>
        <ol className="journey">
          {milestones.map((m) => (
            <li key={m.year} className={`journey__item${m.highlight ? " is-highlight" : ""}`}>
              <span className="journey__year">{m.year}</span>
              <span className="journey__dot" aria-hidden="true" />
              <div className="journey__card">
                <div className="journey__logos">
                  {m.logos.map((l) => (
                    <Image key={l.alt} src={withBase(l.src)} alt={l.alt} width={160} height={80} />
                  ))}
                </div>
                <h3>{m.title}</h3>
                {m.sub ? <p>{m.sub}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <h2 className="h2 h2--sm">{copy.groupTitle[lang]}</h2>
        <p className="section-intro">{copy.groupIntro[lang]}</p>
        {/* Figma: about us_section_Sima Group of Companies. Photo cards; title by default, details on hover/focus */}
        <ul className="group-cards">
          {copy.group.map((g) => (
            <li key={g.title.en} className="group-card" tabIndex={0}>
              <Image src={withBase(g.image)} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
              <span className="photo__note">{ui.aiSample[lang]}</span>
              <div className="group-card__body">
                <h3>{g.title[lang]}</h3>
                <div className="group-card__detail">
                  <div>
                    <p>{g.body[lang]}</p>
                    <div className="group-card__logos">
                      {g.logos.map((l) => (
                        <span key={l.alt}>
                          <Image src={withBase(l.src)} alt={l.alt} width={120} height={60} />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section alt>
        <h2 className="h2">{copy.visionTitle[lang]}</h2>
        <Grid min={300} gap={24}>
          <div className="card" style={{ padding: 28 }}>
            <h3>Vision</h3>
            <p style={{ fontSize: 17, color: "var(--text)" }}>{copy.vision[lang]}</p>
          </div>
          <div className="card" style={{ padding: 28 }}>
            <h3>Mission</h3>
            <p style={{ fontSize: 17, color: "var(--text)" }}>{copy.mission[lang]}</p>
          </div>
        </Grid>
      </Section>

      <Section>
        <h2 className="h2 h2--sm">{copy.leadersTitle[lang]}</h2>
        <ul className="leaders">
          {LEADERS.map((p) => (
            <li key={p.photo} className="leader">
              <div className="leader__photo">
                <Image src={withBase(p.photo)} alt={p.name[lang]} width={260} height={380} sizes="(max-width: 600px) 60vw, 260px" />
              </div>
              <h3>{p.name[lang]}</h3>
              <p>{p.role[lang]}</p>
            </li>
          ))}
        </ul>

        <h2 className="h2" style={{ marginTop: 56 }}>
          {copy.teamTitle[lang]}
        </h2>
        <Figures items={TEAM.map((t) => ({ value: t.value, label: t.label[lang] }))} min={180} />
      </Section>

      {/* Strategic partnership: sits right before the awards, so the partnership leads into the recognition it earned */}
      <Section alt>
        <div className="partnership">
          <div className="partnership__marks" aria-hidden="true">
            <Image src={withBase("/brand/logo-srima.png")} alt="" width={200} height={80} />
            <span className="partnership__x">×</span>
            <Image src={withBase("/logos/philips.png")} alt="" width={84} height={106} />
          </div>
          <div>
            <p className="eyebrow">Strategic Partnership</p>
            <h2 className="h2 h2--sm">{copy.partnershipTitle[lang]}</h2>
            <p className="lead">{copy.partnershipBody[lang]}</p>
            <ul className="partnership__facts">
              {copy.partnershipFacts.map((f) => (
                <li key={f.value}>
                  <span className="figure__value">{f.value}</span>
                  <span className="figure__label">{f.label[lang]}</span>
                </li>
              ))}
            </ul>
            <ButtonLink href={href(lang, "/products")} variant="secondary" iconAfter="arrow-right">
              {copy.partnershipCta[lang]}
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="h2 h2--sm">{copy.certsTitle[lang]}</h2>
        <p className="section-intro section-intro--wide">{copy.certsIntro[lang]}</p>
        <AwardGrid lang={lang} />
        <Grid min={240} style={{ marginTop: 40 }}>
          {[
            { tag: "LICENCE", label: lang === "th" ? "ใบอนุญาตขายเครื่องมือแพทย์" : "Medical device sales licence" },
            { tag: "DBD", label: "DBD Registered" },
          ].map((c) => (
            <div key={c.tag} className="card stack">
              <Placeholder tag={c.tag} height={110} />
              <span className="small">
                {c.label}
                <Sample>{ui.pending[lang]}</Sample>
              </span>
            </div>
          ))}
        </Grid>
      </Section>
    </>
  );
}
