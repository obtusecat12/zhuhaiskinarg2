import React, { useState } from 'react';
import { AeroBackButton } from './AeroBackButton';

export default function Web20Startup2008() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredBtn, setHoveredBtn] = useState(false);

  return (
    <div style={{ backgroundColor: '#F5F5F5', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', minHeight: '100vh' }}>
      <AeroBackButton />
      
      {/* Header */}
      <div style={{ backgroundColor: '#333333', height: '60px', borderBottom: '4px solid #88CC00', display: 'flex', alignItems: 'center', padding: '0 50px', justifyContent: 'space-between', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', position: 'relative', zIndex: 10 }}>
        <h1 style={{ color: '#FFFFFF', margin: 0, fontSize: '28px', letterSpacing: '-1px', textShadow: '0 2px 2px rgba(0,0,0,0.5)' }}>
          Cloud<span style={{ color: '#88CC00' }}>Sync</span> 
          <sup style={{ fontSize: '10px', backgroundColor: '#FF3300', padding: '2px 4px', borderRadius: '4px', verticalAlign: 'super', marginLeft: '5px', textShadow: 'none', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5)' }}>BETA</sup>
        </h1>
        <div style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '20px', color: '#88CC00', cursor: 'pointer', borderBottom: '2px solid #88CC00', paddingBottom: '18px', marginTop: '20px' }}>Home</span>
          <span style={{ marginRight: '20px', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#88CC00'} onMouseLeave={(e) => e.currentTarget.style.color = '#FFF'}>Tour</span>
          <span style={{ marginRight: '20px', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#88CC00'} onMouseLeave={(e) => e.currentTarget.style.color = '#FFF'}>Pricing</span>
          <span style={{ marginRight: '20px', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#88CC00'} onMouseLeave={(e) => e.currentTarget.style.color = '#FFF'}>Blog</span>
          <span style={{ cursor: 'pointer', backgroundColor: '#555', padding: '5px 15px', borderRadius: '15px', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#666'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#555'}>Login</span>
        </div>
      </div>
      
      {/* Hero Section */}
      <div style={{ textAlign: 'center', padding: '80px 20px', background: 'linear-gradient(to bottom, #FFFFFF 0%, #E5E5E5 100%)', borderBottom: '1px solid #CCC', position: 'relative' }}>
        <h2 style={{ fontSize: '48px', color: '#333333', margin: '0 0 15px 0', textShadow: '1px 1px 0px #FFFFFF', letterSpacing: '-2px' }}>Sync your files to the cloud.</h2>
        <p style={{ fontSize: '22px', color: '#666666', margin: '0 0 50px 0', textShadow: '1px 1px 0px #FFFFFF' }}>Access your documents from anywhere, share with anyone.</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
          <button 
            onMouseEnter={() => setHoveredBtn(true)}
            onMouseLeave={() => setHoveredBtn(false)}
            style={{ 
              background: hoveredBtn ? 'linear-gradient(to bottom, #BCEE00 0%, #88CC00 100%)' : 'linear-gradient(to bottom, #AADD00 0%, #77B300 100%)', 
              border: '1px solid #558800', 
              borderRadius: '8px', 
              color: '#FFFFFF', 
              fontSize: '24px', 
              fontWeight: 'bold', 
              padding: '15px 40px', 
              cursor: 'pointer',
              textShadow: '0 -1px 1px rgba(0,0,0,0.3)',
              boxShadow: hoveredBtn ? 'inset 0 1px 0 rgba(255,255,255,0.8), 0 5px 15px rgba(0,0,0,0.3)' : 'inset 0 1px 0 rgba(255,255,255,0.5), 0 5px 10px rgba(0,0,0,0.2)',
              transition: 'all 0.2s'
            }}>
            Sign Up for Free
          </button>
          <span style={{ color: '#999', fontSize: '14px', fontStyle: 'italic' }}>or <a href="#" style={{ color: '#0066CC', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}>take the tour</a></span>
        </div>
        
        <div style={{ marginTop: '50px', position: 'relative', zIndex: 5 }}>
          <img src="https://picsum.photos/seed/macbook/600/300" alt="App Screenshot" style={{ border: '1px solid #CCC', padding: '5px', backgroundColor: '#FFF', borderRadius: '5px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
          {/* Fake Reflection */}
          <div style={{ height: '100px', width: '612px', margin: '0 auto', background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 100%)', transform: 'scaleY(-1)', opacity: 0.5 }}></div>
        </div>
      </div>

      {/* As seen on */}
      <div style={{ backgroundColor: '#FFF', padding: '20px', textAlign: 'center', borderBottom: '1px solid #E0E0E0' }}>
        <p style={{ color: '#999', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '15px' }}>As Featured On</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', opacity: 0.6 }}>
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#00A82D' }}>TechCrunch</span>
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#FF0000' }}>Mashable</span>
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#0000FF' }}>Wired</span>
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#FF9900' }}>Lifehacker</span>
        </div>
      </div>
      
      {/* Features with Tabs */}
      <div style={{ maxWidth: '1000px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', borderBottom: '2px solid #DDD', marginBottom: '30px' }}>
          {['Simple', 'Secure', 'Social'].map((tab, i) => (
            <div 
              key={i}
              onClick={() => setActiveTab(i)}
              style={{ 
                padding: '10px 30px', 
                fontSize: '18px', 
                fontWeight: 'bold', 
                color: activeTab === i ? '#333' : '#999', 
                borderBottom: activeTab === i ? '4px solid #88CC00' : '4px solid transparent',
                marginBottom: '-3px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}>
              {tab}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '40px', minHeight: '200px' }}>
          <div style={{ flex: 1 }}>
            {activeTab === 0 && (
              <div>
                <h3 style={{ fontSize: '28px', color: '#333', margin: '0 0 15px 0' }}>It just works.</h3>
                <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.6' }}>Just drag and drop your files into the magic folder on your desktop and they instantly sync to the cloud. No complicated setup, no FTP clients, just pure Web 2.0 magic.</p>
              </div>
            )}
            {activeTab === 1 && (
              <div>
                <h3 style={{ fontSize: '28px', color: '#333', margin: '0 0 15px 0' }}>Military-grade security.</h3>
                <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.6' }}>Bank-level 256-bit AES encryption keeps your data safe. We can't even read your files if we wanted to. Your privacy is our top priority.</p>
              </div>
            )}
            {activeTab === 2 && (
              <div>
                <h3 style={{ fontSize: '28px', color: '#333', margin: '0 0 15px 0' }}>Share with the world.</h3>
                <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.6' }}>Share public links with your friends on Twitter and Facebook, or collaborate in shared folders. It's the social way to manage your files.</p>
              </div>
            )}
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
             <div style={{ width: '200px', height: '200px', borderRadius: '100px', background: 'linear-gradient(to bottom, #FFF 0%, #DDD 100%)', margin: '0 auto', border: '1px solid #CCC', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '80px', color: '#88CC00', transition: 'transform 0.3s', transform: `scale(${activeTab !== null ? 1 : 0.9})` }}>
               {activeTab === 0 ? '☁️' : activeTab === 1 ? '🔒' : '🤝'}
             </div>
          </div>
        </div>
      </div>

      {/* Pricing Table */}
      <div style={{ backgroundColor: '#EAEAEA', padding: '60px 20px', borderTop: '1px solid #DDD' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px', color: '#333', margin: '0 0 40px 0', letterSpacing: '-1px' }}>Simple Pricing</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
          
          <div style={{ flex: 1, backgroundColor: '#FFF', borderRadius: '8px', border: '1px solid #CCC', padding: '30px', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '24px', color: '#666', margin: '0 0 10px 0' }}>Basic</h3>
            <div style={{ fontSize: '48px', color: '#333', fontWeight: 'bold', margin: '0 0 20px 0' }}>Free</div>
            <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 30px 0', color: '#666', lineHeight: '2' }}>
              <li><b>2GB</b> Storage</li>
              <li>Basic Support</li>
              <li>Public Sharing</li>
            </ul>
            <button style={{ background: '#EEE', border: '1px solid #CCC', borderRadius: '4px', padding: '10px 20px', fontSize: '16px', color: '#333', cursor: 'pointer', width: '100%' }}>Sign Up</button>
          </div>

          <div style={{ flex: 1, backgroundColor: '#FFF', borderRadius: '8px', border: '2px solid #88CC00', padding: '30px', textAlign: 'center', boxShadow: '0 10px 20px rgba(136,204,0,0.2)', transform: 'scale(1.05)', position: 'relative', zIndex: 2 }}>
            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#88CC00', color: '#FFF', padding: '2px 10px', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold' }}>MOST POPULAR</div>
            <h3 style={{ fontSize: '24px', color: '#88CC00', margin: '0 0 10px 0' }}>Pro</h3>
            <div style={{ fontSize: '48px', color: '#333', fontWeight: 'bold', margin: '0 0 20px 0' }}>$9<span style={{ fontSize: '18px', color: '#999' }}>/mo</span></div>
            <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 30px 0', color: '#666', lineHeight: '2' }}>
              <li><b>50GB</b> Storage</li>
              <li>Priority Support</li>
              <li>Advanced Sharing</li>
            </ul>
            <button style={{ background: 'linear-gradient(to bottom, #AADD00 0%, #77B300 100%)', border: '1px solid #558800', borderRadius: '4px', padding: '10px 20px', fontSize: '16px', color: '#FFF', fontWeight: 'bold', cursor: 'pointer', width: '100%', textShadow: '0 -1px 1px rgba(0,0,0,0.3)' }}>Go Pro</button>
          </div>

        </div>
      </div>
      
      {/* Footer */}
      <div style={{ backgroundColor: '#222', color: '#888', padding: '40px 20px', textAlign: 'center', fontSize: '13px' }}>
        <p style={{ margin: '0 0 10px 0' }}>"CloudSync is going to change how we work." - <span style={{ color: '#FFF' }}>TechCrunch</span></p>
        <p>© 2008 CloudSync Inc. All rights reserved. | <a href="#" style={{ color: '#88CC00', textDecoration: 'none' }}>Terms</a> | <a href="#" style={{ color: '#88CC00', textDecoration: 'none' }}>Privacy</a> | <a href="#" style={{ color: '#88CC00', textDecoration: 'none' }}>Contact</a></p>
      </div>
    </div>
  );
}
