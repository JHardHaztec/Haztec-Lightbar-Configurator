import React from 'react';

export default function XL7528({ 
  lensColor,
  topCoverColor,
  slotData, 
  selectedSlotKey, 
  onSelectSlot 
}) {
  const getFill = (slotNum) => {
    const slot = slotData[slotNum];
    if (!slot || slot.active === false) return 'transparent';
    
    if (slot.mode === 'dual' && slot.secondary) {
      return `url(#grad-28-${slotNum})`;
    }
    return slot.primary || '#808285';
  };

  const isSelected = (slotNum) => selectedSlotKey === slotNum;

  const renderModule = (slotNum, pathD, customStyle = {}, uniqueKey) => {
    const slot = slotData[slotNum];
    if (!slot || slot.active === false) return null;

    const fill = getFill(slotNum);
    const selected = isSelected(slotNum);
    const stroke = selected ? '#38bdf8' : '#231f20';
    const strokeWidth = selected ? '4' : '1';

    return (
      <path 
        key={uniqueKey}
        className="interactive-module" 
        fill={fill} 
        stroke={stroke} 
        strokeWidth={strokeWidth} 
        onClick={() => onSelectSlot(slotNum)} 
        d={pathD}
        style={customStyle}
      />
    );
  };

  // Base 28-inch Corner Geometry
  const cornerTopLeft = "M79.96,11.59l5.45,10.3h-1.51v2.66h-2.92l-2.64-6.05-1.47.7.78-11.77-3.55.17-33,15.83-2.4,2.69,9.65,6.74-1.86.89,1.1,2.4-3.25,1.55-1.7-3.51-2.4-.91-.66,1.88-7.42-9.21-2.43,2.76-12.4,35.11.15,3.67,11.44-2.18-.68,1.92,5.81,2.16,9.03-.2c1.63-.04,3.2-.59,4.48-1.58l3.72-2.87c1.39-1.07,3.1-1.66,4.85-1.67l65.94-.37V23.5h-3.08v-1.61h-2.22l6.15-10.32-3.28-1.38h-36.41s-3.28,1.39-3.28,1.39Z";
  const cornerBottomLeft = "M79.96,152.68l5.45-10.3h-1.51v-2.66h-2.92l-2.64,6.05-1.47-.7.78,11.77-3.55-.17-33-15.83-2.4-2.69,9.65-6.74-1.86-.89,1.1-2.4-3.25-1.55-1.7,3.51-2.4.91-.66-1.88-7.42,9.21-2.43-2.76-12.4-35.11.15-3.67,11.44,2.18-.68-1.92,5.81-2.16,9.03.2c1.63.04,3.2.59,4.48,1.58l3.72,2.87c1.39,1.07,3.1,1.66,4.85,1.67l65.94.37v39.19h-3.08v1.61h-2.22l6.15,10.32-3.28,1.38h-36.41s-3.28-1.39-3.28-1.39Z";
  const cornerBottomRight = "M297.8,152.68l-5.45-10.3h1.51v-2.66h2.92l2.64,6.05,1.47-.7-.78,11.77,3.55-.17,33-15.83,2.4-2.69-9.65-6.74,1.86-.89-1.1-2.4,3.25-1.55,1.7,3.51,2.4.91.66-1.88,7.42,9.21,2.43-2.76,12.4-35.11-.15-3.67-11.44,2.18.68-1.92-5.81-2.16-9.03.2c-1.63.04-3.2.59-4.48,1.58l-3.72,2.87c-1.39,1.07-3.1,1.66-4.85,1.67l-65.94.37v39.19h3.08v1.61h2.22l-6.15,10.32,3.28,1.38h36.41s3.28-1.39,3.28-1.39Z";
  const cornerTopRight = "M297.8,11.59l-5.45,10.3h1.51v2.66h2.92l2.64-6.05,1.47.7-.78-11.77,3.55.17,33,15.83,2.4,2.69-9.65,6.74,1.86.89-1.1,2.4,3.25,1.55,1.7-3.51,2.4-.91.66,1.88,7.42-9.21,2.43,2.76,12.4,35.11-.15,3.67-11.44-2.18.68,1.92-5.81,2.16-9.03-.2c-1.63-.04-3.2-.59-4.48-1.58l-3.72-2.87c-1.39-1.07-3.1-1.66-4.85-1.67l-65.94-.37V23.5h3.08v-1.61h2.22l-6.15-10.32,3.28-1.38h36.41s3.28,1.39,3.28,1.39Z";

const shortmodule5 = "M171.22,151.63v-11.32h4.84v-15.37c2.55-.78,4.41-3.16,4.41-5.96s-1.86-5.18-4.41-5.96v-11.19h26.98v11.25c-2.47.83-4.25,3.16-4.25,5.91s1.78,5.08,4.25,5.91v15.34h4.73v11.69l.74,2.62h-38.35l1.07-2.91Z";
  const shortmodule6 = "M207.44,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  

  return (
    <svg 
      id="Layer_2" 
      data-name="Layer 2" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 378.55 164.67"
      style={{ width: '100%', maxWidth: '450px', height: '300px', display: 'block', margin: '0 auto' }}
    >
      <defs>
      <style>{`
          .cls-1 { fill: none; stroke-miterlimit: 10; stroke-width: 3px; }
          .cls-label { font-family: FuturaPT-Heavy, 'Futura PT'; font-size: 12px; font-weight: 800; fill: #989898; letter-spacing: 0.1em; }
          .cls-num { font-family: FuturaPT-Bold, 'Futura PT'; font-size: 14px; font-weight: 700; fill: #282828; cursor: pointer; }
          .interactive-module { transition: filter 0.2s, stroke 0.2s; cursor: pointer; }
          .interactive-module:hover { filter: brightness(1.2); }
        `}</style>

        {Object.entries(slotData).map(([key, val]) => {
          if (val && val.mode === 'dual' && val.secondary) {
            return (
              <linearGradient key={key} id={`grad-28-${key}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="50%" stopColor={val.primary} />
                <stop offset="50%" stopColor={val.secondary} />
              </linearGradient>
            );
          }
          return null;
        })}
      </defs>

      <g transform="translate(0, 16)">
      {/* --- Chassis Outlines --- */}
      <g stroke={lensColor || "#231f20"} fill="none" strokeWidth="3" strokeMiterlimit="10">
     <path d="M210.26,1.5h85.96c44.64,0,80.83,36.19,80.83,80.83h0c0,44.64-36.19,80.84-80.83,80.84h-85.96"/>
    <path d="M168.41,163.17h-86.07C37.69,163.17,1.5,126.98,1.5,82.34h0C1.5,37.69,37.69,1.5,82.33,1.5h86.07"/>
    <line x1="166.41" y1="163.17" x2="166.41" y2="1.5"/>
    <line x1="212.56" y1="1.5" x2="212.56" y2="163.17"/>
    <line x1="168.41" y1="163.17" x2="210.26" y2="163.17"/>
    <line x1="168.41" y1="1.5" x2="210.26" y2="1.5"/>
      </g>

      {/* --- CORNERS (1 - 4) --- */}
      {renderModule(1, cornerBottomLeft, {}, 'corner-1')} 
      {renderModule(2, cornerTopLeft, {}, 'corner-2')} 
      {renderModule(3, cornerBottomRight, {}, 'corner-3')} 
      {renderModule(4, cornerTopRight, {}, 'corner-4')} 

            {/* --- TOP ROW MODULES --- */}
        {renderModule(6, shortmodule6, {}, 'top-6')}

        {/* --- BOTTOM ROW MODULES --- */}
          {renderModule(5, shortmodule5, {}, 'bot-5')}


     {/* --- NUMBERS --- */}
     <text className="cls-num" onClick={() => onSelectSlot(1)} transform="translate(73.5 126)"><tspan x="0" y="0">1</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(2)} transform="translate(296 126)"><tspan x="0" y="0">2</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(3)} transform="translate(73.5 48)"><tspan x="0" y="0">3</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(4)} transform="translate(296 48)"><tspan x="0" y="0">4</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(5)} transform="translate(186 126)"><tspan x="0" y="0">5</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(6)} transform="translate(186 48)"><tspan x="0" y="0">6</tspan></text>
      </g>

      {/* --- OUTSIDE TEXT LABELS --- */}
      <text className="cls-label" x="50%" y="9" textAnchor="middle"><tspan x="189" y="0">REAR</tspan></text>
      <text className="cls-label" x="50%" y="192" textAnchor="middle"><tspan x="190" y="204">FRONT</tspan></text>
    </svg>
  );
}
