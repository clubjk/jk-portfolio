# Design System — JK Portfolio

## Product Context
- **What this is:** A personal portfolio site. One page. Who JK is, selected work, how to reach him.
- **Who it's for:** Hiring managers, collaborators, and people who arrived from GitHub or email.
- **Space/industry:** Software and security. Builder who assumes the work will be attacked.
- **Project type:** Static personal site (HTML/CSS/JS)

## Aesthetic Direction
- **Direction:** Blueprint desk at night — architectural drawing, not a hacker terminal
- **Decoration level:** Intentional. One texture (the dossier grid). No icons, no illustrations, no gradients.
- **Mood:** Calm, precise, slightly industrial. A workbench after hours, lights low.
- **Memorable thing:** The dossier card sitting beside the thesis, ruled like a drawing sheet, with a single cadmium mark.
- **Do not use:** Cream + terracotta editorial, near-black + acid green, broadsheet newspaper columns, Inter/Space Grotesk/Poppins, purple gradients, icon-in-circle feature grids.

## Typography
- **Display/Hero:** Syne, 700 — geometric, a little odd in the terminals, reads as drafted not decorated
- **Body:** Source Sans 3, 400/500 — engineered, quiet, holds long sentences
- **Meta / labels / data:** IBM Plex Mono, 400 — field labels on the dossier, dates, nav
- **Loading:** Google Fonts, `display=swap`
- **Scale:**
  - Display: `clamp(2.5rem, 1.4rem + 4.2vw, 4.35rem)` / 1.05
  - Section title: 1.75rem / 1.2
  - Body: 1.125rem / 1.65
  - Small / meta: 0.75rem / 1.4, tracking 0.08em, uppercase for labels only

## Color

Approach: restrained. Cadmium is rare. Teal is for links and live status only.

### Dark (default, designed first)
```css
--field:  #0A1220; /* page */
--sheet:  #121B2C; /* panels */
--chalk:  #E4EAF4; /* text */
--mute:   #8B96AB; /* secondary */
--mark:   #E8B84A; /* cadmium — name, availability, one emphasis */
--rule:   #1E2A40; /* lines, grid */
--signal: #3AA89C; /* links, live status */
```

### Light
```css
--field:  #E7EDF4; /* cool paper, not cream */
--sheet:  #F7F9FC;
--chalk:  #0E1726;
--mute:   #5A6578;
--mark:   #C48A12;
--rule:   #C5D0DE;
--signal: #0E7A70;
```

### Semantic uses
- **Mark:** wordmark, availability pill, the one emphasized word in the thesis, focus rings
- **Signal:** inline links, “on the bench” live dot
- **Mute:** labels, dates, captions
- **Rule:** header hairline, work-row dividers, dossier grid

## Spacing
- **Base unit:** 8px
- **Density:** spacious
- **Scale:** 8 / 16 / 24 / 32 / 48 / 64 / 96
- **Page padding:** `clamp(1.25rem, 4vw, 4rem)`
- **Max content width:** 1080px
- **Hero split gap:** 48–64px

## Layout
- **Approach:** Hybrid. Header and work list are grid-disciplined. Hero is a two-column split that stacks on small screens.
- **Grid:** 12 conceptual columns. Hero is 7/5. Work rows are full bleed inside the content well.
- **Border radius:** 0 on the page and work list. 2px on the lights switch knob. 999px on the availability pill only.
- **Dossier:** 1px rule, 24px blueprint grid, 24px inner padding.

## Motion
- **Approach:** Minimal-functional
- **Load:** Hero fades 400ms ease-out once. Nowhere else.
- **Hover:** Work-row background and a 2px cadmium underline, 180ms
- **Theme:** Color tokens transition 200ms. No page flash (inline head script).
- **Reduced motion:** No load fade, no color transition, instant theme swap

## Interaction
- Theme follows `prefers-color-scheme` until the visitor toggles. Choice persists in `localStorage`.
- Lights control is a labeled switch, not a sun/moon icon.
- Skip link, visible focus (`2px mark outline, 3px offset`), 44px minimum touch targets.
- Keyboard: theme switch is a button. Nav is in-page anchors.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-08-18 | Blueprint desk, not terminal green | Dark mode was requested; acid-green-on-black is the default “security” look. A drawing sheet is cleaner and more specific. |
| 2026-08-18 | Cadmium as the only warm color | One memorable mark. Teal carries links so cadmium stays scarce. |
| 2026-08-18 | Dossier beside the thesis | The page’s job is identity + reachability. The card holds facts so the headline can be a point of view. |
| 2026-08-18 | Static HTML | A personal site should load without a build step. |
