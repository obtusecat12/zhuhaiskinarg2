import React from 'react';

const CollectionHeader: React.FC = () => {
  return (
    <div className="bg-white/40 backdrop-blur-xl pt-6 px-6 border-b border-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        {/* Image */}
        <div className="w-[100px] h-[100px] flex-shrink-0 bg-black/10 flex items-center justify-center overflow-hidden rounded-sm shadow-sm border border-white/50">
          <img src="https://i.ibb.co/HTMdcwzf/art-haven-net-20130512.png" alt="Collection" className="w-full h-full object-cover opacity-90" />
        </div>
        {/* Content */}
        <div className="flex-1">
          <h1 className="text-2xl font-normal text-[#111] mb-2 drop-shadow-sm">
            <span className="text-gray-600">软件库：</span> 热门系统
          </h1>
          <p className="text-sm text-gray-800 leading-relaxed mb-1 drop-shadow-sm">
            适用于各类经典复古操作系统的精选热门合集。该合集包含最受用户欢迎的桌面环境、终端界面以及早期图形操作系统。借助基于浏览器的模拟器，这些系统可以直接在您的设备上启动并运行。体验计算历史的演进——如有任何问题或疑问，请联系系统管理员<a href="#" className="text-blue-700 hover:underline font-medium">John Pork</a>。感谢所有贡献者的努力......
          </p>
          <a href="#" className="text-blue-700 text-sm hover:underline font-medium">更多的...</a>
        </div>
        {/* Actions */}
        <div className="flex flex-col gap-2 text-sm text-gray-800 min-w-[120px]">
          <a href="#" className="flex items-center gap-2 justify-center btn-2016-aero px-3 py-1.5 transition-colors">
            <svg className="w-4 h-4" style={{ filter: "drop-shadow(0 1px 0 rgba(255,255,255,0.8))" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
            分享
          </a>
          <a href="#" className="flex items-center gap-2 justify-center btn-2016-aero px-3 py-1.5 transition-colors">
            <svg className="w-4 h-4" style={{ filter: "drop-shadow(0 1px 0 rgba(255,255,255,0.8))" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 19C6 12.3726 11.3726 7 18 7M6 13C6 9.68629 8.68629 7 12 7M6 21A2 2 0 112 21 2 2 0 016 21Z" /></svg>
            RSS
          </a>
          <a href="#" className="flex items-center gap-2 justify-center btn-2016-aero px-3 py-1.5 transition-colors">
            <svg className="w-4 h-4" style={{ filter: "drop-shadow(0 1px 0 rgba(255,255,255,0.8))" }} fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            全部播放
          </a>
        </div>
      </div>
      {/* Tabs */}
      <div className="flex gap-6 border-b border-[#ddd] mt-4">
        <button className="pb-3 border-b-2 border-[#4d90fe] font-medium text-[#4d90fe] px-2 tracking-wide uppercase text-sm">收藏</button>
        <button className="pb-3 text-gray-600 hover:text-black px-2 border-b-2 border-transparent hover:border-gray-300 transition-colors uppercase text-sm font-medium tracking-wide">关于</button>
      </div>
    </div>
  );
};

export default CollectionHeader;
