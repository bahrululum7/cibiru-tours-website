import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuColorChanged, setMenuColorChanged] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const navigate = useNavigate();

  const menuList = [
    { label: 'Promo', img: '/img/promoMenu.jpg', link: '/promo' },
    { label: 'Rent', img: '/img/rentMenu.jpg', link: '/rent' },
    { label: 'Package', img: '/img/packageMenu.jpg', link: '/package' },
    { label: 'Gallery', img: '/img/galleryMenu.jpg', link: '/gallery' },
    { label: 'Contact', img: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7', link: '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const s = window.scrollY > 85;
      setScrolled(s);
      if (!s) {
        setMenuColorChanged(false);
        setNavbarVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const t = scrolled ? setTimeout(() => setMenuColorChanged(true), 500) : null;
    return () => clearTimeout(t);
  }, [scrolled]);

  useEffect(() => {
    const t = menuColorChanged ? setTimeout(() => setNavbarVisible(true), 100) : null;
    return () => clearTimeout(t);
  }, [menuColorChanged]);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-40 px-4 sm:px-6 py-3 flex items-center">
        <div className={`absolute inset-0 transition-all duration-500 ease-out ${navbarVisible ? 'bg-[#fbf7f3ff] outline outline-blue-950/25 shadow-sky-950' : 'bg-transparent'}`} />

        <div className="relative z-10 flex items-center w-full">
          {/* MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center font-[Courier_New] font-bold text-sm transition-all duration-500 ease-out ml-2 sm:ml-[30px]"
            style={{
              transform: scrolled ? 'translateY(0)' : 'translateY(24px)',
              color: menuColorChanged ? '#193741' : 'white',
            }}
          >
            <div className="flex flex-col mr-3 gap-[6px]">
              <span className="w-5 h-0.5 bg-current"></span>
              <span className="w-5 h-0.5 bg-current"></span>
              <span className="w-5 h-0.5 bg-current"></span>
            </div>
            MENU
          </button>

          {/* LOGO */}
          <div className="flex-1 flex justify-center mr-0 sm:mr-[105px] hover:scale-90">
            <button
              onClick={() => {
                window.location.href = '/';
              }}
              className="focus:outline-none"
            >
              <img src="/img/cLogo.png" alt="Logo" className={`h-7 sm:h-8 transition-all duration-500 ${navbarVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* TOP CENTER BOX */}
      <div
        className={`
          fixed left-1/2 top-0
          -translate-x-1/2
          w-[200px] sm:w-[240px]
          h-[100px] sm:h-[120px]
          bg-[#193741]
          flex justify-center items-center
          shadow-[0_6px_20px_rgba(0,0,0,0.2)]
          transition-all duration-700 ease-out
          z-[10000]
          ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[120%] pointer-events-none'}
        `}
      >
        <button
          onClick={() => {
            setMenuOpen(false);
            window.location.href = '/';
          }}
          className="focus:outline-none"
        >
          <img src="/img/logofix.png" alt="logo tengah" className="max-w-[90%] max-h-[90%] object-contain transition-transform duration-300 hover:scale-90" />
        </button>
      </div>

      {/* OVERLAY */}
      <div onClick={() => setMenuOpen(false)} className={`fixed inset-0 bg-black/40 z-[9998] transition-opacity ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} />

      {/* MENU CURTAIN */}
      <section className={`fixed top-0 left-0 w-full h-screen bg-[#fbf3e7] z-[9999] transition-transform duration-700 ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <button onClick={() => setMenuOpen(false)} className="absolute top-6 left-6 text-[#193741] text-xl font-bold px-4 py-1 transition-opacity duration-500" style={{ opacity: menuOpen ? 1 : 0 }}>
          ✕ CLOSE
        </button>

        <div className="h-full grid grid-cols-1 md:grid-cols-2">
          {/* LEFT MENU */}
          <div className="flex flex-col justify-center px-6 sm:px-10">
            {menuList.map((item, i) => (
              <button
                key={i}
                className="self-start inline-block text-3xl sm:text-5xl font-bold text-[#193741] mb-4 transition-all duration-300 hover:opacity-60"
                onMouseEnter={() => setActiveImage(item.img)}
                onMouseLeave={() => setActiveImage(null)}
                onClick={() => {
                  if (item.link) navigate(item.link);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:flex w-full h-full justify-center items-center overflow-hidden">
            <img src={activeImage || '/img/promoMenu.jpg'} className="w-full h-full object-cover transition-all duration-500" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
