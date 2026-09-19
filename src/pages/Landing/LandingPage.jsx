import HeroSection      from '@/pages/Home/sections/HeroSection';
import BrandStatement   from '@/pages/Home/sections/BrandStatement';
import FeaturedProducts from '@/pages/Home/sections/FeaturedProducts';
import BrandStory       from '@/pages/Home/sections/BrandStory';
import BenefitsSection  from '@/pages/Home/sections/BenefitsSection';
import AboutSection     from '@/pages/Home/sections/AboutSection';
import ProductsSection  from '@/pages/Home/sections/ProductsSection';
import ContactSection   from '@/pages/Home/sections/ContactSection';

/**
 * LandingPage
 *
 * Single-page scrolling website combining:
 * - Home (#home)
 * - About (#about)
 * - Products (#products)
 * - Contact (#contact)
 *
 * All sections in one continuous scroll experience.
 */
export default function LandingPage() {
  return (
    <main id="main-content">
      {/* #home — Hero & Brand Introduction */}
      <div id="home">
        <HeroSection />
        <BrandStatement />
        <FeaturedProducts />
      </div>

      {/* #about — Brand Story & Vision */}
      <div id="about">
        <AboutSection />
        <BrandStory />
        <BenefitsSection />
        <div className="landing-page__soft-transition" aria-hidden="true">
          <span className="landing-page__soft-transition-orb landing-page__soft-transition-orb--1" />
          <span className="landing-page__soft-transition-orb landing-page__soft-transition-orb--2" />
        </div>
      </div>

      {/* #products — Full Product Catalog */}
      <div id="products">
        <ProductsSection />
      </div>

      {/* #contact — Contact Form & Info */}
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
