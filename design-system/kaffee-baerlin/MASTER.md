# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/kaffee-baerlin/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Kaffee Bärlin
**Generated:** 2026-07-11 (base run) — **manually overridden same day, see Deviation Note below**
**Category:** Reparaturwerkstatt / Home Services (Kaffee- & Espressomaschinen), Berlin

---

## Deviation Note (read this first)

The `ui-ux-pro-max --design-system` auto-generation matched this project to its generic
**"Trust & Authority"** pattern (category: Plumber/Electrician) — navy blue `#1E3A8A` + gold
`#B45309`, Lexend/Source Sans 3 typography, styled after healthcare/fintech/enterprise-software
landing pages.

That palette was overridden before persisting, per the project brief's color sanity-check step:
it reads as generic corporate SaaS, not as a warm, handwerklich (craft) coffee-machine repair
shop in Berlin. It also collides with the web design-quality guardrails ("safe gray-on-white
styling with one decorative accent," "default font stacks used without a deliberate reason").

**Replaced with:** a warm espresso/cream palette (sourced from the tool's Bakery/Cafe color
match, `--domain color -q "warm espresso brown cream artisan craftsmanship"`) and a
display-serif + humanist-sans type pairing (Calistoga + Inter, sourced from
`--domain typography -q "craftsmanship workshop editorial warm serif"`), rather than the
auto-assigned defaults. Spacing, shadow, and component-shape tokens from the base run were kept
— those are style-agnostic and didn't need correcting.

**Why this pairing:** Calistoga is a bold, slightly hand-lettered slab serif — it reads like
vintage roastery/workshop signage, giving the brand character without tipping into "luxury
fashion" or "literary magazine" territory (both of which were other candidate pairings but wrong
for a trade/repair business serving both private and commercial customers). Inter carries body
text and UI at high legibility. The espresso-brown + cream palette ties the site visually to the
warm tones expected in the (not-yet-generated) product photography, per the brief's instruction
that image color grade — not the auto-generated palette — should win in a conflict.

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Primary | `#92400E` | `--color-primary` | Nav, headings, primary surfaces |
| Primary Foreground | `#FFFFFF` | `--color-on-primary` | Text/icons on primary |
| Secondary | `#B45309` | `--color-secondary` | Secondary buttons, borders, badges |
| Accent/CTA | `#C2410C` | `--color-accent` | Primary CTA buttons ("Jetzt anrufen", "Abholung anfragen") — brighter copper, distinct from Primary so CTAs pop |
| Accent Foreground | `#FFFFFF` | `--color-on-accent` | Text on accent |
| Background | `#FDF6EC` | `--color-background` | Page background (warm cream/paper, not stark white) |
| Foreground | `#2A1A10` | `--color-foreground` | Body text (near-black espresso, not pure black) |
| Card | `#FFFFFF` | `--color-card` | Card surfaces |
| Muted | `#F3E4C8` | `--color-muted` | Alternating section backgrounds |
| Muted Foreground | `#6B5644` | `--color-muted-foreground` | Secondary text on muted surfaces |
| Border | `#E8D4A8` | `--color-border` | Dividers, card borders |
| Destructive | `#DC2626` | `--color-destructive` | Form errors only |
| Ring | `#C2410C` | `--color-ring` | Focus rings (matches accent) |

**Color Notes:** Warm espresso brown + cream, with a brighter copper accent reserved
exclusively for calls to action so they stand out against the brown/cream field. Verify contrast
before shipping: Foreground `#2A1A10` on Background `#FDF6EC` and White on Accent `#C2410C` both
need a 4.5:1 check against final rendered type sizes.

**If dark mode is added later:** do not auto-invert to black — use a dark espresso surface
(e.g. `#1C120A`) with the same cream/copper accent logic, per "don't default to dark mode
automatically" in the design-quality guardrails. Not required for this v1 (single light theme is
the brief's stated direction — trade/craft businesses skew light, physical-shop, daytime).

