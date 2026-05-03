import React from 'react';

export const Tools: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  const reload = () => window.location.reload();

  return (
    <div className="fixed bottom-[180px] right-[10px] z-50 flex flex-col gap-1">
      <button onClick={scrollToTop} className="w-10 h-10 bg-purple-700 text-white opacity-50 hover:opacity-90 flex items-center justify-center text-lg">
        ▲
      </button>
      <button onClick={reload} className="w-10 h-10 bg-purple-700 text-white opacity-50 hover:opacity-90 flex items-center justify-center text-lg">
        ↻
      </button>
      <button onClick={scrollToBottom} className="w-10 h-10 bg-purple-700 text-white opacity-50 hover:opacity-90 flex items-center justify-center text-lg">
        ▼
      </button>
    </div>
  );
};