import React from 'react';
import { AeroBackButton } from './AeroBackButton';

export default function Skeuomorphic2012() {
  return (
    <div style={{ backgroundColor: '#5A6372', backgroundImage: 'url(https://www.transparenttextures.com/patterns/linen.png)', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
      <AeroBackButton />
      <div style={{ width: '600px', backgroundColor: '#FDF7D3', borderRadius: '8px', boxShadow: '0 15px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,0,0,0.2)', overflow: 'hidden', position: 'relative' }}>
        
        {/* Leather header */}
        <div style={{ backgroundColor: '#5C3A21', backgroundImage: 'url(https://www.transparenttextures.com/patterns/leather.png)', height: '64px', borderBottom: '2px solid #3A2211', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 15px', boxShadow: '0 3px 6px rgba(0,0,0,0.4)', zIndex: 10, position: 'relative' }}>
          
          {/* Stitches */}
          <div style={{ position: 'absolute', bottom: '3px', left: '0', right: '0', borderBottom: '1px dashed rgba(255,255,255,0.3)', opacity: 0.5 }}></div>
          <div style={{ position: 'absolute', top: '3px', left: '0', right: '0', borderBottom: '1px dashed rgba(255,255,255,0.3)', opacity: 0.5 }}></div>
          
          <button style={{ background: 'linear-gradient(to bottom, #F4F4F4 0%, #B8B8B8 100%)', border: '1px solid #333', borderRadius: '4px', padding: '6px 12px', color: '#333', fontWeight: 'bold', fontSize: '13px', textShadow: '0 1px 0 rgba(255,255,255,0.8)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 2px rgba(0,0,0,0.5)', cursor: 'pointer', zIndex: 11, display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ fontSize: '16px', lineHeight: 1 }}>◀</span> Accounts
          </button>
          
          <h1 style={{ color: '#FFFFFF', margin: 0, fontSize: '22px', textShadow: '0 -1px 1px rgba(0,0,0,0.8)', fontWeight: 'bold', zIndex: 11, letterSpacing: '1px' }}>Notes</h1>
          
          <button style={{ background: 'linear-gradient(to bottom, #F4F4F4 0%, #B8B8B8 100%)', border: '1px solid #333', borderRadius: '4px', padding: '4px 12px', color: '#333', fontWeight: 'bold', fontSize: '18px', textShadow: '0 1px 0 rgba(255,255,255,0.8)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 2px rgba(0,0,0,0.5)', cursor: 'pointer', zIndex: 11, lineHeight: 1 }}>
            +
          </button>
        </div>
        
        {/* Torn paper edge */}
        <div style={{ height: '12px', background: 'linear-gradient(135deg, transparent 50%, #FDF7D3 50%)', backgroundSize: '12px 12px', position: 'relative', zIndex: 9, marginTop: '-6px', filter: 'drop-shadow(0 -1px 1px rgba(0,0,0,0.2))' }}></div>
        
        {/* Notepad body */}
        <div style={{ padding: '10px 40px 40px 40px', minHeight: '450px', backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #A3D1E0 31px, #A3D1E0 32px)', backgroundAttachment: 'local', lineHeight: '32px', fontSize: '20px', color: '#333333', fontFamily: '"Marker Felt", "Comic Sans MS", cursive', position: 'relative' }}>
          
          {/* Red margin line */}
          <div style={{ position: 'absolute', left: '60px', top: 0, bottom: 0, width: '2px', backgroundColor: '#E5989B', opacity: 0.7 }}></div>
          <div style={{ position: 'absolute', left: '64px', top: 0, bottom: 0, width: '1px', backgroundColor: '#E5989B', opacity: 0.4 }}></div>
          
          <div style={{ paddingLeft: '40px', paddingTop: '10px' }}>
            <div style={{ textAlign: 'right', fontSize: '14px', color: '#888', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', marginBottom: '10px' }}>September 19, 2012</div>
            
            Meeting with the design team<br/>
            - Discuss the new iOS 6 update<br/>
            - Need more leather textures for the calendar app<br/>
            - Make the buttons glossier<br/>
            - Add more drop shadows to everything<br/>
            <br/>
            Don't forget to buy milk!<br/>
            <br/>
            <span style={{ color: '#0000EE', textDecoration: 'underline' }}>http://apple.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
