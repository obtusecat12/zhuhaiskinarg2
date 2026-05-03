import React from 'react';

export const Pagination: React.FC = () => {
  return (
    <ul className="flex list-none p-0 text-center gap-1 mt-4 text-sm">
      <li>
        <span className="inline-block min-w-[16px] px-2 py-1 bg-gray-100 text-gray-400 border border-gray-200 rounded cursor-not-allowed">上一页</span>
      </li>
      <li>
        <span className="inline-block min-w-[16px] px-2 py-1 bg-board-purple text-white border border-board-purple rounded">1</span>
      </li>
      <li>
        <a href="#" className="inline-block min-w-[16px] px-2 py-1 bg-gray-100 text-gray-800 border border-gray-200 rounded hover:bg-white hover:border-gray-300">2</a>
      </li>
      <li>
        <a href="#" className="inline-block min-w-[16px] px-2 py-1 bg-gray-100 text-gray-800 border border-gray-200 rounded hover:bg-white hover:border-gray-300">3</a>
      </li>
      <li>
        <a href="#" className="inline-block min-w-[16px] px-2 py-1 bg-gray-100 text-gray-800 border border-gray-200 rounded hover:bg-white hover:border-gray-300">下一页</a>
      </li>
      <li>
        <a href="#" className="inline-block min-w-[16px] px-2 py-1 bg-gray-100 text-gray-800 border border-gray-200 rounded hover:bg-white hover:border-gray-300">末页</a>
      </li>
    </ul>
  );
};