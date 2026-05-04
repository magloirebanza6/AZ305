import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';
type ColorBlindMode = 'none' | 'deuteranopia' | 'protanopia' | 'tritanopia';

interface ThemeState {
  theme: Theme;
  colorBlindMode: ColorBlindMode;
  focusToolsEnabled: boolean;
}

interface ThemeActions {
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  setColorBlindMode: (mode: ColorBlindMode) => void;
  setFocusToolsEnabled: (enabled: boolean) => void;
}

const STORAGE_KEYS = {
  theme: 'az305-theme',
  colorBlind: 'az305-colorblind',
  focusTools: 'az305-focustools',
} as const;

export function useTheme(): [ThemeState, ThemeActions, boolean] {
  const [mounted, setMounted] = useState(false);
  const [theme, setThemeState] = useState<Theme>('light');
  const [colorBlindMode, setColorBlindModeState] = useState<ColorBlindMode>('none');
  const [focusToolsEnabled, setFocusToolsEnabledState] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem(STORAGE_KEYS.theme) as Theme;
    if (savedTheme) setThemeState(savedTheme);
    const savedColorBlind = localStorage.getItem(STORAGE_KEYS.colorBlind) as ColorBlindMode;
    if (savedColorBlind) setColorBlindModeState(savedColorBlind);
    const savedFocusTools = localStorage.getItem(STORAGE_KEYS.focusTools);
    if (savedFocusTools === 'true') setFocusToolsEnabledState(true);
  }, []);

  // Save theme
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEYS.theme, theme);
    }
  }, [theme, mounted]);

  // Save color blind mode
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEYS.colorBlind, colorBlindMode);
    }
  }, [colorBlindMode, mounted]);

  // Save focus tools
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEYS.focusTools, focusToolsEnabled.toString());
    }
  }, [focusToolsEnabled, mounted]);

  const toggleTheme = useCallback(() => {
    setThemeState(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  const setColorBlindMode = useCallback((mode: ColorBlindMode) => {
    setColorBlindModeState(mode);
  }, []);

  const setFocusToolsEnabled = useCallback((enabled: boolean) => {
    setFocusToolsEnabledState(enabled);
  }, []);

  return [
    { theme, colorBlindMode, focusToolsEnabled },
    { toggleTheme, setTheme, setColorBlindMode, setFocusToolsEnabled },
    mounted
  ];
}

// Generate theme-aware colors
export function getThemeColors(theme: Theme, colorBlindMode: ColorBlindMode) {
  const statusColors = getStatusColors(theme, colorBlindMode);
  
  return {
    // Backgrounds
    pageBg: theme === 'dark' ? 'bg-[#1b1b1b]' : 'bg-[#f3f2f1]',
    cardBg: theme === 'dark' ? 'bg-[#2d2d2d]' : 'bg-white',
    headerBg: theme === 'dark' ? 'bg-[#1f1f1f]' : 'bg-white',
    heroBg: theme === 'dark' ? 'bg-gradient-to-r from-[#0063b1] to-[#004578]' : 'bg-gradient-to-r from-[#0078d4] to-[#005a9e]',
    // Text
    textPrimary: theme === 'dark' ? 'text-[#ffffff]' : 'text-[#323130]',
    textSecondary: theme === 'dark' ? 'text-[#a0a0a0]' : 'text-[#605e5c]',
    textMuted: theme === 'dark' ? 'text-[#888888]' : 'text-[#a19f9d]',
    // Borders
    border: theme === 'dark' ? 'border-[#404040]' : 'border-gray-200',
    borderLight: theme === 'dark' ? 'border-[#333333]' : 'border-gray-300',
    // Interactive
    hoverBg: theme === 'dark' ? 'hover:bg-[#3d3d3d]' : 'hover:bg-gray-50',
    selectedBg: theme === 'dark' ? 'bg-[#0063b1]/30' : 'bg-[#eff6fc]',
    // Status colors
    ...statusColors,
    warningBg: theme === 'dark' ? 'bg-[#3b2e0e]' : 'bg-[#fff4ce]',
    warningBorder: 'border-[#ffb900]',
    // Info/highlight
    infoBg: theme === 'dark' ? 'bg-[#0a2540]' : 'bg-[#eff6fc]',
    infoBorder: theme === 'dark' ? 'border-[#0078d4]/40' : 'border-[#0078d4]/20',
  };
}

function getStatusColors(theme: Theme, colorBlindMode: ColorBlindMode) {
  switch (colorBlindMode) {
    case 'deuteranopia':
      return {
        successBg: theme === 'dark' ? 'bg-[#1a4a7a]' : 'bg-[#cce5ff]',
        successBorder: 'border-[#0066cc]',
        successText: 'text-[#0066cc]',
        successRaw: '#0066cc',
        successBgRaw: theme === 'dark' ? '#1a4a7a' : '#cce5ff',
        errorBg: theme === 'dark' ? 'bg-[#5c3d1e]' : 'bg-[#ffe4c4]',
        errorBorder: 'border-[#ff8c00]',
        errorText: 'text-[#ff8c00]',
        errorRaw: '#ff8c00',
        errorBgRaw: theme === 'dark' ? '#5c3d1e' : '#ffe4c4',
      };
    case 'protanopia':
      return {
        successBg: theme === 'dark' ? 'bg-[#1a4a7a]' : 'bg-[#cce5ff]',
        successBorder: 'border-[#0077cc]',
        successText: 'text-[#0077cc]',
        successRaw: '#0077cc',
        successBgRaw: theme === 'dark' ? '#1a4a7a' : '#cce5ff',
        errorBg: theme === 'dark' ? 'bg-[#5c5c1e]' : 'bg-[#ffff99]',
        errorBorder: 'border-[#ccaa00]',
        errorText: 'text-[#aa8800]',
        errorRaw: '#ccaa00',
        errorBgRaw: theme === 'dark' ? '#5c5c1e' : '#ffff99',
      };
    case 'tritanopia':
      return {
        successBg: theme === 'dark' ? 'bg-[#1a5050]' : 'bg-[#ccffff]',
        successBorder: 'border-[#00cccc]',
        successText: 'text-[#00aaaa]',
        successRaw: '#00cccc',
        successBgRaw: theme === 'dark' ? '#1a5050' : '#ccffff',
        errorBg: theme === 'dark' ? 'bg-[#5c1a4a]' : 'bg-[#ffccee]',
        errorBorder: 'border-[#cc0077]',
        errorText: 'text-[#cc0077]',
        errorRaw: '#cc0077',
        errorBgRaw: theme === 'dark' ? '#5c1a4a' : '#ffccee',
      };
    default:
      return {
        successBg: theme === 'dark' ? 'bg-[#0e3b0e]' : 'bg-[#dff6dd]',
        successBorder: 'border-[#107c10]',
        successText: 'text-[#107c10]',
        successRaw: '#107c10',
        successBgRaw: theme === 'dark' ? '#0e3b0e' : '#dff6dd',
        errorBg: theme === 'dark' ? 'bg-[#3b0e0e]' : 'bg-[#fde7e9]',
        errorBorder: 'border-[#d13438]',
        errorText: 'text-[#d13438]',
        errorRaw: '#d13438',
        errorBgRaw: theme === 'dark' ? '#3b0e0e' : '#fde7e9',
      };
  }
}

export type { Theme, ColorBlindMode };
