import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, Figures, MockHospitalLogo, Photo, Sample, Section } from "@/components/ui";
import { IMG, IMG_BY_CATEGORY, REAL } from "@/content/images";
import { PRODUCTS } from "@/content/products";
import { AWARDS, PARTNERS } from "@/content/recognition";
import { company, ui } from "@/content/site";
import { href, withBase, type Lang, type PageParams } from "@/lib/i18n";
import { SERVICES } from "@/content/services";

const copy = {
  slides: [
    { title: { th: "Delivering Advanced Medical Imaging Solutions", en: "Delivering Advanced Medical Imaging Solutions" } },
    { title: { th: "ระบบ CT และ MRI จาก Philips สำหรับโรงพยาบาลทั่วประเทศ", en: "Philips CT & MRI for hospitals nationwide" } },
    { title: { th: "ดูแลตั้งแต่ติดตั้ง จนถึงบริการหลังการขาย", en: "From installation to after-sales care" } },
  ],
  authorized: { th: "ตัวแทนจำหน่ายที่ได้รับอนุญาต", en: "Authorized Partner" },
  heroDesc: {
    th: "Srima-Medic ให้บริการโซลูชันด้านภาพวินิจฉัยทางการแพทย์ ครอบคลุม CT, MRI, X-ray และระบบรังสีร่วมรักษา ในฐานะ Authorized Partner ของ Philips",
    en: "Srima-Medic delivers medical imaging solutions — CT, MRI, X-ray and interventional systems — as an authorised partner of Philips.",
  },
  introTitle: {
    th: "ผู้เชี่ยวชาญด้านเครื่องมือแพทย์ภาพวินิจฉัย ที่พร้อมดูแลโรงพยาบาลตลอดอายุการใช้งานเครื่อง",
    en: "Medical imaging specialists who support hospitals throughout the life of every system",
  },
  pillars: [
    { th: "Authorized Partner ของ Philips", en: "Authorised Philips partner" },
    { th: "เชี่ยวชาญ CT · MRI · X-ray · IGT", en: "CT · MRI · X-ray · IGT expertise" },
    { th: "บริการครบวงจร", en: "End-to-end solutions" },
    { th: "ดูแลระยะยาว", en: "Long-term partnership" },
  ],
  carousel: { pause: { th: "หยุดสไลด์", en: "Pause slides" }, play: { th: "เล่นสไลด์", en: "Play slides" } },
  stats: [
    { value: "320+", label: { th: "ระบบที่ติดตั้งแล้ว", en: "Systems installed" } },
    { value: "150+", label: { th: "ศูนย์ภาพวินิจฉัย", en: "Imaging centers" } },
    { value: "20+", label: { th: "ปีของประสบการณ์ในเครือ", en: "Years of group experience" } },
  ],
  productsTitle: { th: "ผลิตภัณฑ์ภาพวินิจฉัยจาก Philips", en: "Philips imaging solutions" },
  productsSource: { th: "คำอธิบายผลิตภัณฑ์สรุปจากเว็บไซต์ Philips (philips.co.th)", en: "Product descriptions summarised from the Philips website (philips.co.th)." },
  servicesTitle: { th: "บริการของเรา", en: "Our services" },
  servicesIntro: {
    th: "โซลูชันด้านระบบภาพวินิจฉัยทางการแพทย์ สำหรับโรงพยาบาลและสถานพยาบาล",
    en: "Medical imaging solutions for hospitals and healthcare facilities.",
  },
  quote: {
    th: "เราพร้อมสนับสนุนโรงพยาบาลด้วยเครื่องมือแพทย์และโซลูชันด้านภาพวินิจฉัย ตั้งแต่การให้คำปรึกษา วางแผนโครงการ ไปจนถึงการส่งมอบระบบ",
    en: "We support hospitals with medical equipment and imaging solutions — from consultation and project planning through to system handover.",
  },
  partnerTitle: { th: "Authorized Partner ของ Philips", en: "Authorised partner of Philips" },
  partnerIntro: {
    th: "ได้รับการยกย่องจาก Philips ด้านผลการดำเนินงานและความเป็นพันธมิตรในภูมิภาคเอเชียแปซิฟิก",
    en: "Recognised by Philips for performance and partnership across the Asia-Pacific region.",
  },
  awardPhoto: { th: "รอรูปรางวัล", en: "Award photo pending" },
  groupTitle: { th: "พันธมิตรทางธุรกิจ", en: "Business partners" },
  clientsTitle: { th: "โรงพยาบาลและศูนย์ภาพวินิจฉัยที่ไว้วางใจ", en: "Trusted by hospitals and imaging centers" },
  clientsNote: { th: "โลโก้ตัวอย่าง รอโลโก้โรงพยาบาลคู่ค้าที่ได้รับอนุญาตให้เผยแพร่", en: "Sample logos: waiting for client hospital logos cleared for publication" },
  installedLabel: { th: "ระบบที่ติดตั้งแล้ว", en: "systems installed" },
  contactTitle: { th: "ติดต่อเรา", en: "Contact us" },
  contactBody: { th: "สอบถามข้อมูลผลิตภัณฑ์ ขอใบเสนอราคา หรือนัดหมายให้ทีมงานติดต่อกลับ", en: "Ask about products, request a quotation, or book a call back from our team." },
  contactCta: { th: "ไปที่หน้าติดต่อเรา", en: "Go to the contact page" },
};

