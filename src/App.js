import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';

// Components
import Curtain from './components/Curtain';
import Navbar from './components/Navbar';
import Header from './components/Header';
import VideoHero from './components/VideoHero';
import Footer from './components/Footer';

// Pages
import Gallery from './pages/Gallery';
import Rent from './pages/Rent';
import Package from './pages/Package';
import Promo from './pages/Promo';

// Utils
import ScrollToTop from './ScrollToTop';

/* =========================
   HOME PAGE COMPONENT
========================= */
const Home = () => {
  return (
    <>
      <Curtain />
      <Navbar />
      <Header />
      <VideoHero />
      <Footer />
    </>
  );
};

/* =========================
   APP ROUTER LOGIC
========================= */
const AppRoutes = () => {
  const location = useLocation();

  // 🔥 Reload hanya sekali saat pertama masuk Gallery
  useEffect(() => {
    if (location.pathname === '/gallery') {
      if (!sessionStorage.getItem('reloadGalleryOnce')) {
        sessionStorage.setItem('reloadGalleryOnce', 'true');
        window.location.reload();
      }
    } else {
      sessionStorage.removeItem('reloadGalleryOnce');
    }
  }, [location.pathname]);

  return (
    <>
      {/* AUTO SCROLL KE ATAS SETIAP GANTI PAGE */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/package" element={<Package />} />
        <Route path="/promo" element={<Promo />} />
      </Routes>
    </>
  );
};

/* =========================
   WRAPPER
========================= */
const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
