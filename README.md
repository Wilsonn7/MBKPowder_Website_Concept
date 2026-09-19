# MBK Powder — Frontend Project

This is a production-quality, responsive React application built with Vite for the MBK Powder brand.

## Technology Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM v6
- **Styling**: Vanilla CSS (CSS Custom Properties Architecture)
- **Language**: Modern JavaScript (ES6+)

## Project Structure
```text
src/
├── assets/          # Images, logos, and global icons
├── components/      # Shared UI components (Navbar, Footer, ProductCard)
├── data/            # Centralized data structures (Products, Nav links)
├── pages/           # Route-level page components (Home, About, etc.)
├── router/          # Application routing configuration
├── styles/          # Global styles and design tokens
├── App.jsx          # Root component
└── main.jsx         # Application entry point
```

## How to Install and Run
1. Ensure Node.js is installed.
2. Clone or open the repository.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## How to Build for Production
```bash
npm run build
```
This will generate optimized static files in the `dist` folder.

## How to Add a New Product
To add a new product, you **do not** need to edit any React components.
1. Add the product image to `src/assets/images/`.
2. Open `src/data/products.js`.
3. Add a new object to the `products` array following the existing schema.
4. If `featured: true` or `recommended: true` is set, the product will automatically appear in the respective sections on the Landing Page. It will always appear on the Products page.

## Code Quality Principles
- **Separation of Concerns**: UI is separate from data. Global styles are separate from component styles.
- **Data-Driven UI**: Repeated structures (cards, benefits, navigation) are rendered from data arrays, not hard-coded.
- **Maintainability**: Used CSS Custom Properties for all colors and spacing to ensure a single source of truth.
- **Accessibility**: Semantic HTML, screen-reader text (`sr-only`), `aria` attributes, and keyboard-friendly navigation.

## Known Limitations
- The contact form is a frontend-only implementation with validation. It does not send real emails.
- Image assets use the provided PNGs and placeholders where exact lifestyle imagery was unavailable.
