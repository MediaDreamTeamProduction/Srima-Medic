---
name: Srima-Medic
description: Corporate site for an authorised Philips imaging distributor in Thailand, built on the logo's green-and-white identity
colors:
  page-mist: "#F6FAF7"
  surface-white: "#FFFFFF"
  surface-sunken: "#EAF3EC"
  border-hairline: "#D3E2D7"
  border-field: "#B9CCBF"
  ink: "#13241A"
  ink-soft: "#46594D"
  ink-faint: "#5F7066"
  forest: "#0E3A24"
  forest-deep: "#092818"
  forest-tint: "#E4EFE7"
  srima-green: "#53E177"
  srima-green-hover: "#46D36A"
  green-tint: "#E3F6E8"
  green-ink-on: "#062B14"
  green-ink: "#13753D"
  green-ink-hover: "#0E5A2F"
  success: "#17703B"
  pending-amber: "#8A5700"
  pending-amber-on-dark: "#F2C46D"
  danger: "#B23A36"
  line-green: "#06C755"
typography:
  display:
    fontFamily: "IBM Plex Sans, IBM Plex Sans Thai, sans-serif"
    fontSize: "clamp(34px, 4.6vw, 56px)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "IBM Plex Sans, IBM Plex Sans Thai, sans-serif"
    fontSize: "clamp(24px, 2.8vw, 32px)"
    fontWeight: 600
    lineHeight: 1.3
  title:
    fontFamily: "IBM Plex Sans, IBM Plex Sans Thai, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "IBM Plex Sans, IBM Plex Sans Thai, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  small:
    fontFamily: "IBM Plex Sans, IBM Plex Sans Thai, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "IBM Plex Sans, IBM Plex Sans Thai, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.55
  data:
    fontFamily: "IBM Plex Mono, IBM Plex Sans Thai, monospace"
    fontSize: "clamp(32px, 4vw, 44px)"
    fontWeight: 600
    lineHeight: 1.05
    fontFeature: "tnum"
rounded:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "20px"
  full: "999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "16px"
  "4": "24px"
  "5": "32px"
  "6": "48px"
  "7": "64px"
components:
  button-primary:
    backgroundColor: "{colors.srima-green}"
    textColor: "{colors.green-ink-on}"
    rounded: "{rounded.sm}"
    padding: "13px 22px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.srima-green-hover}"
    textColor: "{colors.green-ink-on}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.forest}"
    rounded: "{rounded.sm}"
    padding: "13px 22px"
  button-secondary-hover:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.surface-white}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.green-ink}"
  card:
    backgroundColor: "{colors.surface-white}"
    rounded: "{rounded.md}"
    padding: "24px"
  chip-filter:
    backgroundColor: "{colors.forest-tint}"
    textColor: "{colors.forest}"
    rounded: "{rounded.full}"
    height: "36px"
  chip-filter-active:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.surface-white}"
  pending-marker:
    textColor: "{colors.pending-amber}"
    rounded: "{rounded.xs}"
    typography: "{typography.label}"
  input:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    height: "48px"
  nav:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink-soft}"
    height: "72px"
  hero-band:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.surface-white}"
---

# Design System: Srima-Medic

## Overview

**Creative North Star: "The Clean Room"**

The site should feel like a bright, orderly imaging suite. Surfaces are mostly white and a faint green-tinged mist, with hairline borders. Colour works the way indicator lights do on a scanner console: the logo green marks the action and the live figures, and almost nothing else. The audience is hospital buyers and clinicians, so density is moderate and the tone is calm. Credibility comes from facts set cleanly, not from decoration.

Three dark surfaces give the page structure: the forest hero band on every page, the contact panel on the Contact page, and the footer. Everything else stays light. The brand mark is the logo's own rounded cross. It appears as a hairline outline cropped by the hero band, and it stands in for room photography until real photos arrive.

This system replaced a Draft 1 palette of navy, teal and an amber CTA. Hold to the replacement. Don't bring back teal accents, gradient glows, icon tiles stacked above headings, or rows of stat cards.

