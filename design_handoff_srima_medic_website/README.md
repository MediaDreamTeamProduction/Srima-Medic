# Handoff: Srima-Medic Marketing Website

## Overview
Public marketing website for Srima-Medic (ศรีมา เมดิค), a distributor/installer/maintainer of diagnostic imaging equipment and Authorized Partner of Philips in Thailand. Thai-first with a TH/EN language switch. 8 pages:

1. หน้าหลัก (Home)
2. เกี่ยวกับเรา (About)
3. ผลิตภัณฑ์ (Products)
4. บริการและสนับสนุน (Services & Support)
5. รายละเอียดสินค้า (Product Detail — reached from Products)
6. ผลงานการติดตั้ง (Installations)
7. ติดต่อเรา (Contact)
8. ข่าวสารและกิจกรรม (News & Events)

## About the Design Files
Files in `pages/` are **design references built in HTML**: prototypes that show the intended look, content and behavior. They are not production code. Recreate them in the target codebase using its own framework and patterns. If there is no codebase yet, pick a suitable stack (a static-friendly framework such as Next.js or Astro fits a Thai/English marketing site with i18n well).

To preview the references locally, serve `pages/` over HTTP (e.g. `npx serve pages` or VS Code Live Server) and open any `.dc.html`. Opening via `file://` will not load components.

- Each `.dc.html` = one page. Markup with inline styles, plus a small `class Component` at the bottom holding page data (lists, sample content) and UI state.
- `_ds/.../_ds_bundle.js` = the shared design-system components (React): NavBar, Footer, HeroSlider, Timeline, Button, Badge, StatTile, Icon, Field, GatedForm, StickyContactCluster. Read it for exact component styling.
- `_ds/.../tokens/*.css` = design tokens as CSS custom properties. **Port these directly** (they are production-ready).
- `support.js` = preview runtime only. Do not port.

## Fidelity
**Mid-fidelity wireframe on a final design system.** Layout, section order, copy and component choice are intended. Colors, type, radii, spacing come from the real token set and should be matched exactly. Image areas are labelled placeholders (no photography supplied yet).

## Global Layout (every page)
Top to bottom:
1. **Sticky NavBar** — full-width `--navy` bar, `position: sticky; top: 0; z-index: 40`, padding 12px 0, `--shadow-md`. Inner container max-width 1200px, padding 0 24px.
   - Left: logo placeholder 84×26px, dashed 1px `rgba(255,255,255,.4)` border, radius 6px (real logo image to come).
   - Center: 7 menu items, gap 1.1rem, 0.87rem, `nowrap`: หน้าหลัก · เกี่ยวกับเรา · ผลิตภัณฑ์ · บริการและสนับสนุน · ผลงานการติดตั้ง · ข่าวสารและกิจกรรม · ติดต่อเรา. Inactive `rgba(255,255,255,.88)`; active `--cyan`, weight 600, 2px `--cyan` bottom border.
   - Right: TH/EN switch. No phone number in header.
2. **HeroSlider** — full-bleed, image shows **page title only** (large, white, `clamp(1.7rem,3.4vw,2.6rem)`, weight 600, max 18ch) over a marine protection overlay `linear-gradient(180deg, rgba(12,58,66,.20), rgba(12,58,66,.80))`. Description renders as a separate text block under the image (except Home, see below).
   - Home: multi-slide carousel, 600px tall, dot pagination bottom-right.
   - All other pages: same component, single slide (no dots), 280–320px tall.
3. Page sections (below). Sections pad 64px vertical; alternate `--bg` / `--surface-alt` bands.
4. **Footer** — full-width `--navy` band (not a floating card), container 1200px, padding 32px 24px. Contains: contact info (085-509-5831), all 7 nav links, LINE + Facebook icons, DBD registration no. and medical-device sales licence no. (sample values marked "(ข้อมูลตัวอย่าง)").
5. **Floating contact cluster (FAB)** — fixed bottom-right, z-index 50, vertical stack top→bottom: LINE (`--line-green`) → Phone → Scroll-to-top. Round 46px buttons, `--shadow-md`.

**Section headings are single-language** (no small English eyebrow above Thai titles). Language follows the TH/EN switch.

## Screens

### 01 Home
- Hero carousel (3 slides, 600px). Title per slide; overlaid at bottom-left (64px from bottom): description paragraph (15px, `rgba(255,255,255,.9)`, max 52ch) + two buttons: **ติดต่อฝ่ายขาย** (primary/amber, lg) and **ดูรายละเอียดสินค้า →** (ghost, lg).
- Intro: 2-col grid (auto-fit, min 280px, gap 48px). Left: "SRIMA MEDIC" wordmark (mono 600, 48px, `--cyan`), H2 "ผู้เชี่ยวชาญด้านเครื่องมือแพทย์ภาพวินิจฉัยที่โรงพยาบาลไว้ใจได้ตลอดอายุการใช้งานเครื่อง" (28px/1.25), body paragraph, 4 pillar badges. Right: 320px image placeholder, radius 20px.
- Stats (`--surface-alt`): 3 StatTiles — 320+ Systems Installed · 150+ Imaging Centers · 20+ Years Experience.
- Philips partnership: **horizontal Timeline**, 5 items 2021, 2022, 2023, 2024, 2024 — "Philips Partnership Excellence Award" (all sample; real award names needed from client).
- Client logos strip: horizontally scrolling 160×80 logo placeholders.

### 02 About
- Single-slide hero "เกี่ยวกับ Srima-Medic" + description block.
- เส้นทางของเรา (2001 – ปัจจุบัน): **horizontal Timeline**, each item = year / company / up to 2 logo placeholders:
  2001 Tomograph Co., Ltd. · 2013 Srima-Medic Co., Ltd. · 2015 Sima Renovation Co., Ltd. (sample) · 2017 Sima Health Care Co., Ltd. + Sima MRI Co., Ltd. (2 logos, sample) · 2018 Sima Solutions Co., Ltd. (sample).
