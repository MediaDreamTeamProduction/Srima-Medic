import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { TERMS } from "@/content/legal";
import type { Lang, PageParams } from "@/lib/i18n";

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { lang } = (await params) as { lang: Lang };
  return { title: TERMS[lang].title };
}

export default async function TermsPage({ params }: PageParams) {
  const { lang } = (await params) as { lang: Lang };
  return <LegalPage doc={TERMS[lang]} />;
}
