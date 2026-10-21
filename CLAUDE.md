# Portfolio: rules for this repo

Personal portfolio of Oluwadamilare Oduyomi (ExcelD'sign Labs).
Applies to me, contributors and AI coding tools.
Read design-taste/design-taste.md before any design work.

## Security
- No secrets in the repo. Keys and tokens live in `.env.local` (gitignored).
  Commit only `.env.example` with empty values.
- Anything prefixed `NEXT_PUBLIC_` ships to the browser. Never put a secret in one.
- Commit as `261151608+ExcelDsigN-tech@users.noreply.github.com`, never a
  personal address. No AI attribution or Co-Authored-By lines.
- No personal data beyond what I publish: no phone, home address or private
  email in code, metadata or image EXIF. Strip EXIF before committing photos.
- If a contact form is added: server route or trusted form service, with a
  honeypot or rate limit. Never send email from the client.
- External links that open a new tab use `rel="noopener noreferrer"`.
- New dependencies only when needed; check them first. Run `npm audit`
  before each release.
- Gitleaks (`.github/workflows/gitleaks.yml`) scans every PR; a finding
  blocks the merge.

## Organization
- Branches: `feat/`, `fix/`, `docs/`, `chore/` + short name.
- Commits: Conventional Commits (`feat(work): add DukaPay token panel`).
- Smallest change that does the job. Reuse existing components first.
- Replace, don't layer: a redesign deletes the old version in the same
  change. No `v2` folders, no commented-out code.
- Structure:
  - `app/` pages, layout, global CSS
  - `components/` UI, one component per file
  - `lib/data.ts` all copy and project data (data, not JSX)
  - `public/brand/` logos; `public/images/` and `public/projects/` images
  - `design-taste/` design direction, tokens, Figma links
- Never weaken a check to pass CI: no disabled lint rules, no skipped
  tests, no raised limits.
- Before a PR: `npm run lint` and `npm run build` pass (build typechecks).
- `main` changes land by PR, squash-merged; the PR title is the commit message.

## Design
- One system: colour, type and spacing come from Tailwind tokens. No one-off
  hex in components. Exception: colours shown as content (e.g. a token
  swatch) live in `lib/data.ts`.
- Use the logo files in `public/brand/`; never redraw or recolour them.
- Dark theme only, as defined in design-taste.md. Light mode is planned.
- Accessibility:
  - text contrast 4.5:1 (3:1 for large text)
  - meaningful `alt` on every image; empty `alt` only for decoration
  - full keyboard navigation with visible focus states
  - respect `prefers-reduced-motion` for all animation
- Mobile first. Check every page at 360px, 768px and 1440px.
- Images via `next/image`, sized and compressed (under 300 KB each). Fonts
  via `next/font`. Target Lighthouse 90+ on all four scores.
- Case studies: problem, my role, process, outcome, link. Real work and
  real numbers only, every claim checkable on GitHub.
- Copy: plain, direct, no filler.
