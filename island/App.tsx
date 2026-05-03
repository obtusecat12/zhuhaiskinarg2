import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { BottomNav } from './components/BottomNav';
import { Tools } from './components/Tools';
import { NewspaperView } from './components/NewspaperView';
import { HomeView } from './components/HomeView';
import { ThreadView } from './components/ThreadView';

function App() {
  const [view, setView] = useState(() => {
    const hash = window.location.hash;
    if (hash === '#/newspaper') return 'newspaper';
    if (hash.startsWith('#/thread')) return 'thread';
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/newspaper') {
        setView('newspaper');
      } else if (hash.startsWith('#/thread')) {
        setView('thread');
      } else {
        setView('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (view === 'newspaper') {
    return <NewspaperView />;
  }

  return (
    <div className="min-h-screen text-[#444] pb-[60px]">
      <Sidebar />
      
      {view === 'home' ? <HomeView /> : <ThreadView />}

      <BottomNav />
      <Tools />
    </div>
  );
}

export default App;
