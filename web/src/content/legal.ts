/* Legal copy supplied by the client ("Privacy Policy _ Terms & Conditions.docx").
   Each section: heading, optional intro paragraphs, optional bullet list. */
export type LegalSection = { h: string; p?: string[]; ul?: string[]; sub?: LegalSection[] };
export type LegalDoc = { title: string; intro: string; sections: LegalSection[] };

export const PRIVACY: Record<"th" | "en", LegalDoc> = {
  th: {
    title: "นโยบายความเป็นส่วนตัว และคุ้มครองข้อมูลส่วนบุคคล",
    intro: "srima-medic.com (“เรา”) ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของท่าน นโยบายนี้อธิบายถึงวิธีการที่เราเก็บรวบรวม ใช้ และป้องกันข้อมูลของท่านเพื่อให้เป็นไปตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA)",
    sections: [
      {
        h: "1. ข้อมูลที่เราเก็บรวบรวม",
        p: ["เราเก็บรวบรวมข้อมูลเพียงเท่าที่จำเป็นผ่านช่องทางดังนี้:"],
        ul: [
          "ข้อมูลที่ท่านให้เราโดยตรง: เช่น ชื่อ, อีเมล หรือเบอร์โทรศัพท์ เมื่อท่านลงทะเบียนรับข่าวสาร หรือติดต่อสอบถาม",
          "ข้อมูลพฤติกรรมการใช้งาน: เก็บผ่านคุกกี้ (Cookies) และเครื่องมือวิเคราะห์ เช่น Google Analytics, Facebook Pixel เพื่อนำมาปรับปรุงเนื้อหาบนเว็บไซต์ (ข้อมูลส่วนนี้ไม่ระบุตัวตนโดยตรง)",
        ],
      },
      {
        h: "2. วัตถุประสงค์ในการประมวลผลข้อมูล",
        ul: [
          "เพื่อใช้ในการสื่อสาร ตอบกลับข้อสงสัย หรือส่งข่าวสารตามที่ท่านร้องขอ",
          "เพื่อวิเคราะห์สถิติการใช้งาน และพัฒนาประสบการณ์การเข้าชมเว็บไซต์ให้ดียิ่งขึ้น",
          "เพื่อปฏิบัติตามกฎหมายและข้อบังคับที่เกี่ยวข้อง",
        ],
      },
      {
        h: "3. การเปิดเผยข้อมูลส่วนบุคคล",
        p: ["เราจะไม่นำข้อมูลของท่านไปขายให้บุคคลภายนอก เว้นแต่:"],
        ul: [
          "ได้รับความยินยอมจากท่านเป็นลายลักษณ์อักษร",
          "เป็นการเปิดเผยให้แก่พันธมิตรทางธุรกิจที่ช่วยดำเนินงาน (เช่น ผู้ให้บริการส่งอีเมล) ภายใต้สัญญาคุ้มครองข้อมูล",
          "เป็นการปฏิบัติตามคำสั่งของศาลหรือหน่วยงานรัฐตามกฎหมาย",
        ],
      },
      {
        h: "4. สิทธิของเจ้าของข้อมูล",
        p: ["ท่านมีสิทธิตามกฎหมาย PDPA ดังนี้:"],
        ul: [
          "สิทธิขอเข้าถึงและรับสำเนาข้อมูลส่วนบุคคล",
          "สิทธิขอให้แก้ไขข้อมูลให้ถูกต้องเป็นปัจจุบัน",
          "สิทธิขอให้ลบ หรือทำลายข้อมูล (Right to be forgotten)",
          "สิทธิในการเพิกถอนความยินยอมเมื่อใดก็ได้",
        ],
      },
      {
        h: "5. ระยะเวลาจัดเก็บและมาตรการความปลอดภัย",
        p: ["เราจะเก็บข้อมูลของท่านไว้เท่าที่จำเป็นตามวัตถุประสงค์ที่แจ้งไว้ และมีมาตรการรักษาความปลอดภัยของข้อมูลอย่างเหมาะสม เพื่อป้องกันการเข้าถึงโดยไม่ได้รับอนุญาต"],
      },
      {
        h: "6. ช่องทางการติดต่อ",
        p: [
          "หากท่านมีข้อสงสัยเกี่ยวกับนโยบายนี้ หรือต้องการใช้สิทธิเจ้าของข้อมูล โปรดติดต่อ:",
          "ที่อยู่: 98/31 ซอยรามอินทรา 34 แขวงท่าแร้ง เขตบางเขน กรุงเทพมหานคร 10220",
          "อีเมล: srimamedic@srima-medic.co.th",
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy and Personal Data Protection",
    intro: "srima-medic.com (“we”) prioritizes the protection of your personal data. This policy explains how we collect, use, and protect your information in compliance with the Personal Data Protection Act (PDPA).",
    sections: [
      {
        h: "1. Information We Collect",
        p: ["We collect only the necessary information through the following channels:"],
        ul: [
          "Information you provide directly to us: such as name, email, or phone number when you register for newsletters or make an inquiry.",
          "Usage behavior data: collected via cookies and analytical tools such as Google Analytics and Facebook Pixel to improve the website content (this information is not directly identifiable).",
        ],
      },
      {
        h: "2. Purposes of Data Processing",
        ul: [
          "To be used for communication, responding to inquiries, or sending news and updates as requested.",
          "To analyze usage statistics and improve the website visiting experience.",
          "To comply with relevant laws and regulations.",
        ],
      },
      {
        h: "3. Disclosure of Personal Data",
        p: ["We will not sell your information to third parties, except in the following cases:"],
        ul: [
          "We have received your written consent.",
          "Disclosure is made to business partners who assist in operations (such as email service providers) under a data protection agreement.",
          "It is to comply with a court order or a request from a government agency as required by law.",
        ],
      },
      {
        h: "4. Data Subject Rights",
        p: ["You have the following legal rights under the PDPA:"],
        ul: [
          "The right to access and receive a copy of your personal data.",
          "The right to request the correction of data to be accurate and up-to-date.",
          "The right to request the erasure or destruction of data (Right to be forgotten).",
          "The right to withdraw consent at any time.",
        ],
      },
      {
        h: "5. Retention Period and Security Measures",
        p: ["We will retain your data only as long as necessary to fulfill the stated purposes and implement appropriate data security measures to prevent unauthorized access."],
      },
      {
        h: "6. Contact Us",
        p: [
          "If you have any questions regarding this policy or wish to exercise your data subject rights, please contact:",
          "Address: 98/31 Soi Ram Inthra 34, Tha Raeng, Bang Khen, Bangkok 10220",
          "Email: srimamedic@srima-medic.co.th",
        ],
      },
    ],
  },
};

export const TERMS: Record<"th" | "en", LegalDoc> = {
  th: {
    title: "ข้อกำหนดและเงื่อนไข",
    intro: "การใช้บริการผ่านเว็บไซต์ srima-medic.com อยู่ภายใต้บังคับของข้อตกลงและเงื่อนไขฉบับนี้ เมื่อท่านเข้าสู่เว็บไซต์เพื่อตรวจสอบข้อมูลสินค้าหรือบริการ บริษัทจะถือว่าท่านได้อ่าน เข้าใจ ยอมรับ และตกลงที่จะปฏิบัติตามเงื่อนไขทั้งหมดอย่างเคร่งครัด หากท่านไม่ตกลงกรุณาหยุดใช้เว็บไซต์ทันที",
    sections: [
      {
        h: "1. ข้อมูลผู้ใช้บริการ",
        p: ["ท่านยืนยันและรับรองว่า:"],
        ul: [
          "กรณีบุคคลธรรมดา: ท่านเป็นผู้บรรลุนิติภาวะ (อายุ 20 ปีขึ้นไป) หรือหากเป็นผู้เยาว์ได้รับความยินยอมจากผู้แทนโดยชอบธรรมแล้ว",
          "กรณีข้อมูลติดต่อ: ข้อมูลที่ท่านให้ผ่านแบบฟอร์มติดต่อสอบถาม (ชื่อ, อีเมล, เบอร์โทรศัพท์) เป็นข้อมูลที่ถูกต้องและเป็นปัจจุบัน เพื่อประโยชน์ในการสื่อสารและนำเสนอข้อมูลสินค้า/บริการจากบริษัท",
        ],
      },
      {
        h: "2. ขอบเขตและการนำเสนอสินค้า/บริการ",
        ul: [
          "เพื่อการให้ข้อมูลเท่านั้น: เว็บไซต์นี้มีวัตถุประสงค์หลักเพื่อนำเสนอรายละเอียดสินค้าและบริการของบริษัท เพื่อให้ผู้เข้าชมใช้เป็นข้อมูลประกอบการตัดสินใจเท่านั้น",
          "ไม่มีระบบสั่งซื้อออนไลน์: ท่านรับทราบว่าเว็บไซต์นี้ \"ไม่มีระบบตะกร้าสินค้าหรือระบบชำระเงินออนไลน์\" ข้อมูลราคาหรือโปรโมชั่นที่ปรากฏ (หากมี) เป็นเพียงการเสนอข้อมูลเบื้องต้นเพื่อการโฆษณาเท่านั้น",
        ],
      },
      {
        h: "3. ทรัพย์สินทางปัญญา",
        p: ["รูปภาพ รูปแบบ ข้อความ โลโก้ และเนื้อหาทั้งหมดบนเว็บไซต์นี้ เป็นลิขสิทธิ์ของ บริษัท สีมา-เมดิก จำกัด (Srima-Medic Co., Ltd.) ห้ามมิให้ผู้ใดคัดลอก ดัดแปลง หรือนำไปใช้ในเชิงพาณิชย์โดยไม่ได้รับอนุญาต เว้นแต่เป็นการแชร์ลิงก์หรือข้อมูลโดยให้เครดิตแก่บริษัทอย่างชัดเจน"],
      },
      {
        h: "4. ข้อจำกัดความรับผิดชอบ",
        ul: [
          "ความถูกต้องของข้อมูล: บริษัทใช้ความพยายามอย่างเต็มที่ในการให้ข้อมูลที่ถูกต้อง อย่างไรก็ตาม บริษัทไม่รับรองผลลัพธ์หรือความสำเร็จใดๆ ที่ท่านมุ่งหวังจากการนำข้อมูลไปใช้ และไม่รับผิดชอบต่อความสูญเสียใดๆ ที่เกิดจากการตัดสินใจโดยไม่ได้สอบถามเจ้าหน้าที่ของบริษัทก่อน",
          "ระบบเครือข่าย: บริษัทไม่สามารถรับรองได้ว่าระบบอินเทอร์เน็ตหรือการเข้าชมเว็บไซต์จะไม่มีข้อบกพร่อง หรือปราศจากไวรัสคอมพิวเตอร์ตลอดเวลา แต่บริษัทจะใช้มาตรการรักษาความปลอดภัยตามมาตรฐานอย่างดีที่สุด",
          "ความรับผิด: บริษัทจะไม่รับผิดชอบต่อค่าเสียหายเชิงลงทุน หรือความเสียหายทางอ้อมใดๆ ที่เกิดขึ้นจากการเข้าถึงเว็บไซต์ หรือการเชื่อมโยงไปยังเว็บไซต์ภายนอก (Third-party links)",
        ],
      },
      {
        h: "5. นโยบายความเป็นส่วนตัว (Privacy Policy)",
        p: ["บริษัทได้จัดให้มีนโยบายความเป็นส่วนตัวแยกต่างหาก เพื่ออธิบายวิธีการเก็บรวบรวมและคุ้มครองข้อมูลส่วนบุคคลของท่าน (เช่น ข้อมูลจากแบบฟอร์มติดต่อ) ท่านควรศึกษานโยบายความเป็นส่วนตัวก่อนให้ข้อมูลใดๆ แก่บริษัท"],
      },
      {
        h: "6. การเปลี่ยนแปลงข้อตกลง",
        p: ["บริษัทขอสงวนสิทธิ์ในการเปลี่ยนแปลง กฎ ระเบียบ และเงื่อนไขการให้บริการนี้ได้เสมอตามความเหมาะสม โดยไม่ต้องแจ้งให้ท่านทราบล่วงหน้า การที่ท่านใช้งานเว็บไซต์ต่อไปภายหลังการเปลี่ยนแปลง ให้ถือว่าท่านยอมรับเงื่อนไขใหม่นั้นโดยปริยาย"],
      },
      {
        h: "7. การติดต่อบริษัท",
        p: ["หากท่านมีข้อสงสัยเกี่ยวกับสินค้า บริการ หรือข้อตกลงนี้ ท่านสามารถติดต่อบริษัทได้ที่: บริษัท สีมา-เมดิก จำกัด (Srima-Medic Co., Ltd.)", "อีเมล: srimamedic@srima-medic.co.th"],
      },
    ],
  },
  en: {
    title: "Terms & Conditions",
    intro: "The use of the srima-medic.com website is subject to these Terms and Conditions. By accessing the website to review product or service information, the Company shall consider that you have read, understood, accepted, and agreed to strictly comply with all terms and conditions. If you do not agree, please cease using the website immediately.",
    sections: [
      {
        h: "1. User Information",
        p: ["You hereby confirm and represent that:"],
        ul: [
          "For individuals: You have reached the legal age of majority (20 years of age or older), or if you are a minor, you have obtained consent from your legal representative.",
          "Regarding contact information: The information provided via the inquiry form (name, email, phone number) is accurate and up-to-date, for the purpose of communication and the presentation of the company’s products and services.",
        ],
      },
      {
        h: "2. Scope and Presentation of Products/Services",
        ul: [
          "For Information Purposes Only: This website is primarily intended to provide details regarding the company’s products and services for visitors to use as supporting information for decision-making purposes only.",
          "No Online Ordering System: You acknowledge that this website “does not have a shopping cart or online payment system.” Any pricing or promotional information displayed (if any) is provided as preliminary information for advertising purposes only.",
          "Contracting Process: Actual product orders or service engagements will occur only after direct coordination with company staff and the issuance of a formal Quotation or the execution of a sales contract, following the company’s standard procedures separate from this website.",
        ],
      },
      {
        h: "3. Intellectual Property",
        p: ["All images, formats, text, logos, and content on this website are the copyright of SRIMA-MEDIC COMPANY LIMITED. Any unauthorized copying, modification, or commercial use is strictly prohibited, except for sharing links or information with clear credit given to the company."],
      },
      {
        h: "4. Limitation of Liability",
        ul: [
          "Accuracy of Information: The Company makes every effort to provide accurate information. However, the Company does not guarantee any specific results or success you may expect from using this information, and shall not be held responsible for any losses resulting from decisions made without prior consultation with the Company’s staff.",
          "Network Systems: The Company cannot guarantee that the internet system or website access will be entirely free of defects or computer viruses at all times. Nevertheless, the Company will implement the best standard security measures.",
          "Liability: The Company shall not be liable for any investment losses or indirect damages arising from accessing the website or following links to third-party websites.",
        ],
      },
      {
        h: "5. Privacy Policy",
        p: ["The Company has established a separate Privacy Policy to explain how your personal data (such as information from contact forms) is collected and protected. You should review the Privacy Policy before providing any information to the Company."],
      },
      {
        h: "6. Amendments to the Agreement",
        p: ["The Company reserves the right to amend these rules, regulations, and terms of service at any time as deemed appropriate, without prior notice. Your continued use of the website following any such changes shall be deemed as your implicit acceptance of the new terms."],
      },
      {
        h: "7. Contact Us",
        p: ["If you have any questions regarding our products, services, or this agreement, please contact SRIMA-MEDIC COMPANY LIMITED.", "Email: srimamedic@srima-medic.co.th"],
      },
    ],
  },
};
