import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import { ButtonLink, PageHero, RegionCards, Section } from "@/components/ui";
import { IMG } from "@/content/images";
import { SERVICES } from "@/content/services";
import { NAV, ui } from "@/content/site";
import { href, withBase, type Lang, type PageParams } from "@/lib/i18n";

const copy = {
  title: { th: "บริการและสนับสนุน", en: "Services & Support" },
  desc: {
    th: "ดูแลเครื่องตลอดอายุการใช้งาน ตั้งแต่ออกแบบห้องตรวจ ติดตั้ง ฝึกอบรมการใช้งาน จนถึงบำรุงรักษาและซัพพอร์ตระยะไกล",
    en: "Support across the full life of every system — from room design and installation to application training, maintenance and remote support.",
  },
  cards: [
    {
      art: "/services/service-renovation.webp",
      title: { th: "Installation & Renovation", en: "Installation & Renovation" },
      body: {
        th: "ออกแบบ ปรับปรุง และเตรียมพื้นที่ห้องตรวจให้พร้อมติดตั้ง ดำเนินงานโดย Sima Renovation บริษัทในเครือ",
        en: "Design, renovation and site preparation of imaging rooms, carried out by our sister company Sima Renovation.",
      },
    },
    {
      art: "/services/service-pm.webp",
      title: { th: "Maintenance Service (PM/CM)", en: "Maintenance Service (PM/CM)" },
      body: {
        th: "การบำรุงรักษาเชิงป้องกัน (PM) และซ่อมบำรุง (CM) โดยทีมวิศวกรบริการ 9 ท่าน ครอบคลุมทั่วประเทศ",
        en: "Preventive (PM) and corrective (CM) maintenance by our team of 9 service engineers, nationwide.",
      },
    },
    {
      art: "/services/service-training.webp",
      title: { th: "Application Training", en: "Application Training" },
      body: {
        th: "อบรมการใช้งานเครื่องมือแพทย์โดย Product Specialist เพื่อให้ทีมผู้ใช้งานใช้เครื่องได้เต็มประสิทธิภาพ",
        en: "Hands-on application training by our Product Specialist so your team gets the most from every system.",
      },
    },
    {
      art: "/services/service-remote.webp",
      title: { th: "Remote Support", en: "Remote Support" },
      body: {
        th: "ระบบช่วยเหลือทางไกล ช่วยวิเคราะห์ปัญหาได้รวดเร็ว และลด Downtime ของเครื่อง",
        en: "Remote assistance to diagnose issues quickly and reduce system downtime.",
      },
    },
  ],
  regionTitle: { th: "ทีมบริการครอบคลุม 5 ภูมิภาค", en: "Service coverage in 5 regions" },
  regionIntro: {
    th: "วิศวกรบริการประจำแต่ละภาค พร้อมดูแลเครื่องของท่านในพื้นที่",
    en: "Service engineers based in each region, ready to look after your systems locally.",
  },
  pmCta: { th: "ขอใบเสนอราคาแผน PM", en: "Request a PM plan quote" },
  stepsTitle: { th: "ขั้นตอนการทำงานแบบครบวงจร", en: "Our end-to-end process" },
  stepsIntro: {
    th: "ทีมเดียวดูแลต่อเนื่องตั้งแต่วันแรกที่ให้คำปรึกษา จนถึงการดูแลเครื่องหลังส่งมอบ",
    en: "One team from the first consultation through to care after handover.",
  },
  stepLabel: { th: "ขั้นตอน", en: "Step" },
};

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { lang } = (await params) as { lang: Lang };
  return { title: copy.title[lang], description: copy.desc[lang] };
}

export default async function ServicesPage({ params }: PageParams) {
  const { lang } = (await params) as { lang: Lang };
  return (
    <>
      <PageHero title={copy.title[lang]} description={copy.desc[lang]} crumbs={[{ label: NAV[0].label[lang], href: href(lang, "") }, { label: NAV.find((n) => n.path === "/services")!.label[lang] }]} image={IMG.renovation} note={ui.aiSample[lang]} />

      {/* Same pattern as the home services row: illustration tile, title, detail */}
      <Section style={{ paddingTop: 56 }}>
        <ul className="service-row service-row--4">
          {copy.cards.map((s) => (
            <li key={s.art} className="service-item">
              <span className="service-item__icon">
                <Image src={withBase(s.art)} alt="" width={160} height={160} sizes="160px" />
              </span>
              <h2>{s.title[lang]}</h2>
              <p>{s.body[lang]}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section alt>
        <h2 className="h2 h2--sm">{copy.regionTitle[lang]}</h2>
        <p className="section-intro" style={{ marginBottom: 20 }}>
          {copy.regionIntro[lang]}
        </p>
        <RegionCards lang={lang} role={lang === "th" ? "วิศวกรบริการประจำภาค" : "Regional service engineer"} />
        <div style={{ marginTop: 24 }}>
          <ButtonLink href={href(lang, "/contact")}>{copy.pmCta[lang]}</ButtonLink>
        </div>
      </Section>

      {/* Process: a chevron band carries the step numbers; illustrations above, copy below */}
      <Section>
        <h2 className="h2 h2--sm">{copy.stepsTitle[lang]}</h2>
        <p className="section-intro">{copy.stepsIntro[lang]}</p>
        <ol className="process">
          {SERVICES.map((s, i) => (
            <li key={s.title.en} className="process__step" style={{ "--step": i } as CSSProperties}>
              <div className="process__art">
                <Image src={withBase(s.art)} alt="" width={160} height={160} sizes="140px" />
              </div>
              <div className="process__chevron">
                <span className="process__label">{copy.stepLabel[lang]}</span>
                <span className="process__num">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3>{s.title[lang]}</h3>
              <p>{s.body[lang]}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
