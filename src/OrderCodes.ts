export const getColorLetter = (hex: string): string => {
  switch (hex?.toLowerCase()) {
    case '#fac943': return 'A'; // Amber
    case '#3b82f6': return 'B'; // Blue
    case '#10b981': return 'G'; // Green
    case '#ef4444': return 'R'; // Red
    case '#ffffff': return 'W'; // White
    default: return 'A';
  }
};

export const DUAL_ORDER_CODES: Record<string, string> = {
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

export const TRI_ORDER_CODES: Record<string, string> = {
  'ABR': '98-10903-ABR', 'ABG': '98-10903-ABG', 'ABW': '98-10903-ABW',
  'ARB': '98-10903-ARB', 'ARG': '98-10903-ARG', 'ARW': '98-10903-ARW',
  'AGB': '98-10903-AGB', 'AGR': '98-10903-AGR', 'AGW': '98-10903-AGW',
  'AWB': '98-10903-AWB', 'AWR': '98-10903-AWR', 'AWG': '98-10903-AWG',
  'BAR': '98-10903-BAR', 'BAG': '98-10903-BAG', 'BAW': '98-10903-BAW',
  'BRA': '98-10903-BRA', 'BRG': '98-10903-BRG', 'BRW': '98-10903-BRW',
  'BGA': '98-10903-BGA', 'BGR': '98-10903-BGR', 'BGW': '98-10903-BGW',
  'BWA': '98-10903-BWA', 'BWR': '98-10903-BWR', 'BWG': '98-10903-BWG',
  'RAB': '98-10903-RAB', 'RAG': '98-10903-RAG', 'RAW': '98-10903-RAW',
  'RBA': '98-10903-RBA', 'RBG': '98-10903-RBG', 'RBW': '98-10903-RBW',
  'RGA': '98-10903-RGA', 'RGB': '98-10903-RGB', 'RGW': '98-10903-RGW',
  'RWA': '98-10903-RWA', 'RWB': '98-10903-RWB', 'RWG': '98-10903-RWG',
  'GAB': '98-10903-GAB', 'GAR': '98-10903-GAR', 'GAW': '98-10903-GAW',
  'GBA': '98-10903-GBA', 'GBR': '98-10903-GBR', 'GBW': '98-10903-GBW',
  'GRA': '98-10903-GRA', 'GRB': '98-10903-GRB', 'GRW': '98-10903-GRW',
};

export interface SlotStateForOrder {
  active: boolean;
  mode: string;
  primary: string;
  secondary?: string;
  tertiary?: string;
  optionType?: string;
}

// --- MODEL & POSITION-AWARE PREFIX RESOLVER ---
const getModulePrefix = (slotNumber: number, model: string | null, optionType?: string, mode?: string): string => {
  const isCorner = slotNumber >= 1 && slotNumber <= 4;
  const modelKey = (model || 'xl75').toLowerCase();

  // 1. CORNER MODULES (Slots 1–4 vary by model family)
  if (isCorner) {
    if (modelKey === 'xpert') {
      // Example prefix differences for high-profile Xpert corners
      if (mode === 'dual') return '98-20902';
      if (mode === 'tri') return '98-20903';
      return '98-20901';
    }
    
    // Default XL75 / Standard Corners
    if (mode === 'dual') return '98-10902';
    if (mode === 'tri') return '98-10903';
    return '98-10901';
  }

  // 2. INNER MODULES (Slots 5+ depend on optionType tags)
  const lowerTag = (optionType || '').toLowerCase();
  if (lowerTag.includes('short')) {
    return mode === 'dual' ? '98-10706' : '98-10603';
  }
  
  if (lowerTag.includes('twinned')) {
    return mode === 'dual' ? '2x 98-10706' : '2x 98-10603';
  }

  // Default Long Inner Modules
  if (mode === 'dual') return '98-10712';
  if (mode === 'tri') return '98-10818';
  return '98-10606';
};

// --- UNIVERSAL ORDER CODE GENERATOR ---
export const getModuleOrderCode = (slotNumber: number, slot: SlotStateForOrder, selectedModel: string | null): string => {
  if (!slot || slot.active === false) return 'N/A (Empty)';

  const c1 = getColorLetter(slot.primary);
  const prefix = getModulePrefix(slotNumber, selectedModel, slot.optionType, slot.mode);
  const isCorner = slotNumber >= 1 && slotNumber <= 4;

  if (slot.mode === 'single') {
    return `${prefix}-${c1}`;
  } 
  
  if (slot.mode === 'dual') {
    const c2 = getColorLetter(slot.secondary || '');
    const combo = `${c1}${c2}`;
    if (isCorner) {
      return DUAL_ORDER_CODES[combo] || `${prefix}-${combo}`;
    }
    return `${prefix}-${combo}`;
  } 
  
  if (slot.mode === 'tri') {
    const c2 = getColorLetter(slot.secondary || '');
    const c3 = getColorLetter(slot.tertiary || '');
    const combo = `${c1}${c2}${c3}`;
    if (isCorner) {
      return TRI_ORDER_CODES[combo] || `${prefix}-${combo}`;
    }
    return `${prefix}-${combo}`;
  }

  return `${prefix}-${c1}`;
};
