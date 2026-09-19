/**
 * MBK Powder — Brand Benefits Data
 *
 * Each benefit is represented as an object with a label and
 * an inline SVG icon string. This keeps benefit rendering
 * data-driven without requiring separate icon files.
 */

import halalLogoImg from '@/assets/logo/halal-indonesia.png';

/** @type {Benefit[]} */
export const benefits = [
  {
    id: 'fresh-all-day',
    label: 'Fresh All Day',
    /** SVG: floral / leaf icon representing freshness */
    iconColor: '#E8A0B4',  /* pink/mauve — matches Figma circle background */
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 34 C24 34 14 28 14 20 C14 15.6 18.5 12 24 12 C29.5 12 34 15.6 34 20 C34 28 24 34 24 34Z"
            fill="rgba(255,255,255,0.4)"/>
      <path d="M24 34 C24 34 14 28 14 20 C14 15.6 18.5 12 24 12 C29.5 12 34 15.6 34 20 C34 28 24 34 24 34Z"
            stroke="white" stroke-width="1.5" fill="none"/>
      <line x1="24" y1="22" x2="24" y2="36" stroke="white" stroke-width="1.5"/>
    </svg>`,
  },
  {
    id: 'halal-certified',
    label: 'Halal Certified',
    /** Official Halal Indonesia logo */
    iconColor: '#9B7EC8',  /* purple — matches Figma circle background */
    imageSrc: halalLogoImg,
  },
  {
    id: 'long-lasting',
    label: 'Long Lasting',
    /** SVG: clock / timer icon representing longevity */
    iconColor: '#5BBFB0',  /* turquoise/teal — matches Figma circle background */
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="26" r="16" stroke="white" stroke-width="2"/>
      <path d="M24 18 L24 26 L30 30" stroke="white" stroke-width="2" stroke-linecap="round"/>
      <path d="M20 8 L28 8" stroke="white" stroke-width="2" stroke-linecap="round"/>
      <path d="M24 8 L24 12" stroke="white" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
  },
];

