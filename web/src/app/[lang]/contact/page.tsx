import type { Metadata } from "next";
import { ContactForm } from "@/components/Forms";
import { Icon } from "@/components/Icon";
import { PageHero, RegionCards, Section } from "@/components/ui";
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
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`;

  return (
    <>
      <PageHero title={copy.title[lang]} description={copy.desc[lang]} crumbs={[{ label: NAV[0].label[lang], href: href(lang, "") }, { label: NAV.find((n) => n.path === "/contact")!.label[lang] }]} image={IMG.office} note={ui.aiSample[lang]} fact={{ value: "5", label: lang === "th" ? "ภูมิภาคที่ทีมขายดูแล" : "regions covered by sales" }} />

      {/* Office location */}
      <Section style={{ paddingTop: 56, paddingBottom: 40 }}>
        <div className="split" style={{ alignItems: "stretch", gap: 32 }}>
          <div>
            <h2 className="h2" style={{ fontSize: 22, marginBottom: 14 }}>
              {copy.office[lang]}
            </h2>
            <div className="panel-dark">
              <div style={{ fontWeight: 600, fontSize: 18 }}>
                {company.name[lang]}
              </div>
              <div className="stack" style={{ marginTop: 18, fontSize: 16, color: "var(--text-soft)", gap: 14 }}>
                <span className="contact-line">
                  <Icon name="map-pin" size={16} />
                  {company.address[lang]}
                </span>
                <a className="contact-line" href={company.phoneHref} style={{ color: "inherit" }}>
                  <Icon name="phone" size={16} />
                  {company.phone}
                </a>
                <a className="contact-line" href={`mailto:${company.email}`} style={{ color: "inherit" }}>
                  <Icon name="mail" size={16} />
                  {company.email}
                </a>
                <span className="contact-line">
                  <Icon name="clock" size={16} />
                  {company.hours[lang]}
                </span>
              </div>
            </div>
          </div>
          <iframe
            title="Google Map"
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ width: "100%", minHeight: 300, border: "1px solid var(--border)", borderRadius: "var(--radius-lg)" }}
          />
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
