# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences carry equal weight, and the site has to serve both on the same pages:

- **Hospital decision makers**: executives, procurement committees and engineering managers at public and private hospitals and diagnostic imaging centres in Thailand. They judge credibility (authorisation, track record, licences, after-sales capacity) and then contact sales.
- **Clinical users**: radiologists and radiologic technologists who look at modalities, models and service before recommending a purchase internally.

Both arrive with a buying or upgrade project in mind, read in Thai first (English second), and often on a phone between other work.

## Product Purpose

The corporate website of Srima-Medic Co., Ltd. (บริษัท สีมา-เมดิก จำกัด), an authorised Philips distributor in Thailand. It presents four modality categories (CT, MRI, IGT, Digital X-ray), services and support, installation track record, news, and contact routes. Success is a qualified enquiry to the sales team (form, phone or LINE) from a hospital or imaging centre.

There is no pricing and no e-commerce. Each product category links out to Philips's own site for full model ranges.

## Positioning

An authorised Philips partner that stays with the hospital for the life of the system. Candidate differentiators, all named by the user but still to be confirmed and worded with the client:

- part of the Sima group (Sima Corporate, Sima Solutions, Sima Renovation), which can cover room construction and renovation around the equipment;
- a service engineering team covering the whole country (PM and CM);
- a long record with Philips, including recognition from Philips in 2021–2024 (award names pending).

## Operating Context

- Bilingual routes: `/th` (default) and `/en`. All copy lives in `web/src/content/*.ts`.
- Purchases are institutional and slow: committees, tenders, site surveys, installation, then years of service contracts.
- Contact channels: sales form, phone 02-943-5561, email, LINE OA (link pending), Facebook.

## Capabilities and Constraints

- Thai medical device advertising law (อย. / ฆพ.): no superlative or absolute claims such as "ดีที่สุด" or "ปลอดภัย 100%". Product information is for healthcare professionals.
- A standard disclaimer (คำเตือนมาตรฐาน) sits above the footer on every page, with the advertising licence number.
- PDPA: cookie notice with "necessary only" and "accept all".
- Fixed bottom-right contact cluster on every page: LINE, phone, back to top.
- No photos of staff (privacy). Imagery is rooms and facilities without people, plus event atmosphere. No real photography supplied yet; placeholders stand in.
- Placeholder markers "(ข้อมูลตัวอย่าง)" / "(รอข้อมูลจากลูกค้า)" must stay visible until real data replaces them.
- Next.js 16 App Router in `web/`. Draft 1 is due 2–3 Nov 2026; deploys to Vercel only when the user says so.

## Brand Commitments

- Name: Srima-Medic / บริษัท สีมา-เมดิก จำกัด. Logo at `web/public/brand/logo-srima.png` (green cross mark, Thai and Latin wordmark).
- Corporate identity is green and white; the logo green is #53E177. Colours may be adjusted for legibility but must stay in that green–white family.
- "Authorized Partner of Philips" is a real, central claim.
- Voice: factual, calm, professional; Thai first.

## Evidence on Hand

- Confirmed by the user: 320+ systems installed, 150+ imaging centres, 20+ years of group experience.
- Company facts in `web/src/content/site.ts`; company profile PDF and information sheet in the project root.
- Still missing (do not fabricate): DBD number, device sales licence, advertising licence, อย. numbers per product, Philips award names, cleared hospital logos, installation sites by region, regional sales contacts, LINE OA link, FAQ, real news articles, photography, the three key people.

## Product Principles

1. Credibility before persuasion: authorisation, track record and licences do the selling; no hype.
2. One site for two readers: the administrator scanning for trust and the clinician checking modalities must both find their answer fast.
3. Honest gaps: missing client data is shown as pending, never invented.
4. Service is the product: after-sales care gets as much weight as the equipment.

## Accessibility & Inclusion

Thai script at comfortable sizes (Thai glyphs need more size and line height than Latin). Text contrast at WCAG AA. Readers include older executives on phones.
