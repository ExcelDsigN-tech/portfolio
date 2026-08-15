# Portfolio — Oluwadamilare Oduyomi (ExcelDsigN-tech)

A dark, modern, technical portfolio for a **Soroban / Stellar blockchain developer**. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS — the same stack showcased across the developer's open-source repos, so the site itself is proof of work.

Live: deployable in one click on Vercel (guide below).

---

## Highlights

- **Flagship deep-dive** — TrustLink, a decentralized B2B escrow + reputation protocol built on Stellar Soroban (Rust contracts, Axum/SQLx indexer, Next.js dashboard, TS SDK, 16 integration tests).
- **6 featured projects** across payments, escrow, lending, and remittances for African markets.
- **Open-source section** — 16+ merged PRs into the Stellar ecosystem, categorized by type (feature / fix / security).
- **Scroll-reveal animations, terminal-style hero, custom glow design tokens**, with `prefers-reduced-motion` fallbacks.
- **SEO-ready**: metadata, Open Graph, Twitter cards, keywords, robots.

---

## Tech Stack

| Layer      | Choice                                        |
| ---------- | --------------------------------------------- |
| Framework  | Next.js 14.2 (App Router, static prerender)   |
| Language   | TypeScript 5.5                                |
| Styling    | Tailwind CSS 3.4 + custom design tokens       |
| Fonts      | Space Grotesk (sans) + JetBrains Mono (mono)  |
| Animations | CSS keyframes + IntersectionObserver reveal   |
| Deploy     | Vercel (static, zero config)                  |

## Project Structure

```
app/
  layout.tsx        # Root layout, metadata, OG/Twitter cards, fonts
  page.tsx          # Home page — assembles all sections
  globals.css       # Design tokens, component classes, animations
components/
  Nav.tsx           # Sticky nav with mobile menu
  Hero.tsx          # Terminal-style hero + profile stats
  About.tsx         # Mission + identity card
  Skills.tsx        # Focus areas + toolbelt
  Flagship.tsx      # TrustLink architecture + flow
  Projects.tsx      # Featured projects + expandable "more" list
  OpenSource.tsx    # Stellar ecosystem contributions
  Contact.tsx       # Email + GitHub CTAs
  Footer.tsx
lib/
  data.ts           # Single source of truth for all content
```

## Local Development

```bash
npm install
npm run dev        # http://localhost:3000 (or PORT=x npm run dev)
```

## Verification

```bash
npm run build      # Production build + type check
npm run lint       # ESLint (next/core-web-vitals) — zero warnings
npx tsc --noEmit   # TypeScript check
```

Note: if port 3000 is already in use on your machine, run with `set PORT=3100 && npm run dev` (or `PORT=3100 npm run dev` on macOS/Linux).

## Deploy to Vercel

1. **Push to GitHub** (if not already):

   ```bash
   git init
   git add .
   git commit -m "feat: portfolio v1"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```

2. **Import on Vercel**

   - Go to [vercel.com/new](https://vercel.com/new), connect your GitHub account, and import the `portfolio` repo.
   - Framework preset: **Next.js** (auto-detected). No env vars needed — the site is fully static.
   - Click **Deploy**.

3. **Custom domain** (optional)

   - In the Vercel project dashboard → **Settings → Domains**, add your domain and follow the DNS instructions.

4. **Every future push auto-deploys** — no build config required.

## Customizing the Content

All content lives in **`lib/data.ts`**: profile stats, focus areas, toolbelt, TrustLink architecture/flow, featured + more projects, and contributions. Edit that one file to update the whole site.

Colors and design tokens are in **`tailwind.config.ts`** and **`app/globals.css`** (base `#050507`, accent violet `#8b7cff`, accent cyan `#5ce1e6`).

---

### Audit summary

Portfolio content was derived from a live audit of `github.com/ExcelDsigN-tech`: 67 public repos, 16+ merged PRs, Quickdraw + Pull Shark x2 achievements, and the TrustLink monorepo (contracts, indexer, dashboard, SDK) — all reflected in the site's data layer.