import React from 'react';

export const BottomNav: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full border-t border-purple-900 bg-board-bg z-40 text-tiny p-1">
      <div className="mb-1 flex items-center flex-wrap">
        <span className="w-5 h-5 mr-1 flex items-center justify-center bg-board-purple text-white text-[10px] rounded-full font-bold">紫</span>
        <span className="mr-1">
            <a href="#/" className="text-link-blue hover:text-purple-800">首页版规</a> |
            <a href="#" className="text-link-blue hover:text-purple-800 ml-1">用户系统</a> |
            <a href="#" className="text-link-blue hover:text-purple-800 ml-1">客户端</a> |
            <a href="#" className="text-link-blue hover:text-purple-800 ml-1">岛民指南</a> |
            <span className="ml-1">请关注 公众号：<span className="text-link-blue cursor-pointer">【薛定谔的猫箱】</span></span> |
            <a href="#" className="text-link-blue hover:text-purple-800 ml-1">凝视深渊时，深渊也在凝视你</a>
        </span>
      </div>
      <div className="text-gray-600">
        常用串：·<a href="#" className="text-link-blue hover:text-purple-800">豆知识</a> ·<a href="#" className="text-link-blue hover:text-purple-800">紫岛茶室</a> ·<a href="#" className="text-link-blue hover:text-purple-800">综合公告</a> ·<a href="#" className="text-link-blue hover:text-purple-800">紫岛路标</a>
      </div>
    </div>
  );
};