# Open Holistic AI — Website

Marketing site for **Open Holistic AI Solutions Private Limited** — sovereign AI for governments, hospitals and education. Built with Next.js (App Router) and deployable on Vercel with zero configuration.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- Self-contained CSS design system (`src/app/globals.css`) — no CSS framework
- Editorial landing in the "Inaiv/Xynvora" style: pill nav, photographic hero + veil, marquee, bento proof grid, numbered sector principles, dark sovereignty band, footer
- Fully mobile-responsive (breakpoints at 1080px / 760px / 420px)

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repo to GitHub (already at `Open-Holistic-AI/ohai-web`).
2. In Vercel: **New Project → Import** this repo. Vercel auto-detects Next.js — no settings needed.
3. Deploy. Add your custom domain (`openholisticai.in`) in Project → Settings → Domains.

## Structure

```
src/
├── app/
│   ├── layout.tsx        # metadata, SEO, JSON-LD, fonts
│   ├── page.tsx          # renders the landing
│   ├── globals.css       # full design system + responsive rules
│   ├── icon.svg          # favicon
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   └── ohai-landing.tsx  # the single-page landing (nav, hero, sections, footer)
public/
└── media/
    ├── hero-bg.png       # hero background (placeholder — swap for OHM imagery)
    └── card-research.jpg # bento "infrastructure" card (placeholder — swap)
website-content/          # full multi-page copy (Government, Healthcare, Education, etc.)
```

## Swapping imagery

`public/media/hero-bg.png` and `public/media/card-research.jpg` are neutral placeholders
matching the reference style. Replace them with Open Holistic AI's own photography
(e.g. the Nalam AI launch, ambient-listening ward, IIT Madras) at the same aspect
ratios — no code changes needed.

## Extending to multiple pages

Full copy for Government, Healthcare (OHM), Education, Platform, Technology, About,
Newsroom and Contact lives in `website-content/`. To turn each into a route, add a
folder under `src/app/` (e.g. `src/app/government/page.tsx`) reusing the same CSS
classes and nav/footer.
```
```
