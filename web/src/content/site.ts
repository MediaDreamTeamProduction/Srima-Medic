import type { L } from "@/lib/i18n";

/** Company facts. Values marked `pending` are still waiting on the client. */
export const company = {
  name: { th: "บริษัท สีมา-เมดิก จำกัด", en: "Srima-Medic Co., Ltd." } satisfies L,
  shortDescription: {
    th: "บริษัท สีมา‑เมดิก จำกัด ให้บริการโซลูชันด้านภาพวินิจฉัยทางการแพทย์ในประเทศไทย ครอบคลุม CT, MRI, X-ray และระบบรังสีร่วมรักษา ในฐานะพันธมิตรที่ได้รับอนุญาตจาก Philips เราพร้อมดูแลตั้งแต่ติดตั้งระบบจนถึงบริการหลังการขาย เพื่อสนับสนุนการวินิจฉัยที่แม่นยำ การทำงานที่มีประสิทธิภาพ และการดูแลผู้ป่วยอย่างต่อเนื่องทั่วประเทศ",
    en: "Srima-Medic Co., Ltd. is a trusted distributor of advanced medical imaging solutions in Thailand, specialising in CT, MRI, X-ray and interventional systems. As an authorised partner of Philips, we provide end-to-end solutions — from system installation to after-sales support — for healthcare providers across the country.",
  } satisfies L,
  address: {
    th: "98/31 ซอยรามอินทรา 34 แขวงท่าแร้ง เขตบางเขน กรุงเทพมหานคร 10220",
    en: "98/31 Soi Ram Inthra 34, Tha Raeng, Bang Khen, Bangkok 10220, Thailand",
  } satisfies L,
  phone: "02-943-5561",
  phoneHref: "tel:+6629435561",
  email: "support@srima-medic.co.th",
  hours: { th: "จันทร์–ศุกร์ 08:30–17:30 น.", en: "Mon–Fri, 08:30–17:30" } satisfies L,
  facebook: "https://www.facebook.com/srimamedic/",
  /** LINE OA link not supplied yet. */
  line: null as string | null,
  mapQuery: "98/31 ซอยรามอินทรา 34 แขวงท่าแร้ง เขตบางเขน กรุงเทพมหานคร 10220",
  copyright: "Copyright © 2026 Srima-Medic Co.,Ltd All rights reserved.",
  /** Regulatory numbers — waiting on the client. */
  dbdNumber: null as string | null,
  deviceSaleLicence: null as string | null,
  adLicence: null as string | null,
};

export const NAV = [
  { path: "", label: { th: "หน้าหลัก", en: "Home" } },
  { path: "/about", label: { th: "เกี่ยวกับเรา", en: "About Us" } },
  { path: "/products", label: { th: "ผลิตภัณฑ์", en: "Products" } },
  { path: "/services", label: { th: "บริการและสนับสนุน", en: "Services & Support" } },
  { path: "/installations", label: { th: "ผลงานการติดตั้ง", en: "Installations" } },
  { path: "/news", label: { th: "ข่าวสารและกิจกรรม", en: "News & Events" } },
  { path: "/contact", label: { th: "ติดต่อเรา", en: "Contact" } },
] satisfies { path: string; label: L }[];

export const REGIONS: L[] = [
  { th: "เหนือ", en: "North" },
  { th: "อีสาน", en: "Northeast" },
  { th: "กลาง", en: "Central" },
  { th: "ใต้", en: "South" },
  { th: "กรุงเทพฯ", en: "Bangkok" },
];

/** Shared UI strings. */
export const ui = {
  contactSales: { th: "ติดต่อฝ่ายขาย", en: "Contact Sales" },
  viewProducts: { th: "ดูรายละเอียดสินค้า", en: "View Products" },
  viewDetails: { th: "ดูรายละเอียด", en: "View details" },
  viewOnPhilips: { th: "ดูรุ่นทั้งหมดบนเว็บไซต์ Philips", en: "See all models on Philips.com" },
  sample: { th: "(ข้อมูลตัวอย่าง)", en: "(sample data)" },
  pending: { th: "(รอข้อมูลจากลูกค้า)", en: "(pending client data)" },
  all: { th: "ทั้งหมด", en: "All" },
  installed: { th: "ติดตั้งแล้ว", en: "Installed" },
  systems: { th: "ระบบ", en: "systems" },
  readMore: { th: "อ่านต่อ", en: "Read more" },
  privacy: { th: "นโยบายความเป็นส่วนตัว", en: "Privacy Policy" },
  terms: { th: "ข้อกำหนดและเงื่อนไข", en: "Terms & Conditions" },
  backToTop: { th: "กลับขึ้นด้านบน", en: "Back to top" },
  call: { th: "โทร", en: "Call" },
  menu: { th: "เมนู", en: "Menu" },
} satisfies Record<string, L>;
