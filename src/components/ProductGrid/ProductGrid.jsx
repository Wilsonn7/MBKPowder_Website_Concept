import ProductCard from '@/components/ProductCard/ProductCard';
import './ProductGrid.css';

/**
 * ProductGrid
 *
 * Renders a responsive grid of ProductCard components.
 * Accepts a columns prop to control grid width at desktop.
 * Data-driven: receives an array of product objects.
 *
 * @param {Object}   props
 * @param {Product[]} props.products      - Array of product data objects
 * @param {2|4}      [props.columns=4]   - Number of columns at desktop
 * @param {'default'|'featured'} [props.cardSize='default'] - Forwarded to ProductCard
 */
export default function ProductGrid({ products, columns = 4, cardSize = 'default' }) {
  return (
    <ul
      className={`product-grid product-grid--cols-${columns}`}
      role="list"
      aria-label="Product grid"
    >
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard
            id={product.id}
            name={product.name}
            variant={product.variant}
            image={product.image}
            description={product.description}
            cardSize={cardSize}
          />
        </li>
      ))}
    </ul>
  );
}
