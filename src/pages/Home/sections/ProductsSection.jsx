import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ProductGrid  from '@/components/ProductGrid/ProductGrid';
import { products } from '@/data/products';
import './ProductsSection.css';

/**
 * ProductsSection
 *
 * Full product catalog with category filtering.
 * Integrated as part of single-page landing.
 */
export default function ProductsSection() {
  const powderProducts = products.filter((p) => p.category === 'powder');
  const deodorantProducts = products.filter((p) => p.category === 'deodorant');

  return (
    <section className="products-section section" aria-labelledby="products-heading">
      <div className="container">
        {/* ── Section heading ── */}
        <div className="products-section__header">
          <h2 id="products-heading" className="products-section__heading">Our Products</h2>
          <p className="products-section__sub">
            Koleksi lengkap perawatan diri MBK — halal, tahan lama, dan segar sepanjang hari.
          </p>
        </div>

        {/* ── Powder category ── */}
        <section aria-labelledby="powder-heading" className="products-section__category">
          <h3 id="powder-heading" className="products-section__category-heading">P.O. Powder</h3>
          <ProductGrid products={powderProducts} columns={4} cardSize="default" />
        </section>

        {/* ── Deodorant category ── */}
        <section aria-labelledby="deodorant-heading" className="products-section__category">
          <h3 id="deodorant-heading" className="products-section__category-heading">Deodorant Roll On</h3>
          <ProductGrid products={deodorantProducts} columns={4} cardSize="default" />
        </section>
      </div>
    </section>
  );
}
