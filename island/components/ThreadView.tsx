import React from 'react';
import { PostForm } from './PostForm';
import { ThreadList } from './ThreadList';
import { Pagination } from './Pagination';

export function ThreadView() {
  return (
    <div id="h-content" className="md:ml-[140px] mb-[50px] p-4 lg:p-6 max-w-[1200px]">
      {/* Breadcrumb */}
      <div className="mb-2 text-sm">
        <ul className="flex items-center space-x-2 text-gray-500">
          <li><a href="#/" className="text-link-blue hover:text-purple-800">紫岛</a></li>
          <li>/</li>
          <li><a href="#" className="text-link-blue hover:text-purple-800">都市怪谈</a></li>
          <li>/</li>
          <li><a href="#" className="text-link-blue hover:text-purple-800">No.199283</a></li>
          <li>/</li>
          <li><span>第 1 页</span></li>
          <li>/</li>
          <li><span><a href="#" className="text-link-blue hover:text-purple-800">登录</a></span></li>
        </ul>
      </div>

      <h2 className="text-center font-bold text-board-purple text-2xl my-4">
        No.199283 - 仙桃高中生失踪 - 都市怪谈
      </h2>
      
      <hr className="border-gray-300 my-4" />
      
      <PostForm />
      
      <hr className="border-gray-300 my-4" />
      
      <ThreadList />
      
      <hr className="border-gray-300 my-4" />
      
      <div className="flex justify-between items-center">
          <Pagination />
      </div>

      <div className="text-center mt-8 mb-4 text-xs text-gray-500">
          <p>PurpleIsland - Ver 1.0 beta</p>
          <p>联系：admin@purple-island.com</p>
          <p><a href="#" className="text-link-blue">免责声明</a>：本站无法保证用户张贴内容的可靠性，投资有风险，健康问题请遵医嘱。</p>
      </div>
    </div>
  );
}
