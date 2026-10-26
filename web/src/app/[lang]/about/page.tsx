import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { Figures, Grid, PageHero, Photo, Placeholder, Sample, Section, Timeline } from "@/components/ui";
import { IMG } from "@/content/images";
import { ui } from "@/content/site";
import type { Lang, PageParams } from "@/lib/i18n";

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
  timelineTitle: { th: "เส้นทางของกลุ่มบริษัท (2001 – ปัจจุบัน)", en: "Our group's journey (2001 – today)" },
  groupTitle: { th: "Sima Group of Companies", en: "Sima Group of Companies" },
  groupIntro: {
    th: "โซลูชันด้านสุขภาพแบบครบวงจร ตั้งแต่การลงทุนจนถึงการติดตั้งและการดูแลระยะยาว",
    en: "End-to-end healthcare solutions — from investment to installation and long-term support.",
  },
  group: [
    {
      icon: "building" as const,
      title: { th: "การลงทุนด้านสุขภาพและ PPP", en: "Healthcare investment & PPP" },
      body: {
        th: "จัดหาเครื่อง CT, MRI และระบบภาพทางการแพทย์ ผ่านรูปแบบการลงทุน การเช่า และการแบ่งปันผลประโยชน์ (PPP) สำหรับโรงพยาบาลภาครัฐและเอกชน",
        en: "CT, MRI and imaging systems through investment, rental and profit-sharing (PPP) models for public and private hospitals.",
      },
    },
    {
      icon: "scan" as const,
      title: { th: "จัดจำหน่ายเครื่องมือแพทย์", en: "Medical equipment distribution" },
      body: {
        th: "Srima-Medic ตัวแทนจำหน่ายที่ได้รับอนุญาตจาก Philips ครอบคลุม CT, MRI, X-ray และระบบรังสีร่วมรักษา",
        en: "Srima-Medic, an authorised Philips distributor of CT, MRI, X-ray and interventional systems.",
      },
    },
    {
      icon: "wrench" as const,
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
  leadersNote: { th: "รอยืนยันรายชื่อ 3 ท่านที่จะแสดง และรูปถ่ายที่อนุญาตให้เผยแพร่", en: "Pending confirmation of the 3 people to feature and approved photos" },
  teamTitle: { th: "ความแข็งแกร่งของทีม", en: "Team strength" },
  certsTitle: { th: "การรับรองและรางวัล", en: "Certifications & awards" },
};

const LEADERS = [
  { initials: "TT", name: { th: "คุณธนานันต์ เตชะธรรมนุกูล", en: "Thananan Taechadhumnukul" }, role: { th: "ประธานเจ้าหน้าที่บริหาร (CEO)", en: "Chief Executive Officer (CEO)" } },
  { initials: "CT", name: { th: "Chatthachai Thubthimsri", en: "Chatthachai Thubthimsri" }, role: { th: "Chief Product Officer (CPO)", en: "Chief Product Officer (CPO)" } },
  { initials: "CN", name: { th: "Chatuphong Nudchanart", en: "Chatuphong Nudchanart" }, role: { th: "Chief Service Officer (CSO)", en: "Chief Service Officer (CSO)" } },
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
    { year: "2001", title: "Tomograph Co., Ltd.", sub: lang === "th" ? "จุดเริ่มต้นของกลุ่ม" : "Where the group began", logos: ["LOGO"] },
    { year: "2013", title: "Sima Health Care Co., Ltd. · Sima MRI Co., Ltd.", logos: ["LOGO", "LOGO"] },
    { year: "2015", title: "Srima-Medic Co., Ltd.", sub: lang === "th" ? "ก่อตั้งบริษัท" : "Company founded", logos: ["LOGO"] },
    { year: "2016", title: lang === "th" ? "พันธมิตรทางการค้ากับ Philips" : "Philips trade partnership" },
    { year: "2017", title: "Sima Solutions Co., Ltd.", logos: ["LOGO"] },
    { year: "2018", title: "Sima Renovation Co., Ltd.", logos: ["LOGO"] },
  ];

  return (
    <>
      <PageHero title={copy.title[lang]} description={copy.desc[lang]} art="building" />

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
          <Photo variant="rounded" height={340} src={IMG.office} alt={lang === "th" ? "สำนักงาน" : "Office"} note={ui.aiSample[lang]} />
        </div>
      </Section>

      <Section alt>
        <h2 className="h2">{copy.timelineTitle[lang]}</h2>
        <Timeline items={milestones} />
      </Section>

      <Section>
        <h2 className="h2 h2--sm">{copy.groupTitle[lang]}</h2>
        <p className="section-intro">{copy.groupIntro[lang]}</p>
        <Grid min={260}>
          {copy.group.map((g) => (
            <div key={g.title.en} className="card">
              <div className="icon-head">
                <Icon name={g.icon} size={26} />
                <h3>{g.title[lang]}</h3>
              </div>
              <p>{g.body[lang]}</p>
            </div>
          ))}
        </Grid>
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
        <p className="section-intro">
          <span className="sample">{copy.leadersNote[lang]}</span>
        </p>
        <Grid min={220}>
          {LEADERS.map((p) => (
            <div key={p.initials} className="card person">
              <div className="avatar">{p.initials}</div>
              <div style={{ fontWeight: 600 }}>{p.name[lang]}</div>
              <div className="caption" style={{ marginTop: 4, color: "var(--text-soft)" }}>
                {p.role[lang]}
              </div>
            </div>
          ))}
        </Grid>

        <h2 className="h2" style={{ marginTop: 56 }}>
          {copy.teamTitle[lang]}
        </h2>
        <Figures items={TEAM.map((t) => ({ value: t.value, label: t.label[lang] }))} min={180} />
      </Section>

      <Section alt>
        <h2 className="h2">{copy.certsTitle[lang]}</h2>
        <Grid min={220}>
          {[
            { tag: "AWARD", label: "Recognition from Philips 2021–2024" },
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
