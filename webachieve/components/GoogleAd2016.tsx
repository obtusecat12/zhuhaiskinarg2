import React, { useState, useEffect } from 'react';

interface GoogleAd2016Props {
  width: string | number;
  height: string | number;
  type: 'text' | 'image';
  title?: string;
  url?: string;
  description?: string;
  imageUrl?: string | string[];
  className?: string;
  style?: React.CSSProperties;
}

const GoogleAd2016: React.FC<GoogleAd2016Props> = ({
  width,
  height,
  type,
  title = "Start Your Free Trial Today",
  url = "www.example.com/trial",
  description = "Get access to premium features. Sign up now and get 30 days free.",
  imageUrl = "https://picsum.photos/seed/ad/300/600",
  className = "",
  style = {}
}) => {
  const [closed, setClosed] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = Array.isArray(imageUrl) ? imageUrl : [imageUrl];

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [images.length]);

  if (closed) {
    return null;
  }

  return (
    <div 
      className={`relative bg-white border border-[#e8e8e8] overflow-hidden flex flex-col transition-all duration-300 hover:border-[#ffcccc] hover:shadow-[0_4px_12px_rgba(255,51,51,0.15)] group ${className}`}
      style={{ width, height, ...style }}
    >
      {/* AdChoices Overlay (2016 Style) */}
      <div className="absolute top-0 right-0 z-20 flex items-center bg-white/90 border-b border-l border-[#e8e8e8] rounded-bl-[2px] shadow-sm transition-colors duration-300 group-hover:border-[#ffcccc]">
        <div 
          className="w-[19px] h-[15px] flex items-center justify-center cursor-pointer hover:bg-[#ffe6e6] transition-colors duration-300"
          title="AdChoices"
        >
          {/* Authentic 2016 AdChoices Icon */}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7L13 1L13 13L1 7Z" fill="#00A1F1" className="transition-colors duration-300 group-hover:fill-[#ff3333]"/>
            <circle cx="9" cy="7" r="3" fill="white"/>
            <path d="M9 5V6M9 7V9" stroke="#00A1F1" strokeWidth="1.5" strokeLinecap="round" className="transition-colors duration-300 group-hover:stroke-[#ff3333]"/>
          </svg>
        </div>
        <div 
          className="w-[15px] h-[15px] flex items-center justify-center cursor-pointer hover:bg-[#ffe6e6] border-l border-[#e8e8e8] transition-colors duration-300 group-hover:border-[#ffcccc]"
          onClick={() => setClosed(true)}
          title="Close ad"
        >
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7M7 1L1 7" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" className="transition-colors duration-300 group-hover:stroke-[#cc0000]"/>
          </svg>
        </div>
      </div>

      {/* Ad Content */}
      {type === 'image' ? (
        <a href="#" className="block w-full h-full relative overflow-hidden" onClick={(e) => e.preventDefault()}>
          {images.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt="Advertisement" 
              className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 ${idx === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} 
            />
          ))}
          <div className="absolute inset-0 bg-[#ff3333] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none z-10"></div>
        </a>
      ) : (
        <a href="#" className="block w-full h-full p-4 flex flex-col justify-center hover:bg-[#fff0f0] transition-colors duration-300" onClick={(e) => e.preventDefault()}>
          <h3 className="text-[#1a0dab] text-[18px] font-normal hover:underline leading-tight mb-1 transition-colors duration-300 group-hover:text-[#cc0000]">{title}</h3>
          <div className="text-[#006621] text-[13px] mb-2 transition-colors duration-300 group-hover:text-[#ff3333]">{url}</div>
          <p className="text-[#545454] text-[13px] leading-snug transition-colors duration-300 group-hover:text-[#666]">{description}</p>
        </a>
      )}
    </div>
  );
};

export default GoogleAd2016;
