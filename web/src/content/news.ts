import type { L } from "@/lib/i18n";

export type Article = {
  slug: string;
  tag: "news" | "knowledge";
  date: string;
  title: L;
  excerpt: L;
  /** Article body as paragraphs; `## ` starts a sub-heading. */
  body?: { th: string[]; en: string[] };
  sample: boolean;
  /** Equipment-related articles end with a "contact sales" call to action; general articles don't. */
  aboutEquipment: boolean;
};

export const TAGS = {
  news: { th: "Medical Technology News", en: "Medical Technology News" },
  knowledge: { th: "Knowledge Base", en: "Knowledge Base" },
} satisfies Record<Article["tag"], L>;

export const ARTICLES: Article[] = [
  {
    slug: "ct-vs-mri",
    tag: "knowledge",
    aboutEquipment: true,
    date: "2026-10-20",
    title: { th: "CT กับ MRI ต่างกันอย่างไร", en: "CT vs MRI: what's the difference?" },
    excerpt: {
      th: "ทำความเข้าใจหลักการทำงานของเครื่อง CT และ MRI และการเลือกใช้ตามลักษณะการตรวจ",
      en: "How CT and MRI work, and how each fits different kinds of examinations.",
    },
    body: {
      th: [
        "เครื่องเอกซเรย์คอมพิวเตอร์ (CT) และเครื่องสร้างภาพด้วยสนามแม่เหล็ก (MRI) เป็นเครื่องมือภาพวินิจฉัยที่พบได้ในโรงพยาบาลส่วนใหญ่ ทั้งสองระบบช่วยให้แพทย์มองเห็นโครงสร้างภายในร่างกาย แต่ใช้หลักการต่างกัน",
        "## หลักการของ CT",
        "CT ใช้รังสีเอกซ์ที่หมุนรอบตัวผู้ป่วยร่วมกับการประมวลผลด้วยคอมพิวเตอร์ เพื่อสร้างภาพตัดขวางของอวัยวะ การตรวจใช้เวลาไม่นาน จึงมักใช้ในงานฉุกเฉินและการตรวจทั่วไป",
        "## หลักการของ MRI",
        "MRI ใช้สนามแม่เหล็กและคลื่นวิทยุในการสร้างภาพ โดยไม่ใช้รังสีเอกซ์ ให้รายละเอียดของเนื้อเยื่ออ่อนได้ดี การตรวจมักใช้เวลานานกว่า CT",
        "## การเลือกใช้",
        "การเลือกใช้เครื่องใดขึ้นอยู่กับข้อบ่งชี้ทางคลินิกและการพิจารณาของแพทย์ สำหรับโรงพยาบาลที่วางแผนจัดหาเครื่อง ทีมงานของเราพร้อมให้คำปรึกษาเรื่องรุ่น พื้นที่ติดตั้ง และการดูแลหลังการขาย",
      ],
      en: [
        "Computed tomography (CT) and magnetic resonance imaging (MRI) are imaging tools found in most hospitals. Both let clinicians see inside the body, but they work on different principles.",
        "## How CT works",
        "CT uses X-rays rotating around the patient, combined with computer processing, to build cross-sectional images. Scans are quick, so CT is widely used in emergency and routine imaging.",
        "## How MRI works",
        "MRI uses magnetic fields and radio waves rather than X-rays. It shows soft tissue in fine detail, and scans usually take longer than CT.",
        "## Choosing between them",
        "Which modality is used depends on the clinical indication and the physician's judgement. For hospitals planning a purchase, our team can advise on models, site preparation and after-sales support.",
      ],
    },
    sample: true,
  },
  {
    slug: "pm-vs-cm",
    tag: "knowledge",
    aboutEquipment: true,
    date: "2026-10-12",
    title: { th: "ทำความเข้าใจแผนบำรุงรักษา PM และ CM", en: "Understanding PM and CM maintenance" },
    excerpt: {
      th: "ความแตกต่างระหว่างการบำรุงรักษาเชิงป้องกันและการซ่อมบำรุง และเหตุผลที่ควรวางแผนล่วงหน้า",
      en: "Preventive versus corrective maintenance, and why planning ahead matters.",
    },
    sample: true,
  },
  {
    slug: "philips-ct-update",
    tag: "news",
    aboutEquipment: true,
    date: "2026-09-30",
    title: { th: "อัปเดตเทคโนโลยี CT จาก Philips", en: "CT technology update from Philips" },
    excerpt: {
      th: "สรุปความเคลื่อนไหวด้านเทคโนโลยีภาพวินิจฉัยล่าสุดจาก Philips",
      en: "The latest imaging technology news from Philips.",
    },
    sample: true,
  },
  {
    slug: "mri-trends",
    tag: "news",
    aboutEquipment: true,
    date: "2026-09-15",
    title: { th: "แนวโน้มเทคโนโลยี MRI", en: "Trends in MRI technology" },
    excerpt: {
      th: "ทิศทางของเทคโนโลยี MRI ที่โรงพยาบาลควรรู้",
      en: "Where MRI technology is heading for hospitals.",
    },
    sample: true,
  },
];

export const EVENTS: { date: L; title: L; desc: L }[] = [
  {
    date: { th: "15 ต.ค. 2569", en: "15 Oct 2026" },
    title: { th: "สัมมนา CT Application Update", en: "CT Application Update seminar" },
    desc: { th: "อบรมการใช้งานฟีเจอร์ใหม่สำหรับทีมรังสีเทคนิค", en: "Training on new features for radiographer teams." },
  },
  {
    date: { th: "2 พ.ย. 2569", en: "2 Nov 2026" },
    title: { th: "ออกบูธงานประชุมวิชาการรังสีวิทยา", en: "Radiology congress exhibition booth" },
    desc: { th: "พบทีมงานและผลิตภัณฑ์ Philips ที่บูธของ Srima-Medic", en: "Meet our team and Philips solutions at the Srima-Medic booth." },
  },
  {
    date: { th: "20 พ.ย. 2569", en: "20 Nov 2026" },
    title: { th: "MRI Safety Workshop", en: "MRI Safety Workshop" },
    desc: { th: "อบรมความปลอดภัยในการใช้งานเครื่อง MRI", en: "Safety training for MRI operation." },
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function formatDate(iso: string, lang: "th" | "en") {
  return new Date(iso).toLocaleDateString(lang === "th" ? "th-TH" : "en-GB", { day: "numeric", month: "short", year: "numeric" });
}
