import './About.css';

/**
 * About page
 *
 * Main heading + Vision & Mission section.
 * Layout: full-width heading, then image-left / text-right split.
 */
export default function About() {
  return (
    <main id="main-content" className="about">
      {/* ── Page heading ── */}
      <section className="about__hero section">
        <div className="container">
          <h1 className="about__heading">
            We Empower Everyday Confidence<br />
            Through Freshness and Care.
          </h1>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="about__vision section" aria-labelledby="vision-heading">
        <div className="container">
          <div className="about__vision-layout">
            {/* Image placeholder (left) */}
            <div className="about__vision-image" aria-hidden="true">
              <div className="about__vision-image-placeholder" />
            </div>

            {/* Text content (right) */}
            <div className="about__vision-content">
              <h2 id="vision-heading" className="about__vision-heading">
                OUR VISION &amp; MISSION
              </h2>
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
        </div>
      </section>
    </main>
  );
}
