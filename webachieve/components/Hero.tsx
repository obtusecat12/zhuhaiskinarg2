import React, { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

const Hero: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) {
        // Do nothing if input is empty
        return;
    }

    const cleanInput = inputValue.toLowerCase().replace(/^(https?:\/\/)?(www\.)?/, '');
    
    const validDomains = [
      'baidu.com',
      'geocities.com/area51',
      'ebuy.com',
      'matrixdesigns.net',
      'news.sina.com.cn',
      'alexblog.net',
      'myspace.com/darkangel',
      'cloudsync.io',
      'techtalkforums.com',
      'm.news.com',
      'icloud.com/notes'
    ];

    const matchedDomain = validDomains.find(d => cleanInput.includes(d));

    if (matchedDomain) {
        window.location.hash = `#calendar/${matchedDomain}`;
        return;
    }

    window.location.hash = '#404';
  };

  return (
    <div className="pt-[40px] pb-[30px] text-center flex flex-col items-center border-b border-[#b6c7d9] bg-[#eff4fa] relative overflow-hidden">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
            {/* Updated background image */}
            <img 
                src="https://i.ibb.co/chXppPb4/unwatermarked-Gemini-Generated-Image-c2v00sc2v00sc2v0.png" 
                alt="" 
                className="w-full h-full object-cover object-center opacity-60 pointer-events-none" 
            />
            {/* Overlay to ensure text readability and blend with the theme */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-[#eff4fa]/90 pointer-events-none"></div>
        </div>

        {/* Subtle light effect - Aero glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-300 opacity-10 blur-[90px] rounded-full pointer-events-none z-0"></div>

        {/* Donate Button Top Right */}
        <RevealOnScroll delay={0.1} className="w-full max-w-[900px] relative mb-[20px] sm:mb-0 z-10">
            <div className="sm:absolute right-0 top-[-20px] text-right px-4 sm:px-0">
               <a href="#" onClick={(e) => e.preventDefault()} className="aero-btn inline-flex items-center px-[15px] py-[5px] text-[13px] font-bold no-underline group text-[#b91d47]">
                  <span className="group-hover:scale-110 transition-transform mr-1">❤</span> 捐赠支持
               </a>
            </div>
        </RevealOnScroll>

        <div className="flex flex-col sm:flex-row items-center justify-center mb-[23px] sm:mb-[48px] gap-[30px] relative z-10">
            {/* Logo area */}
            <RevealOnScroll delay={0.2} className="shrink-0">
                <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; }} title="时光档案馆首页" className="relative group shrink-0 block">
                    <img 
                        src="https://i.ibb.co/YsPbs2v/Chat-GPT-Image-2026-1-1-15-20-34.png" 
                        alt="时光档案馆 Logo" 
                        className="w-[280px] h-auto drop-shadow-[0_2px_5px_rgba(0,0,0,0.15)] transition-transform group-hover:scale-[1.02]" 
                    />
                    <div className="absolute -bottom-2 right-2 text-[12px] font-bold text-[#666] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-shadow-sm">EST. 1996</div>
                </a>
            </RevealOnScroll>
            
            <div className="flex flex-col items-end w-full max-w-[580px] px-4 sm:px-0">
                <RevealOnScroll delay={0.3} className="w-full">
                    <div className="text-[18px] sm:text-[22px] font-bold mb-[15px] text-center sm:text-left w-full text-[#333] drop-shadow-[0_1px_0_#fff]">
                        探索时光长河中超过 <span className="text-[#b91d47] text-[24px]">8660 亿</span> 个 <a href="#" onClick={(e) => e.preventDefault()} className="underline text-[#204d74] hover:text-[#0078d7] cursor-pointer">网页快照</a>
                    </div>
                </RevealOnScroll>
                
                {/* Aero Style Input Bar */}
                <RevealOnScroll delay={0.4} className="w-full">
                    <form 
                        className="w-full relative p-[8px] bg-[#dbeaf9] rounded-[5px] border border-[#a2c3e4] shadow-[0_2px_6px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)]"
                        onSubmit={handleSearch}
                    >
                        <div className="relative flex w-full gap-2">
                            <input 
                                type="text" 
                                placeholder="输入网址 (URL) 或关键词..."
                                className="w-full h-[42px] aero-input px-[15px] py-[10px] text-[16px] placeholder-gray-400"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <button 
                                type="submit" 
                                className={`aero-btn-primary px-8 text-[15px] tracking-wide ${!inputValue.trim() ? 'opacity-70 cursor-default' : ''}`}
                            >
                                 回溯
                            </button>
                        </div>
                    </form>
                </RevealOnScroll>
                
                <RevealOnScroll delay={0.5} className="w-full text-center mt-2">
                    <a href="#" onClick={(e) => e.preventDefault()} className="text-[12px] text-[#555] hover:text-[#000] underline decoration-dotted cursor-pointer">高级搜索</a>
                </RevealOnScroll>
            </div>
        </div>
    </div>
  );
};

export default Hero;