import { useEffect, useState } from 'react';

/**
 * useScrollSpy
 *
 * Custom hook untuk detect mana section yang sedang terlihat di viewport.
 * Trigger class "active" pada navigation item yang sesuai.
 *
 * Penggunaan:
 *   const activeSection = useScrollSpy(['home', 'about', 'products', 'contact']);
 *   // activeSection = 'about' (section mana yang visible)
 *
 * @param {string[]} sectionIds - Array of section id yang di-track
 * @param {number} offset - Offset dari top (misalnya tinggi navbar fixed)
 * @returns {string} ID section yang sedang aktif
 */
export function useScrollSpy(sectionIds = [], offset = 80) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const handleScroll = () => {
      // Get current scroll position + offset
      const scroll = window.scrollY + offset;

      // Find mana section yang paling dekat dengan scroll position
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scroll >= offsetTop) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}

export default useScrollSpy;
