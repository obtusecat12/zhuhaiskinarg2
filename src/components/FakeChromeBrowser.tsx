import React, { useState, FormEvent, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  RotateCw, 
  Home, 
  Star, 
  MoreVertical, 
  Minus, 
  Square, 
  X,
  Lock,
  FileText,
  Search,
  Mic
} from 'lucide-react';

interface FakeChromeBrowserProps {
  onMinimize?: () => void;
  onMaximize?: () => void;
  onClose?: () => void;
  onPointerDown?: (e: React.PointerEvent<HTMLDivElement>) => void;
  onPointerMove?: (e: React.PointerEvent<HTMLDivElement>) => void;
  onPointerUp?: (e: React.PointerEvent<HTMLDivElement>) => void;
}

interface Tab {
  id: string;
  history: string[];
  currentIndex: number;
  title: string;
  isLoading: boolean;
}

export default function FakeChromeBrowser({
  onMinimize,
  onMaximize,
  onClose,
  onPointerDown,
  onPointerMove,
  onPointerUp
}: FakeChromeBrowserProps) {
  const [tabs, setTabs] = useState<Tab[]>([
    { id: '1', history: ['chrome://newtab'], currentIndex: 0, title: '新标签页', isLoading: false }
  ]);
  const [activeTabId, setActiveTabId] = useState('1');
  const [inputUrl, setInputUrl] = useState('');
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookmarkOpen, setIsBookmarkOpen] = useState(false);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; isOpen: boolean }>({ x: 0, y: 0, isOpen: false });

  const menuRef = useRef<HTMLDivElement>(null);
  const bookmarkRef = useRef<HTMLDivElement>(null);
  const contextMenuRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeTab = tabs.find(t => t.id === activeTabId) || tabs[0];
  const currentUrl = activeTab.history[activeTab.currentIndex];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const path = event.composedPath();
      if (menuRef.current && !path.includes(menuRef.current)) {
        setIsMenuOpen(false);
      }
      if (bookmarkRef.current && !path.includes(bookmarkRef.current)) {
        setIsBookmarkOpen(false);
      }
      if (contextMenuRef.current && !path.includes(contextMenuRef.current)) {
        setContextMenu(prev => ({ ...prev, isOpen: false }));
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNewTab = () => {
    const newId = Date.now().toString();
    setTabs([...tabs, { id: newId, history: ['chrome://newtab'], currentIndex: 0, title: '新标签页', isLoading: false }]);
    setActiveTabId(newId);
    setInputUrl('');
  };

  const handleCloseTab = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (tabs.length === 1) {
      onClose?.();
      return;
    }
    const newTabs = tabs.filter(t => t.id !== id);
    setTabs(newTabs);
    if (activeTabId === id) {
      const newActive = newTabs[newTabs.length - 1];
      setActiveTabId(newActive.id);
      const url = newActive.history[newActive.currentIndex];
      setInputUrl(url === 'chrome://newtab' ? '' : url);
    }
  };

  const handleTabClick = (id: string) => {
    setActiveTabId(id);
    const tab = tabs.find(t => t.id === id);
    if (tab) {
      const url = tab.history[tab.currentIndex];
      setInputUrl(url === 'chrome://newtab' ? '' : url);
    }
  };

  const getTitleForUrl = (url: string) => {
    if (url.includes('purpleisland.com')) return '紫岛揭示板';
    if (url.includes('timeachieve.org')) return '时光档案馆';
    if (url === 'chrome://newtab') return '新标签页';
    return url;
  };

  const handleNavigate = (e: FormEvent | string) => {
    if (typeof e !== 'string') e.preventDefault();
    let finalUrl = typeof e === 'string' ? e : inputUrl.trim();
    if (!finalUrl) finalUrl = 'chrome://newtab';
    
    if (finalUrl === 'www.purpleisland.com' || finalUrl === 'purpleisland.com') {
      finalUrl = 'https://www.purpleisland.com/Forum';
      setInputUrl(finalUrl);
    } else if (finalUrl === 'timeachieve.org' || finalUrl === 'www.timeachieve.org') {
      finalUrl = 'timeachieve.org';
      setInputUrl(finalUrl);
    }
    
    setTabs(tabs.map(t => {
      if (t.id === activeTabId) {
        const newHistory = t.history.slice(0, t.currentIndex + 1);
        newHistory.push(finalUrl);
        return { ...t, history: newHistory, currentIndex: newHistory.length - 1, isLoading: true, title: '加载中...' };
      }
      return t;
    }));

    setTimeout(() => {
      setTabs(prev => prev.map(t => {
        if (t.id === activeTabId) {
          return { ...t, isLoading: false, title: getTitleForUrl(finalUrl) };
        }
        return t;
      }));
    }, 500);
  };

  const handleBack = () => {
    if (activeTab.currentIndex > 0) {
      const newIndex = activeTab.currentIndex - 1;
      const url = activeTab.history[newIndex];
      setInputUrl(url === 'chrome://newtab' ? '' : url);
      
      setTabs(tabs.map(t => {
        if (t.id === activeTabId) {
          return { ...t, currentIndex: newIndex, isLoading: true, title: 'Loading...' };
        }
        return t;
      }));
      
      setTimeout(() => {
        setTabs(prev => prev.map(t => {
          if (t.id === activeTabId) {
            return { ...t, isLoading: false, title: getTitleForUrl(url) };
          }
          return t;
        }));
      }, 500);
    }
  };

  const handleForward = () => {
    if (activeTab.currentIndex < activeTab.history.length - 1) {
      const newIndex = activeTab.currentIndex + 1;
      const url = activeTab.history[newIndex];
      setInputUrl(url === 'chrome://newtab' ? '' : url);
      
      setTabs(tabs.map(t => {
        if (t.id === activeTabId) {
          return { ...t, currentIndex: newIndex, isLoading: true, title: 'Loading...' };
        }
        return t;
      }));
      
      setTimeout(() => {
        setTabs(prev => prev.map(t => {
          if (t.id === activeTabId) {
            return { ...t, isLoading: false, title: getTitleForUrl(url) };
          }
          return t;
        }));
      }, 500);
    }
  };

  const handleRefresh = () => {
    setTabs(tabs.map(t => {
      if (t.id === activeTabId) {
        return { ...t, isLoading: true, title: '加载中...' };
      }
      return t;
    }));
    
    setTimeout(() => {
      setTabs(prev => prev.map(t => {
        if (t.id === activeTabId) {
          const url = t.history[t.currentIndex];
          return { ...t, isLoading: false, title: getTitleForUrl(url) };
        }
        return t;
      }));
    }, 500);
  };

  const handleHome = () => {
    setInputUrl('');
    handleNavigate('chrome://newtab');
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.min(e.clientX - rect.left, rect.width - 250);
    const y = Math.min(e.clientY - rect.top, rect.height - 300);
    setContextMenu({ x, y, isOpen: true });
  };

  const renderContent = () => {
    if (activeTab.isLoading) {
      return (
        <div className="flex-1 bg-white flex items-center justify-center" onContextMenu={handleContextMenu}>
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      );
    }

    if (currentUrl === 'chrome://newtab') {
      return (
        <div className="flex-1 bg-white flex flex-col items-center pt-24" onContextMenu={handleContextMenu}>
          {/* Classic Ooogle Logo */}
          <img src="https://i.postimg.cc/QxNXThLF/Generated-Image-March-21-2026-2-10AM.png" alt="Ooogle" className="h-24 mb-8 object-contain" />
          
          {/* Search Box */}
          <div className="w-full max-w-[584px] flex items-center border border-gray-200 hover:shadow-md rounded-full px-4 py-3 mb-10 transition-shadow">
            <Search size={20} className="text-gray-400 mr-3" />
            <input type="text" className="flex-1 outline-none text-base" placeholder="在 Ooogle 上搜索，或者输入一个网址" />
            <Mic size={20} className="text-blue-500 ml-3 cursor-pointer" />
          </div>

          {/* 4 Thumbnails (2016 style) */}
          <div className="grid grid-cols-4 gap-4 max-w-[600px]">
            <div className="flex flex-col items-center group cursor-pointer" onClick={() => handleNavigate('www.fakebook.com')}>
              <div className="w-[120px] h-[90px] bg-gray-100 border border-gray-200 rounded hover:border-gray-300 hover:shadow-sm transition-all flex items-center justify-center overflow-hidden relative">
                <img src="https://i.postimg.cc/yJPxn6Kv/fakebook.jpg" alt="Fakebook" className="w-full h-full object-cover" />
              </div>
              <span className="text-xs text-gray-700 mt-2 truncate w-full text-center group-hover:underline">Fakebook</span>
            </div>
            
            <div className="flex flex-col items-center group cursor-pointer" onClick={() => handleNavigate('www.twit-err.com')}>
              <div className="w-[120px] h-[90px] bg-gray-100 border border-gray-200 rounded hover:border-gray-300 hover:shadow-sm transition-all flex items-center justify-center overflow-hidden relative">
                <img src="https://i.postimg.cc/f3Ky5Ws8/twit-err.jpg" alt="Twit-err" className="w-full h-full object-cover" />
              </div>
              <span className="text-xs text-gray-700 mt-2 truncate w-full text-center group-hover:underline">Twit-err</span>
            </div>
            
            <div className="flex flex-col items-center group cursor-pointer" onClick={() => handleNavigate('www.wikipaydia.org')}>
              <div className="w-[120px] h-[90px] bg-gray-100 border border-gray-200 rounded hover:border-gray-300 hover:shadow-sm transition-all flex items-center justify-center overflow-hidden relative">
                <img src="https://i.postimg.cc/GBQtz3RM/wikipaydia.jpg" alt="Wikipaydia" className="w-full h-full object-cover" />
              </div>
              <span className="text-xs text-gray-700 mt-2 truncate w-full text-center group-hover:underline">Wikipaydia</span>
            </div>
            
            <div className="flex flex-col items-center group cursor-pointer" onClick={() => handleNavigate('www.youtrap.com')}>
              <div className="w-[120px] h-[90px] bg-gray-100 border border-gray-200 rounded hover:border-gray-300 hover:shadow-sm transition-all flex items-center justify-center overflow-hidden relative">
                <img src="https://i.postimg.cc/kVcGwMCw/youtrap.jpg" alt="YouTrap" className="w-full h-full object-cover" />
              </div>
              <span className="text-xs text-gray-700 mt-2 truncate w-full text-center group-hover:underline">YouTrap</span>
            </div>
          </div>
        </div>
      );
    }

    if (currentUrl.includes('purpleisland.com/Forum')) {
      return (
        <iframe 
          src="/island/index.html"
          className="w-full h-full border-none"
          title="紫岛揭示板"
        />
      );
    }

    if (currentUrl.includes('timeachieve.org')) {
      return (
        <iframe 
          src="/webachieve/index.html"
          className="w-full h-full border-none"
          title="时光档案馆"
        />
      );
    }

    // Error Page (Dinosaur)
    return (
      <div className="flex-1 bg-white flex flex-col items-start justify-center pl-[15%] pr-8" onContextMenu={handleContextMenu}>
        <div className="mb-6 text-gray-500">
          <img src="https://i.postimg.cc/Wqq42NP8/Chromium-T-Rex-error-offline-svg.png" alt="Offline Dinosaur" width="44" height="45" className="opacity-50" />
        </div>
        <h2 className="text-[22px] text-gray-800 mb-4 font-normal">无法访问此网站</h2>
        <p className="text-gray-600 mb-4">找不到 <strong>{currentUrl}</strong> 的服务器 IP 地址。</p>
        
        <ul className="text-gray-600 text-sm list-disc pl-5 mb-8 space-y-1">
          <li>在 Ooogle 上搜索 {currentUrl.split('.')[0] || currentUrl}</li>
        </ul>
        
        <p className="text-gray-400 text-xs font-mono">ERR_NAME_NOT_RESOLVED</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full h-full overflow-hidden font-sans bg-white relative" style={{ margin: 0, padding: 0 }}>
      {/* Tabs Area */}
      <div 
        className="chrome-tab-container select-none"
        onPointerDown={(e) => {
          if ((e.target as HTMLElement).closest('.window-control-btn') || (e.target as HTMLElement).closest('.chrome-tab') || (e.target as HTMLElement).closest('button')) {
            return;
          }
          onPointerDown?.(e);
        }}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{ WebkitAppRegion: 'drag', touchAction: 'none', paddingTop: '10px' } as React.CSSProperties}
      >
        <div className="flex items-end pl-2 pr-2 w-full">
        {tabs.map((tab) => (
            <div 
              key={tab.id}
              className={`chrome-tab ${activeTabId === tab.id ? 'active' : ''}`} 
              style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}
              onClick={() => handleTabClick(tab.id)}
            >
              <div className="chrome-tab-bg"></div>
              <div className="chrome-tab-content">
                <div className="flex items-center space-x-2 overflow-hidden">
                  {tab.isLoading ? (
                    <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin flex-shrink-0"></div>
                  ) : tab.history[tab.currentIndex].includes('purpleisland.com') ? (
                    <div className="w-4 h-4 bg-purple-500 rounded-sm flex-shrink-0"></div>
                  ) : tab.history[tab.currentIndex].includes('timeachieve.org') ? (
                    <div className="w-4 h-4 bg-blue-500 rounded-sm flex-shrink-0"></div>
                  ) : tab.history[tab.currentIndex] === 'chrome://newtab' ? (
                    <div className="w-4 h-4 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                  ) : (
                    <FileText size={14} className="text-gray-500 flex-shrink-0" />
                  )}
                  <span className="truncate text-xs font-medium text-gray-800">{tab.title}</span>
                </div>
                <button 
                  onClick={(e) => handleCloseTab(e, tab.id)}
                  className="w-4 h-4 rounded-full hover:bg-gray-300 flex items-center justify-center ml-2 text-gray-600 transition-colors"
                >
                  <X size={12} />
                </button>
              </div>
            </div>
          ))}
          
          {/* New Tab Button */}
          <button 
            onClick={handleNewTab}
            className="w-7 h-7 ml-3 mb-1 rounded-full hover:bg-black/10 flex items-center justify-center text-gray-600 transition-colors z-10"
            title="New tab"
          >
            <div className="w-3 h-3 relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-current -translate-y-1/2"></div>
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-current -translate-x-1/2"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="chrome-toolbar" style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}>
        <div className="flex items-center space-x-1">
          <button 
            className={`chrome-icon-btn ${activeTab.currentIndex > 0 ? '' : 'text-gray-400'}`} 
            disabled={activeTab.currentIndex === 0}
            onClick={handleBack} 
            title="Click to go back"
          >
            <ArrowLeft size={16} />
          </button>
          <button 
            className={`chrome-icon-btn ${activeTab.currentIndex < activeTab.history.length - 1 ? '' : 'text-gray-400'}`} 
            disabled={activeTab.currentIndex === activeTab.history.length - 1}
            onClick={handleForward} 
            title="Click to go forward"
          >
            <ArrowRight size={16} />
          </button>
          <button className="chrome-icon-btn" onClick={handleRefresh} title="Reload this page">
            <RotateCw size={16} className={activeTab.isLoading ? "animate-spin" : ""} />
          </button>
          <button className="chrome-icon-btn" onClick={handleHome} title="Open the home page">
            <Home size={16} />
          </button>
        </div>

        <form onSubmit={handleNavigate} className="chrome-address-bar relative">
          {currentUrl.includes('purpleisland.com') || currentUrl.includes('timeachieve.org') ? (
            <div className="text-green-600 mr-2 flex items-center space-x-1">
              <Lock size={12} />
              <span className="text-xs font-medium">Secure</span>
            </div>
          ) : null}
          {!currentUrl.includes('purpleisland.com') && !currentUrl.includes('timeachieve.org') && currentUrl !== 'chrome://newtab' && (
            <FileText size={14} className="text-gray-400 mr-2" />
          )}
          {(currentUrl.includes('purpleisland.com') || currentUrl.includes('timeachieve.org')) && <span className="text-gray-400 text-sm mr-1">https://</span>}
          <input
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-sm text-gray-800"
            spellCheck={false}
          />
          <div className="relative" ref={bookmarkRef}>
            <button 
              type="button" 
              onClick={() => setIsBookmarkOpen(!isBookmarkOpen)}
              className="text-gray-400 hover:text-gray-600 p-1"
              title="Bookmark this page"
            >
              <Star size={16} />
            </button>
            
            {/* Bookmark Dialog */}
            {isBookmarkOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 bg-white border border-gray-300 shadow-xl rounded p-4 z-50">
                <h3 className="text-base font-medium mb-3">已添加书签</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <label className="w-16 text-sm text-gray-600">名称</label>
                    <input type="text" className="flex-1 border border-blue-500 rounded px-2 py-1 text-sm outline-none" defaultValue={activeTab.title} />
                  </div>
                  <div className="flex items-center">
                    <label className="w-16 text-sm text-gray-600">文件夹</label>
                    <select className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm outline-none bg-white">
                      <option>书签栏</option>
                      <option>其他书签</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end space-x-2 mt-4">
                  <button type="button" className="px-4 py-1.5 border border-gray-300 rounded text-sm hover:bg-gray-50" onClick={() => setIsBookmarkOpen(false)}>移除</button>
                  <button type="button" className="px-4 py-1.5 bg-blue-500 text-white rounded text-sm hover:bg-blue-600" onClick={() => setIsBookmarkOpen(false)}>完成</button>
                </div>
              </div>
            )}
          </div>
        </form>

        <div className="flex items-center ml-1 relative" ref={menuRef}>
          <button 
            className={`chrome-icon-btn ${isMenuOpen ? 'bg-gray-200' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            title="Customize and control Ooogle Chrome"
          >
            <MoreVertical size={16} />
          </button>

          {/* Three-dot Menu Dropdown */}
          {isMenuOpen && (
            <div className="chrome-menu">
              <div className="chrome-menu-item" onClick={() => { handleNewTab(); setIsMenuOpen(false); }}>
                <span>New tab</span>
                <span className="text-gray-400 text-xs">Ctrl+T</span>
              </div>
              <div className="chrome-menu-item">
                <span>New window</span>
                <span className="text-gray-400 text-xs">Ctrl+N</span>
              </div>
              <div className="chrome-menu-item">
                <span>New incognito window</span>
                <span className="text-gray-400 text-xs">Ctrl+Shift+N</span>
              </div>
              <div className="chrome-menu-divider"></div>
              <div className="chrome-menu-item">
                <span>History</span>
                <span className="text-gray-400 flex items-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </span>
              </div>
              <div className="chrome-menu-item">
                <span>Downloads</span>
                <span className="text-gray-400 text-xs">Ctrl+J</span>
              </div>
              <div className="chrome-menu-item">
                <span>Bookmarks</span>
                <span className="text-gray-400 flex items-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </span>
              </div>
              <div className="chrome-menu-divider"></div>
              <div className="chrome-menu-item">
                <span>Zoom</span>
                <div className="flex items-center space-x-2">
                  <button className="w-6 h-6 rounded-full hover:bg-gray-200 flex items-center justify-center">-</button>
                  <span>100%</span>
                  <button className="w-6 h-6 rounded-full hover:bg-gray-200 flex items-center justify-center">+</button>
                </div>
              </div>
              <div className="chrome-menu-item">
                <span>Print...</span>
                <span className="text-gray-400 text-xs">Ctrl+P</span>
              </div>
              <div className="chrome-menu-item">
                <span>Find...</span>
                <span className="text-gray-400 text-xs">Ctrl+F</span>
              </div>
              <div className="chrome-menu-item">
                <span>More tools</span>
                <span className="text-gray-400 flex items-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </span>
              </div>
              <div className="chrome-menu-divider"></div>
              <div className="chrome-menu-item">
                <span>Settings</span>
              </div>
              <div className="chrome-menu-item">
                <span>Help</span>
                <span className="text-gray-400 flex items-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </span>
              </div>
              <div className="chrome-menu-item">
                <span>Exit</span>
                <span className="text-gray-400 text-xs">Ctrl+Shift+Q</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bookmarks Bar */}
      <div className="flex items-center px-3 py-1 bg-white border-b border-gray-200 text-xs text-gray-600 space-x-4" style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}>
        <button className="hover:bg-gray-100 px-2 py-1 rounded flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
          <span>Internal Tools</span>
        </button>
        <button className="hover:bg-gray-100 px-2 py-1 rounded flex items-center space-x-2">
          <div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>
          <span>Employee Directory</span>
        </button>
      </div>

      {/* Content Area */}
      <div ref={containerRef} className="flex-1 relative bg-white overflow-hidden flex flex-col" style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}>
        {renderContent()}

        {/* Custom Context Menu */}
        {contextMenu.isOpen && (
          <div 
            ref={contextMenuRef}
            className="absolute bg-white border border-gray-300 shadow-lg rounded-sm py-1 z-50 text-sm text-gray-800 w-64"
            style={{ top: contextMenu.y, left: contextMenu.x }}
          >
            <div className="px-4 py-1.5 hover:bg-gray-100 cursor-default flex items-center justify-between text-gray-400">
              <span>返回</span>
              <span className="text-xs">Alt+向左箭头</span>
            </div>
            <div className="px-4 py-1.5 hover:bg-gray-100 cursor-default flex items-center justify-between text-gray-400">
              <span>前进</span>
              <span className="text-xs">Alt+向右箭头</span>
            </div>
            <div className="px-4 py-1.5 hover:bg-gray-100 cursor-default flex items-center justify-between" onClick={() => handleNavigate({ preventDefault: () => {} } as FormEvent)}>
              <span>重新加载</span>
              <span className="text-gray-400 text-xs">Ctrl+R</span>
            </div>
            <div className="h-px bg-gray-200 my-1"></div>
            <div className="px-4 py-1.5 hover:bg-gray-100 cursor-default">
              <span>另存为...</span>
              <span className="text-gray-400 text-xs float-right">Ctrl+S</span>
            </div>
            <div className="px-4 py-1.5 hover:bg-gray-100 cursor-default">
              <span>打印...</span>
              <span className="text-gray-400 text-xs float-right">Ctrl+P</span>
            </div>
            <div className="h-px bg-gray-200 my-1"></div>
            <div className="px-4 py-1.5 hover:bg-gray-100 cursor-default">
              <span>翻成简体中文</span>
            </div>
            <div className="h-px bg-gray-200 my-1"></div>
            <div className="px-4 py-1.5 hover:bg-gray-100 cursor-default">
              <span>查看网页源代码</span>
              <span className="text-gray-400 text-xs float-right">Ctrl+U</span>
            </div>
            <div className="px-4 py-1.5 hover:bg-gray-100 cursor-default">
              <span>检查</span>
              <span className="text-gray-400 text-xs float-right">Ctrl+Shift+I</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
