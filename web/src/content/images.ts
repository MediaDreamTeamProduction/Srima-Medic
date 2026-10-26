/**
 * Draft imagery: AI-generated stand-ins (Magnific, 2026-10-26) for photos the client hasn't supplied yet.
 * Rooms and venues only, no people (brief rule). Each use carries the "AI sample" chip until real photos replace these files.
 */
export const IMG = {
  ct: "/images/room-ct.webp",
  mri: "/images/room-mri.webp",
  igt: "/images/room-igt.webp",
  xray: "/images/room-xray.webp",
  office: "/images/office.webp",
  seminar: "/images/seminar.webp",
  hospital: "/images/hospital.webp",
};

/** Room photo for a modality, keyed by the product/equipment category label. */
export const IMG_BY_CATEGORY: Record<string, string> = {
  CT: IMG.ct,
  MRI: IMG.mri,
  IGT: IMG.igt,
  "X-ray": IMG.xray,
};
