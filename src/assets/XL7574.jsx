import React from 'react';

export default function XL7574 ({ 
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
      return `url(#grad-74-${slotNum})`;
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

  // Base 74-inch Corner Geometry
  const cornerTopLeft = "M79.96,11.59l5.45,10.3h-1.51v2.66h-2.92l-2.64-6.05-1.47.7.78-11.77-3.55.17-33,15.83-2.4,2.69,9.65,6.74-1.86.89,1.1,2.4-3.25,1.55-1.7-3.51-2.4-.91-.66,1.88-7.42-9.21-2.43,2.76-12.4,35.11.15,3.67,11.44-2.18-.68,1.92,5.81,2.16,9.03-.2c1.63-.04,3.2-.59,4.48-1.58l3.72-2.87c1.39-1.07,3.1-1.66,4.85-1.67l65.94-.37V23.5h-3.08v-1.61h-2.22l6.15-10.32-3.28-1.38h-36.41s-3.28,1.39-3.28,1.39Z";
  const cornerBottomLeft = "M79.96,152.68l5.45-10.3h-1.51v-2.66h-2.92l-2.64,6.05-1.47-.7.78,11.77-3.55-.17-33-15.83-2.4-2.69,9.65-6.74-1.86-.89,1.1-2.4-3.25-1.55-1.7,3.51-2.4.91-.66-1.88-7.42,9.21-2.43-2.76-12.4-35.11.15-3.67,11.44,2.18-.68-1.92,5.81-2.16,9.03.2c1.63.04,3.2.59,4.48,1.58l3.72,2.87c1.39,1.07,3.1,1.66,4.85,1.67l65.94.37v39.19h-3.08v1.61h-2.22l6.15,10.32-3.28,1.38h-36.41s-3.28-1.39-3.28-1.39Z";
  const cornerTopRight = "M945.15,11.99l-5.45,10.3h1.51v2.66h2.92l2.64-6.05,1.47.7-.78-11.77,3.55.17,33,15.83,2.4,2.69-9.65,6.74,1.86.89-1.1,2.4,3.25,1.55,1.7-3.51,2.4-.91.66,1.88,7.42-9.21,2.43,2.76,12.4,35.11-.15,3.67-11.44-2.18.68,1.92-5.81,2.16-9.03-.2c-1.63-.04-3.2-.59-4.48-1.58l-3.72-2.87c-1.39-1.07-3.1-1.66-4.85-1.67l-65.94-.37V23.9h3.08v-1.61h2.22l-6.15-10.32,3.28-1.38h36.41s3.28,1.39,3.28,1.39Z";
  const cornerBottomRight = "M945.15,153.08l-5.45-10.3h1.51v-2.66h2.92l2.64,6.05,1.47-.7-.78,11.77,3.55-.17,33-15.83,2.4-2.69-9.65-6.74,1.86-.89-1.1-2.4,3.25-1.55,1.7,3.51,2.4.91.66-1.88,7.42,9.21,2.43-2.76,12.4-35.11-.15-3.67-11.44,2.18.68-1.92-5.81-2.16-9.03.2c-1.63.04-3.2.59-4.48,1.58l-3.72,2.87c-1.39,1.07-3.1,1.66-4.85,1.67l-65.94.37v39.19h3.08v1.61h2.22l-6.15,10.32,3.28,1.38h36.41s3.28-1.39,3.28-1.39Z";

  const shortmodule6 = "M167.49,13.33v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const shortmodule5 = "M131.27,151.92v-11.32h4.84v-15.37c2.55-.78,4.41-3.16,4.41-5.96s-1.86-5.18-4.41-5.96v-11.2h26.98v11.25c-2.47.83-4.25,3.16-4.25,5.91s1.78,5.08,4.25,5.91v15.34h4.73v11.69l.74,2.62h-38.36l1.07-2.91Z";
  
  const shortmodule8 = "M894.11,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const shortmodule7 = "M857.89,151.63v-11.32h4.84v-15.37c2.55-.78,4.41-3.16,4.41-5.96s-1.86-5.18-4.41-5.96v-11.2h26.98v11.25c-2.47.83-4.25,3.16-4.25,5.91s1.78,5.08,4.25,5.91v15.34h4.73v11.69l.74,2.62h-38.36l1.07-2.91Z";

  // Central Module Geometries
  const longmodule12 = "M183.35,13.33v11.32h4.84v15.37c2.55.78,4.41,3.16,4.41,5.96s-1.86,5.18-4.41,5.96v11.2h62.66v-11.25c-2.47-.83-4.25-3.16-4.25-5.91s1.78-5.08,4.25-5.91v-15.34h4.73v-11.69l.74-2.62h-74.04l1.07,2.91Z";
  const longmodule14 = "M269.48,13.33v11.32h4.84v15.37c2.55.78,4.41,3.16,4.41,5.96s-1.86,5.18-4.41,5.96v11.2h62.66v-11.25c-2.47-.83-4.25-3.16-4.25-5.91s1.78-5.08,4.25-5.91v-15.34h4.73v-11.69l.74-2.62h-74.04l1.07,2.91Z";
  const longmodule10 = "M770.13,13.04v11.32h4.84v15.37c2.55.78,4.41,3.16,4.41,5.96s-1.86,5.18-4.41,5.96v11.2h62.66v-11.25c-2.47-.83-4.25-3.16-4.25-5.91s1.78-5.08,4.25-5.91v-15.34h4.73v-11.69l.74-2.62h-74.04l1.07,2.91Z";
  const longmodule16 = "M684.35,13.33v11.32h4.84v15.37c2.55.78,4.41,3.16,4.41,5.96s-1.86,5.18-4.41,5.96v11.2h62.66v-11.25c-2.47-.83-4.25-3.16-4.25-5.91s1.78-5.08,4.25-5.91v-15.34h4.73v-11.69l.74-2.62h-74.04l1.07,2.91Z";
  const longmodule18 = "M349.24,13.33v11.32h4.84v15.37c2.55.78,4.41,3.16,4.41,5.96s-1.86,5.18-4.41,5.96v11.2h62.66v-11.25c-2.47-.83-4.25-3.16-4.25-5.91s1.78-5.08,4.25-5.91v-15.34h4.73v-11.69l.74-2.62h-74.04l1.07,2.91Z";
  const longmodule20 = "M604.58,13.33v11.32h4.84v15.37c2.55.78,4.41,3.16,4.41,5.96s-1.86,5.18-4.41,5.96v11.2h62.66v-11.25c-2.47-.83-4.25-3.16-4.25-5.91s1.78-5.08,4.25-5.91v-15.34h4.73v-11.69l.74-2.62h-74.04l1.07,2.91Z";
  const longmodule22 = "M436.72,13.33v11.32h4.84v15.37c2.55.78,4.41,3.16,4.41,5.96s-1.86,5.18-4.41,5.96v11.2h62.66v-11.25c-2.47-.83-4.25-3.16-4.25-5.91s1.78-5.08,4.25-5.91v-15.34h4.73v-11.69l.74-2.62h-74.04l1.07,2.91Z";
  const longmodule24 = "M516.48,13.33v11.32h4.84v15.37c2.55.78,4.41,3.16,4.41,5.96s-1.86,5.18-4.41,5.96v11.2h62.66v-11.25c-2.47-.83-4.25-3.16-4.25-5.91s1.78-5.08,4.25-5.91v-15.34h4.73v-11.69l.74-2.62h-74.04l1.07,2.91Z";
  
  const shortmodule10 = "M824.2,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const shortmodule12 = "M237.41,13.33v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const shortmodule14 = "M323.54,13.33v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const shortmodule16 = "M738.41,13.33v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const shortmodule18 = "M403.3,13.33v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const shortmodule20 = "M658.65,13.33v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const shortmodule22 = "M490.79,13.33v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const shortmodule24 = "M570.55,13.33v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";

  const twinnedshortmodule12a = "M257.24,13.33v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule12b = "M217.57,13.33v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule14a = "M343.38,13.33v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule14b = "M303.71,13.33v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule16a = "M758.24,13.33v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule16b = "M718.57,13.33v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule18a = "M423.14,13.33v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule18b = "M383.47,13.33v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule20a = "M678.48,13.33v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule20b = "M638.81,13.33v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule22a = "M510.62,13.33v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule22b = "M470.95,13.33v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule24a = "M590.38,13.33v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule24b = "M550.71,13.33v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule10a = "M844.03,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";
  const twinnedshortmodule10b = "M804.36,13.04v11.32h-4.84v15.37c-2.55.78-4.41,3.16-4.41,5.96s1.86,5.18,4.41,5.96v11.2h-26.98v-11.25c2.47-.83,4.25-3.16,4.25-5.91s-1.78-5.08-4.25-5.91v-15.34h-4.73v-11.69l-.74-2.62h38.36l-1.07,2.91Z";

  const renderCentralModule = (slotNum) => {
    const slot = slotData[slotNum];
    if (!slot || slot.active === false) return null;
    const optionType = slot.optionType || 'longmodule';

    // Map every bottom slot (odd) and top slot (even) to its canonical slot reference group
    // e.g., 11 maps to 12, 13 maps to 14, 9 maps to 10, etc.
    let pathSlot = slotNum;
    if (slotNum === 10) pathSlot = 12;
    else if (slotNum === 14) pathSlot = 16;
    else if (slotNum === 18) pathSlot = 20;
    else if (slotNum === 22) pathSlot = 24;
    else if (slotNum === 21) pathSlot = 23;
    else if (slotNum === 17) pathSlot = 19;
    else if (slotNum === 13) pathSlot = 15;
    else if (slotNum === 9) pathSlot = 11;

    if (optionType === 'shortmodule') {
      let path = shortmodule12;
      if (pathSlot === 12) path = shortmodule10;
      else if (pathSlot === 11) path = shortmodule12;
      else if (pathSlot === 15) path = shortmodule14;
      else if (pathSlot === 16) path = shortmodule16;
      else if (pathSlot === 19) path = shortmodule18;
      else if (pathSlot === 20) path = shortmodule20;
      else if (pathSlot === 23) path = shortmodule22;
      else if (pathSlot === 24) path = shortmodule24;

      return renderModule(slotNum, path, {}, `shortmodule-${slotNum}`);
    } 
    else if (optionType === 'twinnedshortmodule') {
      let pathA = twinnedshortmodule12a;
      let pathB = twinnedshortmodule12b;

      if (pathSlot === 12) { pathA = twinnedshortmodule10a; pathB = twinnedshortmodule10b; }
      else if (pathSlot === 15) { pathA = twinnedshortmodule14a; pathB = twinnedshortmodule14b; }
      else if (pathSlot === 16) { pathA = twinnedshortmodule16a; pathB = twinnedshortmodule16b; }
      else if (pathSlot === 19) { pathA = twinnedshortmodule18a; pathB = twinnedshortmodule18b; }
      else if (pathSlot === 20) { pathA = twinnedshortmodule20a; pathB = twinnedshortmodule20b; }
      else if (pathSlot === 23) { pathA = twinnedshortmodule22a; pathB = twinnedshortmodule22b; }
      else if (pathSlot === 24) { pathA = twinnedshortmodule24a; pathB = twinnedshortmodule24b; }

      return (
        <React.Fragment key={`twinnedshortmodule-group-${slotNum}`}>
          {renderModule(slotNum, pathA, {}, `twinnedshortmodule-${slotNum}-A`)}
          {renderModule(slotNum, pathB, {}, `twinnedshortmodule-${slotNum}-B`)}
        </React.Fragment>
      );
    } 
    else {
      let path = longmodule12;
      if (pathSlot === 12) path = longmodule10;
      else if (pathSlot === 11) path = longmodule12;
      else if (pathSlot === 15) path = longmodule14;
      else if (pathSlot === 16) path = longmodule16;
      else if (pathSlot === 19) path = longmodule18;
      else if (pathSlot === 20) path = longmodule20;
      else if (pathSlot === 23) path = longmodule22;
      else if (pathSlot === 24) path = longmodule24;

      return renderModule(slotNum, path, {}, `longmodule-${slotNum}`);
    }
  };

  return (
    <svg 
      id="Layer_2" 
      data-name="Layer 2" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1025.11 164.67"
      style={{ width: '100%', maxWidth: '900px', height: '200px', display: 'block', margin: '0 auto' }}
    >
      <defs>
      <style>{`
          .cls-1 { fill: none; stroke-miterlimit: 10; stroke-width: 3px; }
          .cls-label { font-family: FuturaPT-Heavy, 'Futura PT'; font-size: 12px; font-weight: 800; fill: #282828; letter-spacing: 0.1em; }
          .cls-num { font-family: FuturaPT-Bold, 'Futura PT'; font-size: 14px; font-weight: 700; fill: #282828; cursor: pointer; }
          .interactive-module { transition: filter 0.2s, stroke 0.2s; cursor: pointer; }
          .interactive-module:hover { filter: brightness(1.2); }
        `}</style>

        {Object.entries(slotData).map(([key, val]) => {
          if (val && val.mode === 'dual' && val.secondary) {
            return (
              <linearGradient key={key} id={`grad-74-${key}`} x1="0%" y1="0%" x2="100%" y2="0%">
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
      <path d="M428.77,163.17H82.33C37.69,163.17,1.5,126.98,1.5,82.34h0C1.5,37.69,37.69,1.5,82.33,1.5h346.44"/>
      <path d="M596.34,1.5h346.44c44.64,0,80.83,36.19,80.83,80.83h0c0,44.64-36.19,80.84-80.83,80.84h-346.44"/>
      <line x1="596.09" y1=".5" x2="596.09" y2="162.17"/>
      <line x1="428.77" y1=".5" x2="428.77" y2="162.17"/>
      <line x1="261.42" y1=".5" x2="261.42" y2="162.17"/>
      <line x1="177.18" y1=".5" x2="177.18" y2="162.17"/>
      <line x1="763.69" y1="162.17" x2="763.69" y2=".5"/>
      <line x1="847.93" y1="163.17" x2="847.93" y2="1.5"/>
      <line x1="428.77" y1="163.17" x2="596.09" y2="163.17"/>
      <line x1="428.77" y1="1.5" x2="596.09" y2="1.5"/>
      </g>

      {/* --- CORNERS (1 - 4) --- */}
      {renderModule(1, cornerBottomLeft, {}, 'corner-1')} 
      {renderModule(2, cornerTopLeft, {}, 'corner-2')} 
      {renderModule(3, cornerBottomRight, {}, 'corner-3')} 
      {renderModule(4, cornerTopRight, {}, 'corner-4')} 

            {/* --- TOP ROW MODULES --- */}
        {renderModule(7, shortmodule6, {}, 'top-6')}
        {renderModule(8, shortmodule8, {}, 'top-8')}
        {renderCentralModule(11)}
        {renderCentralModule(15)}
        {renderCentralModule(19)}
        {renderCentralModule(23)}
        {renderCentralModule(24)}
        {renderCentralModule(20)}
        {renderCentralModule(16)}
        {renderCentralModule(12)}

        {/* --- BOTTOM ROW MODULES --- */}
          {renderModule(5, shortmodule5, {}, 'bot-5')}
          {renderModule(6, shortmodule7, {}, 'bot-7')}
          <g transform="translate(0, 164.67) scale(1, -1)">
          {renderCentralModule(9)}
          {renderCentralModule(13)}
          {renderCentralModule(22)}
          {renderCentralModule(18)}
          {renderCentralModule(17)}
          {renderCentralModule(14)}
          {renderCentralModule(10)}
          {renderCentralModule(21)}
          </g>


     {/* --- NUMBERS --- */}
     <text className="cls-num" onClick={() => onSelectSlot(1)} transform="translate(73.5 126)"><tspan x="0" y="0">1</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(2)} transform="translate(940 126)"><tspan x="0" y="0">2</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(3)} transform="translate(73.5 48)"><tspan x="0" y="0">3</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(4)} transform="translate(940 48)"><tspan x="0" y="0">4</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(5)} transform="translate(145 126)"><tspan x="0" y="0">5</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(6)} transform="translate(872 126)"><tspan x="0" y="0">6</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(7)} transform="translate(145 48)"><tspan x="0" y="0">7</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(8)} transform="translate(872 48)"><tspan x="0" y="0">8</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(9)} transform="translate(215 126)"><tspan x="0" y="0">9</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(10)} transform="translate(798 126)"><tspan x="0" y="0">10</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(11)} transform="translate(212.5 48)"><tspan x="0" y="0">11</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(12)} transform="translate(798 48)"><tspan x="0" y="0">12</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(13)} transform="translate(297 126)"><tspan x="0" y="0">13</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(14)} transform="translate(712 126)"><tspan x="0" y="0">14</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(15)} transform="translate(297 48)"><tspan x="0" y="0">15</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(16)} transform="translate(712 48)"><tspan x="0" y="0">16</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(9)} transform="translate(377 126)"><tspan x="0" y="0">17</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(10)} transform="translate(632 126)"><tspan x="0" y="0">18</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(11)} transform="translate(377 48)"><tspan x="0" y="0">19</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(12)} transform="translate(632 48)"><tspan x="0" y="0">20</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(13)} transform="translate(465 126)"><tspan x="0" y="0">21</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(14)} transform="translate(544 126)"><tspan x="0" y="0">22</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(15)} transform="translate(465 48)"><tspan x="0" y="0">23</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(16)} transform="translate(544 48)"><tspan x="0" y="0">24</tspan></text>
      </g>

      {/* --- OUTSIDE TEXT LABELS --- */}
      <text className="cls-label" x="50%" y="9" textAnchor="middle"><tspan x="515" y="0">REAR</tspan></text>
      <text className="cls-label" x="50%" y="192" textAnchor="middle"><tspan x="515" y="205">FRONT</tspan></text>
    </svg>
  );
}
