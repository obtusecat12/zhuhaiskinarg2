import React, { useState } from 'react';
import { 
  WordmarkIcon, WebIcon, TextsIcon, VideoIcon, 
  AudioIcon, SoftwareIcon, ImagesIcon, DonateIcon, MoreIcon, 
  UploadIcon, SearchIcon, DonateHeartIcon, ToolsIcon
} from './Icons';

const TopNav: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuItems = [
    { id: 'web', label: '网页', icon: WebIcon, color: 'hover:fill-[#ffcd27]' },
    { id: 'texts', label: '文本', icon: TextsIcon, color: 'hover:fill-[#faab3c]', hasDropdown: true },
    { id: 'video', label: '视频', icon: VideoIcon, color: 'hover:fill-[#f1644b]', hasDropdown: true },
    { id: 'audio', label: '音频', icon: AudioIcon, color: 'hover:fill-[#00adef]', hasDropdown: true },
    { id: 'software', label: '软件', icon: SoftwareIcon, color: 'hover:fill-[#9ecc4f]', hasDropdown: true },
    { id: 'images', label: '图像', icon: ImagesIcon, color: 'hover:fill-[#aa99c9]', hasDropdown: true },
    { id: 'donate', label: '捐赠', icon: DonateIcon, color: 'hover:fill-[#f00]' },
    { id: 'more', label: '更多', icon: MoreIcon, color: 'hover:fill-[#fff]' },
  ];

  return (
    <div 
      className="text-white sticky top-0 z-50 shadow-lg" 
      style={{
        background: 'linear-gradient(to bottom, #2d2d2d 0%, #1a1a1a 50%, #000000 51%, #111111 100%)',
        borderBottom: '1px solid #444',
        boxShadow: '0 2px 5px rgba(0,0,0,0.5)'
      }}
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* Top Highlight Stroke */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[rgba(255,255,255,0.2)] pointer-events-none"></div>
      
      <div className="flex items-center h-[54px] px-4 max-w-[1400px] mx-auto relative z-10">
        
        {/* Branding */}
        <a href="#" onMouseEnter={() => setActiveMenu(null)} onClick={(e) => { e.preventDefault(); window.location.hash = ''; }} className="flex items-center mr-6 group" aria-label="返回首页">
          <div className="relative">
             <div className="absolute inset-0 bg-white blur-[12px] opacity-10 group-hover:opacity-30 transition-opacity"></div>
             {/* 修复：移除固定宽度 w-[30px]，改为 w-auto 以保持比例；增加高度至 h-[40px] 以匹配参考图 */}
             <img src="https://i.ibb.co/gZwJ1YTs/icon-small.png" alt="Logo" className="h-[40px] w-auto mr-[10px] relative z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[20px] font-bold tracking-wide text-[#fff] drop-shadow-[0_2px_2px_#000] leading-none text-shadow-md mb-[2px]" style={{ fontFamily: '"Microsoft YaHei", sans-serif', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>时光档案馆</span>
            <span className="text-[11px] text-[#888] uppercase tracking-[0.1em] drop-shadow-md leading-none">Time Archives</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="flex-1 flex items-center h-full">
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              className={`h-full relative ${item.id === 'web' ? 'hidden xl:flex' : 'hidden lg:flex'}`}
              onMouseEnter={() => setActiveMenu(item.id)}
            >
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className={`flex items-center justify-center text-[#bbb] hover:text-white px-3 h-full transition-all duration-200 border-l border-transparent border-r border-transparent hover:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0)_51%,rgba(255,255,255,0.02)_100%)] hover:border-[rgba(255,255,255,0.1)] relative overflow-hidden ${activeMenu === item.id ? 'bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.1)] text-white' : ''}`}
                title={`展开 ${item.label} 菜单`}
              >
                <item.icon className={`w-[24px] h-[24px] xl:mr-2 opacity-70 drop-shadow-[0_2px_2px_#000] ${activeMenu === item.id ? item.color.replace('hover:fill', 'fill') : 'group-hover:opacity-100 ' + item.color.replace('hover:fill', 'group-hover:fill')}`} />
                <span className="hidden xl:inline text-[14px] font-bold drop-shadow-[0_1px_1px_#000]">{item.label}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center ml-auto h-full space-x-3" onMouseEnter={() => setActiveMenu(null)}>
          {/* Login / Register */}
          <button 
            onClick={() => window.location.hash = 'login'}
            className="px-3 py-1 text-[#ccc] hover:text-white flex items-center hover:bg-[rgba(255,255,255,0.1)] rounded-[3px] transition-colors border border-transparent hover:border-[rgba(255,255,255,0.2)] active:translate-y-[1px]" 
            title="登录 / 注册"
          >
             <div className="w-[28px] h-[28px] rounded-[3px] border border-[#555] bg-[#333] overflow-hidden mr-2 shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)] flex items-center justify-center">
                <svg className="w-[16px] h-[16px] fill-[#aaa]" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
             </div>
             <span className="hidden lg:inline text-[13px] font-bold drop-shadow-md">登录 / 注册</span>
          </button>

          {/* Upload Button */}
          <a href="#" onClick={(e) => e.preventDefault()} className="hidden md:flex items-center text-[#ddd] hover:text-white px-3 py-1 rounded-[3px] bg-gradient-to-b from-[#444] to-[#222] border border-[#555] shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_1px_2px_rgba(0,0,0,0.5)] hover:from-[#555] hover:to-[#333] active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)]" title="上传存档">
            <UploadIcon className="w-[18px] h-[18px] mr-2 opacity-80" />
            <span className="text-[13px] font-bold text-shadow-sm">上传</span>
          </a>

          {/* Search Trigger */}
          <button className="p-2 group hover:bg-[rgba(255,255,255,0.1)] rounded-[3px] transition-all border border-transparent hover:border-[rgba(255,255,255,0.2)]" title="搜索">
            <SearchIcon className="w-[32px] h-[32px] fill-[#999] group-hover:fill-white drop-shadow-[0_2px_2px_#000]" />
          </button>
        </div>
      </div>
      
      {/* Subnav (Desktop) - Textured Dark Grey */}
      <div className="bg-[#111] hidden lg:block text-center py-[6px] border-t border-[#333] shadow-[inset_0_2px_5px_rgba(0,0,0,0.5)] relative z-20">
        <ul className="text-[12px] text-[#888] font-bold shadow-black drop-shadow-md">
          {['关于我们', '官方博客', '大事件', '开源项目', '帮助中心', '捐赠支持', '联系方式', '招贤纳士', '志愿者'].map((link, i) => (
            <li key={i} className="inline-block px-[12px] border-r border-[#333] last:border-0">
              <a href="#" onClick={(e) => e.preventDefault()} className={`hover:text-[#428bca] transition-colors cursor-pointer ${link === '捐赠支持' ? 'flex items-center gap-1 text-[#ff6b6b]' : ''}`}>
                {link}
                {link === '捐赠支持' && <DonateHeartIcon className="w-[14px] h-[14px] inline align-top fill-[#ff6b6b]" />}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mega Menus Container */}
      <div 
        className={`absolute top-full left-0 w-full bg-[#0a0a0a] border-t border-[#333] shadow-2xl transition-all duration-300 overflow-hidden z-10 ${
          ['texts', 'video', 'audio', 'software', 'images'].includes(activeMenu || '') ? 'max-h-[500px] opacity-100 border-b' : 'max-h-0 opacity-0 border-b-0'
        }`}
        style={{ borderBottomColor: '#333' }}
      >
        <div className="max-w-[1400px] mx-auto flex text-[#ccc] text-sm font-normal">
          
          {/* TEXTS MENU */}
          {activeMenu === 'texts' && (
            <>
              <div className="w-[400px] border-r border-[#222] p-6 flex gap-6 justify-center items-start bg-[#111]">
                <a href="#" className="group/item flex flex-col items-center flex-1">
                  <div className="w-24 h-24 rounded-full bg-[#e8e6df] mb-3 border-2 border-[#444] shadow-[0_2px_10px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center relative group-hover/item:border-[#666] transition-colors">
                     <span className="text-[#0056b3] font-bold text-lg border-2 border-[#0056b3] px-1 rounded-sm rotate-[-10deg]">OPEN<br/>LIBRARY</span>
                     <div className="absolute inset-0 bg-white opacity-0 group-hover/item:opacity-10 transition-opacity"></div>
                  </div>
                  <div className="font-bold text-[#ddd] group-hover/item:text-white group-hover/item:underline drop-shadow-sm text-center leading-tight">开放图书馆</div>
                </a>
                <a href="#" className="group/item flex flex-col items-center flex-1">
                  <div className="w-24 h-24 rounded-full bg-[#222] mb-3 border-2 border-[#444] shadow-[0_2px_10px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center relative group-hover/item:border-[#666] transition-colors">
                     <img src="https://wsrv.nl/?url=https://i.ibb.co/HTMdcwzf/art-haven-net-20130512.png&w=100&h=100&fit=cover&output=webp" alt="American Libraries" className="w-full h-full object-cover sepia" referrerPolicy="no-referrer" />
                     <div className="absolute inset-0 bg-white opacity-0 group-hover/item:opacity-10 transition-opacity"></div>
                  </div>
                  <div className="font-bold text-[#ddd] group-hover/item:text-white group-hover/item:underline drop-shadow-sm text-center leading-tight">美洲图书馆</div>
                </a>
              </div>
              <div className="flex-1 p-6 flex gap-8 bg-[#0a0a0a]">
                <div className="flex-1">
                  <h3 className="font-bold border-b border-[#333] pb-2 mb-3 text-white">精选项目</h3>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">所有文本</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">史密森尼图书馆</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">联邦文献网络 (US)</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">家谱档案</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">林肯总统藏书</a>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold border-b border-[#333] pb-2 mb-3 text-white">热门分类</h3>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">美洲图书馆</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">加拿大图书馆</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">环球图书馆</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">古腾堡计划</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">儿童图书馆</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">生物多样性遗产</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">按语言分类书籍</a>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold border-b border-[#333] pb-2 mb-3 text-white invisible">热门分类</h3>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">民俗分类学</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">政府公开文档</a>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* VIDEO MENU */}
          {activeMenu === 'video' && (
            <>
              <div className="w-[400px] border-r border-[#222] p-6 flex gap-6 justify-center items-start bg-[#111]">
                <a href="#" className="group/item flex flex-col items-center flex-1">
                  <div className="w-24 h-24 rounded-full bg-[#111] mb-3 border-2 border-[#444] shadow-[0_2px_10px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col items-center justify-center relative group-hover/item:border-[#666] transition-colors">
                     <span className="text-white font-bold text-sm">TV NEWS</span>
                     <span className="text-gray-400 text-[10px]">ARCHIVE</span>
                     <div className="absolute inset-0 bg-white opacity-0 group-hover/item:opacity-10 transition-opacity"></div>
                  </div>
                  <div className="font-bold text-[#ddd] group-hover/item:text-white group-hover/item:underline drop-shadow-sm text-center leading-tight">电视新闻</div>
                </a>
                <a href="#" className="group/item flex flex-col items-center flex-1">
                  <div className="w-24 h-24 rounded-full bg-[#222] mb-3 border-2 border-[#444] shadow-[0_2px_10px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center relative group-hover/item:border-[#666] transition-colors">
                     <img src="https://wsrv.nl/?url=https://i.ibb.co/HTMdcwzf/art-haven-net-20130512.png&w=100&h=100&fit=cover&output=webp" alt="9/11" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                     <div className="absolute inset-0 bg-white opacity-0 group-hover/item:opacity-10 transition-opacity"></div>
                  </div>
                  <div className="font-bold text-[#ddd] group-hover/item:text-white group-hover/item:underline drop-shadow-sm text-center leading-tight">理解 9/11...</div>
                </a>
              </div>
              <div className="flex-1 p-6 flex gap-8 bg-[#0a0a0a]">
                <div className="flex-1">
                  <h3 className="font-bold border-b border-[#333] pb-2 mb-3 text-white">精选项目</h3>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">所有视频</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">普林格档案</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">民主现在！</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">占领华尔街</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">国家安全局片段库</a>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold border-b border-[#333] pb-2 mb-3 text-white">热门分类</h3>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">动画与卡通</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">艺术与音乐</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">计算机与技术</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">文化与学术电影</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">短暂电影</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">电影长片</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">新闻与公共事务</a>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold border-b border-[#333] pb-2 mb-3 text-white invisible">热门分类</h3>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">灵性与宗教</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">体育视频</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">电视节目</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">电子游戏视频</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">视频博客 (Vlogs)</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">青年媒体</a>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* AUDIO MENU */}
          {activeMenu === 'audio' && (
            <>
              <div className="w-[400px] border-r border-[#222] p-6 flex gap-6 justify-center items-start bg-[#111]">
                <a href="#" className="group/item flex flex-col items-center flex-1">
                  <div className="w-24 h-24 rounded-full bg-black mb-3 border-2 border-[#444] shadow-[0_2px_10px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center relative group-hover/item:border-[#666] transition-colors">
                     <span className="text-white font-bold text-xl tracking-tighter">LIVE</span>
                     <div className="absolute inset-0 bg-white opacity-0 group-hover/item:opacity-10 transition-opacity"></div>
                  </div>
                  <div className="font-bold text-[#ddd] group-hover/item:text-white group-hover/item:underline drop-shadow-sm text-center leading-tight">现场音乐档案</div>
                </a>
                <a href="#" className="group/item flex flex-col items-center flex-1">
                  <div className="w-24 h-24 rounded-full bg-white mb-3 border-2 border-[#444] shadow-[0_2px_10px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center relative group-hover/item:border-[#666] transition-colors">
                     <span className="text-black font-bold text-lg">LibriVox</span>
                     <div className="absolute inset-0 bg-black opacity-0 group-hover/item:opacity-10 transition-opacity"></div>
                  </div>
                  <div className="font-bold text-[#ddd] group-hover/item:text-white group-hover/item:underline drop-shadow-sm text-center leading-tight">Librivox 免费音频</div>
                </a>
              </div>
              <div className="flex-1 p-6 flex gap-8 bg-[#0a0a0a]">
                <div className="flex-1">
                  <h3 className="font-bold border-b border-[#333] pb-2 mb-3 text-white">精选项目</h3>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">所有音频</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">感恩至死乐队</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">网络厂牌</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">老式电台</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">78转唱片与圆筒录音...</a>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold border-b border-[#333] pb-2 mb-3 text-white">热门分类</h3>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">有声读物与诗歌</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">计算机、技术与...</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">音乐、艺术与文化</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">新闻与公共事务</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">灵性与宗教</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">播客 (Podcasts)</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">电台新闻档案</a>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* SOFTWARE MENU (Original) */}
          {activeMenu === 'software' && (
            <>
              <div className="w-[400px] border-r border-[#222] p-6 flex gap-6 justify-center items-start bg-[#111]">
                <a href="#" className="group/item flex flex-col items-center flex-1">
                  <div className="w-24 h-24 rounded-full bg-[#222] mb-3 border-2 border-[#444] shadow-[0_2px_10px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center relative group-hover/item:border-[#666] transition-colors">
                     <img src="https://i.ibb.co/RGjvnTJ3/Gemini-Generated-Image-h1m0brh1m0brh1m0.png" alt="Internet Arcade" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                     <div className="absolute inset-0 bg-white opacity-0 group-hover/item:opacity-10 transition-opacity"></div>
                  </div>
                  <div className="font-bold text-[#ddd] group-hover/item:text-white group-hover/item:underline drop-shadow-sm text-center leading-tight">Internet  Arcade<br/><span className="text-xs text-[#888] font-normal">互联网街机</span></div>
                </a>
                <a href="#" className="group/item flex flex-col items-center flex-1">
                  <div className="w-24 h-24 rounded-full bg-[#222] mb-3 border-2 border-[#444] shadow-[0_2px_10px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center relative group-hover/item:border-[#666] transition-colors">
                     <img src="https://i.ibb.co/fz6tXFDM/Gemini-Generated-Image-dgz6podgz6podgz6.png" alt="Retro Console Room" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                     <div className="absolute inset-0 bg-white opacity-0 group-hover/item:opacity-10 transition-opacity"></div>
                  </div>
                  <div className="font-bold text-[#ddd] group-hover/item:text-white group-hover/item:underline drop-shadow-sm text-center leading-tight">Retro Console Room<br/><span className="text-xs text-[#888] font-normal">复古家用机客厅</span></div>
                </a>
              </div>
              <div className="flex-1 p-6 flex gap-8 bg-[#0a0a0a]">
                <div className="flex-1">
                  <h3 className="font-bold border-b border-[#333] pb-2 mb-3 text-white">精选项目 (Featured)</h3>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">所有软件 (All Software)</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">复古模拟器 (Old School Emulation)</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">微型 DOS 游戏 (Micro-DOS Games)</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">历史软件 (Historical Software)</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">经典 PC 游戏 (Classic PC Games)</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">软件库 (Software Library)</a>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold border-b border-[#333] pb-2 mb-3 text-white">热门分类 (Top)</h3>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">MediaBox 存档与支持文件</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">复古软件 (Vintage Software)</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">应用安装包 (APK)</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">微型 DOS (Micro-DOS)</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">CD-ROM 软件</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">CD-ROM 软件图书馆</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">软件站点 (Software Sites)</a>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold border-b border-[#333] pb-2 mb-3 text-white invisible">热门分类 (Top)</h3>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">BovineSoft 软件库</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">共享软件 CD-ROMs</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">软件胶囊合集</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">CD-ROM 镜像</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">YZ Spectrum</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">GLOOM 关卡 CD</a>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold border-b border-[#333] pb-2 mb-3 text-white">电脑系统 (Systems)</h3>
                  <div className="flex flex-col gap-2">
                    <a href="#hot-systems" onClick={() => setActiveMenu(null)} className="hover:underline hover:text-[#428bca] transition-colors">热门系统</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">MS-DOS 与早期系统</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">早期图形系统 (Early GUI)</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">经典 Windows 9x</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">千禧与 NT 时代 (NT/2000/XP)</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">早期 Mac OS</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">UNIX 与 Linux</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">另类与小众系统 (Alternative OS)</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">系统工具与驱动 (Tools & Drivers)</a>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* IMAGES MENU */}
          {activeMenu === 'images' && (
            <>
              <div className="w-[400px] border-r border-[#222] p-6 flex gap-6 justify-center items-start bg-[#111]">
                <a href="#" className="group/item flex flex-col items-center flex-1">
                  <div className="w-24 h-24 rounded-full bg-[#0072b8] mb-3 border-2 border-[#444] shadow-[0_2px_10px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center relative group-hover/item:border-[#666] transition-colors">
                     <span className="text-white font-serif text-4xl">M</span>
                     <div className="absolute inset-0 bg-white opacity-0 group-hover/item:opacity-10 transition-opacity"></div>
                  </div>
                  <div className="font-bold text-[#ddd] group-hover/item:text-white group-hover/item:underline drop-shadow-sm text-center leading-tight">大都会艺术博物馆...</div>
                </a>
                <a href="#" className="group/item flex flex-col items-center flex-1">
                  <div className="w-24 h-24 rounded-full bg-white mb-3 border-2 border-[#444] shadow-[0_2px_10px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center relative group-hover/item:border-[#666] transition-colors">
                     <span className="text-black font-bold text-xs text-center leading-tight">THE CLEVELAND<br/>MUSEUM OF ART</span>
                     <div className="absolute inset-0 bg-black opacity-0 group-hover/item:opacity-10 transition-opacity"></div>
                  </div>
                  <div className="font-bold text-[#ddd] group-hover/item:text-white group-hover/item:underline drop-shadow-sm text-center leading-tight">克利夫兰艺术博物...</div>
                </a>
              </div>
              <div className="flex-1 p-6 flex gap-8 bg-[#0a0a0a]">
                <div className="flex-1">
                  <h3 className="font-bold border-b border-[#333] pb-2 mb-3 text-white">精选项目</h3>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">所有图像</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">Flickr 公共图库</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">占领华尔街 Flickr</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">封面艺术</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">美国地质调查局地图</a>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold border-b border-[#333] pb-2 mb-3 text-white">热门分类</h3>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">NASA 图像</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">太阳系藏品</a>
                    <a href="#" className="hover:underline hover:text-[#428bca] transition-colors">艾姆斯研究中心</a>
                  </div>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default TopNav;