import React, { useEffect, useState } from 'react';
import { AeroBackButton } from './AeroBackButton';

const GenericRetroSystem: React.FC = () => {
  const [systemName, setSystemName] = useState('UNKNOWN SYSTEM');

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#playback/')) {
      const name = decodeURIComponent(hash.substring('#playback/'.length));
      setSystemName(name);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0000aa] text-white p-8 flex flex-col items-center justify-center relative overflow-hidden" style={{ 
      fontFamily: '"Courier New", Courier, monospace',
      WebkitFontSmoothing: 'none',
      fontSmooth: 'never',
      textRendering: 'geometricPrecision'
    }}>
      {/* CRT Scanline Overlay */}
      <div className="pointer-events-none absolute inset-0 z-50 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)', backgroundSize: '100% 4px' }}></div>

      <div className="absolute top-8 left-8 z-50">
        <AeroBackButton />
      </div>
      
      {/* Low Resolution Wrapper */}
      <div className="w-full h-full absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-[#aaaaaa] text-black px-8 py-6 border-4 border-white shadow-[8px_8px_0_#000] max-w-2xl w-full text-center z-10 relative pointer-events-auto" style={{
          transform: 'scale(1.5)',
          imageRendering: 'pixelated'
        }}>
          <h1 className="text-2xl font-bold mb-6 border-b-4 border-black pb-4 uppercase tracking-wider">{systemName}</h1>
          <p className="mb-4 font-bold text-xl">SYSTEM BOOT FAILURE</p>
          <p className="text-md mb-8">INSERT SYSTEM DISK IN DRIVE A: AND PRESS ANY KEY</p>
          <div className="mt-8 text-2xl animate-pulse font-bold">_</div>
        </div>
      </div>
    </div>
  );
};

export default GenericRetroSystem;
