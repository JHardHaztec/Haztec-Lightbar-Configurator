import React, { useState, useEffect } from 'react';
import './index.css';
import Minibar25 from './assets/Minibar25';
import XL7528 from './assets/XL7528';
import XL7544 from './assets/XL7544';
import XL7574 from './assets/XL7574';
import XL7568 from './assets/XL7568';
import XL7561 from './assets/XL7561';

export default function App() {
  const [currentStage, setCurrentStage] = useState<'model' | 'exterior' | 'modules' | 'form' | 'success'>('model');

  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedLength, setSelectedLength] = useState<string | null>(null);
  const [selectedLens, setSelectedLens] = useState<string | null>('clear');
  const [selectedTopCover, setSelectedTopCover] = useState<string | null>('black');
  
  // Customer Form State
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: ''
  });

  // Currently active slot being configured in the control panel
  const [selectedSlotNumber, setSelectedSlotNumber] = useState<number>(1);
  
  // Master slot configuration state for sections 1 through 24
  const [slotData, setSlotData] = useState<Record<number, {
    active: boolean;
    mode: 'single' | 'dual';
    primary: string;
    secondary: string;
    optionType?: string;
  }>>({
    1: { active: true, mode: 'single', primary: '#808285', secondary: '#3b82f6' },
    2: { active: true, mode: 'single', primary: '#808285', secondary: '#3b82f6' },
    3: { active: true, mode: 'single', primary: '#808285', secondary: '#3b82f6' },
    4: { active: true, mode: 'single', primary: '#808285', secondary: '#3b82f6' },
    5: { active: false, mode: 'single', primary: '#808285', secondary: '#3b82f6' },
    6: { active: false, mode: 'single', primary: '#808285', secondary: '#3b82f6' },
    7: { active: false, mode: 'single', primary: '#808285', secondary: '#3b82f6' },
    8: { active: false, mode: 'single', primary: '#808285', secondary: '#3b82f6' },
    9: { active: false, mode: 'single', primary: '#808285', secondary: '#3b82f6', optionType: 'standard' },
    10: { active: false, mode: 'single', primary: '#808285', secondary: '#3b82f6', optionType: 'standard' },
    11: { active: false, mode: 'single', primary: '#808285', secondary: '#3b82f6', optionType: 'standard' },
    12: { active: false, mode: 'single', primary: '#808285', secondary: '#3b82f6', optionType: 'standard' },
    13: { active: false, mode: 'single', primary: '#808285', secondary: '#3b82f6', optionType: 'standard' },
    14: { active: false, mode: 'single', primary: '#808285', secondary: '#3b82f6', optionType: 'standard' },
    15: { active: false, mode: 'single', primary: '#808285', secondary: '#3b82f6', optionType: 'standard' },
    16: { active: false, mode: 'single', primary: '#808285', secondary: '#3b82f6', optionType: 'standard' },
    17: { active: false, mode: 'single', primary: '#808285', secondary: '#3b82f6', optionType: 'standard' },
    18: { active: false, mode: 'single', primary: '#808285', secondary: '#3b82f6', optionType: 'standard' },
    19: { active: false, mode: 'single', primary: '#808285', secondary: '#3b82f6', optionType: 'standard' },
    20: { active: false, mode: 'single', primary: '#808285', secondary: '#3b82f6', optionType: 'standard' },
    21: { active: false, mode: 'single', primary: '#808285', secondary: '#3b82f6', optionType: 'standard' },
    22: { active: false, mode: 'single', primary: '#808285', secondary: '#3b82f6', optionType: 'standard' },
    23: { active: false, mode: 'single', primary: '#808285', secondary: '#3b82f6', optionType: 'standard' },
    24: { active: false, mode: 'single', primary: '#808285', secondary: '#3b82f6', optionType: 'standard' },
  });

  useEffect(() => {
    if (selectedLength === '25' && selectedSlotNumber > 4) {
      setSelectedSlotNumber(1);
    } else if (selectedLength === 'XL7528' && selectedSlotNumber > 6) {
      setSelectedSlotNumber(1);
    } else if (selectedLength === 'XL7544' && selectedSlotNumber > 16) {
      setSelectedSlotNumber(1);
    }
  }, [selectedLength, selectedSlotNumber]);

  const lightbarModels = [
    { id: 'xl75', name: 'XL75', description: 'Ultra-Low-Profile Lightbar', available: true },
    { id: 'xpertsl', name: 'Xpert SL', description: 'Low-Profile Lightbar', available: true },
    { id: 'xpertslx', name: 'Xpert SLX', description: 'Low-Profile Lightbar', available: true },
    { id: 'xpert', name: 'Xpert', description: 'High-Profile Lightbar', available: true },
    { id: 'xpertdx', name: 'Xpert DX', description: 'High-Profile Lightbar', available: true },
    { id: 'xpress', name: 'Xpress', description: 'High-Profile Lightbar', available: true },
    { id: 'xpertsle', name: 'Xpert SLE', description: 'Low Profile Minibar', available: true }
  ];

  const xl75LengthOptions = [
    { id: '25', name: 'XL75 Lightbar', dims: '25" (628mm)', chassisClass: 'chassis-25' },
    { id: 'XL7528', name: 'XL75 Lightbar', dims: '28" (716mm)', chassisClass: 'chassis-28' },
    { id: 'XL7531', name: 'XL75 Lightbar', dims: '31" (790mm)', chassisClass: 'chassis-31' },
    { id: 'XL7537', name: 'XL75 Lightbar', dims: '37" (935mm)', chassisClass: 'chassis-37' },
    { id: 'XL7544', name: 'XL75 Lightbar', dims: '44" (1111mm)', chassisClass: 'chassis-44' },
    { id: 'XL7549', name: 'XL75 Lightbar', dims: '49" (1242mm)', chassisClass: 'chassis-49' },
    { id: 'XL7550', name: 'XL75 Lightbar', dims: '50" (1259mm)', chassisClass: 'chassis-50' },
    { id: 'XL7555', name: 'XL75 Lightbar', dims: '55" (1404mm)', chassisClass: 'chassis-55' },
    { id: 'XL7556', name: 'XL75 Lightbar', dims: '56" (1435mm)', chassisClass: 'chassis-28' },
    { id: 'XL7561', name: 'XL75 Lightbar', dims: '61" (1549mm)', chassisClass: 'chassis-61' },
    { id: 'XL7568', name: 'XL75 Lightbar', dims: '68" (1725mm)', chassisClass: 'chassis-68' },
    { id: 'XL7574', name: 'XL75 Lightbar', dims: '74" (1862mm)', chassisClass: 'chassis-74' },
  ];

  const slLengthOptions = [
    { id: 'SL17', name: 'Xpert SL Lightbar', dims: '17" / 429mm', chassisClass: 'chassis-sl17' },
  ];

  const slxLengthOptions = [
    { id: 'SLX17', name: 'Xpert SLX Lightbar', dims: '15" / 373mm', chassisClass: 'chassis-slx17' },
    { id: 'SLX20', name: 'Xpert SLX Lightbar', dims: '20" / 516mm', chassisClass: 'chassis-slx20' },
    { id: 'SLX26', name: 'Xpert SLX Lightbar', dims: '26" / 657mm', chassisClass: 'chassis-slx26' },
    { id: 'SLX31', name: 'Xpert SLX Lightbar', dims: '31" / 798mm', chassisClass: 'chassis-slx31' },
  ];

  const xpertLengthOptions = [
    { id: 'xpert17', name: 'Xpert Lightbar', dims: '17" / 429mm', chassisClass: 'chassis-xpert17' },
  ];

  const dxLengthOptions = [
    { id: 'dx36', name: 'Xpert DX Lightbar', dims: '36" / 909mm', chassisClass: 'chassis-dx36' },
  ];

  const xpressLengthOptions = [
    { id: 'xpress17', name: 'Xpress Lightbar', dims: '17" / 436mm', chassisClass: 'chassis-xpress17' },
  ];

  const sleLengthOptions = [
    { id: 'sle19', name: 'Xpert SLE Lightbar', dims: '19" / 492mm', chassisClass: 'chassis-sle19' },
  ];

  const lengthOptionsMap: Record<string, typeof xl75LengthOptions> = {
    'xl75': xl75LengthOptions,
    'xpertsl': slLengthOptions,
    'xpertslx': slxLengthOptions,
    'xpert': xpertLengthOptions,
    'xpertdx': dxLengthOptions,
    'xpress': xpressLengthOptions,
    'xpertsle': sleLengthOptions,
  };

  const currentLengthOptions = lengthOptionsMap[selectedModel || 'xl75'] || xl75LengthOptions;

  const lensOptions = [
    { id: 'clear', name: 'Clear', hex: '#dbd9d9' },
    { id: 'amber', name: 'Amber', hex: '#fac943' },
    { id: 'blue', name: 'Blue', hex: '#3b82f6' },
    { id: 'red', name: 'Red', hex: '#ef4444' },
  ];

  const topcoverOptions = [
    { id: 'black', name: 'Black', hex: '#1e293b' },
    { id: 'blue', name: 'Blue', hex: '#063f9c' },
    { id: 'red', name: 'Red', hex: '#ef4444' },
  ];

  const ledOptions = [
    { id: 'amber', name: 'Amber', hex: '#fac943' },
    { id: 'blue', name: 'Blue', hex: '#3b82f6' },
    { id: 'red', name: 'Red', hex: '#ef4444' },
    { id: 'green', name: 'Green', hex: '#10b981' },
    { id: 'white', name: 'White', hex: '#ffffff' },
  ];

  const getColorLetter = (hex: string): string => {
    switch (hex) {
      case '#fac943': return 'A';
      case '#3b82f6': return 'B';
      case '#10b981': return 'G';
      case '#ef4444': return 'R';
      case '#ffffff': return 'W';
      default: return 'A';
    }
  };

  const DUAL_ORDER_CODES: Record<string, string> = {
    'AB': '98-10902-AB', 'BA': '98-10902-AB',
    'AG': '98-10902-AG', 'GA': '98-10902-AG',
    'AR': '98-10902-AR', 'RA': '98-10902-AR',
    'AW': '98-10902-AW', 'WA': '98-10902-AW',
    'BG': '98-10902-BG', 'GB': '98-10902-BG',
    'BR': '98-10902-BR', 'RB': '98-10902-BR',
    'BW': '98-10902-BW', 'WB': '98-10902-BW',
    'GW': '98-10902-GW', 'WG': '98-10902-GW',
    'RG': '98-10902-RG', 'GR': '98-10902-RG',
    'RW': '98-10902-RW', 'WR': '98-10902-RW',
  };

  const getCornerOrderCode = (slot: { active: boolean; mode: string; primary: string; secondary: string }): string => {
    if (!slot || slot.active === false) return 'N/A (Empty)';
    const c1 = getColorLetter(slot.primary);
    if (slot.mode === 'single') {
      return `98-10901-${c1}`;
    } else {
      const c2 = getColorLetter(slot.secondary);
      const combo = `${c1}${c2}`;
      return DUAL_ORDER_CODES[combo] || `98-10902-${combo}`;
    }
  };

  const isFormValid = formData.name.trim() !== '' && formData.email.trim() !== '';

  const getMaxSlots = (length: string | null): number => {
    switch (length) {
      case '25': return 4;
      case 'XL7528': return 6;
      case 'XL7544': return 16;
      case 'XL7561': return 20;
      case 'XL7568':
      case 'XL7574': return 24;
      default: return 24; // Default fallback for other lengths
    }
  };

  const getAllowedSecondaryColors = (primaryHex: string): string[] => {
    const c1 = getColorLetter(primaryHex);
    switch (c1) {
      case 'A': return ['#3b82f6', '#10b981', '#ef4444', '#ffffff'];
      case 'B': return ['#10b981', '#ef4444', '#ffffff'];
      case 'R': return ['#10b981', '#ffffff'];
      case 'G': return ['#ffffff'];
      case 'W': default: return [];
    }
  };

  const getLensColorHex = () => {
    const found = lensOptions.find(l => l.id === selectedLens);
    return found ? found.hex : '#e2e8f0';
  };

  const getTopCoverColorHex = () => {
    const found = topcoverOptions.find(c => c.id === selectedTopCover);
    return found ? found.hex : '#1e293b';
  };

