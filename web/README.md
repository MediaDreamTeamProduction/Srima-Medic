# Srima-Medic website (Draft 1)

Next.js 16 (App Router) site built from `../design_handoff_srima_medic_website`. Routes are bilingual: `/th/...` and `/en/...`, and `/` redirects to `/th`.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Where things live

- `src/app/globals.css`: design tokens (copied from the handoff into `src/styles/tokens`) plus the component styles.
- `src/content/`: all copy and data, in TH and EN. Edit text here, not in the pages:
  - `site.ts`: company facts, nav and UI strings
  - `products.ts`
  - `services.ts`
  - `news.ts`
  - `legal.ts`
- `src/components/`: NavBar, Footer and Disclaimer, the floating contact cluster and cookie notice, HeroCarousel, forms, filters and shared UI.
- `public/brand/logo-srima.png`: converted from the client's `Logo_SRIMA-MEDIC.psd`, which is CMYK.

## Draft status: still waiting on the client

Anything marked with the orange "(รอข้อมูลจากลูกค้า)" or "(ข้อมูลตัวอย่าง)" tag is a placeholder.

### Regulatory numbers
Set these in `src/content/site.ts` (`company.*`) once received:
- DBD registration number
- Medical device sales licence
- Advertising licence (ฆพ.)
- อย. notification number for each product

### Content and assets
- Photos, all currently placeholders. Use rooms and venues without people, and event-atmosphere shots.
- The 3 key people to feature, and whether their photos may be shown.
- Philips award names for 2021–2024.
- Client hospital logos cleared for publication.
- Installation sites by region.
- Regional sales contacts.
- LINE OA link.
- FAQ questions.
- Real news and blog articles.

### Technical
- Forms currently only show a success message. They need an SMTP or email endpoint and a reCAPTCHA key before launch.
- `robots: noindex` is set in `src/app/[lang]/layout.tsx` while in draft. Remove it at launch.
