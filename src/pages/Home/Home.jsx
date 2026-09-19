import HeroSection         from './sections/HeroSection';
import BrandStatement      from './sections/BrandStatement';
import FeaturedProducts    from './sections/FeaturedProducts';
import BrandStory          from './sections/BrandStory';
import BenefitsSection     from './sections/BenefitsSection';
import RecommendedProducts from './sections/RecommendedProducts';

/**
 * Home page
 *
 * Composes all Landing Page sections in order.
 * Each section is a focused, independent component.
 * Home.jsx acts purely as a page coordinator.
 */
export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <BrandStatement />
      <FeaturedProducts />
      <BrandStory />
      <BenefitsSection />
      <RecommendedProducts />
    </main>
  );
}
