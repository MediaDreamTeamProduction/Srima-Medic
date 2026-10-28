"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { company, ui } from "@/content/site";
import { href, withBase, type Lang } from "@/lib/i18n";
import { Icon } from "./Icon";

/** Fixed bottom-right cluster on every page. Order top→bottom: LINE, phone, scroll-up. */
export function StickyContact({ lang }: { lang: Lang }) {
  const lineHref = company.line ?? withBase(href(lang, "/contact#social"));
  return (
    <div className="fab">
      <a className="fab__line" href={lineHref} aria-label="LINE" {...(company.line ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        <Icon name="message-circle" size={20} />
      </a>
      <a className="fab__phone" href={company.phoneHref} aria-label={`${ui.call[lang]} ${company.phone}`}>
        <Icon name="phone" size={20} />
      </a>
      <button className="fab__top" aria-label={ui.backToTop[lang]} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <Icon name="arrow-up" size={16} />
      </button>
    </div>
  );
}

const COOKIE_KEY = "srima-cookie-consent";

const cookieCopy = {
  body: {
    th: "เว็บไซต์นี้ใช้คุกกี้ที่จำเป็นต่อการทำงานของเว็บไซต์ และคุกกี้เพื่อการวิเคราะห์ (เช่น Google Analytics) เพื่อปรับปรุงประสบการณ์การใช้งาน ท่านเลือกได้ว่าจะยอมรับคุกกี้ประเภทใด",
    en: "We use cookies that are necessary for the site to work, plus analytics cookies (such as Google Analytics) to improve your experience. You can choose which ones to allow.",
  },
  accept: { th: "ยอมรับทั้งหมด", en: "Accept all" },
  necessary: { th: "เฉพาะที่จำเป็น", en: "Necessary only" },
  more: { th: "อ่านนโยบายความเป็นส่วนตัว", en: "Read our Privacy Policy" },
};

/** First-visit cookie notice (PDPA). Choice is kept in localStorage. */
function readConsent(): string | null {
  try {
    return localStorage.getItem(COOKIE_KEY);
  } catch {
    return null;
  }
}

const noopSubscribe = () => () => {};

export function CookieBanner({ lang }: { lang: Lang }) {
  // Server render and hydration see "server" (hidden); the client then reads localStorage.
  const stored = useSyncExternalStore(noopSubscribe, readConsent, () => "server");
  const [dismissed, setDismissed] = useState(false);

  const choose = (value: "all" | "necessary") => {
    try {
      localStorage.setItem(COOKIE_KEY, value);
    } catch {}
    setDismissed(true);
  };

  if (stored !== null || dismissed) return null;
  return (
    <div className="cookie" role="dialog" aria-label="Cookie notice">
      <div className="container cookie__inner">
        <p>
          {cookieCopy.body[lang]}{" "}
          <Link href={href(lang, "/privacy")}>{cookieCopy.more[lang]}</Link>
        </p>
        <div className="row">
          <button className="btn btn--secondary btn--sm" onClick={() => choose("necessary")}>
            {cookieCopy.necessary[lang]}
          </button>
          <button className="btn btn--primary btn--sm" onClick={() => choose("all")}>
            {cookieCopy.accept[lang]}
          </button>
        </div>
      </div>
    </div>
  );
}
