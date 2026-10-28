import type { L } from "@/lib/i18n";

/** Philips awards, transcribed from the client's Company Profile 2026 ("Recognition from PHILIPS"). Photos still pending. */
export const AWARDS: { year: string; name: string; detail: L }[] = [
  { year: "2021", name: "Partnership Excellence Award 2021", detail: { th: "Top Performing Partner", en: "Top Performing Partner" } },
  { year: "2022", name: "Philips APAC Best Imaging Partner 2022", detail: { th: "Philips APAC", en: "Philips APAC" } },
  { year: "2023", name: "Philips APAC Best Service Partner 2023", detail: { th: "มอบในงาน APAC Connect 2024", en: "Presented at APAC Connect 2024" } },
  { year: "2024", name: "Partner of the Year 2024 – APAC", detail: { th: "มอบในงาน Philips Impact 2025", en: "Presented at Philips Impact 2025" } },
  { year: "2024", name: "Best Service Performer 2024 – APAC", detail: { th: "มอบในงาน Philips Impact 2025", en: "Presented at Philips Impact 2025" } },
];

/** Partner and group-company logos, cropped from the client's Company Profile 2026. */
export const PARTNERS: { name: string; logo: string | null }[] = [
  { name: "Philips", logo: "/logos/philips.png" },
  { name: "Tomograph", logo: "/logos/tomograph.png" },
  { name: "Sima MRI", logo: "/logos/sima-mri.png" },
  { name: "Sima Health Care", logo: "/logos/sima-healthcare.png" },
  { name: "Sima Solutions", logo: "/logos/sima-solutions.png" },
  { name: "Sima Renovation", logo: "/logos/sima-renovation.png" },
];
