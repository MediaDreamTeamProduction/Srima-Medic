---
name: Srima-Medic
description: Corporate site for an authorised Philips imaging distributor in Thailand, built on the logo's teal-and-white identity
colors:
  page-mist: "#F5FAF9"
  surface-white: "#FFFFFF"
  surface-sunken: "#E8F3F1"
  border-hairline: "#D2E3E0"
  border-field: "#B4CDC9"
  ink: "#12302C"
  ink-soft: "#45605B"
  ink-faint: "#5C716D"
  marine: "#0A3B37"
  marine-deep: "#072B28"
  marine-tint: "#E3EFED"
  srima-teal: "#21ACA0"
  srima-teal-hover: "#1B9E92"
  teal-tint: "#DFF4F1"
  teal-ink-on: "#03201D"
  teal-ink: "#0B6E65"
  teal-ink-hover: "#08544D"
  success: "#0B6E65"
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
    backgroundColor: "{colors.srima-teal}"
    textColor: "{colors.teal-ink-on}"
    rounded: "{rounded.sm}"
    padding: "13px 22px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.srima-teal-hover}"
    textColor: "{colors.teal-ink-on}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.marine}"
    rounded: "{rounded.sm}"
    padding: "13px 22px"
  button-secondary-hover:
    backgroundColor: "{colors.marine}"
    textColor: "{colors.surface-white}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.teal-ink}"
  card:
    backgroundColor: "{colors.surface-white}"
    rounded: "{rounded.md}"
    padding: "24px"
  chip-filter:
    backgroundColor: "{colors.marine-tint}"
    textColor: "{colors.marine}"
    rounded: "{rounded.full}"
    height: "36px"
  chip-filter-active:
    backgroundColor: "{colors.marine}"
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
    backgroundColor: "{colors.marine}"
    textColor: "{colors.surface-white}"
---

# Design System: Srima-Medic

## Overview

**Creative North Star: "The Clean Room"**

The site should feel like a bright, orderly imaging suite. Surfaces are mostly white and a faint teal-tinged mist, with hairline borders. Colour works the way indicator lights do on a scanner console: the brand teal (client-specified, 2026-10-29) marks the action and the live figures, and almost nothing else. The audience is hospital buyers and clinicians, so density is moderate and the tone is calm. Credibility comes from facts set cleanly, not from decoration.

Three dark surfaces give the page structure: the marine hero band on every page, the contact panel on the Contact page, and the footer. Everything else stays light. The brand mark is the logo's own rounded cross. It appears as a hairline outline cropped by the hero band, and it stands in for room photography until real photos arrive.

This system replaced a Draft 1 palette of navy, teal and an amber CTA. Hold to the replacement. Don't bring back teal accents, gradient glows, icon tiles stacked above headings, or rows of stat cards.

**Key Characteristics:**
- White and mist surfaces, hairline borders, one teal for action.
- Marine hero band with the cropped cross outline; a white nav bar carrying the full-colour logo.
- IBM Plex Sans + Plex Sans Thai throughout. Plex Mono is used only for figures, modality codes, licence numbers and phone numbers.
- Proof is set as inline figures with hairline dividers, never as tiles.
- Pending client data is always visible, as a dashed amber chip.

## Colors

