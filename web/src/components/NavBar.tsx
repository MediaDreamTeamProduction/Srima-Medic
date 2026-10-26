"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, ui } from "@/content/site";
import { href, LANGS, type Lang } from "@/lib/i18n";
import { Icon } from "./Icon";

export function NavBar({ lang }: { lang: Lang }) {
  const pathname = usePathname() ?? `/${lang}`;
  const [open, setOpen] = useState(false);
  // Path without the locale prefix, e.g. "/th/about" → "/about".
  const rest = pathname.replace(/^\/(th|en)(?=\/|$)/, "");

  const isActive = (path: string) => (path === "" ? rest === "" : rest === path || rest.startsWith(`${path}/`));

  const links = NAV.map((item) => (
    <li key={item.path}>
      <Link href={href(lang, item.path)} aria-current={isActive(item.path) ? "page" : undefined} onClick={() => setOpen(false)}>
        {item.label[lang]}
      </Link>
    </li>
  ));

  return (
    <header className="nav">
      <div className="container">
        <div className="nav__inner">
          <Link href={href(lang)} className="nav__logo" aria-label="Srima-Medic">
            <Image src="/brand/logo-srima.png" alt="บริษัท สีมา-เมดิก จำกัด / SRiMA-MEDiC CO.,LTD." width={900} height={178} priority />
          </Link>
          <ul className="nav__menu">{links}</ul>
          <div className="nav__right">
            <div className="lang-switch" role="group" aria-label="Language">
              {LANGS.map((l) => (
                <Link key={l} href={`/${l}${rest}`} aria-current={l === lang ? "true" : undefined} hrefLang={l}>
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>
            <button className="nav__toggle" aria-expanded={open} aria-controls="nav-drawer" onClick={() => setOpen((o) => !o)}>
              <Icon name={open ? "x" : "menu"} size={26} title={ui.menu[lang]} />
            </button>
          </div>
        </div>
        <nav id="nav-drawer" className="nav__drawer" data-open={open} aria-label={ui.menu[lang]}>
          <ul>{links}</ul>
        </nav>
      </div>
    </header>
  );
}
