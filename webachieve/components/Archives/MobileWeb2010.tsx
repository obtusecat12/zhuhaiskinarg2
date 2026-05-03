import React, { useState, useEffect } from 'react';
import { AeroBackButton } from './AeroBackButton';

export default function MobileWeb2010() {
  const [activeTab, setActiveTab] = useState('news');
  const [refreshing, setRefreshing] = useState(false);
  const [startY, setStartY] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (window.scrollY === 0) {
      setStartY(e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startY > 0) {
      const currentY = e.touches[0].clientY;
      const diff = currentY - startY;
      if (diff > 0 && diff < 100) {
        setTranslateY(diff);
      }
    }
  };

  const handleTouchEnd = () => {
    if (translateY > 50) {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
        setTranslateY(0);
      }, 1500);
    } else {
      setTranslateY(0);
    }
    setStartY(0);
  };

  return (
    <div style={{ backgroundColor: '#333', display: 'flex', justifyContent: 'center', minHeight: '100vh', padding: '20px' }}>
      <AeroBackButton />
      {/* Fake iPhone 3GS / 4 bezel */}
      <div style={{ width: '320px', backgroundColor: '#000', minHeight: '480px', border: '15px solid #111', borderRadius: '30px', overflow: 'hidden', fontFamily: 'Helvetica, Arial, sans-serif', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.8), inset 0 0 0 2px #333', display: 'flex', flexDirection: 'column' }}>
        
        {/* Status Bar */}
        <div style={{ backgroundColor: '#000000', color: '#FFFFFF', textAlign: 'center', padding: '2px 5px', fontSize: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold', zIndex: 20 }}>
          <div style={{ display: 'flex', gap: '2px' }}>
            <div style={{ width: '4px', height: '10px', backgroundColor: '#FFF' }}></div>
            <div style={{ width: '4px', height: '10px', backgroundColor: '#FFF' }}></div>
            <div style={{ width: '4px', height: '10px', backgroundColor: '#FFF' }}></div>
            <div style={{ width: '4px', height: '10px', backgroundColor: '#FFF' }}></div>
            <div style={{ width: '4px', height: '10px', backgroundColor: '#555' }}></div>
            <span style={{ marginLeft: '4px' }}>3G</span>
          </div>
          <span>12:00 PM</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            <span>100%</span>
            <div style={{ width: '20px', height: '10px', border: '1px solid #FFF', padding: '1px' }}>
              <div style={{ width: '100%', height: '100%', backgroundColor: '#FFF' }}></div>
            </div>
          </div>
        </div>

        {/* App Header */}
        <div style={{ background: 'linear-gradient(to bottom, #7A9BCE 0%, #5176B6 50%, #3B62A6 51%, #2B4A7A 100%)', color: '#FFFFFF', padding: '10px', textAlign: 'center', fontWeight: 'bold', borderBottom: '1px solid #152A4A', textShadow: '0 -1px 1px rgba(0,0,0,0.5)', fontSize: '18px', position: 'relative', zIndex: 20 }}>
          <button style={{ position: 'absolute', left: '10px', top: '8px', background: 'linear-gradient(to bottom, #6B8CBF 0%, #4A6CA8 50%, #355694 51%, #264370 100%)', border: '1px solid #152A4A', borderRadius: '5px', color: '#FFF', padding: '4px 8px', fontSize: '12px', fontWeight: 'bold', textShadow: '0 -1px 1px rgba(0,0,0,0.5)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3)', cursor: 'pointer' }}>Sections</button>
          Mobile News
          <button style={{ position: 'absolute', right: '10px', top: '8px', background: 'linear-gradient(to bottom, #6B8CBF 0%, #4A6CA8 50%, #355694 51%, #264370 100%)', border: '1px solid #152A4A', borderRadius: '5px', color: '#FFF', padding: '4px 8px', fontSize: '12px', fontWeight: 'bold', textShadow: '0 -1px 1px rgba(0,0,0,0.5)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3)', cursor: 'pointer' }} onClick={() => { setRefreshing(true); setTimeout(() => setRefreshing(false), 1000); }}>Reload</button>
        </div>

        {/* Content Area */}
        <div 
          style={{ backgroundColor: '#FFFFFF', flex: 1, overflowY: 'auto', position: 'relative' }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          
          {/* Pull to refresh indicator */}
          <div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', fontSize: '12px', position: 'absolute', top: '-50px', left: 0, right: 0, transform: `translateY(${translateY}px)`, transition: refreshing ? 'transform 0.3s' : 'none' }}>
            {refreshing ? 'Loading...' : translateY > 30 ? 'Release to refresh' : 'Pull down to refresh'}
          </div>

          <div style={{ transform: `translateY(${translateY}px)`, transition: refreshing ? 'transform 0.3s' : 'none' }}>
            {/* Section Header */}
            <div style={{ padding: '5px 10px', background: 'linear-gradient(to bottom, #B0BCCF 0%, #8D9EB9 100%)', color: '#FFF', fontSize: '14px', fontWeight: 'bold', borderBottom: '1px solid #666', textShadow: '0 1px 1px rgba(0,0,0,0.3)' }}>
              Top Stories
            </div>
            
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
              {[
                { title: 'Apple announces iPad tablet device', date: 'Jan 27, 2010', img: 'https://picsum.photos/seed/ipad/60/60' },
                { title: 'Instagram launches on App Store', date: 'Oct 6, 2010', img: 'https://picsum.photos/seed/insta/60/60' },
                { title: 'Angry Birds hits 50 million downloads', date: 'Dec 2010', img: 'https://picsum.photos/seed/bird/60/60' },
                { title: 'Twitter redesigns web interface', date: 'Sep 14, 2010', img: 'https://picsum.photos/seed/twit/60/60' },
                { title: 'Kinect for Xbox 360 released', date: 'Nov 4, 2010', img: 'https://picsum.photos/seed/xbox/60/60' },
                { title: 'WikiLeaks publishes diplomatic cables', date: 'Nov 28, 2010', img: 'https://picsum.photos/seed/wiki/60/60' },
                { title: 'Foursquare reaches 5 million users', date: 'Dec 2010', img: 'https://picsum.photos/seed/4sq/60/60' }
              ].map((item, i) => (
                <li key={i} style={{ borderBottom: '1px solid #E0E0E0', padding: '10px', display: 'flex', alignItems: 'center', gap: '10px', position: 'relative', cursor: 'pointer', transition: 'background 0.2s' }} onMouseDown={(e) => e.currentTarget.style.backgroundColor = '#E5E5EA'} onMouseUp={(e) => e.currentTarget.style.backgroundColor = 'transparent'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <img src={item.img} alt="" style={{ width: '60px', height: '60px', border: '1px solid #CCC', borderRadius: '4px' }} />
                  <div style={{ flex: 1, paddingRight: '20px' }}>
                    <a href="#" style={{ color: '#000', textDecoration: 'none', fontSize: '15px', fontWeight: 'bold', display: 'block', lineHeight: '1.2', marginBottom: '5px' }}>{item.title}</a>
                    <div style={{ fontSize: '12px', color: '#888' }}>{item.date}</div>
                  </div>
                  {/* Chevron */}
                  <div style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', color: '#CCC', fontSize: '20px', fontWeight: 'bold' }}>›</div>
                </li>
              ))}
            </ul>
            
            <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#F5F5F5', borderTop: '1px solid #E0E0E0' }}>
              <button style={{ background: 'linear-gradient(to bottom, #FFF 0%, #E0E0E0 100%)', border: '1px solid #AAA', borderRadius: '8px', padding: '10px 20px', fontSize: '14px', fontWeight: 'bold', color: '#333', width: '100%', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', cursor: 'pointer' }} onMouseDown={(e) => e.currentTarget.style.background = '#D0D0D0'} onMouseUp={(e) => e.currentTarget.style.background = 'linear-gradient(to bottom, #FFF 0%, #E0E0E0 100%)'}>
                Load More Stories...
              </button>
              <div style={{ marginTop: '15px' }}>
                <a href="#" style={{ color: '#3B62A6', textDecoration: 'none', fontSize: '12px' }}>View Full Site</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tab Bar */}
        <div style={{ height: '50px', background: 'linear-gradient(to bottom, #333 0%, #111 50%, #000 51%, #000 100%)', display: 'flex', borderTop: '1px solid #444', zIndex: 20 }}>
          {[
            { id: 'news', label: 'News', icon: '📰' },
            { id: 'sports', label: 'Sports', icon: '⚽' },
            { id: 'tech', label: 'Tech', icon: '💻' },
            { id: 'more', label: 'More', icon: '⋯' }
          ].map(tab => (
            <div 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{ 
                flex: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: activeTab === tab.id ? '#FFF' : '#888',
                background: activeTab === tab.id ? 'linear-gradient(to bottom, #444 0%, #222 50%, #111 51%, #111 100%)' : 'transparent',
                cursor: 'pointer',
                boxShadow: activeTab === tab.id ? 'inset 0 2px 5px rgba(0,0,0,0.5)' : 'none'
              }}
            >
              <span style={{ fontSize: '20px', marginBottom: '2px', filter: activeTab === tab.id ? 'drop-shadow(0 0 2px #FFF)' : 'none' }}>{tab.icon}</span>
              <span style={{ fontSize: '10px', fontWeight: 'bold' }}>{tab.label}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
