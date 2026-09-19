import { Routes, Route } from 'react-router-dom';
import LandingPage from '@/pages/Landing/LandingPage';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

/**
 * AppRouter
 *
 * Single-page landing website with anchor navigation.
 * All sections (#home, #about, #products, #contact) are on one page.
 */
export default function AppRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Optional: catch-all route for deep linking to anchors */}
        <Route path="/*" element={<LandingPage />} />
      </Routes>
      <Footer />
    </>
  );
}
