"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ui } from "@/content/site";
import { href, type Lang } from "@/lib/i18n";
import { Icon } from "./Icon";

const c = {
  name: { th: "ชื่อ-นามสกุล", en: "Full name" },
  org: { th: "หน่วยงาน / โรงพยาบาล", en: "Organisation / hospital" },
  email: { th: "อีเมล", en: "Email" },
  emailOptional: { th: "อีเมล (ถ้ามี)", en: "Email (optional)" },
  phone: { th: "เบอร์โทรศัพท์", en: "Phone" },
  interest: { th: "บริการที่สนใจ", en: "I'm interested in" },
  callbackDate: { th: "วันที่สะดวกให้ติดต่อกลับ", en: "Preferred call-back date" },
  callbackTime: { th: "ช่วงเวลาที่สะดวก", en: "Preferred time" },
  anyTime: { th: "เวลาใดก็ได้", en: "Any time" },
  message: { th: "ข้อความเพิ่มเติม", en: "Message" },
  recaptcha: { th: "reCAPTCHA — ป้องกันสแปมก่อนส่งข้อมูล (จะเชื่อมต่อจริงก่อนเปิดใช้งาน)", en: "reCAPTCHA spam protection (to be connected before launch)" },
  consentA: { th: "ข้าพเจ้ายินยอมให้บริษัทเก็บและใช้ข้อมูลข้างต้นเพื่อติดต่อกลับ ตาม", en: "I agree that the company may collect and use the information above to contact me, as described in the" },
  submit: { th: "ส่งข้อมูล", en: "Send" },
  sent: { th: "ส่งข้อมูลแล้ว ทีมงานจะติดต่อกลับภายใน 1 วันทำการ", en: "Thank you — our team will get back to you within 1 business day." },
  draftNote: { th: "เวอร์ชันร่าง: ฟอร์มยังไม่ส่งอีเมลจริง", en: "Draft: the form does not send email yet" },
};

const INTERESTS = [
  { th: "สนใจสินค้า / ขอใบเสนอราคา", en: "Products / quotation" },
  { th: "ขอใบเสนอราคาแผนบำรุงรักษา (PM)", en: "Maintenance plan (PM) quotation" },
  { th: "แจ้งซ่อม / เครื่องขัดข้อง", en: "Service request / breakdown" },
  { th: "ปรึกษา-สอบถามเพิ่มเติม", en: "General enquiry" },
  { th: "โครงการร่วมลงทุน / PPP", en: "Investment / PPP projects" },
];

/** Call-back slots, grouped by part of the day (e.g. ช่วงเช้า 08:00–09:00). */
const TIME_SLOTS = [
  { period: { th: "ช่วงเช้า", en: "Early morning" }, slots: ["08:00–09:00", "09:00–10:00"] },
  { period: { th: "ช่วงสาย", en: "Late morning" }, slots: ["10:00–11:00", "11:00–12:00"] },
  { period: { th: "ช่วงเที่ยง", en: "Midday" }, slots: ["12:00–13:00"] },
  { period: { th: "ช่วงบ่าย", en: "Afternoon" }, slots: ["13:00–14:00", "14:00–15:00", "15:00–16:00"] },
  { period: { th: "ช่วงเย็น", en: "Evening" }, slots: ["16:00–17:00", "17:00–17:30"] },
];

function Consent({ lang }: { lang: Lang }) {
  return (
    <label className="consent">
      <input type="checkbox" required />
      <span>
        {c.consentA[lang]} <Link href={href(lang, "/privacy")}>{ui.privacy[lang]}</Link>
      </span>
    </label>
  );
}

function Recaptcha({ lang }: { lang: Lang }) {
  return (
    <div className="recaptcha">
      <Icon name="lock" size={14} />
      {c.recaptcha[lang]}
    </div>
  );
}

function useDraftSubmit() {
  const [sent, setSent] = useState(false);
  // Draft only — wire to an email/SMTP endpoint once the client supplies credentials.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return { sent, onSubmit };
}

export function ContactForm({ lang, defaultInterest }: { lang: Lang; defaultInterest?: number }) {
  const { sent, onSubmit } = useDraftSubmit();
  return (
    <form onSubmit={onSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="cf-name">{c.name[lang]} *</label>
          <input id="cf-name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="cf-org">{c.org[lang]}</label>
          <input id="cf-org" name="organisation" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="cf-phone">{c.phone[lang]} *</label>
          <input id="cf-phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="cf-email">{c.emailOptional[lang]}</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="cf-interest">{c.interest[lang]} *</label>
          <select id="cf-interest" name="interest" required defaultValue={defaultInterest ?? ""}>
            <option value="" disabled>
              —
            </option>
            {INTERESTS.map((o, i) => (
              <option key={o.en} value={i}>
                {o[lang]}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="cf-callback-date">{c.callbackDate[lang]}</label>
          <input id="cf-callback-date" name="callbackDate" type="date" />
        </div>
        <div className="field">
          <label htmlFor="cf-callback-time">{c.callbackTime[lang]}</label>
          <select id="cf-callback-time" name="callbackTime" defaultValue="">
            <option value="">{c.anyTime[lang]}</option>
            {TIME_SLOTS.map((g) => (
              <optgroup key={g.period.en} label={g.period[lang]}>
                {g.slots.map((slot) => (
                  <option key={slot} value={slot}>
                    {g.period[lang]} {slot}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="cf-message">{c.message[lang]}</label>
        <textarea id="cf-message" name="message" />
      </div>
      <Consent lang={lang} />
      <Recaptcha lang={lang} />
      <button type="submit" className="btn btn--primary">
        {c.submit[lang]}
      </button>
      {sent ? (
        <div className="success" role="status">
          <Icon name="check" size={16} />
          {c.sent[lang]}
          <span className="sample">{c.draftNote[lang]}</span>
        </div>
      ) : null}
    </form>
  );
}
