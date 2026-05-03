import React from 'react';
import { AeroBackButton } from './AeroBackButton';

export default function Blog2005() {
  return (
    <div style={{ backgroundColor: '#E0E8F0', fontFamily: '"Trebuchet MS", Arial, sans-serif', minHeight: '100vh', padding: '20px' }}>
      <AeroBackButton />
      <div style={{ width: '800px', margin: '0 auto', backgroundColor: '#FFFFFF', border: '1px solid #B0C4DE', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        
        {/* Header */}
        <div style={{ backgroundColor: '#4682B4', color: '#FFFFFF', padding: '40px 30px', borderBottom: '5px solid #2F4F4F' }}>
          <h1 style={{ margin: 0, fontSize: '36px', textShadow: '1px 1px 2px #000' }}>My Life in Pixels</h1>
          <p style={{ margin: '10px 0 0 0', fontStyle: 'italic', fontSize: '14px' }}>Just another weblog about web design, technology, and life.</p>
        </div>
        
        <div style={{ display: 'flex' }}>
          {/* Main Content */}
          <div style={{ width: '550px', padding: '30px', borderRight: '1px dotted #CCCCCC' }}>
            
            {/* Post 1 */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#4682B4', borderBottom: '1px solid #EEEEEE', paddingBottom: '5px', fontSize: '22px', margin: '0 0 10px 0' }}>Thursday, October 20, 2005</h2>
              <h3 style={{ margin: '0 0 15px 0', fontSize: '18px', color: '#333' }}>Getting started with AJAX</h3>
              <p style={{ lineHeight: '1.6', fontSize: '13px', color: '#444' }}>So I've been reading a lot about this new AJAX thing (Asynchronous JavaScript and XML). It seems to be the new buzzword everywhere since Jesse James Garrett coined the term earlier this year.</p>
              <p style={{ lineHeight: '1.6', fontSize: '13px', color: '#444' }}>I tried implementing an <code>XMLHttpRequest</code> today to update a part of a page without reloading the whole thing. It's pretty magical! No more full page refreshes just to submit a form or load new comments.</p>
              <p style={{ lineHeight: '1.6', fontSize: '13px', color: '#444' }}>Does anyone else think this is going to completely change how we build web apps? I feel like Web 2.0 is finally here.</p>
              <div style={{ fontSize: '11px', color: '#666666', marginTop: '15px', borderTop: '1px solid #EEEEEE', paddingTop: '5px', backgroundColor: '#F9F9F9', padding: '5px' }}>
                Posted by Alex at 4:23 PM | <a href="#" style={{ color: '#4682B4' }}>12 Comments</a> | <a href="#" style={{ color: '#4682B4' }}>Trackbacks (2)</a> | Tags: <a href="#" style={{ color: '#4682B4' }}>Web Design</a>, <a href="#" style={{ color: '#4682B4' }}>AJAX</a>
              </div>
            </div>

            {/* Post 2 */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#4682B4', borderBottom: '1px solid #EEEEEE', paddingBottom: '5px', fontSize: '22px', margin: '0 0 10px 0' }}>Monday, October 17, 2005</h2>
              <h3 style={{ margin: '0 0 15px 0', fontSize: '18px', color: '#333' }}>Firefox 1.5 Beta is out!</h3>
              <p style={{ lineHeight: '1.6', fontSize: '13px', color: '#444' }}>Just downloaded the new Firefox 1.5 Beta 2. The new tab reordering feature is great, and it feels much faster than 1.0. IE6 is really starting to show its age now.</p>
              <div style={{ fontSize: '11px', color: '#666666', marginTop: '15px', borderTop: '1px solid #EEEEEE', paddingTop: '5px', backgroundColor: '#F9F9F9', padding: '5px' }}>
                Posted by Alex at 9:15 AM | <a href="#" style={{ color: '#4682B4' }}>5 Comments</a> | <a href="#" style={{ color: '#4682B4' }}>Trackbacks (0)</a> | Tags: <a href="#" style={{ color: '#4682B4' }}>Browsers</a>, <a href="#" style={{ color: '#4682B4' }}>Firefox</a>
              </div>
            </div>

          </div>
          
          {/* Sidebar */}
          <div style={{ width: '250px', padding: '20px', fontSize: '12px', backgroundColor: '#F5F8FA' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ width: '100px', height: '100px', backgroundColor: '#DDD', margin: '0 auto 10px auto', border: '3px solid #FFF', boxShadow: '0 1px 3px rgba(0,0,0,0.2)', backgroundImage: 'url(https://picsum.photos/seed/alex/100/100)' }}></div>
              <h4 style={{ margin: '0 0 5px 0', color: '#333' }}>Alex</h4>
              <p style={{ margin: 0, color: '#666' }}>Web designer, coffee enthusiast, amateur photographer.</p>
            </div>

            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
              <a href="#" style={{ display: 'inline-block', backgroundColor: '#FF6600', color: '#FFF', padding: '2px 5px', textDecoration: 'none', fontWeight: 'bold', border: '1px solid #CC5200', fontSize: '10px' }}>XML | RSS 2.0</a>
            </div>
            
            <h4 style={{ color: '#4682B4', borderBottom: '1px solid #CCCCCC', margin: '0 0 10px 0', paddingBottom: '3px' }}>Blogroll</h4>
            <ul style={{ listStyleType: 'square', paddingLeft: '15px', margin: '0 0 20px 0', color: '#4682B4' }}>
              <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#333', textDecoration: 'none' }}>Slashdot</a></li>
              <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#333', textDecoration: 'none' }}>Boing Boing</a></li>
              <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#333', textDecoration: 'none' }}>A List Apart</a></li>
              <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#333', textDecoration: 'none' }}>Kottke.org</a></li>
              <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#333', textDecoration: 'none' }}>Daring Fireball</a></li>
            </ul>
            
            <h4 style={{ color: '#4682B4', borderBottom: '1px solid #CCCCCC', margin: '0 0 10px 0', paddingBottom: '3px' }}>Archives</h4>
            <ul style={{ listStyleType: 'square', paddingLeft: '15px', margin: '0 0 20px 0', color: '#4682B4' }}>
              <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#333', textDecoration: 'none' }}>October 2005</a></li>
              <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#333', textDecoration: 'none' }}>September 2005</a></li>
              <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#333', textDecoration: 'none' }}>August 2005</a></li>
              <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#333', textDecoration: 'none' }}>July 2005</a></li>
            </ul>

            <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '10px', color: '#999' }}>
              Powered by<br/>
              <b>Movable Type 3.2</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
