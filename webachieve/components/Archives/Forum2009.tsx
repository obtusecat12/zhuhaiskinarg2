import React from 'react';
import { AeroBackButton } from './AeroBackButton';

export default function Forum2009() {
  return (
    <div style={{ backgroundColor: '#E9EFF3', fontFamily: 'Verdana, Arial, Helvetica, sans-serif', fontSize: '12px', minHeight: '100vh', padding: '20px' }}>
      <AeroBackButton />
      <div style={{ width: '950px', margin: '0 auto', backgroundColor: '#FFFFFF', border: '1px solid #C4D5E3', borderRadius: '5px', padding: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', paddingBottom: '10px', borderBottom: '1px solid #E9EFF3' }}>
          <div>
            <h1 style={{ color: '#006699', margin: 0, fontSize: '28px', letterSpacing: '-1px' }}>TechTalk Forums</h1>
            <div style={{ color: '#666', fontSize: '11px', marginTop: '5px' }}>The ultimate community for PC enthusiasts</div>
          </div>
          <div style={{ fontSize: '11px', color: '#666666', textAlign: 'right' }}>
            Welcome, <b>Guest</b>. Please <a href="#" style={{ color: '#006699' }}>Login</a> or <a href="#" style={{ color: '#006699' }}>Register</a>.<br/>
            <div style={{ marginTop: '5px' }}>
              <input type="text" placeholder="Search..." style={{ border: '1px solid #CCC', padding: '2px 5px', fontSize: '11px' }} />
              <button style={{ backgroundColor: '#E9EFF3', border: '1px solid #CCC', fontSize: '11px', cursor: 'pointer' }}>Go</button>
            </div>
          </div>
        </div>
        
        {/* Breadcrumbs */}
        <div style={{ backgroundColor: '#D1DCEB', padding: '8px 10px', fontSize: '11px', marginBottom: '15px', borderRadius: '3px', border: '1px solid #C4D5E3' }}>
          <a href="#" style={{ color: '#006699', textDecoration: 'none', fontWeight: 'bold' }}>Board index</a> ‹ <a href="#" style={{ color: '#006699', textDecoration: 'none', fontWeight: 'bold' }}>Hardware</a> ‹ <a href="#" style={{ color: '#006699', textDecoration: 'none', fontWeight: 'bold' }}>PC Building</a>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <h2 style={{ color: '#105289', fontSize: '20px', margin: 0 }}>Is the Core i7 920 worth it?</h2>
          <button style={{ background: 'linear-gradient(to bottom, #F5F5F5 0%, #E5E5E5 100%)', border: '1px solid #CCC', borderRadius: '3px', padding: '4px 10px', fontSize: '11px', fontWeight: 'bold', color: '#333', cursor: 'pointer' }}>POST REPLY</button>
        </div>
        
        {/* Post 1 */}
        <div style={{ border: '1px solid #C4D5E3', borderRadius: '4px', overflow: 'hidden', marginBottom: '10px' }}>
          <div style={{ backgroundColor: '#D1DCEB', padding: '5px 10px', borderBottom: '1px solid #C4D5E3', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: 'bold', color: '#105289' }}>PCMaster99</span>
            <span style={{ fontSize: '10px', color: '#666666' }}>Posted: Mon Oct 12, 2009 4:23 pm</span>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '160px', backgroundColor: '#ECF1F6', padding: '15px 10px', borderRight: '1px solid #C4D5E3', textAlign: 'center' }}>
              <div style={{ fontWeight: 'bold', color: '#105289', marginBottom: '5px' }}>PCMaster99</div>
              <div style={{ fontSize: '10px', color: '#666', marginBottom: '10px' }}>Advanced Member</div>
              <div style={{ width: '90px', height: '90px', backgroundColor: '#FFF', margin: '0 auto 10px auto', border: '1px solid #CCC', backgroundImage: 'url(https://picsum.photos/seed/pc/90/90)' }}></div>
              <div style={{ fontSize: '10px', color: '#333', textAlign: 'left', paddingLeft: '10px' }}>
                <b>Posts:</b> 1,432<br/>
                <b>Joined:</b> Jan 2008<br/>
                <b>Location:</b> NY
              </div>
            </div>
            <div style={{ padding: '15px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: 1 }}>
                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>I'm planning a new build and trying to decide between the Core 2 Quad Q9550 and the new Core i7 920. The i7 requires a new X58 motherboard and DDR3 RAM which makes the whole build much more expensive.</p>
                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>Is the performance jump really worth the extra $300? I mostly play Crysis and WoW.</p>
                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>Thanks in advance!</p>
              </div>
              <div style={{ borderTop: '1px solid #CCCCCC', paddingTop: '10px', marginTop: '20px', fontSize: '10px', color: '#666666', lineHeight: '1.4' }}>
                _________________<br/>
                <b>Current Rig:</b> C2D E8400 @ 3.6GHz | 4GB Corsair DDR2 800 | EVGA 8800GT 512MB | Antec 900<br/>
                <i>"640K ought to be enough for anybody."</i>
              </div>
            </div>
          </div>
        </div>

        {/* Post 2 */}
        <div style={{ border: '1px solid #C4D5E3', borderRadius: '4px', overflow: 'hidden', marginBottom: '10px' }}>
          <div style={{ backgroundColor: '#D1DCEB', padding: '5px 10px', borderBottom: '1px solid #C4D5E3', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: 'bold', color: '#AA0000' }}>TechGuru</span>
            <span style={{ fontSize: '10px', color: '#666666' }}>Posted: Mon Oct 12, 2009 4:45 pm</span>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '160px', backgroundColor: '#ECF1F6', padding: '15px 10px', borderRight: '1px solid #C4D5E3', textAlign: 'center' }}>
              <div style={{ fontWeight: 'bold', color: '#AA0000', marginBottom: '5px' }}>TechGuru</div>
              <div style={{ fontSize: '10px', color: '#666', marginBottom: '10px' }}>Moderator</div>
              <div style={{ width: '90px', height: '90px', backgroundColor: '#FFF', margin: '0 auto 10px auto', border: '1px solid #CCC', backgroundImage: 'url(https://picsum.photos/seed/guru/90/90)' }}></div>
              <div style={{ fontSize: '10px', color: '#333', textAlign: 'left', paddingLeft: '10px' }}>
                <b>Posts:</b> 15,204<br/>
                <b>Joined:</b> Mar 2005<br/>
                <b>Location:</b> CA
              </div>
            </div>
            <div style={{ padding: '15px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: 1 }}>
                <div style={{ backgroundColor: '#F5F5F5', border: '1px solid #CCC', padding: '10px', marginBottom: '15px', fontSize: '11px' }}>
                  <b>PCMaster99 wrote:</b><br/>
                  Is the performance jump really worth the extra $300? I mostly play Crysis and WoW.
                </div>
                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>If you're just gaming, the Q9550 is still a beast, especially if you overclock it. However, the LGA775 socket is a dead end. Going with X58 gives you an upgrade path for the future.</p>
                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>Also, DDR3 prices are coming down. I'd say bite the bullet and go i7. You won't regret it.</p>
              </div>
              <div style={{ borderTop: '1px solid #CCCCCC', paddingTop: '10px', marginTop: '20px', fontSize: '10px', color: '#666666', lineHeight: '1.4' }}>
                _________________<br/>
                <b>Forum Rules</b> | <b>Search before posting!</b>
              </div>
            </div>
          </div>
        </div>

        {/* Post 3 */}
        <div style={{ border: '1px solid #C4D5E3', borderRadius: '4px', overflow: 'hidden', marginBottom: '10px' }}>
          <div style={{ backgroundColor: '#D1DCEB', padding: '5px 10px', borderBottom: '1px solid #C4D5E3', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: 'bold', color: '#006600' }}>OverclockerZ</span>
            <span style={{ fontSize: '10px', color: '#666666' }}>Posted: Mon Oct 12, 2009 5:12 pm</span>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '160px', backgroundColor: '#ECF1F6', padding: '15px 10px', borderRight: '1px solid #C4D5E3', textAlign: 'center' }}>
              <div style={{ fontWeight: 'bold', color: '#006600', marginBottom: '5px' }}>OverclockerZ</div>
              <div style={{ fontSize: '10px', color: '#666', marginBottom: '10px' }}>Enthusiast</div>
              <div style={{ width: '90px', height: '90px', backgroundColor: '#FFF', margin: '0 auto 10px auto', border: '1px solid #CCC', backgroundImage: 'url(https://picsum.photos/seed/oc/90/90)' }}></div>
              <div style={{ fontSize: '10px', color: '#333', textAlign: 'left', paddingLeft: '10px' }}>
                <b>Posts:</b> 3,892<br/>
                <b>Joined:</b> Nov 2006<br/>
                <b>Location:</b> TX
              </div>
            </div>
            <div style={{ padding: '15px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: 1 }}>
                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>I just upgraded from a Q6600 to an i7 920 D0 stepping. I have it running at 4.0GHz on air (Prolimatech Megahalems). It absolutely destroys Crysis compared to my old setup.</p>
                <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>Make sure you get the D0 stepping, not the C0. It overclocks much better with lower voltages.</p>
              </div>
              <div style={{ borderTop: '1px solid #CCCCCC', paddingTop: '10px', marginTop: '20px', fontSize: '10px', color: '#666666', lineHeight: '1.4' }}>
                _________________<br/>
                <b>i7 920 D0 @ 4.0GHz</b> | Asus P6T Deluxe | 6GB Corsair Dominator 1600MHz | GTX 285 SLI | WD VelociRaptor 300GB
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
          <div style={{ fontSize: '11px' }}><a href="#" style={{ color: '#006699' }}>Return to PC Building</a></div>
          <div style={{ fontSize: '11px' }}>Display posts from previous: <select style={{ fontSize: '11px' }}><option>All posts</option></select> <button style={{ fontSize: '11px' }}>Go</button></div>
        </div>

        {/* Footer Stats */}
        <div style={{ marginTop: '30px', borderTop: '1px solid #C4D5E3', paddingTop: '10px', fontSize: '10px', color: '#666', display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <b>Board Statistics:</b> Total posts <b>1,245,892</b> | Total topics <b>85,432</b> | Total members <b>45,120</b><br/>
            Our newest member <b>NoobBuilder123</b>
          </div>
          <div style={{ textAlign: 'right' }}>
            Powered by phpBB © 2000, 2002, 2005, 2007 phpBB Group<br/>
            Time: 0.045s | Queries: 12
          </div>
        </div>
      </div>
    </div>
  );
}
