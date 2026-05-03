import React from 'react';
import { AeroBackButton } from './AeroBackButton';

export default function GeoCities1998() {
  return (
    <div style={{ backgroundColor: '#000000', color: '#00FF00', fontFamily: '"Comic Sans MS", "Chalkboard SE", "Times New Roman", serif', minHeight: '100vh', padding: '20px', backgroundImage: 'url(https://www.transparenttextures.com/patterns/stardust.png)', backgroundRepeat: 'repeat' }}>
      <AeroBackButton />
      <div style={{ maxWidth: '800px', margin: '0 auto', border: '5px ridge #FF0000', padding: '20px', backgroundColor: 'rgba(0,0,0,0.8)' }}>
        <center>
          <h1 style={{ color: '#FF00FF', textDecoration: 'blink', fontSize: '48px', textShadow: '2px 2px #FFFFFF' }}>~*~ Welcome to John\'s Cyber Zone ~*~</h1>
          
          <div style={{ margin: '20px 0', border: '2px dashed yellow', padding: '10px', display: 'inline-block', backgroundColor: '#000080' }}>
            <marquee scrollamount={8} width="400" style={{ color: '#FFFF00', fontSize: '24px', fontWeight: 'bold' }}>
              !!! WARNING: THIS PAGE IS HEAVILY UNDER CONSTRUCTION !!!
            </marquee>
          </div>
          
          <br/><br/>
          
          <table border={4} cellPadding={10} style={{ backgroundColor: '#008080', color: 'white', borderColor: '#00FFFF', width: '80%' }}>
            <tbody>
              <tr>
                <td align="center"><a href="#" style={{ color: '#FFFF00', fontWeight: 'bold', fontSize: '18px' }}>[ Home ]</a></td>
                <td align="center"><a href="#" style={{ color: '#00FF00', fontWeight: 'bold', fontSize: '18px' }}>[ My Pets ]</a></td>
                <td align="center"><a href="#" style={{ color: '#FF00FF', fontWeight: 'bold', fontSize: '18px' }}>[ Cool Links ]</a></td>
                <td align="center"><a href="#" style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }}>[ Sign Guestbook ]</a></td>
              </tr>
            </tbody>
          </table>
          
          <br/><br/>
          
          <div style={{ textAlign: 'left', padding: '0 40px', fontSize: '18px', lineHeight: '1.5' }}>
            <p>Hi surfing dude! I'm John. Welcome to my personal homepage on the World Wide Web.</p>
            <p>I created this page using <b>Microsoft FrontPage 98</b>. It's really cool!</p>
            <p>Things I like:</p>
            <ul>
              <li>Playing <i>Doom</i> and <i>Quake</i></li>
              <li>Listening to Nirvana and Pearl Jam</li>
              <li>Surfing the Information Superhighway</li>
              <li>Watching The X-Files</li>
            </ul>
            <p style={{ color: 'red' }}><b>Update (10/12/98):</b> Added new MIDI files to the music section!</p>
          </div>
          
          <br/><br/>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', margin: '20px 0' }}>
            <div style={{ border: '1px solid white', padding: '5px', backgroundColor: 'blue', color: 'white', fontSize: '12px' }}>Best viewed with<br/><b>Netscape Navigator 4.0</b></div>
            <div style={{ border: '1px solid white', padding: '5px', backgroundColor: 'black', color: 'yellow', fontSize: '12px' }}>Resolution:<br/><b>800x600</b></div>
            <div style={{ border: '1px solid white', padding: '5px', backgroundColor: 'red', color: 'white', fontSize: '12px' }}>Hosted by<br/><b>GeoCities</b></div>
          </div>
          
          <hr style={{ width: '80%', color: '#00FF00' }} />
          
          <h3>Webring</h3>
          <table border={1} cellPadding={5} style={{ backgroundColor: '#333', color: 'white', fontSize: '12px' }}>
            <tbody>
              <tr>
                <td align="center">
                  This site is a proud member of the <b>Cool Gamers Webring</b><br/>
                  <a href="#" style={{ color: 'cyan' }}>[Previous Site]</a> | <a href="#" style={{ color: 'cyan' }}>[Random Site]</a> | <a href="#" style={{ color: 'cyan' }}>[Next Site]</a>
                </td>
              </tr>
            </tbody>
          </table>
          
          <br/><br/>
          
          <div style={{ border: '3px solid white', display: 'inline-block', padding: '5px', backgroundColor: '#222' }}>
            <div style={{ fontSize: '12px', marginBottom: '5px' }}>You are visitor number:</div>
            <div style={{ fontFamily: '"Courier New", Courier, monospace', backgroundColor: 'black', color: 'red', padding: '5px', fontSize: '24px', letterSpacing: '5px', border: 'inset 2px gray' }}>
              001337
            </div>
          </div>
          
          <p style={{ fontSize: '10px', marginTop: '30px', color: '#666' }}>Copyright © 1998 John Doe. Do not steal my HTML.</p>
        </center>
      </div>
    </div>
  );
}
