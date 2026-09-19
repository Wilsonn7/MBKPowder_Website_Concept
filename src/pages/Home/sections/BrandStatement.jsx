import './BrandStatement.css';

/**
 * BrandStatement
 *
 * Editorial section displaying the brand tagline.
 * "TERPUJI. KARENA." in smaller weight, "BUKTI" in large bold serif.
 * Matches the Figma centered typographic block.
 */
export default function BrandStatement() {
  return (
    <section className="brand-statement section" aria-label="Brand statement">
      <div className="container">
        <div className="brand-statement__content">
          <p className="brand-statement__eyebrow">TERPUJI. KARENA.</p>
          <p className="brand-statement__display">BUKTI</p>
        </div>
      </div>
    </section>
  );
}
