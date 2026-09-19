import { useEffect, useState } from 'react';
import './IntroSplash.css';
import mbkLogo from '@/assets/logo/Logo MBK.png';
import productImage from '@/assets/images/MBK Putih.png';

const STORAGE_KEY = 'mbk_intro_shown';

export default function IntroSplash() {
  const [stage, setStage] = useState('logo');

  useEffect(() => {
    const hasSeenIntro = () => {
      try {
        return sessionStorage.getItem(STORAGE_KEY) === 'true';
      } catch {
        return false;
      }
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasSeenIntro() || prefersReducedMotion) {
      try {
        sessionStorage.setItem(STORAGE_KEY, 'true');
      } catch {
        // no-op
      }
      setStage('done');
      return undefined;
    }

    const logoTimer = setTimeout(() => setStage('product'), 700);
    const exitTimer = setTimeout(() => setStage('exiting'), 1650);
    const doneTimer = setTimeout(() => {
      try {
        sessionStorage.setItem(STORAGE_KEY, 'true');
      } catch {
        // no-op
      }
      setStage('done');
    }, 2200);

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      clearTimeout(logoTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (stage === 'done') {
    return null;
  }

  return (
    <div className={`intro-splash intro-splash--${stage}`} aria-live="polite" aria-label="MBK intro splash screen">
      <div className="intro-splash__inner">
        <div className="intro-splash__logo-wrap">
          <img src={mbkLogo} alt="MBK Powder logo" className="intro-splash__logo" />
          <span className="intro-splash__accent" aria-hidden="true" />
        </div>

        <div className="intro-splash__product-wrap">
          <img src={productImage} alt="MBK Powder product" className="intro-splash__product" />
        </div>
      </div>
    </div>
  );
}
