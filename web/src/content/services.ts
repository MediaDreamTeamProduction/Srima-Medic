import type { IconName } from "@/components/Icon";
import type { L } from "@/lib/i18n";

/** End-to-end service lines, from the client's content sheet. */
export const SERVICES: { icon: IconName; title: L; body: L }[] = [
  {
    icon: "handshake",
    title: { th: "ให้คำปรึกษาและจัดหาเครื่องมือแพทย์", en: "Consultation & procurement" },
    body: { th: "CT, MRI, X‑ray และระบบรังสีร่วมรักษา", en: "CT, MRI, X-ray and interventional systems." },
  },
  {
    icon: "ruler",
    title: { th: "วางแผนโครงการและออกแบบพื้นที่ติดตั้ง", en: "Project planning & site design" },
    body: { th: "ให้เหมาะกับการใช้งานและข้อจำกัดของแต่ละโรงพยาบาล", en: "Fitted to each hospital's workflow and constraints." },
  },
  {
    icon: "package-check",
    title: { th: "ติดตั้งและส่งมอบระบบ", en: "Installation & handover" },
    body: { th: "ประสานงานโครงการจนพร้อมใช้งาน", en: "Coordinating the project until the system is ready for use." },
  },
  {
    icon: "wrench",
    title: { th: "บริการหลังการขายและบำรุงรักษา", en: "After-sales & maintenance" },
    body: {
      th: "ทีมวิศวกรผู้เชี่ยวชาญดูแลครอบคลุมทั่วประเทศ ให้คำปรึกษาตลอด 24 ชั่วโมง ทุกวัน",
      en: "Specialist engineers nationwide, with consultation available 24 hours a day, every day.",
    },
  },
  {
    icon: "building",
    title: { th: "พัฒนาและบริหารศูนย์ภาพทางการแพทย์", en: "Imaging center development" },
    body: {
      th: "รวมถึงโครงการร่วมลงทุนหรือ PPP ที่บริษัทในเครือดำเนินการ",
      en: "Including investment and PPP projects run by the group.",
    },
  },
];
