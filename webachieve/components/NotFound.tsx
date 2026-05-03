import React from 'react';

interface NotFoundProps {
  requestedUrl?: string;
}

const NotFound: React.FC<NotFoundProps> = ({ requestedUrl }) => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 py-20 px-4 text-center bg-[#f0f5f9]">
       {/* Aero Window Style Container */}
       <div className="aero-panel w-full max-w-[500px] shadow-[0_10px_25px_rgba(0,0,0,0.2)] transition-all duration-500 hover:shadow-[0_15px_35px_rgba(255,51,51,0.2)] hover:-translate-y-2 group">
          
          {/* Aero Glass Header - Content Empty */}
          <div className="aero-panel-header flex items-center justify-between px-3 py-2 select-none h-[42px] transition-colors duration-300 group-hover:bg-gradient-to-b group-hover:from-[#ff4d4d] group-hover:to-[#cc0000] group-hover:border-[#990000]">
             
          </div>

          {/* Content Body */}
          <div className="p-8 bg-white flex flex-col items-center relative overflow-hidden">
              
              <h2 className="text-[20px] text-[#1e395b] font-bold mb-3 mt-4 transition-colors duration-300 group-hover:text-[#cc0000]">
                  未找到该页面的存档
              </h2>
              
              <p className="text-[14px] text-[#555] mb-8 leading-relaxed max-w-[320px]">
                  时光回溯机无法定位到您请求的 URL 快照。<br/>可能是因为该页面从未被收录，或者输入的地址有误。
                  {requestedUrl && (
                    <span className="block mt-2 text-[#999] text-[12px] break-all transition-colors duration-300 group-hover:text-[#ff6666]">
                      请求路径: {requestedUrl}
                    </span>
                  )}
              </p>

              <div className="flex gap-3 w-full justify-center relative z-10">
                  <a 
                    href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.hash = '';
                    }}
                    className="aero-btn px-8 py-2 min-w-[120px] text-[14px] font-bold flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-b hover:from-[#ff4d4d] hover:to-[#cc0000] hover:text-white hover:border-[#990000] hover:shadow-[0_0_10px_rgba(255,51,51,0.5)]"
                  >
                    返回首页
                  </a>
              </div>
              
              {/* Background glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ffcccc] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
          </div>
          
          {/* Aero Footer/Status Bar */}
          <div className="bg-[#f0f0f0] border-t border-[#d9d9d9] px-3 py-2 text-left transition-colors duration-300 group-hover:bg-[#ffe6e6] group-hover:border-[#ffcccc]">
              <span className="text-[11px] text-[#888] transition-colors duration-300 group-hover:text-[#cc0000]">Error Code: 0x80040404</span>
          </div>
       </div>
    </div>
  );
};

export default NotFound;