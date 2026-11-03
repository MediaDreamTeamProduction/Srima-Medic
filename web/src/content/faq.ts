import type { L } from "@/lib/i18n";

/** Draft questions, shared by the home and contact pages. Sample copy until the client sends its own list. */
export const FAQ: { q: L; a: L }[] = [
  {
    q: { th: "สามารถซื้อเครื่องมือแพทย์ผ่านเว็บไซต์ได้หรือไม่?", en: "Can I buy equipment through the website?" },
    a: {
      th: "เว็บไซต์นี้ไม่มีระบบสั่งซื้อหรือชำระเงินออนไลน์ หากสนใจสินค้า กรุณาติดต่อฝ่ายขายเพื่อรับใบเสนอราคาและดำเนินการตามขั้นตอนของบริษัท",
      en: "No — the site has no online ordering or payment. Please contact our sales team for a quotation.",
    },
  },
  {
    q: { th: "บริษัทให้บริการในพื้นที่ใดบ้าง?", en: "Which areas do you cover?" },
    a: {
      th: "ทีมขายและทีมบริการของเราดูแลลูกค้าครอบคลุม 5 ภูมิภาค ได้แก่ ภาคเหนือ ภาคตะวันออกเฉียงเหนือ ภาคกลาง ภาคใต้ และกรุงเทพฯ",
      en: "Our sales and service teams cover five regions: North, Northeast, Central, South and Bangkok.",
    },
  },
  {
    q: { th: "มีบริการบำรุงรักษาหลังการติดตั้งหรือไม่?", en: "Do you provide maintenance after installation?" },
    a: {
      th: "มีบริการบำรุงรักษาเชิงป้องกัน (PM) และซ่อมบำรุง (CM) โดยทีมวิศวกรบริการ พร้อมให้คำปรึกษาตลอด 24 ชั่วโมง ทุกวัน",
      en: "Yes — preventive (PM) and corrective (CM) maintenance by our service engineers, with consultation available 24/7.",
    },
  },
  {
    q: { th: "บริษัทรับปรับปรุงห้องสำหรับติดตั้งเครื่องด้วยหรือไม่?", en: "Can you prepare the room for installation?" },
    a: {
      th: "ได้ เราวางแผนและออกแบบพื้นที่ติดตั้งร่วมกับ Sima Renovation บริษัทในเครือ ให้เหมาะกับการใช้งานและข้อจำกัดของแต่ละโรงพยาบาล",
      en: "Yes — we plan and design the site together with our sister company Sima Renovation.",
    },
  },
];
