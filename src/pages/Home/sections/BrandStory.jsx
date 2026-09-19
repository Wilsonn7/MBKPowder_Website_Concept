import { useRef, useState } from 'react';
import img1 from '@/assets/images/image 1.png';
import img2 from '@/assets/images/image 2.png';
import img3 from '@/assets/images/image 3.png';
import img4 from '@/assets/images/image 4.png';
import img5 from '@/assets/images/image 5.png';
import './BrandStory.css';

/**
 * Collage image data — keeps image array data-driven
 * rather than repeating img tags.
 */
const collageImages = [
  { src: img1, alt: 'Pria aktif menggunakan MBK Deodorant di luar ruangan.' },
  { src: img2, alt: 'Pria menampilkan produk MBK di taman kota.' },
  { src: img3, alt: 'Wanita berhijab memegang produk MBK Deodorant Roll On Pink.' },
  { src: img4, alt: 'Wanita membuka paket produk MBK Powder.' },
  { src: img5, alt: 'Wanita dengan produk MBK Powder di samping handuk.' },
];

/**
 * BrandStory
 *
 * Photo collage section followed by brand description text.
 * The collage uses a CSS grid to create the staggered card layout
 * from the Figma design.
 */
export default function BrandStory() {
  const collageRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);
  const dragMoved = useRef(false);

  const getClientX = (event) => {
    if (event.touches && event.touches[0]) return event.touches[0].clientX;
    if (event.changedTouches && event.changedTouches[0]) return event.changedTouches[0].clientX;
    return event.clientX ?? event.pageX ?? 0;
  };

  const handleDragStart = (event) => {
    const container = collageRef.current;
    if (!container) return;
    if (event.type === 'mousedown' && event.button !== 0) return;

    event.preventDefault();
    dragMoved.current = false;
    dragStartX.current = getClientX(event);
    dragStartScrollLeft.current = container.scrollLeft;
    setDragging(true);
  };

  const handleDragMove = (event) => {
    const container = collageRef.current;
    if (!container || !dragging) return;

    const delta = getClientX(event) - dragStartX.current;
    if (Math.abs(delta) > 5) dragMoved.current = true;
    container.scrollLeft = dragStartScrollLeft.current - delta;
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleCardClick = (event) => {
    if (dragMoved.current) {
      event.preventDefault();
      event.stopPropagation();
      dragMoved.current = false;
    }
  };

  return (
    <section className="brand-story section" aria-labelledby="brand-story-heading">
      <div className="container">
        {/* ── Photo collage ── */}
        <div
          ref={collageRef}
          className={`brand-story__collage${dragging ? ' brand-story__collage--dragging' : ''}`}
          role="img"
          aria-label="Brand lifestyle collage"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          onTouchCancel={handleDragEnd}
        >
          {collageImages.map((image, index) => (
            <div
              key={image.alt}
              className={`brand-story__collage-item brand-story__collage-item--${index + 1}`}
              onClick={handleCardClick}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="brand-story__collage-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* ── Brand description text ── */}
        <div className="brand-story__text">
          <h2 id="brand-story-heading" className="sr-only">Brand Story</h2>
          <p className="brand-story__description">
            MBK combines beauty and freshness in one complete personal care collection.
            Our Powder provides a silky-smooth finish with long-lasting control, while our Roll On
            offers reliable odor protection with antibacterial technology. Designed for everyday use,
            MBK products help you look confident and feel fresh from morning to night.
          </p>
        </div>
      </div>
    </section>
  );
}
