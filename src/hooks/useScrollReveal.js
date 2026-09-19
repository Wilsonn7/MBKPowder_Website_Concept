import { useEffect, useRef } from 'react';

/**
 * useScrollReveal
 *
 * Custom hook untuk trigger fade-in + slide-up animation
 * saat element masuk viewport menggunakan IntersectionObserver.
 *
 * Penggunaan:
 *   const ref = useScrollReveal();
 *   <div ref={ref} className="some-element">Content</div>
 *
 * Pastikan element punya class sebagai target untuk animation:
 * - Trigger class: "reveal"
 * - Active class: "reveal--visible" (saat masuk viewport)
 *
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Kapan trigger (default 0.1)
 * @param {string} options.rootMargin - Margin untuk viewport (default "0px")
 * @returns {React.RefObject} Ref untuk attach ke DOM element
 */
export function useScrollReveal(options = {}) {
  const elementRef = useRef(null);
  const {
    threshold = 0.1,
    rootMargin = '0px',
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Tambah class ketika element masuk viewport
          entry.target.classList.add('reveal--visible');
          // Optional: stop observing setelah first trigger
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold,
      rootMargin,
    });

    const element = elementRef.current;

    if (element && element.classList.contains('reveal')) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin]);

  return elementRef;
}

export default useScrollReveal;
