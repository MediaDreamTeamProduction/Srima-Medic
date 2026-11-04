import Image from "next/image";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Icon } from "@/components/Icon";
import { ParallaxBg } from "@/components/ParallaxBg";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { AwardGrid, ButtonLink, Figures, Marquee, MockHospitalLogo, Photo, QuoteMark, Section } from "@/components/ui";
import { IMG, REAL } from "@/content/images";
import { PRODUCTS } from "@/content/products";
import { FAQ } from "@/content/faq";
import { PARTNERS } from "@/content/recognition";
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
  groupTitle: { th: "พันธมิตรทางธุรกิจ", en: "Business partners" },
  clientsTitle: { th: "โรงพยาบาลและศูนย์ภาพวินิจฉัยที่ไว้วางใจ", en: "Trusted by hospitals and imaging centers" },
  installedLabel: { th: "ระบบที่ติดตั้งแล้ว", en: "systems installed" },
  faqTitle: { th: "คำถามที่พบบ่อย", en: "Frequently asked questions" },
  faqIntro: { th: "คำตอบสั้น ๆ สำหรับคำถามที่โรงพยาบาลสอบถามบ่อย หากต้องการข้อมูลเพิ่มเติม ทีมงานพร้อมติดต่อกลับ", en: "Short answers to what hospitals ask us most. For anything else, our team will call you back." },
  faqNote: { th: "คำถามตัวอย่าง — รอรายการคำถามจริงจากลูกค้า", en: "Sample questions — pending the client's list" },
  faqCta: { th: "สอบถามเพิ่มเติม", en: "Ask us something else" },
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

      {/* Products (Figma: home_section_product): 2×2 cards, Philips link first, details second */}
      <Section>
        <div className="row" style={{ justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, gap: 16 }}>
          <h2 className="h2" style={{ margin: 0 }}>
            {copy.productsTitle[lang]}
          </h2>
          <ButtonLink href={href(lang, "/products")} variant="ghost" iconAfter="arrow-right">
            {ui.viewAllProducts[lang]}
          </ButtonLink>
        </div>
        <ul className="product-cards">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.slug} product={p} lang={lang} summary={p.philipsSummary[lang]} />
          ))}
        </ul>
        <p className="caption" style={{ marginTop: 24 }}>
          {copy.productsSource[lang]}
        </p>
      </Section>

      {/* Services (Figma: home_section_service): blurred photo backdrop, five services, revealed quote */}
      <section className="section services-home">
        <ParallaxBg src={REAL.building} className="services-home__bg" />
        <div className="container">
          <h2 className="h2 h2--sm">{copy.servicesTitle[lang]}</h2>
          <p className="section-intro">{copy.servicesIntro[lang]}</p>
          <ul className="service-row">
            {SERVICES.map((s) => (
              <li key={s.icon + s.title.en} className="service-item">
                <span className="service-item__icon">
                  <Image src={withBase(s.art)} alt="" width={160} height={160} sizes="160px" />
                </span>
                <h3>{s.title[lang]}</h3>
                <p>{s.body[lang]}</p>
              </li>
            ))}
          </ul>
          <Reveal className="services-quote">
            <blockquote>
              <QuoteMark className="services-quote__open" />
              <p>{copy.quote[lang]}</p>
              <QuoteMark className="services-quote__close" />
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Strategic partnership: Philips awards, photo frames waiting for the client's pictures */}
      <Section alt>
        <h2 className="h2 h2--sm">{copy.partnerTitle[lang]}</h2>
        <p className="section-intro section-intro--wide">{copy.partnerIntro[lang]}</p>
        <AwardGrid lang={lang} />
      </Section>

      {/* Group & business partners (real logos), then sample hospital logos */}
      <Section>
        <h2 className="h2" style={{ marginBottom: 24 }}>
          {copy.groupTitle[lang]}
        </h2>
        <Marquee label={copy.groupTitle[lang]} seconds={46}>
          {PARTNERS.map((p) => (
            <span key={p.name} className="marquee__logo" title={p.name}>
              {p.logo ? <Image src={withBase(p.logo)} alt={p.name} width={240} height={120} /> : p.name}
            </span>
          ))}
        </Marquee>
        <h2 className="h2" style={{ marginTop: 56, marginBottom: 24 }}>
          {copy.clientsTitle[lang]}
        </h2>
        <Marquee label={copy.clientsTitle[lang]} seconds={68}>
          {[0, 1, 2, 3, 4, 5].map((n) => (
            <span key={n} className="marquee__logo">
              <MockHospitalLogo index={n} />
            </span>
          ))}
        </Marquee>
      </Section>

      {/* FAQ (replaces the contact brief; the contact page keeps the full details) */}
      <section className="section closing section--fade">
        <div className="container faq-home">
          <div>
            <h2 className="h2 h2--sm">{copy.faqTitle[lang]}</h2>
            <p className="section-intro">{copy.faqIntro[lang]}</p>
            <p className="caption" style={{ marginBottom: 20 }}>
              <span className="sample">{copy.faqNote[lang]}</span>
            </p>
            <ButtonLink href={href(lang, "/contact")} variant="secondary" iconAfter="arrow-right">
              {copy.faqCta[lang]}
            </ButtonLink>
          </div>
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q.en}>
                <summary>{f.q[lang]}</summary>
                <p>{f.a[lang]}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
