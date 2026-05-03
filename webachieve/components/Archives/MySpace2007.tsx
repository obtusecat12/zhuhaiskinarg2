import React, { useState } from 'react';
import { AeroBackButton } from './AeroBackButton';

export default function MySpace2007() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredFriend, setHoveredFriend] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: '#000000', backgroundImage: 'url(https://www.transparenttextures.com/patterns/black-scales.png)', color: '#FFFFFF', fontFamily: 'Arial, sans-serif', minHeight: '100vh', padding: '20px' }}>
      <AeroBackButton />
      <div style={{ width: '800px', margin: '0 auto', backgroundColor: 'rgba(0,0,0,0.85)', border: '2px solid #FF00FF', padding: '10px', boxShadow: '0 0 20px #FF00FF' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '20px', borderBottom: '1px dashed #FF00FF', paddingBottom: '10px', position: 'relative' }}>
          <h1 style={{ color: '#FF00FF', textShadow: '2px 2px #00FFFF', fontFamily: '"Impact", sans-serif', fontSize: '40px', margin: '0 0 5px 0' }}>xX_Dark_Angel_Xx</h1>
          <p style={{ color: '#00FFFF', fontStyle: 'italic', margin: 0 }}>"Nobody understands me... except my music."</p>
          {/* Fake glitter graphic */}
          <div style={{ position: 'absolute', top: '10px', right: '20px', width: '100px', height: '50px', backgroundImage: 'url(https://picsum.photos/seed/glitter/100/50)', filter: 'contrast(200%) hue-rotate(280deg)', opacity: 0.8 }}></div>
        </div>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          {/* Left Column */}
          <div style={{ width: '300px' }}>
            
            {/* Profile Info */}
            <div style={{ border: '1px solid #FF00FF', padding: '10px', marginBottom: '20px', backgroundColor: '#111' }}>
              <h3 style={{ color: '#FF00FF', margin: '0 0 10px 0', fontSize: '16px' }}>xX_Dark_Angel_Xx</h3>
              <div style={{ width: '180px', height: '180px', backgroundColor: '#333', margin: '0 auto 10px auto', border: '2px solid #00FFFF', backgroundImage: 'url(https://picsum.photos/seed/emo/180/180)', filter: 'grayscale(100%) contrast(150%)', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}></div>
              <div style={{ fontSize: '12px', lineHeight: '1.5' }}>
                <p style={{ margin: '0 0 5px 0' }}>Female<br/>18 years old<br/>California<br/>United States</p>
                <p style={{ margin: '0 0 5px 0', color: '#00FFFF' }}>Last Login: 10/24/2007</p>
              </div>
              <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginTop: '10px', fontSize: '11px' }}>
                <a href="#" style={{ color: '#FF00FF', textDecoration: 'none', border: '1px solid #FF00FF', padding: '2px 5px', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#330033'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>View My Pics</a>
                <a href="#" style={{ color: '#FF00FF', textDecoration: 'none', border: '1px solid #FF00FF', padding: '2px 5px', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#330033'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Add to Friends</a>
                <a href="#" style={{ color: '#FF00FF', textDecoration: 'none', border: '1px solid #FF00FF', padding: '2px 5px', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#330033'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Send Message</a>
              </div>
            </div>
            
            {/* Music Player */}
            <div style={{ border: '1px solid #FF00FF', padding: '10px', marginBottom: '20px', backgroundColor: '#111' }}>
              <h3 style={{ color: '#FF00FF', margin: '0 0 10px 0', fontSize: '14px' }}>xX_Dark_Angel_Xx's Music</h3>
              <div style={{ height: '80px', backgroundColor: '#222', border: '1px solid #555', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#888', position: 'relative' }}>
                <div style={{ color: '#00FFFF', marginBottom: '5px', fontWeight: 'bold' }}>My Chemical Romance</div>
                <div>Welcome to the Black Parade</div>
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                  <button onClick={() => setIsPlaying(true)} style={{ background: isPlaying ? '#555' : '#333', border: '1px solid #666', color: isPlaying ? '#00FFFF' : '#FFF', cursor: 'pointer', transition: 'all 0.2s' }}>▶</button>
                  <button onClick={() => setIsPlaying(false)} style={{ background: !isPlaying ? '#555' : '#333', border: '1px solid #666', color: !isPlaying ? '#00FFFF' : '#FFF', cursor: 'pointer', transition: 'all 0.2s' }}>⏸</button>
                  <button onClick={() => setIsPlaying(false)} style={{ background: '#333', border: '1px solid #666', color: '#FFF', cursor: 'pointer' }}>⏹</button>
                </div>
                {isPlaying && (
                  <div style={{ position: 'absolute', bottom: '5px', left: '10px', right: '10px', height: '2px', backgroundColor: '#00FFFF', animation: 'progress 30s linear infinite' }}></div>
                )}
              </div>
              <style>{`
                @keyframes progress {
                  0% { width: 0%; }
                  100% { width: 100%; }
                }
              `}</style>
            </div>

            {/* Details */}
            <div style={{ border: '1px solid #FF00FF', padding: '10px', backgroundColor: '#111' }}>
              <h3 style={{ color: '#FF00FF', margin: '0 0 10px 0', fontSize: '14px' }}>xX_Dark_Angel_Xx's Details</h3>
              <table width="100%" style={{ fontSize: '11px' }}>
                <tbody>
                  <tr><td width="40%" style={{ color: '#00FFFF', padding: '2px 0' }}>Status:</td><td>Single</td></tr>
                  <tr><td style={{ color: '#00FFFF', padding: '2px 0' }}>Zodiac:</td><td>Scorpio</td></tr>
                  <tr><td style={{ color: '#00FFFF', padding: '2px 0' }}>Smoke / Drink:</td><td>No / No</td></tr>
                  <tr><td style={{ color: '#00FFFF', padding: '2px 0' }}>Occupation:</td><td>High School</td></tr>
                  <tr><td style={{ color: '#00FFFF', padding: '2px 0' }}>Orientation:</td><td>Straight</td></tr>
                  <tr><td style={{ color: '#00FFFF', padding: '2px 0' }}>Body Type:</td><td>Average</td></tr>
                </tbody>
              </table>
            </div>

          </div>
          
          {/* Right Column */}
          <div style={{ flex: 1 }}>
            
            {/* Blurbs */}
            <div style={{ border: '1px solid #FF00FF', padding: '15px', marginBottom: '20px', backgroundColor: '#111' }}>
              <h3 style={{ color: '#FF00FF', margin: '0 0 15px 0', textAlign: 'center', fontSize: '18px' }}>xX_Dark_Angel_Xx's Blurbs</h3>
              
              <h4 style={{ color: '#00FFFF', margin: '10px 0 5px 0', fontSize: '14px' }}>About me:</h4>
              <p style={{ fontSize: '12px', lineHeight: '1.6' }}>Music is my life. I love going to shows. Don't add me if you're a prep. <span style={{ color: '#FF00FF', fontWeight: 'bold' }}>&lt;3</span><br/><br/>If you can't handle me at my worst, you don't deserve me at my best.<br/><br/><i>"I'm not okay, I promise."</i></p>
              
              <h4 style={{ color: '#00FFFF', margin: '15px 0 5px 0', fontSize: '14px' }}>Who I'd like to meet:</h4>
              <p style={{ fontSize: '12px', lineHeight: '1.6' }}>Gerard Way, Pete Wentz, anyone who likes good music. People who are real and don't fake it. No posers allowed.</p>
            </div>
            
            {/* Top 8 */}
            <div style={{ border: '1px solid #FF00FF', padding: '15px', marginBottom: '20px', backgroundColor: '#111' }}>
              <h3 style={{ color: '#FF00FF', margin: '0 0 10px 0', textAlign: 'center', fontSize: '16px' }}>xX_Dark_Angel_Xx's Friend Space</h3>
              <p style={{ fontSize: '12px', fontWeight: 'bold', textAlign: 'center', marginBottom: '15px' }}>xX_Dark_Angel_Xx has <span style={{ color: '#00FFFF' }}>420</span> friends.</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', textAlign: 'center' }}>
                {[
                  { name: 'Tom', img: 'https://picsum.photos/seed/tom/80/80' },
                  { name: 'xX_Blood_Xx', img: 'https://picsum.photos/seed/blood/80/80' },
                  { name: 'Broken_Heart', img: 'https://picsum.photos/seed/heart/80/80' },
                  { name: 'FallOutBoyFan', img: 'https://picsum.photos/seed/fob/80/80' },
                  { name: 'Sk8erBoi', img: 'https://picsum.photos/seed/sk8/80/80' },
                  { name: 'Poison', img: 'https://picsum.photos/seed/poison/80/80' },
                  { name: 'Raven', img: 'https://picsum.photos/seed/raven/80/80' },
                  { name: 'Vampire', img: 'https://picsum.photos/seed/vamp/80/80' }
                ].map((friend, i) => (
                  <div key={i} onMouseEnter={() => setHoveredFriend(i)} onMouseLeave={() => setHoveredFriend(null)}>
                    <p style={{ fontSize: '11px', margin: '0 0 5px 0', color: hoveredFriend === i ? '#FFF' : '#00FFFF', fontWeight: 'bold', transition: 'color 0.2s' }}>{friend.name}</p>
                    <div style={{ width: '80px', height: '80px', backgroundColor: '#444', margin: '0 auto', border: hoveredFriend === i ? '2px solid #FFF' : '1px solid #FF00FF', backgroundImage: `url(${friend.img})`, filter: hoveredFriend === i ? 'grayscale(0%)' : 'grayscale(50%)', transition: 'all 0.3s', cursor: 'pointer' }}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comments */}
            <div style={{ border: '1px solid #FF00FF', padding: '15px', backgroundColor: '#111' }}>
              <h3 style={{ color: '#FF00FF', margin: '0 0 15px 0', textAlign: 'center', fontSize: '16px' }}>xX_Dark_Angel_Xx's Friends Comments</h3>
              <p style={{ fontSize: '11px', textAlign: 'right', color: '#00FFFF' }}>Displaying 3 of 156 comments (<a href="#" style={{ color: '#FF00FF' }}>View All</a>)</p>
              
              <div style={{ display: 'flex', gap: '10px', backgroundColor: '#222', padding: '10px', marginBottom: '10px', border: '1px solid #333' }}>
                <div style={{ width: '80px', textAlign: 'center' }}>
                  <div style={{ width: '60px', height: '60px', backgroundColor: '#444', margin: '0 auto 5px auto', backgroundImage: 'url(https://picsum.photos/seed/blood/60/60)' }}></div>
                  <div style={{ fontSize: '10px', color: '#00FFFF' }}>xX_Blood_Xx</div>
                </div>
                <div style={{ flex: 1, fontSize: '12px' }}>
                  <div style={{ fontSize: '10px', color: '#888', marginBottom: '5px' }}>Oct 23, 2007 8:45 PM</div>
                  <p style={{ margin: 0 }}>omg ur page looks so good! love the new layout. see u at the show on friday!! rawr xD</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', backgroundColor: '#222', padding: '10px', marginBottom: '10px', border: '1px solid #333' }}>
                <div style={{ width: '80px', textAlign: 'center' }}>
                  <div style={{ width: '60px', height: '60px', backgroundColor: '#444', margin: '0 auto 5px auto', backgroundImage: 'url(https://picsum.photos/seed/heart/60/60)' }}></div>
                  <div style={{ fontSize: '10px', color: '#00FFFF' }}>Broken_Heart</div>
                </div>
                <div style={{ flex: 1, fontSize: '12px' }}>
                  <div style={{ fontSize: '10px', color: '#888', marginBottom: '5px' }}>Oct 22, 2007 11:12 PM</div>
                  <p style={{ margin: 0 }}>hey... just dropping by. life sucks right now but ur music recs help. thx.</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '10px', backgroundColor: '#222', padding: '10px', marginBottom: '10px', border: '1px solid #333' }}>
                <div style={{ width: '80px', textAlign: 'center' }}>
                  <div style={{ width: '60px', height: '60px', backgroundColor: '#444', margin: '0 auto 5px auto', backgroundImage: 'url(https://picsum.photos/seed/tom/60/60)' }}></div>
                  <div style={{ fontSize: '10px', color: '#00FFFF' }}>Tom</div>
                </div>
                <div style={{ flex: 1, fontSize: '12px' }}>
                  <div style={{ fontSize: '10px', color: '#888', marginBottom: '5px' }}>Oct 20, 2007 1:00 PM</div>
                  <p style={{ margin: 0 }}>Thanks for adding me! Welcome to MySpace!</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