export default async function HomePage({ params }: PageParams) {
  const { lang } = (await params) as { lang: Lang };

  const slides = [
    { title: copy.slides[0].title[lang], image: IMG.ct, note: ui.aiSample[lang] },
    {
      title: copy.slides[1].title[lang],
      image: IMG.mri,
      note: ui.aiSample[lang],
      badge: (
        <>
          <Image src={withBase("/logos/philips.png")} alt="Philips" width={84} height={106} />
          <span>{copy.authorized[lang]}</span>
        </>
      ),
    },
    { title: copy.slides[2].title[lang], image: REAL.building },
  ];

  return (
    <>
      <HeroCarousel
        slides={slides}
        labels={{ pause: copy.carousel.pause[lang], play: copy.carousel.play[lang] }}
        proof={<Figures items={copy.stats.map((s) => ({ value: s.value, label: s.label[lang] }))} />}
      >
        <p className="hero-home__lede">{copy.heroDesc[lang]}</p>
        <div className="row" style={{ gap: 12 }}>
          <ButtonLink href={href(lang, "/contact")} size="lg">
            {ui.contactSales[lang]}
          </ButtonLink>
          <ButtonLink href={href(lang, "/products")} variant="secondary" size="lg" iconAfter="arrow-right">
            {ui.viewProducts[lang]}
          </ButtonLink>
        </div>
      </HeroCarousel>

      {/* Company overview */}
      <Section>
        <div className="split">
          <div>
            <h2 className="h2 h2--sm">{copy.introTitle[lang]}</h2>
            <p className="lead" style={{ marginTop: 16 }}>
              {company.shortDescription[lang]}
            </p>
            <ul className="checklist">
              {copy.pillars.map((p) => (
                <li key={p.en}>
                  <Icon name="check-circle" size={20} />
                  {p[lang]}
                </li>
              ))}
            </ul>
          </div>
          <Photo variant="rounded" height={360} src={IMG.mri} alt={lang === "th" ? "ห้องตรวจ MRI" : "MRI suite"} note={ui.aiSample[lang]} />
        </div>
      </Section>

      {/* Products: a modality index; copy summarised from Philips */}
      <Section alt>
        <div className="row" style={{ justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28, gap: 16 }}>
          <h2 className="h2" style={{ margin: 0 }}>
            {copy.productsTitle[lang]}
          </h2>
          <ButtonLink href={href(lang, "/products")} variant="ghost" iconAfter="arrow-right">
            {ui.viewAllProducts[lang]}
          </ButtonLink>
        </div>
        <div className="modalities">
          {PRODUCTS.map((p) => (
            <Link key={p.slug} href={href(lang, `/products/${p.slug}`)} className="modality">
              <Photo src={IMG_BY_CATEGORY[p.category]} alt={p.name} height={160} sizes="(max-width: 560px) 100vw, (max-width: 1023px) 50vw, 25vw" note={ui.aiSample[lang]} style={{ marginBottom: 8 }} />
              <span className="modality__code">{p.category}</span>
              <h3>{p.name}</h3>
              <p>{p.philipsSummary[lang]}</p>
              <span className="modality__count">
                <span>
                  <strong>{p.installed}</strong> {copy.installedLabel[lang]}
                </span>
                <Icon name="arrow-right" size={18} />
              </span>
            </Link>
          ))}
        </div>
        <p className="caption" style={{ marginTop: 16 }}>
          {copy.productsSource[lang]}
        </p>
      </Section>

      {/* Services (Figma: home_section_service): blurred photo backdrop, five services, revealed quote */}
      <section className="section services-home">
        <div className="services-home__bg" aria-hidden="true">
          <Image src={withBase(REAL.building)} alt="" fill sizes="100vw" />
        </div>
        <div className="container">
          <h2 className="h2 h2--sm">{copy.servicesTitle[lang]}</h2>
          <p className="section-intro">{copy.servicesIntro[lang]}</p>
          <ul className="service-row">
            {SERVICES.map((s) => (
              <li key={s.icon + s.title.en} className="service-item">
                <span className="service-item__icon">
                  <Icon name={s.icon} size={44} />
                </span>
                <h3>{s.title[lang]}</h3>
                <p>{s.body[lang]}</p>
              </li>
            ))}
          </ul>
          <Reveal className="services-quote">
            <blockquote>
              <Image className="services-quote__open" src={withBase("/figma/quote-open.svg")} alt="" width={31} height={24} />
              <p>{copy.quote[lang]}</p>
              <Image className="services-quote__close" src={withBase("/figma/quote-close.svg")} alt="" width={31} height={24} />
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Strategic partnership: Philips awards, photo frames waiting for the client's pictures */}
      <Section alt>
        <h2 className="h2 h2--sm">{copy.partnerTitle[lang]}</h2>
        <p className="section-intro">{copy.partnerIntro[lang]}</p>
        <ol className="awards">
          {AWARDS.map((a) => (
            <li key={a.name} className="award">
              <div className="award__frame">
                <Icon name="badge-check" size={28} />
                <span className="sample">{copy.awardPhoto[lang]}</span>
              </div>
              <span className="award__year">{a.year}</span>
              <h3>{a.name}</h3>
              <p>{a.detail[lang]}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Group & business partners (real logos), then sample hospital logos */}
      <Section>
        <h2 className="h2" style={{ marginBottom: 24 }}>
          {copy.groupTitle[lang]}
        </h2>
        <div className="strip strip--logos">
          {PARTNERS.map((p) => (
            <div key={p.name} title={p.name}>
              {p.logo ? <Image src={withBase(p.logo)} alt={p.name} width={240} height={120} /> : p.name}
            </div>
          ))}
        </div>
        <h2 className="h2" style={{ marginTop: 56, marginBottom: 24 }}>
          {copy.clientsTitle[lang]}
        </h2>
        <div className="strip strip--logos">
          {[0, 1, 2, 3, 4, 5].map((n) => (
            <div key={n}>
              <MockHospitalLogo index={n} lang={lang} />
            </div>
          ))}
        </div>
        <p className="caption" style={{ marginTop: 12 }}>
          <Sample>{copy.clientsNote[lang]}</Sample>
        </p>
      </Section>

      {/* Contact summary */}
      <section className="section closing">
        <div className="container contact-brief">
          <div>
            <h2 className="h2 h2--sm">{copy.contactTitle[lang]}</h2>
            <p className="section-intro" style={{ marginBottom: 0 }}>
              {copy.contactBody[lang]}
            </p>
          </div>
          <ul className="contact-brief__list">
            <li className="contact-line">
              <Icon name="map-pin" size={18} />
              <span>{company.address[lang]}</span>
            </li>
            <li className="contact-line">
              <Icon name="phone" size={18} />
              <a href={company.phoneHref}>{company.phone}</a>
            </li>
            <li className="contact-line">
              <Icon name="mail" size={18} />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li className="contact-line">
              <Icon name="clock" size={18} />
              <span>{company.hours[lang]}</span>
            </li>
          </ul>
          <div className="contact-brief__cta">
            <ButtonLink href={href(lang, "/contact")} size="lg" iconAfter="arrow-right">
              {copy.contactCta[lang]}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