### Typography

- **Heading/Display Font:** Calistoga (bold slab serif, hand-lettered/workshop-signage character)
- **Body Font:** Inter (humanist sans, high legibility for body copy, forms, UI labels)
- **Mood:** boutique, warm, editorial, handwerklich, trustworthy — not corporate-SaaS, not luxury-fashion
- **Google Fonts:** https://fonts.google.com/share?selection.family=Calistoga|Inter:wght@300;400;500;600;700

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Calistoga&family=Inter:wght@300;400;500;600;700&display=swap');
```

**Scale guidance:** Hero H1 with Calistoga at 36–56pt (clamp), Section H2 28–32pt Calistoga,
body/UI 16–18pt Inter 400–500. Use Calistoga sparingly (H1/H2/pull-quotes/section labels) —
never for long paragraphs or form inputs.

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(42,26,16,0.06)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(42,26,16,0.10)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(42,26,16,0.12)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(42,26,16,0.16)` | Hero images, featured cards |

Shadow colors tinted warm-brown instead of neutral black, consistent with the palette.

---

## Component Specs

### Buttons

```css
/* Primary CTA */
.btn-cta {
  background: #C2410C;
  color: #FFFFFF;
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  transition: all 200ms ease;
  cursor: pointer;
}
.btn-cta:hover {
  background: #9A3412;
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}
.btn-cta:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(194,65,12,0.35);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #92400E;
  border: 2px solid #92400E;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
.btn-secondary:hover {
  background: rgba(146,64,14,0.06);
}
```

### Cards

```css
.card {
  background: #FFFFFF;
  border: 1px solid #E8D4A8;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-sm);
  transition: all 200ms ease;
}
.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E8D4A8;
  border-radius: 8px;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  background: #FFFFFF;
  transition: border-color 200ms ease;
}
.input:focus {
  border-color: #C2410C;
  outline: none;
  box-shadow: 0 0 0 3px rgba(194,65,12,0.15);
}
```

---

## Style Guidelines

**Style:** Warm Craftsmanship / Trade-Business Trust

**Keywords:** handwerklich, warm, verlässlich, Berlin-lokal, unaufdringlich professionell,
Werkstatt-Charakter — explicitly avoiding: healthcare-style certification badges, fintech
dashboards, luxury-fashion minimalism, generic gray-on-white SaaS.

**Best For:** local repair/trade services, workshops, artisan businesses trading on trust +
craft rather than scale or luxury.

**Key Effects:** subtle card lift on hover, smooth section reveals on scroll
(compositor-friendly transform/opacity only), warm-tinted shadows, accent color reserved for
action (never decorative).

### Page Pattern (adapted for this project's IA — see Phase 2)

- **Conversion Strategy:** Free diagnosis + free pickup service as the lead hooks (strongest
  USPs from the source data), phone CTA always reachable, no forced multi-step funnel.
- **CTA Placement:** Sticky/visible `tel:` link in header + hero primary CTA + repeated CTA
  band before footer.
- **Section Order:** Hero → USP bar (free diagnosis / free pickup / no-appointment drop-off) →
  Leistungen → Marken (text only) → Ablauf (3 steps) → Vertrauen → Standort → Kontakt → Footer.

---

## Anti-Patterns (Do NOT Use)

- ❌ Hidden contact info
- ❌ Brand logos for serviced machine brands (legal risk — text only, see research/source-data.json → legal.independenceDisclaimer)
- ❌ Generic gray-on-white with a single decorative accent
- ❌ Stock hero with centered headline + gradient blob
- ❌ Cookie banner / analytics / tracking scripts (no-tracking is a hard project rule, not a design choice)

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Text contrast 4.5:1 minimum (check Foreground/Background and White/Accent pairs above)
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
- [ ] No brand logos used anywhere (text-only brand mentions)
- [ ] No tracking scripts / cookie banner present
