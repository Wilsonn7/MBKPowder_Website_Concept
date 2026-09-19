import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ProductGrid  from '@/components/ProductGrid/ProductGrid';
import { products } from '@/data/products';
import './Products.css';

/**
 * Products page
 *
 * Lists all products with optional category filtering.
 * Products come from the data layer — no hard-coded markup.
 */
export default function Products() {
  const powderProducts = products.filter((p) => p.category === 'powder');
  const deodorantProducts = products.filter((p) => p.category === 'deodorant');

  return (
    <main id="main-content" className="products-page">
      <div className="container">
        {/* ── Page heading ── */}
        <div className="products-page__header">
          <h1 className="products-page__heading">Our Products</h1>
          <p className="products-page__sub">
            Koleksi lengkap perawatan diri MBK — halal, tahan lama, dan segar sepanjang hari.
          </p>
        </div>

        {/* ── Powder category ── */}
        <section aria-labelledby="powder-heading" className="products-page__category">
          <h2 id="powder-heading" className="products-page__category-heading">P.O. Powder</h2>
          <ProductGrid products={powderProducts} columns={4} cardSize="default" />
        </section>

        {/* ── Deodorant category ── */}
        <section aria-labelledby="deodorant-heading" className="products-page__category">
          <h2 id="deodorant-heading" className="products-page__category-heading">Deodorant Roll On</h2>
          <ProductGrid products={deodorantProducts} columns={4} cardSize="default" />
        </section>
      </div>
    </main>
  );
}
