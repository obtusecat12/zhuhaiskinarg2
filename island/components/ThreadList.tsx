import React from 'react';
import { MOCK_THREAD } from '../constants';

export const ThreadList: React.FC = () => {
  const thread = MOCK_THREAD;

  return (
    <div className="mt-4 text-sm">
      {/* Main Post */}
      <div className="block clear-both mb-4">
        <div className="float-left mr-5 mb-2 relative group">
           {/* Image Tools Overlay (Visible on hover/click in original, simplified here) */}
           {thread.image && (
             <>
                <div className="hidden group-hover:block absolute -top-6 left-0 whitespace-nowrap bg-white/80 p-1 text-[10px]">
                  <span className="cursor-pointer hover:underline text-link-blue mr-2">收起</span>
                  <a href={thread.image} target="_blank" rel="noreferrer" className="cursor-pointer hover:underline text-link-blue">查看大图</a>
                </div>
                <a href={thread.image} target="_blank" rel="noreferrer">
                    <img src={thread.image} alt="Thread" className="max-w-[250px] border-none" />
                </a>
             </>
           )}
        </div>
        
        <div className="mb-2">
          <span className="font-bold text-board-red mr-1">{thread.title}</span>
          <span className="font-bold text-green-700 mr-1">{thread.name}</span>
          <span className="text-gray-500 mr-1">{thread.date}</span>
          <span className="text-gray-500 mr-1">ID:{thread.uid}</span>
          
          <span className="text-tiny ml-1">[<a href="#" className="text-link-blue hover:text-purple-800">举报</a>]</span>
          <span className="text-tiny ml-1">[<a href="#" className="text-link-blue hover:text-purple-800">订阅</a>]</span>
          <span className="text-tiny ml-1">[<a href="#" className="text-link-blue hover:text-purple-800">只看PO</a>]</span>
          <a href="#" className="text-link-blue hover:text-purple-800 font-bold ml-1">No.{thread.id}</a>
          <span className="text-lg ml-1">[<a href="#" className="text-link-blue hover:text-purple-800">回应</a>]</span>
        </div>

        <div className="text-base leading-6 mx-10 my-4" dangerouslySetInnerHTML={{ __html: thread.content }} />
      </div>

      {/* Replies */}
      <div className="clear-both">
        {thread.replies.map(reply => (
          <div key={reply.id} className="table mb-1">
            <div className="table-cell align-top pr-1 text-gray-400">…</div>
            <div className="table-cell bg-reply-bg p-2 min-w-[300px] border border-transparent hover:border-purple-300 hover:shadow-sm">
              <div className="mb-1 text-tiny">
                 <span className="font-bold text-board-red mr-1">{reply.title || "无标题"}</span>
                 <span className="font-bold text-green-700 mr-1">{reply.name || "无名氏"}</span>
                 <span className="text-gray-500 mr-1">{reply.date}</span>
                 <span className="text-gray-500 mr-1">ID:{reply.uid}</span>
                 <span className="text-tiny ml-1">[<a href="#" className="text-link-blue hover:text-purple-800">举报</a>]</span>
                 <a href="#" className="text-link-blue hover:text-purple-800 font-bold ml-1">No.{reply.id}</a>
              </div>
              
              {/* Reply Image Handling */}
              {reply.image && (
                 <div className="float-left mr-4 mb-1 mt-1 relative group">
                   <div className="hidden group-hover:block absolute -top-5 left-0 whitespace-nowrap bg-white/80 p-1 text-[10px] z-10">
                     <a href={reply.image} target="_blank" rel="noreferrer" className="cursor-pointer hover:underline text-link-blue">查看大图</a>
                   </div>
                   <a href={reply.image} target="_blank" rel="noreferrer">
                      <img src={reply.image} alt="Reply Attachment" className="max-w-[150px] max-h-[150px] border-none" />
                   </a>
                 </div>
              )}

              <div className="pl-2" dangerouslySetInnerHTML={{ __html: reply.content }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};