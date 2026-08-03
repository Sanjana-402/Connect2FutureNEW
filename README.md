# Connect2Future — Corporate Website

A production-ready React + Vite corporate website for Connect2Future, a
diversified holding company. Built to match the approved visual mockups:
Home, Who We Are, Our Ecosystem, Insights, and Contact.

## Stack

- React 18 + Vite
- React Router (routing)
- Framer Motion (scroll reveals, page transitions, hero motion)
- GSAP + Lenis (smooth scroll — wired via `useLenis` hook)
- CSS Modules (all component styling — no Tailwind / Bootstrap / MUI)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173

Build for production:

```bash
npm run build
npm run preview
```

## Structure

```
src/
  assets/            (reserved for local brand assets)
  components/        reusable UI: Navbar, Footer, Button, Hero, Timeline,
                      VentureCard, InsightCard, StatBlock, Newsletter, etc.
  pages/              Home, WhoWeAre, Ecosystem, Insights, Contact
  data/               ventures.js, insights.js, navigation.js — all copy
                      and structured content lives here, separate from markup
  hooks/              useLenis (smooth scroll), useScrollNavbar
  styles/             variables.css, typography.css, animations.css,
                      globals.css, utilities.css — the global design system
  utils/images.js     central registry of placeholder photography
```

## Design tokens

Color, spacing, radius, and type scale are defined once in
`src/styles/variables.css` and `src/styles/typography.css`, and consumed
everywhere via CSS custom properties — change a token there and it
propagates across the whole site.

## Images

All photography is sourced from Unsplash as high-quality placeholder
imagery matched to each section's subject (HQ exteriors, leadership
portraits, classrooms, engineering, laundry service, analytics, etc).
Swap any URL in `src/utils/images.js` for final brand photography —
every component reads from that single file.

## Notes

- No backend, no CMS, no auth — fully static.
- Fully responsive: desktop, laptop, tablet, mobile, ultra-wide.
- Reduced-motion is respected (`prefers-reduced-motion`) across both the
  CSS keyframes and the Lenis smooth-scroll hook.
