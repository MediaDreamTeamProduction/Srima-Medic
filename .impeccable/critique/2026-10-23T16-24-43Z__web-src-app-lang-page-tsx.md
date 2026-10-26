---
target: home page
total_score: 19
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
target_identity: "file:D:\\Work\\Website\\Srima-Medic\\web\\src\\app\\[lang]\\page.tsx"
target_fingerprint: "sha256:9a82b9eb6ffdf2a256d429b43884c90c112a2c55f08227cfaae3bacd333276b1"
target_path: "D:\\Work\\Website\\Srima-Medic\\web\\src\\app\\[lang]\\page.tsx"
timestamp: 2026-10-23T16-24-43Z
slug: web-src-app-lang-page-tsx
closed: true
---
Method: Assessment A ran as an isolated sub-agent (design review in its own browser tab). Assessment B is the detector baseline, run before A and kept out of A's context (11 pages × 2 viewports).

## Design Health Score (Persuade surface; 7 and 10 n/a)
| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 2 | Carousel auto-advances every 7s with no pause; 7px dots |
| 2 | Match system / real world | 2 | First /th slide is English; "SRIMA MEDIC" eyebrow duplicates the logo |
| 3 | User control and freedom | 2 | No carousel pause; on mobile the cookie notice covers LINE and phone |
| 4 | Consistency and standards | 2 | Icon tile vs bare icon cards; amber means both CTA and pending; three link colours |
| 5 | Error prevention | 3 | Low risk |
| 6 | Recognition rather than recall | 3 | Mobile nav behind hamburger, FAB compensates |
| 7 | Flexibility and efficiency | n/a | Marketing page |
| 8 | Aesthetic and minimalist design | 2 | Nine equal-weight sections, two identical card grids, empty 600px hero |
| 9 | Error recovery | 3 | Pending states labelled |
| 10 | Help and documentation | n/a | FAQ lives on Contact |
| **Total** | | **19/32** | Acceptable |

## Design Specificity Verdict
LLM: category template (dark gradient hero carousel with ring-icon art, stat tiles, icon-tile card grids, quote slab, timeline, logo strip). Navy/teal/amber is generic healthtech and contradicts the green-white CI; #53E177 appears only in the logo.
Detector baseline: 444 findings. low-contrast 238, undersized-ui-text 90, icon-tile-stack 30, straggler 23, ai-color-palette 20 (cyan gradient hero), tiny-text 15, unbalanced-heading 12, line-length 11 (disclaimer), skipped-heading 4 (products, services), nested-cards 1 (recaptcha on mobile). They agree: teal text, faint grey and the amber pending marker cause most contrast failures.

## Priority Issues
- [P1] Palette contradicts the brand CI and fails contrast. Fix: re-key tokens to logo green (fills) + darkened green ink (text) + forest structural; green CTA. → colorize
- [P1] Hero generic and broken: English slide on /th, overlapping crossfade, three h1s, no pause, ring-icon art. Fix: one real h1, pause on hover/focus and reduced motion, brand-grid hero without glows. → distill, layout
- [P1] FAB and cookie notice collide on mobile; navy phone button disappears on navy footer. → adapt, polish
- [P2] Template rhythm in the middle: products and services grids identical, stats as hero-metric tiles, dark quote slab, no closing CTA. Fix: modality index, lifecycle strip, inline proof row, closing contact band. → layout, distill
- [P2] Thai legibility: 9.75–13.5px text for markers, captions, card copy, disclaimer. → typeset

## Persona red flags
- Procurement director on phone: English slogan first, cookie sheet hides LINE, proof buried 8 screens down, phone button vanishes on footer.
- Radiologist: modality cards give one vague line, icon tiles add nothing, installed count is a pale chip.
- First-time regional visitor: Sima group relationship unexplained.

## Minor
Pillar pills look clickable; logo strip shows a native scrollbar; EN partner intro ("outstanding performance and partnership excellence") leans superlative.
