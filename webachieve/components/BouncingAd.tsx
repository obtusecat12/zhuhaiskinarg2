import React, { useState, useEffect, useRef } from 'react';
import GoogleAd2016 from './GoogleAd2016';

interface BouncingAdProps {
  imageUrl: string;
  width: number;
  height: number;
}

const BouncingAd: React.FC<BouncingAdProps> = ({ imageUrl, width, height }) => {
  const [closed, setClosed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use refs for mutable state to avoid triggering React re-renders 60 times a second
  const posRef = useRef({ x: 100, y: 100 });
  const velRef = useRef({ x: 0.6, y: 0.6 }); // Reduced speed for less frantic movement

  useEffect(() => {
    if (closed) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const updatePosition = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      // Normalize speed regardless of frame rate (approx 60fps baseline)
      const timeScale = deltaTime / 16.66;

      let { x, y } = posRef.current;
      let { x: vx, y: vy } = velRef.current;

      x += vx * timeScale;
      y += vy * timeScale;

      const maxX = window.innerWidth - width;
      const maxY = window.innerHeight - height;

      if (x <= 0) {
        x = 0;
        vx = Math.abs(vx);
      } else if (x >= maxX) {
        x = maxX;
        vx = -Math.abs(vx);
      }

      if (y <= 0) {
        y = 0;
        vy = Math.abs(vy);
      } else if (y >= maxY) {
        y = maxY;
        vy = -Math.abs(vy);
      }

      posRef.current = { x, y };
      velRef.current = { x: vx, y: vy };

      if (containerRef.current) {
        // Direct DOM manipulation for high performance animation
        containerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => cancelAnimationFrame(animationFrameId);
  }, [width, height, closed]);

  if (closed) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed z-[9999] shadow-2xl top-0 left-0"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        willChange: 'transform', // Optimize for animation
      }}
    >
      <div className="relative w-full h-full">
        {/* Close Button */}
        <button 
          onClick={() => setClosed(true)}
          className="absolute -top-3 -right-3 w-6 h-6 bg-white border border-gray-300 rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 hover:border-red-500 shadow-md z-50 cursor-pointer"
          title="Close Ad"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M1 1L9 9M9 1L1 9" />
          </svg>
        </button>
        <GoogleAd2016 width={width} height={height} type="image" imageUrl={imageUrl} />
      </div>
    </div>
  );
};

export default BouncingAd;
