import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Promo() {
  return (
    <>
      <Navbar />

      <div className="w-full min-h-screen bg-[#fcf6ee] pt-40 pb-32">
        {/* HERO */}
        <section className="w-full max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-extrabold text-[#193741] leading-[0.9] text-6xl sm:text-7xl md:text-[140px] lg:text-[180px]">Promo</h1>

          <p className="mt-8 text-lg md:text-2xl text-[#193741] max-w-3xl mx-auto">Exclusive travel promotions designed to give you more comfort, more experience, and better value.</p>
        </section>

        {/* PROMO LIST */}
        <section className="mt-24 w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Promo Card 1 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
            <img src="/img/bandung.jpg" alt="Bandung Promo" className="w-full h-56 object-cover" />

            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-2xl font-bold text-[#193741] mb-3">Bandung Romantic Getaway</h3>
                <p className="text-gray-700 leading-relaxed">4 Days 3 Nights special package for couples or small groups. Enjoy Bandung with premium transport and professional driver.</p>
                <p className="mt-4 font-semibold text-[#193741]">✨ Up to 20% Discount</p>
              </div>

              <a
                href="https://wa.me/6282219855730?text=Halo,+saya+ingin+bertanya+tentang+Promo+Bandung"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-6 py-3 bg-[#193741] text-white rounded-full text-center font-semibold hover:scale-95 transition-transform"
              >
                Order Promo
              </a>
            </div>
          </div>

          {/* Promo Card 2 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
            <img src="/img/gallery/bali1.jpg" alt="Bali Promo" className="w-full h-56 object-cover" />

            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-2xl font-bold text-[#193741] mb-3">Bali Holiday Escape</h3>
                <p className="text-gray-700 leading-relaxed">Comfortable out-of-town travel to Bali with flexible itinerary and premium vehicle options.</p>
                <p className="mt-4 font-semibold text-[#193741]">🌴 Special Seasonal Offer</p>
              </div>

              <a
                href="https://wa.me/6282219855730?text=Halo,+saya+ingin+bertanya+tentang+Promo+Bali"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-6 py-3 bg-[#193741] text-white rounded-full text-center font-semibold hover:scale-95 transition-transform"
              >
                Order Promo
              </a>
            </div>
          </div>

          {/* Promo Card 3 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
            <img src="/img/gallery/yogyakarta1.jpg" alt="Yogyakarta Promo" className="w-full h-56 object-cover" />

            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-2xl font-bold text-[#193741] mb-3">Yogyakarta Cultural Trip</h3>
                <p className="text-gray-700 leading-relaxed">Explore culture, heritage, and culinary destinations in Yogyakarta with a smooth and relaxing journey.</p>
                <p className="mt-4 font-semibold text-[#193741]">🏯 Best Value Package</p>
              </div>

              <a
                href="https://wa.me/6282219855730?text=Halo,+saya+ingin+bertanya+tentang+Promo+Yogyakarta"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-6 py-3 bg-[#193741] text-white rounded-full text-center font-semibold hover:scale-95 transition-transform"
              >
                Order Promo
              </a>
            </div>
          </div>
        </section>

        {/* CTA BOTTOM */}
        <section className="mt-32 text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#193741] mb-6">Need a custom promo?</h2>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">Tell us your destination, schedule, and number of passengers — we’ll create the best offer for you.</p>

          <Link to="/package" className="px-10 py-4 border-2 border-[#193741] text-[#193741] rounded-full text-lg font-semibold hover:bg-[#193741] hover:text-white transition-all">
            View All Packages
          </Link>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Promo;