- Vision / Mission: 2 cards.
- Team: 4 person cards (round photo placeholder, name, role — sample).
- Certifications & awards: 3 cards (sample).

### 03 Products
- Hero "ผลิตภัณฑ์ภาพวินิจฉัย".
- Category filter badges: ทั้งหมด · CT · MRI · Ultrasound · X-ray · Cath Lab (active = `brand` tone, filters grid).
- Product grid (auto-fit min 280px): photo placeholder, category badge + "Installed ✓", name, model (sample), ghost button **ดูรายละเอียดสินค้า →** which opens the "Professional Access Only" gated-form modal.

### 04 Services & Support
- Hero "บริการและสนับสนุน".
- **2×2 card grid**: Installation & Renovation (ภายใต้ Sima Renovation) · Maintenance Service (PM/CM) (ทีมวิศวกร 9 ท่าน) · Application Training (Product Specialist) · Remote Support (ลด Downtime). 40px cyan icon, title 18px, body 13.5px.
- Region selector (5 regions) + 2 StatTiles + primary button "ขอใบเสนอราคาแผน PM"; map/photo placeholder.
- 4-step process cards.

### 05 Product Detail
- Hero with product name. Breadcrumb. Gallery (main + 4 thumbs) | specs table (mono values, sample) + primary "ติดต่อฝ่ายขาย".
- "Professional Access Only" GatedForm section.
- Related products (3).

### 06 Installations
- Hero "ผลงานการติดตั้ง".
- Installation Map: Thailand map placeholder with pins + region filter badges.
- Reference List: hospital/imaging-center cards filtered by region (เหนือ/อีสาน/กลาง/ใต้/กรุงเทพฯ) — sample.
- Success Stories: delivery photo cards + testimonial panel — sample.

### 07 Contact (order is fixed)
Hero → Office Location (navy info card + map placeholder) → Regional Contacts (5 region cards) → Contact Form (name, organisation, email, phone, details, reCAPTCHA, primary "ส่งคำขอ", success message) → Social Media (LINE, Facebook).

### 08 News & Events
- Hero "ข่าวสารและกิจกรรม".
- ข่าวสาร: cards tagged Medical Technology News / Knowledge Base.
- กิจกรรม: Events & Seminars cards with mono date.

## Interactions & Behavior
- Hero carousel (Home): dot click switches slide; fade only, 200ms.
- Category / region badges: click to filter list; active badge uses brand tone.
- Product "ดูรายละเอียดสินค้า": opens gated-form modal (overlay `rgba(12,58,66,.55)`, panel radius 20px, close ✕). Submit shows success state.
- Contact form submit → inline success message with check icon.
- TH/EN switch: swaps all copy (EN content not yet written).
- FAB scroll-top: smooth scroll to top.
- Hover: links/ghost buttons teal → `--sky`; filled buttons small brightness lift; clickable cards border → `--cyan`. No lift/scale, no entrance animations.
- Focus: 2px `--cyan` outline, 2px offset.
- Responsive: grids are auto-fit; container 1200px; 12/8/4-column breakpoints at 1200/768px. Nav needs a mobile (hamburger) treatment — not designed yet.

## State
Per page only: `lang` (TH/EN), active slide index, active category/region filter, gate modal open/submitted, contact form sent. No data fetching in the design; lists are static sample arrays in each page's `class Component`.

## Design Tokens
Source of truth: `pages/_ds/.../tokens/*.css`. Key values:
- Colors: `--cyan` #21ACA0 (primary) · `--navy` #0C3A42 (header/footer/overlays) · `--sky` #2E8FC7 (hover) · `--amber` #F2A23B (**CTA only, one per view**) · `--bg` #F4FAF9 · `--border` #D3E4E1 · `--success` #2E9E5A · `--warning` #C97A0A · `--danger` #C7433F · `--line-green` #06C755 (LINE only). Dark theme under `:root[data-theme="dark"]`.
- Type: IBM Plex Sans / IBM Plex Sans Thai / IBM Plex Mono. Display 600 34–56px/1.1 · Heading 600 20–28px/1.25 · Body 400 15–17px/1.6 · Label 500 12–13px/1.4. Mono only for wordmark, numerals, licence numbers, dates.
- Spacing: 4 · 8 · 16 · 24 · 32 · 48 · 64. Card padding 24px, grid gap 20–24px, section padding 64px.
- Radius: 8px controls · 12px cards · 20px large panels · full for pills/FAB.
- Shadows: `--shadow-sm` 0 1px 2px rgba(12,58,66,.09) · `--shadow-md` 0 12px 28px -12px rgba(12,58,66,.28). Cards have no shadow by default.
- Motion: 200ms `cubic-bezier(.2,.7,.3,1)`.

## Assets
- No logo, photos or icon files supplied. All are placeholders.
- Icons: inline 24×24 stroke SVG paths (1.6px stroke, round caps) defined in `_ds_bundle.js` → `ICON_PATHS`. Lucide is an acceptable production equivalent.
- Fonts: Google Fonts IBM Plex (see `tokens/fonts.css`).

## Sample-data rule
Anything not yet provided by the client (DBD no., licence no., photos, sample sites/news, award names, 2015–2018 company details) is shown with invented values marked **"(ข้อมูลตัวอย่าง)"**. Keep that marker until real content replaces it.

## Files
```
pages/
  01-home.dc.html … 08-news.dc.html   page references
  _ds/.../_ds_bundle.js              shared components (React, readable source)
  _ds/.../tokens/*.css, styles.css   design tokens
  support.js                         preview runtime (do not port)
```
