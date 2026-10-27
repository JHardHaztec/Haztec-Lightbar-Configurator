
export type LightbarFamily =
| 'XL75'
| 'XpertSL'
| 'Xpert'
| 'XpertSLX'
| 'XpertDX'
| 'Xpress'
| 'XpertSLE';

export type ColourMode = 'single' | 'dual' | 'tri';

export const FAMILY_PREFIXES: Record<LightbarFamily, string> = {
XL75: '98',
XpertSL: '99',
Xpert: '96',
XpertSLX: '100',
XpertDX: '97',
Xpress: '91',
XpertSLE: '89',
};

const NORMALISED_FAMILIES: Record<string, LightbarFamily> = {
xl75: 'XL75',
xpertsl: 'XpertSL',
sl: 'XpertSL',
xpert: 'Xpert',
xpertslx: 'XpertSLX',
xpertdx: 'XpertDX',
xpress: 'Xpress',
xpertsle: 'XpertSLE',
};

export const getColorLetter = (hex: string): string => {
const colours: Record<string, string> = {
  '#f0a926': 'A',
  '#3b82f6': 'B',
  '#10b981': 'G',
  '#ef4444': 'R',
  '#ffffff': 'W',
};

return colours[hex?.toLowerCase()] ?? '';
};

export const DUAL_ORDER_CODES: Record<string, string> = {};
export const TRI_ORDER_CODES: Record<string, string> = {};

export interface SlotStateForOrder {
active: boolean;
mode: string;
primary: string;
secondary?: string;
tertiary?: string;
optionType?: string;
}

const getFamily = (model: string | null): LightbarFamily | null => {
const key = (model || '')
  .toLowerCase()
  .replace(/[\s_-]/g, '');

return NORMALISED_FAMILIES[key] ?? null;
};

const getSortedColours = (slot: SlotStateForOrder): string | null => {
const mode = slot.mode.toLowerCase();

const hexes =
  mode === 'single'
    ? [slot.primary]
    : mode === 'dual'
      ? [slot.primary, slot.secondary]
      : mode === 'tri'
        ? [slot.primary, slot.secondary, slot.tertiary]
        : [];

if (!hexes.length || hexes.some(hex => !hex)) return null;

const letters = hexes.map(hex => getColorLetter(hex!));

if (letters.some(letter => !letter)) return null;

return letters.sort().join('');
};

const is9_3751 = (optionType?: string): boolean => {
const type = (optionType || '').toLowerCase();

return (
  type.includes('9-3751') ||
  type.includes('9 3751') ||
  type.includes('beacon') ||
  type.includes('vmirrors')
);
};

const isXT = (optionType?: string): boolean => {
  const type = (optionType || '')
    .toLowerCase()
    .replace(/module$/, '');

  return type === 'xtshort' || type === 'xtlong';
};

const getXTInnerCode = (
family: LightbarFamily,
optionType: string,
mode: string,
colours: string,
): string | null => {
if (family !== 'XL75' && family !== 'XpertSL') return null;

const variant = optionType.toLowerCase().replace(/module$/, '');
let productNumber: string;

if (variant === 'xtshort') {
  if (mode === 'single') productNumber = '10603';
  else if (mode === 'dual') productNumber = '10706';
  else return null;
} else if (variant === 'xtlong') {
  if (mode === 'single') productNumber = '10606';
  else if (mode === 'dual') productNumber = '10712';
  else if (mode === 'tri') productNumber = '10818';
  else return null;
} else {
  return null;
}

return `${FAMILY_PREFIXES[family]}-${productNumber}-${colours}`;
};

const getXTCornerCode = (
  family: LightbarFamily,
  colours: string,
): string | null => {
  if (family === 'XpertSL') {
    return `${FAMILY_PREFIXES.XpertSL}-10601-${colours}`;
  }

  if (family === 'XL75') {
    return `${FAMILY_PREFIXES.XL75}-10901-${colours}`;
  }

  return null;
};

export const getModuleOrderCode = (
  slotNumber: number | string,
  slot: SlotStateForOrder,
  selectedModel: string | null,
): string => {
if (!slot || !slot.active) return 'N/A (Empty)';

const family = getFamily(selectedModel);

if (!family) return 'N/A (Unknown lightbar family)';

const mode = slot.mode.toLowerCase();

if (!['single', 'dual', 'tri'].includes(mode)) {
  return 'N/A (Unknown colour mode)';
}

const colours = getSortedColours(slot);

if (!colours) return 'N/A';

const optionType = (slot.optionType || '').toLowerCase();
const isCorner =
  ['C1', 'C2', 'C3', 'C4'].includes(String(slotNumber).toUpperCase());

// 9-3751 modules use the family prefix and selected colour letters.
if (is9_3751(optionType)) {
  if (family === 'XL75') {
    return 'N/A (9-3751 unavailable on XL75)';
  }

  // Only single-colour 9-3751 codes are confirmed so far.
  if (mode !== 'single') {
    return 'N/A (Unconfirmed 9-3751 colour mode)';
  }

  return `${FAMILY_PREFIXES[family]}-3751-${colours}`;
}

// XT/XTX corner modules have family-specific product numbers.
if (isCorner) {
  if (
    optionType !== 'corners' &&
    optionType !== 'xtlongmodule' &&
    optionType !== 'xtshortmodule' &&
    optionType !== 'xtlong' &&
    optionType !== 'xtshort'
  ) {
    return 'N/A';
  }

  const code = getXTCornerCode(family, colours);

  return code ?? 'N/A';
}

// XT inner modules.
if (isXT(optionType)) {
  const code = getXTInnerCode(family, optionType, mode, colours);

  return code ?? 'N/A (Unsupported XT configuration)';
}

return 'N/A (Order code not configured)';
};
