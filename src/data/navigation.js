/**
 * MBK Powder — Navigation Data
 *
 * Defines navigation link groups for the split-layout Navbar.
 * Links now use anchor (#) navigation for single-page scrolling.
 *
 * Adding or renaming nav items only requires editing this file.
 */

/** @type {{ id: string, label: string, path: string }[]} */
export const navLinksLeft = [
  { id: 'home',     label: 'Home',     path: '#home' },
  { id: 'about',    label: 'About Us', path: '#about' },
];

/** @type {{ id: string, label: string, path: string }[]} */
export const navLinksRight = [
  { id: 'products', label: 'Product',  path: '#products' },
  { id: 'contact',  label: 'Contact',  path: '#contact' },
];

/**
 * All nav links flattened — useful for mobile menus and
 * aria-navigation landmark rendering.
 */
export const allNavLinks = [...navLinksLeft, ...navLinksRight];
