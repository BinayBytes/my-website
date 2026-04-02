# Proxima Systems — Nuxt 3 Website

Nuxt 3 conversion of the Proxima Systems marketing website.

## Stack

- **Framework**: Nuxt 3 (Vue 3 + Vite)
- **Styling**: Global CSS via `assets/css/styles.css` (CSS variables, no CSS framework)
- **Fonts**: Nunito + Nunito Sans via Google Fonts (loaded in `nuxt.config.ts`)
- **State**: None needed — all content is static data in `script setup`

## Project Structure

```
proxima-nuxt/
├── app.vue                        # Root app shell
├── nuxt.config.ts                 # Nuxt config: fonts, CSS, meta
├── pages/
│   └── index.vue                  # Main page — composes all sections
├── components/
│   ├── AppNav.vue                 # Fixed navigation bar
│   ├── AppFooter.vue              # Footer with links
│   ├── VideoBackground.vue        # Reusable lazy-loading video bg
│   ├── HeroSection.vue            # Hero with AI platform card
│   ├── MarqueeSection.vue         # Scrolling capability ticker
│   ├── ServicesSection.vue        # 4 service cards (sticky layout)
│   ├── AISolutionsSection.vue     # 3 enterprise AI solution cards
│   ├── ProductsSection.vue        # Provento.ai + FlowMapper.ai
│   ├── StatsSection.vue           # 4-column stats bar
│   ├── IndustriesSection.vue      # 6 industry cards
│   ├── HowWeWorkSection.vue       # 4-step process + architecture diagram
│   ├── CaseStudiesSection.vue     # 3 case study cards with metrics
│   ├── PartnersSection.vue        # Technology partner logos
│   └── TeamSection.vue            # Team member cards
│   └── CTASection.vue             # Final call-to-action
├── assets/
│   └── css/styles.css             # All styles (identical to original)
└── public/
    └── assets/
        ├── images/                # Place logo files here (see README inside)
        └── videos/                # Place MP4 files here (see README inside)
```

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Adding Your Assets

### Images (`public/assets/images/`)
| File | Used in |
|------|---------|
| `proxima-logo.png` | Nav, How We Work arch card, Footer |
| `provento-logo.png` | Products section |
| `flowmapper-logo.png` | Products section |

### Videos (`public/assets/videos/`)
| File | Section |
|------|---------|
| `hero-ai.mp4` | Hero |
| `it-services.mp4` | Services |
| `datacenter.mp4` | AI Solutions |
| `ai-products.mp4` | Products |
| `smart-city.mp4` | Industries |
| `cloud-network.mp4` | How We Work |
| `data-stream.mp4` | Case Studies |
| `team.mp4` | Team |
| `circuit-board.mp4` | CTA |

Free MP4 source: https://www.pexels.com/videos/

## Video Lazy Loading

`VideoBackground.vue` replaces the original vanilla JS lazy loader:
- The **hero** video uses `eager` prop — plays immediately
- All other videos use `IntersectionObserver` — load only when their section enters the viewport
- Saves ~80% bandwidth for users who don't scroll the full page
- `prefers-reduced-motion` media query hides all videos (CSS)

## Updating Content

All page content is defined as static arrays in each component's `<script setup>`:

- **Services** → `components/ServicesSection.vue`
- **AI Solutions** → `components/AISolutionsSection.vue`
- **Products** → `components/ProductsSection.vue`
- **Industries** → `components/IndustriesSection.vue`
- **Team** → `components/TeamSection.vue`
- **Case Studies** → `components/CaseStudiesSection.vue`
- **Partners** → `components/PartnersSection.vue`
- **How We Work steps** → `components/HowWeWorkSection.vue`

## Deployment

Nuxt 3 supports multiple deployment targets:

```bash
# Static site (SSG) — best for Netlify / Vercel / GitHub Pages
npm run generate

# Server-side rendering — for Node.js hosts
npm run build
npm run preview
```

### Netlify
```bash
npm run generate
# Deploy the .output/public directory
```

### Vercel
Just push to Git — Vercel auto-detects Nuxt 3.

## SEO

`useSeoMeta()` in `pages/index.vue` sets title, description, and Open Graph tags.
Extend it with `ogImage`, `twitterCard`, `canonical`, etc. as needed.

---

© 2020–2026 Proxima Systems. All rights reserved.
