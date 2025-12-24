import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#193741] text-white flex flex-col overflow-x-hidden">
      {/* AREA KOSONG UNTUK JUDUL BESAR */}
      <div className="h-48 flex flex-col items-center justify-center text-center mt-20 sm:mt-40 pt-10 sm:pt-20">{/* Optional */}</div>

      {/* LOGO + JUDUL */}
      <div className="flex flex-col items-center text-center text-white mb-10 mt-[-9rem] sm:mt-[-18rem] px-4 sm:px-0">
        <img src="img/logoTab.png" alt="Logo footer" className="w-24 sm:w-32 h-24 sm:h-32 object-contain mb-6 sm:mb-12" />

        <div className="footerTitle max-w-full sm:max-w-3xl">
          <p className="text-xl sm:text-2xl md:text-3xl mb-1 break-words">Cibiru Tours & Travel - Affordable Travel with Service</p>
          <p className="text-xl sm:text-2xl md:text-3xl break-words">That’s Honest and Heartfelt</p>
        </div>
      </div>

      {/* GARIS + KOLOM */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700/40 border-t border-gray-700/40">
        {/* CONTACT */}
        <div id="contact" className="p-4 sm:p-6 md:p-10 flex flex-col text-left">
          <h3 className="text-sm tracking-widest text-yellow-200 mb-4 sm:mb-6">CONTACT</h3>

          <a
            href="https://wa.me/6282219855730?text=Halo,+i+want+to+make+an+order"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-fit px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition-all"
          >
            WhatsApp
          </a>
        </div>

        {/* FOUND US */}
        <div className="p-4 sm:p-6 md:p-10 flex flex-col text-left">
          <h3 className="text-sm tracking-widest text-yellow-200 mb-4 sm:mb-6">FIND US ON</h3>

          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="inline-block w-fit px-5 py-2 border border-white/40 rounded-full hover:bg-[#f784c5] hover:text-[#193741] transition-all">
            Instagram
          </a>
        </div>

        {/* NEWSLETTER */}
        <div className="p-4 sm:p-6 md:p-10 flex flex-col text-left">
          <h3 className="text-sm tracking-widest text-yellow-200 mb-4 sm:mb-6">NEWSLETTER</h3>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-2 sm:mb-4">Dapatkan update terbaru langsung ke inbox Anda.</p>

          <input type="email" placeholder="Email" className="w-full bg-gray-800 px-3 py-2 rounded-md text-sm focus:ring focus:ring-white" />

          <button className="mt-2 sm:mt-3 px-4 py-2 bg-white text-gray-900 rounded-md font-semibold hover:opacity-90 transition">Subscribe</button>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="w-full text-center py-6 text-gray-400 text-sm">© {new Date().getFullYear()} Cibiru Tours & Travel. All rights reserved.</div>
    </footer>
  );
}
