import heroImage from '@/assets/images/Hero Section.png';
import './HeroSection.css';

/**
 * HeroSection
 *
 * Full-width lifestyle hero image with overlay copy.
 * Text is overlaid on the left side of the image, matching the Figma.
 * The image itself already contains the text in Indonesian,
 * but we render it via HTML for accessibility and SEO.
 */
export default function HeroSection() {
  return (
    <section className="hero" aria-label="Hero — MBK Powder">
      <div className="hero__image-wrapper">
        <img
          src={heroImage}
          alt="P.O. Powder M.B.K. products arranged on a wooden console table with house plants and personal items."
          className="hero__image"
          fetchpriority="high"
        />
        {/* Accessible text overlay — visually matches Figma positioning */}
        <div className="hero__overlay">
          <div className="hero__copy">
            <h1 className="hero__heading">
              Sebelum Keluar, Ada Yang<br />
              Gak Boleh Kelewat
            </h1>
            <p className="hero__subheading">
              Biar Tampil <span className="hero__subheading-accent">PEDE Seharian,</span><br />
              Gak Khawatir Lagi Bau Badan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
