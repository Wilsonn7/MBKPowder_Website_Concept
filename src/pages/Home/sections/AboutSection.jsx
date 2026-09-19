import mbkLogo from '@/assets/logo/Logo MBK.png';
import './AboutSection.css';

/**
 * AboutSection
 *
 * Vision & Mission section dari About page.
 * Integrated sebagai part dari single-page landing.
 */
export default function AboutSection() {
  return (
    <section className="about section" aria-labelledby="about-heading">
      <div className="container">
        {/* ── Section heading ── */}
        <div className="about__header">
          <h2 id="about-heading" className="about__heading">
            We Empower Everyday Confidence<br />
            Through Freshness and Care.
          </h2>
        </div>

        {/* ── Vision & Mission ── */}
        <section className="about__vision" aria-labelledby="vision-heading">
          <div className="about__vision-layout">
            <div className="about__vision-image" aria-label="MBK brand logo panel">
              <div className="about__vision-image-placeholder">
                <img src={mbkLogo} alt="MBK Powder logo" className="about__vision-logo" />
              </div>
            </div>

            {/* Text content (right) */}
            <div className="about__vision-content">
              <h3 id="vision-heading" className="about__vision-heading">
                OUR VISION &amp; MISSION
              </h3>
              <p className="about__vision-text">
                MBK is committed to becoming a trusted personal care brand that empowers people to
                feel fresh, comfortable, and confident every day. Building on years of experience in
                Indonesia, we create practical and reliable personal care products that help people
                stay fresh throughout their daily activities. Through continuous innovation, quality,
                and a deep understanding of everyday needs, MBK strives to make personal care more
                accessible and meaningful, helping everyone step forward with confidence.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
