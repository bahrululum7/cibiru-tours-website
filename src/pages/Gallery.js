import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Gallery() {
  const mainCategories = ['All', 'Jawa Barat', 'Jakarta', 'Yogyakarta', 'Bali', 'NTB', 'NTT'];

  const categoryMap = {
    'Jawa Barat': 'jawa-barat',
    Jakarta: 'jakarta',
    Bali: 'bali',
    NTB: 'ntb',
    NTT: 'ntt',
    Yogyakarta: 'yogyakarta',
  };

  const subCategories = {
    'jawa-barat': ['All', 'bandung', 'ciwidey', 'lembang', 'bogor'],
    jakarta: ['All'],
    bali: ['All', 'badung', 'gianyar', 'buleleng'],
    ntb: ['All'],
    ntt: ['All'],
    yogyakarta: ['All'],
  };

  const [photos, setPhotos] = useState([]);
  const [selectedMain, setSelectedMain] = useState('All');
  const [selectedSub, setSelectedSub] = useState('All');
  const [modalPhoto, setModalPhoto] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);
  }, []);

  useEffect(() => {
    fetch('/photos.json')
      .then((res) => res.json())
      .then((data) => {
        const photoArray = [];
        Object.keys(data).forEach((categorySubKey) => {
          const [categoryKey, subKey] = categorySubKey.split('/');
          data[categorySubKey].forEach((file) => {
            photoArray.push({
              category: categoryKey,
              sub: subKey,
              url: `/img/gallery/${categoryKey}/${subKey}/${file}`,
            });
          });
        });
        setPhotos(photoArray);
      })
      .catch((err) => console.error('Error loading photos.json:', err));
  }, []);

  const filteredPhotos = photos.filter((item) => {
    if (selectedMain === 'All') return true;
    const mainKey = categoryMap[selectedMain];
    if (selectedSub === 'All') return item.category === mainKey;
    return item.category === mainKey && item.sub === selectedSub;
  });

  return (
    <div style={{ backgroundColor: '#0000003d', minHeight: '100vh' }}>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="px-6 md:px-16 py-10 pt-24">
        <h1 className="text-4xl text-[#193741] font-bold text-center mb-6">Gallery</h1>
        <h2 className="text-xl text-[#193741] font-semibold text-center">Some place in Jawa Bali Lombok Island</h2>

        <br></br>
        <br></br>

        {/* Filter Utama */}
        <div className="flex flex-col items-start gap-2 mb-6">
          <p className="text-[#193741] font-medium">Province</p> {/* Label untuk main category */}
          <div className="flex flex-wrap justify-start gap-3">
            {mainCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedMain(cat);
                  setSelectedSub('All');
                }}
                className={`px-4 py-2 rounded-full border 
          ${selectedMain === cat ? 'bg-black text-white' : 'bg-white text-black'}
          hover:bg-black hover:text-white transition`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Sub Filter */}
        {selectedMain !== 'All' && subCategories[categoryMap[selectedMain]] && (
          <div className="flex flex-col items-start gap-2 mb-8">
            <p className="text-[#193741] font-medium">City</p> {/* Label untuk sub category */}
            <div className="flex flex-wrap justify-start gap-3">
              {subCategories[categoryMap[selectedMain]].map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSelectedSub(sub)}
                  className={`px-4 py-2 rounded-full border 
            ${selectedSub === sub ? 'bg-blue-600 text-white' : 'bg-white text-black'}
            hover:bg-blue-600 hover:text-white transition`}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Grid Foto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-transform hover:scale-[1.03] aspect-w-4 aspect-h-3">
              <img src={photo.url} alt={photo.sub} className="w-full h-full object-cover cursor-pointer" onClick={() => setModalPhoto(photo.url)} onContextMenu={(e) => e.preventDefault()} draggable={false} />
            </div>
          ))}

          {filteredPhotos.length === 0 && <p className="text-center col-span-full text-gray-500 text-lg mt-10">No photos found.</p>}
        </div>

        {/* Modal Fullscreen dengan Tombol Close */}
        {modalPhoto && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={() => setModalPhoto(null)} // klik background tutup modal
          >
            <div className="relative">
              {/* Tombol Close */}
              <button onClick={() => setModalPhoto(null)} className="absolute top-2 right-2 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 transition z-50">
                ×
              </button>

              {/* Gambar */}
              <img
                src={modalPhoto}
                alt="Full view"
                className="max-w-screen max-h-screen object-contain"
                onClick={(e) => e.stopPropagation()} // klik gambar ga nutup modal
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
