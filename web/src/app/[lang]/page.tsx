import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Icon } from "@/components/Icon";
import { ButtonLink, Figures, Photo, Section, Timeline } from "@/components/ui";
import { IMG, IMG_BY_CATEGORY } from "@/content/images";
import { PRODUCTS } from "@/content/products";
import { company, ui } from "@/content/site";
import { href, type Lang, type PageParams } from "@/lib/i18n";
import { SERVICES } from "@/content/services";

const copy = {
  slides: [
    { title: { th: "Delivering Advanced Medical Imaging Solutions", en: "Delivering Advanced Medical Imaging Solutions" } },
    { title: { th: "ระบบ CT และ MRI จาก Philips สำหรับโรงพยาบาลทั่วประเทศ", en: "Philips CT & MRI for hospitals nationwide" } },
    { title: { th: "ดูแลตั้งแต่ติดตั้ง จนถึงบริการหลังการขาย", en: "From installation to after-sales care" } },
  ],
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
  awardName: { th: "Recognition from Philips", en: "Recognition from Philips" },
  awardPending: { th: "ชื่อรางวัล (รอข้อมูลจากลูกค้า)", en: "Award name (pending)" },
  groupTitle: { th: "พันธมิตรทางธุรกิจ", en: "Business partners" },
  clientsTitle: { th: "โรงพยาบาลและศูนย์ภาพวินิจฉัยที่ไว้วางใจ", en: "Trusted by hospitals and imaging centers" },
  installedLabel: { th: "ระบบที่ติดตั้งแล้ว", en: "systems installed" },
  closingTitle: { th: "วางแผนติดตั้งหรือเปลี่ยนเครื่องภาพวินิจฉัย?", en: "Planning a new or replacement imaging system?" },
  closingBody: { th: "คุยกับทีมขายเพื่อรับคำปรึกษาและใบเสนอราคา", en: "Talk to our sales team for advice and a quotation." },
};

export default async function HomePage({ params }: PageParams) {
  const { lang } = (await params) as { lang: Lang };

  return (
    <>
      <HeroCarousel
        slides={copy.slides.map((s) => ({ title: s.title[lang] }))}
        labels={{ pause: copy.carousel.pause[lang], play: copy.carousel.play[lang] }}
        proof={<Figures items={copy.stats.map((s) => ({ value: s.value, label: s.label[lang] }))} />}
      >
        <p className="hero-home__lede">{copy.heroDesc[lang]}</p>
        <div className="row" style={{ gap: 12 }}>
          <ButtonLink href={href(lang, "/contact")} size="lg">
            {ui.contactSales[lang]}
          </ButtonLink>
          <ButtonLink href={href(lang, "/products")} variant="on-dark" size="lg" iconAfter="arrow-right">
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

      {/* Products: a modality index rather than icon cards */}
      <Section alt>
        <div className="row" style={{ justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28, gap: 16 }}>
          <h2 className="h2" style={{ margin: 0 }}>
            {copy.productsTitle[lang]}
          </h2>
          <ButtonLink href={href(lang, "/products")} variant="ghost" iconAfter="arrow-right">
            {ui.viewProducts[lang]}
          </ButtonLink>
        </div>
        <div className="modalities">
          {PRODUCTS.map((p) => (
            <Link key={p.slug} href={href(lang, `/products/${p.slug}`)} className="modality">
              <Photo src={IMG_BY_CATEGORY[p.category]} alt={p.name} height={160} sizes="(max-width: 560px) 100vw, (max-width: 1023px) 50vw, 25vw" note={ui.aiSample[lang]} style={{ marginBottom: 8 }} />
              <span className="modality__code">{p.category}</span>
              <h3>{p.name}</h3>
              <p>{p.summary[lang]}</p>
              <span className="modality__count">
                <span>
                  <strong>{p.installed}</strong> {copy.installedLabel[lang]}
                </span>
                <Icon name="arrow-right" size={18} />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Services: the lifecycle, with after-sales as the anchor */}
      <Section>
        <h2 className="h2 h2--sm">{copy.servicesTitle[lang]}</h2>
        <p className="section-intro" style={{ marginBottom: 40 }}>
          {copy.servicesIntro[lang]}
        </p>
        <ol className="lifecycle">
          {SERVICES.map((s, i) => (
            <li key={s.icon + s.title.en} className={s.icon === "wrench" ? "is-anchor" : undefined}>
              <span className="lifecycle__mark">
                <Icon name={s.icon} size={28} />
              </span>
              <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title[lang]}</h3>
              <p>{s.body[lang]}</p>
            </li>
          ))}
        </ol>
        <blockquote className="quote" style={{ margin: "56px 0 0" }}>
          <svg className="quote__mark" viewBox="0 0 24 24" aria-hidden>
            <path d="M10 7H6a2 2 0 0 0-2 2v4h4v4H4M20 7h-4a2 2 0 0 0-2 2v4h4v4h-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p>{copy.quote[lang]}</p>
        </blockquote>
      </Section>

      {/* Strategic partnership */}
      <Section alt>
        <h2 className="h2 h2--sm">{copy.partnerTitle[lang]}</h2>
        <p className="section-intro">{copy.partnerIntro[lang]}</p>
        <Timeline
          items={["2021", "2022", "2023", "2024", "2024"].map((year) => ({
            year,
            title: copy.awardName[lang],
            sub: <span className="sample">{copy.awardPending[lang]}</span>,
          }))}
        />
      </Section>

      {/* Group & business partners */}
      <Section>
        <h2 className="h2" style={{ marginBottom: 24 }}>
          {copy.groupTitle[lang]}
        </h2>
        <div className="strip">
          {["Philips", "Sima Corporate", "Sima Solutions", "Sima Renovation"].map((n) => (
            <div key={n} className="strip__named">
              {n}
            </div>
          ))}
        </div>
        <h2 className="h2" style={{ marginTop: 56, marginBottom: 24 }}>
          {copy.clientsTitle[lang]}
        </h2>
        <div className="strip strip--pending">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n}>
              <span className="mono">LOGO</span>
            </div>
          ))}
        </div>
        <p className="caption" style={{ marginTop: 12 }}>
          <span className="sample">{lang === "th" ? "รอโลโก้โรงพยาบาลคู่ค้าที่ได้รับอนุญาตให้เผยแพร่" : "Waiting for client hospital logos cleared for publication"}</span>
        </p>
      </Section>

      {/* Closing contact band */}
      <section className="section closing">
        <div className="container closing__inner">
          <div>
            <h2>{copy.closingTitle[lang]}</h2>
            <p>{copy.closingBody[lang]}</p>
          </div>
          <div className="row" style={{ gap: 20 }}>
            <a href={company.phoneHref} className="closing__phone">
              {company.phone}
            </a>
            <ButtonLink href={href(lang, "/contact")} size="lg">
              {ui.contactSales[lang]}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
