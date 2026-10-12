import React from 'react';

export default function XL7568({ 
  lensColor = '#a1a1a1', 
  topcoverColor = '#1e293b', 
  slotData, 
  selectedSlotKey, 
  onSelectSlot 
}) {
  const getFill = (slotNum) => {
    const slot = slotData[slotNum];
    if (!slot || slot.active === false) return 'transparent';
    
    if (slot.mode === 'dual' && slot.secondary) {
      return `url(#grad-68-${slotNum})`;
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

  // Base 68-inch Corner Geometry
  const cornerTopLeft = "M79.96,11.59l5.45,10.3h-1.51v2.66h-2.92l-2.64-6.05-1.47.7.78-11.77-3.55.17-33,15.83-2.4,2.69,9.65,6.74-1.86.89,1.1,2.4-3.25,1.55-1.7-3.51-2.4-.91-.66,1.88-7.42-9.21-2.43,2.76-12.4,35.11.15,3.67,11.44-2.18-.68,1.92,5.81,2.16,9.03-.2c1.63-.04,3.2-.59,4.48-1.58l3.72-2.87c1.39-1.07,3.1-1.66,4.85-1.67l65.94-.37V23.5h-3.08v-1.61h-2.22l6.15-10.32-3.28-1.38h-36.41s-3.28,1.39-3.28,1.39Z";
  const cornerBottomLeft = "M79.96,152.68l5.45-10.3h-1.51v-2.66h-2.92l-2.64,6.05-1.47-.7.78,11.77-3.55-.17-33-15.83-2.4-2.69,9.65-6.74-1.86-.89,1.1-2.4-3.25-1.55-1.7,3.51-2.4.91-.66-1.88-7.42,9.21-2.43-2.76-12.4-35.11.15-3.67,11.44,2.18-.68-1.92,5.81-2.16,9.03.2c1.63.04,3.2.59,4.48,1.58l3.72,2.87c1.39,1.07,3.1,1.66,4.85,1.67l65.94.37v39.19h-3.08v1.61h-2.22l6.15,10.32-3.28-1.38h-36.41s-3.28-1.39-3.28-1.39Z";
  const cornerBottomRight = "M881.12,152.68l-5.45-10.3h1.51v-2.66h2.92l2.64,6.05,1.47-.7-.78,11.77,3.55-.17,33-15.83,2.4-2.69-9.65-6.74,1.86-.89-1.1-2.4,3.25-1.55,1.7,3.51,2.4.91.66-1.88,7.42,9.21,2.43-2.76,12.4-35.11-.15-3.67-11.44,2.18.68-1.92-5.81-2.16-9.03.2c-1.63.04-3.2.59-4.48,1.58l-3.72,2.87c-1.39,1.07-3.1,1.66-4.85,1.67l-65.94.37v39.19h3.08v1.61h2.22l-6.15,10.32,3.28,1.38h36.41s3.28-1.39,3.28-1.39Z";
  const cornerTopRight = "M881.12,11.59l-5.45,10.3h1.51v2.66h2.92l2.64-6.05,1.47.7-.78-11.77,3.55.17,33,15.83,2.4,2.69-9.65,6.74,1.86.89-1.1,2.4,3.25,1.55,1.7-3.51,2.4-.91.66,1.88,7.42-9.21,2.43,2.76,12.4,35.11-.15,3.67-11.44-2.18.68,1.92-5.81,2.16-9.03-.2c-1.63-.04-3.2-.59-4.48-1.58l-3.72-2.87c-1.39,1.07-3.1,1.66-4.85-1.67l-65.94-.37V23.5h3.08v-1.61h2.22l-6.15-10.32,3.28-1.38h36.41s3.28,1.39,3.28,1.39Z";

  const shortmodule5 = "M132.91,152.78v-11.32h4.84v-15.37c2.55-.78,4.41-3.16,4.41-5.96s-1.86-5.18-4.41-5.96v-11.2h26.98v11.25c-2.47.83-4.25,3.16-4.25,5.91s1.78,5.08,4.25,5.91v15.34h4.73v11.69l.74,2.62h-38.36l1.07-2.91Z";
  const shortmodule7 = "M169.13,14.19v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const shortmodule8 = "M830.7,13.89v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const shortmodule6 = "M794.48,152.48v-11.32h4.84v-15.37c2.55-.78,4.41-3.16,4.41-5.96s-1.86-5.18-4.41-5.96v-11.2h26.98v11.25c-2.47.83-4.25,3.16-4.25,5.91s1.78,5.08,4.25,5.91v15.34h4.73v11.69l.74,2.62h-38.36l1.07-2.91Z";
  const shortmodule9 = "M185.03,151.77v-11.32h4.84v-15.37c2.55-.78,4.41-3.16,4.41-5.96s-1.86-5.18-4.41-5.96v-11.19h26.98v11.25c-2.47.83-4.25,3.16-4.25,5.91s1.78,5.08,4.25,5.91v15.34h4.73v11.69l.74,2.62h-38.35l1.07-2.91Z";
  const shortmodule11 = "M221.25,13.19v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const shortmodule12 = "M777.16,12.89v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const shortmodule10 = "M740.94,151.48v-11.32h4.84v-15.37c2.55-.78,4.41-3.16,4.41-5.96s-1.86-5.18-4.41-5.96v-11.2h26.98v11.25c-2.47.83-4.25,3.16-4.25,5.91s1.78,5.08,4.25,5.91v15.34h4.73v11.69l.74,2.62h-38.36l1.07-2.91Z";

  // Central Module Geometries
  const longmodule15 = "M237.55,13.04v11.32h4.84v15.37c2.55.78,4.41,3.16,4.41,5.96s-1.86,5.18-4.41,5.96v11.2h62.66v-11.25c-2.47-.83-4.25-3.16-4.25-5.91s1.78-5.08,4.25-5.91v-15.34h4.73v-11.69l.74-2.62h-74.04l1.07,2.91Z";
  const longmodule16 = "M652.42,13.04v11.32h4.84v15.37c2.55.78,4.41,3.16,4.41,5.96s-1.86,5.18-4.41,5.96v11.2h62.66v-11.25c-2.47-.83-4.25-3.16-4.25-5.91s1.78-5.08,4.25-5.91v-15.34h4.73v-11.69l.74-2.62h-74.04l1.07,2.91Z";
  const longmodule19 = "M317.31,13.04v11.32h4.84v15.37c2.55.78,4.41,3.16,4.41,5.96s-1.86,5.18-4.41,5.96v11.2h62.66v-11.25c-2.47-.83-4.25-3.16-4.25-5.91s1.78-5.08,4.25-5.91v-15.34h4.73v-11.69l.74-2.62h-74.04l1.07,2.91Z";
  const longmodule20 = "M572.66,13.04v11.32h4.84v15.37c2.55.78,4.41,3.16,4.41,5.96s-1.86,5.18-4.41,5.96v11.2h62.66v-11.25c-2.47-.83-4.25-3.16-4.25-5.91s1.78-5.08,4.25-5.91v-15.34h4.73v-11.69l.74-2.62h-74.04l1.07,2.91Z";
  const longmodule23 = "M404.79,13.04v11.32h4.84v15.37c2.55.78,4.41,3.16,4.41,5.96s-1.86,5.18-4.41,5.96v11.2h62.66v-11.25c-2.47-.83-4.25-3.16-4.25-5.91s1.78-5.08,4.25-5.91v-15.34h4.73v-11.69l.74-2.62h-74.04l1.07,2.91Z";
  const longmodule24 = "M484.56,13.04v11.32h4.84v15.37c2.55.78,4.41,3.16,4.41,5.96s-1.86,5.18-4.41,5.96v11.2h62.66v-11.25c-2.47-.83-4.25-3.16-4.25-5.91s1.78-5.08,4.25-5.91v-15.34h4.73v-11.69l.74-2.62h-74.04l1.07,2.91Z";
  
  const shortmodule15 = "M291.61,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const shortmodule16 = "M706.48,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const shortmodule19 = "M371.37,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const shortmodule20 = "M626.72,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const shortmodule23 = "M458.86,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const shortmodule24 = "M538.62,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";

  const twinnedshortmodule15a = "M311.45,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule15b = "M271.78,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule16a = "M726.32,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule16b = "M686.65,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule19a = "M391.21,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule19b = "M351.54,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule20a = "M646.55,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule20b = "M606.88,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule23a = "M478.69,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule23b = "M439.02,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule24a = "M558.45,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule24b = "M518.78,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";

  const renderCentralModule = (slotNum) => {
    const slot = slotData[slotNum];
    if (!slot || slot.active === false) return null;
    const optionType = slot.optionType || 'longmodule';

    let pathSlot = slotNum;
    if (slotNum === 14) pathSlot = 16;
    else if (slotNum === 18) pathSlot = 20;
    else if (slotNum === 22) pathSlot = 24;
    else if (slotNum === 21) pathSlot = 23;
    else if (slotNum === 17) pathSlot = 19;
    else if (slotNum === 13) pathSlot = 15;

    if (optionType === 'shortmodule') {
      let path = shortmodule15;
      if (pathSlot === 15) path = shortmodule15;
      else if (pathSlot === 16) path = shortmodule16;
      else if (pathSlot === 19) path = shortmodule19;
      else if (pathSlot === 20) path = shortmodule20;
      else if (pathSlot === 23) path = shortmodule23;
      else if (pathSlot === 24) path = shortmodule24;

      return renderModule(slotNum, path, {}, `shortmodule-${slotNum}`);
    } 
    else if (optionType === 'twinnedshortmodule') {
      let pathA = twinnedshortmodule15a;
      let pathB = twinnedshortmodule15b;

      if (pathSlot === 15) { pathA = twinnedshortmodule15a; pathB = twinnedshortmodule15b; }
      else if (pathSlot === 16) { pathA = twinnedshortmodule16a; pathB = twinnedshortmodule16b; }
      else if (pathSlot === 19) { pathA = twinnedshortmodule19a; pathB = twinnedshortmodule19b; }
      else if (pathSlot === 20) { pathA = twinnedshortmodule20a; pathB = twinnedshortmodule20b; }
      else if (pathSlot === 23) { pathA = twinnedshortmodule23a; pathB = twinnedshortmodule23b; }
      else if (pathSlot === 24) { pathA = twinnedshortmodule24a; pathB = twinnedshortmodule24b; }

      return (
        <React.Fragment key={`twinnedshortmodule-group-${slotNum}`}>
          {renderModule(slotNum, pathA, {}, `twinnedshortmodule-${slotNum}-A`)}
          {renderModule(slotNum, pathB, {}, `twinnedshortmodule-${slotNum}-B`)}
        </React.Fragment>
      );
    } 
    else {
      let path = longmodule15;
      if (pathSlot === 15) path = longmodule15;
      else if (pathSlot === 16) path = longmodule16;
      else if (pathSlot === 19) path = longmodule19;
      else if (pathSlot === 20) path = longmodule20;
      else if (pathSlot === 23) path = longmodule23;
      else if (pathSlot === 24) path = longmodule24;

      return renderModule(slotNum, path, {}, `longmodule-${slotNum}`);
    }
  };

  return (
    <svg 
      id="Layer_2" 
      data-name="Layer 2" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 961.87 500"
      style={{ width: '100%', maxWidth: '900px', height: '500px', display: 'block', margin: '0 auto' }}
    >
      <defs>
        <style>{`
          .cls-label { font-family: FuturaPT-Heavy, 'Futura PT', sans-serif; font-size: 12px; font-weight: 800; fill: #989898; letter-spacing: 0.1em; }
          .cls-num { font-family: FuturaPT-Bold, 'Futura PT', sans-serif; font-size: 14px; font-weight: 700; fill: #282828; cursor: pointer; }
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

      {/* ========================================================= */}
      {/* 1. OVERHEAD SCHEMATIC VIEW                                */}
      {/* ========================================================= */}
      <g transform="translate(0, 16)">
        {/* Chassis Outlines */}
        <g stroke={lensColor || "#231f20"} fill="none" strokeWidth="3" strokeMiterlimit="10">
          <path d="M564.06,1.5h315.48c44.64,0,80.83,36.19,80.83,80.83h0c0,44.64-36.19,80.84-80.83,80.84h-315.48"/>
          <path d="M396.74,163.17H82.33C37.69,163.17,1.5,126.98,1.5,82.34h0C1.5,37.69,37.69,1.5,82.33,1.5h314.4"/>
          <line x1="564.06" y1="1.5" x2="564.06" y2="163.17"/>
          <line x1="396.74" y1="1.5" x2="396.74" y2="163.17"/>
          <line x1="229.42" y1="1.5" x2="229.42" y2="163.17"/>
          <line x1="177.18" y1="1.5" x2="177.18" y2="163.17"/>
          <line x1="731.38" y1="1.5" x2="731.38" y2="163.17"/>
          <line x1="784.76" y1="1.5" x2="784.76" y2="163.17"/>
          <line x1="396.74" y1="163.17" x2="564.06" y2="163.17"/>
          <line x1="396.74" y1="1.5" x2="564.06" y2="1.5"/>
        </g>

        {/* CORNERS (1 - 4) */}
        {renderModule(1, cornerBottomLeft, {}, 'corner-1')} 
        {renderModule(2, cornerTopLeft, {}, 'corner-2')} 
        {renderModule(3, cornerBottomRight, {}, 'corner-3')} 
        {renderModule(4, cornerTopRight, {}, 'corner-4')} 

        {/* TOP ROW MODULES */}
        {renderModule(7, shortmodule7, {}, 'top-7')}
        {renderModule(8, shortmodule8, {}, 'top-8')}
        {renderModule(11, shortmodule11, {}, 'top-11')}
        {renderModule(12, shortmodule12, {}, 'top-12')}
        {renderCentralModule(15)}
        {renderCentralModule(19)}
        {renderCentralModule(23)}
        {renderCentralModule(24)}
        {renderCentralModule(20)}
        {renderCentralModule(16)}

        {/* BOTTOM ROW MODULES */}
        {renderModule(5, shortmodule5, {}, 'bot-5')}
        {renderModule(6, shortmodule6, {}, 'bot-6')}
        {renderModule(9, shortmodule9, {}, 'bot-9')}
        {renderModule(10, shortmodule10, {}, 'bot-10')}
        <g transform="translate(0, 164.67) scale(1, -1)">
          {renderCentralModule(13)}
          {renderCentralModule(22)}
          {renderCentralModule(18)}
          {renderCentralModule(17)}
          {renderCentralModule(14)}
          {renderCentralModule(21)}
        </g>

        {/* NUMBERS */}
        <text className="cls-num" onClick={() => onSelectSlot(1)} transform="translate(73.5 126)"><tspan x="0" y="0">1</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(2)} transform="translate(872 126)"><tspan x="0" y="0">2</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(3)} transform="translate(73.5 48)"><tspan x="0" y="0">3</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(4)} transform="translate(872 48)"><tspan x="0" y="0">4</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(5)} transform="translate(147 126)"><tspan x="0" y="0">5</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(6)} transform="translate(806 126)"><tspan x="0" y="0">6</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(7)} transform="translate(147 48)"><tspan x="0" y="0">7</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(8)} transform="translate(806 48)"><tspan x="0" y="0">8</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(9)} transform="translate(200 126)"><tspan x="0" y="0">9</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(10)} transform="translate(752 126)"><tspan x="0" y="0">10</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(11)} transform="translate(196 48)"><tspan x="0" y="0">11</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(12)} transform="translate(752 48)"><tspan x="0" y="0">12</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(13)} transform="translate(265 126)"><tspan x="0" y="0">13</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(14)} transform="translate(680 126)"><tspan x="0" y="0">14</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(15)} transform="translate(265 48)"><tspan x="0" y="0">15</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(16)} transform="translate(680 48)"><tspan x="0" y="0">16</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(17)} transform="translate(345 126)"><tspan x="0" y="0">17</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(18)} transform="translate(600 126)"><tspan x="0" y="0">18</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(19)} transform="translate(345 48)"><tspan x="0" y="0">19</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(20)} transform="translate(600 48)"><tspan x="0" y="0">20</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(21)} transform="translate(433 126)"><tspan x="0" y="0">21</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(22)} transform="translate(512 126)"><tspan x="0" y="0">22</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(23)} transform="translate(433 48)"><tspan x="0" y="0">23</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(24)} transform="translate(512 48)"><tspan x="0" y="0">24</tspan></text>

        {/* OUTSIDE TEXT LABELS */}
        <text className="cls-label" x="50%" y="9" textAnchor="middle"><tspan x="480" y="-20">REAR</tspan></text>
        <text className="cls-label" x="50%" y="192" textAnchor="middle"><tspan x="480" y="200">FRONT</tspan></text>
      </g>

      {/* ========================================================= */}
      {/* 2. FRONT & REAR ELEVATION VIEW                            */}
      {/* ========================================================= */}
      <g transform="translate(62, 300)">
        {/* REAR ELEVATION PROFILE */}
        <text className="cls-label" x="420" y="55" textAnchor="middle">REAR ELEVATION</text>
        
        {/* Top Cover Paths (Rear) */}
        <path fill={topCoverColor} stroke="#282828" strokeWidth="0.5" strokeMiterlimit="10" d="M420.93.25s366.31.25,372.89.25,37.44,1.82,37.93,1.82,2.37,1.52,2.81,1.87,1.94,2.42,2.48,2.63.81,1.87.38,2.37-1.83,3.79-1.89,5.66.05,5.66-.16,6.21-1.67,3.08-2.48,3.18-.76-5.71-.65-6.92,2.27-3.89,2.37-9.54c.02-.87-413.67-.63-413.67-.63"/>
        <path fill={topCoverColor} stroke="#282828" strokeWidth="0.5" strokeMiterlimit="10" d="M420.93.25S54.62.5,48.04.5,10.6,2.32,10.11,2.32s-2.37,1.52-2.81,1.87-1.94,2.42-2.48,2.63-.81,1.87-.38,2.37,1.83,3.79,1.89,5.66-.05,5.66.16,6.21,1.67,3.08,2.48,3.18.76-5.71.65-6.92-2.27-3.89-2.37-9.54c-.02-.87,413.67-.63,413.67-.63"/>
        
        {/* Frame Outline (Rear) */}
        <path fill="none" stroke="#282828" strokeWidth="0.5" strokeMiterlimit="10" d="M420.93,7.14s413.69-.24,413.67.63c-.11,5.66-2.27,8.33-2.37,9.54l-.1,1.02,2.47.67-2.42,4.12"/>
        <path fill="none" stroke="#282828" strokeWidth="0.5" strokeMiterlimit="10" d="M420.93,7.14S7.24,6.9,7.25,7.77c.11,5.66,2.27,8.33,2.37,9.54l.04.86"/>
        <path fill="none" stroke="#231f20" strokeWidth="0.5" strokeMiterlimit="10" d="M420.93,25.83H21.39c-8.31,0-9.87-1.04-11.89-2.85l-1.72-1.71-.53-1.03,2.42-2.06"/>
        <path fill="none" stroke="#231f20" strokeWidth="0.5" strokeMiterlimit="10" d="M18.85,25.83c-6.8,0-9.18-7.66-9.18-7.66"/>
        <path fill="none" stroke="#231f20" strokeWidth="0.5" strokeMiterlimit="10" d="M832.35,22.98c-2.01,1.81-3.58,2.85-11.89,2.85h-399.54"/>
        <path fill="none" stroke="#231f20" strokeWidth="0.5" strokeMiterlimit="10" d="M823,25.83c6.8,0,9.18-7.66,9.18-7.66"/>

        {/* Outer Lens Fill (Rear) */}
        <polygon fill={lensColor} stroke="#231f20" strokeWidth="0.5" strokeMiterlimit="10" points="826.72 24.4 533.56 25.14 448.4 25.53 15.75 24.41 10.79 18.18 8.46 8.69 410.72 7.37 427.75 7.37 825.49 8.69 826.72 24.4"/>


        {/* FRONT ELEVATION PROFILE */}
        <text className="cls-label" x="418" y="195" textAnchor="middle">FRONT ELEVATION</text>

        {/* Top Cover Paths (Front) */}
        <path fill={topCoverColor} stroke="#282828" strokeWidth="0.5" strokeMiterlimit="10" d="M418.97,143.12s366.31.25,372.89.25,37.44,1.82,37.93,1.82,2.37,1.52,2.81,1.87,1.94,2.42,2.48,2.63.81,1.87.38,2.37-1.83,3.79-1.89,5.66.05,5.66-.16,6.21-1.67,3.08-2.48,3.18-.76-5.71-.65-6.92,2.27-3.89,2.37-9.54c.02-.87-413.67-.63-413.67-.63"/>
        <path fill={topCoverColor} stroke="#282828" strokeWidth="0.5" strokeMiterlimit="10" d="M418.97,143.12s-366.31.25-372.89.25-37.44,1.82-37.93,1.82-2.37,1.52-2.81,1.87-1.94,2.42-2.48,2.63-.81,1.87-.38,2.37,1.83,3.79-1.89,5.66-.05,5.66.16,6.21,1.67,3.08,2.48,3.18.76-5.71.65-6.92-2.27-3.89-2.37-9.54c-.02-.87,413.67-.63,413.67-.63"/>

        {/* Frame Outline (Front) */}
        <path fill="none" stroke="#282828" strokeWidth="0.5" strokeMiterlimit="10" d="M418.97,150.02s413.69-.24,413.67.63c-.11,5.66-2.27,8.33-2.37,9.54l-.1,1.02,2.47.67-2.42,4.12"/>
        <path fill="none" stroke="#282828" strokeWidth="0.5" strokeMiterlimit="10" d="M418.97,150.02s-413.69-.24-413.67.63c.11,5.66,2.27,8.33,2.37,9.54l.04.86"/>
        <path fill="none" stroke="#231f20" strokeWidth="0.5" strokeMiterlimit="10" d="M418.97,168.71H19.43c-8.31,0-9.87-1.04-11.89-2.85l-1.72-1.71-.53-1.03,2.42-2.06"/>
        <path fill="none" stroke="#231f20" strokeWidth="0.5" strokeMiterlimit="10" d="M16.9,168.71c-6.8,0-9.18-7.66-9.18-7.66"/>
        <path fill="none" stroke="#231f20" strokeWidth="0.5" strokeMiterlimit="10" d="M830.4,165.85c-2.01,1.81-3.58,2.85-11.89,2.85h-399.54"/>
        <path fill="none" stroke="#231f20" strokeWidth="0.5" strokeMiterlimit="10" d="M821.05,168.71c6.8,0,9.18-7.66,9.18-7.66"/>

        {/* Outer Lens Fill (Front) */}
        <polygon fill={lensColor} stroke="#231f20" strokeWidth="0.5" strokeMiterlimit="10" points="824.76 167.27 531.6 168.02 446.44 168.4 13.8 167.28 8.83 161.05 6.51 151.56 408.76 150.24 425.8 150.24 823.54 151.56 824.76 167.27"/>
      </g>
    </svg>
  );
}
