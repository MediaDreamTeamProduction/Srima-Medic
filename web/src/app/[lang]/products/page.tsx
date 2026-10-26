import type { Metadata } from "next";
import { ProductGrid } from "@/components/Filters";
import { PageHero, Section } from "@/components/ui";
import { PRODUCTS } from "@/content/products";
import type { Lang, PageParams } from "@/lib/i18n";

const copy = {
  title: { th: "ผลิตภัณฑ์ภาพวินิจฉัย", en: "Medical Imaging Products" },
  desc: {
    th: "เราคัดสรรเทคโนโลยีด้านภาพวินิจฉัยและการรักษา เพื่อสนับสนุนการทำงานของโรงพยาบาลและบุคลากรทางการแพทย์ โดยสามารถศึกษารายละเอียดผลิตภัณฑ์และรุ่นเพิ่มเติมได้จากเว็บไซต์ Philips",
    en: "We select diagnostic and therapeutic imaging technologies that support hospitals and healthcare professionals. Detailed models and specifications are available on the Philips website.",
  },
  note: {
    th: "ราคาและรุ่นที่เหมาะสมขึ้นอยู่กับความต้องการของแต่ละโรงพยาบาล กรุณาติดต่อฝ่ายขายเพื่อรับใบเสนอราคา",
    en: "Pricing and configuration depend on each hospital's needs — contact our sales team for a quotation.",
  },
};

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { lang } = (await params) as { lang: Lang };
  return { title: copy.title[lang], description: copy.desc[lang] };
}

export default async function ProductsPage({ params }: PageParams) {
  const { lang } = (await params) as { lang: Lang };
  return (
    <>
      <PageHero title={copy.title[lang]} description={copy.desc[lang]} art="scan" />
      <Section style={{ paddingTop: 40 }}>
        <ProductGrid lang={lang} products={PRODUCTS} />
        <p className="caption" style={{ marginTop: 24 }}>
          {copy.note[lang]}
        </p>
      </Section>
    </>
  );
}
