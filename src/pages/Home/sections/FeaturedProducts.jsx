import ProductGrid from '@/components/ProductGrid/ProductGrid';
import { featuredProducts } from '@/data/products';
import './FeaturedProducts.css';

/**
 * FeaturedProducts
 *
 * Displays the two featured powder products in a 2-column grid.
 * Header row contains "Featured" label and "View All Product" link.
 */
export default function FeaturedProducts() {
  return (
    <section className="featured-products section" aria-labelledby="featured-heading">
      <div className="container">
        <div className="featured-products__header">
          <h2 id="featured-heading" className="featured-products__title">Featured</h2>
          <a href="#products" className="featured-products__view-all">
            View All Product →
          </a>
        </div>

        <ProductGrid
          products={featuredProducts}
          columns={2}
          cardSize="featured"
        />
      </div>
    </section>
  );
}
