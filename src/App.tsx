import React, { useState, useEffect } from 'react';
import './index.css';
import Minibar25 from './assets/Minibar25.jsx';
import XL7528 from './assets/XL7528.jsx';
import XL7544 from './assets/XL7544.jsx';
import XL7574 from './assets/XL7574.jsx';
import XL7568 from './assets/XL7568.jsx';
import XL7561 from './assets/XL7561.jsx';
import SL43 from './assets/SL43.jsx';
import InfoModal from './InfoModal';
import { lightbarInfo } from './LightbarInfo';

export default function App() {
  const [currentStage, setCurrentStage] = useState<
    'model' | 'exterior' | 'modules' | 'form' | 'success'
  >('model');
  // Keep the Featured Options and Modules accordions mutually exclusive.
  const [openConfigSection, setOpenConfigSection] = useState<
    'featured' | 'modules' | 'layout'
  >('layout');

  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedLength, setSelectedLength] = useState<string | null>(null);
  const [selectedLens, setSelectedLens] = useState<string | null>('clear');
  const [selectedTopCover, setSelectedTopCover] = useState<string | null>(
    'black'
  );

  // Customer Form State
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    quantity: '',
    message: '',
  });

  // Currently active slot being configured in the control panel
  const [selectedSlotNumber, setSelectedSlotNumber] = useState<number | string>(
    'C1'
  );

  // --- XPERT SL 43" CUSTOM OPTIONS STATE ---
  const [sl43Speaker, setSl43Speaker] = useState(false);
  const [sl43Sign, setSl43Sign] = useState(false);
  const [sl43CentreColour, setSl43CentreColour] = useState('lens colour');
  const [sl43SignSize, setSl43SignSize] = useState<'300mm' | '160mm'>('300mm');
  const [sl43SignColour, setSl43SignColour] = useState<
    'white' | 'yellow' | 'black'
  >('white');
  const [sl43SignText, setSl43SignText] = useState('');
  const [sl43Siren, setSl43Siren] = useState(false);
  const [sl43SirenModel, setSl43SirenModel] = useState<'8-82613' | '8-82415'>(
    '8-82613'
  );
  const [sl43ControlModule, setSl43ControlModule] = useState(false);
  const [sl43AlleyLights, setSl43AlleyLights] = useState(false);
  const [sl43ModuleLayout, setSl43ModuleLayout] = useState<
    'corner' | 'beacon' | 'vmirrors'
  >('corner');
  const [sl43FrontInnerOption, setSl43FrontInnerOption] = useState('');
  const [sl43RearInnerOption, setSl43RearInnerOption] = useState('');
  const [sl43ResetKey, setSl43ResetKey] = useState(0);
  const [sl43FrontInnerAddType, setSl43FrontInnerAddType] = useState<
    'xtshort' | 'xtlong' | ''
  >('');
  const [sl43RearInnerAddType, setSl43RearInnerAddType] = useState<
    'xtshort' | 'xtlong' | ''
  >('');
  const [sl43InnerModuleRequest, setSl43InnerModuleRequest] = useState<{
    side: 'frontInner' | 'frontOuter' | 'rearInner' | 'rearOuter';
    type: 'xtshort' | 'xtlong';
    nonce: number;
  } | null>(null);
  const [sl43RemoveInnerRequest, setSl43RemoveInnerRequest] = useState<{
    slotKey: string;
    nonce: number;
  } | null>(null);
  const [sl43DividerColour, setSl43DividerColour] = useState('clear');
  const [sl43CentreType, setSl43CentreType] = useState('300mm');
  const [rightLensColour, setRightLensColour] = useState('#ebebebD6');
  const [splitLensEnabled, setSplitLensEnabled] = useState(false);

  const [sl43InnerModulePositions, setSl43InnerModulePositions] =
  useState<Record<string, number>>({});

  // Master slot configuration state for sections 1 through 24
  const [slotData, setSlotData] = useState<
    Record<
      string,
      {
        active: boolean;
        mode: 'single' | 'dual' | 'tri';
        primary: string;
        secondary: string;
        tertiary: string;
        optionType?: string;
      }
    >
  >({
    1: {
      active: false,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    2: {
      active: false,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    3: {
      active: false,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    4: {
      active: false,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    5: {
      active: false,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    6: {
      active: false,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    7: {
      active: false,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    8: {
      active: false,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    9: {
      active: false,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    10: {
      active: false,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    11: {
      active: false,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    12: {
      active: false,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    13: {
      active: false,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    14: {
      active: false,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    15: {
      active: false,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    16: {
      active: false,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    17: {
      active: false,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    18: {
      active: false,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    19: {
      active: false,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    20: {
      active: false,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    21: {
      active: false,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    22: {
      active: false,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    23: {
      active: false,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    24: {
      active: false,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    C1: {
      active: true,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    C2: {
      active: true,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    C3: {
      active: true,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    C4: {
      active: true,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'xtlongmodule',
    },
    B1: {
      active: true,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'beacon',
    },
    B2: {
      active: true,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'beacon',
    },
    BV1: {
      active: true,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'vmirrors',
    },
    BV2: {
      active: true,
      mode: 'single',
      primary: '#808285',
      secondary: '#3b82f6',
      tertiary: '',
      optionType: 'vmirrors',
    },
  });

  useEffect(() => {
    if (selectedLength !== 'SL43' && openConfigSection === 'featured') {
      setOpenConfigSection('layout');
    }
  }, [selectedLength, openConfigSection]);

  useEffect(() => {
    if (
      typeof selectedSlotNumber === 'number' &&
      selectedLength === '25' &&
      selectedSlotNumber > 4
    ) {
      setSelectedSlotNumber(1);
    } else if (
      typeof selectedSlotNumber === 'number' &&
      selectedLength === 'XL7528' &&
      selectedSlotNumber > 6
    ) {
      setSelectedSlotNumber(1);
    } else if (
      typeof selectedSlotNumber === 'number' &&
      selectedLength === 'XL7544' &&
      selectedSlotNumber > 16
    ) {
      setSelectedSlotNumber(1);
    }
  }, [selectedLength, selectedSlotNumber]);

  const lightbarModels = [
    {
      id: 'xl75',
      name: 'XL75',
      description: 'Ultra-Low-Profile Lightbar',
      available: true,
    },
    {
      id: 'xpertsl',
      name: 'Xpert SL',
      description: 'Low-Profile Lightbar',
      available: true,
    },
    {
      id: 'xpertslx',
      name: 'Xpert SLX',
      description: 'Low-Profile Lightbar',
      available: true,
    },
    {
      id: 'xpert',
      name: 'Xpert',
      description: 'High-Profile Lightbar',
      available: true,
    },
    {
      id: 'xpertdx',
      name: 'Xpert DX',
      description: 'High-Profile Lightbar',
      available: true,
    },
    {
      id: 'xpress',
      name: 'Xpress',
      description: 'High-Profile Lightbar',
      available: true,
    },
    {
      id: 'xpertsle',
      name: 'Xpert SLE',
      description: 'Low Profile Minibar',
      available: true,
    },
  ];

  const xl75LengthOptions = [
    {
      id: '25',
      name: 'XL75 Lightbar',
      dims: '25" (628mm)',
      chassisClass: 'chassis-25',
    },
    {
      id: 'XL7528',
      name: 'XL75 Lightbar',
      dims: '28" (716mm)',
      chassisClass: 'chassis-28',
    },
    {
      id: 'XL7531',
      name: 'XL75 Lightbar',
      dims: '31" (790mm)',
      chassisClass: 'chassis-31',
    },
    {
      id: 'XL7537',
      name: 'XL75 Lightbar',
      dims: '37" (935mm)',
      chassisClass: 'chassis-37',
    },
    {
      id: 'XL7544',
      name: 'XL75 Lightbar',
      dims: '44" (1111mm)',
      chassisClass: 'chassis-44',
    },
    {
      id: 'XL7549',
      name: 'XL75 Lightbar',
      dims: '49" (1242mm)',
      chassisClass: 'chassis-49',
    },
    {
      id: 'XL7550',
      name: 'XL75 Lightbar',
      dims: '50" (1259mm)',
      chassisClass: 'chassis-50',
    },
    {
      id: 'XL7555',
      name: 'XL75 Lightbar',
      dims: '55" (1404mm)',
      chassisClass: 'chassis-55',
    },
    {
      id: 'XL7556',
      name: 'XL75 Lightbar',
      dims: '56" (1435mm)',
      chassisClass: 'chassis-28',
    },
    {
      id: 'XL7561',
      name: 'XL75 Lightbar',
      dims: '61" (1549mm)',
      chassisClass: 'chassis-61',
    },
    {
      id: 'XL7568',
      name: 'XL75 Lightbar',
      dims: '68" (1725mm)',
      chassisClass: 'chassis-68',
    },
    {
      id: 'XL7574',
      name: 'XL75 Lightbar',
      dims: '74" (1862mm)',
      chassisClass: 'chassis-74',
    },
  ];

  const slLengthOptions = [
    {
      id: 'SL17',
      name: 'Xpert SL Lightbar',
      dims: '17" / 429mm',
      chassisClass: 'chassis-sl17',
    },
    {
      id: 'SL43',
      name: 'Xpert SL Lightbar',
      dims: '43" / 1089mm',
      chassisClass: 'chassis-sl',
    },
  ];

  const slxLengthOptions = [
    {
      id: 'SLX17',
      name: 'Xpert SLX Lightbar',
      dims: '15" / 373mm',
      chassisClass: 'chassis-slx17',
    },
    {
      id: 'SLX20',
      name: 'Xpert SLX Lightbar',
      dims: '20" / 516mm',
      chassisClass: 'chassis-slx20',
    },
    {
      id: 'SLX26',
      name: 'Xpert SLX Lightbar',
      dims: '26" / 657mm',
      chassisClass: 'chassis-slx26',
    },
    {
      id: 'SLX31',
      name: 'Xpert SLX Lightbar',
      dims: '31" / 798mm',
      chassisClass: 'chassis-slx31',
    },
  ];

  const xpertLengthOptions = [
    {
      id: 'xpert17',
      name: 'Xpert Lightbar',
      dims: '17" / 429mm',
      chassisClass: 'chassis-xpert17',
    },
  ];

  const dxLengthOptions = [
    {
      id: 'dx36',
      name: 'Xpert DX Lightbar',
      dims: '36" / 909mm',
      chassisClass: 'chassis-dx36',
    },
  ];

  const xpressLengthOptions = [
    {
      id: 'xpress17',
      name: 'Xpress Lightbar',
      dims: '17" / 436mm',
      chassisClass: 'chassis-xpress17',
    },
  ];

  const sleLengthOptions = [
    {
      id: 'sle19',
      name: 'Xpert SLE Lightbar',
      dims: '19" / 492mm',
      chassisClass: 'chassis-sle19',
    },
  ];

  const lengthOptionsMap: Record<string, typeof xl75LengthOptions> = {
    xl75: xl75LengthOptions,
    xpertsl: slLengthOptions,
    xpertslx: slxLengthOptions,
    xpert: xpertLengthOptions,
    xpertdx: dxLengthOptions,
    xpress: xpressLengthOptions,
    xpertsle: sleLengthOptions,
  };

  const currentLengthOptions =
    lengthOptionsMap[selectedModel || 'xl75'] || xl75LengthOptions;

  const lensOptions = [
    { id: 'clear', name: 'Clear', hex: '#ebebebB6' },
    { id: 'amber', name: 'Amber', hex: '#f0a926D6' },
    { id: 'blue', name: 'Blue', hex: '#006effD6' },
    { id: 'red', name: 'Red', hex: '#e81a1aD6' },
  ];

  const topcoverOptions = [
    { id: 'black', name: 'Black', hex: '#1e293b' },
    { id: 'blue', name: 'Blue', hex: '#063f9c' },
    { id: 'red', name: 'Red', hex: '#ef4444' },
  ];

  const ledOptions = [
    { id: 'amber', name: 'Amber', hex: '#f0a926' },
    { id: 'blue', name: 'Blue', hex: '#3b82f6' },
    { id: 'red', name: 'Red', hex: '#ef4444' },
    { id: 'green', name: 'Green', hex: '#10b981' },
    { id: 'white', name: 'White', hex: '#ffffff' },
  ];

  // --- GLOBAL TRI-COLOUR SUPPORT HELPER ---
  const isTriColourSupported = (optionType?: string): boolean => {
    if (!optionType) return true;

    const lower = optionType.toLowerCase();

    if (
      lower === 'xtshortmodule' ||
      lower.includes('frontinnershort') ||
      lower.includes('') ||
      lower.includes('rearinnershort') ||
      lower.includes('frontouterlongshort-short') ||
      lower.includes('frontoutershortlong-short') ||
      lower.includes('rearoutershortlong-short') ||
      lower.includes('rearouterlongshort-short') ||
      lower.includes('twinned') ||
      lower.includes('linear') ||
      lower.includes('alley') ||
      lower.includes('beacon')
    ) {
      return false;
    }

    return true;
  };

  // --- GLOBAL DUAL-COLOUR SUPPORT HELPER ---
  const isDualColourSupported = (optionType?: string): boolean => {
    if (!optionType) return true;

    const lower = optionType.toLowerCase();

    // Hide dual-colour for beacon modules
    if (lower.includes('beacon')) {
      return false;
    }

    return true;
  };

  const handleSelectSlot = (slotKey: number | string) => {
    // Preserve string slot IDs (e.g. C1, C2) as well as numeric IDs.
    const slotId = String(slotKey);
    const slotNum = typeof slotKey === 'number' ? slotKey : Number(slotKey);
    setSelectedSlotNumber(slotKey);

    setSlotData((prev) => {
      const existing = prev[slotId] || {
        active: false,
        mode: 'single',
        primary: '#808285',
        secondary: '#3b82f6',
        tertiary: '',
        optionType: 'xtlongmodule',
      };

      const isFixedShort =
        selectedLength === 'XL7528' && (slotNum === 5 || slotNum === 6);

      // Replace this with your actual SL43 short-module check
      const isSelectedShort = isFixedShort;

      const optionType = isSelectedShort
        ? 'xtshortmodule'
        : existing.optionType || 'xtlongmodule';

      return {
        ...prev,
        [slotId]: {
          ...existing,
          active: true,
          optionType,
          mode:
            isSelectedShort && existing.mode === 'tri'
              ? 'dual'
              : existing.mode || 'single',
          primary: existing.primary || '#808285',
        },
      };
    });
  };

  const isFormValid =
    formData.name.trim() !== '' && formData.email.trim() !== '';

  const getAllowedSecondaryColours = (primaryHex: string): string[] => {
    if (!primaryHex) return ledOptions.map((l) => l.hex);
    return ledOptions
      .map((l) => l.hex)
      .filter((hex) => hex.toLowerCase() !== primaryHex.toLowerCase());
  };

  const getAllowedTertiaryColours = (
    primaryHex: string,
    secondaryHex?: string
  ): string[] => {
    return ledOptions
      .map((l) => l.hex)
      .filter(
        (hex) =>
          hex.toLowerCase() !== primaryHex?.toLowerCase() &&
          (!secondaryHex || hex.toLowerCase() !== secondaryHex.toLowerCase())
      );
  };

  const getLensColourHex = () => {
    const found = lensOptions.find((l) => l.id === selectedLens);
    return found ? found.hex : '#e2e8f0';
  };

  const getTopCoverColourHex = () => {
    const found = topcoverOptions.find((c) => c.id === selectedTopCover);
    return found ? found.hex : '#1e293b';
  };

  const [sl43SignTextColour, setSl43SignTextColour] = useState('#231f20');

  const handleSelectModel = (modelId: string) => {
    setSelectedModel(modelId);
    setCurrentStage('exterior');
  };

  const handleSelectLength = (lengthId: string) => {
    setSelectedLength(lengthId);
    setCurrentStage('modules');

    setSlotData((prev) => {
      const updated = { ...prev };

      if (lengthId === 'XL7528') {
        [5, 6].forEach((num) => {
          if (updated[num]) {
            updated[num] = {
              ...updated[num],
              optionType: 'xtshortmodule',
              mode: updated[num].mode === 'tri' ? 'dual' : updated[num].mode,
            };
          }
        });
      } else if (lengthId === 'XL7544') {
        [5, 6, 7, 8, 9, 10, 11, 12].forEach((num) => {
          if (updated[num]) {
            updated[num] = {
              ...updated[num],
              optionType: 'xtshortmodule',
              mode: updated[num].mode === 'tri' ? 'dual' : updated[num].mode,
            };
          }
        });
      } else if (lengthId === 'XL7561') {
        [5, 6, 7, 8].forEach((num) => {
          if (updated[num]) {
            updated[num] = {
              ...updated[num],
              optionType: 'xtshortmodule',
              mode: updated[num].mode === 'tri' ? 'dual' : updated[num].mode,
            };
          }
        });
      } else if (lengthId === 'XL7568') {
        [5, 6, 7, 8, 9, 10, 11, 12].forEach((num) => {
          if (updated[num]) {
            updated[num] = {
              ...updated[num],
              optionType: 'xtshortmodule',
              mode: updated[num].mode === 'tri' ? 'dual' : updated[num].mode,
            };
          }
        });
      } else if (lengthId === 'XL7574') {
        [5, 6, 7, 8].forEach((num) => {
          if (updated[num]) {
            updated[num] = {
              ...updated[num],
              optionType: 'xtshortmodule',
              mode: updated[num].mode === 'tri' ? 'dual' : updated[num].mode,
            };
          }
        });
      } else if (lengthId === 'SL43') {
        [1, 2, 3, 4, 5, 6, 7, 8].forEach((num) => {
          if (updated[num]) {
            updated[num] = {
              ...updated[num],
              optionType: 'xtshortmodule',
              mode: updated[num].mode === 'tri' ? 'dual' : updated[num].mode,
            };
          }
        });
      }

      return updated;
    });
  };

  type SL43InnerModuleType = 'xtshort' | 'xtlong';

  const handleAddSL43InnerModule = (
    slotKey: string,
    type: SL43InnerModuleType
  ): void => {
    setSlotData((prev) => {
      const existing = prev[slotKey] || {
        active: false,
        mode: 'single' as const,
        primary: '#808285',
        secondary: '#3b82f6',
        tertiary: '',
      };
      return {
        ...prev,
        [slotKey]: {
          ...existing,
          active: true,
          optionType: type === 'xtshort' ? 'xtshortmodule' : 'xtlongmodule',
        },
      };
    });
  };
  const handleRemoveSL43InnerModule = (slotKey: string): void => {
    setSlotData((prev) => {
      const existing = prev[slotKey];
      return existing
        ? { ...prev, [slotKey]: { ...existing, active: false } }
        : prev;
    });
  };

  const handleSL43ModuleLayout = (layout: 'corner' | 'beacon' | 'vmirrors') => {
    setSl43ModuleLayout(layout);
    setSelectedSlotNumber(
      layout === 'beacon' ? 'B1' : layout === 'vmirrors' ? 'BV1' : 'C1'
    );
    setSlotData((prev) => {
      const next = { ...prev };
      const defaults: {
        active: boolean;
        mode: 'single' | 'dual' | 'tri';
        primary: string;
        secondary: string;
        tertiary: string;
      } = {
        active: false,
        mode: 'single',
        primary: '#808285',
        secondary: '#3b82f6',
        tertiary: '',
      };

      ['C1', 'C2', 'C3', 'C4'].forEach((key) => {
        const existing = next[key] || { ...defaults, optionType: 'xtlongmodule' };
        next[key] = { ...existing, active: layout === 'corner' };
      });

      // The 9-3751 360° module includes beacons in both beacon layouts.
      ['B1', 'B2'].forEach((key) => {
        const existing = next[key] || { ...defaults, optionType: 'beacon' };
        next[key] = {
          ...existing,
          active: layout === 'beacon' || layout === 'vmirrors',
          optionType: 'beacon',
        };
      });

      // V mirrors are additional slots, not replacements for the beacons.
      ['BV1', 'BV2'].forEach((key) => {
        const existing = next[key] || { ...defaults, optionType: 'vmirrors' };
        next[key] = {
          ...existing,
          active: layout === 'vmirrors',
          optionType: 'vmirrors',
        };
      });
      return next;
    });
  };

  const handleResetAllModules = () => {
    // Reset every module slot to the standard configuration.
    setSlotData((prev) => {
      const resetState = { ...prev };
      Object.keys(resetState).forEach((k) => {
        const num = Number(k);
        const existing = resetState[k];
        const isCorner =
          selectedLength === 'SL43'
            ? ['C1', 'C2', 'C3', 'C4'].includes(k)
            : (num >= 25 && num <= 30) ||
              k === 'C1' ||
              k === 'C2' ||
              k === 'C3' ||
              k === 'C4' ||
              k === 'B2' ||
              k === 'B1';
        resetState[k] = {
          active: isCorner,
          mode: 'single',
          primary: '#808285',
          secondary: '#3b82f6',
          tertiary: '',
          // Preserve the module type so reset does not reveal unsupported colour modes.
          optionType: existing?.optionType || 'xtlongmodule',
        };
      });
      return resetState;
    });
    setSelectedSlotNumber('C1');
    setSl43ModuleLayout('corner');

    // SL43's reset also restores all Featured Options to their initial values.
    if (selectedLength === 'SL43') {
      setSl43Speaker(false);
      setSl43Sign(false);
      setSl43SignSize('300mm');
      setSl43SignColour('white');
      setSl43SignText('');
      setSl43SignTextColour('#231f20');
      setSl43Siren(false);
      setSl43SirenModel('8-82613');
      setSl43ControlModule(false);
      setSl43AlleyLights(false);
      setSl43DividerColour('clear');
      setSl43CentreType('300mm');
      setSl43FrontInnerOption('');
      setSl43RearInnerOption('');
      setSl43ResetKey((value) => value + 1);
      setSl43FrontInnerAddType('');
      setSl43RearInnerAddType('');
      setSl43InnerModuleRequest(null);
      setSl43RemoveInnerRequest(null);
      setSelectedLens('clear');
      setSl43CentreColour('lens colour');
    }
  };

  // Clean and pure — relies entirely on what optionType tag is stored in state
  const currentSlotState = slotData[selectedSlotNumber] || {
    active: true,
    mode: 'single',
    primary: '#808285',
    secondary: '#3b82f6',
    tertiary: '',
    optionType: 'xtlongmodule',
  };

  const updateCurrentSlot = (updates: Partial<typeof currentSlotState>) => {
    setSlotData((prev) => ({
      ...prev,
      [selectedSlotNumber]: {
        ...prev[selectedSlotNumber],
        ...updates,
      },
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [showNextStepsModal, setShowNextStepsModal] = useState(false);

  const handleTriggerPrint = () => {
    setShowNextStepsModal(false);

    const originalTitle = document.title;
    let originalParentTitle = '';
    try {
      originalParentTitle = window.parent.document.title;
    } catch (e) {}

    const rawModelName =
      lightbarModels.find((m) => m.id === selectedModel)?.name || 'Lightbar';
    const lengthObj = currentLengthOptions.find((l) => l.id === selectedLength);
    const rawLengthName =
      lengthObj?.dims || lengthObj?.name || selectedLength || 'Length';
    const rawCompany = formData.company || formData.name || 'Customer';
    const dateStr = new Date().toISOString().split('T')[0];

    const lightbarName = rawModelName.replace(/[^a-zA-Z0-9]/g, '_');
    const lengthName = rawLengthName.replace(/[^a-zA-Z0-9]/g, '');
    const companyName = rawCompany.replace(/[^a-zA-Z0-9]/g, '_');

    const customPdfName = `Haztec_${lightbarName}-${lengthName}_${companyName}_${dateStr}`;

    document.title = customPdfName;
    try {
      if (window.parent && window.parent.document) {
        window.parent.document.title = customPdfName;
      }
    } catch (e) {}

    window.print();

    document.title = originalTitle;
    try {
      if (window.parent && window.parent.document && originalParentTitle) {
        window.parent.document.title = originalParentTitle;
      }
    } catch (e) {}
  };

  const handleSendEmail = (type: 'quote' | 'share') => {
    if (!isFormValid) return;

    const recipient = 'sales@haztec.uk';
    const subjectPrefix =
      type === 'quote' ? 'Quote Request' : 'Lightbar Configuration';
    const customerInfo = formData.company
      ? `${formData.name} (${formData.company})`
      : formData.name;
    const subject = encodeURIComponent(`${subjectPrefix} - ${customerInfo}`);

    window.location.href = `mailto:${recipient}?subject=${subject}`;
    setShowNextStepsModal(false);
  };

  const [activeInfo, setActiveInfo] = useState<{
    title: string;
    description?: string;
    image?: string;
    sections?: {
      heading: string;
      content?: string;
      bullets?: string[];
    }[];
  } | null>(null);

  const xtModulesInfo = lightbarInfo.SL43.modules.xtModules;
  const degree360Info = lightbarInfo.SL43.modules.degree360;

  const areCornersConfigured = ['C1', 'C2', 'C3', 'C4', 'B1', 'B2'].every(
    (slotkey) => {
      const slot = slotData[slotkey];
      return slot && slot.active && slot.primary !== '#808285';
    }
  );

  return (
    <div className="configurator-wrapper">
      <main className="config-main">
        {/* --- STEP 1: LIGHTBAR MODEL SELECTION --- */}
        {currentStage === 'model' && (
          <section className="step-card animate-fade">
            <div className="config-section-group">
              <h2>1. Select Lightbar Model</h2>
              <p className="subtext">
                Choose the lightbar series you wish to configure.
              </p>

              <div className="sub-category-block">
                <div
                  className="length-grid"
                  style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}
                >
                  {lightbarModels.map((model) => (
                    <div
                      key={model.id}
                      className={`length-card ${
                        selectedModel === model.id ? 'selected' : ''
                      }`}
                      onClick={() => handleSelectModel(model.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="lightbar-name">{model.name}</div>
                      <div className="lightbar-subtext">
                        {model.description}
                      </div>
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
              <button
                className="btn-secondary"
                onClick={() => setCurrentStage('model')}
                style={{ position: 'absolute', top: '50px', right: '40px' }}
              >
                Back to Lightbars
              </button>
              <h2>2. Length Selection</h2>
              <p className="subtext">Select your lightbar length.</p>

              <div className="sub-category-block">
                <div className="length-grid">
                  {currentLengthOptions.map((opt) => (
                    <div
                      key={opt.id}
                      className={`length-card ${
                        selectedLength === opt.id ? 'active' : ''
                      }`}
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

        {/* --- STEP 3: SECTION-BY-SECTION CUSTOMISATION --- */}
        {currentStage === 'modules' && (
          <section className="step-card animate-fade">
            <div className="config-section-group">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div>
                  <h2>3. Lightbar Configuration</h2>
                </div>

                {selectedLength && (
                  <button
                    className="btn-secondary animate-fade"
                    style={{
                      padding: '6px 14px',
                      fontSize: '0.8rem',
                      background: '#ef4444',
                      color: '#ffffff',
                      borderColor: '#ef444444',
                    }}
                    onClick={handleResetAllModules}
                    type="button"
                  >
                    ↺ Reset Modules
                  </button>
                )}
              </div>

              {/* Blueprint Schematic Preview */}
              <div className="overhead-preview-container">
                <div className="overhead-header"></div>

                <div className="lightbar-schematic-stage">
                  {selectedLength === '25' && (
                    <Minibar25
                      lensColour={getLensColourHex()}
                      topcoverColour={getTopCoverColourHex()}
                      slotData={slotData}
                      selectedSlotKey={selectedSlotNumber}
                      onSelectSlot={handleSelectSlot}
                    />
                  )}
                  {selectedLength === 'XL7528' && (
                    <XL7528
                      lensColour={getLensColourHex()}
                      topcoverColour={getTopCoverColourHex()}
                      slotData={slotData}
                      selectedSlotKey={selectedSlotNumber}
                      onSelectSlot={handleSelectSlot}
                    />
                  )}
                  {selectedLength === 'XL7544' && (
                    <XL7544
                      lensColour={getLensColourHex()}
                      topcoverColour={getTopCoverColourHex()}
                      slotData={slotData}
                      selectedSlotKey={selectedSlotNumber}
                      onSelectSlot={handleSelectSlot}
                    />
                  )}
                  {selectedLength === 'XL7574' && (
                    <XL7574
                      lensColour={getLensColourHex()}
                      topcoverColour={getTopCoverColourHex()}
                      slotData={slotData}
                      selectedSlotKey={selectedSlotNumber}
                      onSelectSlot={handleSelectSlot}
                    />
                  )}
                  {selectedLength === 'XL7561' && (
                    <XL7561
                      lensColour={getLensColourHex()}
                      topcoverColour={getTopCoverColourHex()}
                      slotData={slotData}
                      selectedSlotKey={selectedSlotNumber}
                      onSelectSlot={handleSelectSlot}
                    />
                  )}
                  {selectedLength === 'XL7568' && (
                    <XL7568
                      lensColour={getLensColourHex()}
                      topcoverColour={getTopCoverColourHex()}
                      slotData={slotData}
                      selectedSlotKey={selectedSlotNumber}
                      onSelectSlot={handleSelectSlot}
                    />
                  )}
                  {selectedLength === 'SL43' && (
                    <SL43
                      lensColour={getLensColourHex()}
                      rightLensColour={rightLensColour}
                      splitLensEnabled={splitLensEnabled}
                      speakerSelected={sl43Speaker}
                      centreColour={sl43CentreColour}
                      signSelected={sl43Sign}
                      signSize={sl43SignSize}
                      signColour={sl43SignColour}
                      signText={sl43SignText}
                      sirenSelected={sl43Siren}
                      sirenModel={sl43SirenModel}
                      controlModuleSelected={sl43ControlModule}
                      alleyLightsSelected={sl43AlleyLights}
                      dividerColour={sl43DividerColour}
                      centreSectionType={sl43CentreType}
                      signTextColour={sl43SignTextColour}
                      moduleLayout={sl43ModuleLayout}
                      frontInnerOption={sl43FrontInnerOption}
                      rearInnerOption={sl43RearInnerOption}
                      resetKey={sl43ResetKey}
                      innerModuleRequest={sl43InnerModuleRequest}
                      onInnerModuleRequestHandled={() => setSl43InnerModuleRequest(null)}
                      removeInnerModuleRequest={sl43RemoveInnerRequest}
                      onAddInnerModule={handleAddSL43InnerModule}
                      onRemoveInnerModule={handleRemoveSL43InnerModule}
                      slotData={slotData}
                      selectedSlotKey={selectedSlotNumber}
                      onSelectSlot={handleSelectSlot}
                      selectedModel={selectedModel ?? undefined}
                      innerModulePositions={sl43InnerModulePositions}
                      onInnerModulePositionsChange={setSl43InnerModulePositions}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Horizontal configuration tabs */}
            <div
              role="tablist"
              aria-label="Configuration sections"
              className="config-tabs"
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
                overflowX: 'auto',
                gap: '8px',
                alignItems: 'center',
                marginTop: '20px',
                borderBottom: '1px solid #d1d5db',
                paddingBottom: '10px',
              }}
            >
              {[
                { id: 'layout', label: 'Lens & Featured Options' },
                { id: 'modules', label: 'Module Layout' },
                ...(selectedLength === 'SL43'
                  ? [{ id: 'featured', label: 'Additional Options' }]
                  : []),
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={openConfigSection === tab.id}
                  onClick={() =>
                    setOpenConfigSection(
                      tab.id as 'featured' | 'modules' | 'layout'
                    )
                  }
                  className={`config-tab ${
                    openConfigSection === tab.id ? 'active-tab' : ''
                  }`}
                  style={{
                    padding: '10px 14px',
                    fontSize: '0.85rem',
                    borderRadius: '6px 6px 0 0',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {openConfigSection === 'layout' && (
              <div
                className="palette-toolbar animate-fade"
                style={{
                  border: '0px solid #d5d5d5',
                  background: '#ffffff',
                  display: 'block',
                  marginTop: '0',
                  padding: '16px',
                  borderRadius: '0 0 8px 8px',
                  textAlign: 'left',
                }}
              >
                <div style={{ marginTop: '34px' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '14px',
                      marginBottom: '14px',
                      paddingBottom: '12px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                      }}
                    >
                      <div
                        style={{
                          display: 'block',
                          fontSize: '1.1rem',
                          fontWeight: '700',
                          color: '#353fad',
                          marginBottom: '5px',
                        }}
                      >
                        Lightbar Lens Colour & Featured Options
                      </div>
                      <div
                        style={{
                          display: 'block',
                          fontSize: '0.85rem',
                          fontWeight: '400',
                          color: '#282828',
                          marginBottom: '20px',
                        }}
                      >
                        Choose a fully lensed lightbar or one with any central
                        configurations:
                      </div>
                      {selectedModel === 'xl75' && (
                        <div
                          className="sub-category-block"
                          style={{ margin: '15px 0px' }}
                        >
                          <label className="sub-label">Top Cover Colour</label>
                          <div
                            className="length-grid"
                            style={{
                              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                            }}
                          >
                            {topcoverOptions.map((cover) => (
                              <div
                                key={cover.id}
                                className={`colour-card ${
                                  selectedTopCover === cover.id
                                    ? 'selected'
                                    : ''
                                }`}
                                onClick={() => setSelectedTopCover(cover.id)}
                                style={{ padding: '8px' }}
                              >
                                <div
                                  className="lens-swatch"
                                  style={{
                                    background: cover.hex,
                                    width: '20px',
                                    height: '20px',
                                    margin: '0 auto 4px',
                                  }}
                                ></div>
                                <div
                                  className="length-title"
                                  style={{ fontSize: '0.75rem' }}
                                >
                                  {cover.name}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      <div
                        className="lens-block"
                        style={{ margin: '15px 0px' }}
                      >
                        <div className="sub-category-block">
                          <label className="sub-label">Outer Lens Colour</label>
                          <div
                            className="colour-grid"
                            style={{
                              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                              width: '50%',
                            }}
                          >
                            {lensOptions.map((lens) => (
                              <div
                                key={lens.id}
                                className={`colour-card ${
                                  selectedLens === lens.id ? 'selected' : ''
                                }`}
                                onClick={() => {
                                  setSelectedLens(lens.id);
                                  if (!sl43Speaker && !sl43Sign) {
                                    setSl43DividerColour(lens.id);
                                  }
                                }}
                                style={{
                                  padding: '5px 0px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  gap: '8px',
                                  background: '#fafafa',
                                }}
                              >
                                <div
                                  className="lens-swatch"
                                  style={{
                                    background: lens.hex,
                                    width: '16px',
                                    height: '16px',
                                    flexShrink: 0,
                                  }}
                                />
                                <div
                                  className="length-title"
                                  style={{ fontSize: '0.75rem' }}
                                >
                                  {lens.name}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Split Lens Button */}
                        <div style={{ margin: '0' }}>
                          <button
                            type="button"
                            onClick={() =>
                              setSplitLensEnabled(!splitLensEnabled)
                            }
                            style={{
                              padding: '6px',
                              fontSize: '13px',
                              cursor: 'pointer',
                              borderRadius: '6px',
                              border: splitLensEnabled ? 'none' : 'none',
                              background: splitLensEnabled ? 'none' : 'none',
                              color: splitLensEnabled ? '#da2e2e' : '#004D25',
                              fontWeight: '600',
                              transition: 'all 0.2s',
                              marginTop: '15px',
                            }}
                          >
                            {splitLensEnabled
                              ? 'Remove Second Len Colour'
                              : 'Add Second Lens Colour'}
                          </button>
                        </div>

                        {/* Conditional Right Side Lens Selection Block */}
                        {splitLensEnabled && (
                          <div
                            className="sub-category-block"
                            style={{
                              marginBottom: '10px',
                              paddingLeft: '8px',
                              borderLeft: '3px solid #353fad',
                            }}
                          >
                            <label className="sub-label">
                              Right Side Lens Colour
                            </label>
                            <div
                              className="colour-grid"
                              style={{
                                gridTemplateColumns:
                                  'repeat(4, minmax(0, 1fr))',
                                width: '50%',
                              }}
                            >
                              {lensOptions.map((lens) => (
                                <div
                                  key={lens.id}
                                  className={`colour-card ${
                                    rightLensColour === lens.hex
                                      ? 'selected'
                                      : ''
                                  }`}
                                  onClick={() => setRightLensColour(lens.hex)} // <-- Make sure this is lens.hex, not lens.id
                                  style={{
                                    padding: '5px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '6px',
                                    background: '#fafafa',
                                  }}
                                >
                                  <div
                                    className="lens-swatch"
                                    style={{
                                      background: lens.hex,
                                      width: '16px',
                                      height: '16px',
                                      flexShrink: 0,
                                    }}
                                  ></div>
                                  <div
                                    className="length-title"
                                    style={{ fontSize: '0.75rem' }}
                                  >
                                    {lens.name}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      <div style={{ margin: '15px 0px' }}>
                        <div style={{ marginBottom: '5px' }}>
                          <span
                            style={{
                              color: '#282828',
                              fontSize: '0.9rem',
                              fontWeight: '700',
                              display: 'block',
                              margin: '15px 0px',
                            }}
                          >
                            Featured Options:
                          </span>
                          <label
                            style={{
                              fontSize: '0.85rem',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              cursor: 'pointer',
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={sl43Speaker}
                              disabled={sl43Sign}
                              onChange={(e) => {
                                const checked = e.target.checked;
                                setSl43Speaker(checked);
                                if (checked) {
                                  setSl43Sign(false);
                                  setSl43FrontInnerOption('');
                                  setSl43RearInnerOption('');
                                  setSl43DividerColour('black');
                                } else {
                                  if (selectedLens !== null)
                                    setSl43DividerColour(selectedLens);
                                }
                              }}
                              style={{
                                accentColor: 'green',
                                width: '15px',
                                height: '15px',
                                cursor: 'pointer',
                              }}
                            />
                            <strong>Speaker</strong>
                          </label>
                        </div>

                        <label
                          style={{
                            fontSize: '0.85rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            cursor: 'pointer',
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={sl43Sign}
                            disabled={sl43Speaker}
                            onChange={(e) => {
                              const checked = e.target.checked;
                              setSl43Sign(checked);
                              if (checked) {
                                setSl43Speaker(false);
                                setSl43FrontInnerOption('');
                                setSl43RearInnerOption('');
                                setSl43DividerColour('black');
                              } else {
                                if (selectedLens !== null)
                                  setSl43DividerColour(selectedLens);
                              }
                            }}
                            style={{
                              accentColor: 'green',
                              width: '15px',
                              height: '15px',
                              cursor: 'pointer',
                            }}
                          />
                          <strong>Illuminated Centre Sign</strong>
                        </label>
                      </div>

                      {sl43Sign && (
                        <div
                          style={{
                            background: '#fafafa',
                            padding: '12px',
                            borderRadius: '6px',
                            marginBottom: '12px',
                            border: '1px solid #ddd',
                          }}
                        >
                          <div style={{ marginBottom: '15px' }}>
                            <span
                              style={{
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                display: 'block',
                                marginBottom: '4px',
                              }}
                            >
                              Sign Size:
                            </span>
                            <div
                              style={{
                                display: 'flex',
                                gap: '8px',
                                margin: '10px 0px',
                              }}
                            >
                              <button
                                className={`mode-tab ${
                                  sl43SignSize === '300mm' ? 'active-tab' : ''
                                }`}
                                onClick={() => setSl43SignSize('300mm')}
                                style={{
                                  padding: '4px 10px',
                                  fontSize: '0.8rem',
                                }}
                              >
                                300mm
                              </button>
                              <button
                                className={`mode-tab ${
                                  sl43SignSize === '160mm' ? 'active-tab' : ''
                                }`}
                                onClick={() => setSl43SignSize('160mm')}
                                style={{
                                  padding: '4px 10px',
                                  fontSize: '0.75rem',
                                }}
                              >
                                160mm
                              </button>
                            </div>
                          </div>

                          <div style={{ marginBottom: '15px' }}>
                            <span
                              style={{
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                display: 'block',
                                marginBottom: '4px',
                              }}
                            >
                              Sign Colour:
                            </span>
                            <div
                              style={{
                                display: 'flex',
                                gap: '8px',
                                margin: '10px 0px',
                              }}
                            >
                              <button
                                className={`mode-tab ${
                                  sl43SignColour === 'white' ? 'active-tab' : ''
                                }`}
                                onClick={() => setSl43SignColour('white')}
                                style={{
                                  padding: '4px 10px',
                                  fontSize: '0.8rem',
                                }}
                              >
                                White
                              </button>
                              <button
                                className={`mode-tab ${
                                  sl43SignColour === 'yellow'
                                    ? 'active-tab'
                                    : ''
                                }`}
                                onClick={() => setSl43SignColour('yellow')}
                                style={{
                                  padding: '4px 10px',
                                  fontSize: '0.75rem',
                                }}
                              >
                                Yellow
                              </button>
                            </div>
                          </div>

                          <div style={{ marginBottom: '15px' }}>
                            <span
                              style={{
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                display: 'block',
                                marginBottom: '4px',
                              }}
                            >
                              Sign Custom Text:
                            </span>
                            <textarea
                              value={sl43SignText}
                              onChange={(e) => setSl43SignText(e.target.value)}
                              placeholder="Enter sign text..."
                              rows={3}
                              style={{
                                width: '100%',
                                padding: '6px',
                                fontSize: '0.8rem',
                                borderRadius: '4px',
                                border: '1px solid #cbd5e1',
                                resize: 'vertical',
                                boxSizing: 'border-box',
                              }}
                            />
                          </div>

                          {/* Sign Text Colour Dropdown */}
                          <div>
                            <span
                              style={{
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                display: 'block',
                                marginBottom: '4px',
                              }}
                            >
                              Sign Text Colour:
                            </span>
                            <select
                              value={sl43SignTextColour}
                              onChange={(e) =>
                                setSl43SignTextColour(e.target.value)
                              }
                              style={{
                                width: '100%',
                                padding: '6px',
                                fontSize: '0.8rem',
                                borderRadius: '4px',
                                border: '1px solid #cbd5e1',
                              }}
                            >
                              <option value="#231f20">Black</option>
                              <option value="#ef4444">Red</option>
                              <option value="#140f64">Blue</option>
                            </select>
                          </div>
                        </div>
                      )}
                      <div style={{ margin: '15px 0px' }}>
                        <span
                          style={{
                            color: '#282828',
                            fontSize: '0.9rem',
                            fontWeight: '700',
                            display: 'block',
                            marginBottom: '12px',
                            marginTop: '10px',
                          }}
                        >
                          Bridge Colour:
                        </span>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          {['black', 'clear', 'amber', 'blue', 'red'].map(
                            (col) => (
                              <button
                                key={col}
                                onClick={() => setSl43DividerColour(col)}
                                className={`mode-tab ${
                                  sl43DividerColour === col ? 'active-tab' : ''
                                }`}
                                style={{
                                  padding: '4px 10px',
                                  fontSize: '0.75rem',
                                  textTransform: 'capitalize',
                                }}
                              >
                                {col}
                              </button>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {openConfigSection === 'modules' && (
              <div
                className="palette-toolbar animate-fade"
                style={{
                  border: '0px solid #f5f5f5',
                  background: '#fff',
                  display: 'block',
                  marginTop: '0',
                  padding: '16px',
                  borderRadius: '0 0 8px 8px',
                  textAlign: 'left',
                }}
              >
                <div style={{ marginTop: '16px' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'flex-start',
                      gap: '18px',
                    }}
                  >
                    {/* LEFT COLUMN: Module number selectors */}
                    <div
                      style={{
                        flex: '0 0 50%',
                        minWidth: '200px',
                        maxWidth: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0px',
                        paddingRight: '30px',
                        borderRight: '1px solid #d1d5db',
                      }}
                    >
                      <div
                        style={{
                          display: 'block',
                          fontSize: '1rem',
                          fontWeight: '700',
                          color: '#353fad',
                          marginBottom: '5px',
                        }}
                      >
                        Modules Selection
                      </div>
                      <div
                        style={{
                          display: 'block',
                          fontSize: '0.85rem',
                          fontWeight: '400',
                          color: '#282828',
                          marginBottom: '20px',
                        }}
                      >
                        Switch to 'Components View' and choose your module
                        combinations:
                      </div>
                      {selectedLength === 'SL43' ? (
                        <div
                          style={{
                            background: '#fff',
                            padding: '10px 0',
                            borderRadius: '6px',
                          }}
                        >
                          <div
                            style={{
                              alignItems: 'center',
                              marginBottom: '10px',
                            }}
                          >
                            <label
                              htmlFor="sl43-end-modules"
                              style={{
                                fontSize: '0.9rem',
                                fontWeight: 700,
                                color: '#282828',
                              }}
                            >
                              End Modules
                            </label>
                          </div>
                          <InfoModal
                            open={activeInfo !== null}
                            onClose={() => setActiveInfo(null)}
                            title={activeInfo?.title ?? ''}
                            description={activeInfo?.description ?? ''}
                            image={activeInfo?.image}
                            sections={activeInfo?.sections}
                          />

                          <select
                            id="sl43-end-modules"
                            value={sl43ModuleLayout}
                            onChange={(e) =>
                              handleSL43ModuleLayout(
                                e.target.value as
                                  | 'corner'
                                  | 'beacon'
                                  | 'vmirrors'
                              )
                            }
                            style={{
                              width: '100%',
                              padding: '6px 10px',
                              fontSize: '0.9rem',
                              border: '1px solid #d1d5db',
                              borderRadius: '6px',
                              background: '#fafafa',
                              color: '#282828',
                            }}
                          >
                            <option value="corner">XT Modules</option>
                            <option value="beacon">
                              9-3751 360 Degree Module
                            </option>
                            <option value="vmirrors">
                              9-3751 360 Degree Module with V Mirrors
                            </option>
                          </select>
                        </div>
                      ) : (
                        <div
                          style={{
                            background: '#f5f5f5',
                            padding: '10px 0px',
                            borderRadius: '6px',
                          }}
                        >
                          <div
                            style={{
                              fontSize: '0.9rem',
                              fontWeight: 600,
                              color: '#282828',
                              marginBottom: '15px',
                            }}
                          >
                            Corner Modules
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              gap: '8px',
                              flexWrap: 'wrap',
                            }}
                          >
                            {['C1', 'C2', 'C3', 'C4'].map((slot) => (
                              <button
                                key={slot}
                                onClick={() => handleSelectSlot(slot)}
                                style={{
                                  width: '38px',
                                  height: '36px',
                                  fontSize: '0.85rem',
                                  fontWeight: 700,
                                  background:
                                    selectedSlotNumber === slot
                                      ? '#166bdb42'
                                      : '#ffffff',
                                  color:
                                    selectedSlotNumber === slot
                                      ? '#166bdb'
                                      : '#282828',
                                  border: '1px solid #166bdb',
                                  borderRadius: '6px',
                                  cursor: 'pointer',
                                }}
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedLength === 'SL43' && (
                        <div
                          style={{
                            background: '#fff',
                            padding: '10px 0px',
                            borderRadius: '6px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            marginTop: '12px',
                          }}
                        >
                          <div
                            style={{
                              fontSize: '0.9rem',
                              fontWeight: 700,
                              color: '#282828',
                            }}
                          >
                            Inner Modules
                          </div>
                          <div
                            style={{
                              display: 'grid',
                              gridTemplateColumns:
                                'repeat(auto-fit, minmax(180px, 1fr))',
                              gap: '12px',
                            }}
                          >
                            {[
                              {
                                side: 'frontInner' as const,
                                label: 'Front Modules',
                                value: sl43FrontInnerAddType,
                                setValue: setSl43FrontInnerAddType,
                              },
                              {
                                side: 'rearInner' as const,
                                label: 'Rear Modules',
                                value: sl43RearInnerAddType,
                                setValue: setSl43RearInnerAddType,
                              },
                            ].map((section) => (
                              <label
                                key={section.side}
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: '5px',
                                  color: '#282828',
                                  fontSize: '0.82rem',
                                  fontWeight: 600,
                                }}
                              >
                                {section.label}
                                <select
                                  value={section.value}
                                  onChange={(e) => {
                                    const type = e.target.value as
                                      | 'xtshort'
                                      | 'xtlong'
                                      | '';
                                    section.setValue('');
                                    if (type)
                                      setSl43InnerModuleRequest((prev) => ({
                                        side: section.side,
                                        type,
                                        nonce: (prev?.nonce ?? 0) + 1,
                                      }));
                                  }}
                                  style={{
                                    width: '100%',
                                    padding: '6px 10px',
                                    border: '1px solid #cbd5e1',
                                    borderRadius: '6px',
                                    background: '#fafafa',
                                    color: '#282828',
                                    fontSize: '0.85rem',
                                  }}
                                >
                                  <option value="">Add module…</option>
                                  <option value="short">XT Short Module</option>
                                  <option value="long">XT Long Module</option>
                                </select>
                              </label>
                            ))}
                          </div>
                          <div style={{ background: '#E1F0FF', padding: '10px', 
                                margin: '10px 0px', borderRadius: '6px' }}>
                            <label
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                color: '#282828',
                                padding: '10px',
                              }}
                            >
                              <span style={{ fontSize: '18px', color: '#245DB5' }}>↔</span>
                              Move / Drag inner modules into position
                            </label>
                          </div>
                          <button
                            type="button"
                            disabled={
                              typeof selectedSlotNumber !== 'number' ||
                              ![
                                9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                                21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
                                33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
                                45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
                                57, 58, 59,
                              ].includes(selectedSlotNumber)
                            }
                            onClick={() =>
                              setSl43RemoveInnerRequest((prev) => ({
                                slotKey: String(selectedSlotNumber),
                                nonce: (prev?.nonce ?? 0) + 1,
                              }))
                            }
                            style={{
                              alignSelf: 'flex-start',
                              padding: '6px 9px',
                              border: '1px solid #b91c1c',
                              borderRadius: '5px',
                              background: '#fff',
                              color: '#b91c1c',
                              cursor: 'pointer',
                              marginTop: '20px',
                            }}
                          >
                            Remove Selected Module
                          </button>
                        </div>
                      )}

                      {/* Inner Modules */}
                      {selectedLength === 'XL7528' && (
                        <div
                          style={{
                            background: '#f5f5f5',
                            padding: '10px 0px',
                            borderRadius: '6px',
                          }}
                        >
                          <div
                            style={{
                              fontSize: '0.9rem',
                              fontWeight: 600,
                              color: '#282828',
                              marginBottom: '15px',
                            }}
                          >
                            Inner Modules
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              gap: '6px',
                              flexWrap: 'wrap',
                            }}
                          >
                            {Array.from({ length: 2 }, (_, i) => i + 1).map(
                              (num) => (
                                <button
                                  key={num}
                                  onClick={() => handleSelectSlot(num)}
                                  style={{
                                    minWidth: '38px',
                                    width: 'auto',
                                    height: '36px',
                                    padding: '0 6px',
                                    whiteSpace: 'nowrap',
                                    fontSize: '0.85rem',
                                    fontWeight: 700,
                                    background:
                                      selectedSlotNumber === num
                                        ? '#166bdb42'
                                        : '#ffffff',
                                    color:
                                      selectedSlotNumber === num
                                        ? '#166bdb'
                                        : '#282828',
                                    border: '1px solid #166bdb',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                  }}
                                >
                                  {num}
                                </button>
                              )
                            )}
                          </div>
                        </div>
                      )}

                      {selectedLength === 'XL7544' && (
                        <div
                          style={{
                            background: '#f5f5f5',
                            padding: '10px 0px',
                            borderRadius: '6px',
                          }}
                        >
                          <div
                            style={{
                              fontSize: '0.9rem',
                              fontWeight: 600,
                              color: '#282828',
                              marginBottom: '15px',
                            }}
                          >
                            Inner Modules
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              gap: '6px',
                              flexWrap: 'wrap',
                            }}
                          >
                            {Array.from({ length: 12 }, (_, i) => i + 1).map(
                              (num) => (
                                <button
                                  key={num}
                                  onClick={() => handleSelectSlot(num)}
                                  style={{
                                    minWidth: '38px',
                                    width: 'auto',
                                    height: '36px',
                                    padding: '0 6px',
                                    whiteSpace: 'nowrap',
                                    fontSize: '0.85rem',
                                    fontWeight: 700,
                                    background:
                                      selectedSlotNumber === num
                                        ? '#166bdb42'
                                        : '#ffffff',
                                    color:
                                      selectedSlotNumber === num
                                        ? '#166bdb'
                                        : '#282828',
                                    border: '1px solid #166bdb',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                  }}
                                >
                                  {num}
                                </button>
                              )
                            )}
                          </div>
                        </div>
                      )}

                      {(selectedLength === 'XL7574' ||
                        selectedLength === 'XL7568') && (
                        <div
                          style={{
                            background: '#f5f5f5',
                            padding: '10px 0px',
                            borderRadius: '6px',
                          }}
                        >
                          <div
                            style={{
                              fontSize: '0.9rem',
                              fontWeight: 600,
                              color: '#282828',
                              marginBottom: '15px',
                            }}
                          >
                            Inner Modules
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              gap: '6px',
                              flexWrap: 'wrap',
                            }}
                          >
                            {Array.from({ length: 20 }, (_, i) => i + 1).map(
                              (num) => (
                                <button
                                  key={num}
                                  onClick={() => handleSelectSlot(num)}
                                  style={{
                                    minWidth: '38px',
                                    width: 'auto',
                                    height: '36px',
                                    padding: '0 6px',
                                    whiteSpace: 'nowrap',
                                    fontSize: '0.85rem',
                                    fontWeight: 700,
                                    background:
                                      selectedSlotNumber === num
                                        ? '#166bdb42'
                                        : '#ffffff',
                                    color:
                                      selectedSlotNumber === num
                                        ? '#166bdb'
                                        : '#282828',
                                    border: '1px solid #166bdb',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                  }}
                                >
                                  {num}
                                </button>
                              )
                            )}
                          </div>
                        </div>
                      )}

                      {selectedLength === 'XL7561' && (
                        <div
                          style={{
                            background: '#f5f5f5',
                            padding: '10px 0px',
                            borderRadius: '6px',
                          }}
                        >
                          <div
                            style={{
                              fontSize: '0.9rem',
                              fontWeight: 600,
                              color: '#282828',
                              marginBottom: '15px',
                            }}
                          >
                            Inner Modules
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              gap: '6px',
                              flexWrap: 'wrap',
                            }}
                          >
                            {Array.from({ length: 16 }, (_, i) => i + 1).map(
                              (num) => (
                                <button
                                  key={num}
                                  onClick={() => handleSelectSlot(num)}
                                  style={{
                                    minWidth: '38px',
                                    width: 'auto',
                                    height: '36px',
                                    padding: '0 6px',
                                    whiteSpace: 'nowrap',
                                    fontSize: '0.85rem',
                                    fontWeight: 700,
                                    background:
                                      selectedSlotNumber === num
                                        ? '#166bdb42'
                                        : '#ffffff',
                                    color:
                                      selectedSlotNumber === num
                                        ? '#166bdb'
                                        : '#282828',
                                    border: '1px solid #166bdb',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                  }}
                                >
                                  {num}
                                </button>
                              )
                            )}
                          </div>
                        </div>
                      )}
                     <div
                        style={{
                          marginTop: '30px',
                          background: '#353fad',
                          borderRadius: '10px',
                          padding: '20px',
                        }}
                      >
                        <label
                          style={{
                            display: 'block',
                            fontSize: '1rem',
                            fontWeight: '700',
                            color: '#fff',
                            marginBottom: '10px',
                          }}
                        >
                          Modules Information
                        </label>
                        <div style={{ fontSize: '0.8rem', color: '#fff' }}>
                          Click below to find out more about our lightbar
                          modules:
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            margin: '20px 0',
                          }}
                        >
                          <button
                            type="button"
                            onClick={() => setActiveInfo(xtModulesInfo)}
                            aria-label="Information about XT modules"
                            style={{
                              border: 'none',
                              background: 'transparent',
                              color: '#fff',
                              textDecoration: 'underline',
                              cursor: 'pointer',
                              fontSize: '0.8rem',
                              padding: '5px 0 0',
                              fontWeight: '500',
                            }}
                          >
                            XT Modules
                          </button>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            margin: '20px 0',
                          }}
                        >
                          <button
                            type="button"
                            onClick={() => setActiveInfo(degree360Info)}
                            aria-label="Information about 9-3751"
                            style={{
                              border: 'none',
                              background: 'transparent',
                              color: '#fff',
                              cursor: 'pointer',
                              fontSize: '0.8rem',
                              padding: '5px 0 0',
                              fontWeight: '500',
                              textDecoration: 'underline',
                            }}
                          >
                            9-3751 360 degree modules
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* RIGHT COLUMN: Selected module settings */}
                    <div
                      style={{
                        flex: '1 1 40%',
                        minWidth: 0,
                        paddingLeft: '30px',
                      }}
                    >
                      <div
                        style={{
                          display: 'block',
                          fontSize: '1rem',
                          fontWeight: '700',
                          color: '#353fad',
                          marginBottom: '5px',
                        }}
                      >
                        Colour Selection
                      </div>
                      <div
                        style={{
                          display: 'block',
                          fontSize: '0.85rem',
                          fontWeight: '400',
                          color: '#282828',
                          marginBottom: '30px',
                        }}
                      >
                        Click on the module in the preview to select its LED
                        colours:
                      </div>
                      {/*{Number(selectedSlotNumber) >= 1 && (
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
)}*/}

                      {currentSlotState.active &&
                        selectedLength === 'XL7544' &&
                        Number(selectedSlotNumber) >= 9 &&
                        Number(selectedSlotNumber) <= 12 && (
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              marginBottom: '14px',
                              background: '#f5f5f5',
                              padding: '8px 12px',
                              borderRadius: '6px',
                              flexWrap: 'wrap',
                            }}
                          >
                            <span
                              style={{ fontSize: '0.8rem', color: '#282828' }}
                            >
                              Type of Module:
                            </span>
                            <button
                              className={`mode-tab ${
                                currentSlotState.optionType === 'xtlongmodule' ||
                                currentSlotState.optionType === 'standard' ||
                                !currentSlotState.optionType
                                  ? 'active-module'
                                  : ''
                              }`}
                              onClick={() =>
                                updateCurrentSlot({ optionType: 'xtlongmodule' })
                              }
                              style={{
                                padding: '4px 10px',
                                fontSize: '0.75rem',
                              }}
                            >
                              XT module long
                            </button>
                            <button
                              className={`mode-tab ${
                                currentSlotState.optionType === 'xtshortmodule' ||
                                currentSlotState.optionType === 'linear'
                                  ? 'active-module'
                                  : ''
                              }`}
                              onClick={() =>
                                updateCurrentSlot({ optionType: 'xtshortmodule' })
                              }
                              style={{
                                padding: '4px 10px',
                                fontSize: '0.75rem',
                              }}
                            >
                              XT module short
                            </button>
                            <button
                              className={`mode-tab ${
                                currentSlotState.optionType ===
                                  'twinnedxtshortmodule' ||
                                currentSlotState.optionType === 'alley'
                                  ? 'active-module'
                                  : ''
                              }`}
                              onClick={() =>
                                updateCurrentSlot({
                                  optionType: 'twinnedxtshortmodule',
                                })
                              }
                              style={{
                                padding: '4px 10px',
                                fontSize: '0.75rem',
                              }}
                            >
                              2x XT module short
                            </button>
                          </div>
                        )}

                      {currentSlotState.active &&
                        (selectedLength === 'XL7574' ||
                          selectedLength === 'XL7568' ||
                          selectedLength === 'XL7561') &&
                        Number(selectedSlotNumber) >= 9 && (
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              marginBottom: '14px',
                              background: '#f5f5f5',
                              padding: '8px 12px',
                              borderRadius: '6px',
                              flexWrap: 'wrap',
                            }}
                          >
                            <span
                              style={{ fontSize: '0.8rem', color: '#282828' }}
                            >
                              Type of Module:
                            </span>
                            <button
                              className={`mode-tab ${
                                currentSlotState.optionType === 'xtlongmodule' ||
                                currentSlotState.optionType === 'standard' ||
                                !currentSlotState.optionType
                                  ? 'active-module'
                                  : ''
                              }`}
                              onClick={() =>
                                updateCurrentSlot({ optionType: 'xtlongmodule' })
                              }
                              style={{
                                padding: '4px 10px',
                                fontSize: '0.75rem',
                              }}
                            >
                              XT module long
                            </button>
                            <button
                              className={`mode-tab ${
                                currentSlotState.optionType === 'xtshortmodule' ||
                                currentSlotState.optionType === 'linear'
                                  ? 'active-module'
                                  : ''
                              }`}
                              onClick={() =>
                                updateCurrentSlot({ optionType: 'xtshortmodule' })
                              }
                              style={{
                                padding: '4px 10px',
                                fontSize: '0.75rem',
                              }}
                            >
                              XT module short
                            </button>
                            <button
                              className={`mode-tab ${
                                currentSlotState.optionType ===
                                  'twinnedxtshortmodule' ||
                                currentSlotState.optionType === 'alley'
                                  ? 'active-module'
                                  : ''
                              }`}
                              onClick={() =>
                                updateCurrentSlot({
                                  optionType: 'twinnedxtshortmodule',
                                })
                              }
                              style={{
                                padding: '4px 10px',
                                fontSize: '0.75rem',
                              }}
                            >
                              2x XT module short
                            </button>
                          </div>
                        )}

                      {currentSlotState.active ? (
                        <>
                          <div
                            className="mode-selector-group"
                            style={{
                              display: 'inline-flex',
                              marginBottom: '12px',
                            }}
                          >
                            <button
                              className={`mode-tab ${
                                currentSlotState.mode === 'single'
                                  ? 'colour-tab'
                                  : ''
                              }`}
                              onClick={() =>
                                updateCurrentSlot({ mode: 'single' })
                              }
                            >
                              Single-Colour
                            </button>

                            {isDualColourSupported(
                              currentSlotState.optionType
                            ) && (
                              <button
                                className={`mode-tab ${
                                  currentSlotState.mode === 'dual'
                                    ? 'colour-tab'
                                    : ''
                                }`}
                                onClick={() =>
                                  updateCurrentSlot({ mode: 'dual' })
                                }
                              >
                                Dual-Colour
                              </button>
                            )}

                            {isTriColourSupported(
                              (console.log(
                                'Tri-colour optionType:',
                                currentSlotState.optionType
                              ),
                              currentSlotState.optionType)
                            ) && (
                              <button
                                className={`mode-tab ${
                                  currentSlotState.mode === 'tri'
                                    ? 'colour-tab'
                                    : ''
                                }`}
                                onClick={() =>
                                  updateCurrentSlot({
                                    mode: 'tri',
                                    tertiary:
                                      currentSlotState.tertiary ||
                                      getAllowedTertiaryColours(
                                        currentSlotState.primary,
                                        currentSlotState.secondary
                                      )[0] ||
                                      '',
                                  })
                                }
                              >
                                Tri-Colour
                              </button>
                            )}
                          </div>

                          <div
                            className="palette-section"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              marginTop: '4px',
                              width: '100%',
                            }}
                          >
                            <span
                              className="palette-label"
                              style={{ minWidth: '70px' }}
                            >
                              {currentSlotState.mode === 'single'
                                ? 'LED Colour:'
                                : 'Colour 1:'}
                            </span>
                            <div
                              className="palette-swatches"
                              style={{ display: 'flex', gap: '6px' }}
                            >
                              {ledOptions.map((l) => (
                                <button
                                  key={l.id}
                                  className={`palette-btn ${
                                    currentSlotState.primary === l.hex
                                      ? 'active-palette'
                                      : ''
                                  }`}
                                  style={{ background: l.hex }}
                                  onClick={() =>
                                    updateCurrentSlot({ primary: l.hex })
                                  }
                                  title={l.name}
                                />
                              ))}
                            </div>
                          </div>

                          {(currentSlotState.mode === 'dual' ||
                            currentSlotState.mode === 'tri') && (
                            <div
                              className="palette-section animate-fade"
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                marginTop: '10px',
                              }}
                            >
                              <span
                                className="palette-label"
                                style={{ minWidth: '70px' }}
                              >
                                Colour 2:
                              </span>
                              <div
                                className="palette-swatches"
                                style={{ display: 'flex', gap: '6px' }}
                              >
                                {ledOptions.map((l) => {
                                  const isAllowed = getAllowedSecondaryColours(
                                    currentSlotState.primary
                                  ).includes(l.hex);
                                  return (
                                    <button
                                      key={l.id}
                                      disabled={!isAllowed}
                                      className={`palette-btn ${
                                        currentSlotState.secondary === l.hex
                                          ? 'active-palette'
                                          : ''
                                      } ${!isAllowed ? 'disabled-swatch' : ''}`}
                                      style={{
                                        background: l.hex,
                                        opacity: isAllowed ? 1 : 0.2,
                                        cursor: isAllowed
                                          ? 'pointer'
                                          : 'not-allowed',
                                      }}
                                      onClick={() =>
                                        isAllowed &&
                                        updateCurrentSlot({ secondary: l.hex })
                                      }
                                      title={
                                        isAllowed
                                          ? l.name
                                          : `${l.name} (Already selected in Colour 1 or Colour 2)`
                                      }
                                    />
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          {currentSlotState.mode === 'tri' && (
                            <div
                              className="palette-section animate-fade"
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                marginTop: '10px',
                              }}
                            >
                              <span
                                className="palette-label"
                                style={{ minWidth: '70px' }}
                              >
                                Colour 3:
                              </span>
                              <div
                                className="palette-swatches"
                                style={{ display: 'flex', gap: '6px' }}
                              >
                                {ledOptions.map((l) => {
                                  const isAllowed = getAllowedTertiaryColours(
                                    currentSlotState.primary,
                                    currentSlotState.secondary
                                  ).includes(l.hex);

                                  return (
                                    <button
                                      key={l.id}
                                      disabled={!isAllowed}
                                      className={`palette-btn ${
                                        currentSlotState.tertiary === l.hex
                                          ? 'active-palette'
                                          : ''
                                      } ${!isAllowed ? 'disabled-swatch' : ''}`}
                                      style={{
                                        background: l.hex,
                                        opacity: isAllowed ? 1 : 0.2,
                                        cursor: isAllowed
                                          ? 'pointer'
                                          : 'not-allowed',
                                      }}
                                      onClick={() =>
                                        isAllowed &&
                                        updateCurrentSlot({ tertiary: l.hex })
                                      }
                                      title={
                                        isAllowed
                                          ? l.name
                                          : `${l.name} (Already selected in Colour 1 or Colour 2)`
                                      }
                                    />
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <div
                          style={{
                            color: '#64748b',
                            fontSize: '0.85rem',
                            fontStyle: 'italic',
                            padding: '10px 0',
                          }}
                        >
                          This inner module section is currently empty.
                        </div>
                      )}
                       <div>
                        <hr
                          style={{
                            border: 'none',
                            height: '1px',
                            backgroundColor: '#c1c1c1',
                            margin: '50px 0px',
                          }}
                        />
                      </div>
                       {!sl43Speaker && !sl43Sign && (
                        <div
                          style={{ marginBottom: '35px', marginTop: '25px' }}
                        >
                          <span
                            style={{
                              color: '#282828',
                              fontSize: '0.9rem',
                              fontWeight: '700',
                              display: 'block',
                              marginBottom: '20px',
                            }}
                          >
                            Centre Section Length:
                          </span>

                          <div
                            style={{
                              display: 'flex',
                              gap: '8px',
                              marginBottom: '16px',
                            }}
                          >
                            {['300mm', '220mm', '160mm'].map((size) => (
                              <button
                                key={size}
                                onClick={() => setSl43CentreType(size)}
                                className={`mode-tab ${
                                  sl43CentreType === size ? 'active-tab' : ''
                                }`}
                                style={{
                                  padding: '4px 10px',
                                  fontSize: '0.75rem',
                                }}
                              >
                                {size}
                              </button>
                            ))}
                          </div>

                          {(sl43CentreType === '300mm' ||
                            sl43CentreType === '220mm' ||
                            sl43CentreType === '160mm') && (
                            <div style={{ display: 'flex', gap: '8px' }}>
                              {['lens colour', 'clear', 'black'].map(
                                (colour) => {
                                  const isDisabled =
                                    colour === 'lens colour' &&
                                    rightLensColour !== '#ebebebD6';

                                  return (
                                    <button
                                      key={colour}
                                      disabled={isDisabled}
                                      onClick={() =>
                                        setSl43CentreColour(colour)
                                      }
                                      className={`mode-tab ${
                                        sl43CentreColour === colour
                                          ? 'active-tab'
                                          : ''
                                      }`}
                                      style={{
                                        padding: '4px 10px',
                                        fontSize: '0.75rem',
                                        cursor: isDisabled
                                          ? 'not-allowed'
                                          : 'pointer',
                                        opacity: isDisabled ? 0.5 : 1,
                                      }}
                                    >
                                      {colour === 'lens colour'
                                        ? 'Lens Colour'
                                        : colour === 'clear'
                                        ? 'Clear'
                                        : 'Black'}
                                    </button>
                                  );
                                }
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* SECTION SELECTOR & CONFIGURATION TOOLBAR */}
            {selectedLength === 'SL43' && openConfigSection === 'featured' && (
              <div
                className="palette-toolbar animate-fade"
                style={{
                  border: '0px solid #f5f5f5',
                  background: '#fff',
                  padding: '16px',
                  display: 'block',
                  marginTop: '0',
                  borderRadius: '0 0 8px 8px',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: '#353fad',
                    marginBottom: '5px',
                  }}
                >
                  Optional Equipment
                </div>
                <div
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: '400',
                    color: '#282828',
                    marginBottom: '20px',
                  }}
                >
                  If you require any additional options integrated into the
                  lightbar:
                </div>
                <div style={{ marginTop: '16px' }}>
                  <div style={{ marginBottom: '16px' }}>
                    <label
                      style={{
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        marginBottom: '8px',
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={sl43Siren}
                        disabled={
                          sl43ModuleLayout === 'beacon' ||
                          sl43ModuleLayout === 'vmirrors'
                        }
                        onChange={(e) => setSl43Siren(e.target.checked)}
                        style={{
                          accentColor: 'green',
                          width: '15px',
                          height: '15px',
                          cursor: 'pointer',
                        }}
                      />
                      <strong>Siren</strong>
                    </label>
                    {sl43Siren && (
                      <div
                        style={{
                          display: 'flex',
                          gap: '8px',
                          marginLeft: '28px',
                        }}
                      >
                        {['8-82613', '8-82415'].map((model) => (
                          <button
                            key={model}
                            onClick={() => setSl43SirenModel(model as any)}
                            className={`mode-tab ${
                              sl43SirenModel === model ? 'active-tab' : ''
                            }`}
                            style={{ padding: '4px 10px', fontSize: '0.8rem' }}
                          >
                            {model}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label
                      style={{
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={sl43ControlModule}
                        disabled={sl43ModuleLayout === 'vmirrors'}
                        onChange={(e) => setSl43ControlModule(e.target.checked)}
                        style={{
                          accentColor: 'green',
                          width: '15px',
                          height: '15px',
                          cursor: 'pointer',
                        }}
                      />
                      <strong>Control Module</strong>
                    </label>
                  </div>
                  <div style={{ marginBottom: '22px' }}>
                    <label
                      style={{
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={sl43AlleyLights}
                        disabled={
                          sl43ModuleLayout === 'beacon' ||
                          sl43ModuleLayout === 'vmirrors'
                        }
                        onChange={(e) => setSl43AlleyLights(e.target.checked)}
                        style={{
                          accentColor: 'green',
                          width: '15px',
                          height: '15px',
                          cursor: 'pointer',
                        }}
                      />
                      <strong>Alley Lights</strong>
                    </label>
                  </div>
                  <div
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      fontWeight: '400',
                      color: '#282828',
                      marginBottom: '20px',
                    }}
                  >
                    *Please be aware options listed above will depend on the
                    lightbar length and configurations that have already been
                    selected.
                  </div>
                </div>
              </div>
            )}
            <div className="step-footer-action">
              <div style={{ padding: '20px 0px 1px 0px' }}>
                <div
                  style={{
                    display: 'block',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: '#282828',
                    marginBottom: '10px',
                  }}
                >
                  Can't find the right configuration?
                </div>
                <div
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: '400',
                    color: '#282828',
                    marginBottom: '20px',
                  }}
                >
                  Contact our sales experts today, by emailing{' '}
                  <a href="mailto:sales@haztec.uk">sales@haztec.uk</a> or call
                  us on <a href="tel:+441132029115">+44 113 202 9115</a>, we'd
                  be happy to help.
                </div>
              </div>
            </div>

            <div
              className="step-footer-action button-group-row"
              style={{
                marginTop: '24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <button
                className="btn-secondary"
                onClick={() => setCurrentStage('exterior')}
              >
                Back to Lengths
              </button>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: '6px',
                }}
              >
                {selectedLength !== 'SL43' && !areCornersConfigured && (
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: '#ef4444',
                      fontWeight: 600,
                    }}
                  >
                    * Please select LED colours for all 4 Corner Modules (1–4)
                    to continue
                  </span>
                )}
                <button
                  className={`btn-primary btn-large ${
                    selectedLength !== 'SL43' && !areCornersConfigured
                      ? 'disabled'
                      : ''
                  }`}
                  onClick={() =>
                    (selectedLength === 'SL43' || areCornersConfigured) &&
                    setCurrentStage('form')
                  }
                  disabled={selectedLength !== 'SL43' && !areCornersConfigured}
                  style={{
                    opacity:
                      selectedLength === 'SL43' || areCornersConfigured
                        ? 1
                        : 0.5,
                    cursor:
                      selectedLength === 'SL43' || areCornersConfigured
                        ? 'pointer'
                        : 'not-allowed',
                  }}
                >
                  {selectedLength === 'SL43' || areCornersConfigured
                    ? 'Continue to Details'
                    : 'Configure Corners 1–4 to Continue'}
                </button>
              </div>
            </div>
          </section>
        )}

        {/* --- STEP 4: CUSTOMER DETAILS & SUMMARY --- */}
        {currentStage === 'form' && (
          <section className="step-card animate-fade">
            <h2 className="no-print">4. Customer Details & Summary</h2>
            <p className="subtext no-print">
              Review your configuration and enter your details below.
            </p>

            <div className="print-spec-sheet">
              <div className="print-header" style={{ display: 'none' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '2px solid #231f20',
                    paddingBottom: '8px',
                    marginBottom: '16px',
                    marginTop: '26px',
                  }}
                >
                  <img
                    src="/Haztec-logo.svg"
                    alt="Haztec Logo"
                    style={{ height: '28px', objectFit: 'contain' }}
                  />
                  <h1 style={{ fontSize: '20px', margin: 0 }}>
                    Lightbar Configuration Summary
                  </h1>
                </div>
              </div>

              <div
                className="summary-box"
                style={{
                  background: '#ffffff',
                  border: '1px solid #ddd',
                  padding: '16px',
                  borderRadius: '6px',
                  marginBottom: '20px',
                  textAlign: 'left',
                }}
              >
                {(formData.name ||
                  formData.company ||
                  formData.email ||
                  formData.phone ||
                  formData.country ||  
                  formData.quantity || 
                  formData.message) && (
                  <>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr',
                        gap: '8px',
                      }}
                    >
                      {formData.name && (
                        <div style={{ margin: '4px 0', fontSize: '14px' }}>
                          <strong>Name:</strong> {formData.name}
                        </div>
                      )}
                      {formData.company && (
                        <div style={{ margin: '4px 0', fontSize: '14px' }}>
                          <strong>Company:</strong> {formData.company}
                        </div>
                      )}
                      {formData.email && (
                        <div style={{ margin: '4px 0', fontSize: '14px' }}>
                          <strong>Email:</strong> {formData.email}
                        </div>
                      )}
                      {formData.phone && (
                        <div style={{ margin: '4px 0', fontSize: '14px' }}>
                          <strong>Phone:</strong> {formData.phone}
                        </div>
                      )}
                      {formData.quantity && (
                        <div style={{ margin: '4px 0', fontSize: '14px' }}>
                          <strong>Order Quantity:</strong> {formData.quantity}
                        </div>
                      )}
                    </div>
                    <hr
                      style={{
                        border: '0',
                        borderTop: '1px solid #cbd5e1',
                        margin: '12px 0',
                      }}
                    />
                  </>
                )}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                    alignItems: 'start',
                  }}
                >
                  {/* Left column: Configuration details */}
                  <div>
                    <div style={{ margin: '6px 0', fontSize: '14px' }}>
                      <strong>Model:</strong>{' '}
                      {lightbarModels.find((m) => m.id === selectedModel)?.name} (
                      {
                        currentLengthOptions.find((l) => l.id === selectedLength)?.dims
                      }
                      )
                    </div>

                    <div style={{ margin: '6px 0', fontSize: '14px' }}>
                      <strong>Outer Lens Colour:</strong>
                      <span
                        style={{
                          display: 'inline-block',
                          width: '12px',
                          height: '12px',
                          background: getLensColourHex(),
                          verticalAlign: 'middle',
                          borderRadius: '50%',
                          margin: '0 6px',
                          border: '1px solid #ccc',
                        }}
                      />
                      {lensOptions.find((l) => l.id === selectedLens)?.name}
                    </div>

                    {selectedModel === 'xl75' && (
                      <div style={{ margin: '6px 0', fontSize: '14px' }}>
                        <strong>Top Cover Colour:</strong>
                        <span
                          style={{
                            display: 'inline-block',
                            width: '12px',
                            height: '12px',
                            background: getTopCoverColourHex(),
                            verticalAlign: 'middle',
                            borderRadius: '50%',
                            margin: '0 6px',
                            border: '1px solid #ccc',
                          }}
                        />
                        {topcoverOptions.find((c) => c.id === selectedTopCover)?.name}
                      </div>
                    )}
                  </div>

  {/* Right column: More Information */}
  <div style={{ margin: '6px 0', fontSize: '13px' }}>
    {formData.message && (
      <>
        <strong>More Information:</strong>
        <br />
        <div style={{ marginTop: '4px', whiteSpace: 'pre-wrap' }}>
          {formData.message}
        </div>
      </>
    )}
  </div>
</div>
              </div>

              {/* Schematic Preview */}
              <div
                className="overhead-preview-container"
                style={{
                  margin: '20px 0',
                  background: '#ffffff',
                  border: '1px solid #ddd',
                  padding: '15px',
                  borderRadius: '6px',
                }}
              >
                <div
                  className="overhead-header"
                  style={{ marginBottom: '10px', textAlign: 'center' }}
                >
                </div>
                <div
                  className="lightbar-schematic-stage"
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  {selectedLength === '25' && (
                    <Minibar25
                      lensColour={getLensColourHex()}
                      topcoverColour={getTopCoverColourHex()}
                      slotData={slotData}
                      selectedSlotKey={0}
                      onSelectSlot={() => {}}
                    />
                  )}
                  {selectedLength === 'XL7528' && (
                    <XL7528
                      lensColour={getLensColourHex()}
                      topcoverColour={getTopCoverColourHex()}
                      slotData={slotData}
                      selectedSlotKey={0}
                      onSelectSlot={() => {}}
                    />
                  )}
                  {selectedLength === 'XL7544' && (
                    <XL7544
                      lensColour={getLensColourHex()}
                      topcoverColour={getTopCoverColourHex()}
                      slotData={slotData}
                      selectedSlotKey={0}
                      onSelectSlot={() => {}}
                    />
                  )}
                  {selectedLength === 'XL7574' && (
                    <XL7574
                      lensColour={getLensColourHex()}
                      topcoverColour={getTopCoverColourHex()}
                      slotData={slotData}
                      selectedSlotKey={0}
                      onSelectSlot={() => {}}
                    />
                  )}
                  {selectedLength === 'XL7568' && (
                    <XL7568
                      lensColour={getLensColourHex()}
                      topcoverColour={getTopCoverColourHex()}
                      slotData={slotData}
                      selectedSlotKey={0}
                      onSelectSlot={() => {}}
                    />
                  )}
                  {selectedLength === 'XL7561' && (
                    <XL7561
                      lensColour={getLensColourHex()}
                      topcoverColour={getTopCoverColourHex()}
                      slotData={slotData}
                      selectedSlotKey={0}
                      onSelectSlot={() => {}}
                    />
                  )}
                {selectedLength === 'SL43' && (
                  <SL43
                    lensColour={getLensColourHex()}
                    speakerSelected={sl43Speaker}
                    signSelected={sl43Sign}
                    signSize={sl43SignSize}
                    signColour={sl43SignColour}
                    signText={sl43SignText}
                    sirenSelected={sl43Siren}
                    sirenModel={sl43SirenModel}
                    controlModuleSelected={sl43ControlModule}
                    dividerColour={sl43DividerColour}
                    centreSectionType={sl43CentreType}
                    moduleLayout={sl43ModuleLayout}
                    selectedModel={selectedModel ?? undefined}
                    rightLensColour={rightLensColour}
                    splitLensEnabled={splitLensEnabled}
                    centreColour={sl43CentreColour}
                    slotData={slotData}
                    selectedSlotKey={selectedSlotNumber}
                    onSelectSlot={handleSelectSlot}
                    innerModuleRequest={sl43InnerModuleRequest}
                    removeInnerModuleRequest={sl43RemoveInnerRequest}
                    onAddInnerModule={handleAddSL43InnerModule}
                    onRemoveInnerModule={handleRemoveSL43InnerModule}
                    innerModulePositions={sl43InnerModulePositions}
                    onInnerModulePositionsChange={setSl43InnerModulePositions}
                    onInnerModuleRequestHandled={() => setSl43InnerModuleRequest(null)}
                    manageInnerModules={false}
                    detailsComponentsView
                  />
                )}
                </div>
              </div>
            </div>

            {/* Customer Form */}
            <div
              className="form-group no-print"
              style={{
                background: '#f8fafc',
                padding: '20px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                marginBottom: '24px',
                textAlign: 'left',
              }}
            >
              <h3 style={{ margin: '0 0 16px 0', fontSize: '1rem' }}>
                Your Information
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                    }}
                  >
                    <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      style={{
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #cbd5e1',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                    }}
                  >
                    <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      style={{
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #cbd5e1',
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                    }}
                  >
                    <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #cbd5e1',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                    }}
                  >
                    <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #cbd5e1',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                    }}
                  >
                    <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                      Country:
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      style={{
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #cbd5e1',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                    }}
                  >
                    <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                      Order Quantity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      style={{
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #cbd5e1',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      width: '100%',
                    }}
                  >
                    <label style={{ fontSize: '0.85rem', fontWeight: '600' }}>
                      More information
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      style={{
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #cbd5e1',
                        fontFamily: 'inherit',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              className="step-footer-action button-group-row no-print"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <button
                className="btn-secondary"
                onClick={() => setCurrentStage('modules')}
              >
                Back to Modules
              </button>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: '6px',
                }}
              >
                {!isFormValid && (
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: '#ef4444',
                      fontWeight: 600,
                    }}
                  >
                    * Please fill in your Name and Email to proceed
                  </span>
                )}
                <button
                  className={`btn-primary btn-large ${
                    !isFormValid ? 'disabled' : ''
                  }`}
                  onClick={() => isFormValid && setShowNextStepsModal(true)}
                  disabled={!isFormValid}
                  style={{
                    background: '#10b981',
                    borderColor: '#10b981',
                    opacity: isFormValid ? 1 : 0.5,
                    cursor: isFormValid ? 'pointer' : 'not-allowed',
                  }}
                >
                  Complete Configuration
                </button>
              </div>
            </div>

            {/* NEXT STEPS MODAL */}
            {showNextStepsModal && (
              <div
                className="modal-overlay no-print"
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(15, 23, 42, 0.75)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 1000,
                  padding: '24px',
                }}
              >
                <div
                  className="modal-card animate-fade"
                  style={{
                    background: '#ffffff',
                    width: '100%',
                    maxWidth: '640px',
                    borderRadius: '12px',
                    padding: '48px',
                    boxShadow:
                      '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
                    position: 'relative',
                  }}
                >
                  <button
                    onClick={() => setShowNextStepsModal(false)}
                    style={{
                      position: 'absolute',
                      top: '18px',
                      right: '18px',
                      background: 'none',
                      border: 'none',
                      fontSize: '22px',
                      cursor: 'pointer',
                      color: '#64748b',
                    }}
                  >
                    ×
                  </button>

                  <h2
                    style={{
                      margin: '0 0 6px 0',
                      fontSize: '1.35rem',
                      color: '#0f172a',
                    }}
                  >
                    Configuration Ready
                  </h2>
                  <p
                    style={{
                      margin: '0 0 20px 0',
                      fontSize: '0.9rem',
                      color: '#64748b',
                    }}
                  >
                    Your specification summary has been compiled successfully.
                  </p>

                  <div
                    style={{
                      background: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      borderRadius: '8px',
                      padding: '20px 20px',
                      textAlign: 'left',
                      margin: '30px 0px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        marginBottom: '14px',
                      }}
                    >
                      <div>
                        <strong
                          style={{
                            fontSize: '1.1rem',
                            color: '#0f172a',
                            display: 'block',
                            marginBottom: '20px',
                          }}
                        >
                          Save & Email Haztec Your Configuration
                        </strong>
                        <p
                          style={{
                            margin: 0,
                            fontSize: '0.825rem',
                            color: '#475569',
                            lineHeight: 1.4,
                          }}
                        >
                          Save your lightbar configuration as a PDF and send over to our expert team to review.
                        </p>
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginTop: '12px',
                      }}
                    >
                      <button
                        onClick={handleTriggerPrint}
                        style={{
                          flex: 1,
                          padding: '10px 14px',
                          background: '#353fad',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '6px',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                        }}
                      >
                        🖨 Save as PDF
                      </button>

                      <span
                        style={{
                          fontSize: '1.1rem',
                          color: '#64748b',
                          fontWeight: 'bold',
                        }}
                      >
                        ➔
                      </span>

                      <button
                        onClick={() => handleSendEmail('quote')}
                        style={{
                          flex: 1,
                          padding: '10px 14px',
                          background: '#353fad',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '6px',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                        }}
                      >
                        ✉️ Email Us
                      </button>
                    </div>
                  </div>

                  <div style={{ textAlign: 'left' }}>
                    <div
                      style={{
                        display: 'flex',
                        gap: '24px',
                        alignItems: 'center',
                        fontSize: '0.875rem',
                        color: '#334155',
                      }}
                    >
                      <a
                        href="mailto:sales@haztec.uk"
                        style={{
                          textDecoration: 'none',
                          color: '#2563eb',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        ✉️ sales@haztec.uk
                      </a>
                      <span style={{ color: '#cbd5e1' }}>|</span>
                      <a
                        href="tel:+441132029115"
                        style={{
                          textDecoration: 'none',
                          color: '#2563eb',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        📞 +44 (0)113 202 9115
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
            <p className="subtext">
              Thank you, {formData.name || 'Customer'}. Your custom build
              specification has been submitted successfully.
            </p>

            <button
              className="btn-primary"
              onClick={() => {
                setCurrentStage('model');
                setSelectedModel('xl75');
                setSelectedLength(null);
                setFormData({ name: '', company: '', email: '', phone: '', message: '', quantity: '', country: '', });
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
