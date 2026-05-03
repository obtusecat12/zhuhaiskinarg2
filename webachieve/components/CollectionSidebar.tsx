import React from 'react';
import GoogleAd2016 from './GoogleAd2016';

const EyeIcon = ({ className = "w-[14px] h-[14px] text-gray-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const CollectionSidebar: React.FC = () => {
  return (
    <div className="w-full text-sm text-gray-900 drop-shadow-sm">
      {/* BlockWeb Builder Ad (300x250) scaled to fit sidebar */}
      <div className="mb-6 flex justify-center">
        <GoogleAd2016 
          width="100%" 
          height="auto" 
          style={{ aspectRatio: '300/250', maxWidth: '300px' }} 
          type="image" 
          imageUrl="https://i.imgur.com/HBeAXNQ.png" 
        />
      </div>

      <div className="mb-6">
        <span className="text-2xl font-light">8,818</span> <span className="text-gray-600">结果</span>
      </div>

      <div className="mb-6">
        <h3 className="font-bold mb-2 flex justify-between items-center text-[13px]">出版年份 <span className="cursor-pointer text-gray-600 hover:text-black">⤢</span></h3>
        {/* Fake Histogram matching screenshot */}
        <div className="h-14 bg-[#e0e7ff] relative flex items-end border-b border-gray-400 rounded-sm overflow-hidden shadow-inner">
           {/* Left Handle */}
           <div className="absolute left-0 top-0 bottom-0 w-3 bg-[#5c85d6] flex items-center justify-center cursor-ew-resize z-10 border-r border-blue-400">
             <span className="text-white text-[8px] font-bold tracking-tighter">||</span>
           </div>
           {/* Right Handle */}
           <div className="absolute right-0 top-0 bottom-0 w-3 bg-[#5c85d6] flex items-center justify-center cursor-ew-resize z-10 border-l border-blue-400">
             <span className="text-white text-[8px] font-bold tracking-tighter">||</span>
           </div>
           
           {/* Bars */}
           <div className="flex-1 flex items-end justify-end px-4 h-full pb-[1px] gap-[2px]">
             <div className="w-1.5 h-[10%] bg-[#333]"></div>
             <div className="w-1.5 h-[0%] bg-[#333]"></div>
             <div className="w-1.5 h-[0%] bg-[#333]"></div>
             <div className="w-1.5 h-[8%] bg-[#333]"></div>
             <div className="w-1.5 h-[25%] bg-[#333]"></div>
             <div className="w-1.5 h-[90%] bg-[#333]"></div>
             <div className="w-1.5 h-[45%] bg-[#333]"></div>
             <div className="w-1.5 h-[12%] bg-[#333]"></div>
           </div>
        </div>
        <div className="flex justify-center items-center gap-2 text-[12px] mt-2 font-mono">
          <span className="bg-black text-white px-3 py-1 rounded-sm shadow-md">0</span>
          <span className="text-gray-700 font-bold">-</span>
          <span className="bg-black text-white px-3 py-1 rounded-sm shadow-md">2091</span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-bold mb-2 text-[13px]">一部分</h3>
        <ul className="text-[#0056b3] space-y-1.5 text-[13px]">
          <li><a href="#" className="hover:underline">软件库: 热门系统</a></li>
          <li><a href="#" className="hover:underline">软件库</a></li>
          <li><a href="#" className="hover:underline">互联网档案馆软件收集</a></li>
          <li><a href="#" className="hover:underline">仿真站</a></li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-bold mb-2 text-[13px]">媒体类型</h3>
        <ul className="space-y-1.5 text-gray-700 text-[13px]">
          <li className="flex justify-between items-center"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded-sm" /> <EyeIcon /> software</label> <span>8,813</span></li>
          <li className="flex justify-between items-center"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded-sm" /> <EyeIcon /> movies</label> <span>2</span></li>
          <li className="flex justify-between items-center"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded-sm" /> <EyeIcon /> texts</label> <span>2</span></li>
          <li className="flex justify-between items-center"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded-sm" /> <EyeIcon /> collection</label> <span>1</span></li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-bold mb-2 text-[13px]">年</h3>
        <ul className="space-y-1.5 text-gray-500 text-[13px]">
          <li className="flex justify-between items-center"><label className="flex items-center gap-2 cursor-not-allowed"><input type="checkbox" disabled className="rounded-sm" /> <EyeIcon className="w-[14px] h-[14px] text-gray-400" /> 1997</label> <span>377</span></li>
          <li className="flex justify-between items-center"><label className="flex items-center gap-2 cursor-not-allowed"><input type="checkbox" disabled className="rounded-sm" /> <EyeIcon className="w-[14px] h-[14px] text-gray-400" /> 1996</label> <span>512</span></li>
          <li className="flex justify-between items-center"><label className="flex items-center gap-2 cursor-not-allowed"><input type="checkbox" disabled className="rounded-sm" /> <EyeIcon className="w-[14px] h-[14px] text-gray-400" /> 1995</label> <span>647</span></li>
          <li className="flex justify-between items-center"><label className="flex items-center gap-2 cursor-not-allowed"><input type="checkbox" disabled className="rounded-sm" /> <EyeIcon className="w-[14px] h-[14px] text-gray-400" /> 1994</label> <span>728</span></li>
          <li className="flex justify-between items-center"><label className="flex items-center gap-2 cursor-not-allowed"><input type="checkbox" disabled className="rounded-sm" /> <EyeIcon className="w-[14px] h-[14px] text-gray-400" /> 1993</label> <span>823</span></li>
          <li className="flex justify-between items-center"><label className="flex items-center gap-2 cursor-not-allowed"><input type="checkbox" disabled className="rounded-sm" /> <EyeIcon className="w-[14px] h-[14px] text-gray-400" /> 1992</label> <span>815</span></li>
        </ul>
        <a href="#" className="text-[#0056b3] hover:underline text-[13px] mt-2 inline-block">更多的...</a>
      </div>
      
      <div className="mb-6">
        <h3 className="font-bold mb-2 text-[13px]">主题</h3>
      </div>
    </div>
  );
};

export default CollectionSidebar;
