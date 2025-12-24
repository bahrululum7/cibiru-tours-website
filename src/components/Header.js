import React, { useState, useEffect } from 'react';

function Header() {
  const [hideTopBox, setHideTopBox] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideTopBox(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full h-[120px]">
      <div
        className={`
          fixed left-1/2 top-0 
          -translate-x-1/2 
          w-[240px] h-[120px]
          bg-[#193741] 
          flex justify-center items-center
          shadow-[0_6px_20px_rgba(0,0,0,0.2)]
          transition-all 
          duration-700
          ease-out
          z-10
          ${hideTopBox ? 'opacity-0 -translate-y-[120%]' : 'opacity-100 translate-y-0'}
        `}
      >
        <img
          src="/img/logofix.png"
          alt="logo tengah"
          className="
            max-w-[95%] max-h-[95%] 
            object-contain
            transition-transform duration-300
            hover:scale-90
          "
        />
      </div>
    </div>
  );
}

export default Header;
