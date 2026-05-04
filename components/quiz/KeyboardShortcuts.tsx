'use client';

import React, { memo } from 'react';
import { Keyboard, X } from 'lucide-react';

interface KeyboardShortcutsProps {
  onClose: () => void;
  colors: {
    cardBg: string;
    border: string;
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    hoverBg: string;
    pageBg: string;
  };
}

const KeyboardShortcuts = memo(function KeyboardShortcuts({
  onClose,
  colors
}: KeyboardShortcutsProps) {
  const shortcuts = [
    { keys: ['1', '2', '3', '4'], description: 'Select answer A, B, C, D' },
    { keys: ['Enter'], description: 'Submit / Next question' },
    { keys: ['←', '→'], description: 'Previous / Next question' },
    { keys: ['F'], description: 'Flag current question' },
    { keys: ['E'], description: 'Show explanation' },
    { keys: ['L'], description: 'Open question list' },
    { keys: ['N'], description: 'Open notes' },
    { keys: ['C'], description: 'Open calculator' },
    { keys: ['H'], description: 'Go to home' },
    { keys: ['?'], description: 'Show keyboard shortcuts' },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className={`${colors.cardBg} rounded-xl shadow-2xl p-6 max-w-md w-full mx-4`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className={`font-semibold ${colors.textPrimary} flex items-center gap-2`}>
            <Keyboard className="w-5 h-5 text-[#0078d4]" />
            Keyboard Shortcuts
          </h3>
          <button
            onClick={onClose}
            className={`${colors.textSecondary} ${colors.hoverBg} p-2 rounded-lg`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="space-y-2">
          {shortcuts.map((shortcut, index) => (
            <div 
              key={index}
              className={`flex items-center justify-between py-2 ${
                index < shortcuts.length - 1 ? `border-b ${colors.border}` : ''
              }`}
            >
              <span className={`text-sm ${colors.textSecondary}`}>
                {shortcut.description}
              </span>
              <div className="flex gap-1">
                {shortcut.keys.map((key, keyIndex) => (
                  <React.Fragment key={key}>
                    <kbd className={`px-2 py-1 text-xs ${colors.pageBg} border ${colors.border} rounded ${colors.textPrimary} font-mono`}>
                      {key}
                    </kbd>
                    {keyIndex < shortcut.keys.length - 1 && (
                      <span className={colors.textMuted}>/</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <p className={`mt-4 text-xs ${colors.textMuted} text-center`}>
          Press <kbd className={`px-1 ${colors.pageBg} border ${colors.border} rounded text-xs`}>Esc</kbd> to close
        </p>
      </div>
    </div>
  );
});

export default KeyboardShortcuts;
