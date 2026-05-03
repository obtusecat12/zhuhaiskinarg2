import React, { useState } from 'react';
import { SIDEBAR_ITEMS } from '../constants';
import { NavItem } from '../types';

export const Sidebar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-[140px] bg-white border-r border-board-purple text-board-purple overflow-y-auto hidden md:block z-50 text-tiny">
      <div className="text-center py-4">
        <a href="#/" className="block mx-auto mb-2">
          <img 
            src="https://i.ibb.co/SXWfsC85/image.png" 
            alt="Logo" 
            className="w-24 h-24 mx-auto object-contain" 
            title="哦哦啊啊"
          />
        </a>
        <a href="#/" className="block text-lg font-bold mb-2 text-board-purple hover:underline">
          紫岛
        </a>
      </div>

      <div className="w-[90%] mx-auto mb-2">
        <form onSubmit={(e) => e.preventDefault()}>
          <button className="w-full bg-board-purple text-white py-1 px-2 rounded-sm hover:bg-purple-900 transition-colors flex items-center justify-center gap-1 font-bold">
             搜索
          </button>
        </form>
      </div>

      <ul className="pl-4 pr-1 space-y-2 pb-4">
        {SIDEBAR_ITEMS.map((item) => (
          <SidebarGroup key={item.id} item={item} />
        ))}
        
        <li className="mt-4 font-bold text-board-red px-2">功能</li>
        <li className="pl-4"><a href="#" className="text-link-blue hover:text-purple-800">用户系统</a></li>
        <li className="pl-4"><a href="#" className="text-link-blue hover:text-purple-800">我的订阅</a></li>
        <li className="pl-4"><a href="#" className="text-link-blue hover:text-purple-800">我的发言</a></li>
      </ul>
    </div>
  );
};

const SidebarGroup: React.FC<{ item: NavItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <li>
      <div 
        className="font-bold text-board-red cursor-pointer flex justify-between items-center pr-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.name}
        <span className={`text-[10px] transform ${isOpen ? 'rotate-180' : ''} transition-transform`}>▼</span>
      </div>
      {isOpen && item.children && (
        <ul className="pl-4 mt-1 space-y-1 border-l border-dotted border-gray-300 ml-1">
          {item.children.map((child) => (
            <li key={child.id} className={`${child.isActive ? 'bg-board-accent -ml-4 pl-4 font-bold' : ''}`}>
              <a 
                href="#" 
                className={`${child.isActive ? 'text-board-purple' : 'text-link-blue'} hover:text-purple-800 block py-[1px]`}
              >
                {child.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
