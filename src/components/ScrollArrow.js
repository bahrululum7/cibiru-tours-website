import React from 'react';

function ScrollArrow() {
  return (
    <div
      className="flex items-center gap-3 relative z-50 mt-[34vw] ml-[3vw] mb-[14vh]"
      // mt, ml, mb sesuai margin yang sebelumnya di CSS
    >
      <div className="flex justify-center items-center w-[clamp(28px,3vw,45px)] h-[clamp(28px,3vw,45px)] bg-[#193741]" style={{ transform: 'rotate(45deg)' }}>
        <img src="img/arrow.png" alt="scroll arrow" className="w-full object-contain" style={{ transform: 'rotate(45deg)' }} />
      </div>
      <p className="font-[ITC Giovanni Bold] text-[clamp(12px,1.2vw,18px)] text-white whitespace-nowrap opacity-90">Scroll</p>
    </div>
  );
}

export default ScrollArrow;
