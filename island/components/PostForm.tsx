import React from 'react';
import { EMOTICONS } from '../constants';

export const PostForm: React.FC = () => {
  return (
    <div className="mx-auto w-full md:w-4/5 lg:w-[600px] mb-4 bg-white border border-gray-300 shadow-sm text-tiny">
      <form onSubmit={(e) => e.preventDefault()}>
        {/* Row 1: Mode */}
        <div className="grid grid-cols-5 gap-[1px] border-b border-gray-200">
          <div className="col-span-1 bg-board-accent font-bold p-1 flex items-center justify-center text-board-purple">
            回应模式
          </div>
          <div className="col-span-4 p-1 flex items-center pl-2">
            No.199283
          </div>
        </div>

        {/* Row 2: Name + Manager */}
        <div className="grid grid-cols-5 gap-[1px] border-b border-gray-200">
          <div className="col-span-1 bg-board-accent font-bold p-1 flex items-center justify-center text-board-purple">
            名 称
          </div>
          <div className="col-span-3 p-1">
            <input type="text" className="w-full bg-white text-black border border-gray-300 p-1 rounded-sm focus:border-board-purple focus:bg-purple-50 outline-none h-[25px]" />
          </div>
          <div className="col-span-1 p-1 flex items-center">
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="checkbox" className="accent-board-purple h-3 w-3" /> <span className="text-[10px]">管理员</span>
            </label>
          </div>
        </div>

        {/* Row 3: Email */}
        <div className="grid grid-cols-5 gap-[1px] border-b border-gray-200">
          <div className="col-span-1 bg-board-accent font-bold p-1 flex items-center justify-center text-board-purple">
            E-mail
          </div>
          <div className="col-span-4 p-1">
            <input type="text" className="w-full bg-white text-black border border-gray-300 p-1 rounded-sm focus:border-board-purple focus:bg-purple-50 outline-none h-[25px]" />
          </div>
        </div>

        {/* Row 4: Title + Submit */}
        <div className="grid grid-cols-5 gap-[1px] border-b border-gray-200">
          <div className="col-span-1 bg-board-accent font-bold p-1 flex items-center justify-center text-board-purple">
            标题
          </div>
          <div className="col-span-3 p-1">
            <input type="text" className="w-full bg-white text-black border border-gray-300 p-1 rounded-sm focus:border-board-purple focus:bg-purple-50 outline-none h-[25px]" />
          </div>
          <div className="col-span-1 p-1">
            <button className="w-full h-full bg-gray-100 border border-gray-300 rounded-sm hover:bg-gray-200 text-xs text-black transition-colors">送出</button>
          </div>
        </div>

        {/* Row 5: Emoticons */}
        <div className="grid grid-cols-5 gap-[1px] border-b border-gray-200">
          <div className="col-span-1 bg-board-accent font-bold p-1 flex items-center justify-center text-board-purple">
            颜文字
          </div>
          <div className="col-span-4 p-1">
            <select className="border border-gray-300 p-1 rounded-sm w-[100px] text-xs h-[25px] bg-white text-black focus:border-board-purple outline-none">
              <option value="">无</option>
              {EMOTICONS.map(emo => <option key={emo} value={emo}>{emo}</option>)}
            </select>
          </div>
        </div>

        {/* Row 6: Content */}
        <div className="grid grid-cols-5 gap-[1px] border-b border-gray-200">
          <div className="col-span-1 bg-board-accent font-bold p-1 flex items-center justify-center text-board-purple h-[90px]">
            正文
          </div>
          <div className="col-span-4 p-1">
            <textarea className="w-full h-full bg-white text-black border border-gray-300 p-1 rounded-sm focus:border-board-purple focus:bg-purple-50 outline-none resize-none"></textarea>
          </div>
        </div>

        {/* Row 7: Image */}
        <div className="grid grid-cols-5 gap-[1px]">
          <div className="col-span-1 bg-board-accent font-bold p-1 flex items-center justify-center text-board-purple">
            附加图片
          </div>
          <div className="col-span-4 p-1 flex items-center gap-2">
            <label className="flex items-center gap-1 cursor-pointer text-xs">
              <input type="checkbox" defaultChecked className="accent-board-purple h-3 w-3" /> <span className="text-gray-600">水印</span>
            </label>
            <input 
              type="file" 
              className="text-xs text-gray-500
                file:mr-4 file:py-1 file:px-2
                file:rounded-sm file:border-0
                file:text-[10px] file:font-semibold
                file:bg-purple-50 file:text-board-purple
                hover:file:bg-purple-100
                cursor-pointer" 
            />
          </div>
        </div>

      </form>
      <div className="p-2 text-xs text-gray-500 bg-white border-t border-gray-200 mt-1">
        好像有点冷，我去把门guansaoijdizhxuiohdasohdegbasd
      </div>
    </div>
  );
};
