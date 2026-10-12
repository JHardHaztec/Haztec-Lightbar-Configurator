import React from 'react';

export default function XL7561({ 
  lensColor,
  topcoverColor,
  slotData, 
  selectedSlotKey, 
  onSelectSlot 
}) {
  const getFill = (slotNum) => {
    const slot = slotData[slotNum];
    if (!slot || slot.active === false) return 'transparent';
    
    if (slot.mode === 'dual' && slot.secondary) {
      return `url(#grad-61-${slotNum})`;
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
  <>
    <path 
      className="cls-3" 
      fill={fill} 
      stroke={stroke}
      strokeWidth={strokeWidth}
      onClick={() => onSelectSlot(slotKey)}
      d={pathD}
    />
    <path 
      stroke={topcoverColor || "#231f20"} 
      fill="none" 
      strokeWidth="1.5" 
      pointerEvents="none" 
      d={pathD} 
    />
  </>
);
  };

  // Base 68-inch Corner Geometry
  const cornerTopLeft = "M79.96,11.59l5.45,10.3h-1.51v2.66h-2.92l-2.64-6.05-1.47.7.78-11.77-3.55.17-33,15.83-2.4,2.69,9.65,6.74-1.86.89,1.1,2.4-3.25,1.55-1.7-3.51-2.4-.91-.66,1.88-7.42-9.21-2.43,2.76-12.4,35.11.15,3.67,11.44-2.18-.68,1.92,5.81,2.16,9.03-.2c1.63-.04,3.2-.59,4.48-1.58l3.72-2.87c1.39-1.07,3.1-1.66,4.85-1.67l65.94-.37V23.5h-3.08v-1.61h-2.22l6.15-10.32-3.28-1.38h-36.41s-3.28,1.39-3.28,1.39Z";
  const cornerBottomLeft = "M79.96,152.68l5.45-10.3h-1.51v-2.66h-2.92l-2.64,6.05-1.47-.7.78,11.77-3.55-.17-33-15.83-2.4-2.69,9.65-6.74-1.86-.89,1.1-2.4-3.25-1.55-1.7,3.51-2.4.91-.66-1.88-7.42,9.21-2.43-2.76-12.4-35.11.15-3.67,11.44,2.18-.68-1.92,5.81-2.16,9.03.2c1.63.04,3.2.59,4.48,1.58l3.72,2.87c1.39,1.07,3.1,1.66,4.85,1.67l65.94.37v39.19h-3.08v1.61h-2.22l6.15,10.32-3.28,1.38h-36.41s-3.28-1.39-3.28-1.39Z";
  const cornerBottomRight = "M757.19,152.68l-5.45-10.3h1.51v-2.66h2.92l2.64,6.05,1.47-.7-.78,11.77,3.55-.17,33-15.83,2.4-2.69-9.65-6.74,1.86-.89-1.1-2.4,3.25-1.55,1.7,3.51,2.4.91.66-1.88,7.42,9.21,2.43-2.76,12.4-35.11-.15-3.67-11.44,2.18.68-1.92-5.81-2.16-9.03.2c-1.63.04-3.2.59-4.48,1.58l-3.72,2.87c-1.39,1.07-3.1,1.66-4.85,1.67l-65.94.37v39.19h3.08v1.61h2.22l-6.15,10.32,3.28,1.38h36.41s3.28-1.39,3.28-1.39Z";
  const cornerTopRight = "M757.19,11.59l-5.45,10.3h1.51v2.66h2.92l2.64-6.05,1.47.7-.78-11.77,3.55.17,33,15.83,2.4,2.69-9.65,6.74,1.86.89-1.1,2.4,3.25,1.55,1.7-3.51,2.4-.91.66,1.88,7.42-9.21,2.43,2.76,12.4,35.11-.15,3.67-11.44-2.18.68,1.92-5.81,2.16-9.03-.2c-1.63-.04-3.2-.59-4.48-1.58l-3.72-2.87c-1.39-1.07-3.1-1.66-4.85-1.67l-65.94-.37V23.5h3.08v-1.61h2.22l-6.15-10.32,3.28-1.38h36.41s3.28,1.39,3.28,1.39Z";

const shortmodule5 = "M126.82,151.78v-11.32h4.84v-15.37c2.55-.78,4.41-3.16,4.41-5.96s-1.86-5.18-4.41-5.96v-11.2h26.98v11.25c-2.47.83-4.25,3.16-4.25,5.91s1.78,5.08,4.25,5.91v15.34h4.73v11.69l.74,2.62h-38.36l1.07-2.91Z";
  const shortmodule7 = "M163.05,13.19v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const shortmodule8 = "M710.77,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const shortmodule6 = "M674.55,151.63v-11.32h4.84v-15.37c2.55-.78,4.41-3.16,4.41-5.96s-1.86-5.18-4.41-5.96v-11.2h26.98v11.25c-2.47.83-4.25,3.16-4.25,5.91s1.78,5.08,4.25,5.91v15.34h4.73v11.69l.74,2.62h-38.36l1.07-2.91Z";
  
  // Central Module Geometries
  const longmodule15 = "M175.59,13.04v11.32h4.84v15.37c2.55.78,4.41,3.16,4.41,5.96s-1.86,5.18-4.41,5.96v11.2h62.66v-11.25c-2.47-.83-4.25-3.16-4.25-5.91s1.78-5.08,4.25-5.91v-15.34h4.73v-11.69l.74-2.62h-74.04l1.07,2.91Z";
  const longmodule16 = "M590.45,13.04v11.32h4.84v15.37c2.55.78,4.41,3.16,4.41,5.96s-1.86,5.18-4.41,5.96v11.2h62.66v-11.25c-2.47-.83-4.25-3.16-4.25-5.91s1.78-5.08,4.25-5.91v-15.34h4.73v-11.69l.74-2.62h-74.04l1.07,2.91Z";
  const longmodule19 = "M255.35,13.04v11.32h4.84v15.37c2.55.78,4.41,3.16,4.41,5.96s-1.86,5.18-4.41,5.96v11.2h62.66v-11.25c-2.47-.83-4.25-3.16-4.25-5.91s1.78-5.08,4.25-5.91v-15.34h4.73v-11.69l.74-2.62h-74.04l1.07,2.91Z";
  const longmodule20 = "M510.69,13.04v11.32h4.84v15.37c2.55.78,4.41,3.16,4.41,5.96s-1.86,5.18-4.41,5.96v11.2h62.66v-11.25c-2.47-.83-4.25-3.16-4.25-5.91s1.78-5.08,4.25-5.91v-15.34h4.73v-11.69l.74-2.62h-74.04l1.07,2.91Z";
  const longmodule23 = "M342.83,13.04v11.32h4.84v15.37c2.55.78,4.41,3.16,4.41,5.96s-1.86,5.18-4.41,5.96v11.2h62.66v-11.25c-2.47-.83-4.25-3.16-4.25-5.91s1.78-5.08,4.25-5.91v-15.34h4.73v-11.69l.74-2.62h-74.04l1.07,2.91Z";
  const longmodule24 = "M422.59,13.04v11.32h4.84v15.37c2.55.78,4.41,3.16,4.41,5.96s-1.86,5.18-4.41,5.96v11.2h62.66v-11.25c-2.47-.83-4.25-3.16-4.25-5.91s1.78-5.08,4.25-5.91v-15.34h4.73v-11.69l.74-2.62h-74.04l1.07,2.91Z";
  
  const shortmodule15 = "M229.65,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const shortmodule16 = "M644.52,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const shortmodule19 = "M309.41,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const shortmodule20 = "M564.76,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const shortmodule23 = "M476.65,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const shortmodule24 = "M396.89,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";

  const twinnedshortmodule15a = "M249.48,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule15b = "M209.81,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule16a = "M664.35,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule16b = "M624.68,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule19a = "M329.25,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule19b = "M289.58,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule20a = "M584.59,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule20b = "M544.92,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule23a = "M416.73,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule23b = "M377.06,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule24a = "M496.49,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule24b = "M456.82,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";

  const renderCentralModule = (slotNum) => {
    const slot = slotData[slotNum];
    if (!slot || slot.active === false) return null;
    const optionType = slot.optionType || 'longmodule';

    // Map every bottom slot (odd) and top slot (even) to its canonical slot reference group
    let pathSlot = slotNum;
    if (slotNum === 9) pathSlot = 11;
    else if (slotNum === 10) pathSlot = 12;
    else if (slotNum === 13) pathSlot = 15;
    else if (slotNum === 14) pathSlot = 16;
    else if (slotNum === 17) pathSlot = 19;
    else if (slotNum === 18) pathSlot = 20;

    if (optionType === 'shortmodule') {
      let path = shortmodule15;
      if (pathSlot === 11) path = shortmodule15;
      else if (pathSlot === 12) path = shortmodule16;
      else if (pathSlot === 15) path = shortmodule19;
      else if (pathSlot === 16) path = shortmodule20;
      else if (pathSlot === 19) path = shortmodule23;
      else if (pathSlot === 20) path = shortmodule24;

      return renderModule(slotNum, path, {}, `shortmodule-${slotNum}`);
    } 
    else if (optionType === 'twinnedshortmodule') {
      let pathA = twinnedshortmodule15a;
      let pathB = twinnedshortmodule15b;

      if (pathSlot === 11) { pathA = twinnedshortmodule15a; pathB = twinnedshortmodule15b; }
      else if (pathSlot === 12) { pathA = twinnedshortmodule16a; pathB = twinnedshortmodule16b; }
      else if (pathSlot === 15) { pathA = twinnedshortmodule19a; pathB = twinnedshortmodule19b; }
      else if (pathSlot === 16) { pathA = twinnedshortmodule20a; pathB = twinnedshortmodule20b; }
      else if (pathSlot === 19) { pathA = twinnedshortmodule23a; pathB = twinnedshortmodule23b; }
      else if (pathSlot === 20) { pathA = twinnedshortmodule24a; pathB = twinnedshortmodule24b; }

      return (
        <React.Fragment key={`twinnedshortmodule-group-${slotNum}`}>
          {renderModule(slotNum, pathA, {}, `twinnedshortmodule-${slotNum}-A`)}
          {renderModule(slotNum, pathB, {}, `twinnedshortmodule-${slotNum}-B`)}
        </React.Fragment>
      );
    } 
    else {
      let path = longmodule15;
      if (pathSlot === 11) path = longmodule15;
      else if (pathSlot === 12) path = longmodule16;
      else if (pathSlot === 15) path = longmodule19;
      else if (pathSlot === 16) path = longmodule20;
      else if (pathSlot === 19) path = longmodule23;
      else if (pathSlot === 20) path = longmodule24;

      return renderModule(slotNum, path, {}, `longmodule-${slotNum}`);
    }
  };

  return (
    <svg 
      id="Layer_2" 
      data-name="Layer 2" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 837.94 164.67"
      style={{ width: '100%', maxWidth: '900px', height: '280px', display: 'block', margin: '0 auto' }}
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
              <linearGradient key={key} id={`grad-68-${key}`} x1="0%" y1="0%" x2="100%" y2="0%">
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
        <path d="M502.63,1.5h252.98c44.64,0,80.83,36.19,80.83,80.83h0c0,44.64-36.19,80.84-80.83,80.84h-252.98"/>
  	<path d="M335.31,163.17H82.33C37.69,163.17,1.5,126.98,1.5,82.34h0c0-44.64,36.19-80.84,80.83-80.84h252.98"/>
      <line x1="167.99" y1="163.17" x2="167.99" y2="1.5"/>
  	<line x1="335.31" y1="163.17" x2="335.31" y2="1.5"/>
  	<line x1="669.95" y1="1.5" x2="669.95" y2="163.17"/>
  	<line x1="502.63" y1="1.5" x2="502.63" y2="163.17"/>
  	<line x1="335.31" y1="163.17" x2="502.63" y2="163.17"/>
  	<line x1="335.31" y1="1.5" x2="502.63" y2="1.5"/>
      </g>

      {/* --- CORNERS (1 - 4) --- */}
      {renderModule(1, cornerBottomLeft, {}, 'corner-1')} 
      {renderModule(2, cornerTopLeft, {}, 'corner-2')} 
      {renderModule(3, cornerBottomRight, {}, 'corner-3')} 
      {renderModule(4, cornerTopRight, {}, 'corner-4')} 

            {/* --- TOP ROW MODULES --- */}
        {renderModule(7, shortmodule7, {}, 'top-7')}
        {renderModule(8, shortmodule8, {}, 'top-8')}
        {renderCentralModule(15)}
        {renderCentralModule(19)}
        {renderCentralModule(11)}
        {renderCentralModule(12)}
        {renderCentralModule(20)}
        {renderCentralModule(16)}

        {/* --- BOTTOM ROW MODULES --- */}
          {renderModule(5, shortmodule5, {}, 'bot-5')}
          {renderModule(6, shortmodule6, {}, 'bot-6')}
          <g transform="translate(0, 164.67) scale(1, -1)">
          {renderCentralModule(13)}
          {renderCentralModule(9)}
          {renderCentralModule(18)}
          {renderCentralModule(17)}
          {renderCentralModule(14)}
          {renderCentralModule(10)}
          </g>


     {/* --- NUMBERS --- */}
     <text className="cls-num" onClick={() => onSelectSlot(1)} transform="translate(73.5 126)"><tspan x="0" y="0">1</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(2)} transform="translate(755 126)"><tspan x="0" y="0">2</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(3)} transform="translate(73.5 48)"><tspan x="0" y="0">3</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(4)} transform="translate(755 48)"><tspan x="0" y="0">4</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(5)} transform="translate(142 126)"><tspan x="0" y="0">5</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(6)} transform="translate(688 126)"><tspan x="0" y="0">6</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(7)} transform="translate(142 48)"><tspan x="0" y="0">7</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(8)} transform="translate(688 48)"><tspan x="0" y="0">8</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(9)} transform="translate(208 126)"><tspan x="0" y="0">9</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(10)} transform="translate(618.5 126)"><tspan x="0" y="0">10</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(11)} transform="translate(205 48)"><tspan x="0" y="0">11</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(12)} transform="translate(618.5 48)"><tspan x="0" y="0">12</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(13)} transform="translate(282 126)"><tspan x="0" y="0">13</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(14)} transform="translate(538 126)"><tspan x="0" y="0">14</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(15)} transform="translate(282 48)"><tspan x="0" y="0">15</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(16)} transform="translate(538 48)"><tspan x="0" y="0">16</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(9)} transform="translate(370 126)"><tspan x="0" y="0">17</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(10)} transform="translate(450 126)"><tspan x="0" y="0">18</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(11)} transform="translate(370 48)"><tspan x="0" y="0">19</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(12)} transform="translate(450 48)"><tspan x="0" y="0">20</tspan></text>
      </g>

      {/* --- OUTSIDE TEXT LABELS --- */}
      <text className="cls-label" x="50%" y="9" textAnchor="middle"><tspan x="420" y="0">REAR</tspan></text>
      <text className="cls-label" x="50%" y="192" textAnchor="middle"><tspan x="420" y="205">FRONT</tspan></text>
    </svg>
  );
}
