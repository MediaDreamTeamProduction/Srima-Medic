import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { PRIVACY } from "@/content/legal";
import type { Lang, PageParams } from "@/lib/i18n";

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { lang } = (await params) as { lang: Lang };
  return { title: PRIVACY[lang].title };
}

export default async function PrivacyPage({ params }: PageParams) {
  const { lang } = (await params) as { lang: Lang };
  return <LegalPage doc={PRIVACY[lang]} />;
}
