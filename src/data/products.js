/**
 * MBK Powder — Product Data
 *
 * Single source of truth for all product information.
 * Add new products here without touching any component files.
 *
 * Schema:
 *   id          {string}  — unique slug identifier
 *   name        {string}  — display name
 *   category    {string}  — 'powder' | 'deodorant'
 *   variant     {string}  — specific variant label (optional)
 *   image       {string}  — path relative to src/assets/images/
 *   description {string}  — short product description
 *   featured    {boolean} — shown in Featured Products section
 *   recommended {boolean} — shown in Recommended Products section
 */

import heroPowderSilverImg from '@/assets/images/MBK Silver.png';
import heroPowderPutihImg  from '@/assets/images/MBK Putih.png';
import deodorantPurpleImg  from '@/assets/images/image 10.png';
import deodorantPinkImg    from '@/assets/images/image 11.png';
import deodorantBlackImg   from '@/assets/images/image 12.png';
import deodorantBlueImg    from '@/assets/images/image 13.png';

/** @type {Product[]} */
export const products = [
  {
    id: 'po-powder-silver',
    name: 'PO Powder Silver',
    category: 'powder',
    variant: 'Silver',
    image: heroPowderSilverImg,
    description:
      'Bedak tabur dengan kandungan antibakteri yang memberikan perlindungan segar sepanjang hari. Formula lembut untuk kulit sensitif.',
    featured: true,
    recommended: false,
  },
  {
    id: 'po-powder-putih',
    name: 'PO Powder Putih',
    category: 'powder',
    variant: 'Putih',
    image: heroPowderPutihImg,
    description:
      'Bedak tabur klasik MBK dengan aroma segar dan formula halal bersertifikat. Sempurna untuk penggunaan sehari-hari.',
    featured: true,
    recommended: false,
  },
  {
    id: 'deodorant-roll-on-purple',
    name: 'MBK Deodorant Roll On',
    category: 'deodorant',
    variant: 'Purple — Women',
    image: deodorantPurpleImg,
    description:
      'Roll-on deodorant khusus wanita dengan aroma bunga yang lembut. Lindungi dari bau badan hingga 48 jam.',
    featured: false,
    recommended: true,
  },
  {
    id: 'deodorant-roll-on-pink',
    name: 'MBK Deodorant Roll On',
    category: 'deodorant',
    variant: 'On Pink — Women',
    image: deodorantPinkImg,
    description:
      'Deodorant roll-on pink dengan formula antiperspirant ringan, cocok untuk kulit sensitif wanita.',
    featured: false,
    recommended: true,
  },
  {
    id: 'deodorant-roll-on-black',
    name: 'MBK Deodorant Roll On',
    category: 'deodorant',
    variant: 'On Black — Men',
    image: deodorantBlackImg,
    description:
      'Deodorant pria dengan formula MEN Body Action. Antiperspirant dan antioksidan untuk perlindungan aktif.',
    featured: false,
    recommended: true,
  },
  {
    id: 'deodorant-roll-on-blue',
    name: 'MBK Deodorant Roll On',
    category: 'deodorant',
    variant: 'On Blue — Men',
    image: deodorantBlueImg,
    description:
      'Deodorant pria edisi biru. Formula MEN Body Action untuk aktivitas penuh semangat tanpa khawatir bau badan.',
    featured: false,
    recommended: true,
  },
];

/** Convenience selector — products flagged as featured */
export const featuredProducts = products.filter((p) => p.featured);

/** Convenience selector — products flagged as recommended */
export const recommendedProducts = products.filter((p) => p.recommended);
