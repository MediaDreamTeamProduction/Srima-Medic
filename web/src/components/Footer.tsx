import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { company, NAV, ui } from "@/content/site";
import { href, withBase, type Lang } from "@/lib/i18n";
import { Icon } from "./Icon";

const copy = {
  disclaimerTitle: { th: "คำเตือนมาตรฐาน", en: "Disclaimer" },
  disclaimer: {
    th: "ข้อมูลผลิตภัณฑ์บนเว็บไซต์นี้จัดทำขึ้นเพื่อให้ข้อมูลเบื้องต้นแก่บุคลากรทางการแพทย์และสถานพยาบาลเท่านั้น มิใช่คำแนะนำทางการแพทย์ การเลือกใช้เครื่องมือแพทย์ต้องอยู่ภายใต้การพิจารณาของผู้ประกอบวิชาชีพ โปรดอ่านคำเตือนและข้อควรระวังในคู่มือการใช้งานก่อนใช้ รายละเอียดและคุณสมบัติขึ้นอยู่กับแต่ละรุ่น และอาจเปลี่ยนแปลงได้โดยไม่ต้องแจ้งให้ทราบล่วงหน้า",
    en: "Product information on this website is provided for healthcare professionals and facilities only and is not medical advice. Selection and use of medical devices must be decided by qualified professionals. Read the warnings and precautions in the instructions for use before use. Features and specifications vary by model and may change without notice.",
  },
  adLicence: { th: "ใบอนุญาตโฆษณาเครื่องมือแพทย์เลขที่", en: "Medical device advertising licence no." },
  contact: { th: "ติดต่อเรา", en: "Contact" },
  menu: { th: "เมนู", en: "Menu" },
  legal: { th: "ข้อมูลทางกฎหมาย", en: "Legal" },
  dbd: { th: "เลขทะเบียนพาณิชย์ (DBD)", en: "DBD registration no." },
  saleLicence: { th: "ใบอนุญาตขายเครื่องมือแพทย์", en: "Medical device sales licence" },
  fda: { th: "เลขที่ใบรับแจ้งรายการละเอียด / ใบจดแจ้ง (อย.)", en: "Thai FDA notification no." },
};

const pendingValue = (lang: Lang) => <span className="sample">{ui.pending[lang]}</span>;

/** Standard warning shown on every page, placed just above the footer. */
export function Disclaimer({ lang }: { lang: Lang }) {
  return (
    <aside className="disclaimer" aria-label={copy.disclaimerTitle[lang]}>
      <div className="container disclaimer__inner">
        <strong>{copy.disclaimerTitle[lang]}</strong>
        <p>
          {copy.disclaimer[lang]}{" "}
          <span className="mono">
            {copy.adLicence[lang]} {company.adLicence ?? "ฆพ. XX/YYYY"}
          </span>
          {company.adLicence ? null : <span className="sample">{ui.pending[lang]}</span>}
        </p>
      </div>
    </aside>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <span className="footer__brand">
              <Image src={withBase("/brand/logo-srima.png")} alt="Srima-Medic" width={900} height={178} style={{ height: 34, width: "auto" }} />
            </span>
            <p style={{ marginTop: 14, maxWidth: "36ch", lineHeight: 1.6 }}>{company.name[lang]}</p>
            <div className="footer__social">
              <a href={company.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Icon name="facebook" size={16} />
              </a>
              <a href={company.line ?? withBase(href(lang, "/contact#social"))} aria-label="LINE">
                <Icon name="message-circle" size={16} />
              </a>
            </div>
          </div>
          <div>
            <h2>{copy.contact[lang]}</h2>
            <ul>
              <li className="contact-line">
                <Icon name="map-pin" size={15} />
                <span>{company.address[lang]}</span>
              </li>
              <li className="contact-line">
                <Icon name="phone" size={15} />
                <a href={company.phoneHref}>{company.phone}</a>
              </li>
              <li className="contact-line">
                <Icon name="mail" size={15} />
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li className="contact-line">
                <Icon name="clock" size={15} />
                <span>{company.hours[lang]}</span>
              </li>
            </ul>
          </div>
          <div>
            <h2>{copy.menu[lang]}</h2>
            <ul>
              {NAV.map((n) => (
                <li key={n.path}>
                  <Link href={href(lang, n.path)}>{n.label[lang]}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>{copy.legal[lang]}</h2>
            <dl className="footer__legal" style={{ margin: 0 }}>
              <dt>{copy.dbd[lang]}</dt>
              <dd>{company.dbdNumber ?? pendingValue(lang)}</dd>
              <dt>{copy.saleLicence[lang]}</dt>
              <dd>{company.deviceSaleLicence ?? pendingValue(lang)}</dd>
              <dt>{copy.fda[lang]}</dt>
              <dd>{pendingValue(lang)}</dd>
              <dt>DBD Registered</dt>
              <dd>{pendingValue(lang)}</dd>
            </dl>
          </div>
        </div>
        <div className="footer__bottom">
          <span>{company.copyright}</span>
          <span className="row" style={{ "--gap": "14px" } as CSSProperties}>
            <Link href={href(lang, "/privacy")}>{ui.privacy[lang]}</Link>
            <Link href={href(lang, "/terms")}>{ui.terms[lang]}</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
