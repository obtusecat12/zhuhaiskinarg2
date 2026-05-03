import React from 'react';
import { ToolsIcon, SubscriptionIcon, CollectionIcon, SearchCollectionIcon } from './Icons';
import RevealOnScroll from './RevealOnScroll';

const Features: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-[40px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        
        {/* Column 1: Tools */}
        <RevealOnScroll delay={0.1} className="aero-panel flex flex-col h-full">
          <div className="aero-panel-header flex items-center">
             <ToolsIcon className="w-[28px] h-[28px] mr-[10px]" />
             <span className="text-[15px] font-bold text-[#1e395b] drop-shadow-[0_1px_0_#fff]">实用工具</span>
          </div>
          <div className="flex flex-col p-[10px] bg-white flex-1">
            <ul className="space-y-[2px]">
              {['时光档案馆 Availability API', 'Chrome 浏览器扩展', 'Firefox 附加组件', 'Safari 扩展', 'MS Edge 附加组件', 'iOS 应用程序', 'Android 应用程序'].map((text, i) => (
                  <li key={i}>
                    <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center px-2 py-1.5 rounded-[2px] hover:bg-[#eef6fb] hover:border hover:border-[#b8d6fb] border border-transparent transition-all group cursor-pointer text-[#1e395b] text-[13px]">
                        <span className="w-1.5 h-1.5 bg-[#84acdd] group-hover:bg-[#3195db] shadow-[0_1px_1px_rgba(0,0,0,0.2)] rounded-full mr-2.5 transition-colors"></span>
                        <span className="group-hover:underline decoration-[#3195db] decoration-1 underline-offset-2">{text}</span>
                    </a>
                  </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>

        {/* Column 2: Subscription Service */}
        <RevealOnScroll delay={0.2} className="aero-panel flex flex-col h-full">
          <div className="aero-panel-header flex items-center">
             <SubscriptionIcon className="w-[28px] h-[28px] mr-[10px]" />
             <span className="text-[15px] font-bold text-[#1e395b] drop-shadow-[0_1px_0_#fff]">订阅服务</span>
          </div>
          <div className="flex flex-col p-[15px] bg-white flex-1 text-[13px] text-[#333] leading-relaxed">
            <p className="mb-4">
              Archive-It 让您可以捕获、管理和搜索数字内容集合，而无需任何技术专长或托管设施。
            </p>
            <div className="mt-auto bg-[#f5f9fc] border border-[#a6c9e2] p-3 rounded-[3px] shadow-[inset_0_0_5px_rgba(255,255,255,1)]">
                <a href="#" onClick={(e) => e.preventDefault()} className="text-[#204d74] hover:text-[#0066cc] font-bold flex items-center cursor-pointer group">
                   <span className="group-hover:underline">访问 Archive-It 建立和浏览馆藏</span>
                   <span className="ml-1 text-[#e8562d] font-serif text-[16px]">»</span>
                </a>
            </div>
          </div>
        </RevealOnScroll>

        {/* Column 3: Collection Search & Save Page Now */}
        <div className="flex flex-col gap-6">
            
            {/* Collection Search */}
            <RevealOnScroll delay={0.3} className="aero-panel">
              <div className="aero-panel-header flex items-center">
                <SearchCollectionIcon className="w-[26px] h-[26px] mr-[10px]" />
                <span className="text-[15px] font-bold text-[#1e395b] drop-shadow-[0_1px_0_#fff]">馆藏搜索</span>
              </div>
              <div className="p-[15px] bg-white">
                <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="输入关键词" className="aero-input px-[8px] py-[6px] w-full text-[13px]" />
                    <div className="flex gap-2">
                        <select className="aero-input px-[2px] py-[5px] w-full text-[13px] bg-white bg-gradient-to-b from-white to-[#f7f7f7]">
                            <option value="">选择馆藏...</option>
                            <option value="gov-pdf">.gov PDF文档</option>
                            <option value="gov">.gov 网页</option>
                            <option value="covid">COVID 档案</option>
                        </select>
                        <button className="aero-btn px-5 py-1 text-[13px] whitespace-nowrap">搜索</button>
                    </div>
                </form>
                <div className="mt-3 pt-2 border-t border-[#eee] text-[12px] text-[#666]">
                    本服务基于 <a href="#" onClick={(e) => e.preventDefault()} className="text-[#204d74] hover:underline cursor-pointer font-bold">精选馆藏</a> 的特定数据索引。
                </div>
              </div>
            </RevealOnScroll>

            {/* Save Page Now - Gold/Yellow Theme */}
            <RevealOnScroll delay={0.4} className="aero-panel border-[#d9c89e]">
               <div className="aero-panel-header-gold flex items-center">
                 <CollectionIcon className="w-[26px] h-[26px] mr-[10px]" />
                 <span className="text-[15px] font-bold text-[#8a6d3b] drop-shadow-[0_1px_0_#fff]">立即存档</span>
               </div>
               <div className="p-[15px] bg-[#fffcf5]">
                 <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="https://" className="aero-input border-[#d0c090] focus:border-[#e6b800] px-[8px] py-[6px] w-full text-[13px]" />
                    <button className="aero-btn-gold px-6 py-1 text-[13px] whitespace-nowrap">保存</button>
                 </form>
                 <div className="mt-2 text-[12px] text-[#786438] leading-tight">
                    捕获当前网页外观，作为未来可信的引用来源。
                 </div>
               </div>
            </RevealOnScroll>

        </div>

      </div>
    </div>
  );
};

export default Features;