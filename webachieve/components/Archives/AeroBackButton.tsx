import React, { useState } from 'react';

export const AeroBackButton = () => {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <a
      href="#hot-systems"
      onClick={(e) => { 
        e.preventDefault(); 
        const currentHash = window.location.hash;
        window.history.back(); 
        
        // Fallback: If history.back() fails (e.g., page was refreshed and history stack is empty),
        // force navigation to the hot-systems page after a short delay.
        setTimeout(() => {
          if (window.location.hash === currentHash) {
            window.location.hash = '#hot-systems';
          }
        }, 50);
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        position: 'fixed',
        top: '10px',
        left: '10px',
        zIndex: 10000,
        fontFamily: '"Segoe UI", Tahoma, sans-serif',
        fontSize: '12px',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: '#1e395b',
        padding: '5px 12px',
        borderRadius: '3px',
        border: '1px solid #7096c9',
        background: active 
          ? 'linear-gradient(to bottom, #bed6f0 0%, #a0c2e6 49%, #8ab2db 50%, #b3d1f0 100%)'
          : hover 
            ? 'linear-gradient(to bottom, #eaf6fd 0%, #d9f0fc 49%, #bee6fd 50%, #a7d9f5 100%)'
            : 'linear-gradient(to bottom, #f2f7fc 0%, #dbeaf9 49%, #b7d6f6 50%, #dceaf9 100%)',
        boxShadow: active
          ? 'inset 0 1px 3px rgba(0,0,0,0.2)'
          : hover 
            ? 'inset 0 0 0 1px rgba(255,255,255,0.8), 0 1px 2px rgba(0,0,0,0.2), 0 0 3px #66aadd'
            : 'inset 0 0 0 1px rgba(255,255,255,0.6), 0 1px 2px rgba(0,0,0,0.1)',
        transition: 'all 0.1s',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
      }}
    >
      <span style={{ marginRight: '4px', fontSize: '14px', lineHeight: '1' }}>«</span> 
      返回时光档案馆
    </a>
  );
};
