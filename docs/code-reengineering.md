# MBK Powder — Code Reengineering

## Definition & Objectives
Code reengineering in this project involves building a maintainable, extensible, and clean architecture from scratch, anticipating future growth and preventing common React code smells. The objective is to produce code that is modular, loosely coupled, and easy to refactor.

## Initial Code Analysis
Since this was a greenfield project (starting from an empty directory), there was no legacy code to refactor. However, the reengineering principles were applied *preemptively* during the initial architecture design.

## Identified Smells & Refactoring Techniques (Preemptive)

### Before: Monolithic Page Component
**Problem**: The landing page in Figma is long and complex. Putting everything in `Home.jsx` would create a God Component.
**Refactoring**: Extracted into `HeroSection`, `BrandStatement`, `FeaturedProducts`, `BrandStory`, `BenefitsSection`, and `RecommendedProducts`.
**After**: `Home.jsx` is extremely clean, only orchestrating the layout.

### Before: Hard-coded Repeated Elements
**Problem**: The Figma shows multiple product cards and benefit icons.
**Refactoring**: Centralized data in `src/data/products.js` and `src/data/benefits.js`. Created `ProductGrid`, `ProductCard`, and `BenefitCard` components.
**After**: The UI is data-driven. Adding a new product requires zero JSX changes.

### Before: Magic Values in CSS
**Problem**: Repeating colors and spacing units across components makes global updates hard.
**Refactoring**: Created a comprehensive CSS Custom Properties system in `src/styles/variables.css`.
**After**: All component CSS files use `var(--color-...)` and `var(--spacing-...)`.

## Verification Results
- The architecture is extremely flat and feature-oriented where necessary.
- Components are small and focused.
- Global styles are strictly separated from component-scoped styles.
- Data and UI are loosely coupled.

---

## Visual Refinement Pass (September 2026)

### Issue: Footer SVG logo not matching brand
**Smell**: Inline SVG in `FooterLogo` sub-component was a hand-crafted approximation, not the actual brand asset.
**Detected in**: `Footer.jsx` — `FooterLogo()` function used inline SVG paths instead of the real logo image.
**Refactoring**: Replaced the entire SVG-based FooterLogo with an `<img>` tag importing the actual `Logo MBK.png` asset (already used correctly in Navbar). Removed unused `footer__logo-mark` and `footer__logo-wordmark` CSS classes.
**Result**: Both Navbar and Footer now use the same consistent logo asset. Zero code smell introduced.

### Issue: BenefitCard lacked per-card color support
**Smell**: All three benefit icons shared the same red `currentColor` — losing the Figma distinction between pink (Fresh All Day), purple (Halal Certified), and teal (Long Lasting) circles.
**Detected in**: `BenefitCard.jsx` had no `iconColor` prop. `benefits.js` had no color data.
**Refactoring**: Added an optional `iconColor` prop to `BenefitCard`, applied via inline style. Updated `benefits.js` data to include `iconColor` per entry. `BenefitsSection.jsx` forwards the prop — no new components introduced, no duplication created.
**Result**: Per-card color is now data-driven. Adding a new benefit with a different color requires only a data change, not a component change.

### Issue: BUKTI used Playfair Display serif
**Smell**: `BrandStatement.css` applied `var(--font-serif)` (Playfair Display) to the BUKTI display text, creating visual mismatch with the Figma's bold sans-serif treatment.
**Refactoring**: Changed `font-family` to `var(--font-sans)` (Inter). Added `text-transform: uppercase` to preserve intended capitalization.
**Result**: BUKTI now renders in the intended bold modern sans-serif.

### Issue: ProductCard featured variant had unnecessary card chrome
**Smell**: Featured cards used the same white background + border-radius as default cards, despite the Figma showing a clean editorial style without card chrome.
**Refactoring**: Added `.product-card--featured` overrides to reset `background-color`, `border-radius`, and `box-shadow`. Added light `border-radius` only to the image wrapper (not the card wrapper). Body padding set to minimal top-only for featured.
**Result**: Same reusable `ProductCard` component serves both editorial (featured) and card (default) contexts via variants. No duplication introduced.

### Issue: BrandStory collage was a regular 5-column grid
**Smell**: The CSS grid had equal-width columns and no rotation/depth — rendering as a flat uniform row instead of the editorial collage in the Figma.
**Refactoring**: Changed from CSS Grid to flexbox with explicit `width` and `height` per item, plus `rotate()` and `translateY()` transforms for visual composition. Each item retains its numbered modifier class, keeping the CSS data-driven.
**Result**: Staggered, rotated collage composition. Still responsive — transforms are reset at mobile breakpoints for cleanliness.

