# 🌸 MBK Powder — Website Dokumentasi Lengkap

**Tanggal Dokumentasi:** September 17, 2026  
**Versi Aplikasi:** 0.0.0  
**Status:** Active Development

---

## 📋 Daftar Isi

1. [Ringkasan Proyek](#ringkasan-proyek)
2. [Teknologi & Stack](#teknologi--stack)
3. [Sistem Desain](#sistem-desain)
   - [Palet Warna](#palet-warna)
   - [Tipografi](#tipografi)
   - [Spacing & Layout](#spacing--layout)
   - [Komponen Visual](#komponen-visual)
4. [Struktur Proyek](#struktur-proyek)
5. [Fitur Utama](#fitur-utama)
6. [Panduan Instalasi & Setup](#panduan-instalasi--setup)
7. [Perintah Development](#perintah-development)

---

## 🎯 Ringkasan Proyek

**MBK Powder** adalah website e-commerce modern untuk produk bedak tabur dan deodorant premium. Website ini dibangun dengan tujuan untuk:

- 🛍️ Menampilkan produk MBK Powder secara profesional
- 📱 Menyediakan pengalaman user interface yang responsif (desktop & mobile)
- 🌐 Memfasilitasi komunikasi langsung dengan pelanggan melalui form kontak
- 📖 Menampilkan kisah brand (brand story) dan benefit produk
- 🎨 Menciptakan identitas visual yang kuat dan memorable

**Tipe Produk:**
- **Bedak Tabur (Powder):** PO Powder Silver, PO Powder Putih
- **Deodorant Roll-On:** Tersedia untuk pria & wanita dalam berbagai varian warna

**Target Audience:** Konsumen Indonesia yang mencari produk personal care berkualitas premium dengan sertifikasi halal.

---

## 🛠️ Teknologi & Stack

### Frontend Framework & Build Tools

| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| **React** | ^19.2.8 | UI library untuk membangun interface komponen |
| **React DOM** | ^19.2.8 | Rendering React components ke DOM |
| **React Router DOM** | ^7.18.3 | Routing & navigasi multi-halaman |
| **Vite** | ^8.2.2 | Build tool & development server |
| **@vitejs/plugin-react** | ^6.1.0 | Plugin React untuk Vite |

### Development & Linting

| Tool | Versi | Fungsi |
|------|-------|--------|
| **oxlint** | ^1.79.0 | Linter untuk code quality checks |
| **TypeScript Types** | ^19.2.18+ | Type definitions (opsional) |

### CSS & Styling

- **Vanilla CSS** dengan CSS Custom Properties (CSS Variables)
- **No CSS Framework** — semua styling dibuat custom dari nol
- **Responsive Design** — Mobile-first approach menggunakan media queries

### Module System

- **ES Modules** (`type: "module"` dalam package.json)
- **Import Aliases** — `@` mapping ke folder `src/` untuk cleaner imports

---

## 🎨 Sistem Desain

### Palet Warna

Semua warna di-centralize dalam `src/styles/variables.css` menggunakan CSS Custom Properties.

#### **Warna Utama (Primary Colors)**

```css
--color-bg:           #FAF9F6;   /* Off-white/Cream — Background utama */
--color-accent:       #C0392B;   /* MBK Red — Warna signature brand */
--color-accent-dark:  #96281B;   /* Darker Red — Hover states */
```

**Visualisasi:**
- **Background Cream:** Memberikan kesan elegan, premium, dan lembut di mata
- **MBK Red (#C0392B):** Warna brand yang bold, energik, dan menonjol untuk CTA buttons, logo marks, dan highlights
- **Dark Red (#96281B):** Digunakan untuk hover states agar interaktif dan responsif

#### **Warna Aksen (Accent Colors)**

```css
--color-bg-pink:        #F5C6CB;   /* Soft Pink — Accent section backgrounds */
--color-bg-pink-light:  #FDE8EA;   /* Light Pink — Subtle card highlights */
```

**Penggunaan:** Soft pink digunakan untuk membedakan section atau card highlights dengan lembut tanpa mengganggu keseimbangan visual.

#### **Warna Teks & Neutral**

```css
--color-white:        #FFFFFF;     /* Pure White — Card & nav backgrounds */
--color-text:         #1A1A1A;     /* Near-black — Primary text */
--color-text-muted:   #888888;     /* Mid-grey — Secondary/supporting text */
--color-border:       #E5E5E5;     /* Light grey — Dividers */
--color-border-dark:  #CCCCCC;     /* Darker grey — Input borders */
```

**Hierarki Warna Teks:**
1. **Primary Text (#1A1A1A):** Headings, body text utama
2. **Muted Text (#888888):** Secondary information, smaller descriptions
3. **Border (#E5E5E5):** Subtle dividers antara sections

---

### Tipografi

#### **Font Family**

```css
--font-sans:    'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-serif:   'Playfair Display', Georgia, 'Times New Roman', serif;
```

**Strategi Font:**
- **Sans-serif (Inter):** Untuk body text, navigation, dan UI elements (modern, clean, readable)
- **Serif (Playfair Display):** Untuk headings dan taglines (elegant, premium, sophisticated)

#### **Ukuran Font (Size Scale)**

```css
--text-xs:    0.75rem;    /* 12px  — Small labels, captions */
--text-sm:    0.875rem;   /* 14px  — Form labels, meta info */
--text-base:  1rem;       /* 16px  — Default body text */
--text-lg:    1.125rem;   /* 18px  — Subheadings, card titles */
--text-xl:    1.25rem;    /* 20px  — Section subheadings */
--text-2xl:   1.5rem;     /* 24px  — Section titles */
--text-3xl:   1.875rem;   /* 30px  — Page headings */
--text-4xl:   2.25rem;    /* 36px  — Large headings */
--text-5xl:   3rem;       /* 48px  — Hero headings */
--text-6xl:   3.75rem;    /* 60px  — Extra large hero text */
--text-7xl:   4.5rem;     /* 72px  — Maximum size */
```

**Contoh Penggunaan:**
- Hero heading: `text-5xl` (48px)
- Section title: `text-3xl` (30px)
- Body text: `text-base` (16px)
- Small labels: `text-sm` (14px)

#### **Font Weight**

```css
--font-weight-regular:   400;  /* Normal body text */
--font-weight-medium:    500;  /* Emphasized text */
--font-weight-semibold:  600;  /* Subheadings */
--font-weight-bold:      700;  /* Headings */
--font-weight-extrabold: 800;  /* Maximum emphasis */
```

#### **Line Height (Leading)**

```css
--leading-tight:   1.2;   /* Compact — headings */
--leading-snug:    1.35;  /* Snug — subheadings */
--leading-normal:  1.5;   /* Default — body text */
--leading-relaxed: 1.65;  /* Relaxed — long-form content */
--leading-loose:   1.8;   /* Loose — poetry/special text */
```

---

### Spacing & Layout

#### **Spacing Scale (Vertical & Horizontal)**

```css
--spacing-xs:   0.5rem;   /* 8px   — Small gaps */
--spacing-sm:   1rem;     /* 16px  — Default padding/margin */
--spacing-md:   1.5rem;   /* 24px  — Card padding */
--spacing-lg:   3rem;     /* 48px  — Section padding */
--spacing-xl:   5rem;     /* 80px  — Section spacing */
--spacing-xxl:  7.5rem;   /* 120px — Hero section spacing */
```

#### **Container & Layout**

```css
--container-max:  1200px;  /* Max width layout */
--container-pad:  1.5rem;  /* Horizontal padding (mobile-friendly) */
```

**Struktur Container:**
```
┌─────────────────────────────────────────┐
│         padding-inline (24px)            │
│  ┌─────────────────────────────────────┐ │
│  │       max-width: 1200px             │ │
│  │   (auto margin untuk centering)     │ │
│  └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

---

### Komponen Visual

#### **Border Radius**

```css
--radius-xs:   4px;      /* Subtle rounded corners */
--radius-sm:   8px;      /* Gentle rounding */
--radius-md:   12px;     /* Default rounding — cards, buttons */
--radius-lg:   20px;     /* Pronounced rounding */
--radius-xl:   28px;     /* Extra rounded */
--radius-full: 9999px;   /* Fully circular/pill-shaped */
```

**Penggunaan:**
- Buttons: `radius-md` (12px)
- Cards: `radius-md` to `radius-lg`
- Icons/Avatars: `radius-full`

#### **Box Shadows**

```css
--shadow-sm:  0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-md:  0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04);
--shadow-lg:  0 10px 30px rgba(0, 0, 0, 0.10), 0 4px 8px rgba(0, 0, 0, 0.06);
```

**Hierarki Shadow:**
- `shadow-sm` — Subtle hover effects
- `shadow-md` — Default card shadow
- `shadow-lg` — Elevated/modal shadows

#### **Transisi & Animation**

```css
--transition-fast:  0.15s ease;   /* Micro-interaction (hover, focus) */
--transition-base:  0.25s ease;   /* Default transition */
--transition-slow:  0.4s ease;    /* Deliberate, animated transitions */
```

#### **Z-Index Management**

```css
--z-navbar:  100;   /* Fixed navigation */
--z-overlay: 200;   /* Mobile menu overlay */
--z-modal:   300;   /* Modals, dropdowns */
```

---

## 📁 Struktur Proyek

```
mbk-powder/
├── src/
│   ├── assets/                          # Aset visual (gambar, logo, icon)
│   │   ├── icons/                       # Folder untuk SVG icons
│   │   ├── images/                      # Product images, hero images
│   │   │   ├── Hero Section.png         # Hero section background
│   │   │   ├── MBK Silver.png           # Product image
│   │   │   ├── MBK Putih.png            # Product image
│   │   │   ├── image 10.png ~ 13.png    # Deodorant variants
│   │   └── logo/                        # Brand logos
│   │       ├── Logo MBK.png             # Main brand logo
│   │       └── halal-indonesia.png      # Halal certification
│   │
│   ├── components/                      # Reusable React components
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx               # Main navigation bar
│   │   │   └── Navbar.css
│   │   │
│   │   ├── Footer/
│   │   │   ├── Footer.jsx               # Footer component
│   │   │   └── Footer.css
│   │   │
│   │   ├── ProductCard/                 # Individual product card
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProductCard.css
│   │   │
│   │   ├── ProductGrid/                 # Grid layout for products
│   │   │   ├── ProductGrid.jsx
│   │   │   └── ProductGrid.css
│   │   │
│   │   ├── BenefitCard/                 # Individual benefit card
│   │   │   ├── BenefitCard.jsx
│   │   │   └── BenefitCard.css
│   │   │
│   │   ├── SectionTitle/                # Reusable section heading
│   │   │   ├── SectionTitle.jsx
│   │   │   └── SectionTitle.css
│   │   │
│   │   ├── ContactForm/                 # Contact form component
│   │   │   ├── ContactForm.jsx
│   │   │   └── ContactForm.css
│   │   │
│   │   └── ScrollToTop.jsx              # Auto-scroll to top on route change
│   │
│   ├── pages/                           # Page-level components (full pages)
│   │   ├── Home/
│   │   │   ├── Home.jsx                 # Home page container
│   │   │   ├── sections/                # Home page sections
│   │   │   │   ├── HeroSection.jsx & .css        # Hero banner
│   │   │   │   ├── BrandStatement.jsx & .css     # Brand tagline
│   │   │   │   ├── BrandStory.jsx & .css         # Brand history
│   │   │   │   ├── BenefitsSection.jsx & .css    # Product benefits
│   │   │   │   ├── FeaturedProducts.jsx & .css   # Featured products
│   │   │   │   └── RecommendedProducts.jsx & .css # Recommendation section
│   │   │
│   │   ├── About/
│   │   │   ├── About.jsx                # About page
│   │   │   └── About.css
│   │   │
│   │   ├── Products/
│   │   │   ├── Products.jsx             # All products listing
│   │   │   └── Products.css
│   │   │
│   │   └── Contact/
│   │       ├── Contact.jsx              # Contact page with form
│   │       └── Contact.css
│   │
│   ├── router/
│   │   └── AppRouter.jsx                # Main routing configuration
│   │
│   ├── data/                            # Data files & constants
│   │   ├── products.js                  # Product catalog
│   │   ├── benefits.js                  # Brand benefits
│   │   └── navigation.js                # Navigation menu items
│   │
│   ├── styles/                          # Global styles
│   │   ├── variables.css                # CSS custom properties (design tokens)
│   │   └── global.css                   # Reset, base typography, utilities
│   │
│   ├── App.jsx                          # Root app component
│   ├── App.css
│   ├── index.css                        # Entry point styles
│   └── main.jsx                         # React entry point
│
├── public/                              # Static assets
├── package.json                         # Dependencies & scripts
├── vite.config.js                       # Vite configuration
└── README.md                            # Project readme
```

---

## 🎯 Fitur Utama

### 1. **Navigasi Responsif (Navbar)**
- ✅ Fixed position di top of page
- ✅ Desktop: Left links | Center logo | Right links
- ✅ Mobile: Hamburger menu dengan overlay fullscreen
- ✅ Active link highlighting
- ✅ Scroll detection (shadow effect saat scroll)
- ✅ Keyboard support (Escape to close menu)

### 2. **Hero Section**
- ✅ Full-width lifestyle image
- ✅ Text overlay dengan positioning yang strategic
- ✅ Responsive pada semua breakpoints
- ✅ High-priority image loading (fetchpriority)

### 3. **Katalog Produk**
**Produk Tersedia:**
- **PO Powder Silver** — Bedak dengan kandungan antibakteri
- **PO Powder Putih** — Bedak klasik halal bersertifikat
- **MBK Deodorant Roll-On** — 4 varian (Purple, Pink, Black, Blue)

**Fitur Catalog:**
- ✅ Grid layout responsif
- ✅ Featured products section (hero section)
- ✅ Recommended products section
- ✅ Product cards dengan image, nama, variant, deskripsi
- ✅ Easy to manage data-driven approach

### 4. **Brand Identity**
- **Benefits Display** — 3 benefit cards:
  - 🌿 Fresh All Day (dengan SVG icon custom)
  - ✅ Halal Certified (dengan logo resmi)
  - ⏰ Long Lasting (dengan SVG icon custom)
- **Brand Story Section** — Cerita brand & nilai-nilai
- **Brand Statement** — Tagline & positioning

### 5. **Contact Section**
- ✅ Contact form dengan validation
- ✅ Contact information display (phone, email, hours)
- ✅ Two-column layout (info + form)
- ✅ Responsive pada mobile

### 6. **Routing Multi-Page**
- `/` — Home page
- `/about` — About page
- `/products` — Products listing
- `/contact` — Contact & form

### 7. **Mobile Responsiveness**
- ✅ Mobile-first CSS approach
- ✅ Flexible grid layouts
- ✅ Touch-friendly navigation
- ✅ Optimized images

---

## 🎨 Detail Komponen

### **Navbar Component**
```
┌─────────────────────────────────────────┐
│  Home  About          [MBK LOGO]      Products  Contact   │
│                                                 ☰ (mobile)   │
└─────────────────────────────────────────┘
↑ Sticky/Fixed position, shadow on scroll
```

### **Product Card**
```
┌─────────────────────┐
│   [Product Image]   │
│   (responsive)      │
├─────────────────────┤
│  PO Powder Silver   │    ← Product name
│  Bedak tabur dengan │    ← Description (secondary text)
│  kandungan antibak- │
│  teri...            │
└─────────────────────┘
```

### **Benefit Card**
```
┌──────────────────────┐
│   ┌──────────────┐   │
│   │  [Icon/Logo] │   │
│   │  (circular)  │   │
│   └──────────────┘   │
│   Fresh All Day      │  ← Benefit label
└──────────────────────┘
```

### **Section Layout**
```
Cream Background (#FAF9F6)
    ↓
[Container width: 1200px, max-width]
    ↓
    ├── Padding: 24px horizontal
    ├── Padding: 48px-120px vertical
    └── Content (sections, grids, cards)
```

---

## 📦 Data Structure

### **Product Data** (`src/data/products.js`)
```javascript
{
  id: 'po-powder-silver',           // Unique identifier
  name: 'PO Powder Silver',          // Display name
  category: 'powder',                // 'powder' | 'deodorant'
  variant: 'Silver',                 // Variant label
  image: heroImage,                  // Image import
  description: '...',                // Product description
  featured: true,                    // Show in featured section?
  recommended: false                 // Show in recommended section?
}
```

### **Benefit Data** (`src/data/benefits.js`)
```javascript
{
  id: 'fresh-all-day',               // Unique ID
  label: 'Fresh All Day',            // Display label
  iconColor: '#E8A0B4',              // Circle background color
  icon: '<svg>...</svg>'             // Inline SVG or
  imageSrc: halalLogoImg             // Image path
}
```

### **Navigation Data** (`src/data/navigation.js`)
```javascript
{
  id: 'home',                        // Unique ID
  label: 'Home',                     // Display text
  path: '/'                          // Route path
}
```

---

## 🚀 Panduan Instalasi & Setup

### **Prerequisites**
- **Node.js** v18+ (gunakan `node --version` untuk check)
- **npm** atau **yarn**
- **Git** (opsional)

### **Step 1: Clone / Download Project**
```bash
# Jika menggunakan git:
git clone <repository-url>
cd mbk-powder

# Atau download ZIP dan extract
```

### **Step 2: Install Dependencies**
```bash
# Menggunakan npm
npm install

# Atau menggunakan yarn
yarn install
```

**Apa yang di-install:**
- React framework & related packages
- React Router untuk routing
- Vite & related build tools
- Linter (oxlint) untuk code quality

### **Step 3: Verifikasi Instalasi**
```bash
# Check terinstall dengan benar
npm list

# Output seperti ini:
# mbk-powder@0.0.0
# ├── react@19.2.8
# ├── react-dom@19.2.8
# ├── react-router-dom@7.18.3
# └── ...
```

---

## 💻 Perintah Development

### **1. Start Development Server**
```bash
npm run dev
```
**Output:**
```
  VITE v8.2.2  ready in 150 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

**Akses Website:**
- Buka browser: `http://localhost:5173/`
- Auto-reload saat file di-edit

### **2. Build untuk Production**
```bash
npm run build
```
**Apa yang terjadi:**
- Mengcompile semua React JSX menjadi JavaScript
- Minify dan optimize semua assets
- Output ke folder `dist/`
- Siap untuk di-deploy

**Hasil Build:**
```
dist/
├── index.html          # Entry point
├── assets/
│   ├── index-[hash].js   # Bundled JavaScript
│   └── index-[hash].css  # Bundled CSS
└── ...
```

### **3. Preview Production Build Locally**
```bash
npm run preview
```
**Gunakan untuk test production build sebelum deploy**

### **4. Lint Code**
```bash
npm run lint
```
**Mengecek code quality issues dengan oxlint**

---

## 🎯 Workflow Development

### **Typical Development Session**

1. **Start server:**
   ```bash
   npm run dev
   ```

2. **Edit files** (components, styles, data)
   - Changes auto-reload di browser
   - No manual refresh needed

3. **Test responsiveness:**
   - Desktop: Normal browser
   - Mobile: Use DevTools (`F12` → Toggle device toolbar)

4. **Build & preview:**
   ```bash
   npm run build
   npm run preview
   ```

5. **Deploy** (setelah verified):
   - Deploy folder `dist/` ke hosting

---

## 🔧 Konfigurasi Penting

### **Vite Configuration** (`vite.config.js`)
```javascript
// Alias configuration
'@': './src'  // Import dari '@/folder' same as './src/folder'
```

**Contoh Import:**
```javascript
// Sebelum (relative path):
import ProductCard from '../../../components/ProductCard/ProductCard'

// Sesudah (dengan alias):
import ProductCard from '@/components/ProductCard/ProductCard'
```

### **CSS Architecture**

**Pendekatan:**
- ✅ Single CSS file per component
- ✅ Centralized design tokens (`variables.css`)
- ✅ Global resets & base styles (`global.css`)
- ✅ BEM naming convention (block__element--modifier)

**Contoh BEM Naming:**
```css
/* Block: navbar */
.navbar { }

/* Element: navbar__logo */
.navbar__logo { }

/* Modifier: navbar--scrolled */
.navbar--scrolled { }
```

---

## 📱 Responsive Breakpoints

Tidak ada breakpoint hard-coded. Menggunakan **fluid/flexible** design:

- **Mobile:** 320px - 640px (hamburger menu, stack layout)
- **Tablet:** 641px - 1024px (adjusted spacing)
- **Desktop:** 1025px+ (full navigation, multi-column)

Implemented melalui:
- Flexible grid (`grid-template-columns: repeat(auto-fit, minmax(...)`)
- CSS media queries untuk adjustments
- Responsive padding/margin menggunakan spacing scale

---

## 🎨 Color Psychology & Application

| Warna | Hex | Psikologi | Aplikasi |
|-------|-----|-----------|----------|
| **Off-white** | #FAF9F6 | Calm, clean, premium | Background utama—tidak harsh |
| **MBK Red** | #C0392B | Energy, action, passion | CTA buttons, primary highlights |
| **Soft Pink** | #F5C6CB | Feminine, gentle | Accent sections, background |
| **Black Text** | #1A1A1A | Authority, readability | Primary headings & body |
| **Grey Muted** | #888888 | Secondary, subtle | Supporting text, meta info |

---

## 🌐 Accessibility Features

✅ **Implemented:**
- `aria-label` pada sections & interactive elements
- `alt` text pada semua images
- Semantic HTML (`<header>`, `<main>`, `<footer>`, `<section>`)
- Focus-visible styling untuk keyboard navigation
- Proper heading hierarchy (h1 → h2 → h3)
- High contrast text (WCAG AA compliant)

**Testing:**
- Gunakan browser DevTools untuk Accessibility audit
- Test keyboard navigation (Tab, Enter, Escape)
- Screen reader testing (optional)

---

## 📊 Performance Optimization

**Diimplementasikan:**
- ✅ Image optimization (`fetchpriority="high"` untuk hero)
- ✅ Code splitting via Vite
- ✅ Lazy component loading dengan React Router
- ✅ CSS custom properties (reduce stylesheet size)
- ✅ Minification & bundling (production build)

**Recommendations:**
- Compress images sebelum add ke `assets/`
- Use WebP format untuk modern browsers
- Monitor bundle size dengan Vite plugin

---

## 🐛 Troubleshooting

### **Port 5173 Already in Use**
```bash
# Kill existing process atau use different port:
npm run dev -- --port 3000
```

### **Module Not Found Error**
- Check import paths (use `@/` alias)
- Verify file names (case-sensitive on Linux/Mac)
- Restart dev server

### **Styles Not Applying**
- Clear browser cache (`Ctrl+Shift+Del`)
- Check CSS specificity
- Verify class names match

### **Images Not Loading**
- Check image path in `assets/images/`
- Use relative imports: `import img from '@/assets/images/...'`
- Verify file extensions match

---

## 📚 Ressources & Documentation

- **React Docs:** https://react.dev
- **React Router:** https://reactrouter.com
- **Vite Docs:** https://vitejs.dev
- **MDN Web Docs:** https://developer.mozilla.org

---

## ✅ Checklist Development

- [ ] Environment setup (Node.js, npm)
- [ ] Dependencies installed (`npm install`)
- [ ] Dev server running (`npm run dev`)
- [ ] Website accessible (`localhost:5173`)
- [ ] Changes hot-reload working
- [ ] Responsive design verified
- [ ] Forms validated
- [ ] All pages accessible
- [ ] Build successful (`npm run build`)
- [ ] Production preview working (`npm run preview`)

---

## 📝 Catatan Pengembangan

**Version History:**
- **v0.0.0** (Current) — Initial setup, core pages & components

**Fitur yang Direncanakan (Future):**
- Product filtering/sorting
- Shopping cart functionality
- User authentication
- Order management
- Customer reviews/ratings
- Newsletter signup
- Multi-language support (i18n)

---

## 👥 Tim Development

**Project:** MBK Powder E-Commerce Website  
**Status:** Active Development  
**Last Updated:** September 17, 2026

---

**Happy Coding! 🚀**

Untuk pertanyaan atau issue, silakan buat issue di repository atau hubungi tim development.
