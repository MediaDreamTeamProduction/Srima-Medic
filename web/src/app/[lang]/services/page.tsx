import type { Metadata } from "next";
import { RegionPicker } from "@/components/Filters";
import { Icon } from "@/components/Icon";
import { ButtonLink, PageHero, Placeholder, Sample, Section, ServiceCard } from "@/components/ui";
import { SERVICES } from "@/content/services";
import { ui } from "@/content/site";
import { href, type Lang, type PageParams } from "@/lib/i18n";

const copy = {
  title: { th: "บริการและสนับสนุน", en: "Services & Support" },
  desc: {
    th: "ดูแลเครื่องตลอดอายุการใช้งาน ตั้งแต่ออกแบบห้องตรวจ ติดตั้ง ฝึกอบรมการใช้งาน จนถึงบำรุงรักษาและซัพพอร์ตระยะไกล",
    en: "Support across the full life of every system — from room design and installation to application training, maintenance and remote support.",
  },
  cards: [
    {
      icon: "ruler" as const,
      title: { th: "Installation & Renovation", en: "Installation & Renovation" },
      body: {
        th: "ออกแบบ ปรับปรุง และเตรียมพื้นที่ห้องตรวจให้พร้อมติดตั้ง ดำเนินงานโดย Sima Renovation บริษัทในเครือ",
        en: "Design, renovation and site preparation of imaging rooms, carried out by our sister company Sima Renovation.",
      },
    },
    {
      icon: "wrench" as const,
      title: { th: "Maintenance Service (PM/CM)", en: "Maintenance Service (PM/CM)" },
      body: {
        th: "การบำรุงรักษาเชิงป้องกัน (PM) และซ่อมบำรุง (CM) โดยทีมวิศวกรบริการ 9 ท่าน ครอบคลุมทั่วประเทศ",
        en: "Preventive (PM) and corrective (CM) maintenance by our team of 9 service engineers, nationwide.",
      },
    },
    {
      icon: "users" as const,
      title: { th: "Application Training", en: "Application Training" },
      body: {
        th: "อบรมการใช้งานเครื่องมือแพทย์โดย Product Specialist เพื่อให้ทีมผู้ใช้งานใช้เครื่องได้เต็มประสิทธิภาพ",
        en: "Hands-on application training by our Product Specialist so your team gets the most from every system.",
      },
    },
    {
      icon: "monitor-dot" as const,
      title: { th: "Remote Support", en: "Remote Support" },
      body: {
        th: "ระบบช่วยเหลือทางไกล ช่วยวิเคราะห์ปัญหาได้รวดเร็ว และลด Downtime ของเครื่อง",
        en: "Remote assistance to diagnose issues quickly and reduce system downtime.",
      },
    },
  ],
  regionTitle: { th: "ทีมบริการครอบคลุม 5 ภูมิภาค", en: "Service coverage in 5 regions" },
  regionIntro: {
    th: "เลือกภูมิภาคเพื่อดูทีมที่ดูแลพื้นที่ของท่าน",
    en: "Choose a region to see the team covering your area.",
  },
  pmCta: { th: "ขอใบเสนอราคาแผน PM", en: "Request a PM plan quote" },
  stepsTitle: { th: "ขั้นตอนการทำงานแบบครบวงจร", en: "Our end-to-end process" },
};

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { lang } = (await params) as { lang: Lang };
  return { title: copy.title[lang], description: copy.desc[lang] };
}

export default async function ServicesPage({ params }: PageParams) {
  const { lang } = (await params) as { lang: Lang };
  return (
    <>
      <PageHero title={copy.title[lang]} description={copy.desc[lang]} art="wrench" />

      <Section style={{ paddingTop: 56, paddingBottom: 40 }}>
        <div className="grid-2x2">
          {copy.cards.map((s) => (
            <ServiceCard key={s.icon} icon={s.icon} title={s.title[lang]} as="h2">
              {s.body[lang]}
            </ServiceCard>
          ))}
        </div>
      </Section>

      <Section alt>
        <div className="split">
          <div>
            <h2 className="h2 h2--sm">{copy.regionTitle[lang]}</h2>
            <p className="section-intro" style={{ marginBottom: 20 }}>
              {copy.regionIntro[lang]}
            </p>
            <RegionPicker lang={lang} />
            <div style={{ marginTop: 24 }}>
              <ButtonLink href={href(lang, "/contact")}>{copy.pmCta[lang]}</ButtonLink>
            </div>
          </div>
          <Placeholder variant="rounded" height={300} icon="map-pin" tag="MAP" label={<>{lang === "th" ? "แผนที่พื้นที่ให้บริการ" : "Service area map"}<Sample>{ui.sample[lang]}</Sample></>} style={{ background: "var(--surface)" }} />
        </div>
      </Section>

      <Section>
        <h2 className="h2">{copy.stepsTitle[lang]}</h2>
        <ol className="lifecycle">
          {SERVICES.map((s, i) => (
            <li key={s.title.en} className={s.icon === "wrench" ? "is-anchor" : undefined}>
              <span className="lifecycle__mark">
                <Icon name={s.icon} size={28} />
              </span>
              <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title[lang]}</h3>
              <p>{s.body[lang]}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
