# Design taste — Damilare Oduyomi portfolio

Read this before any design work on this site. It records the direction already chosen,
so new work extends it instead of drifting.

## Direction in one line

Dark editorial, engineer-credible. A protocol spec rendered with care: calm, flat,
precise, one cool accent. Reference: Stefano Bartoletti's portfolio. Not a SaaS landing page.

## Palette

| Role | Token | Hex | Use |
| --- | --- | --- | --- |
| Page | `base-950` | `#0f0f0f` | Body background, hero |
| Alt section | `base-900` | `#141414` | Alternating section tint (used at /40) |
| Surface | `base-800` | `#1d1d1d` | Cards |
| Raised | `base-700` | `#242424` | Chips |
| Border | `white/10` | — | Default 1px hairline on every surface |
| Border strong | `edge` | `#374151` | Stat grid, dividers that need to read |
| Heading | white | `#ffffff` | h1/h2/h3 |
| Body | `slate-400` | `#94a3b8` | Paragraphs (passes AA on all bases) |
| Body strong | `slate-200/300` | `#e2e8f0` / `#cbd5e1` | Values, emphasized lines |
| Accent text | `accent` | `#818CF8` | Labels, links, stat numbers, hover (AA on dark) |
| Accent light | `accent-400` | `#A5B4FC` | Rare highlight |
| Solid CTA | `primary` | `#312E81` → hover `#4338CA` | Filled buttons only, white text |
| Status | emerald / amber / rose 400 | — | OSS feature / fix / security badges only |

Rules: one accent hue (indigo). Never put accent text below AA. `slate-500` and darker are
banned for text. Never use green or "neon" accents again (retired palette).

## Type

- **Sans:** Manrope 400–800 (`--font-sans`). Headlines, body.
- **Mono:** JetBrains Mono 400–600 (`--font-mono`). Labels, code, data, metadata.
- Hero h1: 800 weight, 44 → 72 → 96px, line-height ~0.96, tracking −0.03 → −0.05em.
- Section h2: 700, 30 → 36px, `tracking-tight`.
- Section label: mono 12px, uppercase, `tracking-[0.25em]`, accent, numbered `01 / about`.
- Body: 16–18px, `leading-relaxed`, max ~65ch.
- Mono should signal "this is code/data". Sans for anything a human reads as prose,
  including button labels and project names.

## Layout & spacing

- Container: `max-w-6xl`, gutters 20px → 32px.
- Section rhythm: `py-20 sm:py-28`, hairline `border-t white/[0.06]` between sections.
- Spacing scale: 12 / 24 / 48 / 80 / 128.
- Radius: `rounded-lg` (8px) for surfaces, `rounded-sm` for buttons, `rounded-md` for chips.
- Left-aligned editorial sections. Centered layout only for hero and contact.

## Surfaces & depth

- Flat. 1px hairline border, solid fill, **no box-shadow**.
- Glass (`.glass`: white/4% + backdrop blur) only on the fixed nav and image overlays.
- No decorative gradients on surfaces. A faint grid is allowed in the hero only.

## Imagery

- Real headshot (`/images/headshot.png`) and real product screenshots. No stock, no emoji, no AI art.
- Screenshots need to be crisp and cropped to one meaningful region, not a whole page at thumbnail size.
- Icons: simple 1.5–2px stroke SVGs in `components/icons.tsx`.

## Motion

- Purpose first: entrance reveals (once), hover feedback, press feedback. Nothing loops.
- Easing: strong ease-out `cubic-bezier(0.23, 1, 0.32, 1)` for UI; never `ease-in`.
- Durations: hover/press 120–200ms, reveals ≤ 500ms, stagger 50–80ms.
- Buttons get `active:scale-[0.97]`.
- Hover-only effects go behind `@media (hover: hover) and (pointer: fine)`.
- Respect `prefers-reduced-motion` (already wired in `globals.css`).

## Voice

Specific, technical, plain. "Programmable trust, engineered on Stellar." Real numbers
(16+ merged PRs, 16 integration tests). Fintech for emerging markets. No "empower", no "seamless".

## Things to avoid

1. Glowing blurred accent blobs and pulsing gradients. That is the "made by AI" indigo glow.
2. Cards nested inside card sections, and identical card grids section after section.
3. Chip walls: the same tech tags repeated on every card.
4. Mono type as decoration on buttons, names and paragraphs.
5. Centered pill badge + giant headline + two buttons + 4-stat strip as the default hero formula.
6. Shadows, gloss, glass on content cards.
7. Text below WCAG AA, including `slate-500` and accent at low opacity.

## What changed

- 2026-10-13: File created from the live codebase (Tailwind config, globals.css, components)
  and a desktop/phone screenshot audit.
- 2026-10-13: Option A pass. Removed hero/contact glow and looping animations, mono off
  buttons and names, toolbelt as a line not chips, `.press` / `.btn-*` classes, 500ms reveals
  with strong ease-out. Content rule added: **every claim on the site must be checkable on
  GitHub** — no projects you didn't build, numbers re-verified before changing them.
