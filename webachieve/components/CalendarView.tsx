import React, { useMemo } from 'react';
import { SearchCollectionIcon } from './Icons';

interface CalendarViewProps {
  url: string;
}

const ARCHIVE_MAP: Record<string, { id: string, name: string, date: string, year: number, month: number, day: number, size: string }> = {
  'baidu.com': { id: 'baidu', name: '百度搜索 (旧版)', date: '2012年 3月 14日', year: 2012, month: 3, day: 14, size: '48KB' },
  'geocities.com/area51': { id: 'geocities_1998', name: 'GeoCities 个人主页', date: '1998年 8月 15日', year: 1998, month: 8, day: 15, size: '12KB' },
  'ebuy.com': { id: 'ebuy_2000', name: 'eBuy 拍卖网', date: '2000年 11月 20日', year: 2000, month: 11, day: 20, size: '35KB' },
  'matrixdesigns.net': { id: 'flash_splash_2001', name: 'Flash 引导页', date: '2001年 5月 10日', year: 2001, month: 5, day: 10, size: '250KB' },
  'news.sina.com.cn': { id: 'portal_2003', name: '新浪新闻中心', date: '2003年 10月 15日', year: 2003, month: 10, day: 15, size: '85KB' },
  'alexblog.net': { id: 'blog_2005', name: '个人博客', date: '2005年 10月 20日', year: 2005, month: 10, day: 20, size: '42KB' },
  'myspace.com/darkangel': { id: 'myspace_2007', name: 'MySpace 个人主页', date: '2007年 10月 24日', year: 2007, month: 10, day: 24, size: '120KB' },
  'cloudsync.io': { id: 'web20_2008', name: 'Web 2.0 创业公司', date: '2008年 6月 12日', year: 2008, month: 6, day: 12, size: '65KB' },
  'techtalkforums.com': { id: 'forum_2009', name: 'TechTalk 论坛', date: '2009年 10月 12日', year: 2009, month: 10, day: 12, size: '55KB' },
  'm.news.com': { id: 'mobile_2010', name: '移动版新闻网站', date: '2010年 1月 27日', year: 2010, month: 1, day: 27, size: '28KB' },
  'icloud.com/notes': { id: 'skeuomorphic_2012', name: '拟物化备忘录', date: '2012年 9月 19日', year: 2012, month: 9, day: 19, size: '95KB' }
};

// Simple seeded random function to generate consistent but "random-looking" data
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const getStartOffset = (year: number, month: number) => {
  return new Date(year, month - 1, 1).getDay();
};

const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month, 0).getDate();
};

const MONTH_NAMES = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

