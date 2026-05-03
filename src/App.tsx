import React, { useState, useRef, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import FakeChromeBrowser from './components/FakeChromeBrowser';
import ShadowWrapper from './components/ShadowWrapper';
import Win7Taskbar from './components/Win7Taskbar';

function DesktopIcon({ icon, name, onDoubleClick, selected, onClick, onContextMenu, isShortcut }: { icon: string, name: string, onDoubleClick?: () => void, selected: boolean, onClick: (e: React.MouseEvent) => void, onContextMenu?: (e: React.MouseEvent) => void, isShortcut?: boolean }) {
  return (
    <div 
      className="flex flex-col items-center justify-start w-[76px] p-1 cursor-pointer transition-colors"
      style={{
        border: selected ? '1px solid rgba(102, 167, 232, 0.8)' : '1px solid transparent',
        backgroundColor: selected ? 'rgba(175, 215, 246, 0.5)' : 'transparent',
        borderRadius: '3px',
      }}
      onMouseEnter={(e) => {
        if (!selected) {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
        }
      }}
      onMouseLeave={(e) => {
        if (!selected) {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.borderColor = 'transparent';
        }
      }}
      onClick={(e) => { e.stopPropagation(); onClick(e); }}
      onDoubleClick={(e) => { e.stopPropagation(); onDoubleClick?.(); }}
      onContextMenu={(e) => {
        if (onContextMenu) {
          e.stopPropagation();
          onContextMenu(e);
        }
      }}
    >
      <div className="relative mb-0.5">
        <img src={icon} alt={name} className="w-[46px] h-[46px] object-contain drop-shadow-md" />
        {isShortcut && (
          <img src="https://i.imgur.com/ka8krU8.png" className="absolute bottom-[-3px] left-[-3px] w-[26px] h-[26px]" alt="shortcut" style={{ filter: 'drop-shadow(0px 1px 1px rgba(0,0,0,0.3))' }} />
        )}
      </div>
      <span className="text-white text-[12px] leading-[1.2] text-center max-w-full break-words px-1 rounded-[2px] pt-[2px] pb-[1px]" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 4px rgba(0,0,0,0.6)', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
        {name}
      </span>
    </div>
  );
}

export default function App() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [desktopContextMenu, setDesktopContextMenu] = useState<{ x: number, y: number, type: 'desktop' | 'icon' | null }>({ x: 0, y: 0, type: null });

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if ((e.target as Element).closest('.menu-container')) return;
      setDesktopContextMenu({ x: 0, y: 0, type: null });
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDraggingState, setIsDraggingState] = useState(false);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const posStart = useRef({ x: 0, y: 0 });

  // 拖拽逻辑
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isMaximized) return;
    if ((e.target as HTMLElement).closest('.title-bar-controls')) return;
    isDragging.current = true;
    setIsDraggingState(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    posStart.current = { ...position };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setPosition({ x: posStart.current.x + dx, y: posStart.current.y + dy });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setIsDraggingState(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    // 外层背景
    <div 
      className="min-h-screen flex items-center justify-center p-0 overflow-hidden relative"
      style={{
        backgroundColor: '#000',
        backgroundImage: 'url("https://i.imgur.com/rb2khE6.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onClick={() => { setSelectedIcon(null); setDesktopContextMenu({ x: 0, y: 0, type: null }); }}
      onContextMenu={(e) => {
        e.preventDefault();
        const menuWidth = 192;
        const menuHeight = 250;
        const x = Math.min(e.clientX, window.innerWidth - menuWidth);
        const y = Math.min(e.clientY, window.innerHeight - menuHeight);
        setDesktopContextMenu({ x, y, type: 'desktop' });
      }}
    >
      
      {/* 桌面图标 */}
      <div className="absolute top-0 left-0 bottom-[40px] w-full p-2 flex flex-col flex-wrap items-start justify-start gap-1 content-start" style={{ zIndex: 10 }}>
        <DesktopIcon 
          icon="https://i.imgur.com/fuVF6sB.png" 
          name="计算机" 
          selected={selectedIcon === 'computer'}
          onClick={() => { setSelectedIcon('computer'); setDesktopContextMenu({ x: 0, y: 0, type: null }); }}
          onContextMenu={(e) => {
            e.preventDefault();
            setSelectedIcon('computer');
            const menuWidth = 192;
            const menuHeight = 250;
            const x = Math.min(e.clientX, window.innerWidth - menuWidth);
            const y = Math.min(e.clientY, window.innerHeight - menuHeight);
            setDesktopContextMenu({ x, y, type: 'icon' });
          }}
        />
        <DesktopIcon 
          icon="https://i.imgur.com/49DPIQY.png" 
          name="网络" 
          selected={selectedIcon === 'network'}
          onClick={() => { setSelectedIcon('network'); setDesktopContextMenu({ x: 0, y: 0, type: null }); }}
          onContextMenu={(e) => {
            e.preventDefault();
            setSelectedIcon('network');
            const menuWidth = 192;
            const menuHeight = 250;
            const x = Math.min(e.clientX, window.innerWidth - menuWidth);
            const y = Math.min(e.clientY, window.innerHeight - menuHeight);
            setDesktopContextMenu({ x, y, type: 'icon' });
          }}
        />
        <DesktopIcon 
          icon="https://i.imgur.com/jMvgVcg.png" 
          name="回收站" 
          selected={selectedIcon === 'recycle'}
          onClick={() => { setSelectedIcon('recycle'); setDesktopContextMenu({ x: 0, y: 0, type: null }); }}
          onContextMenu={(e) => {
            e.preventDefault();
            setSelectedIcon('recycle');
            const menuWidth = 192;
            const menuHeight = 250;
            const x = Math.min(e.clientX, window.innerWidth - menuWidth);
            const y = Math.min(e.clientY, window.innerHeight - menuHeight);
            setDesktopContextMenu({ x, y, type: 'icon' });
          }}
        />
        <DesktopIcon 
          icon="https://i.imgur.com/6RKnWhl.png" 
          name="学业" 
          selected={selectedIcon === 'school'}
          onClick={() => { setSelectedIcon('school'); setDesktopContextMenu({ x: 0, y: 0, type: null }); }}
          onContextMenu={(e) => {
            e.preventDefault();
            setSelectedIcon('school');
            const menuWidth = 192;
            const menuHeight = 250;
            const x = Math.min(e.clientX, window.innerWidth - menuWidth);
            const y = Math.min(e.clientY, window.innerHeight - menuHeight);
            setDesktopContextMenu({ x, y, type: 'icon' });
          }}
        />
        <DesktopIcon 
          icon="https://i.imgur.com/WRz3CzF.png" 
          name="阜阳回忆2014.MP4" 
          selected={selectedIcon === 'video'}
          onClick={() => { setSelectedIcon('video'); setDesktopContextMenu({ x: 0, y: 0, type: null }); }}
          onContextMenu={(e) => {
            e.preventDefault();
            setSelectedIcon('video');
            const menuWidth = 192;
            const menuHeight = 250;
            const x = Math.min(e.clientX, window.innerWidth - menuWidth);
            const y = Math.min(e.clientY, window.innerHeight - menuHeight);
            setDesktopContextMenu({ x, y, type: 'icon' });
          }}
        />
        <DesktopIcon 
          icon="https://i.postimg.cc/3yb7Ws9M/Google-Chrome-icon-(September-2014)-svg.png" 
          name="谷歌浏览器" 
          selected={selectedIcon === 'chrome'}
          onClick={() => { setSelectedIcon('chrome'); setDesktopContextMenu({ x: 0, y: 0, type: null }); }}
          onDoubleClick={() => setIsClosed(false)}
          onContextMenu={(e) => {
            e.preventDefault();
            setSelectedIcon('chrome');
            const menuWidth = 192;
            const menuHeight = 250;
            const x = Math.min(e.clientX, window.innerWidth - menuWidth);
            const y = Math.min(e.clientY, window.innerHeight - menuHeight);
            setDesktopContextMenu({ x, y, type: 'icon' });
          }}
          isShortcut
        />
        <DesktopIcon 
          icon="https://i.imgur.com/A1PUH2m.png" 
          name="Internet Explorer" 
          selected={selectedIcon === 'ie'}
          onClick={() => { setSelectedIcon('ie'); setDesktopContextMenu({ x: 0, y: 0, type: null }); }}
          onContextMenu={(e) => {
            e.preventDefault();
            setSelectedIcon('ie');
            const menuWidth = 192;
            const menuHeight = 250;
            const x = Math.min(e.clientX, window.innerWidth - menuWidth);
            const y = Math.min(e.clientY, window.innerHeight - menuHeight);
            setDesktopContextMenu({ x, y, type: 'icon' });
          }}
          isShortcut
        />
      </div>

      {/* Windows 7 Aero 窗口主体 */}
      {!isClosed && (
        <div 
          className={`window glass active ${isDraggingState ? '' : 'transition-all duration-200'}`}
          onContextMenu={(e) => { e.preventDefault(); e.stopPropagation(); }}
          onClick={() => setDesktopContextMenu({ x: 0, y: 0, type: null })}
          style={{ 
            width: isMaximized ? '100vw' : '1280px', 
            height: isMaximized ? '100vh' : '720px',
            position: isMaximized ? 'fixed' : 'absolute',
            top: isMaximized ? 0 : 'auto',
            left: isMaximized ? 0 : 'auto',
            transform: !isMaximized ? `translate(${position.x}px, ${position.y}px)` : 'none',
            display: isMinimized ? 'none' : 'flex',
            flexDirection: 'column',
            zIndex: 100,
            borderRadius: isMaximized ? '0' : '8px'
          }}
        >
          {/* Win7 标题栏 */}
          <div 
            className="title-bar" 
            style={{ backgroundAttachment: 'local', cursor: isMaximized ? 'default' : 'move' }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            <div className="title-bar-text flex items-center gap-2">
              <img src="https://i.postimg.cc/3yb7Ws9M/Google-Chrome-icon-(September-2014)-svg.png" alt="谷歌浏览器" className="w-4 h-4" />
              谷歌浏览器
            </div>
            
            <div className="title-bar-controls">
              <button aria-label="Minimize" onClick={() => setIsMinimized(true)}></button>
              {/* 根据最大化状态切换按钮图标 */}
              <button 
                aria-label={isMaximized ? "Restore" : "Maximize"} 
                onClick={() => setIsMaximized(!isMaximized)}
              ></button>
              <button aria-label="Close" onClick={() => setIsClosed(true)}></button>
            </div>
          </div>

          {/* 窗口主体：内含 Chrome 仿真器 */}
          <div className="window-body" style={{ margin: 0, padding: 0, flexGrow: 1, display: 'flex', overflow: 'hidden' }}>
            <ShadowWrapper>
              <FakeChromeBrowser 
                // 传入这些 prop 确保 Chrome 内部按钮也能控制外壳
                onMinimize={() => setIsMinimized(true)}
                onMaximize={() => setIsMaximized(!isMaximized)}
                onClose={() => setIsClosed(true)}
              />
            </ShadowWrapper>
          </div>
        </div>
      )}

      {/* Desktop Context Menu */}
      {desktopContextMenu.type === 'desktop' && (
        <div 
          className="absolute bg-[#f2f2f2] border border-gray-300 shadow-[2px_2px_5px_rgba(0,0,0,0.2)] py-1 z-[10000] text-xs text-gray-800 w-48 font-['Segoe_UI',sans-serif] menu-container"
          style={{ top: desktopContextMenu.y, left: desktopContextMenu.x }}
          onContextMenu={(e) => e.preventDefault()}
        >
          <div className="px-6 py-1 hover:bg-[#91c9f7] hover:text-black cursor-default flex items-center justify-between">
            <span>查看</span> <span className="text-gray-500">▶</span>
          </div>
          <div className="px-6 py-1 hover:bg-[#91c9f7] hover:text-black cursor-default flex items-center justify-between">
            <span>排序方式</span> <span className="text-gray-500">▶</span>
          </div>
          <div className="px-6 py-1 hover:bg-[#91c9f7] hover:text-black cursor-default flex items-center">刷新</div>
          
          <div className="h-px bg-gray-300 my-1 mx-1" />
          
          <div className="px-6 py-1 text-gray-400 cursor-default flex items-center">粘贴</div>
          <div className="px-6 py-1 text-gray-400 cursor-default flex items-center">粘贴快捷方式</div>
          
          <div className="h-px bg-gray-300 my-1 mx-1" />
          
          <div className="px-2 py-1 hover:bg-[#91c9f7] hover:text-black cursor-default flex items-center gap-2">
            <img src="https://img.icons8.com/color/18/000000/monitor--v1.png" alt="" className="w-4 h-4"/>
            <span>屏幕分辨率</span>
          </div>
          <div className="px-2 py-1 hover:bg-[#91c9f7] hover:text-black cursor-default flex items-center gap-2">
            <img src="https://img.icons8.com/color/18/000000/virtual-machine2.png" alt="" className="w-4 h-4" />
            <span>小工具</span>
          </div>
          <div className="px-2 py-1 hover:bg-[#91c9f7] hover:text-black cursor-default flex items-center gap-2">
            <img src="https://img.icons8.com/color/18/000000/remote-desktop.png" alt="" className="w-4 h-4" />
            <span>个性化</span>
          </div>
        </div>
      )}

      {/* Icon Context Menu */}
      {desktopContextMenu.type === 'icon' && (
        <div 
          className="absolute bg-[#f2f2f2] border border-gray-300 shadow-[2px_2px_5px_rgba(0,0,0,0.2)] py-1 z-[10000] text-xs text-gray-800 w-48 font-['Segoe_UI',sans-serif] menu-container"
          style={{ top: desktopContextMenu.y, left: desktopContextMenu.x }}
          onContextMenu={(e) => e.preventDefault()}
        >
          <div 
            className="px-6 py-1 hover:bg-[#91c9f7] hover:text-black cursor-default flex items-center font-bold"
            onClick={(e) => { e.preventDefault(); if (selectedIcon === 'chrome') setIsClosed(false); setDesktopContextMenu({x:0,y:0,type:null}); }}
          >
            打开
          </div>
          <div className="px-6 py-1 hover:bg-[#91c9f7] hover:text-black cursor-default flex items-center">
            打开文件所在的位置
          </div>
          <div className="h-px bg-gray-300 my-1 mx-1" />
          <div className="px-6 py-1 text-gray-400 cursor-default flex items-center">从任��栏取消固定</div>
          <div className="h-px bg-gray-300 my-1 mx-1" />
          <div className="px-6 py-1 hover:bg-[#91c9f7] hover:text-black cursor-default flex items-center">剪切</div>
          <div className="px-6 py-1 hover:bg-[#91c9f7] hover:text-black cursor-default flex items-center">复制</div>
          <div className="h-px bg-gray-300 my-1 mx-1" />
          <div className="px-6 py-1 hover:bg-[#91c9f7] hover:text-black cursor-default flex items-center">创建快捷方式</div>
          <div className="px-6 py-1 hover:bg-[#91c9f7] hover:text-black cursor-default flex items-center">删除</div>
          <div className="px-6 py-1 hover:bg-[#91c9f7] hover:text-black cursor-default flex items-center">重命名</div>
          <div className="h-px bg-gray-300 my-1 mx-1" />
          <div className="px-6 py-1 text-gray-400 cursor-default flex items-center">属性</div>
        </div>
      )}

      {/* 底部任务栏模拟 */}
      <Win7Taskbar 
        isWindowOpen={!isClosed} 
        isMinimized={isMinimized} 
        onWindowToggle={() => {
          if (isMinimized) {
            setIsMinimized(false);
          } else {
            setIsMinimized(true);
          }
        }} 
        onShowDesktop={() => setIsMinimized(true)}
      />
      <Analytics />
    </div>
  );
}