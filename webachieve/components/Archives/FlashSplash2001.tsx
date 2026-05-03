import React, { useState, useEffect } from 'react';
import { AeroBackButton } from './AeroBackButton';

export default function FlashSplash2001() {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15);
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: '#000000', color: '#FFFFFF', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'Verdana, sans-serif', overflow: 'hidden', position: 'relative' }}>
      <AeroBackButton />
      
      {/* Fake abstract tech background */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.2, backgroundImage: 'radial-gradient(circle at 50% 50%, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '120%', height: '1px', backgroundColor: '#00FFFF', opacity: 0.3, transform: 'rotate(15deg)' }}></div>
      <div style={{ position: 'absolute', bottom: '30%', left: '-10%', width: '120%', height: '1px', backgroundColor: '#FF00FF', opacity: 0.3, transform: 'rotate(-10deg)' }}></div>

      <div style={{ border: '1px solid #333333', padding: '40px', textAlign: 'center', width: '640px', height: '480px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle, #111111 0%, #000000 100%)', position: 'relative', zIndex: 10, boxShadow: '0 0 50px rgba(0,255,255,0.1)' }}>
        
        {/* Sound Toggle */}
        <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '9px', color: '#666', letterSpacing: '1px', cursor: 'pointer' }}>
          SOUND [ON] | OFF
        </div>

        <h1 style={{ letterSpacing: '15px', fontWeight: 'normal', color: '#FFFFFF', margin: '0 0 10px 0', fontSize: '32px', textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>M A T R I X</h1>
        <p style={{ fontSize: '10px', color: '#00FFFF', marginBottom: '60px', letterSpacing: '5px' }}>D E S I G N   S T U D I O S</p>
        
        {loadingProgress < 100 ? (
          <div style={{ width: '200px', textAlign: 'center' }}>
            <div style={{ fontSize: '9px', color: '#666', marginBottom: '5px', letterSpacing: '2px' }}>LOADING EXPERIENCE...</div>
            <div style={{ width: '100%', height: '2px', backgroundColor: '#222', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', backgroundColor: '#00FFFF', width: `${loadingProgress}%`, transition: 'width 0.2s' }}></div>
            </div>
            <div style={{ fontSize: '9px', color: '#00FFFF', marginTop: '5px' }}>{loadingProgress}%</div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <a href="#" style={{ display: 'inline-block', border: '1px solid #00FFFF', padding: '8px 30px', color: '#00FFFF', textDecoration: 'none', fontSize: '11px', letterSpacing: '3px', transition: 'all 0.3s', backgroundColor: 'rgba(0,255,255,0.1)' }}>
              ENTER SITE
            </a>
            <a href="#" style={{ fontSize: '9px', color: '#666', textDecoration: 'none', letterSpacing: '1px' }}>SKIP INTRO &gt;&gt;</a>
          </div>
        )}
        
        <div style={{ position: 'absolute', bottom: '20px', fontSize: '9px', color: '#444444', textAlign: 'center', width: '100%' }}>
          <p style={{ margin: '0 0 5px 0' }}>Requires Macromedia Flash Player 5.0 or higher.</p>
          <p style={{ margin: '0 0 10px 0' }}>Best viewed at 1024x768 resolution with broadband connection.</p>
          <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Get Flash Player</a> &nbsp;|&nbsp; <a href="#" style={{ color: '#666', textDecoration: 'none' }}>HTML Version</a>
        </div>
      </div>
    </div>
  );
}