**Key Characteristics:**
- White and mist surfaces, hairline borders, one green for action.
- Forest hero band with the cropped cross outline; a white nav bar carrying the full-colour logo.
- IBM Plex Sans + Plex Sans Thai throughout. Plex Mono is used only for figures, modality codes, licence numbers and phone numbers.
- Proof is set as inline figures with hairline dividers, never as tiles.
- Pending client data is always visible, as a dashed amber chip.

## Colors

The palette is green and white, taken from the logo, and every text pairing passes WCAG AA.

### Primary
- **Srima Green** (#53E177): the logo green. Use it for the primary button fill, the active nav underline, carousel dots, timeline markers, hero figures on forest, and text selection. It is only 1.7:1 on white, so it never carries text on a light surface.
- **Green Ink** (#13753D): the same hue darkened for type. Use it for links, ghost buttons, modality codes, inline icons and the focus ring. It reaches at least 5:1 on every light surface.

### Secondary
- **Forest** (#0E3A24): the structural colour. Use it for the hero band, footer, dark panels, the secondary button outline, active filter chips and the main figures on light surfaces. **Forest Deep** (#092818) is the darker right-hand panel of the hero, where photography will sit.

### Tertiary
- **Pending Amber** (#8A5700, or #F2C46D on forest): reserved for the "(ข้อมูลตัวอย่าง)" / "(รอข้อมูลจากลูกค้า)" markers. It never means action.

### Neutral
- **Ink** (#13241A) for headings and body. **Ink Soft** (#46594D) for secondary copy. **Ink Faint** (#5F7066) for captions; it is the lightest grey that still passes on the sunken surface.
- **Page Mist** (#F6FAF7), **Surface White**, and **Surface Sunken** (#EAF3EC) for alternating sections. **Hairline** (#D3E2D7) for dividers and card borders. **Field Border** (#B9CCBF) for inputs, which need a firmer edge than cards.

### Named Rules
**The Indicator Light Rule.** Srima Green marks action and live figures only. If something green is not clickable and is not a number, question it.

**The Two Greens Rule.** Light green fills, dark green writes. Never set #53E177 as text on white. Never use #13753D as a large fill.

**The Amber Means Pending Rule.** Amber appears only on unconfirmed client data, so a reader can tell at a glance what is still unconfirmed.

## Typography

**Display Font:** IBM Plex Sans (with IBM Plex Sans Thai)
**Body Font:** IBM Plex Sans (with IBM Plex Sans Thai)
**Label/Mono Font:** IBM Plex Mono, for data only

**Character:** Engineered and neutral. Plex Thai keeps Thai and Latin on one rhythm. Mono gives figures and codes the feel of an equipment readout.

### Hierarchy
- **Display** (600, clamp(34px, 4.6vw, 56px), 1.15): the home hero headline only.
- **Headline** (600, clamp(24px, 2.8vw, 32px), 1.3): section titles and page-band titles (page bands run slightly smaller).
- **Title** (600, 17–19px, 1.3): card, modality and lifecycle step titles.
- **Body** (400, 16–17px, 1.7): copy, capped at 62–68ch.
- **Small** (400, 15px, 1.65): card copy and list descriptions.
- **Label** (500, 14px, 1.55): captions, badges, disclaimer, footer legal lines.
- **Data** (Mono 600, 28–44px, tabular numerals): proof figures and modality codes.

### Named Rules
**The Thai Floor Rule.** No text below 14px, and no pending marker below 12px. Thai glyphs need the size and the 1.7 leading.

**The Balanced Break Rule.** Headings use `text-wrap: balance` and paragraphs use `pretty`. Don't leave a lone Thai word stranded on the last line.

## Layout

The container is 1200px with a 24px gutter (20px under 768px). Sections are padded 64px top and bottom (56px on mobile) and alternate between page mist and sunken mist. Content splits use auto-fit two-column grids with a 56px gap. Repeated equivalent items sit in a shared ruled grid, such as the modality index or the lifecycle, rather than in floating cards. The nav collapses to a drawer below 1100px. The modality index goes from 4 columns to 2 at 1023px and to 1 at 560px. The lifecycle becomes a vertical rail below 1024px.

## Elevation & Depth

The design is flat by default and builds depth with tone and hairlines. Shadows appear only on floating or interactive layers.

### Shadow Vocabulary
- **Float** (`box-shadow: 0 12px 28px -12px rgba(14,58,36,.28)`): floating contact buttons, cookie notice, modal, and link-card hover.
- **Hairline lift** (`box-shadow: 0 1px 2px rgba(14,58,36,.09)`): the back-to-top button.

### Named Rules
**The Flat At Rest Rule.** Cards and panels carry a 1px border and no shadow. A shadow appears on hover or on layers that float above the page.

## Shapes

Corners are gently rounded: 8px for buttons and inputs, 12px for cards and FAQ items, 20px for large panels and photo slots, and full pills for chips and the language switch. Pending markers use a 4px dashed chip. Empty photo slots show an inset dashed frame so they read as "photo goes here". The cross mark has 8-unit rounded corners, matching the logo.

## Components

### Buttons
- **Shape:** 8px radius, minimum height 44px.
- **Primary:** Srima Green fill with near-black green ink, weight 600. Every "ติดต่อฝ่ายขาย" uses it.
- **Hover / Focus:** the fill steps to #46D36A. Focus is a 2px Green Ink outline with a 2px offset.
- **Secondary:** a 1.5px forest outline that fills forest on hover. **Ghost:** Green Ink text with an arrow. **On-dark:** a 70% white outline on the hero.

### Chips
- **Filter:** forest-tint pill, 36px tall. When pressed it turns solid forest with white text.
- **Pending marker:** dashed amber chip, `max(.8em, 12px)`.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** white on mist sections.
- **Shadow Strategy:** none at rest. Link cards get the Float shadow and a Green Ink border on hover.
- **Internal Padding:** 24px.
- **Icons:** placed inline beside the heading (26px, Green Ink), never in a tile above it.

### Inputs / Fields
- **Style:** white field, firm border (#B9CCBF), 8px radius, 48px tall, 16px text, labels above in ink at weight 500.
- **Focus:** 2px Green Ink outline, and the border shifts to Green Ink.

### Navigation
- White bar, 72px tall, with a hairline bottom border and the full-colour logo.
- Links are 15px Ink Soft. The active link is forest at weight 600 with a 2px Srima Green underline.
- The TH/EN switch is a pill; the active language is solid forest.
- The mobile drawer uses 17px rows separated by hairlines.

### Modality Index (signature)
CT, MRI, IGT and X-ray sit in one ruled grid with a 2px forest top rule. Each column shows:
- the modality code in 34px Green Ink mono;
- the name and a one-line summary;
- a footer row with the installed count in forest mono and an arrow.

### Service Lifecycle (signature)
Five numbered steps on one hairline rail. Each step has an inline icon, a mono step number, a title and a line of copy. After-sales (the wrench step) is the anchor and is set in forest.

### Hero Band (signature)
A solid forest band with a deeper right-hand panel and the cropped cross outline. The home hero rotates its headline with a pause button and pauses on hover, focus and reduced motion. It ends in a row of proof figures under a hairline.

## Do's and Don'ts

### Do:
- **Do** set every primary action in Srima Green with dark ink (#062B14), and every text link in Green Ink (#13753D).
- **Do** show proof as inline mono figures with hairline dividers.
- **Do** put icons inline beside their heading.
- **Do** keep pending markers visible as the dashed amber chip until real client data replaces them.
- **Do** keep the disclaimer above the footer on every page. Its text spans the full row beside the heading (client preference over a narrow measure).

### Don't:
- **Don't** use teal, navy-blue, sky blue or amber for anything except pending data.
- **Don't** use gradient glows, grid-line backgrounds or ring-and-icon hero art.
- **Don't** stack an icon tile above a heading, or build a section from same-size icon cards.
- **Don't** add an eyebrow or kicker label above a heading.
- **Don't** set text below 14px.
- **Don't** use superlatives or absolute safety claims in any copy.
- **Don't** show staff photos; use rooms and venues without people.