const handleSelectModel = (modelId: string) => {
  setSelectedModel(modelId);
  setCurrentStage('exterior'); // Automatically advances to length selection
};

const handleSelectLength = (lengthId: string) => {
  setSelectedLength(lengthId);
  setCurrentStage('modules'); // Automatically advances to Lens/Top Cover options (or modules)
};

  const handleResetAllModules = () => {
    setSlotData(prev => {
      const resetState = { ...prev };
      Object.keys(resetState).forEach((k) => {
        const num = Number(k);
        const isCorner = num >= 1 && num <= 4;
        resetState[num] = {
          active: isCorner,
          mode: 'single',
          primary: '#808285',
          secondary: '#3b82f6',
          optionType: 'standard'
        };
      });
      return resetState;
    });
  };

  const currentSlotState = slotData[selectedSlotNumber] || { active: true, mode: 'single', primary: '#808285', secondary: '#3b82f6' };

  const updateCurrentSlot = (updates: Partial<typeof currentSlotState>) => {
    setSlotData(prev => ({
      ...prev,
      [selectedSlotNumber]: {
        ...prev[selectedSlotNumber],
        ...updates
      }
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [showNextStepsModal, setShowNextStepsModal] = useState(false);

  const handleTriggerPrint = () => {
  setShowNextStepsModal(false);

  // 1. Store original inner and parent document titles
  const originalTitle = document.title;
  let originalParentTitle = '';
  try {
    originalParentTitle = window.parent.document.title;
  } catch (e) {
    // Cross-origin fallback
  }

  // 2. Extract Model Name
  const rawModelName = lightbarModels.find(m => m.id === selectedModel)?.name || 'Lightbar';

  // 3. Extract Length Option (Checking name, dims, or fallback string)
  const lengthObj = currentLengthOptions.find(l => l.id === selectedLength);
  // Prefers length dimensions (e.g. "1100mm"), then length name, then raw length ID
  const rawLengthName = lengthObj?.dims || lengthObj?.name || selectedLength || 'Length';

  // 4. Extract Company or Customer Name
  const rawCompany = formData.company || formData.name || 'Customer';

  // 5. Format today's date (YYYY-MM-DD)
  const dateStr = new Date().toISOString().split('T')[0];

  // 6. Clean strings (replace spaces/special characters with clean separators)
  const lightbarName = rawModelName.replace(/[^a-zA-Z0-9]/g, '_');
  const lengthName = rawLengthName.replace(/[^a-zA-Z0-9]/g, '');
  const companyName = rawCompany.replace(/[^a-zA-Z0-9]/g, '_');

  // 7. Build filename: Haztec_{lightbarname}-{length}_{companyname}_date
  const customPdfName = `Haztec_${lightbarName}-${lengthName}_${companyName}_${dateStr}`;

  // 8. Apply title updates for both iframe and root document contexts
  document.title = customPdfName;
  try {
    if (window.parent && window.parent.document) {
      window.parent.document.title = customPdfName;
    }
  } catch (e) {
    // Ignore cross-origin error
  }

  // 9. Trigger browser print
  window.print();

  // 10. Restore original document titles
  document.title = originalTitle;
  try {
    if (window.parent && window.parent.document && originalParentTitle) {
      window.parent.document.title = originalParentTitle;
    }
  } catch (e) {
    // Ignore cross-origin error
  }
};

const handleSendEmail = (type: 'quote' | 'share') => {
  if (!isFormValid) return;

  const recipient = "sales@haztec.uk"; // Official Haztec sales address
  
  // Format clean subject line incorporating customer name/company
  const subjectPrefix = type === 'quote' ? 'Quote Request' : 'Lightbar Configuration';
  const customerInfo = formData.company ? `${formData.name} (${formData.company})` : formData.name;
  const subject = encodeURIComponent(`${subjectPrefix} - ${customerInfo}`);

  // Open native mail client with recipient and subject only
  window.location.href = `mailto:${recipient}?subject=${subject}`;

  setShowNextStepsModal(false);
};

  const areCornersConfigured = [1, 2, 3, 4].every(num => {
    const slot = slotData[num];
    return slot && slot.active && slot.primary !== '#808285';
  });

  return (
    <div className="configurator-wrapper">

      <main className="config-main">
        {/* --- STEP 1: LIGHTBAR MODEL SELECTION --- */}
        {currentStage === 'model' && (
          <section className="step-card animate-fade">
            <div className="config-section-group">
              <h2>1. Select Lightbar Model</h2>
              <p className="subtext">Choose the lightbar series you wish to configure.</p>

              <div className="sub-category-block">
                <div className="length-grid" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
                  {lightbarModels.map((model) => (
                    <div 
                      key={model.id} 
                      className={`length-card ${selectedModel === model.id ? 'selected' : ''}`}
                      onClick={() => handleSelectModel(model.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="lightbar-name">{model.name}</div>
                      <div className="lightbar-subtext">{model.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* --- STEP 2: EXTERIOR LENGTH SELECTION --- */}
        {currentStage === 'exterior' && (
          <section className="step-card animate-fade">
            <div className="config-section-group">
              {/* Top-Right Back Button returning to Model selection */}
              <button className="btn-secondary"
                onClick={() => setCurrentStage('model')} 
                style={{ position: 'absolute', top: '50px', right: '40px' }}
              >
                Back to Lightbars
              </button>
              <h2>2. Length Selection</h2>
              <p className="subtext">Select your lightbar length length.</p>
              
              <div className="sub-category-block">
                <div className="length-grid">
                  {currentLengthOptions.map((opt) => (
                    <div 
                      key={opt.id} 
                      className={`length-card ${selectedLength === opt.id ? 'active' : ''}`}
                      onClick={() => handleSelectLength(opt.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="length-inches">{opt.dims}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* --- STEP 3: SECTION-BY-SECTION CUSTOMIZATION --- */}
        {currentStage === 'modules' && (
          <section className="step-card animate-fade">
            <div className="config-section-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h2>3. Section-by-Section Customization</h2>
                  <p className="subtext">Configure chassis appearance and customize your lightbar sections below.</p>
                </div>
                
                <button 
                  className="btn-secondary animate-fade" 
                  style={{ padding: '6px 14px', fontSize: '0.8rem', background: '#ef4444', color: '#ffffff', borderColor: '#ef444444' }}
                  onClick={handleResetAllModules}
                >
                  ↺ Reset Modules
                </button>
              </div>

              {/* Chassis Swatches */}
              <div style={{ display: 'grid', gridTemplateColumns: selectedModel === 'xl75' ? '1fr 1fr' : '1fr', gap: '16px', marginTop: '16px' }}>
                {selectedModel === 'xl75' && (
                  <div className="sub-category-block">
                    <label className="sub-label">Top Cover Colour</label>
                    <div className="length-grid" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
                      {topcoverOptions.map((cover) => (
                        <div 
                          key={cover.id} 
                          className={`colour-card ${selectedTopCover === cover.id ? 'selected' : ''}`}
                          onClick={() => setSelectedTopCover(cover.id)}
                          style={{ padding: '8px' }}
                        >
                          <div className="lens-swatch" style={{ background: cover.hex, width: '20px', height: '20px', margin: '0 auto 4px' }}></div>
                          <div className="length-title" style={{ fontSize: '0.75rem' }}>{cover.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="sub-category-block">
                  <label className="sub-label">Outer Lens Colour</label>
                  <div className="length-grid" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}>
                    {lensOptions.map((lens) => (
                      <div 
                        key={lens.id} 
                        className={`colour-card ${selectedLens === lens.id ? 'selected' : ''}`}
                        onClick={() => setSelectedLens(lens.id)}
                        style={{ padding: '8px' }}
                      >
                        <div className="lens-swatch" style={{ background: lens.hex, width: '20px', height: '20px', margin: '0 auto 4px' }}></div>
                        <div className="length-title" style={{ fontSize: '0.75rem' }}>{lens.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Blueprint Schematic Preview */}
              <div className="overhead-preview-container" style={{ marginTop: '16px' }}>
                <div className="overhead-header">
                  <span className="spec-badge">
                    {currentLengthOptions.find(l => l.id === selectedLength)?.name}
                  </span>
                </div>

                <div className="lightbar-schematic-stage">
                  {selectedLength === '25' && (
                    <Minibar25 
                      lensColor={getLensColorHex()} 
                      topcoverColor={getTopCoverColorHex()}
                      slotData={slotData} 
                      selectedSlotKey={selectedSlotNumber}
                      onSelectSlot={(num) => setSelectedSlotNumber(Number(num))} 
                    />
                  )}
                  {selectedLength === 'XL7528' && (
                    <XL7528 
                      lensColor={getLensColorHex()} 
                      topcoverColor={getTopCoverColorHex()}
                      slotData={slotData} 
                      selectedSlotKey={selectedSlotNumber}
                      onSelectSlot={(num) => setSelectedSlotNumber(Number(num))} 
                    />
                  )}
                  {selectedLength === 'XL7544' && (
                    <XL7544 
                      lensColor={getLensColorHex()} 
                      topcoverColor={getTopCoverColorHex()}
                      slotData={slotData} 
                      selectedSlotKey={selectedSlotNumber}
                      onSelectSlot={(num) => setSelectedSlotNumber(Number(num))} 
                    />
                  )}
                  {selectedLength === 'XL7574' && (
                    <XL7574 
                      lensColor={getLensColorHex()} 
                      topcoverColor={getTopCoverColorHex()}
                      slotData={slotData} 
                      selectedSlotKey={selectedSlotNumber}
                      onSelectSlot={(num) => setSelectedSlotNumber(Number(num))} 
                    />
                  )}
                  {selectedLength === 'XL7561' && (
                    <XL7561 
                      lensColor={getLensColorHex()} 
                      topcoverColor={getTopCoverColorHex()}
                      slotData={slotData} 
                      selectedSlotKey={selectedSlotNumber}
                      onSelectSlot={(num) => setSelectedSlotNumber(Number(num))} 
                    />
                  )}
                  {selectedLength === 'XL7568' && (
                    <XL7568 
                      lensColor={getLensColorHex()} 
                      topcoverColor={getTopCoverColorHex()}
                      slotData={slotData} 
                      selectedSlotKey={selectedSlotNumber}
                      onSelectSlot={(num) => setSelectedSlotNumber(Number(num))} 
                    />
                  )}
                  {selectedLength === 'SL48' && (
                    <div style={{ padding: '40px', textAlign: 'center', color: '#64748b', fontStyle: 'italic' }}>
                      Xpert SL (48") Schematic Preview Coming Soon
                    </div>
                  )}
                </div>
              </div>
            </div>
              
            {/* SECTION SELECTOR & CONFIGURATION TOOLBAR */}
            <div className="palette-toolbar animate-fade" style={{ border: '1px solid #f5f5f5', background: '#f5f5f5', display: 'block', marginTop: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '14px', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {/* Section 1: Corners (1-4) */}
                  <div style={{ background: '#f5f5f5', padding: '10px 0px', borderRadius: '6px', border: '1px solid #f5f5f5' }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#282828', marginBottom: '15px' }}>Corner Modules</div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {[1, 2, 3, 4].map(num => (
                        <button
                          key={num}
                          onClick={() => setSelectedSlotNumber(num)}
                          style={{
                            width: '38px', height: '36px', fontSize: '0.85rem', fontWeight: 700,
                            background: selectedSlotNumber === num ? '#166bdb42' : '#ffffff',
                            color: selectedSlotNumber === num ? '#166bdb' : '#282828',
                            border: '1px solid #166bdb' , borderRadius: '6px', cursor: 'pointer'
                          }}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Inner Modules */}
                  {selectedLength === 'XL7528' && (
                    <div style={{ background: '#f5f5f5', padding: '10px 0px', borderRadius: '6px', border: '1px solid #f5f5f5' }}>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#282828', marginBottom: '15px' }}>Inner Modules</div>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {Array.from({length: 2}, (_, i) => i + 5).map(num => (
                          <button
                            key={num}
                            onClick={() => setSelectedSlotNumber(num)}
                            style={{
                              width: '38px', height: '36px', fontSize: '0.85rem', fontWeight: 700,
                              background: selectedSlotNumber === num ? '#166bdb42' : '#ffffff',
                              color: selectedSlotNumber === num ? '#166bdb' : '#282828',
                              border: '1px solid #166bdb' , borderRadius: '6px', cursor: 'pointer'
                            }}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedLength === 'XL7544' && (
                    <div style={{ background: '#f5f5f5', padding: '10px 0px', borderRadius: '6px', border: '1px solid #f5f5f5' }}>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#282828', marginBottom: '15px' }}>Inner Modules</div>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {Array.from({length: 12}, (_, i) => i + 5).map(num => (
                          <button
                            key={num}
                            onClick={() => setSelectedSlotNumber(num)}
                            style={{
                              width: '38px', height: '36px', fontSize: '0.85rem', fontWeight: 700,
                              background: selectedSlotNumber === num ? '#166bdb42' : '#ffffff',
                              color: selectedSlotNumber === num ? '#166bdb' : '#282828',
                              border: '1px solid #166bdb' , borderRadius: '6px', cursor: 'pointer'
                            }}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {(selectedLength === 'XL7574' || selectedLength === 'XL7568') && (
                    <div style={{ background: '#f5f5f5', padding: '10px 0px', borderRadius: '6px', border: '1px solid #f5f5f5' }}>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#282828', marginBottom: '15px' }}>Inner Modules</div>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {Array.from({length: 20}, (_, i) => i + 5).map(num => (
                          <button
                            key={num}
                            onClick={() => setSelectedSlotNumber(num)}
                            style={{
                              width: '38px', height: '36px', fontSize: '0.85rem', fontWeight: 700,
                              background: selectedSlotNumber === num ? '#166bdb42' : '#ffffff',
                              color: selectedSlotNumber === num ? '#166bdb' : '#282828',
                              border: '1px solid #166bdb' , borderRadius: '6px', cursor: 'pointer'
                            }}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedLength === 'XL7561' && (
                    <div style={{ background: '#f5f5f5', padding: '10px 0px', borderRadius: '6px', border: '1px solid #f5f5f5' }}>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#282828', marginBottom: '15px' }}>Inner Modules</div>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {Array.from({length: 16}, (_, i) => i + 5).map(num => (
                          <button
                            key={num}
                            onClick={() => setSelectedSlotNumber(num)}
                            style={{
                              width: '38px', height: '36px', fontSize: '0.85rem', fontWeight: 700,
                              background: selectedSlotNumber === num ? '#166bdb42' : '#ffffff',
                              color: selectedSlotNumber === num ? '#166bdb' : '#282828',
                              border: '1px solid #166bdb' , borderRadius: '6px', cursor: 'pointer'
                            }}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* SHOW / LEAVE EMPTY TOGGLE */}
              {selectedSlotNumber >= 5 && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', background: '#f5f5f5', padding: '8px 12px', borderRadius: '6px' }}>
                  <span style={{ fontSize: '0.8rem', color: '#282828' }}>Inner module:</span>
                  <button 
                    className={`mode-tab ${currentSlotState.active ? 'active-tab' : ''}`}
                    onClick={() => updateCurrentSlot({ active: true })}
                    style={{ padding: '4px 12px', fontSize: '0.75rem' }}
                  >
                    Add Module
                  </button>
                  <button 
                    className={`mode-tab ${!currentSlotState.active ? 'disabled-tab' : ''}`}
                    onClick={() => updateCurrentSlot({ active: false })}
                    style={{ padding: '4px 12px', fontSize: '0.75rem' }}
                  >
                    Leave Section Empty
                  </button>
                </div>
              )}

              {/* MODULE VARIANT SELECTOR (For Central Sections 13-16 on XL7544) */}
              {currentSlotState.active && selectedLength === 'XL7544' && selectedSlotNumber >= 13 && selectedSlotNumber <= 16 && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', background: '#f5f5f5', padding: '8px 12px', borderRadius: '6px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.8rem', color: '#282828' }}>Type of Module:</span>
                  <button 
                    className={`mode-tab ${currentSlotState.optionType === 'standard' || !currentSlotState.optionType ? 'active-module' : ''}`}
                    onClick={() => updateCurrentSlot({ optionType: 'standard' })}
                    style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                  >
                    XT module long
                  </button>
                  <button 
                    className={`mode-tab ${currentSlotState.optionType === 'linear' ? 'active-module' : ''}`}
                    onClick={() => updateCurrentSlot({ optionType: 'linear' })}
                    style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                  >
                    XT module short
                  </button>
                  <button 
                    className={`mode-tab ${currentSlotState.optionType === 'alley' ? 'active-module' : ''}`}
                    onClick={() => updateCurrentSlot({ optionType: 'alley' })}
                    style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                  >
                    2x XT module short
                  </button>
                </div>
              )}

              {/* MODULE VARIANT SELECTOR (For Central Sections 9-24 on XL7574) */}
              {currentSlotState.active && (selectedLength === 'XL7574') && selectedSlotNumber >= 9 && selectedSlotNumber <= 24 && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', background: '#f5f5f5', padding: '8px 12px', borderRadius: '6px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.8rem', color: '#282828' }}>Type of Module:</span>
                  <button 
                    className={`mode-tab ${currentSlotState.optionType === 'longmodule' || !currentSlotState.optionType ? 'active-module' : ''}`}
                    onClick={() => updateCurrentSlot({ optionType: 'longmodule' })}
                    style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                  >
                    XT module long
                  </button>
                  <button 
                    className={`mode-tab ${currentSlotState.optionType === 'shortmodule' ? 'active-module' : ''}`}
                    onClick={() => updateCurrentSlot({ optionType: 'shortmodule' })}
                    style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                  >
                    XT module short
                  </button>
                  <button 
                    className={`mode-tab ${currentSlotState.optionType === 'twinnedshortmodule' ? 'active-module' : ''}`}
                    onClick={() => updateCurrentSlot({ optionType: 'twinnedshortmodule' })}
                    style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                  >
                    2x XT module short
                  </button>
                </div>
              )}

               {/* MODULE VARIANT SELECTOR (For Central Sections 13-24 on XL7568) */}
               {currentSlotState.active && (selectedLength === 'XL7568') && selectedSlotNumber >= 13 && selectedSlotNumber <= 24 && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', background: '#f5f5f5', padding: '8px 12px', borderRadius: '6px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.8rem', color: '#282828' }}>Type of Module:</span>
                  <button 
                    className={`mode-tab ${currentSlotState.optionType === 'longmodule' || !currentSlotState.optionType ? 'active-module' : ''}`}
                    onClick={() => updateCurrentSlot({ optionType: 'longmodule' })}
                    style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                  >
                    XT module long
                  </button>
                  <button 
                    className={`mode-tab ${currentSlotState.optionType === 'shortmodule' ? 'active-module' : ''}`}
                    onClick={() => updateCurrentSlot({ optionType: 'shortmodule' })}
                    style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                  >
                    XT module short
                  </button>
                  <button 
                    className={`mode-tab ${currentSlotState.optionType === 'twinnedshortmodule' ? 'active-module' : ''}`}
                    onClick={() => updateCurrentSlot({ optionType: 'twinnedshortmodule' })}
                    style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                  >
                    2x XT module short
                  </button>
                </div>
              )}

              {/* MODULE VARIANT SELECTOR (For Central Sections 9-20 on XL7561) */}
              {currentSlotState.active && (selectedLength === 'XL7561') && selectedSlotNumber >= 9 && selectedSlotNumber <= 20 && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', background: '#f5f5f5', padding: '8px 12px', borderRadius: '6px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.8rem', color: '#282828' }}>Type of Module:</span>
                  <button 
                    className={`mode-tab ${currentSlotState.optionType === 'longmodule' || !currentSlotState.optionType ? 'active-module' : ''}`}
                    onClick={() => updateCurrentSlot({ optionType: 'longmodule' })}
                    style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                  >
                    XT module long
                  </button>
                  <button 
                    className={`mode-tab ${currentSlotState.optionType === 'shortmodule' ? 'active-module' : ''}`}
                    onClick={() => updateCurrentSlot({ optionType: 'shortmodule' })}
                    style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                  >
                    XT module short
                  </button>
                  <button 
                    className={`mode-tab ${currentSlotState.optionType === 'twinnedshortmodule' ? 'active-module' : ''}`}
                    onClick={() => updateCurrentSlot({ optionType: 'twinnedshortmodule' })}
                    style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                  >
                    2x XT module short
                  </button>
                </div>
              )}

              {/* COLOR CONFIGURATION */}
              {currentSlotState.active ? (
                <>
                  <div className="mode-selector-group" style={{ display: 'inline-flex', marginBottom: '12px' }}>
                    <button 
                      className={`mode-tab ${currentSlotState.mode === 'single' ? 'colour-tab' : ''}`}
                      onClick={() => updateCurrentSlot({ mode: 'single' })}
                    >
                      Single Colour
                    </button>
                    <button 
                      className={`mode-tab ${currentSlotState.mode === 'dual' ? 'colour-tab' : ''}`}
                      onClick={() => updateCurrentSlot({ mode: 'dual' })}
                    >
                      Dual Colour
                    </button>
                  </div>

                  <div className="palette-section" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', width: '100%' }}>
                    <span className="palette-label" style={{ minWidth: '70px' }}>{currentSlotState.mode === 'dual' ? 'Colour 1:' : 'Colour:'}</span>
                    <div className="palette-swatches" style={{ display: 'flex', gap: '6px' }}>
                      {ledOptions.map(l => (
                        <button
                          key={l.id}
                          className={`palette-btn ${currentSlotState.primary === l.hex ? 'active-palette' : ''}`}
                          style={{ background: l.hex }}
                          onClick={() => updateCurrentSlot({ primary: l.hex })}
                          title={l.name}
                        />
                      ))}
                    </div>
                  </div>

                  {currentSlotState.mode === 'dual' && (
                    <div className="palette-section animate-fade" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px' }}>
                      <span className="palette-label" style={{ minWidth: '70px' }}>Colour 2:</span>
                      <div className="palette-swatches" style={{ display: 'flex', gap: '6px' }}>
                        {ledOptions.map(l => {
                          const isAllowed = getAllowedSecondaryColors(currentSlotState.primary).includes(l.hex);
                          return (
                            <button
                              key={l.id}
                              disabled={!isAllowed}
                              className={`palette-btn ${currentSlotState.secondary === l.hex ? 'active-palette' : ''} ${!isAllowed ? 'disabled-swatch' : ''}`}
                              style={{ 
                                background: l.hex, 
                                opacity: isAllowed ? 1 : 0.2, 
                                cursor: isAllowed ? 'pointer' : 'not-allowed' 
                              }}
                              onClick={() => isAllowed && updateCurrentSlot({ secondary: l.hex })}
                              title={isAllowed ? l.name : `${l.name} (Not allowed for selected Colour 1)`}
                            />
                          );
                        })}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div style={{ color: '#64748b', fontSize: '0.85rem', fontStyle: 'italic', padding: '10px 0' }}>
                  This inner module section is currently empty.
                </div>
              )}
            </div>

            <div className="step-footer-action button-group-row" style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button 
                className="btn-secondary" 
                onClick={() => setCurrentStage('exterior')}
              >
                Back to Lengths
              </button>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                {!areCornersConfigured && (
                  <span style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 600 }}>
                    * Please select LED colours for all 4 Corner Modules (1–4) to continue
                  </span>
                )}
                <button 
                  className={`btn-primary btn-large ${!areCornersConfigured ? 'disabled' : ''}`} 
                  onClick={() => areCornersConfigured && setCurrentStage('form')}
                  disabled={!areCornersConfigured}
                  style={{ opacity: areCornersConfigured ? 1 : 0.5, cursor: areCornersConfigured ? 'pointer' : 'not-allowed' }}
                >
                  {areCornersConfigured ? 'Continue to Details' : 'Configure Corners 1–4 to Continue'}
                </button>
              </div>
            </div>
          </section>
        )}

        {/* --- STEP 4: CUSTOMER DETAILS & SUMMARY --- */}
        {currentStage === 'form' && (
          <section className="step-card animate-fade">
            <h2 className="no-print">4. Customer Details & Summary</h2>
            <p className="subtext no-print">Review your configuration and enter your details below.</p>
            
            {/* PRINT-FRIENDLY SPEC SHEET CONTAINER */}
            <div className="print-spec-sheet">
              <div className="print-header" style={{ display: 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #231f20', paddingBottom: '8px', marginBottom: '16px', marginTop: '26px' }}>
              <img src="/Haztec-logo.svg" alt="Haztec Logo" style={{ height: '35px', objectFit: 'contain' }} />
                  <h1 style={{ fontSize: '22px', margin: 0 }}>Lightbar Configuration Summary</h1>
                </div>
              </div>

              <div className="summary-box" style={{ background: '#ffffff', border: '1px solid #ddd', padding: '16px', borderRadius: '6px', marginBottom: '20px', textAlign: 'left' }}>
              
              {/* CONDITIONAL DIVIDER & CUSTOMER DETAILS */}
              {(formData.name || formData.company || formData.email || formData.phone) && (
                  <>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      {formData.name && <div style={{ margin: '4px 0', fontSize: '14px' }}><strong>Name:</strong> {formData.name}</div>}
                      {formData.company && <div style={{ margin: '4px 0', fontSize: '14px' }}><strong>Company:</strong> {formData.company}</div>}
                      {formData.email && <div style={{ margin: '4px 0', fontSize: '14px' }}><strong>Email:</strong> {formData.email}</div>}
                      {formData.phone && <div style={{ margin: '4px 0', fontSize: '14px' }}><strong>Phone:</strong> {formData.phone}</div>}
                    </div>
                    <hr style={{ border: '0', borderTop: '1px solid #cbd5e1', margin: '12px 0' }} />
                  </>
                )}
                
                <div style={{ margin: '6px 0', fontSize: '14px' }}><strong>Model:</strong> {lightbarModels.find(m => m.id === selectedModel)?.name} ({currentLengthOptions.find(l => l.id === selectedLength)?.dims})</div>
                <div style={{ margin: '6px 0', fontSize: '14px' }}>
                  <strong>Outer Lens Colour:</strong> 
                  <span style={{ display: 'inline-block', width: '12px', height: '12px', background: getLensColorHex(), verticalAlign: 'middle', borderRadius: '50%', margin: '0 6px', border: '1px solid #ccc' }}></span> 
                  {lensOptions.find(l => l.id === selectedLens)?.name}
                </div>
                <div style={{ margin: '6px 0', fontSize: '14px' }}>
                  <strong>Top Cover Colour:</strong> 
                  <span style={{ display: 'inline-block', width: '12px', height: '12px', background: getTopCoverColorHex(), verticalAlign: 'middle', borderRadius: '50%', margin: '0 6px', border: '1px solid #ccc' }}></span> 
                  {topcoverOptions.find(c => c.id === selectedTopCover)?.name}
                </div>
              </div>

              {/* Schematic Preview */}
              <div className="overhead-preview-container" style={{ margin: '20px 0', background: '#ffffff', border: '1px solid #ddd', padding: '15px', borderRadius: '6px' }}>
                <div className="overhead-header" style={{ marginBottom: '10px', textAlign: 'center' }}>
                  <span className="spec-badge" style={{ color: '#fff', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {currentLengthOptions.find(l => l.id === selectedLength)?.name} Schematic
                  </span>
                </div>
                <div className="lightbar-schematic-stage" style={{ display: 'flex', justifyContent: 'center' }}>
                  {selectedLength === '25' && <Minibar25 lensColor={getLensColorHex()} topcoverColor={getTopCoverColorHex()} slotData={slotData} selectedSlotKey={0} onSelectSlot={() => {}} />}
                  {selectedLength === 'XL7528' && <XL7528 lensColor={getLensColorHex()} topcoverColor={getTopCoverColorHex()} slotData={slotData} selectedSlotKey={0} onSelectSlot={() => {}} />}
                  {selectedLength === 'XL7544' && <XL7544 lensColor={getLensColorHex()} topcoverColor={getTopCoverColorHex()} slotData={slotData} selectedSlotKey={0} onSelectSlot={() => {}} />}
                  {selectedLength === 'XL7574' && <XL7574 lensColor={getLensColorHex()} topcoverColor={getTopCoverColorHex()} slotData={slotData} selectedSlotKey={0} onSelectSlot={() => {}} />}
                  {selectedLength === 'XL7568' && <XL7568 lensColor={getLensColorHex()} topcoverColor={getTopCoverColorHex()} slotData={slotData} selectedSlotKey={0} onSelectSlot={() => {}} />}
                  {selectedLength === 'XL7561' && <XL7561 lensColor={getLensColorHex()} topcoverColor={getTopCoverColorHex()} slotData={slotData} selectedSlotKey={0} onSelectSlot={() => {}} />}
                </div>
              </div>

              {/* Full Slots & Modules Table */}
              <h3 style={{ fontSize: '16px', margin: '20px 0 10px 0', textAlign: 'left' }}>Configured Slots & Modules</h3>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px', fontSize: '13px', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#f1f1f1' }}>
                    <th style={{ border: '1px solid #ddd', padding: '8px 10px' }}>Module Position</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px 10px' }}>Order Code / Details</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px 10px' }}>Colour Type</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(slotData)
                    .filter(([key]) => Number(key) <= getMaxSlots(selectedLength))
                    .map(([key, slot]) => (
                      <tr key={key}>
                        <td style={{ border: '1px solid #ddd', padding: '8px 10px' }}><strong>{key}</strong></td>
                        <td style={{ border: '1px solid #ddd', padding: '8px 10px' }}>
                          {Number(key) >= 1 && Number(key) <= 4 
                            ? getCornerOrderCode(slot) 
                            : (slot.active !== false ? `Primary: ${slot.primary} ${slot.mode === 'dual' ? `/ Secondary: ${slot.secondary}` : ''}` : 'N/A')}
                        </td>
                        <td style={{ border: '1px solid #ddd', padding: '8px 10px' }}>{slot.mode ? slot.mode.toUpperCase() : 'SINGLE'}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            {/* Customer Form (Hidden on Print) */}
            <div className="form-group no-print" style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '24px', textAlign: 'left' }}>
              <h3 style={{ margin: '0 0 16px 0', fontSize: '1rem' }}>Your Information</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Row 1: Name and Company side by side */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }} placeholder="John Doe" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Company</label>
                    <input type="text" name="company" value={formData.company} onChange={handleInputChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }} placeholder="Acme Corp" />
                  </div>
                </div>
                {/* Row 2: Email and Phone side by side */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }} placeholder="john@example.com" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }} placeholder="07123 456789" />
                  </div>
                </div>
              </div>
            </div>

           {/* Action Buttons (Hidden on Print) */}
           <div className="step-footer-action button-group-row no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button className="btn-secondary" onClick={() => setCurrentStage('modules')}>
                Back to Modules
              </button>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                {!isFormValid && (
                  <span style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 600 }}>
                    * Please fill in your Name and Email to proceed
                  </span>
                )}
                <button 
                  className={`btn-primary btn-large ${!isFormValid ? 'disabled' : ''}`} 
                  onClick={() => isFormValid && setShowNextStepsModal(true)} 
                  disabled={!isFormValid}
                  style={{ 
                    background: '#10b981', 
                    borderColor: '#10b981', 
                    opacity: isFormValid ? 1 : 0.5, 
                    cursor: isFormValid ? 'pointer' : 'not-allowed' 
                  }}
                >
                  Complete Configuration
                </button>
              </div>
            </div>

            {/* NEXT STEPS MODAL */}
      {showNextStepsModal && (
        <div className="modal-overlay no-print" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.75)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '24px' }}>
          <div className="modal-card animate-fade" style={{ background: '#ffffff', width: '100%', maxWidth: '620px', borderRadius: '12px', padding: '28px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)', position: 'relative' }}>
            
            {/* Close Button */}
            <button onClick={() => setShowNextStepsModal(false)} style={{ position: 'absolute', top: '18px', right: '18px', background: 'none', border: 'none', fontSize: '22px', cursor: 'pointer', color: '#64748b' }}>×</button>

            {/* Header */}
            <h2 style={{ margin: '0 0 6px 0', fontSize: '1.35rem', color: '#0f172a' }}>Configuration Ready</h2>
            <p style={{ margin: '0 0 20px 0', fontSize: '0.9rem', color: '#64748b' }}>Your specification summary has been compiled successfully.</p>

            {/* SECTION 1: DOWNLOAD / PRINT INSTRUCTIONS */}
            <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '16px', textAlign: 'left', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ fontSize: '24px', lineHeight: 1 }}>📄</span>
                <div>
                  <strong style={{ fontSize: '0.95rem', color: '#0f172a', display: 'block', marginBottom: '4px' }}>Save as PDF or Print Spec Sheet</strong>
                  <p style={{ margin: 0, fontSize: '0.825rem', color: '#475569', lineHeight: 1.4 }}>
                    Click below to open your print preview. To save a digital copy, select <strong>"Save as PDF"</strong> under the Destination printer settings in your browser print window.
                  </p>
                </div>
              </div>

              <button 
                onClick={handleTriggerPrint} 
                style={{ 
                  width: '100%', 
                  marginTop: '14px', 
                  padding: '10px 16px', 
                  background: '#10b981', 
                  color: '#ffffff', 
                  border: 'none', 
                  borderRadius: '6px', 
                  fontSize: '0.9rem', 
                  fontWeight: 600, 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                🖨 Download / Print
              </button>
            </div>

            {/* DIVIDER LINE */}
            <hr style={{ border: '0', borderTop: '1px solid #e2e8f0', margin: '20px 0' }} />

            {/* SECTION 2: UNIQUE CONFIGURATIONS & CONTACT OPTIONS */}
            <div style={{ textAlign: 'left' }}>
              <strong style={{ fontSize: '0.95rem', color: '#0f172a', display: 'block', marginBottom: '4px' }}>Need a Unique or Custom Configuration?</strong>
              <p style={{ margin: '0 0 16px 0', fontSize: '0.825rem', color: '#64748b', lineHeight: 1.4 }}>
                For bespoke lightbar customisation options, please get in touch with our expert team:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                
                {/* Submit / Email Quote Request */}
                <button 
                  onClick={() => handleSendEmail('quote')} 
                  style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#ffffff', cursor: 'pointer' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <span style={{ fontSize: '16px' }}>✉️</span>
                    <strong style={{ fontSize: '0.85rem', color: '#0f172a' }}>Email Sales</strong>
                  </div>
                  <small style={{ fontSize: '0.75rem', color: '#64748b' }}>Email build details to our sales department for pricing.</small>
                </button>

                {/* Direct Phone Line */}
                <a 
                  href="tel:+441132029115" 
                  style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#ffffff', textDecoration: 'none', cursor: 'pointer' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <span style={{ fontSize: '16px' }}>📞</span>
                    <strong style={{ fontSize: '0.85rem', color: '#0f172a' }}>Call Technical Sales</strong>
                  </div>
                  <small style={{ fontSize: '0.75rem', color: '#64748b' }}>+44 (0)113 202 9115</small>
                </a>

              </div>
            </div>

          </div>
        </div>
      )}
          </section>
        )}

        {/* --- STEP 5: SUCCESS STAGE --- */}
        {currentStage === 'success' && (
          <section className="step-card success-card animate-fade no-print">
            <div className="success-icon">✓</div>
            <h2>Lightbar Configuration Complete!</h2>
            <p className="subtext">Thank you, {formData.name || 'Customer'}. Your custom build specification has been submitted successfully.</p>
            
            <button 
              className="btn-primary" 
              onClick={() => { 
                setCurrentStage('model'); 
                setSelectedModel('xl75');
                setSelectedLength(null); 
                setFormData({ name: '', company: '', email: '', phone: '' });
              }}
              style={{ marginTop: '24px' }}
            >
              Configure Another Bar
            </button>
          </section>
        )}
      </main>
    </div>
  );
}
