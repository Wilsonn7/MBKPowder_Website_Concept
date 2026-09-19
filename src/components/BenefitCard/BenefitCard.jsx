import './BenefitCard.css';

/**
 * BenefitCard
 *
 * Displays a single brand benefit with an icon and label.
 * Used in BenefitsSection on the Landing Page.
 *
 * @param {Object} props
 * @param {string} props.label     - Benefit label text
 * @param {string} props.icon      - SVG string for the icon
 * @param {string} [props.iconColor] - Background color for the icon circle
 */
export default function BenefitCard({ label, icon, imageSrc, iconColor }) {
  return (
    <div className="benefit-card">
      <div
        className="benefit-card__icon"
        style={iconColor ? { backgroundColor: iconColor } : undefined}
      >
        {imageSrc ? (
          <img src={imageSrc} alt={label} className="benefit-card__img" />
        ) : (
          <div
            dangerouslySetInnerHTML={{ __html: icon }}
            aria-hidden="true"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}
          />
        )}
      </div>
      <p className="benefit-card__label">{label}</p>
    </div>
  );
}

