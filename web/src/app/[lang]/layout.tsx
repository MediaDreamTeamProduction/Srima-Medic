import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Sans_Thai } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Disclaimer, Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { CookieBanner, StickyContact } from "@/components/SiteChrome";
import { company } from "@/content/site";
import { isLang, LANGS } from "@/lib/i18n";
import "../globals.css";

const plexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-plex-sans", display: "swap" });
const plexThai = IBM_Plex_Sans_Thai({ subsets: ["thai", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-plex-thai", display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex-mono", display: "swap" });

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l = isLang(lang) ? lang : "th";
  const name = company.name[l];
  return {
    metadataBase: new URL("https://srima-medic.com"),
    title: { default: `${name} | Authorized Partner of Philips`, template: `%s | Srima-Medic` },
    description: company.shortDescription[l],
    alternates: { languages: { th: "/th", en: "/en" } },
    // Draft build — keep it out of search engines until launch.
    robots: { index: false, follow: false },
  };
}

export default async function LangLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <html lang={lang} className={`${plexSans.variable} ${plexThai.variable} ${plexMono.variable}`}>
      <body>
        <div className="page">
          <NavBar lang={lang} />
          <main>{children}</main>
          <Disclaimer lang={lang} />
          <Footer lang={lang} />
        </div>
        <StickyContact lang={lang} />
        <CookieBanner lang={lang} />
      </body>
    </html>
  );
}
