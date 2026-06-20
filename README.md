# Maren Hale — Founder Portfolio

A minimal, elegant, motion-driven personal site built for a startup founder.
Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lucide icons.

## Design system

- **Palette** — warm paper background, near-black ink, a single clay/rust accent used sparingly.
- **Type** — Fraunces (display serif) + Inter (body) + JetBrains Mono (labels/dates).
- **Signature motion** — the hero headline types itself in word-by-word on load; everything else uses restrained scroll-reveals, a count-up stat row, and a thin scroll-progress hairline at the top of the page. No parallax, no cursor trails, no constant ambient motion.
- Respects `prefers-reduced-motion`, has visible keyboard focus states, and is responsive down to small mobile widths.

## File structure

```
founder-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout, fonts, metadata
│   │   ├── page.tsx           # Assembles all sections
│   │   └── globals.css        # Global styles, scrollbar, focus states
│   ├── components/
│   │   ├── Header.tsx         # Sticky nav with mobile menu
│   │   ├── ScrollProgress.tsx # Top scroll-progress hairline
│   │   ├── Hero.tsx           # Hero with typing headline + stats
│   │   ├── Work.tsx           # Selected work list
│   │   ├── Timeline.tsx       # Career timeline
│   │   ├── Philosophy.tsx     # Three principle cards
│   │   ├── Writing.tsx        # Newsletter/essay list
│   │   ├── Contact.tsx        # Contact CTA
│   │   ├── Footer.tsx         # Footer with social links
│   │   ├── Reveal.tsx         # Reusable scroll-reveal wrapper
│   │   └── CountUp.tsx        # Animated number counter
│   ├── data/
│   │   └── content.ts         # All copy/content in one place — edit this first
│   └── lib/
│       └── useScrollProgress.ts
├── tailwind.config.ts          # Color tokens, fonts, custom animations
├── package.json
└── tsconfig.json
```

## To personalize

Open `src/data/content.ts` — every piece of text on the site (name, role, bio,
stats, work history, timeline, philosophy, writing, email) lives in that one
file. Swap in your own details and the whole site updates.

## Setup — step by step

**Prerequisites:** Node.js 18.17 or later, and npm (comes with Node).
Check your version:
```bash
node -v
npm -v
```

**1. Unzip the project and move into it**
```bash
cd founder-portfolio
```

**2. Install dependencies**
```bash
npm install
```
This installs Next.js, React, Tailwind, Framer Motion, Lucide React, and TypeScript.

**3. Run the development server**
```bash
npm run dev
```
Open http://localhost:3000 in your browser. The page hot-reloads as you edit files.

**4. Build for production (when you're ready to deploy)**
```bash
npm run build
npm run start
```
`npm run build` creates an optimized production build; `npm run start` serves it on port 3000.

**5. Deploy**
The easiest path is Vercel (made by the Next.js team): push this folder to a
GitHub repo, import it on vercel.com, and it deploys automatically with zero
config. Netlify and Cloudflare Pages also work with their standard Next.js
build settings.

## Notes

- Fonts (Fraunces, Inter, JetBrains Mono) load from Google Fonts at build time via `next/font/google` — this requires internet access during `npm run build` / `npm run dev`. If you're building in a fully offline environment, swap them for local fonts via `next/font/local`.
- All animations are built with Framer Motion's `whileInView` and `useScroll`, so nothing animates until it's actually scrolled into view (better performance, no motion-sickness-inducing autoplay).
