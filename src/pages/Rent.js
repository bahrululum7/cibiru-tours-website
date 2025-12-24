import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const carList = [
  {
    name: 'Toyota HiAce Commuter',
    category: 'Minibus',
    price: 'Hubungi Kami',
    image: '/img/hiace1.png',
    imageFit: 'object-cover',
    imagePosition: 'object-center',
    imageScale: 'hover:scale-105',
    imageHeight: 'h-52',
    specs: {
      brand: 'Toyota',
      model: 'HiAce Commuter',
      year: '2023',
      capacity: '15 Seat',
      entertainment: 'Audio, TV, Karaoke',
    },
  },
  {
    name: 'Toyota HiAce Premio',
    category: 'Luxury Minibus',
    price: 'Hubungi Kami',
    image: '/img/hiace2.png',
    imageFit: 'object-contain scale-95',
    imagePosition: 'object-top',
    imageScale: 'scale-90 hover:scale-105',
    imageHeight: 'h-56',
    specs: {
      brand: 'Toyota',
      model: 'HiAce Premio',
      year: '2024',
      capacity: '15 Seat',
      entertainment: 'Audio, TV, Karaoke',
    },
  },
  {
    name: 'Toyota Innova Zenix',
    category: 'MPV Premium',
    price: 'Hubungi Kami',
    image: '/img/innovaEv.png',
    imageFit: 'object-contain scale-95',
    imagePosition: 'object-center',
    imageScale: 'scale-[1.5] hover:scale-[2]',
    imageHeight: 'h-52',
    imageRotate: 'rotate-[12deg]',
    specs: {
      brand: 'Toyota',
      model: 'Innova Zenix',
      year: '2024',
      capacity: '7 Seat',
      entertainment: 'Audio Music',
    },
  },
  {
    name: 'Toyota Innova Crysta',
    category: 'MPV',
    price: 'Hubungi Kami',
    image: '/img/innovaReborn.png',
    imageFit: 'object-contain',
    imagePosition: 'object-center',
    imageScale: 'hover:scale-105',
    imageHeight: 'h-52',
    specs: {
      brand: 'Toyota',
      model: 'Innova Crysta',
      year: '2018',
      capacity: '7 Seat',
      entertainment: 'Audio Music',
    },
  },
  {
    name: 'Isuzu Elf NLR',
    category: 'Bus Medium',
    price: 'Hubungi Kami',
    image: '/img/elf.png',
    imageFit: 'object-cover',
    imagePosition: 'object-bottom',
    imageScale: 'hover:scale-110',
    imageHeight: 'h-60',
    specs: {
      brand: 'Isuzu',
      model: 'Elf NLR',
      year: '1995',
      capacity: '19 Seat',
      entertainment: 'Audio, TV, Karaoke',
    },
  },
];

const Rent = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#fcf6ee]">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-14 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#193741]">Our Vehicle Fleet</h1>
          <p className="mt-5 max-w-3xl mx-auto text-[#193741]/80">Experience the best in driving comfort with our high-quality, clean fleet, perfectly suited for business and personal travel.</p>
        </section>

        {/* CAR LIST */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {carList.map((car, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-[#193741]/10 flex flex-col h-full">
                {/* IMAGE */}
                <div className={`${car.imageHeight} overflow-hidden flex items-center justify-center`}>
                  <img
                    src={car.image}
                    alt={car.name}
                    className={`
                      w-full h-full
                      transition duration-500
                      ${car.imageFit}
                      ${car.imagePosition}
                      ${car.imageScale}
                      ${car.imageRotate || ''}
                    `}
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-semibold text-[#193741]">{car.name}</h2>
                      <p className="text-sm text-[#193741]/70">{car.category}</p>
                    </div>
                    <span className="text-[#c1a059] font-semibold text-sm">{car.price}</span>
                  </div>

                  {/* SPECS */}
                  <div className="mt-6 grid grid-cols-2 gap-y-3 text-sm text-[#193741]/90 min-h-[110px]">
                    <div>
                      <span className="font-semibold">Brand:</span> {car.specs.brand}
                    </div>
                    <div>
                      <span className="font-semibold">Model:</span> {car.specs.model}
                    </div>
                    <div>
                      <span className="font-semibold">Capacity:</span> {car.specs.capacity}
                    </div>
                    <div>
                      <span className="font-semibold">Entertainment:</span> {car.specs.entertainment}
                    </div>
                    <div>
                      <span className="font-semibold">Year:</span> {car.specs.year}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="mt-auto w-full py-3 rounded-xl bg-[#193741] text-white font-semibold hover:bg-[#c1a059] hover:text-[#193741] transition">Rent Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Rent;
