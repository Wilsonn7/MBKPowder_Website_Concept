import { Link } from 'react-router-dom';
import './ProductCard.css';

/**
 * ProductCard
 *
 * Reusable card for displaying a single product.
 * Used in FeaturedProducts, RecommendedProducts, and Products page.
 *
 * @param {Object}  props
 * @param {string}  props.id          - Product slug (used for link)
 * @param {string}  props.name        - Product display name
 * @param {string}  [props.variant]   - Variant label (e.g. "Purple — Women")
 * @param {string}  props.image       - Image src
 * @param {string}  props.description - Short description
 * @param {'default'|'featured'} [props.variant_size='default'] - Card size variant
 */
export default function ProductCard({
  id,
  name,
  variant,
  image,
  description,
  cardSize = 'default',
}) {
  return (
    <article className={`product-card product-card--${cardSize}`}>
      <Link to={`/products`} className="product-card__image-link" aria-label={`View ${name}${variant ? ` – ${variant}` : ''}`}>
        <div className="product-card__image-wrapper">
          <img
            src={image}
            alt={`${name}${variant ? ` – ${variant}` : ''}`}
            className="product-card__image"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="product-card__body">
        <h3 className="product-card__name">{name}</h3>
        {variant && (
          <p className="product-card__variant">{variant}</p>
        )}
      </div>
    </article>
  );
}
