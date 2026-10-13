# Fermor — Frontend Developer Assignment

A polished, responsive homepage for **Fermor** — a personal finance platform built for India.

## Live Demo

> Deploy to Vercel: `npx vercel --prod` (or connect your GitHub repo in the Vercel dashboard)

---

## Tech Stack

| Tool | Version | Why |
|------|---------|-----|
| Next.js | 14 (App Router) | SSR, font optimization, excellent DX |
| TypeScript | 5.x | Type safety, cleaner component props |
| Tailwind CSS | 3.x | Utility-first, responsive, fast to iterate |
| Google Fonts | Inter + Poppins | Inter for body (readable), Poppins for headings (bold, geometric) |

No additional UI libraries — animations and components are hand-crafted.

---

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

```bash
# Production build
npm run build
npm start
```

---

## Key Design Decisions

### Color System
- **Ground**: `#0D0F10` — near-black for deep, premium feel
- **Mint accent**: `#75FB90` — Fermor's brand green, used for CTAs and positive values
- **Surface**: Semi-transparent dark cards with glassmorphism borders

### Section Architecture
1. **Navbar** — Floating glassmorphism pill, scroll-aware hide/show, dropdown menus
2. **Hero** — Bold headline, email waitlist with form validation, animated dashboard mockup (pure CSS/SVG)
3. **Trust Bar** — Auto-scrolling horizontal ticker with brand signals
4. **Features Bento Grid** — 2×2 asymmetric layout (Invest, Track, Ask AI, Plan) with inline data visuals
5. **How It Works** — 3-step card layout with icon + connector line
6. **SIP Calculator** — Fully interactive, math runs client-side, no data leaves the browser
7. **Testimonials** — 3 fictional early-access user cards (clearly not fabricated statistics)
8. **Final CTA** — Email capture with validation
9. **Footer** — Dark, minimal, with proper legal disclaimer

### No fabricated data
- Testimonials use clearly fictional personas
- Calculator results are illustrative (clearly labeled)
- No fake user counts or financial statistics claimed

### Accessibility
- Semantic HTML throughout (`<section>`, `<nav>`, `<footer>`, `<blockquote>`, etc.)
- `aria-label` on interactive elements
- `role="alert"` on form validation errors
- `focus-visible` outlines with brand color

### Performance
- All fonts use `display: swap`
- No external image dependencies (all visuals are CSS/SVG)
- Animations use `transform` and `opacity` (GPU-composited, no layout thrash)
- `will-change: transform` only on the trust bar scroll element

### Mobile Responsiveness
- Navbar collapses to hamburger at 768px
- Bento grid collapses to single column below 768px
- SIP calculator stacks vertically below 768px
- Footer adapts to 2-column then 1-column grid

---

## Deployment (Vercel)

1. Push to GitHub
2. Import repo in [vercel.com/new](https://vercel.com/new)
3. Framework preset: **Next.js** (auto-detected)
4. Deploy — no environment variables required

---

## Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Homepage — assembles all sections
│   └── globals.css       # Design tokens, animations, base styles
├── components/
│   ├── Navbar.tsx        # Floating glassmorphism nav
│   ├── Hero.tsx          # Hero section + email form
│   ├── DashboardMockup.tsx # Animated dashboard visual
│   ├── TrustBar.tsx      # Auto-scrolling stats ticker
│   ├── FeaturesBento.tsx # 4-card bento grid
│   ├── HowItWorks.tsx    # 3-step explainer
│   ├── CalculatorTeaser.tsx # Live SIP calculator
│   ├── Testimonials.tsx  # User quote cards
│   ├── FinalCTA.tsx      # Email capture section
│   └── Footer.tsx        # Dark footer
└── README.md
```
