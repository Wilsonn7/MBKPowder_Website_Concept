import ProductGrid from '@/components/ProductGrid/ProductGrid';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { recommendedProducts } from '@/data/products';
import './RecommendedProducts.css';

/**
 * RecommendedProducts
 *
 * "Others you might like" section on the Landing Page.
 * 4-column grid of recommended deodorant products.
 */
export default function RecommendedProducts() {
  return (
    <section className="recommended-products section" aria-labelledby="recommended-heading">
      <div className="container">
        <SectionTitle
          title="Others you might like"
          align="center"
        />
        <ProductGrid
          products={recommendedProducts}
          columns={4}
          cardSize="default"
        />
      </div>
    </section>
  );
}
