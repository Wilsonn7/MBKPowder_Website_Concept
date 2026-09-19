# MBK Powder — Code Smells Review

| Code Smell | Status | Evidence | Refactoring / Prevention |
|---|---|---|---|
| Duplicated Code | Not Detected | Shared components used (`ProductCard`, `BenefitCard`, `SectionTitle`). | Created reusable components from the start to prevent markup duplication. |
| Long Component | Not Detected | `Home.jsx` is just a coordinator. | Separated each section of the landing page into its own component in `src/pages/Home/sections/`. |
| God Component | Not Detected | UI, data, and logic are separated. | Centralized data in `src/data/`, used presentational components. |
| Hard-coded Data | Not Detected | Navigation, Products, Benefits pull from `src/data/`. | Created data arrays to dynamically render lists. |
| Magic Values | Not Detected | CSS uses `var(--token)`. | Defined a robust design token system in `variables.css`. |
| Dead Code | Not Detected | Clean scaffolding. | Removed default Vite CSS and logos. |
| Tight Coupling | Not Detected | `ProductCard` takes generic props. | Components don't rely on specific page state; they rely on passed props. |

---

## Visual Refinement Pass — Additional Smells Detected & Resolved

| Code Smell | Status | Where Found | Resolution |
|---|---|---|---|
| Wrong Asset Used | **Resolved** | `Footer.jsx` — SVG was a hand-crafted approximation instead of the real brand logo PNG | Replaced inline SVG `FooterLogo` with `<img src={mbkLogo}>` matching the Navbar approach |
| Dead CSS Classes | **Resolved** | `Footer.css` — `.footer__logo-mark`, `.footer__logo-wordmark` no longer matched any JSX | Removed unused classes, replaced with `.footer__logo-img` |
| Prop Deficiency | **Resolved** | `BenefitCard.jsx` — no `iconColor` prop, forcing all icons to use same color | Added optional `iconColor` prop; passed from data layer through `BenefitsSection` |
| Wrong Font Family | **Resolved** | `BrandStatement.css` — BUKTI used `var(--font-serif)` (Playfair Display) against Figma intent | Changed to `var(--font-sans)` (Inter), added `text-transform: uppercase` |
| Variant Overrides Missing | **Resolved** | `ProductCard.css` — featured variant had no visual differentiation from default card | Added `product-card--featured` overrides to remove card chrome (bg, radius, shadow) |
| Flat Collage Layout | **Resolved** | `BrandStory.css` — equal-width CSS Grid created flat uniform row, no editorial depth | Replaced with flexbox + explicit width/height/transform per item for staggered composition |

