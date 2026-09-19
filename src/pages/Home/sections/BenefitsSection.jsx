import BenefitCard from '@/components/BenefitCard/BenefitCard';
import { benefits } from '@/data/benefits';
import './BenefitsSection.css';

/**
 * BenefitsSection
 *
 * Pink-background section displaying three brand benefits.
 * Renders data-driven BenefitCard components.
 */
export default function BenefitsSection() {
  return (
    <section className="benefits section section--pink" aria-labelledby="benefits-heading">
      <div className="container">
        <h2 id="benefits-heading" className="sr-only">Brand Benefits</h2>
        <ul className="benefits__grid" role="list">
          {benefits.map((benefit) => (
            <li key={benefit.id}>
              <BenefitCard
                label={benefit.label}
                icon={benefit.icon}
                imageSrc={benefit.imageSrc}
                iconColor={benefit.iconColor}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

