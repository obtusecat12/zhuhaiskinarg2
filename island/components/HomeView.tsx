import React, { useState, useEffect } from 'react';

export function HomeView() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, src: 'https://picsum.photos/seed/purple1/800/450', title: '欢迎来到紫岛' },
    { id: 2, src: 'https://picsum.photos/seed/purple2/800/450', title: '新版块“都市怪谈”现已开放' },
    { id: 3, src: 'https://picsum.photos/seed/purple3/800/450', title: '请大家遵守站规，理性讨论' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div id="h-content" className="md:ml-[140px] mb-[50px] p-4 lg:p-6 max-w-[1200px]">
      <div className="mb-2 text-sm">
        <ul className="flex items-center space-x-2 text-gray-500">
          <li><a href="#/" className="text-link-blue hover:text-purple-800">紫岛</a></li>
          <li>/</li>
          <li><span>首页</span></li>
          <li>/</li>
          <li><span><a href="#" className="text-link-blue hover:text-purple-800">登录</a></span></li>
        </ul>
      </div>

      <h2 className="text-center font-bold text-board-purple text-2xl my-4">
        紫岛揭示板
      </h2>
      
      <hr className="border-gray-300 my-4" />

      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Column */}
        <div className="w-full md:w-[35%] lg:w-[30%] flex flex-col gap-4">
          {/* 16:9 Carousel */}
          <div className="bg-reply-bg p-2 border border-board-purple/20 rounded">
            <div className="aspect-video bg-gray-200 relative overflow-hidden rounded group">
               {slides.map((slide, index) => (
                 <div 
                   key={slide.id}
                   className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                 >
                   <img src={slide.src} alt={slide.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                   <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-1.5 text-xs truncate">
                     {slide.title}
                   </div>
                 </div>
               ))}
               <div className="absolute bottom-1.5 right-2 flex space-x-1">
                 {slides.map((_, index) => (
                   <button 
                     key={index} 
                     className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                     onClick={() => setCurrentSlide(index)}
                   />
                 ))}
               </div>
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-reply-bg p-2 border border-board-purple/20 rounded text-sm">
            <h3 className="font-bold text-board-purple border-b border-board-purple/20 mb-2 pb-1">岛历</h3>
            <div className="text-center p-2 bg-board-bg border border-gray-200 rounded">
               <div className="text-board-red font-bold text-base mb-2">2026年3月</div>
               <div className="grid grid-cols-7 gap-1 text-xs">
                 <div className="text-board-red">日</div><div>一</div><div>二</div><div>三</div><div>四</div><div>五</div><div className="text-board-red">六</div>
                 <div className="text-gray-400">1</div><div className="text-gray-400">2</div><div className="text-gray-400">3</div><div className="text-gray-400">4</div><div className="text-gray-400">5</div><div className="text-gray-400">6</div><div className="text-gray-400">7</div>
                 <div>8</div><div>9</div><div>10</div><div>11</div><div>12</div><div>13</div><div>14</div>
                 <div>15</div><div>16</div><div>17</div><div>18</div><div>19</div><div className="bg-board-purple text-white rounded font-bold">20</div><div className="text-board-red">21</div>
                 <div className="text-board-red">22</div><div>23</div><div>24</div><div>25</div><div>26</div><div>27</div><div className="text-board-red">28</div>
                 <div className="text-board-red">29</div><div>30</div><div>31</div><div className="text-gray-400">1</div><div className="text-gray-400">2</div><div className="text-gray-400">3</div><div className="text-gray-400">4</div>
               </div>
            </div>
          </div>

          {/* Site Rules */}
          <div className="bg-reply-bg p-2 border border-board-purple/20 rounded text-sm">
            <h3 className="font-bold text-board-purple border-b border-board-purple/20 mb-2 pb-1">站规与公告</h3>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-gray-700">
              <li>请遵守国家法律法规，严禁发布违法违规内容。</li>
              <li>本岛为匿名讨论区，请理性发言，友善交流。</li>
              <li>严禁人身攻击、挂人、引战等行为。</li>
              <li>发帖前请善用搜索，避免重复发帖。</li>
              <li>适度玩梗，保持版面整洁。</li>
              <li className="list-none mt-2 text-right"><a href="#" className="text-link-blue hover:underline">查看详细版规 &gt;&gt;</a></li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-4">
          {/* Boards List */}
          <div className="bg-reply-bg p-2 border border-board-purple/20 rounded">
            <h3 className="font-bold text-board-purple border-b border-board-purple/20 mb-2 pb-1">板块列表</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-2 gap-x-4 text-sm p-1">
              <a href="#/thread/199283" className="text-link-blue hover:underline flex items-center before:content-['▪'] before:mr-1 before:text-board-purple">综合版</a>
              <a href="#/thread/199283" className="text-link-blue hover:underline flex items-center before:content-['▪'] before:mr-1 before:text-board-purple">技术讨论</a>
              <a href="#/thread/199283" className="text-link-blue hover:underline flex items-center before:content-['▪'] before:mr-1 before:text-board-purple">二次元</a>
              <a href="#/thread/199283" className="text-link-blue hover:underline flex items-center before:content-['▪'] before:mr-1 before:text-board-purple">游戏区</a>
              <a href="#/thread/199283" className="text-link-blue hover:underline flex items-center before:content-['▪'] before:mr-1 before:text-board-purple">都市怪谈</a>
              <a href="#/thread/199283" className="text-link-blue hover:underline flex items-center before:content-['▪'] before:mr-1 before:text-board-purple">音乐影视</a>
              <a href="#/thread/199283" className="text-link-blue hover:underline flex items-center before:content-['▪'] before:mr-1 before:text-board-purple">生活吐槽</a>
              <a href="#/thread/199283" className="text-link-blue hover:underline flex items-center before:content-['▪'] before:mr-1 before:text-board-purple">创作区</a>
              <a href="#/thread/199283" className="text-link-blue hover:underline flex items-center before:content-['▪'] before:mr-1 before:text-board-purple">体育运动</a>
              <a href="#/thread/199283" className="text-link-blue hover:underline flex items-center before:content-['▪'] before:mr-1 before:text-board-purple">萌宠动物</a>
              <a href="#/thread/199283" className="text-link-blue hover:underline flex items-center before:content-['▪'] before:mr-1 before:text-board-purple">美食广场</a>
              <a href="#/thread/199283" className="text-link-blue hover:underline flex items-center before:content-['▪'] before:mr-1 before:text-board-purple">问答求助</a>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="bg-reply-bg p-2 border border-board-purple/20 rounded flex-1">
            <h3 className="font-bold text-board-purple border-b border-board-purple/20 mb-2 pb-1">最新动态</h3>
            <div className="space-y-2">
              {/* Post Item */}
              <div className="bg-board-bg p-2 border border-gray-200 rounded text-sm hover:bg-white transition-colors">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span><a href="#/thread/199283" className="text-board-purple hover:underline">[都市怪谈]</a> 无名氏</span>
                  <span>2026-03-20 22:15:00</span>
                </div>
                <div className="text-board-red font-bold mb-1"><a href="#/thread/199283" className="hover:underline">仙桃高中生失踪事件调查</a></div>
                <p className="text-gray-700 line-clamp-2 text-xs">有人知道最近那个很火的传闻吗？据说在老校区那边晚上能听到奇怪的声音，而且已经有两名学生失踪了。我打算今晚去探险，有人一起吗？</p>
              </div>
              
              <div className="bg-board-bg p-2 border border-gray-200 rounded text-sm hover:bg-white transition-colors">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span><a href="#/thread/199283" className="text-board-purple hover:underline">[综合版]</a> 无名氏</span>
                  <span>2026-03-20 21:30:12</span>
                </div>
                <div className="mb-1"><a href="#/thread/199283" className="hover:underline text-link-blue font-bold">今天晚饭吃了什么？</a></div>
                <p className="text-gray-700 line-clamp-2 text-xs">如题，不知道吃什么，大家给点建议。最好是外卖能点到的，不想出门。</p>
              </div>

              <div className="bg-board-bg p-2 border border-gray-200 rounded text-sm hover:bg-white transition-colors">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span><a href="#/thread/199283" className="text-board-purple hover:underline">[技术讨论]</a> 无名氏</span>
                  <span>2026-03-20 20:05:44</span>
                </div>
                <div className="mb-1"><a href="#/thread/199283" className="hover:underline text-link-blue font-bold">求助，电脑开不了机了</a></div>
                <p className="text-gray-700 line-clamp-2 text-xs">按电源键没反应，风扇也不转，是不是主板烧了？电源灯是亮的，内存也重新插拔过了，还是不行。</p>
              </div>
              
              <div className="bg-board-bg p-2 border border-gray-200 rounded text-sm hover:bg-white transition-colors">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span><a href="#/thread/199283" className="text-board-purple hover:underline">[二次元]</a> 无名氏</span>
                  <span>2026-03-20 19:42:10</span>
                </div>
                <div className="mb-1"><a href="#/thread/199283" className="hover:underline text-link-blue font-bold">新番推荐</a></div>
                <p className="text-gray-700 line-clamp-2 text-xs">这季度的霸权预定是哪部？感觉好几部制作都不错，大家都在追什么？</p>
              </div>

              <div className="bg-board-bg p-2 border border-gray-200 rounded text-sm hover:bg-white transition-colors">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span><a href="#/thread/199283" className="text-board-purple hover:underline">[游戏区]</a> 无名氏</span>
                  <span>2026-03-20 18:20:05</span>
                </div>
                <div className="mb-1"><a href="#/thread/199283" className="hover:underline text-link-blue font-bold">《艾尔登法环》DLC通关感想</a></div>
                <p className="text-gray-700 line-clamp-2 text-xs">终于打完了，最后的BOSS设计得太有意思了，不过难度确实高，卡了我好几天。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-8 mb-4 text-xs text-gray-500">
          <p>PurpleIsland - Ver 1.0 beta</p>
          <p>联系：admin@purple-island.com</p>
          <p><a href="#" className="text-link-blue">免责声明</a>：本站无法保证用户张贴内容的可靠性，投资有风险，健康问题请遵医嘱。</p>
      </div>
    </div>
  );
}
