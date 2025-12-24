import React from 'react';

function Curtain() {
  return (
    <div className="fixed inset-0 w-full h-screen bg-[#193741] z-[999] animate-curtainExit">
      <img src="img/logofix.png" alt="logo" className="fixed top-1/2 left-1/2 w-[22vw] -translate-x-1/2 -translate-y-1/2 animate-fadeOut" />

      {/* Tailwind custom styles */}
      <style>{`
        @keyframes curtainExit {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100vh); }
        }
        .animate-curtainExit {
          animation: curtainExit 0.6s ease-in 1.8s forwards;
        }

        @keyframes fadeOut {
          0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.88); }
        }
        .animate-fadeOut {
          animation: fadeOut 0.3s ease-in 1.5s forwards;
        }
      `}</style>
    </div>
  );
}

export default Curtain;
