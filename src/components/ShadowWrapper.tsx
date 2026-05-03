import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from '../index.css?inline';

interface ShadowWrapperProps {
  children: React.ReactNode;
}

export default function ShadowWrapper({ children }: ShadowWrapperProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [shadowRoot, setShadowRoot] = useState<ShadowRoot | null>(null);

  useEffect(() => {
    if (hostRef.current && !hostRef.current.shadowRoot) {
      const root = hostRef.current.attachShadow({ mode: 'open' });
      setShadowRoot(root);
    }
  }, []);

  return (
    <div ref={hostRef} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {shadowRoot && createPortal(
        <>
          <style>{styles}</style>
          <div className="w-full h-full flex flex-col antialiased text-gray-900 bg-white" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
            {children}
          </div>
        </>,
        shadowRoot
      )}
    </div>
  );
}
