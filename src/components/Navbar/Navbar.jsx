import { useState, useEffect, useCallback } from 'react';
import { navLinksLeft, navLinksRight } from '@/data/navigation';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import './Navbar.css';

import mbkLogo from '@/assets/logo/Logo MBK.png';

/**
 * Navbar
 *
 * Fixed top navigation with centered MBK logo.
 * Desktop: left links | logo | right links
 * Mobile: hamburger menu with full-screen overlay
 * 
 * Updated: Now supports anchor link scrolling + ScrollSpy
 * for single-page navigation.
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen]     = useState(false);
  const [isScrolled, setIsScrolled]     = useState(false);
  
  // Track active section based on scroll position
  const activeSection = useScrollSpy(['home', 'about', 'products', 'contact'], 100);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const getLinkClass = ({ isActive }) => {
    // For anchor links, check if path matches activeSection
    return `navbar__link${isActive ? ' navbar__link--active' : ''}`;
  };

  const getAnchorLinkClass = (linkPath) => {
    // Extract section id from anchor link (e.g., '#about' -> 'about')
    const sectionId = linkPath.replace('#', '');
    const isActive = sectionId === activeSection;
    return `navbar__link${isActive ? ' navbar__link--active' : ''}`;
  };

  return (
    <header className={`navbar${isScrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__inner container">
        {/* ── Left navigation group ── */}
        <nav className="navbar__group navbar__group--left" aria-label="Primary navigation left">
          <ul className="navbar__list">
            {navLinksLeft.map((link) => (
              <li key={link.id}>
                <a 
                  href={link.path} 
                  className={getAnchorLinkClass(link.path)}
                  onClick={() => closeMenu()}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Centered logo ── */}
        <a href="#home" className="navbar__logo" aria-label="MBK Powder — Go to homepage">
          <img src={mbkLogo} alt="MBK Powder Logo" className="navbar__logo-img" />
        </a>

        {/* ── Right navigation group ── */}
        <nav className="navbar__group navbar__group--right" aria-label="Primary navigation right">
          <ul className="navbar__list">
            {navLinksRight.map((link) => (
              <li key={link.id}>
                <a 
                  href={link.path} 
                  className={getAnchorLinkClass(link.path)}
                  onClick={() => closeMenu()}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Mobile hamburger button ── */}
        <button
          className={`navbar__hamburger${isMenuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />
        </button>
      </div>

      {/* ── Mobile navigation overlay ── */}
      <div
        id="mobile-menu"
        className={`navbar__mobile-overlay${isMenuOpen ? ' navbar__mobile-overlay--open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="navbar__mobile-list">
            {[...navLinksLeft, ...navLinksRight].map((link) => (
              <li key={link.id}>
                <a
                  href={link.path}
                  className={getAnchorLinkClass(link.path)}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