The palette is teal (#21ACA0, set by the client on 2026-10-29) and white, and every text pairing passes WCAG AA.

### Primary
- **Srima Teal** (#21ACA0): the brand teal (client-specified, 2026-10-29). Use it for the primary button fill, the active nav underline, carousel dots, timeline markers, hero figures on marine, and text selection. It is only 1.7:1 on white, so it never carries text on a light surface.
- **Teal Ink** (#0B6E65): the same hue darkened for type. Use it for links, ghost buttons, modality codes, inline icons and the focus ring. It reaches at least 5:1 on every light surface.

### Secondary
- **Marine** (#0A3B37): the structural colour. Use it for the hero band, footer, dark panels, the secondary button outline, active filter chips and the main figures on light surfaces. **Marine Deep** (#072B28) is the darker right-hand panel of the hero, where photography will sit.

### Tertiary
- **Pending Amber** (#8A5700, or #F2C46D on marine): reserved for the "(ข้อมูลตัวอย่าง)" / "(รอข้อมูลจากลูกค้า)" markers. It never means action.

### Neutral
- **Ink** (#12302C) for headings and body. **Ink Soft** (#45605B) for secondary copy. **Ink Faint** (#5C716D) for captions; it is the lightest grey that still passes on the sunken surface.
- **Page Mist** (#F5FAF9), **Surface White**, and **Surface Sunken** (#E8F3F1) for alternating sections. **Hairline** (#D2E3E0) for dividers and card borders. **Field Border** (#B4CDC9) for inputs, which need a firmer edge than cards.

### Named Rules
**The Indicator Light Rule.** Srima Teal marks action and live figures only. If something teal is not clickable and is not a number, question it.

**The Two Teals Rule.** Light teal fills, dark teal writes. Never set #21ACA0 as text on white. Never use #0B6E65 as a large fill.

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
- **Float** (`box-shadow: 0 12px 28px -12px rgba(10,59,55,.28)`): floating contact buttons, cookie notice, modal, and link-card hover.
- **Hairline lift** (`box-shadow: 0 1px 2px rgba(10,59,55,.09)`): the back-to-top button.

### Named Rules
**The Flat At Rest Rule.** Cards and panels carry a 1px border and no shadow. A shadow appears on hover or on layers that float above the page.

## Shapes

Corners are gently rounded: 8px for buttons and inputs, 12px for cards and FAQ items, 20px for large panels and photo slots, and full pills for chips and the language switch. Pending markers use a 4px dashed chip. Empty photo slots show an inset dashed frame so they read as "photo goes here". The cross mark has 8-unit rounded corners, matching the logo.

## Components

### Buttons
- **Shape:** 8px radius, minimum height 44px.
- **Primary:** Srima Teal fill with near-black teal ink, weight 600. Every "ติดต่อฝ่ายขาย" uses it.
- **Hover / Focus:** the fill steps to #1B9E92. Focus is a 2px Teal Ink outline with a 2px offset.
- **Secondary:** a 1.5px marine outline that fills marine on hover. **Ghost:** Teal Ink text with an arrow. **On-dark:** a 70% white outline on the hero.

### Chips
- **Filter:** marine-tint pill, 36px tall. When pressed it turns solid marine with white text.
- **Pending marker:** dashed amber chip, `max(.8em, 12px)`.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** white on mist sections.
- **Shadow Strategy:** none at rest. Link cards get the Float shadow and a Teal Ink border on hover.
- **Internal Padding:** 24px.
- **Icons:** placed inline beside the heading (26px, Teal Ink), never in a tile above it.

### Inputs / Fields
- **Style:** white field, firm border (#B4CDC9), 8px radius, 48px tall, 16px text, labels above in ink at weight 500.
- **Focus:** 2px Teal Ink outline, and the border shifts to Teal Ink.

### Navigation
- White bar, 72px tall, with a hairline bottom border and the full-colour logo.
- Links are 15px Ink Soft. The active link is marine at weight 600 with a 2px Srima Teal underline.
- The TH/EN switch is a pill; the active language is solid marine.
- The mobile drawer uses 17px rows separated by hairlines.

### Modality Index (signature)
CT, MRI, IGT and X-ray sit in one ruled grid with a 2px marine top rule. Each column shows:
- the modality code in 34px Teal Ink mono;
- the name and a one-line summary;
- a footer row with the installed count in marine mono and an arrow.

### Service Lifecycle (signature)
Five numbered steps on one hairline rail. Each step has an inline icon, a mono step number, a title and a line of copy. After-sales (the wrench step) is the anchor and is set in marine.

### Hero Band (signature)
A solid marine band with a deeper right-hand panel and the cropped cross outline. The home hero rotates its headline with a pause button and pauses on hover, focus and reduced motion. It ends in a row of proof figures under a hairline.

## Do's and Don'ts

### Do:
- **Do** set every primary action in Srima Teal with dark ink (#03201D), and every text link in Teal Ink (#0B6E65).
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
