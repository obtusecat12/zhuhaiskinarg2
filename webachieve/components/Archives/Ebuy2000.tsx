import React, { useState } from 'react';
import { AeroBackButton } from './AeroBackButton';

export default function Ebuy2000() {
  const [searchQuery, setSearchQuery] = useState('Digital Camera');

  return (
    <div style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif', fontSize: '12px', backgroundColor: '#FFFFFF', color: '#000000', minHeight: '100vh', padding: '10px' }}>
      <AeroBackButton />
      <div style={{ maxWidth: '950px', margin: '0 auto' }}>
        {/* Header */}
        <table width="100%" border={0} cellSpacing={0} cellPadding={0} style={{ marginBottom: '10px' }}>
          <tbody>
            <tr>
              <td width="150" valign="bottom">
                <h1 style={{ margin: 0, color: '#E53238', fontSize: '36px', letterSpacing: '-2px', fontStyle: 'italic' }}>
                  <span style={{ color: '#0064D2' }}>e</span><span style={{ color: '#E53238' }}>B</span><span style={{ color: '#F5AF02' }}>u</span><span style={{ color: '#86B817' }}>y</span>
                </h1>
              </td>
              <td valign="bottom" style={{ paddingBottom: '5px' }}>
                <a href="#" style={{ color: '#0000CC', textDecoration: 'underline', fontSize: '11px' }}>home</a> | 
                <a href="#" style={{ color: '#0000CC', textDecoration: 'underline', fontSize: '11px' }}> my eBuy</a> | 
                <a href="#" style={{ color: '#0000CC', textDecoration: 'underline', fontSize: '11px' }}> site map</a> | 
                <a href="#" style={{ color: '#0000CC', textDecoration: 'underline', fontSize: '11px' }}> sign in</a>
              </td>
              <td align="right" valign="bottom" style={{ paddingBottom: '5px' }}>
                <table border={1} cellSpacing={0} cellPadding={2} style={{ borderColor: '#000000', backgroundColor: '#EEEEEE' }}>
                  <tbody>
                    <tr>
                      <td style={{ fontSize: '11px' }}>
                        <form style={{ margin: 0 }} onSubmit={(e) => e.preventDefault()}>
                          <b>Smart Search</b> <input type="text" size={20} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} /> <input type="submit" value="Search" />
                        </form>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Navigation Bar */}
        <table width="100%" border={0} cellSpacing={0} cellPadding={4} style={{ backgroundColor: '#FFCC00', borderTop: '2px solid #000000', borderBottom: '2px solid #000000', marginBottom: '15px' }}>
          <tbody>
            <tr>
              <td align="center" style={{ fontWeight: 'bold' }}>
                <a href="#" style={{ color: '#000000', textDecoration: 'none' }}>Browse</a>
              </td>
              <td align="center" style={{ fontWeight: 'bold' }}>
                <a href="#" style={{ color: '#000000', textDecoration: 'none' }}>Sell</a>
              </td>
              <td align="center" style={{ fontWeight: 'bold' }}>
                <a href="#" style={{ color: '#000000', textDecoration: 'none' }}>Services</a>
              </td>
              <td align="center" style={{ fontWeight: 'bold' }}>
                <a href="#" style={{ color: '#000000', textDecoration: 'none' }}>Search</a>
              </td>
              <td align="center" style={{ fontWeight: 'bold' }}>
                <a href="#" style={{ color: '#000000', textDecoration: 'none' }}>Help</a>
              </td>
              <td align="center" style={{ fontWeight: 'bold' }}>
                <a href="#" style={{ color: '#000000', textDecoration: 'none' }}>Community</a>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Main Content */}
        <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
          <tbody>
            <tr>
              {/* Left Sidebar */}
              <td width="180" valign="top" style={{ paddingRight: '15px' }}>
                <table width="100%" border={1} cellSpacing={0} cellPadding={4} style={{ borderColor: '#CCCCCC', marginBottom: '15px' }}>
                  <tbody>
                    <tr style={{ backgroundColor: '#EEEEEE' }}>
                      <td style={{ fontWeight: 'bold', fontSize: '13px' }}>Categories</td>
                    </tr>
                    <tr>
                      <td style={{ lineHeight: '1.5' }}>
                        <a href="#" style={{ color: '#0000CC' }}>Antiques & Art</a> (12,405)<br/>
                        <a href="#" style={{ color: '#0000CC' }}>Books</a> (54,210)<br/>
                        <a href="#" style={{ color: '#0000CC' }}>Cars & Vehicles</a> (8,932)<br/>
                        <a href="#" style={{ color: '#0000CC' }}>Clothing & Accessories</a> (32,100)<br/>
                        <a href="#" style={{ color: '#0000CC' }}>Coins & Stamps</a> (19,844)<br/>
                        <a href="#" style={{ color: '#0000CC' }}>Collectibles</a> (89,012)<br/>
                        <a href="#" style={{ color: '#0000CC' }}>Computers</a> (45,677)<br/>
                        <a href="#" style={{ color: '#0000CC' }}>Dolls & Bears</a> (11,230)<br/>
                        <a href="#" style={{ color: '#0000CC', fontWeight: 'bold' }}>Electronics & Cameras</a> (67,890)<br/>
                        <div style={{ paddingLeft: '10px', fontSize: '11px' }}>
                          <a href="#" style={{ color: '#0000CC' }}>Audio & Video</a><br/>
                          <a href="#" style={{ color: '#0000CC' }}>Car Audio</a><br/>
                          <a href="#" style={{ color: '#0000CC', fontWeight: 'bold' }}>Digital Cameras</a><br/>
                          <a href="#" style={{ color: '#0000CC' }}>Gadgets</a><br/>
                        </div>
                        <a href="#" style={{ color: '#0000CC' }}>Jewelry & Watches</a> (23,450)<br/>
                        <a href="#" style={{ color: '#0000CC' }}>Music & Movies</a> (102,340)<br/>
                        <a href="#" style={{ color: '#0000CC' }}>Pottery & Glass</a> (15,670)<br/>
                        <a href="#" style={{ color: '#0000CC' }}>Sports Memorabilia</a> (34,560)<br/>
                        <a href="#" style={{ color: '#0000CC' }}>Toys & Hobbies</a> (56,780)<br/>
                        <a href="#" style={{ color: '#0000CC' }}>Everything Else</a> (99,999+)
                      </td>
                    </tr>
                  </tbody>
                </table>
                
                <div style={{ border: '1px solid #FFCC00', padding: '5px', textAlign: 'center', backgroundColor: '#FFFFCC', marginBottom: '15px' }}>
                  <b>SafeHarbor</b><br/>
                  <span style={{ fontSize: '10px' }}>Safe trading guidelines</span><br/>
                  <a href="#" style={{ fontSize: '10px', color: '#0000CC' }}>Learn More</a>
                </div>

                <table width="100%" border={1} cellSpacing={0} cellPadding={4} style={{ borderColor: '#CCCCCC' }}>
                  <tbody>
                    <tr style={{ backgroundColor: '#EEEEEE' }}>
                      <td style={{ fontWeight: 'bold', fontSize: '11px', textAlign: 'center' }}>Featured Charity</td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: 'center', fontSize: '11px' }}>
                        <img src="https://picsum.photos/seed/charity/100/40" alt="Charity" style={{ marginBottom: '5px' }} /><br/>
                        Bid on celebrity items to support the Red Cross.<br/>
                        <a href="#" style={{ color: '#0000CC' }}>Click here</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>

              {/* Right Content */}
              <td valign="top">
                <h2 style={{ fontSize: '18px', margin: '0 0 10px 0', borderBottom: '1px solid #CCCCCC', paddingBottom: '5px' }}>
                  Search Results for <span style={{ color: '#E53238' }}>"{searchQuery}"</span>
                </h2>
                
                <div style={{ backgroundColor: '#EEEEEE', padding: '5px', marginBottom: '10px', fontSize: '11px', display: 'flex', justifyContent: 'space-between' }}>
                  <span><b>124 items found</b> in Electronics & Cameras. Showing items 1 to 50.</span>
                  <span>Sort by: <select style={{ fontSize: '10px' }}><option>Ending Soonest</option><option>Newly Listed</option><option>Lowest Price</option><option>Highest Price</option></select></span>
                </div>

                <table width="100%" border={0} cellSpacing={0} cellPadding={4}>
                  <tbody>
                    <tr style={{ backgroundColor: '#000066', color: '#FFFFFF', fontWeight: 'bold', fontSize: '11px' }}>
                      <th align="center" width="40">Pic</th>
                      <th align="left">Item Title</th>
                      <th align="right" width="80">Price</th>
                      <th align="center" width="50">Bids</th>
                      <th align="center" width="80">Ends In</th>
                    </tr>
                    
                    {[
                      { title: 'Sony Mavica MVC-FD73 0.3MP - Uses Floppy Disks!', price: '$150.00', bids: 12, ends: '2h 15m', hot: true, pic: true },
                      { title: 'Nikon Coolpix 950 - MINT CONDITION IN BOX', price: '$325.50', bids: 5, ends: '1d 4h', hot: false, pic: true },
                      { title: 'Kodak DC210 Plus Zoom Digital Camera', price: '$89.99', bids: 0, ends: '5h 30m', hot: false, pic: false },
                      { title: 'Olympus D-340R 1.3 Megapixel Camera', price: '$112.00', bids: 3, ends: '45m', hot: true, pic: true },
                      { title: 'L@@K! Canon PowerShot S10 2.1MP - NR!!!', price: '$205.00', bids: 24, ends: '12m', hot: true, pic: true },
                      { title: 'Fuji FinePix 1400 Zoom - Broken, for parts', price: '$15.50', bids: 2, ends: '3d 12h', hot: false, pic: false },
                      { title: 'NEW Sony Cyber-shot DSC-S70 3.3MP Carl Zeiss', price: '$599.00', bids: 0, ends: '6d 1h', hot: false, pic: true },
                      { title: 'Casio QV-10A LCD Digital Camera Retro', price: '$45.00', bids: 8, ends: '1h 05m', hot: false, pic: true },
                      { title: 'Minolta Dimage V - Swivel Lens!', price: '$75.25', bids: 1, ends: '2d 8h', hot: false, pic: false },
                      { title: 'Toshiba PDR-M4 2.1MP Digital Camera', price: '$120.00', bids: 4, ends: '18h 20m', hot: false, pic: true },
                      { title: 'Agfa ePhoto 1280 - Rare Vintage Digital', price: '$60.00', bids: 0, ends: '4d 5h', hot: false, pic: true },
                      { title: 'Epson PhotoPC 500 w/ cables and manual', price: '$35.00', bids: 2, ends: '10h 15m', hot: false, pic: false },
                      { title: 'HP PhotoSmart C20 - 1 Megapixel', price: '$50.00', bids: 0, ends: '1d 12h', hot: false, pic: true },
                      { title: 'Panasonic PalmCam PV-DC1080', price: '$85.00', bids: 5, ends: '3h 40m', hot: true, pic: true },
                      { title: 'Ricoh RDC-2 Multimedia Camera', price: '$110.00', bids: 1, ends: '5d 2h', hot: false, pic: false },
                    ].map((item, i) => (
                      <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#EEEEEE', borderBottom: '1px solid #CCCCCC' }}>
                        <td align="center">
                          {item.pic ? (
                            <div style={{ width: '30px', height: '20px', backgroundColor: '#DDDDDD', border: '1px solid #999', fontSize: '8px', lineHeight: '20px', backgroundImage: `url(https://picsum.photos/seed/cam${i}/30/20)` }}></div>
                          ) : (
                            <div style={{ fontSize: '9px', color: '#999' }}>No Pic</div>
                          )}
                        </td>
                        <td>
                          <a href="#" style={{ color: '#0000CC', textDecoration: 'underline', fontWeight: item.hot ? 'bold' : 'normal' }}>{item.title}</a>
                          {item.hot && <span style={{ color: '#E53238', fontSize: '10px', marginLeft: '5px', fontWeight: 'bold' }}>HOT!</span>}
                        </td>
                        <td align="right" style={{ fontWeight: 'bold' }}>{item.price}</td>
                        <td align="center">{item.bids}</td>
                        <td align="center" style={{ color: item.ends.includes('m') && !item.ends.includes('d') && !item.ends.includes('h') ? '#E53238' : '#000000' }}>{item.ends}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '11px', padding: '10px', backgroundColor: '#EEEEEE', border: '1px solid #CCC' }}>
                  <a href="#" style={{ color: '#0000CC' }}>Previous</a> | <b>1</b> | <a href="#" style={{ color: '#0000CC' }}>2</a> | <a href="#" style={{ color: '#0000CC' }}>3</a> | <a href="#" style={{ color: '#0000CC' }}>4</a> | <a href="#" style={{ color: '#0000CC' }}>5</a> | <a href="#" style={{ color: '#0000CC' }}>Next</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        
        <hr style={{ marginTop: '30px', marginBottom: '10px' }} />
        <div style={{ textAlign: 'center', fontSize: '10px', color: '#666666' }}>
          <a href="#" style={{ color: '#0000CC' }}>Announcements</a> | <a href="#" style={{ color: '#0000CC' }}>Register</a> | <a href="#" style={{ color: '#0000CC' }}>SafeHarbor</a> | <a href="#" style={{ color: '#0000CC' }}>Feedback Forum</a> | <a href="#" style={{ color: '#0000CC' }}>About eBuy</a><br/><br/>
          Copyright © 1995-2000 eBuy Inc. All Rights Reserved.<br/>
          Designated trademarks and brands are the property of their respective owners.<br/>
          Use of this Web site constitutes acceptance of the eBuy <a href="#" style={{ color: '#0000CC' }}>User Agreement</a> and <a href="#" style={{ color: '#0000CC' }}>Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
}
