import type { L } from "@/lib/i18n";
import type { IconName } from "@/components/Icon";

export type Product = {
  slug: string;
  category: string;
  icon: IconName;
  name: string;
  localName: L;
  summary: L;
  description: L;
  installed: string;
  philipsUrl: string;
};

/** The four Philips modality lines the client sells (brief: 4–5 items, no prices). */
export const PRODUCTS: Product[] = [
  {
    slug: "ct",
    category: "CT",
    icon: "scan",
    name: "Computed Tomography (CT)",
    localName: { th: "เอกซเรย์คอมพิวเตอร์", en: "CT systems" },
    summary: {
      th: "สร้างภาพอวัยวะภายในเป็นภาพตัดขวาง สนับสนุนการตรวจวินิจฉัยในหลากหลายสาขา",
      en: "Cross-sectional imaging for fast diagnosis in emergency and routine care.",
    },
    description: {
      th: "เทคโนโลยีเอกซเรย์คอมพิวเตอร์ช่วยสร้างภาพอวัยวะภายในเป็นภาพตัดขวาง เพื่อสนับสนุนการตรวจวินิจฉัยในหลากหลายสาขาทางการแพทย์ ระบบ CT มีเทคโนโลยีและเครื่องมือช่วยด้านคุณภาพภาพและขั้นตอนการตรวจ โดยคุณสมบัติขึ้นอยู่กับแต่ละรุ่น",
      en: "Advanced CT solutions for fast and accurate diagnosis, supporting emergency and routine imaging with high efficiency. Image-quality and workflow tools vary by model.",
    },
    installed: "200+",
    philipsUrl: "https://www.philips.co.th/healthcare/diagnostic-imaging/computed-tomography/ct-systems",
  },
  {
    slug: "mri",
    category: "MRI",
    icon: "magnet",
    name: "Magnetic Resonance Imaging (MRI)",
    localName: { th: "เครื่องสร้างภาพด้วยสนามแม่เหล็ก", en: "MRI systems" },
    summary: {
      th: "สร้างภาพภายในร่างกายด้วยสนามแม่เหล็กและคลื่นวิทยุ โดยไม่ใช้รังสีเอกซ์",
      en: "High-resolution imaging with magnetic fields and radio waves, without X-rays.",
    },
    description: {
      th: "MRI ใช้สนามแม่เหล็กและคลื่นวิทยุในการสร้างภาพภายในร่างกาย โดยไม่ใช้รังสีเอกซ์ เหมาะสำหรับการตรวจเนื้อเยื่อและอวัยวะหลายประเภท มีระบบและเทคโนโลยีหลายรูปแบบ เพื่อรองรับการใช้งานทางคลินิกและขั้นตอนการตรวจที่แตกต่างกัน",
      en: "High-resolution imaging systems designed for precise diagnosis across a wide range of clinical applications. MRI uses magnetic fields and radio waves rather than X-rays, with configurations for different clinical workflows.",
    },
    installed: "40+",
    philipsUrl: "https://www.philips.co.th/healthcare/diagnostic-imaging/magnetic-resonance-imaging",
  },
  {
    slug: "igt",
    category: "IGT",
    icon: "activity",
    name: "Image-Guided Therapy (IGT)",
    localName: { th: "ระบบภาพนำวิถีเพื่อการรักษา", en: "Interventional systems" },
    summary: {
      th: "ภาพเอกซเรย์ต่อเนื่องช่วยนำทางอุปกรณ์ระหว่างหัตถการ ทั้งแบบ Single Plane และ Biplane",
      en: "Live X-ray guidance for minimally invasive procedures, in single-plane and biplane.",
    },
    description: {
      th: "เทคโนโลยีเอกซเรย์แบบแสดงภาพต่อเนื่อง ช่วยให้แพทย์มองเห็นและนำทางอุปกรณ์ระหว่างทำหัตถการ ครอบคลุมการสวนหัวใจ การรักษาหลอดเลือด และหัตถการรังสีร่วมรักษาด้านลำตัว (Body) และระบบประสาท (Neuro) ภายในแผนกรังสีวิทยา มีระบบให้เลือกทั้งแบบ Single Plane และ Biplane เพื่อรองรับรูปแบบการใช้งานและความต้องการของแต่ละโรงพยาบาล",
      en: "Advanced interventional imaging systems supporting minimally invasive procedures — cardiac catheterisation, vascular and neuro/body interventional radiology — with single-plane and biplane configurations to suit each hospital.",
    },
    installed: "60+",
    philipsUrl: "https://www.philips.co.th/healthcare/image-guided-therapy",
  },
  {
    slug: "x-ray",
    category: "X-ray",
    icon: "x-ray",
    name: "Digital X-ray",
    localName: { th: "ระบบเอกซเรย์ดิจิทัล", en: "Digital radiography" },
    summary: {
      th: "รับภาพและแสดงผลบนระบบดิจิทัล มีทั้งระบบประจำห้องและระบบเคลื่อนที่",
      en: "Reliable digital radiography, in fixed-room and mobile systems.",
    },
    description: {
      th: "ระบบเอกซเรย์ดิจิทัลช่วยรับภาพและแสดงผลบนระบบดิจิทัล เพื่อสนับสนุนการตรวจวินิจฉัยและขั้นตอนการทำงานในแผนกรังสีวิทยา มีโซลูชันหลายรูปแบบ ทั้งระบบประจำห้องและระบบเคลื่อนที่",
      en: "Reliable and flexible X-ray solutions for daily clinical use, delivering consistent image quality and workflow efficiency — available as fixed-room and mobile systems.",
    },
    installed: "20+",
    philipsUrl: "https://www.philips.co.th/healthcare/diagnostic-imaging/radiography",
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
