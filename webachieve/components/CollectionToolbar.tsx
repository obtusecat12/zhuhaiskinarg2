import React from 'react';

const CollectionToolbar: React.FC = () => {
  return (
    <div className="mb-6">
      <div className="flex gap-2 mb-3">
        <input type="text" placeholder="Search" className="flex-1 input-2016 px-4 py-1.5 text-sm focus:outline-none focus:border-[#4d90fe]" />
        <button className="btn-2016-primary px-6 py-1.5 text-sm font-bold shadow-sm">搜索此系列</button>
      </div>
      <div className="flex justify-between items-start mb-6 text-sm">
        <div className="flex flex-col gap-1.5">
          <label className="flex items-center gap-2 cursor-pointer text-gray-700"><input type="radio" name="searchType" defaultChecked className="accent-[#4d90fe]" /> 搜索元数据</label>
          <label className="flex items-center gap-2 cursor-pointer text-gray-700"><input type="radio" name="searchType" className="accent-[#4d90fe]" /> 搜索文本内容</label>
        </div>
        <a href="#" className="text-[#0056b3] hover:underline text-[13px]">高级搜索</a>
      </div>

      <div className="flex justify-between items-center border-b border-gray-300 pb-2">
        <div className="flex items-center gap-2 text-[13px]">
          <span className="text-gray-500 border border-gray-300 px-1.5 py-0.5 rounded cursor-pointer hover:bg-gray-50">↕</span>
          <span className="font-bold text-gray-700">排序方式:</span>
          <select className="border-none bg-transparent outline-none cursor-pointer text-gray-800 font-medium">
            <option>每周浏览量</option>
            <option>发布日期</option>
            <option>标题</option>
          </select>
        </div>
        <div className="flex gap-1 text-gray-500">
          <button className="btn-2016-aero px-2 py-1 text-black" title="Grid View">
            <svg className="w-4 h-4 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"/></svg>
          </button>
          <button className="btn-2016-aero px-2 py-1" title="List View">
            <svg className="w-4 h-4 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6h2v2H4V6zm4 0h12v2H8V6zM4 11h2v2H4v-2zm4 0h12v2H8v-2zM4 16h2v2H4v-2zm4 0h12v2H8v-2z"/></svg>
          </button>
          <button className="btn-2016-aero px-2 py-1" title="Compact View">
            <svg className="w-4 h-4 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24"><path d="M4 7h16v2H4V7zm0 4h16v2H4v-2zm0 4h16v2H4v-2z"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionToolbar;
