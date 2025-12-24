// src/sections/Section2.js
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Section2() {
  const sectionRef = useRef(null);

  // State slider untuk Rent
  const rentImages = ['/img/hiace1.png', '/img/hiace2.png', '/img/innovaEV.png', '/img/innovaReborn.png', '/img/elf.png'];

  const carSpecs = [
    [
      { label: 'Merek', value: 'Toyota' },
      { label: 'Model', value: 'HiAce Commuter' },
      { label: 'Tahun', value: '2023' },
      { label: 'Kapasitas', value: '15 Seat' },
      { label: 'Entertainment', value: 'Audio, TV, Karaoke' },
    ],
    [{ label: 'Merek', value: 'Toyota' }, { label: 'Model', value: 'HiAce Premio' }, { label: 'Tahun', value: '2024' }, , { label: 'Kapasitas', value: '15 Seat' }, { label: 'Entertainment', value: 'Audio, TV, Karaoke' }],
    [{ label: 'Merek', value: 'Toyota' }, { label: 'Model', value: 'Innova Zenix' }, { label: 'Tahun', value: '2024' }, , { label: 'Kapasitas', value: '7 Seat' }, { label: 'Entertainment', value: 'Audio Music' }],
    [{ label: 'Merek', value: 'Toyota' }, { label: 'Model', value: 'Innova Crysta' }, { label: 'Tahun', value: '2018' }, , { label: 'Kapasitas', value: '7 Seat' }, { label: 'Entertainment', value: 'Audio Music' }],
    [{ label: 'Merek', value: 'Isuzu' }, { label: 'Model', value: 'Elf NLR' }, { label: 'Tahun', value: '1995' }, , { label: 'Kapasitas', value: '19 Seat' }, { label: 'Entertainment', value: 'Audio, TV, Karaoke' }],
  ];

  const [rentIndex, setRentIndex] = useState(0);
  const nextRentImage = () => setRentIndex((prev) => (prev + 1) % rentImages.length);
  const prevRentImage = () => setRentIndex((prev) => (prev - 1 + rentImages.length) % rentImages.length);

  // ---------------------------
  //  AUTO-SLIDESHOW GALLERY — FIXED & STABLE
  // ---------------------------
  const galleryImages = ['/img/gallery/bali1.jpg', '/img/gallery/jatim1.jpg', '/img/gallery/kawahputih1.jpg', '/img/gallery/waterfall1.jpg', '/img/gallery/lombok1.jpg', '/img/gallery/yogyakarta1.jpg', '/img/gallery/ntb1.jpg'];

  console.log('Gallery length:', galleryImages.length);
  console.log('Gallery array:', galleryImages);

  const [galleryIndex, setGalleryIndex] = useState(0);
  const galleryLenRef = useRef(galleryImages.length);
  const intervalRef = useRef(null);

  // PRELOAD semua gambar dan cek status load
  useEffect(() => {
    let mounted = true;
    const preloads = galleryImages.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve({ src, ok: true });
        img.onerror = () => resolve({ src, ok: false });
      });
    });

    Promise.all(preloads).then((results) => {
      if (!mounted) return;
      console.log('PRELOAD RESULTS:', results);
      galleryLenRef.current = galleryImages.length;
    });

    return () => {
      mounted = false;
    };
  }, [galleryImages]);

  // INTERVAL stabil — tidak kena stale closure React
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    intervalRef.current = setInterval(() => {
      setGalleryIndex((prev) => {
        const len = galleryLenRef.current || galleryImages.length;
        const next = (prev + 1) % len;
        console.log('TICK -> prev:', prev, 'len:', len, 'next:', next);
        return next;
      });
    }, 3000);

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center justify-start relative"
      style={{
        backgroundColor: '#fcf6ee',
        zIndex: 2,
        paddingTop: '6rem',
        marginTop: '650px',
        height: 'auto',
      }}
    >
      {/* Sticky Navigation */}
      <div
        className="
    w-full
    flex
    justify-center
    font-medium
    text-blue-950/50
    px-4
    py-3

    gap-6
    sm:gap-10
    md:gap-20
    lg:gap-40

    flex-wrap
    md:flex-nowrap

    overflow-x-auto
    whitespace-nowrap
  "
        style={{
          position: 'sticky',
          top: '50px',
          zIndex: 50,
          marginTop: '-60px',
          marginBottom: '130px',
          backgroundColor: '#fcf6ee',
        }}
      >
        <button
          onClick={() => {
            const element = document.getElementById('promo');
            if (!element) return;
            const yOffset = -130;
            const targetY = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: targetY, behavior: 'smooth' });
          }}
          className="text-blue-950/25 hover:text-blue-950 transition"
        >
          Promo
        </button>

        <button
          onClick={() => {
            const element = document.getElementById('philosophy');
            if (!element) return;
            const yOffset = -90;
            const targetY = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: targetY, behavior: 'smooth' });
          }}
          className="text-blue-950/25 hover:text-blue-950 transition"
        >
          Philosophy
        </button>

        <button
          onClick={() => {
            const element = document.getElementById('Rent');
            if (!element) return;
            const yOffset = -70;
            const targetY = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: targetY, behavior: 'smooth' });
          }}
          className="text-blue-950/25 hover:text-blue-950 transition"
        >
          Rent
        </button>

        <button
          onClick={() => {
            const element = document.getElementById('package1');
            if (!element) return;
            const yOffset = -590;
            const targetY = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: targetY, behavior: 'smooth' });
          }}
          className="text-blue-950/25 hover:text-blue-950 transition"
        >
          Package
        </button>

        <button
          onClick={() => {
            const element = document.getElementById('gallery');
            if (!element) return;
            const yOffset = -120;
            const targetY = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: targetY, behavior: 'smooth' });
          }}
          className="text-blue-950/25 hover:text-blue-950 transition"
        >
          Gallery
        </button>

        <button
          onClick={() => {
            const element = document.getElementById('package1');
            if (!element) return;
            const yOffset = 2000;
            const targetY = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: targetY, behavior: 'smooth' });
          }}
          className="text-blue-950/25 hover:text-blue-950 transition"
        >
          Contact
        </button>
      </div>

      {/* Main Content - Promo */}
      <div className="w-full flex flex-col items-center justify-center gap-6 mt-16 sm:mt-20 px-4">
        {/* Image Wrapper */}
        <div
          className="
    w-full
    max-w-[320px]
    sm:max-w-[400px]
    md:max-w-[500px]
    h-auto
    overflow-hidden
    rounded-lg
    shadow-lg
  "
        >
          <img id="promo" src="/img/bandung.jpg" alt="Bandung" className="w-full h-auto transform transition-transform duration-500 hover:scale-150" />
        </div>

        {/* Text */}
        <h2 className="text-xs sm:text-sm text-center tracking-wide">ENJOY ROMANCE IN THE CITY OF BANDUNG</h2>

        <h1
          className="
    text-3xl
    sm:text-5xl
    md:text-7xl
    text-[#193741]
    font-bold
    text-center
  "
        >
          New Year Offer
        </h1>

        <p
          className="
    text-sm
    sm:text-base
    md:text-lg
    max-w-xl
    text-center
    text-gray-700
  "
        >
          4 days 3 nights for more than 4 guests will get a discount of up to 20%
        </p>

        {/* SEE MORE OFFER */}
        <Link
          to="/promo"
          className="
      mt-6
      px-8 sm:px-10
      py-3 sm:py-4
      border-2 border-[#193741]
      text-[#193741]
      rounded-full
      text-base sm:text-lg
      font-semibold
      hover:bg-[#193741]
      hover:text-white
      transition-all
    "
        >
          See More Offer
        </Link>
      </div>

      {/* Philosophy */}
      <div className="w-full min-h-screen bg-[#ffff] flex items-center px-6 md:px-16 py-20 mt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          <div className="flex flex-col justify-center">
            <h1 id="philosophy" className="text-5xl md:text-6xl font-extrabold text-[#193741] leading-tight pt-40 -mt-20">
              Our Philosophy
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg">
              Founded in 2013 and based in Bandung, Indonesia, Cibiru Tours & Travel is built on a simple core value: high-quality transportation with guaranteed affordable pricing. Serving both international and local guests with a
              reliable fleet of cars, minibuses, and buses, we ensure every trip—business, leisure, or special events—is safe, comfortable, and seamless. Our focus on value, professionalism, and genuine hospitality makes Cibiru Tours &
              Travel the trusted choice for smart, budget-friendly travel.
            </p>
          </div>
          <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img src="img/manWithCibiru.png" alt="Philosophy Visual" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Rent */}
      <section className="w-full min-h-screen flex flex-col items-center justify-start px-6 py-20 bg-[#fbf7f3]">
        <div className="w-full max-w-3xl mx-auto text-center">
          <h1 id="Rent" className="font-extrabold text-[#193741] leading-[0.85] text-6xl sm:text-7xl md:text-[140px] lg:text-[200px]">
            Rent
          </h1>
          <h2 className="text-lg sm:text-xl md:text-3xl text-[#193741] font-normal mt-4 max-w-2xl mx-auto">Premium cars and professional drivers dedicated to delivering a smooth and comfortable journey.</h2>
          <h3 className="text-sm sm:text-base md:text-lg text-[#193741] font-light mt-3 max-w-2xl mx-auto leading-relaxed">
            Cibiru Tours & Travel offers reliable transportation with a focus on comfort, quality, and peace of mind. Our well-maintained premium vehicles and professional, friendly drivers ensure a safe and smooth travel experience.
            Whether for business or leisure, we deliver car rental services that put your satisfaction first.
          </h3>
        </div>

        {/* Slider + Tabel Spesifikasi */}
        <div className="flex flex-col md:flex-row items-start md:items-stretch mt-12 gap-8 w-full max-w-5xl mx-auto">
          {/* Slider Mobil */}
          <div className="w-full md:w-1/2 h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl relative">
            {rentImages.map((img, i) => (
              <img key={i} src={img} alt={`slide-${i}`} className={`rent-img-${i} absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${i === rentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} />
            ))}
            <button onClick={prevRentImage} aria-label="Previous image" className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#193741]/75 hover:bg-[#193741] text-white p-3 rounded-full shadow-md">
              ‹
            </button>
            <button onClick={nextRentImage} aria-label="Next image" className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#193741]/75 hover:bg-[#193741] text-white p-3 rounded-full shadow-md">
              ›
            </button>
          </div>

          {/* Tabel */}
          <div className="w-full md:w-1/2 h-[350px] md:h-[450px] border rounded-2xl shadow-xl p-4 transition-all duration-700 flex flex-col justify-center">
            <h1 className="text-4xl mb-8 font-bold text-[#193741] text-center">Specification</h1>

            <table className="w-full text-left mb-6">
              <tbody>
                {carSpecs[rentIndex].map((spec, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-2 font-semibold">{spec.label}</td>
                    <td className="py-2">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* BUTTON AREA */}
            <div className="flex gap-4 justify-center">
              <a
                href="https://wa.me/6282219855730?text=Halo,+i+want+to+make+an+order"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#193741] text-white rounded-full text-lg font-semibold hover:scale-95 transition-transform text-center"
              >
                Order Now
              </a>

              <Link to="/rent">
                <button className="px-8 py-3 border-2 border-[#193741] text-[#193741] rounded-full text-lg font-semibold hover:bg-[#193741] hover:text-white transition-all">See More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* akhir rent */}

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* Package */}
      <section className="w-full min-h-screen flex flex-col items-center justify-start px-6 py-20 bg-[#fcf6ee]">
        <div className="w-full max-w-3xl mx-auto text-center">
          <h1 id="package" className="font-extrabold text-[#193741] leading-[0.85] text-6xl sm:text-7xl md:text-[140px] lg:text-[200px]">
            Package
          </h1>
          <br></br>
          <br></br>
          <h2 className="text-lg sm:text-xl md:text-3xl text-[#193741] font-normal mt-4 max-w-2xl mx-auto">Curated travel packages for comfort, efficiency, and memorable journeys.</h2>

          <h3 className="text-sm sm:text-base md:text-lg text-[#193741] font-light mt-3 max-w-2xl mx-auto leading-relaxed">
            Choose from our thoughtfully designed travel packages covering city tours, family trips, corporate travel, and special destinations across Indonesia. Each package includes professional drivers, well-maintained vehicles, and
            transparent pricing for a worry-free experience.
          </h3>
        </div>

        {/* PACKAGE LIST */}
        <div id="package1" className="flex flex-col md:flex-row items-stretch mt-12 gap-8 w-full max-w-5xl mx-auto">
          {/* Package Card 1 */}
          <div className="w-full md:w-1/3 border rounded-2xl shadow-xl p-6 flex flex-col justify-between bg-white">
            <div>
              <h3 className="text-2xl font-bold text-[#193741] mb-4">City Tour</h3>
              <p className="text-gray-700 leading-relaxed">Half-day or full-day city tour packages with flexible destinations, perfect for families and small groups.</p>
            </div>

            <a
              href="https://wa.me/6282219855730?text=Halo,+saya+ingin+bertanya+tentang+City+Tour+Package"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-6 py-3 bg-[#193741] text-white rounded-full text-center font-semibold hover:scale-95 transition-transform"
            >
              Order Package
            </a>
          </div>

          {/* Package Card 2 */}
          <div className="w-full md:w-1/3 border rounded-2xl shadow-xl p-6 flex flex-col justify-between bg-white">
            <div>
              <h3 className="text-2xl font-bold text-[#193741] mb-4">Out of Town</h3>
              <p className="text-gray-700 leading-relaxed">Comfortable long-distance travel packages to popular destinations outside the city with experienced drivers.</p>
            </div>

            <a
              href="https://wa.me/6282219855730?text=Halo,+saya+ingin+bertanya+tentang+Out+of+Town+Package"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-6 py-3 bg-[#193741] text-white rounded-full text-center font-semibold hover:scale-95 transition-transform"
            >
              Order Package
            </a>
          </div>

          {/* Package Card 3 */}
          <div className="w-full md:w-1/3 border rounded-2xl shadow-xl p-6 flex flex-col justify-between bg-white">
            <div>
              <h3 className="text-2xl font-bold text-[#193741] mb-4">Custom Trip</h3>
              <p className="text-gray-700 leading-relaxed">Personalized travel packages tailored to your schedule, destination, and number of passengers.</p>
            </div>

            <a
              href="https://wa.me/6282219855730?text=Halo,+saya+ingin+bertanya+tentang+Custom+Trip+Package"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-6 py-3 bg-[#193741] text-white rounded-full text-center font-semibold hover:scale-95 transition-transform"
            >
              Order Package
            </a>
          </div>
        </div>
        {/* DISCOVER MORE */}
        <div className="mt-16">
          <Link to="/package" className="px-10 py-4 border-2 border-[#193741] text-[#193741] rounded-full text-lg font-semibold hover:bg-[#193741] hover:text-white transition-all">
            Discover More
          </Link>
        </div>
      </section>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* GALLERY SECTION — FIXED IMAGE SIZE */}
      <section className="w-full bg-white py-20">
        <div id="gallery" className="w-full flex flex-col items-center justify-center gap-6">
          <div className="w-[500px] h-[300px] overflow-hidden rounded-lg shadow-lg">
            <img
              id="galleryThumb"
              src={galleryImages[galleryIndex]}
              alt="Gallery"
              onError={() => console.log('ERROR IMAGE:', galleryImages[galleryIndex])}
              onLoad={() => console.log('LOADED:', galleryImages[galleryIndex])}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-150"
            />
          </div>

          <h2 className="text-sm">Some of the beauty of Indonesia in pictures</h2>
          <h1 className="text-7xl text-[#193741] font-bold">Gallery</h1>
          <p className="text-lg max-w-xl text-center text-gray-700">Visit the gallery to see more complete photos of various places in Indonesia as your chosen destination.</p>

          <Link to="/gallery" className="px-8 py-3 bg-[#193741] text-white rounded-full text-lg font-semibold hover:scale-95 transition-transform mx-auto block">
            See More
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Section2;
