import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const captures = [
  { url: 'art-haven.net', date: '2013年05月12日', img: 'https://i.ibb.co/HTMdcwzf/art-haven-net-20130512.png' },
  { url: 'cs.oxbridge.edu', date: '1999年11月05日', img: 'https://i.ibb.co/bhWLmXL/cs-oxbridge-edu-19991105.png' },
  { url: 'culinary-world.tv', date: '2012年08月20日', img: 'https://i.ibb.co/DPJfDPWK/culinary-world-tv-20120820.png' },
  { url: 'yodel.search', date: '1997年04月01日', img: 'https://i.ibb.co/VYQzKKT7/yodel-search-19970401.png' },
  { url: 'der-zeitung.de', date: '2011年09月15日', img: 'https://i.ibb.co/p9XRWQf/der-zeitung-de-20110915.png' },
  { url: 'filmbuff-db.com', date: '2010年03月21日', img: 'https://i.ibb.co/TM5qfbJv/filmbuff-db-com-20100321.png' },
  { url: 'code-exchange.org', date: '2014年11月02日', img: 'https://i.ibb.co/svdgj2p5/code-exchange-org-20141102.png' },
  { url: 'music-galaxy.com', date: '1998年12月27日', img: 'https://i.ibb.co/rGv7r2GY/music-galaxy-com-19981227.png' },
];

const Carousel: React.FC = () => {
  // Duplicate the array to create a seamless loop effect
  const loopItems = [...captures, ...captures];

  return (
    <RevealOnScroll delay={0.1} className="w-full bg-[#e9eff6] overflow-hidden py-8 border-b border-[#cbd8e6] shadow-[inset_0_2px_5px_rgba(0,0,0,0.05)] relative group">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        /* Pause animation on hover for better UX */
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      {/* Track Container */}
      <div className="flex w-max animate-marquee hover:cursor-pointer">
        {loopItems.map((item, idx) => (
          <a 
            key={idx} 
            href="#" 
            onClick={(e) => e.preventDefault()}
            className="block mx-4 w-[160px] flex-shrink-0 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 relative group-item cursor-pointer"
          >
            
            {/* Polaroid / Photo Frame Style */}
            <div className="bg-white p-[6px] pb-[10px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] border border-[#c4c4c4] rounded-[2px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] transition-shadow duration-300 transform rotate-0 hover:rotate-1">
               
               {/* Glossy overlay on image */}
               <div className="relative border border-[#eee] w-[145px] h-[100px] overflow-hidden bg-[#f0f0f0]">
                   <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[rgba(255,255,255,0.3)] pointer-events-none z-10"></div>
                   <img 
                     src={`https://wsrv.nl/?url=${item.img}&w=290&h=200&fit=cover&output=webp`} 
                     alt={item.url}
                     loading="lazy"
                     className="w-full h-full object-cover object-top hover:sepia-0 transition-all"
                   />
               </div>
               
               <div className="mt-2 text-center">
                    <div className="text-[12px] font-bold text-[#204d74] truncate w-[140px]">{item.url}</div>
                    <div className="text-[10px] text-[#888] font-serif italic">{item.date}</div>
               </div>
            </div>
            
            {/* Reflection Effect */}
            <div className="absolute -bottom-[20px] w-full h-[20px] bg-gradient-to-b from-[rgba(0,0,0,0.1)] to-transparent opacity-0 hover:opacity-100 transition-opacity rounded-[50%] blur-[4px]"></div>
          </a>
        ))}
      </div>
    </RevealOnScroll>
  );
};

export default Carousel;