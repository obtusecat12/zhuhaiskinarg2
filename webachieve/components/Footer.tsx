import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto w-full pb-10 border-t border-[#ccc] bg-[#e6e6e6]/80 backdrop-blur-md text-[#333] relative z-10">
      <RevealOnScroll delay={0.1} className="text-center text-[13px] pt-[20px] pb-[10px] w-full shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
        <a href="#" onClick={(e) => e.preventDefault()} className="px-[10px] text-[#204d74] hover:underline hover:text-[#e8562d] cursor-pointer">常见问题</a> | 
        <a href="#" onClick={(e) => e.preventDefault()} className="px-[10px] text-[#204d74] hover:underline hover:text-[#e8562d] cursor-pointer">联系我们</a> | 
        <a href="#" onClick={(e) => e.preventDefault()} className="px-[10px] text-[#204d74] hover:underline hover:text-[#e8562d] cursor-pointer">服务条款</a>
      </RevealOnScroll>
      
      <RevealOnScroll delay={0.2} className="max-w-[600px] mx-auto mt-[30px] pl-[50px] text-left relative">
        {/* Reusing existing image as placeholder for logo */}
        <img 
          src="https://i.ibb.co/gZwJ1YTs/icon-small.png" 
          alt="Time Archives Logo" 
          className="absolute left-0 top-0 w-[38px] h-auto opacity-60 grayscale hover:grayscale-0 transition-all duration-300" 
        />
        
        <p className="font-sans text-[12px] text-[#555] leading-[1.6em] mb-[1.5em]">
          时光档案馆（Time Archives）是<a href="#" onClick={(e) => e.preventDefault()} className="text-[#204d74] font-bold cursor-pointer">数字记忆基金会</a>的一项计划。这是一个 501(c)(3) 非营利组织，致力于构建人类文明的数字备份。<br/>
          其他<a href="#" onClick={(e) => e.preventDefault()} className="text-[#204d74] cursor-pointer">项目</a>包括 <a href="#" onClick={(e) => e.preventDefault()} className="text-[#204d74] cursor-pointer">公共知识库</a> 和 <a href="#" onClick={(e) => e.preventDefault()} className="text-[#204d74] cursor-pointer">web-memory.org</a>。
        </p>
        <p className="font-sans text-[12px] text-[#555] leading-[1.6em] mb-[2em]">
          使用时光档案馆即表示您同意我们的 <a href="#" onClick={(e) => e.preventDefault()} className="text-[#204d74] cursor-pointer">使用条款</a>。
        </p>
        <p className="text-[11px] text-[#888]">
            &copy; 2016 数字记忆基金会 版权所有。
        </p>
      </RevealOnScroll>
    </footer>
  );
};

export default Footer;