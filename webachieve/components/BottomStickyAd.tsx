import React, { useState } from 'react';
import GoogleAd2016 from './GoogleAd2016';

const BottomStickyAd: React.FC = () => {
  const [isFolded, setIsFolded] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  if (isClosed) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] flex flex-col items-center pointer-events-none">
      <div className="w-full max-w-[728px] flex justify-end px-2 pointer-events-auto">
        <div className="flex bg-white border border-b-0 border-[#ccc] rounded-t-md shadow-[0_-2px_5px_rgba(0,0,0,0.1)] overflow-hidden transition-colors duration-300 hover:border-[#ffcccc]">
          <button 
            onClick={() => setIsFolded(!isFolded)}
            className="px-3 py-1 text-[12px] text-gray-500 hover:bg-[#ffe6e6] hover:text-[#cc0000] flex items-center justify-center border-r border-[#eee] transition-colors duration-300"
            title={isFolded ? "展开广告" : "折叠广告"}
          >
            {isFolded ? '▲' : '▼'}
          </button>
          <button 
            onClick={() => setIsClosed(true)}
            className="px-3 py-1 text-[12px] text-gray-500 hover:bg-[#ffe6e6] hover:text-[#cc0000] flex items-center justify-center transition-colors duration-300"
            title="关闭广告"
          >
            ✕
          </button>
        </div>
      </div>
      
      <div 
        className={`w-full bg-[#f8f9fa] border-t border-[#ccc] shadow-[0_-2px_10px_rgba(0,0,0,0.1)] flex justify-center pointer-events-auto transition-all duration-300 ease-in-out overflow-hidden ${isFolded ? 'h-0 border-t-0' : 'h-[110px] py-[10px] hover:border-[#ffcccc] hover:shadow-[0_-5px_15px_rgba(255,51,51,0.1)]'}`}
      >
        <GoogleAd2016 
          width={728} 
          height={90} 
          type="image" 
          imageUrl="https://picsum.photos/seed/adbottom/728/90" 
        />
      </div>
    </div>
  );
};

export default BottomStickyAd;
