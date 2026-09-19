import { Link } from 'react-router-dom';
import mbkLogo from '@/assets/logo/Logo MBK.png';
import './Footer.css';

/**
 * Footer
 *
 * Pink background footer reproducing the Figma 4-column layout:
 * Logo | Brand Description | Contact | Social Media
 *
 * Stacks vertically on mobile.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        {/* ── Column 1: Brand identity ── */}
        <div className="footer__brand">
          <FooterLogo />
          <p className="footer__tagline">
            <em>Your everyday<br />beauty essential.</em>
          </p>
          <p className="footer__sub-tagline">Smooth finish for everyday confidence.</p>
        </div>

        {/* ── Column 2: Brand name + description ── */}
        <div className="footer__about">
          <h2 className="footer__brand-name">MBK Powder</h2>
          <p className="footer__description">
            MBK combines beauty and freshness in one complete personal care collection.
            Your everyday essential for lasting confidence.
          </p>
        </div>

        {/* ── Column 3: Contact information ── */}
        <address className="footer__contact">
          <h3 className="footer__column-heading">Hubungi Kami</h3>
          <ul className="footer__contact-list">
            <li>
              <a href="tel:+6208001000000" className="footer__contact-link">
                <PhoneIcon /> 08XX XXX XXXX
              </a>
            </li>
            <li>
              <a href="https://wa.me/6208001000000" className="footer__contact-link" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> +62 8XX XXX XXXX
              </a>
            </li>
            <li>
              <a href="mailto:info@mbkpowder.com" className="footer__contact-link">
                <EmailIcon /> info@mbkpowder.com
              </a>
            </li>
          </ul>
        </address>

        {/* ── Column 4: Social media ── */}
        <div className="footer__social">
          <h3 className="footer__column-heading">Media Sosial</h3>
          <ul className="footer__social-list">
            <li>
              <a href="https://instagram.com" className="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram MBK Powder">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="https://facebook.com" className="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook MBK Powder">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" className="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X MBK Powder">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href="https://tiktok.com" className="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="TikTok MBK Powder">
                <TikTokIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          © {currentYear} MBK Powder. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ── Sub-components for icons ── */

function FooterLogo() {
  return (
    <Link to="/" className="footer__logo-link" aria-label="MBK Powder homepage">
      <img src={mbkLogo} alt="MBK Powder Logo" className="footer__logo-img" />
    </Link>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.91a8.17 8.17 0 004.77 1.52V7a4.85 4.85 0 01-1-.31z"/>
    </svg>
  );
}
