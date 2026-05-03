import React, { useState, useEffect, useRef } from 'react';
import { AeroBackButton } from './AeroBackButton';

const Horizon80Basic1980: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([
    'HORIZON-OS',
    ''
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newOutput = [...output, `READY > ${input}`];
      if (input.toUpperCase() === 'HELP') {
        newOutput.push('AVAILABLE COMMANDS: HELP, PRINT, CLS, RUN');
      } else if (input.toUpperCase() === 'CLS') {
        setOutput(['HORIZON-OS', '']);
        setInput('');
        return;
      } else if (input.toUpperCase().startsWith('PRINT ')) {
        newOutput.push(input.substring(6));
      } else if (input.trim() !== '') {
        newOutput.push('SYNTAX ERROR');
      }
      newOutput.push('');
      setOutput(newOutput);
      setInput('');
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1000] text-[#ffb000] p-8 uppercase flex flex-col relative overflow-hidden" style={{ 
      fontFamily: '"Courier New", Courier, monospace',
      WebkitFontSmoothing: 'none',
      fontSmooth: 'never',
      textRendering: 'geometricPrecision',
      textShadow: '0 0 8px rgba(255, 176, 0, 0.8)' 
    }}>
      {/* CRT Curvature & Vignette Overlay */}
      <div className="pointer-events-none absolute inset-0 z-40" style={{ 
        background: 'radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.6) 100%)',
        boxShadow: 'inset 0 0 100px rgba(0,0,0,0.9)'
      }}></div>

      {/* CRT Scanline Overlay */}
      <div className="pointer-events-none absolute inset-0 z-50 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 6px, 6px 100%' }}></div>
      
      <div className="z-50 relative">
        <AeroBackButton />
      </div>
      
      {/* Low Resolution Wrapper */}
      <div className="flex-1 absolute inset-0 flex flex-col pointer-events-none pt-24 pb-8 px-8">
        <div className="flex-1 overflow-auto z-10 relative pointer-events-auto" style={{ 
          filter: 'contrast(1.2) brightness(1.1)',
          transform: 'scale(1.5)',
          transformOrigin: 'top left',
          width: '66.66%',
          height: '66.66%',
          imageRendering: 'pixelated',
          fontSize: '16px'
        }}>
          {output.map((line, i) => (
            <div key={i} className="min-h-[1.5rem] whitespace-pre-wrap">{line}</div>
          ))}
          <div className="flex items-center mt-1">
            <span className="mr-3">READY &gt;</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value.toUpperCase())}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none text-[#ffb000] flex-1 uppercase caret-transparent"
              autoFocus
              spellCheck={false}
            />
            {/* Custom Block Cursor */}
            <span className="inline-block w-[10px] h-[18px] bg-[#ffb000] animate-pulse ml-1" style={{ transform: `translateX(-${(input.length * 0)}px)`, boxShadow: '0 0 10px rgba(255, 176, 0, 0.8)' }}></span>
          </div>
          <div ref={bottomRef} className="h-12" />
        </div>
      </div>
    </div>
  );
};

export default Horizon80Basic1980;