const CalendarView: React.FC<CalendarViewProps> = ({ url }) => {
  
  const cleanUrl = url.replace(/^https?:\/\//, '').replace(/^www\./, '').toLowerCase();
  const archiveKey = Object.keys(ARCHIVE_MAP).find(k => cleanUrl.includes(k)) || 'baidu.com';
  const archive = ARCHIVE_MAP[archiveKey];

  // Generate Timeline Data (simulating web traffic history)
  // We use useMemo to keep it stable across renders
  const timelineBars = useMemo(() => {
    const bars = [];
    const totalBars = 95; // More bars for a denser look
    const targetIndex = 72; // Position for 2012 (~75%)

    for (let i = 0; i < totalBars; i++) {
      // Create a "wave" effect combined with noise
      const trend = Math.sin(i * 0.1) * 20 + 20; // Base wave
      const noise = seededRandom(i * 123.45) * 30; // Random noise
      const spike = i === targetIndex ? 40 : (seededRandom(i * 999) > 0.9 ? 30 : 0); // Occasional traffic spikes
      
      let height = Math.max(3, Math.floor(trend + noise + spike));
      // Cap height
      if (height > 65) height = 65;
      
      // Make early years (left side) generally lower
      if (i < 20) height = height * 0.3 + 2;

      bars.push({
        height,
        isTarget: i === targetIndex
      });
    }
    return bars;
  }, []);

  // Improved "Fake Snapshot" Logic
  // Uses a hash of the date to decide if a snapshot exists, creating a random distribution
  const hasSnapshot = (monthIndex: number, day: number) => {
    const seed = monthIndex * 31 + day + archive.year * 1337;
    const rand = seededRandom(seed);
    return rand > 0.72; 
  };

  const yearsBefore = [archive.year - 4, archive.year - 3, archive.year - 2, archive.year - 1];
  const yearsAfter = [archive.year + 1, archive.year + 2, archive.year + 3, archive.year + 4];

  return (
    <div className="flex-1 bg-[#f0f5f9] font-sans text-[#333] flex flex-col">
      {/* WayBack Machine Header Strip - Refined Aero Style */}
      <div className="relative z-20" style={{
          background: 'linear-gradient(to bottom, #ffffff 0%, #f2f6f9 49%, #e0eef8 50%, #f2f7fc 100%)',
          borderBottom: '1px solid #a3b8cc',
          boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
      }}>
         <div className="max-w-[1200px] mx-auto px-4 py-3 flex justify-between items-center">
             <div className="flex items-center">
                 <a href="#" onClick={(e) => {e.preventDefault(); window.location.hash='';}} className="flex items-center no-underline group mr-6">
                    <img src="https://i.ibb.co/gZwJ1YTs/icon-small.png" className="w-[28px] h-auto opacity-90 mr-2 group-hover:opacity-100 transition-opacity drop-shadow-sm group-hover:scale-110 duration-300" alt="Logo" />
                    <div className="flex flex-col">
                        <span className="text-[18px] font-bold text-[#1e395b] tracking-tight leading-none text-shadow-sm group-hover:text-[#ff3333] transition-colors duration-300">时光回溯机</span>
                        <span className="text-[10px] text-[#888] tracking-widest leading-none group-hover:text-[#cc0000] transition-colors duration-300">WAYBACK MACHINE</span>
                    </div>
                 </a>
                 <div className="hidden sm:flex items-center bg-white px-3 py-1.5 rounded-[3px] border border-[#7096c9] shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] text-[#333] text-[13px] w-[350px] transition-all duration-300 hover:border-[#ff3333] hover:shadow-[0_0_5px_rgba(255,51,51,0.3)]">
                     <span className="truncate font-sans select-all">{url}</span>
                 </div>
             </div>
             <div className="text-[12px] text-[#666] font-medium flex items-center gap-4">
                 <div className="text-right hidden md:block group cursor-default">
                     <div className="text-[10px] uppercase text-[#999] tracking-wider font-bold group-hover:text-[#ff3333] transition-colors duration-300">已保存快照</div>
                     <div className="text-[#1e395b] group-hover:text-[#cc0000] transition-colors duration-300"><span className="font-bold text-[14px]">1</span> 次</div>
                 </div>
                 <div className="h-[28px] w-[1px] bg-[#ccc] shadow-[1px_0_0_#fff] hidden md:block"></div>
                 <div className="text-right group cursor-default">
                     <div className="text-[10px] uppercase text-[#999] tracking-wider font-bold group-hover:text-[#ff3333] transition-colors duration-300">目标日期</div>
                     <div className="font-bold text-[#1e395b] text-[14px] group-hover:text-[#cc0000] transition-colors duration-300">{archive.date}</div>
                 </div>
                 <a 
                    href={`#playback/${archive.id}`} 
                    onClick={(e) => {
                      window.location.hash = `#playback/${archive.id}`;
                    }}
                    className="aero-btn-primary px-6 py-1.5 text-[13px] no-underline flex items-center shadow-md active:translate-y-[1px] bg-gradient-to-b from-[#ff4d4d] to-[#cc0000] border-[#990000] text-white hover:from-[#ff6666] hover:to-[#e60000] hover:shadow-[0_0_10px_rgba(255,51,51,0.5)] transition-all duration-300"
                 >
                     立即前往
                 </a>
             </div>
         </div>
      </div>

      {/* Timeline Visual - High Fidelity Reproduction */}
      <div className="bg-[#1a1a1a] h-[75px] w-full relative overflow-hidden flex flex-col border-b border-[#000] border-t border-[#444] group/timeline">
          {/* Faint grid lines (Canvas-like background) */}
          <div className="absolute inset-0 pointer-events-none opacity-20 transition-opacity duration-500 group-hover/timeline:opacity-30" 
               style={{ 
                   backgroundImage: `
                     linear-gradient(to right, #ff3333 1px, transparent 1px),
                     linear-gradient(to bottom, #ff3333 1px, transparent 1px)
                   `, 
                   backgroundSize: '14px 14px' 
               }}>
          </div>

          {/* Histogram Container */}
          <div className="flex-1 flex items-end justify-between px-4 sm:px-10 max-w-[1300px] mx-auto w-full relative pb-0 z-10 gap-[2px]">
               {timelineBars.map((bar, i) => (
                   <div key={i} className="flex-1 flex flex-col justify-end items-center group relative h-full min-w-[3px]">
                       {bar.isTarget && (
                           <div className="absolute bottom-[45px] z-30 flex flex-col items-center animate-bounce">
                               {/* Red Bubble */}
                               <div className="bg-gradient-to-b from-[#ff4d4d] to-[#cc0000] text-white text-[11px] font-bold px-1.5 py-0.5 rounded-[2px] shadow-[0_2px_8px_rgba(255,51,51,0.6)] border border-[#990000] whitespace-nowrap transform -translate-y-[2px]">
                                   {archive.year}
                               </div>
                               {/* Triangle pointer */}
                               <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-[#cc0000] -mt-[1px]"></div>
                           </div>
                       )}
                       
                       {/* The Bar */}
                       <div 
                           className={`w-full rounded-t-[1px] transition-all duration-300 ${bar.isTarget ? 'bg-gradient-to-t from-[#cc0000] to-[#ff4d4d] shadow-[0_0_15px_rgba(255,51,51,0.8)] z-20' : 'bg-[#444] hover:bg-[#ff3333] hover:shadow-[0_0_8px_rgba(255,51,51,0.5)] cursor-pointer'}`}
                           style={{ 
                             height: bar.isTarget ? '42px' : `${bar.height}px`,
                             opacity: bar.isTarget ? 1 : 0.7
                           }}
                       ></div>
                   </div>
               ))}
          </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1200px] mx-auto py-8 px-4 flex-1">
          <div className="flex flex-col md:flex-row gap-6">
              
              {/* Sidebar Info (Aero Panel) */}
              <div className="md:w-[260px] shrink-0">
                  <div className="aero-panel transition-all duration-300 hover:shadow-[0_8px_24px_rgba(255,51,51,0.15)] hover:-translate-y-1 group">
                      <div className="aero-panel-header flex items-center transition-colors duration-300 group-hover:bg-gradient-to-b group-hover:from-[#ff4d4d] group-hover:to-[#cc0000] group-hover:text-white group-hover:border-[#990000]">
                          <SearchCollectionIcon className="w-[20px] h-[20px] mr-2 transition-transform duration-300 group-hover:scale-110" />
                          <span className="font-bold text-[#1e395b] text-[14px] transition-colors duration-300 group-hover:text-white">存档信息</span>
                      </div>
                      <div className="p-4 bg-white text-[13px] leading-relaxed text-[#444]">
                          <div className="mb-4">
                              <h3 className="font-bold text-[#1e395b] mb-1 transition-colors duration-300 group-hover:text-[#cc0000]">关于此快照</h3>
                              <p>
                                  该页面由 <b>时光档案馆</b> 自动爬虫程序采集于 {archive.date}。
                              </p>
                          </div>
                          <div className="border-t border-[#eee] pt-3">
                              <h3 className="font-bold text-[#1e395b] mb-1 transition-colors duration-300 group-hover:text-[#cc0000]">原始信息</h3>
                              <p className="mb-2"><span className="text-[#888]">域名:</span> {archiveKey}</p>
                              <p className="mb-2"><span className="text-[#888]">状态:</span> <span className="text-green-600 font-bold">200 OK</span></p>
                              <p><span className="text-[#888]">大小:</span> {archive.size}</p>
                          </div>
                          
                          
                      </div>
                  </div>
              </div>

              {/* Calendar Grid */}
              <div className="flex-1 aero-panel bg-white p-6 min-h-[500px] relative transition-all duration-300 hover:shadow-[0_8px_24px_rgba(255,51,51,0.1)]">
                  {/* Subtle Grid Background for Calendar Area */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#ff3333 1px, transparent 1px), linear-gradient(90deg, #ff3333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  
                  <div className="relative z-10">
                      {/* Year Selector */}
                      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-[#e0e0e0] pb-5 mb-8 text-[13px]">
                          <span className="font-bold text-[#1e395b] mr-3">选择年份:</span>
                          {yearsBefore.map(y => (
                              <div key={y} className="px-3 py-1 cursor-not-allowed opacity-40 rounded text-[#666] bg-[#f5f5f5] border border-transparent font-medium hover:opacity-60 transition-opacity">{y}</div>
                          ))}
                          <div className="px-5 py-1 bg-gradient-to-b from-[#ff6666] to-[#cc0000] text-white font-bold rounded-[3px] shadow-[0_1px_3px_rgba(255,51,51,0.4),inset_0_1px_0_rgba(255,255,255,0.5)] border border-[#990000] transform scale-105 transition-all duration-300 hover:scale-110 hover:shadow-[0_2px_8px_rgba(255,51,51,0.6)]">{archive.year}</div>
                          {yearsAfter.map(y => (
                              <div key={y} className="px-3 py-1 cursor-not-allowed opacity-40 rounded text-[#666] bg-[#f5f5f5] border border-transparent font-medium hover:opacity-60 transition-opacity">{y}</div>
                          ))}
                      </div>

                      {/* Months Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
                          {Array.from({ length: 12 }).map((_, idx) => {
                              const monthIndex = idx + 1;
                              const isActiveMonth = monthIndex === archive.month;
                              const daysInMonth = getDaysInMonth(archive.year, monthIndex);
                              const startOffset = getStartOffset(archive.year, monthIndex);

                              if (isActiveMonth) {
                                  return (
                                      <div key={monthIndex} className="relative p-2 rounded transition-all duration-300 hover:bg-[#fff0f0] hover:shadow-[0_2px_8px_rgba(255,51,51,0.1)] group/activemonth">
                                          <div className="text-center font-bold mb-3 text-[#1e395b] text-[15px] transition-colors duration-300 group-hover/activemonth:text-[#cc0000]">{MONTH_NAMES[idx]}</div>
                                          <div className="grid grid-cols-7 gap-1 text-[12px] text-center text-[#999] font-medium">
                                              {['日','一','二','三','四','五','六'].map(d => <div key={d} className="border-b border-[#eee] pb-1 mb-1 text-[11px] transition-colors duration-300 group-hover/activemonth:border-[#ffcccc] group-hover/activemonth:text-[#666]">{d}</div>)}
                                              {Array.from({length: startOffset}).map((_, i) => <div key={`e-${i}`}></div>)}
                                              
                                              {Array.from({length: daysInMonth}).map((_, i) => {
                                                  const day = i + 1;
                                                  const isTarget = day === archive.day;
                                                  const isFakeSnapshot = !isTarget && hasSnapshot(monthIndex, day);

                                                  return (
                                                      <div key={day} className="h-[32px] flex items-center justify-center relative">
                                                          {isTarget ? (
                                                              <a 
                                                                href={`#playback/${archive.id}`} 
                                                                onClick={(e) => {
                                                                    window.location.hash = `#playback/${archive.id}`;
                                                                }}
                                                                className="w-[32px] h-[32px] rounded-full bg-gradient-to-br from-[#e04a4a] to-[#b91d47] text-white flex items-center justify-center shadow-[0_2px_5px_rgba(185,29,71,0.5),inset_0_1px_0_rgba(255,255,255,0.4)] hover:scale-110 transition-all cursor-pointer relative group z-10 font-bold border border-[#900] hover:shadow-[0_0_15px_rgba(255,51,51,0.8)]"
                                                                title={`点击查看 ${archive.date} 存档`}
                                                              >
                                                                  {day}
                                                                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#b91d47] opacity-40 animate-ping"></span>
                                                              </a>
                                                          ) : isFakeSnapshot ? (
                                                                <div 
                                                                    className="w-[28px] h-[28px] rounded-full bg-gradient-to-b from-[#ff9999] to-[#ff6666] text-white flex items-center justify-center opacity-70 cursor-default shadow-sm border border-[#ffcccc] hover:opacity-100 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_5px_rgba(255,51,51,0.5)]"
                                                                    title="该日期有存档 (不可访问)"
                                                                >
                                                                    {day}
                                                                </div>
                                                          ) : (
                                                              <span className="text-[#bbb] cursor-default hover:text-[#ff3333] transition-colors duration-300">{day}</span>
                                                          )}
                                                      </div>
                                                  );
                                              })}
                                          </div>
                                      </div>
                                  );
                              } else {
                                  return (
                                      <MonthBlock 
                                          key={monthIndex} 
                                          name={MONTH_NAMES[idx]} 
                                          days={daysInMonth} 
                                          startOffset={startOffset} 
                                          monthIndex={monthIndex} 
                                          hasSnapshot={hasSnapshot} 
                                      />
                                  );
                              }
                          })}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

const MonthBlock: React.FC<{ name: string, days: number, startOffset: number, monthIndex: number, hasSnapshot: (m: number, d: number) => boolean }> = ({ name, days, startOffset, monthIndex, hasSnapshot }) => (
    <div className="opacity-80 hover:opacity-100 transition-all duration-300 p-2 rounded hover:bg-[#fff0f0] hover:shadow-[0_2px_8px_rgba(255,51,51,0.1)] group/month">
        <div className="text-center font-bold mb-3 text-[#555] text-[15px] transition-colors duration-300 group-hover/month:text-[#cc0000]">{name}</div>
        <div className="grid grid-cols-7 gap-1 text-[12px] text-center text-[#bbb]">
             {['日','一','二','三','四','五','六'].map(d => <div key={d} className="border-b border-[#eee] pb-1 mb-1 text-[11px] transition-colors duration-300 group-hover/month:border-[#ffcccc] group-hover/month:text-[#999]">{d}</div>)}
             {Array.from({length: startOffset}).map((_, i) => <div key={`e-${i}`}></div>)}
             {Array.from({length: days}).map((_, i) => {
                 const day = i + 1;
                 const showSnapshot = hasSnapshot(monthIndex, day);
                 return (
                    <div key={i} className="h-[32px] flex items-center justify-center">
                        {showSnapshot ? (
                            <div className="w-[28px] h-[28px] rounded-full bg-gradient-to-b from-[#ff9999] to-[#ff6666] text-white flex items-center justify-center cursor-default hover:from-[#ff6666] hover:to-[#cc0000] hover:shadow-[0_0_5px_rgba(255,51,51,0.5)] hover:scale-110 transition-all duration-300 shadow-sm border border-[#ffcccc]" title="存档不可用">
                                {day}
                            </div>
                        ) : (
                            <div className="cursor-default hover:text-[#ff3333] transition-colors duration-300">{day}</div>
                        )}
                    </div>
                 );
             })}
        </div>
    </div>
);

export default CalendarView;