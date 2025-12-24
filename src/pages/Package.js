import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Package() {
  return (
    <>
      <Navbar />

      {/* HERO / HEADER */}
      <section className="w-full min-h-[60vh] flex flex-col items-center justify-center px-6 bg-[#fcf6ee] text-center">
        <h1 className="font-extrabold text-[#193741] leading-[0.9] text-6xl sm:text-7xl md:text-[140px]">Package</h1>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-[#193741] max-w-2xl">Curated travel packages designed for comfort, efficiency, and memorable journeys.</p>
      </section>

      {/* PACKAGE CONTENT */}
      <section className="w-full px-6 py-20 bg-[#fcf6ee]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* PACKAGE 1 */}
          <div className="border rounded-2xl shadow-xl p-8 bg-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#193741] mb-4">City Tour Package</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Ideal for short trips around the city. Visit popular landmarks comfortably with flexible routes and professional drivers.</p>

              <ul className="text-gray-700 text-sm leading-relaxed list-disc pl-5">
                <li>Half-day / Full-day options</li>
                <li>Flexible destinations</li>
                <li>Fuel & driver included</li>
              </ul>
            </div>

            <a
              href="https://wa.me/6282219855730?text=Halo,+saya+ingin+bertanya+tentang+City+Tour+Package"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 px-6 py-3 bg-[#193741] text-white rounded-full text-center font-semibold hover:scale-95 transition-transform"
            >
              Order Now
            </a>
          </div>

          {/* PACKAGE 2 */}
          <div className="border rounded-2xl shadow-xl p-8 bg-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#193741] mb-4">Out of Town Package</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Long-distance travel to destinations outside the city with comfort, safety, and experienced drivers.</p>

              <ul className="text-gray-700 text-sm leading-relaxed list-disc pl-5">
                <li>Popular destinations across Java</li>
                <li>Comfortable vehicles</li>
                <li>Transparent pricing</li>
              </ul>
            </div>

            <a
              href="https://wa.me/6282219855730?text=Halo,+saya+ingin+bertanya+tentang+Out+of+Town+Package"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 px-6 py-3 bg-[#193741] text-white rounded-full text-center font-semibold hover:scale-95 transition-transform"
            >
              Order Now
            </a>
          </div>

          {/* PACKAGE 3 */}
          <div className="border rounded-2xl shadow-xl p-8 bg-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#193741] mb-4">Custom Trip Package</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Fully customizable trips tailored to your schedule, destination, and number of passengers.</p>

              <ul className="text-gray-700 text-sm leading-relaxed list-disc pl-5">
                <li>Flexible itinerary</li>
                <li>Personal consultation</li>
                <li>Best value for groups</li>
              </ul>
            </div>

            <a
              href="https://wa.me/6282219855730?text=Halo,+saya+ingin+bertanya+tentang+Custom+Trip+Package"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 px-6 py-3 bg-[#193741] text-white rounded-full text-center font-semibold hover:scale-95 transition-transform"
            >
              Order Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
