import React, { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';
import CollectionHeader from './CollectionHeader';
import CollectionSidebar from './CollectionSidebar';
import CollectionToolbar from './CollectionToolbar';
import GoogleAd2016 from './GoogleAd2016';
import BouncingAd from './BouncingAd';

const systems = [
  { name: "Chrono-PDP 12X OS - 1976", image: "https://i.ibb.co/d4qG5TCp/Chrono-PDP-12-X-OS.png" },
  { name: "Horizon-80 Basic - 1980", image: "https://i.ibb.co/1tW5HQrt/Horizon-80-Basic.png" },
  { name: "Orchard II+ DOS - 1982", image: "https://i.ibb.co/63N6k4P/Orchard-II-DOS.png" },
  { name: "Sinclair-V ZX90 - 1984", image: "https://i.ibb.co/B2HwkCKX/Sinclair-V-ZX90.png" },
  { name: "CommX-64 BASIC - 1982", image: "https://i.ibb.co/Txtr7Wrh/Comm-X-64-BASIC.png" },
  { name: "Acorn-Oak Micro OS - 1983", image: "https://i.ibb.co/GShRjrZ/Acorn-Oak-Micro-OS.png" },
  { name: "Texas-Logic 99/5A - 1981", image: "https://i.ibb.co/Q7xJrn4g/Texas-Logic-995-A.png" },
  { name: "Macro-MSX 3 System - 1986", image: "https://i.ibb.co/RpyfBLP6/Macro-MSX-3-System.jpg" },
  { name: "Amstrad-X CPC 500 - 1984", image: "https://i.ibb.co/S77CbHpJ/Amstrad-X-CPC-500.png" },
  { name: "Cee-Text Teletext OS - 1970s", image: "https://i.ibb.co/npJTzxT/Cee-Text-Teletext-OS.jpg" },
  { name: "Amiga-Core Workbench 1.2 - 1987", image: "https://i.ibb.co/Df18w6jy/Amiga-Core-Workbench-1-2.png" },
  { name: "Mac-Classic OS 5 - 1989", image: "https://i.ibb.co/F4zFZXyx/Mac-Classic-OS-5.png" },
  { name: "Sakura PC-88 Desktop - 1989", image: "https://i.ibb.co/27pWv5dx/Sakura-PC-88-Desktop.jpg" },
  { name: "Atari-ST GEM-Desktop - 1985", image: "https://i.ibb.co/TqnXD308/Atari-ST-GEM-Desktop.png" },
  { name: "CP/M-Z90 Terminal - 1981", image: "https://i.ibb.co/wNrj5DCw/CPM-Z90-Terminal.png" },
  { name: "Win-Desk 3.5 File Manager - 1993", image: "https://i.ibb.co/nqHF2vsJ/Win-Desk-3-5-File-Manager.jpg" },
  { name: "Zeta-Net Terminal OS - 1970s", image: "https://i.ibb.co/mVtT8XxP/Zeta-Net-Terminal-OS.jpg" },
  { name: "中文U-DOS 7.0 - 1992", image: "https://i.ibb.co/RG6SJSxm/U-DOS-7-0.jpg" },
  { name: "Fido-BBS ANSI Terminal - 1994", image: "https://i.ibb.co/nMBCp0Hk/Fido-BBS-ANSI-Terminal.png" },
  { name: "东方启示录 96 - 1996", image: "https://i.ibb.co/R47j8HWt/Eastern-Revelation-96.jpg" },
  { name: "Psion-Tech Series 4 - 1995", image: "https://i.ibb.co/JXqqhvL/Psion-Tech-Series-4.png" },
  { name: "Gopher-Web Search - 1992", image: "https://i.ibb.co/rfHW77xZ/Gopher-Web-Search.png" },
  { name: "Win-Mobile CE 2.5 - 1999", image: "https://i.ibb.co/6djjSg6/Win-Mobile-CE-2-5.png" },
  { name: "Sharp-Zaurus Z-200 - 1985", image: "https://i.ibb.co/vCvkJbF8/Sharp-Zaurus-Z-200.png" },
  { name: "Beep-Tracker Pro - 1995", image: "https://i.ibb.co/27xC49NM/Beep-Tracker-Pro.png" },
  { name: "汉典-NC2000 电子词典 - 2002", image: "https://i.ibb.co/qLGbxRQc/NC2000.png" },
  { name: "Palm-X OS 4.0 - 2001", image: "https://i.ibb.co/qFNkCdHy/Palm-X-OS-4-0.png" },
  { name: "Flash-Web Desktop - 2005", image: "https://i.ibb.co/ymXbvSLd/Flash-Web-Desktop.jpg" },
  { name: "MTK 伪智能系统 - 2009", image: "https://i.ibb.co/cSW2n6qz/HQB-MTK-Fake-OS.jpg" }
];

const HotSystems: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showInterstitial, setShowInterstitial] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Prevent scrolling when interstitial is open
  React.useEffect(() => {
    if (showInterstitial) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showInterstitial]);

  // Simulate loading for skeleton screen
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden pb-20" style={{
      background: 'linear-gradient(135deg, #ffffff 0%, #f0f2f5 50%, #e4e6eb 100%)'
    }}>
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .btn-2016-aero {
          background: linear-gradient(to bottom, #ffffff 0%, #f0f0f0 49%, #dfdfdf 50%, #eeeeee 100%);
          border: 1px solid #aaa;
          border-radius: 4px;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 2px rgba(0,0,0,0.1);
          color: #333;
          text-shadow: 0 1px 0 rgba(255,255,255,0.8);
          transition: all 0.1s;
          cursor: pointer;
        }
        .btn-2016-aero:hover {
          background: linear-gradient(to bottom, #ffffff 0%, #f8f8f8 49%, #e8e8e8 50%, #f5f5f5 100%);
          border-color: #888;
        }
        .btn-2016-aero:active {
          background: linear-gradient(to bottom, #e0e0e0 0%, #cccccc 10%, #dbdbdb 100%);
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);
          border-color: #999;
        }
        .btn-2016-primary {
          background: linear-gradient(to bottom, #5cb85c 0%, #4cae4c 49%, #449d44 50%, #4cae4c 100%);
          border: 1px solid #398439;
          border-radius: 4px;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 1px 2px rgba(0,0,0,0.1);
          color: #fff;
          text-shadow: 0 -1px 0 rgba(0,0,0,0.2);
          transition: all 0.1s;
          cursor: pointer;
        }
        .btn-2016-primary:hover {
          background: linear-gradient(to bottom, #4cae4c 0%, #449d44 49%, #398439 50%, #449d44 100%);
          border-color: #255625;
        }
        .btn-2016-primary:active {
          background: linear-gradient(to bottom, #398439 0%, #255625 10%, #398439 100%);
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
        }
        .material-card-2016 {
          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
          transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        }
        .material-card-2016:hover {
          box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        }
        .input-2016 {
          box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
          border-radius: 2px;
          border: 1px solid #ccc;
        }
      `}</style>
      {/* Full-Screen Interstitial Ad (2012-2016 Google Ads Style) */}
      {showInterstitial && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-[rgba(0,0,0,0.8)]">
          <div className="relative flex flex-col items-center animate-in fade-in zoom-in duration-200">
            
            {/* Classic Google Interstitial Close Button */}
            <div className="w-[800px] max-w-[95vw] flex justify-end mb-2">
              <button 
                onClick={() => setShowInterstitial(false)}
                className="text-white text-[14px] font-sans flex items-center gap-1.5 hover:underline cursor-pointer"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                Close ad <span className="border border-white rounded-full w-5 h-5 flex items-center justify-center text-[12px] font-bold">X</span>
              </button>
            </div>

            {/* Ad Container */}
            <div 
              className="bg-white border border-[#cccccc] w-[800px] max-w-[95vw] h-[533px] relative flex flex-col cursor-pointer hover:border-[#a0a0a0] transition-colors"
              onClick={() => setShowInterstitial(false)}
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              {/* AdChoices Icon */}
              <div className="absolute top-0 right-0 bg-white border-b border-l border-[#cccccc] text-[#777] text-[12px] px-2 py-1 z-10 flex items-center gap-1.5">
                AdChoices 
                <svg width="14" height="14" viewBox="0 0 1024 1024" fill="#00a1f1">
                  <path d="M895.998 256.002l-383.996 640-383.996-640h767.992z" />
                </svg>
              </div>

              {/* Image Section */}
              <div className="w-full h-[380px] border-b border-[#eeeeee] flex items-center justify-center bg-[#f4f4f4] p-2">
                <img 
                  src="https://i.imgur.com/2sYHmCa.png" 
                  alt="Fakebook" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Text Section */}
              <div className="flex-1 p-5 flex flex-col justify-center">
                <div className="text-[#1a0dab] text-[28px] font-normal hover:underline leading-tight mb-2 truncate">
                  Connect with friends on Fakebook
                </div>
                <div className="text-[#006621] text-[16px] leading-tight mb-2 truncate">
                  www.fakebook.com/join-now
                </div>
                <div className="text-[#545454] text-[16px] leading-snug">
                  See photos and updates from friends in News Feed. Share what's new in your life on your Timeline. Sign up today.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Background Image Layer */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src="https://i.postimg.cc/81y132jB/background1.png" 
          alt="Background" 
          className={`w-full h-full object-cover opacity-30 transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Elegant Red/Black/White Curved Sidebar with 3D Aero Effect (Kept as subtle background) */}
      <RevealOnScroll delay={0.2} className="fixed left-0 top-0 w-full md:w-[40%] h-full pointer-events-none z-0 opacity-40">
        <svg viewBox="0 0 500 1000" preserveAspectRatio="xMinYMin slice" className="w-full h-full drop-shadow-[15px_0_35px_rgba(0,0,0,0.25)]">
          <defs>
            {/* Clip Path to contain all lines strictly inside the sidebar */}
            <clipPath id="sidebarClip">
              <path d="M0,0 L350,0 C450,300 150,600 350,1000 L0,1000 Z" />
            </clipPath>

            {/* Background Gradient */}
            <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#050505" />
              <stop offset="50%" stopColor="#1a0505" />
              <stop offset="100%" stopColor="#2a0000" />
            </linearGradient>

            {/* Fade out mask for the bottom so it doesn't overlap the footer */}
            <linearGradient id="fadeBottom" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="white" />
              <stop offset="70%" stopColor="white" />
              <stop offset="90%" stopColor="transparent" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <mask id="bottomMask">
              <rect width="100%" height="100%" fill="url(#fadeBottom)" />
            </mask>

            {/* 3D Bevels */}
            <linearGradient id="bevelLight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
            <linearGradient id="bevelDark" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,0,0,0)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.8)" />
            </linearGradient>

            {/* Early Aero Gloss (Sharp top reflection) */}
            <linearGradient id="aeroGloss" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
              <stop offset="45%" stopColor="rgba(255,255,255,0.05)" />
              <stop offset="46%" stopColor="rgba(255,255,255,0)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>

            {/* Red/White Glows */}
            <radialGradient id="glowRed" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255, 50, 50, 0.3)" />
              <stop offset="100%" stopColor="rgba(255, 0, 0, 0)" />
            </radialGradient>
            
            <linearGradient id="ribbonRed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
              <stop offset="40%" stopColor="rgba(255,50,50,0.8)" />
              <stop offset="100%" stopColor="rgba(100,0,0,0)" />
            </linearGradient>

            <linearGradient id="textGloss" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
              <stop offset="45%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>

            <radialGradient id="sphereGrad1" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="15%" stopColor="#ff4d4d" />
              <stop offset="60%" stopColor="#800000" />
              <stop offset="100%" stopColor="#0a0000" />
            </radialGradient>

            <radialGradient id="sphereGrad2" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="20%" stopColor="#cccccc" />
              <stop offset="70%" stopColor="#333333" />
              <stop offset="100%" stopColor="#000000" />
            </radialGradient>
            
            <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#000000" floodOpacity="0.6" />
            </filter>

            <filter id="blurLg" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="12" />
            </filter>
            <filter id="blurSm" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" />
            </filter>
            <radialGradient id="auroraRed1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255, 26, 26, 0.8)" />
              <stop offset="100%" stopColor="rgba(255, 26, 26, 0)" />
            </radialGradient>
            <radialGradient id="auroraRed2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255, 0, 85, 0.8)" />
              <stop offset="100%" stopColor="rgba(255, 0, 85, 0)" />
            </radialGradient>
            <radialGradient id="auroraRed3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(204, 0, 0, 0.8)" />
              <stop offset="100%" stopColor="rgba(204, 0, 0, 0)" />
            </radialGradient>
            <radialGradient id="auroraRed4" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255, 77, 77, 0.8)" />
              <stop offset="100%" stopColor="rgba(255, 77, 77, 0)" />
            </radialGradient>
          </defs>

          {/* Apply Mask to fade out the bottom */}
          <g mask="url(#bottomMask)">
            
            {/* Apply Clip Path to keep everything strictly inside the sidebar */}
            <g clipPath="url(#sidebarClip)">
              
              {/* 1. Base Shape */}
              <rect width="500" height="1000" fill="url(#bgGrad)" />
              
              {/* 2. Dynamic Aurora Background Glows (Optimized with radial gradients instead of SVG blur) */}
              <g opacity="0.85" style={{ mixBlendMode: 'screen' }}>
                <ellipse rx="350" ry="250" fill="url(#auroraRed1)">
                  <animate attributeName="cx" values="-100; 600; -100" dur="15s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="200; 800; 200" dur="20s" repeatCount="indefinite" />
                </ellipse>
                <ellipse rx="300" ry="400" fill="url(#auroraRed2)">
                  <animate attributeName="cx" values="600; -100; 600" dur="18s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="700; 100; 700" dur="22s" repeatCount="indefinite" />
                </ellipse>
                <ellipse rx="400" ry="300" fill="url(#auroraRed3)">
                  <animate attributeName="cx" values="250; 50; 250" dur="16s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="900; 300; 900" dur="24s" repeatCount="indefinite" />
                </ellipse>
                <ellipse rx="250" ry="250" fill="url(#auroraRed4)">
                  <animate attributeName="cx" values="50; 450; 50" dur="19s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="100; 600; 100" dur="17s" repeatCount="indefinite" />
                </ellipse>
              </g>

              {/* 3. Deep Glass Layer */}
              <path d="M0,0 L300,0 C400,300 100,600 300,1000 L0,1000 Z" fill="rgba(255,255,255,0.03)" />

              {/* 4. Elegant Flowing Lines */}
              <path d="M-50,100 C 150,100 250,400 450,450" fill="none" stroke="url(#ribbonRed)" strokeWidth="10" filter="url(#blurLg)" />
              <path d="M-50,100 C 150,100 250,400 450,450" fill="none" stroke="#ffffff" strokeWidth="2" filter="url(#blurSm)" />
              <path d="M-50,100 C 150,100 250,400 450,450" fill="none" stroke="#ffffff" strokeWidth="1" />

              <path d="M-100,200 C 200,250 150,550 500,650" fill="none" stroke="rgba(255,0,0,0.6)" strokeWidth="16" filter="url(#blurLg)" />
              <path d="M-100,200 C 200,250 150,550 500,650" fill="none" stroke="#ff4444" strokeWidth="2.5" filter="url(#blurSm)" />
              <path d="M-100,200 C 200,250 150,550 500,650" fill="none" stroke="#ffffff" strokeWidth="0.5" />

              <path d="M0,50 C 300,150 200,600 400,750" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="6" filter="url(#blurSm)" />
              <path d="M0,50 C 300,150 200,600 400,750" fill="none" stroke="#ffffff" strokeWidth="1.2" />

              {/* --- 3D Abstract Aero Decorations --- */}
              <g style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                {/* Giant Background Text */}
                <text x="-150" y="650" fill="rgba(255,255,255,0.02)" fontSize="180" fontWeight="900" letterSpacing="-5" transform="rotate(-90)">SYSTEM</text>
                
                {/* 3D Abstract Spheres */}
                <g filter="url(#dropShadow)">
                  {/* Red Sphere */}
                  <circle cx="320" cy="220" r="65" fill="url(#sphereGrad1)" />
                  {/* White/Silver Sphere */}
                  <circle cx="120" cy="380" r="45" fill="url(#sphereGrad2)" />
                  {/* Small Red Sphere */}
                  <circle cx="250" cy="520" r="25" fill="url(#sphereGrad1)" />
                </g>

                {/* Glossy Highlights for Spheres */}
                <ellipse cx="300" cy="180" rx="35" ry="15" fill="rgba(255,255,255,0.6)" transform="rotate(-20 300 180)" />
                <ellipse cx="105" cy="355" rx="20" ry="10" fill="rgba(255,255,255,0.8)" transform="rotate(-25 105 355)" />
                <ellipse cx="242" cy="505" rx="10" ry="5" fill="rgba(255,255,255,0.7)" transform="rotate(-20 242 505)" />

                {/* 3D Abstract Ring */}
                <g filter="url(#dropShadow)">
                  <ellipse cx="220" cy="300" rx="140" ry="50" fill="none" stroke="url(#ribbonRed)" strokeWidth="12" transform="rotate(-30 220 300)" />
                  <ellipse cx="220" cy="300" rx="140" ry="50" fill="none" stroke="#ffffff" strokeWidth="1.5" transform="rotate(-30 220 300)" />
                </g>

                {/* Foreground 3D Glossy Text */}
                <g transform="translate(40, 150)">
                  {/* Extrusion layers */}
                  <text x="0" y="0" fill="#330000" fontSize="56" fontWeight="900" letterSpacing="-1" transform="translate(4,4)">ARCHIVE</text>
                  <text x="0" y="0" fill="#660000" fontSize="56" fontWeight="900" letterSpacing="-1" transform="translate(3,3)">ARCHIVE</text>
                  <text x="0" y="0" fill="#990000" fontSize="56" fontWeight="900" letterSpacing="-1" transform="translate(2,2)">ARCHIVE</text>
                  <text x="0" y="0" fill="#cc0000" fontSize="56" fontWeight="900" letterSpacing="-1" transform="translate(1,1)">ARCHIVE</text>
                  {/* Main Face */}
                  <text x="0" y="0" fill="#ff3333" fontSize="56" fontWeight="900" letterSpacing="-1">ARCHIVE</text>
                  {/* Gloss Overlay */}
                  <text x="0" y="0" fill="url(#textGloss)" fontSize="56" fontWeight="900" letterSpacing="-1">ARCHIVE</text>
                </g>

                <g transform="translate(45, 210)">
                  <text x="0" y="0" fill="#1a0000" fontSize="32" fontWeight="900" letterSpacing="2" transform="translate(2,2)">TIME</text>
                  <text x="0" y="0" fill="#ffffff" fontSize="32" fontWeight="900" letterSpacing="2">TIME</text>
                  <text x="0" y="0" fill="url(#textGloss)" fontSize="32" fontWeight="900" letterSpacing="2">TIME</text>
                </g>
              </g>

              {/* 5. 3D Aero Bevels & Emboss */}
              {/* Inner Light Bevel (Left/Top) */}
              <path d="M0,0 L350,0 C450,300 150,600 350,1000 L0,1000 Z" fill="none" stroke="url(#bevelLight)" strokeWidth="6" />
              {/* Inner Dark Bevel (Right/Bottom) */}
              <path d="M0,0 L350,0 C450,300 150,600 350,1000 L0,1000 Z" fill="none" stroke="url(#bevelDark)" strokeWidth="12" />

              {/* 6. Early Aero Sharp Gloss Overlay */}
              <path d="M0,0 L500,0 L500,350 C300,300 150,450 0,350 Z" fill="url(#aeroGloss)" />
              
            </g>

            {/* 7. Outer Edge Highlight (Not clipped, sits exactly on the boundary) */}
            <path d="M350,0 C450,300 150,600 350,1000" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
          </g>
        </svg>
      </RevealOnScroll>

      {/* New Layout Container */}
      <div className="max-w-[1400px] mx-auto relative z-10 mt-8 mb-12 shadow-lg bg-white/40 backdrop-blur-xl rounded-[2px] border border-white/60 overflow-hidden material-card-2016">
        <CollectionHeader />

        <div className="flex flex-col md:flex-row">
          {/* Left Sidebar */}
          <div className="w-full md:w-[260px] flex-shrink-0 border-r border-white/50 p-6 hidden md:block bg-white/20">
            <CollectionSidebar />
            
            {/* Left Sidebar Ad: PicPile (160x600) */}
            <div className="mt-8 flex justify-center">
              <GoogleAd2016 width={160} height={600} type="image" imageUrl="https://i.imgur.com/P4skvRw.png" />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 bg-white/30">
            <CollectionToolbar />

            {/* Title & Ad Section */}
            <div className="mb-8 flex flex-col items-center">
              {/* Top Banner Ad: DomainDudes (728x90) replacing the old placeholder */}
              <GoogleAd2016 width={728} height={90} type="image" imageUrl="https://i.imgur.com/jXe0lcy.png" className="max-w-full" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {isLoading ? (
                // Skeleton Screen with Shimmer
                Array.from({ length: 15 }).map((_, idx) => (
                  <div key={`skeleton-${idx}`} className="flex flex-col h-full bg-white/40 border border-gray-200 rounded-[2px] overflow-hidden relative material-card-2016">
                    {/* Shimmer Overlay */}
                    <div 
                      className="absolute inset-0 -translate-x-full z-20" 
                      style={{ 
                        backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                        animation: 'shimmer 1.5s infinite' 
                      }}
                    ></div>
                    
                    {/* Image Skeleton */}
                    <div className="w-full aspect-[4/3] bg-gray-200/60 border-b border-white/50"></div>
                    
                    {/* Text Skeleton */}
                    <div className="p-3 flex-1 flex flex-col gap-2">
                      <div className="h-3 bg-gray-200/80 rounded-sm w-3/4"></div>
                      <div className="h-2.5 bg-gray-200/60 rounded-sm w-1/2 mt-auto"></div>
                    </div>
                    
                    {/* Bottom Icons Skeleton */}
                    <div className="px-3 py-2 border-t border-white/50 flex justify-between items-center bg-white/20">
                      <div className="w-4 h-4 bg-gray-200/80 rounded-sm"></div>
                      <div className="flex gap-3">
                        <div className="w-8 h-3 bg-gray-200/80 rounded-sm"></div>
                        <div className="w-8 h-3 bg-gray-200/80 rounded-sm"></div>
                        <div className="w-8 h-3 bg-gray-200/80 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                systems.map((sys, idx) => {
                  // Deterministic pseudo-random numbers based on index
                  const views = 100 + ((idx * 173) % 800);
                  const favs = 10 + ((idx * 37) % 90);
                  const comments = ((idx * 13) % 20);

                  return (
                  <RevealOnScroll key={idx} delay={0} className="h-full">
                    <a 
                      href={`#playback/${encodeURIComponent(sys.name)}`}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className="group flex flex-col h-full bg-white/60 backdrop-blur-md border border-white/60 rounded-[2px] overflow-hidden material-card-2016"
                    >
                      {/* Image Area */}
                      <div className="w-full aspect-[4/3] bg-black/5 relative overflow-hidden flex items-center justify-center border-b border-gray-200 p-2">
                        {sys.image ? (
                          <img 
                            src={`https://wsrv.nl/?url=${sys.image}&w=300&h=225&fit=cover&output=webp`} 
                            alt={sys.name} 
                            loading="lazy"
                            className="max-w-full max-h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-105" 
                            referrerPolicy="no-referrer" 
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center z-10 opacity-30">
                            <span className="text-gray-600 text-[10px] font-mono tracking-wider">NO SIGNAL</span>
                          </div>
                        )}
                      </div>

                      {/* Text Content */}
                      <div className="p-3 flex-1 flex flex-col bg-transparent">
                        <h3 className="text-[#222] text-[13px] font-medium leading-snug group-hover:text-[#4d90fe] transition-colors line-clamp-2 mb-1">
                          {sys.name}
                        </h3>
                        <p className="text-[11px] text-gray-500 mt-auto">by System Creator</p>
                      </div>
                      
                      {/* Bottom Icons */}
                      <div className="px-3 py-2 border-t border-gray-200 flex justify-between items-center text-gray-500 text-[11px] bg-white/40">
                        <span title="Save" className="hover:text-[#4cae4c] cursor-pointer transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>
                        </span>
                        <div className="flex gap-3">
                          <span title="Views" className="flex items-center gap-1 hover:text-black cursor-pointer">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            {views}
                          </span>
                          <span title="Favorites" className="flex items-center gap-1 hover:text-[#f2a900] cursor-pointer">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                            {favs}
                          </span>
                          <span title="Comments" className="flex items-center gap-1 hover:text-[#4d90fe] cursor-pointer">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
                            {comments}
                          </span>
                        </div>
                      </div>
                    </a>
                  </RevealOnScroll>
                  );
                })
              )}
            </div>

            {/* Bottom Ads Section */}
            <div className="mt-12 flex flex-col items-center gap-8">
               {/* Amazing Web Services (Large Responsive Banner) */}
               <GoogleAd2016 
                 width="100%" 
                 height="auto" 
                 style={{ aspectRatio: '5448/1176', maxWidth: '970px' }} 
                 type="image" 
                 imageUrl="https://i.imgur.com/5d2BJeP.png" 
               />
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Bouncing Ad: TunnelGhost (336x280) */}
      <BouncingAd imageUrl="https://i.imgur.com/JFrKQ4S.png" width={336} height={280} />
    </div>
  );
};

export default HotSystems;
