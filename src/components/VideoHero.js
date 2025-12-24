import React, { useRef } from 'react';
import ScrollArrow from './ScrollArrow';
import Section2 from '../sections/Section2';

function VideoHero() {
  const container = useRef(null);

  return (
    <main ref={container}>
      {/* VIDEO HERO */}
      <div className="video-wrapper relative w-full h-screen overflow-hidden" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
        <video className="absolute inset-0 w-full h-[110%] object-cover" src="videos/homeVideo.mp4" autoPlay muted loop playsInline />
        <div className="video-content absolute inset-0 flex flex-col items-center justify-center text-white drop-shadow-lg">
          <h2>Holiday With</h2>
          <h1>CIBIRU TOURS & TRAVEL</h1>
        </div>
        <div className="absolute left-[3vw] bottom-[5vh] z-[999]">
          <ScrollArrow />
        </div>
      </div>

      {/* SECTION2 */}
      <Section2 />
    </main>
  );
}

export default VideoHero;
