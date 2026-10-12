import React from 'react';

export default function XL7544({ 
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
      return `url(#grad-44-${slotNum})`;
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
      <path 
          stroke={topcoverColor || "#231f20"} 
          fill="none" 
          strokeWidth="1.5" 
          pointerEvents="none" 
          d={pathD} 
        />
    );
  };

  const cornerPath = "M79.96,11.59l5.45,10.3h-1.51v2.66h-2.92l-2.64-6.05-1.47-.7.78-11.77-3.55-.17-33,15.83-2.4,2.69,9.65,6.74-1.86-.89,1.1,2.4-3.25,1.55-1.7-3.51-2.4-.91-.66,1.88-7.42-9.21-2.43,2.76-12.4,35.11.15,3.67,11.44-2.18-.68,1.92,5.81,2.16,9.03-.2c1.63-.04,3.2-.59,4.48-1.58l3.72-2.87c1.39-1.07,3.1-1.66,4.85-1.67l65.94-.37V23.5h-3.08v-1.61h-2.22l6.15-10.32-3.28-1.38h-36.41s-3.28,1.39-3.28,1.39Z";
  
  const optOuterTop = "M217.44,13.07v10.65h-4.56v14.46c-2.4.74-4.15,2.97-4.15,5.61s1.75,4.88,4.15,5.61v10.53h-25.38v-10.59c2.32-.78,4-2.97,4-5.56s-1.68-4.78-4-5.56v-14.44h-4.45v-11l-.7-2.47h36.09l-1,2.74Z";
  const optMidTop = "M162.44,13.07v10.65h-4.56v14.46c-2.4.74-4.15,2.97-4.15,5.61s1.75,4.88,4.15,5.61v10.53h-25.38v-10.59c2.32-.78,4-2.97,4-5.56s-1.68-4.78-4-5.56v-14.44h-4.45v-11l-.7-2.47h36.09l-1,2.74Z";
  
  const optRightOuterTop = "M448.46,13.07v10.65h-4.56v14.46c-2.4.74-4.15,2.97-4.15,5.61s1.75,4.88,4.15,5.61v10.53h-25.38v-10.59c2.32-.78,4-2.97,4-5.56s-1.68-4.78-4-5.56v-14.44h-4.45v-11l-.7-2.47h36.09l-1,2.74Z";
  const optRightMidTop = "M501.89,13.07v10.65h-4.56v14.46c-2.4.74-4.15,2.97-4.15,5.61s1.75,4.88,4.15,5.61v10.53h-25.38v-10.59c2.32-.78,4-2.97,4-5.56s-1.68-4.78-4-5.56v-14.44h-4.45v-11l-.7-2.47h36.09l-1,2.74Z";

  // Cleaned up central paths - only Top versions are needed
  const standard13 = "M241.19,13.07v10.65h4.56v14.46c2.4,.74,4.15,2.97,4.15,5.61s-1.75,4.88,-4.15,5.61v10.53h58.95v-10.59c-2.32,-.78,-4,-2.97,-4,-5.56s1.68,-4.78,4,-5.56v-14.44h4.45v-11l.7,-2.47h-69.66l1,2.74Z";
  const standard14 = "M320.85,13.07v10.65h4.56v14.46c2.4,.74,4.15,2.97,4.15,5.61s-1.75,4.88,-4.15,5.61v10.53h58.95v-10.59c-2.32,-.78,-4,-2.97,-4,-5.56s1.68,-4.78,4,-5.56v-14.44h4.45v-11l.7,-2.47h-69.66l1,2.74Z";

  const thinSingle13 = "M292.55,13.07v10.65h-4.56v14.46c-2.4.74-4.15,2.97-4.15,5.61s1.75,4.88,4.15,5.61v10.53h-25.38v-10.59c2.32-.78,4-2.97,4-5.56s-1.68-4.78-4-5.56v-14.44h-4.45v-11l-.7-2.47h36.09l-1,2.74Z";
  const thinSingle14 = "M371.92,13.07v10.65h-4.56v14.46c-2.4.74-4.15,2.97-4.15,5.61s1.75,4.88,4.15,5.61v10.53h-25.38v-10.59c-2.32-.78,4-2.97,4-5.56s-1.68-4.78-4-5.56v-14.44h-4.45v-11l-.7-2.47h36.09l-1,2.74Z";

  const groupedThin13A = "M273.89,13.07v10.65h-4.56v14.46c-2.4.74-4.15,2.97-4.15,5.61s1.75,4.88,4.15,5.61v10.53h-25.38v-10.59c2.32-.78,4-2.97,4-5.56s-1.68-4.78-4-5.56v-14.44h-4.45v-11l-.7-2.47h36.09l-1,2.74Z";
  const groupedThin13B = "M311.22,13.07v10.65h-4.56v14.46c-2.4.74-4.15,2.97-4.15,5.61s1.75,4.88,4.15,5.61v10.53h-25.38v-10.59c2.32-.78,4-2.97,4-5.56s-1.68-4.78-4-5.56v-14.44h-4.45v-11l-.7-2.47h36.09l-1,2.74Z";
  
  const groupedThin14A = "M353.26,13.07v10.65h-4.56v14.46c-2.4.74-4.15,2.97-4.15,5.61s1.75,4.88,4.15,5.61v10.53h-25.38v-10.59c-2.32-.78,4-2.97,4-5.56s-1.68-4.78-4-5.56v-14.44h-4.45v-11l-.7-2.47h36.09l-1,2.74Z";
  const groupedThin14B = "M390.59,13.07v10.65h-4.56v14.46c-2.4.74-4.15,2.97-4.15,5.61s1.75,4.88,4.15,5.61v10.53h-25.38v-10.59c-2.32-.78,4-2.97,4-5.56s-1.68-4.78-4-5.56v-14.44h-4.45v-11l-.7-2.47h36.09l-1,2.74Z";

  const renderCentralModule = (slotNum) => {
    const slot = slotData[slotNum];
    if (!slot || slot.active === false) return null;
    const optionType = slot.optionType || 'standard';

    // Maps 16 to 13's geometry, and 15 to 14's geometry.
    const pathSlot = (slotNum === 16) ? 13 : (slotNum === 15) ? 14 : slotNum;

    if (optionType === 'linear') {
      const path = pathSlot === 13 ? thinSingle13 : thinSingle14;
      return renderModule(slotNum, path, {}, `linear-${slotNum}`);
    } else if (optionType === 'alley') {
      if (pathSlot === 13) {
        return (
          <React.Fragment key={`alley-group-${slotNum}`}>
            {renderModule(slotNum, groupedThin13A, {}, `alley-${slotNum}-A`)}
            {renderModule(slotNum, groupedThin13B, {}, `alley-${slotNum}-B`)}
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment key={`alley-group-${slotNum}`}>
            {renderModule(slotNum, groupedThin14A, {}, `alley-${slotNum}-A`)}
            {renderModule(slotNum, groupedThin14B, {}, `alley-${slotNum}-B`)}
          </React.Fragment>
        );
      }
    } else {
      const path = pathSlot === 13 ? standard13 : standard14;
      return renderModule(slotNum, path, {}, `standard-${slotNum}`);
    }
  };

  return (
    <svg 
      id="Layer_2" 
      data-name="Layer 2" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 630.4 196.67"
      style={{ width: '100%', maxWidth: '600px', height: '230px', display: 'block', margin: '0 auto' }}
    >
      <defs>
        <style>{`
          .cls-1 { fill: none; stroke-miterlimit: 10; stroke-width: 3px; }
          .cls-label { font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 800; fill: #969696; letter-spacing: 0.1em; }
          .cls-num { font-family: FuturaPT-Bold, 'Futura PT'; font-size: 14px; font-weight: 700; fill: #282828; cursor: pointer; }
          .interactive-module { transition: filter 0.2s, stroke 0.2s; cursor: pointer; }
          .interactive-module:hover { filter: brightness(1.2); }
        `}</style>

        {Object.entries(slotData).map(([key, val]) => {
          if (val && val.mode === 'dual' && val.secondary) {
            return (
              <linearGradient key={key} id={`grad-44-${key}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="50%" stopColor={val.primary} />
                <stop offset="50%" stopColor={val.secondary} />
              </linearGradient>
            );
          }
          return null;
        })}
      </defs>

      <g transform="translate(0, 16)">
        {/* Chassis Outlines */}
        <path className="cls-1" stroke={lensColor} d="M276.34,1.5h271.72c44.64,0,80.83,36.19,80.83,80.83h0c0,44.64-36.19,80.84-80.83,80.84h-271.72"/>
        <path className="cls-1" stroke={lensColor} d="M335.31,163.17H82.33C37.69,163.17,1.5,126.98,1.5,82.34h0C1.5,37.69,37.69,1.5,82.33,1.5h252.98"/>

        {/* --- CORNERS (1 - 4) --- */}
        {renderModule(1, cornerPath, {}, 'corner-1')}
        <g transform="translate(0, 164.67) scale(1, -1)">
          {renderModule(2, cornerPath, {}, 'corner-2')}
        </g>
        <g transform="translate(630.4, 0) scale(-1, 1)">
          <g transform="translate(0, 164.67) scale(1, -1)">
            {renderModule(3, cornerPath, {}, 'corner-3')}
          </g>
          {renderModule(4, cornerPath, {}, 'corner-4')}
        </g>

        {/* --- CHASSIS DIVIDERS --- */}
        <line className="cls-1" stroke={lensColor} x1="167.99" y1="163.17" x2="167.99" y2="1.5"/>
        <line className="cls-1" stroke={lensColor} x1="462.41" y1="1.5" x2="462.41" y2="163.17"/>
        <line className="cls-1" stroke={lensColor} x1="231.54" y1="163.17" x2="231.54" y2="1.5"/>
        <line className="cls-1" stroke={lensColor} x1="398.63" y1="1.5" x2="398.63" y2="163.17"/>

        {/* --- TOP ROW MODULES --- */}
        {renderModule(5, optOuterTop, {}, 'top-5')}
        {renderModule(6, optRightOuterTop, {}, 'top-6')}
        {renderModule(9, optMidTop, {}, 'top-9')}
        {renderModule(11, optRightMidTop, {}, 'top-11')}
        {renderCentralModule(13)}
        {renderCentralModule(14)}

        {/* --- BOTTOM ROW MODULES (Mirrored cleanly via scale(1, -1)) --- */}
        <g transform="translate(0, 164.67) scale(1, -1)">
          {renderModule(8, optOuterTop, {}, 'bot-8')}
          {renderModule(7, optRightOuterTop, {}, 'bot-7')}
          {renderModule(10, optMidTop, {}, 'bot-10')}
          {renderModule(12, optRightMidTop, {}, 'bot-12')}
          {/* Central bottom modules (15/16) use top paths and flip gracefully here */}
          {renderCentralModule(16)}
          {renderCentralModule(15)}
        </g>

        {/* --- NUMBERS --- */}
        <text className="cls-num" onClick={() => onSelectSlot(1)} transform="translate(73.5 126)"><tspan x="0" y="0">1</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(2)} transform="translate(73.5 48)"><tspan x="0" y="0">2</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(3)} transform="translate(551 126)"><tspan x="0" y="0">3</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(4)} transform="translate(551 48)"><tspan x="0" y="0">4</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(5)} transform="translate(192 48)"><tspan x="0" y="0">5</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(6)} transform="translate(427 48)"><tspan x="0" y="0">6</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(7)} transform="translate(427 126)"><tspan x="0" y="0">7</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(8)} transform="translate(192 126)"><tspan x="0" y="0">8</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(9)} transform="translate(141 48)"><tspan x="0" y="0">9</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(10)} transform="translate(141 126)"><tspan x="0" y="0">10</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(11)} transform="translate(478 48)"><tspan x="0" y="0">11</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(12)} transform="translate(478 126)"><tspan x="0" y="0">12</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(13)} transform="translate(268 48)"><tspan x="0" y="0">13</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(14)} transform="translate(348 48)"><tspan x="0" y="0">14</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(15)} transform="translate(348 126)"><tspan x="0" y="0">15</tspan></text>
        <text className="cls-num" onClick={() => onSelectSlot(16)} transform="translate(268 126)"><tspan x="0" y="0">16</tspan></text>
      </g>

      {/* --- OUTSIDE TEXT LABELS --- */}
      <text className="cls-label" x="50%" y="9" textAnchor="middle"><tspan x="315" y="6">REAR</tspan></text>
      <text className="cls-label" x="50%" y="192" textAnchor="middle"><tspan x="315" y="198">FRONT</tspan></text>
    </svg>
  );
}
