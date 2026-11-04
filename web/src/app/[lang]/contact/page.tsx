import type { Metadata } from "next";
import { ContactForm } from "@/components/Forms";
import { Icon } from "@/components/Icon";
import { ButtonLink, PageHero, RegionCards, Section } from "@/components/ui";
import { FAQ } from "@/content/faq";
import { IMG } from "@/content/images";
import { company, NAV, ui } from "@/content/site";
import { href, type Lang, type PageParams } from "@/lib/i18n";

const copy = {
  title: { th: "ติดต่อทีมขายและทีมบริการ", en: "Contact our sales & service teams" },
  desc: {
    th: "สอบถามข้อมูลผลิตภัณฑ์ ขอใบเสนอราคา ขอแผนบำรุงรักษา (PM) หรือแจ้งเครื่องขัดข้องได้จากฟอร์มด้านล่าง",
    en: "Ask about products, request a quotation or a maintenance (PM) plan, or report a breakdown using the form below.",
  },
  office: { th: "ที่ตั้งสำนักงาน", en: "Head office" },
  phoneLabel: { th: "โทรศัพท์", en: "Phone" },
  emailLabel: { th: "อีเมล", en: "Email" },
  hoursLabel: { th: "เวลาทำการ", en: "Office hours" },
  directions: { th: "เปิดเส้นทางใน Google Maps", en: "Get directions in Google Maps" },
  regional: { th: "ทีมขายประจำภูมิภาค", en: "Regional sales contacts" },
  formTitle: { th: "นัดหมายให้ทีมงานติดต่อกลับ", en: "Book a call back" },
  formIntro: { th: "กรอกข้อมูลด้านล่าง ทีมงานจะติดต่อกลับตามวันและเวลาที่ท่านสะดวก", en: "Fill in the form and our team will call you back at a time that suits you." },
  faq: { th: "คำถามที่พบบ่อย", en: "Frequently asked questions" },
  faqNote: { th: "คำถามตัวอย่าง — รอรายการคำถามจริงจากลูกค้า", en: "Sample questions — pending the client's list" },
  social: { th: "ติดตามข่าวสารของเรา", en: "Follow us" },
};

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { lang } = (await params) as { lang: Lang };
  return { title: lang === "th" ? "ติดต่อเรา" : "Contact", description: copy.desc[lang] };
}

export default async function ContactPage({ params }: PageParams) {
  const { lang } = (await params) as { lang: Lang };
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapQuery)}`;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`;

  return (
    <>
      <PageHero title={copy.title[lang]} description={copy.desc[lang]} crumbs={[{ label: NAV[0].label[lang], href: href(lang, "") }, { label: NAV.find((n) => n.path === "/contact")!.label[lang] }]} image={IMG.office} note={ui.aiSample[lang]} />

      {/* Office: details card beside the map, stretched to the same height */}
      <Section style={{ paddingTop: 56, paddingBottom: 40 }}>
        <h2 className="h2 h2--sm">{copy.office[lang]}</h2>
        <div className="office">
          <div className="office__card">
            <p className="office__name">{company.name[lang]}</p>
            <p className="office__address">
              <Icon name="map-pin" size={18} />
              <span>{company.address[lang]}</span>
            </p>
            <ul className="office__ways">
              <li>
                <span className="office__label">{copy.phoneLabel[lang]}</span>
                <a href={company.phoneHref}>{company.phone}</a>
              </li>
              <li>
                <span className="office__label">{copy.emailLabel[lang]}</span>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                <span className="office__label">{copy.hoursLabel[lang]}</span>
                <span>{company.hours[lang]}</span>
              </li>
            </ul>
            <ButtonLink href={mapsLink} variant="secondary" iconAfter="external" external>
              {copy.directions[lang]}
            </ButtonLink>
          </div>
          <iframe className="office__map" title="Google Map" src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </Section>

      {/* Regional contacts */}
      <Section alt style={{ paddingTop: 40, paddingBottom: 40 }}>
        <h2 className="h2" style={{ fontSize: 22, marginBottom: 20 }}>
          {copy.regional[lang]}
        </h2>
        <RegionCards lang={lang} role={lang === "th" ? "ผู้แทนขายประจำภาค" : "Regional sales rep"} />
      </Section>

      {/* Contact form */}
      <section className="section">
        <div className="container container--narrow">
          <h2 className="h2 h2--sm" style={{ fontSize: 22 }}>
            {copy.formTitle[lang]}
          </h2>
          <p className="section-intro" style={{ marginBottom: 24 }}>
            {copy.formIntro[lang]}
          </p>
          <ContactForm lang={lang} />
        </div>
      </section>

      {/* FAQ */}
      <Section alt>
        <div className="container--narrow" style={{ margin: "0 auto", padding: 0 }}>
          <h2 className="h2 h2--sm" style={{ fontSize: 22 }}>
            {copy.faq[lang]}
          </h2>
          <p className="section-intro" style={{ marginBottom: 20 }}>
            <span className="sample">{copy.faqNote[lang]}</span>
          </p>
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q.en}>
                <summary>{f.q[lang]}</summary>
                <p>{f.a[lang]}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* Social */}
      <Section id="social">
        <div style={{ textAlign: "center" }}>
          <h2 className="h2" style={{ fontSize: 20, marginBottom: 20 }}>
            {copy.social[lang]}
          </h2>
          <div className="row" style={{ justifyContent: "center", gap: 16 }}>
            <a href={company.facebook} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
              <Icon name="facebook" size={18} /> Facebook
            </a>
            <span className="btn" style={{ background: "var(--line-green)", color: "#04210F", cursor: "default" }}>
              <Icon name="message-circle" size={18} /> LINE OA
            </span>
          </div>
          <p className="caption" style={{ marginTop: 14 }}>
            <span className="sample">LINE OA {ui.pending[lang]}</span>
          </p>
        </div>
      </Section>
    </>
  );
}
