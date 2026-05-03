import React, { useState, useEffect, useRef } from 'react';

interface Win7TaskbarProps {
  isWindowOpen: boolean;
  isMinimized: boolean;
  onWindowToggle: () => void;
  onShowDesktop: () => void;
}

export default function Win7Taskbar({ isWindowOpen, isMinimized, onWindowToggle, onShowDesktop }: Win7TaskbarProps) {
  const [time, setTime] = useState(new Date());
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [volumeOpen, setVolumeOpen] = useState(false);
  const [volume, setVolume] = useState(50);
  const [batteryOpen, setBatteryOpen] = useState(false);
  const taskbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Close popups when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (taskbarRef.current && !taskbarRef.current.contains(e.target as Node)) {
        setStartMenuOpen(false);
        setVolumeOpen(false);
        setBatteryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatTime = (date: Date) => {
    const h = date.getHours().toString().padStart(2, '0');
    const m = date.getMinutes().toString().padStart(2, '0');
    return `${h}:${m}`;
  };

  const formatDate = (date: Date) => {
    const d = date.getDate().toString().padStart(2, '0');
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const y = date.getFullYear();
    return `${d}/${m}/${y}`;
  };

  const togglePopup = (type: 'start' | 'volume' | 'battery') => {
    if (type === 'start') {
       setStartMenuOpen(!startMenuOpen);
       setVolumeOpen(false);
       setBatteryOpen(false);
    } else if (type === 'volume') {
       setVolumeOpen(!volumeOpen);
       setStartMenuOpen(false);
       setBatteryOpen(false);
    } else if (type === 'battery') {
       setBatteryOpen(!batteryOpen);
       setStartMenuOpen(false);
       setVolumeOpen(false);
    }
  };

  return (
    <div ref={taskbarRef} className="fixed bottom-0 left-0 right-0 h-[40px] flex items-center z-[5000] select-none" onContextMenu={(e) => { e.preventDefault(); e.stopPropagation(); }} style={{
      background: 'linear-gradient(to bottom, rgba(162,217,246,0.5) 0%, rgba(56,134,184,0.7) 10%, rgba(13,87,143,0.7) 50%, rgba(20,95,145,0.7) 100%)',
      backdropFilter: 'blur(10px)',
      borderTop: '1px solid rgba(255,255,255,0.5)',
      boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.3)',
      fontFamily: '"Segoe UI", sans-serif'
    }}>
      
      {/* Start Button */}
      <div 
        className="relative h-full w-[54px] flex items-center justify-center cursor-pointer"
        onClick={() => togglePopup('start')}
      >
        <div className={`start-btn-orb ${startMenuOpen ? 'active' : ''}`} />
      </div>

      {/* Taskbar Items Area */}
      <div className="flex-1 flex items-center px-1 h-full gap-[2px] overflow-hidden">
        {isWindowOpen && (
          <div 
            onClick={onWindowToggle}
            className={`flex flex-shrink-0 items-center justify-center cursor-pointer win7-taskbar-app-btn`}
            style={{
              height: '36px',
              width: '56px',
            }}
          >
            <img src="https://i.postimg.cc/3yb7Ws9M/Google-Chrome-icon-(September-2014)-svg.png" alt="Chrome" className="w-[24px] h-[24px]" />
          </div>
        )}
      </div>

      {/* Tray Area */}
      <div className="flex items-center h-full px-2 gap-[2px] right-tray">
        <div className="flex items-center justify-center w-[24px] cursor-pointer rounded-sm h-[90%] mx-1 win7-taskbar-btn">
          <svg width="10" height="10" viewBox="0 0 16 16">
            <path d="M8 4L2 10h12z" fill="white" stroke="#333" strokeLinejoin="round" strokeWidth="0.5"/>
          </svg>
        </div>
        <div className="flex items-center justify-center w-[24px] cursor-pointer rounded-sm h-[90%] win7-taskbar-btn">
          <img src="https://i.imgur.com/KYLSvgi.png" alt="Security Center" className="w-[18px] object-contain" />
        </div>
        <div className="flex items-center justify-center w-[24px] cursor-pointer rounded-sm h-[90%] win7-taskbar-btn">
          <img src="https://i.imgur.com/Ka93Alq.png" alt="Flag" className="w-[18px] object-contain" />
        </div>
        <div className="flex items-center justify-center w-[24px] cursor-pointer rounded-sm h-[90%] win7-taskbar-btn">
          <img src="https://i.imgur.com/NbdHcuI.png" alt="Network" className="w-[18px] object-contain" />
        </div>
        <div 
          className="flex items-center justify-center w-[24px] cursor-pointer rounded-sm h-[90%] win7-taskbar-btn"
          onClick={() => togglePopup('battery')}
        >
          <img src="https://i.imgur.com/TFBDsbl.png" alt="Battery" className="w-[18px] object-contain" />
        </div>
        <div 
          className="flex items-center justify-center w-[24px] cursor-pointer rounded-sm h-[90%] win7-taskbar-btn"
          onClick={() => togglePopup('volume')}
        >
          <img src={volume === 0 ? "https://i.imgur.com/lHXre07.png" : "https://i.imgur.com/bgNAUJg.png"} alt="Volume" className="w-[20px] object-contain" />
        </div>
        
        {/* DateTime */}
        <div className="flex flex-col items-center justify-center h-[90%] px-2 cursor-pointer text-white leading-tight drop-shadow-md mx-1 win7-taskbar-btn">
          <span style={{ fontSize: '11px' }}>{formatTime(time)}</span>
          <span style={{ fontSize: '11px' }}>{formatDate(time)}</span>
        </div>

        {/* Show Desktop */}
        <div 
          className="h-full flex-shrink-0 cursor-pointer win7-taskbar-btn" 
          onClick={onShowDesktop}
          style={{ width: '16px', borderLeft: '1px solid rgba(255,255,255,0.3)', borderRight: '1px solid rgba(0,0,0,0.1)' }}
        />
      </div>

      {/* --- Popups --- */}
      <div style={{ position: 'absolute', bottom: '40px', left: 0, right: 0, height: 0, pointerEvents: 'none' }}>
      
      {/* Start Menu */}
      {startMenuOpen && (
        <div className="window glass flex flex-col z-[5001]" style={{
           position: 'absolute', bottom: '0px', left: '0px', width: '420px', height: '500px', 
           borderBottom: 'none',
           borderTopLeftRadius: '6px', borderTopRightRadius: '6px',
           padding: '8px 8px 0 8px',
           margin: 0,
           pointerEvents: 'auto'
        }}>
          <div className="flex-1 flex border border-gray-400 rounded-sm shadow-sm" style={{ height: 'calc(100% - 16px)' }}>
            <div className="w-[60%] flex flex-col relative" style={{ background: '#ffffff' }}>
              <div className="flex-1 has-scrollbar p-1 bg-white" style={{ overflowY: 'auto' }}>
                 {[
                   { name: '谷歌浏览器', icon: 'https://i.postimg.cc/3yb7Ws9M/Google-Chrome-icon-(September-2014)-svg.png', arrow: true },
                   { name: '文件资源管理器', icon: 'https://i.imgur.com/nflM56P.png' },
                   { name: '记事本', icon: 'https://i.imgur.com/9gM0eJ4.png' },
                   { name: '命令提示符', icon: 'https://i.imgur.com/xlfayf8.png' },
                   { name: '截图工具', icon: 'https://i.imgur.com/Zp9vfsB.png' },
                   { name: '计算器', icon: 'https://i.imgur.com/Qdxan8e.png' },
                   { name: '主题', icon: 'https://i.imgur.com/TzUcDjA.png' },
                   { name: '关于', icon: 'https://i.imgur.com/sDKDEuL.png' },
                   { name: 'Windows Media Player', icon: 'https://i.imgur.com/7kfFBsW.png', arrow: true }
                 ].map(app => {
                  return (
                  <div key={app.name} className="flex items-center px-1 py-1 mb-1 border border-transparent hover:border-[#98d1ea] hover:bg-[#e0eef8] rounded cursor-pointer gap-2 transition-colors">
                     <div className="w-8 h-8 flex items-center justify-center p-[2px]">
                       <img src={app.icon} alt={app.name} className="w-[26px] h-[26px] object-contain" />
                     </div>
                     <span className="text-black text-[13px] leading-tight flex-1">{app.name}</span>
                     {app.arrow && (
                       <svg width="8" height="10" viewBox="0 0 16 16" fill="black" className="mr-2 opacity-60"><path d="M4 2l8 6-8 6V2z"/></svg>
                     )}
                  </div>
                  );
                })}
              </div>
              <div className="px-3 py-1.5 border-t border-gray-200 hover:bg-[#e0eef8] cursor-pointer text-gray-700 flex items-center gap-2 font-semibold text-xs">
                 <span className="text-[14px]">▶</span>
                 所有程序
              </div>
              <div className="px-2 py-2 border-t border-gray-200">
                <input type="search" placeholder="搜索程序和文件" style={{ width: '100%', padding: '3px 6px', fontSize: '12px', border: '1px solid #a8c1d5', borderRadius: '2px' }} />
              </div>
            </div>
            
            <div className="w-[40%] flex flex-col p-2 relative" style={{ background: 'linear-gradient(to right, #4c6c94 0%, #304e75 100%)', borderLeft: '1px solid #203651' }}>
              {/* Avatar */}
              <div className="absolute -top-[24px] right-3 w-16 h-16 border border-gray-400 rounded bg-white shadow-[0_2px_10px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden p-[2px] z-10" style={{ background: 'linear-gradient(to bottom, #eeeeee, #ffffff)' }}>
                 <img src="https://static.wikitide.net/windowswallpaperwiki/7/7b/User_%28Windows_7%29.png" alt="User" className="w-full h-full object-cover rounded-sm border border-gray-300" />
              </div>
              
              <div className="mt-12 flex flex-col text-white text-[12px] gap-[2px] font-semibold">
                 <div className="py-1 px-3 hover:bg-white/20 cursor-pointer rounded border border-transparent hover:border-white/30 transition-colors shadow-none hover:shadow-inner">Todd Duran</div>
                 <div className="my-[4px] mx-2 border-b border-black/30 shadow-[0_1px_0_rgba(255,255,255,0.1)]" />
                 <div className="py-1 px-3 hover:bg-white/20 cursor-pointer rounded border border-transparent hover:border-white/30 transition-colors shadow-none hover:shadow-inner">文档</div>
                 <div className="py-1 px-3 hover:bg-white/20 cursor-pointer rounded border border-transparent hover:border-white/30 transition-colors shadow-none hover:shadow-inner">图片</div>
                 <div className="py-1 px-3 hover:bg-white/20 cursor-pointer rounded border border-transparent hover:border-white/30 transition-colors shadow-none hover:shadow-inner">音乐</div>
                 <div className="my-[4px] mx-2 border-b border-black/30 shadow-[0_1px_0_rgba(255,255,255,0.1)]" />
                 <div className="py-1 px-3 hover:bg-white/20 cursor-pointer rounded border border-transparent hover:border-white/30 transition-colors shadow-none hover:shadow-inner">计算机</div>
                 <div className="my-[4px] mx-2 border-b border-black/30 shadow-[0_1px_0_rgba(255,255,255,0.1)]" />
                 <div className="py-1 px-3 hover:bg-white/20 cursor-pointer rounded border border-transparent hover:border-white/30 transition-colors shadow-none hover:shadow-inner">控制面板</div>
                 <div className="py-1 px-3 hover:bg-white/20 cursor-pointer rounded border border-transparent hover:border-white/30 transition-colors shadow-none hover:shadow-inner">设备和打印机</div>
                 <div className="py-1 px-3 hover:bg-white/20 cursor-pointer rounded border border-transparent hover:border-white/30 transition-colors shadow-none hover:shadow-inner">默认程序</div>
                 <div className="py-1 px-3 hover:bg-white/20 cursor-pointer rounded border border-transparent hover:border-white/30 transition-colors shadow-none hover:shadow-inner">帮助和支持</div>
              </div>

              <div className="mt-auto px-1 py-2 pb-1 flex justify-end font-sans gap-0 items-center">
                 <button style={{ padding: '2px 10px', height: '24px', marginRight: '-1px' }}>关机</button>
                 <button style={{ padding: '0px 5px', height: '24px', minWidth: '16px' }}><svg width="6" height="8" viewBox="0 0 16 16" fill="currentColor"><path d="M4 2l8 6-8 6V2z"/></svg></button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Volume Popup */}
      {volumeOpen && (
        <div className="window glass z-[5001]" style={{ position: 'absolute', bottom: '0px', right: '60px', width: '90px', margin: 0, pointerEvents: 'auto' }}>
          <div className="title-bar"></div>
          <div className="window-body m-0 flex flex-col items-center justify-between pb-4 pt-4 bg-white shadow-inner" style={{ height: '260px' }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="is-vertical">
                <input className="has-box-indicator" type="range" min="0" max="100" step="1" value={volume} onChange={(e) => setVolume(Number(e.target.value))} style={{ width: '180px', margin: 0 }} />
              </div>
            </div>
            <div className="text-center w-full flex justify-center mt-2">
              <img src={volume === 0 ? "https://i.imgur.com/lHXre07.png" : "https://i.imgur.com/bgNAUJg.png"} alt="Volume" className="w-[36px] object-contain cursor-pointer" onClick={() => setVolume(volume === 0 ? 50 : 0)} />
            </div>
          </div>
        </div>
      )}

      {/* Battery Popup */}
      {batteryOpen && (
        <div className="window glass z-[5001]" style={{ position: 'absolute', bottom: '0px', right: '100px', width: '280px', margin: 0, pointerEvents: 'auto' }}>
          <div className="title-bar"></div>
          <div className="window-body m-0 p-3 pt-3 text-[12px] text-black bg-white shadow-inner">
            <div className="flex items-center gap-3 border-b border-gray-300 pb-3 mb-3">
               <img src="https://i.imgur.com/3lmOKjp.png" alt="Battery popup" className="w-[32px] h-[32px] object-contain" />
               <div>
                  <span className="font-[600]">完全充电 (100%)</span>
               </div>
            </div>
             
            <div className="mb-4 px-1">
               <div className="mb-2">选择电源计划:</div>
               <div className="flex flex-col gap-1">
                 <div className="field-row">
                   <input type="radio" id="plan1" name="plan" defaultChecked />
                   <label htmlFor="plan1">平衡</label>
                 </div>
                 <div className="field-row">
                   <input type="radio" id="plan2" name="plan" />
                   <label htmlFor="plan2">节能</label>
                 </div>
               </div>
            </div>

            <div className="border border-gray-300 bg-[#f8f8f8] p-3 -mx-3 -mb-3 mt-2 shadow-inner">
               <div className="mb-3 pl-1">调整屏幕亮度</div>
               <div className="flex items-center gap-2">
                  <input type="range" min="0" max="100" defaultValue="70" className="flex-1 has-box-indicator w-full" />
               </div>
            </div>
          </div>
        </div>
      )}

      </div>
    </div>
  );
}
