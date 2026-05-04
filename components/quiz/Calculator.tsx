'use client';

import React, { memo } from 'react';
import { Calculator as CalcIcon, X, Delete } from 'lucide-react';

interface CalculatorProps {
  display: string;
  onInput: (value: string) => void;
  onClear: () => void;
  onSetOperator: (op: string) => void;
  onCalculate: () => void;
  onClose: () => void;
  colors: {
    cardBg: string;
    border: string;
    textPrimary: string;
    textSecondary: string;
    hoverBg: string;
  };
}

const Calculator = memo(function Calculator({
  display,
  onInput,
  onClear,
  onSetOperator,
  onCalculate,
  onClose,
  colors
}: CalculatorProps) {
  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+']
  ];

  const handleClick = (btn: string) => {
    if (btn === '=') {
      onCalculate();
    } else if (['+', '-', '*', '/'].includes(btn)) {
      onSetOperator(btn);
    } else {
      onInput(btn);
    }
  };

  return (
    <div className={`absolute top-12 right-0 ${colors.cardBg} border ${colors.border} rounded-lg shadow-xl p-3 z-50 w-56`}>
      <div className="flex justify-between items-center mb-2">
        <span className={`text-sm font-medium ${colors.textPrimary} flex items-center gap-1`}>
          <CalcIcon className="w-4 h-4" />
          Calculator
        </span>
        <button 
          onClick={onClose}
          className={`${colors.textSecondary} ${colors.hoverBg} p-1 rounded`}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      <div className={`${colors.cardBg} border ${colors.border} rounded p-2 mb-2 text-right font-mono text-lg ${colors.textPrimary}`}>
        {display}
      </div>
      
      <div className="flex gap-1 mb-2">
        <button
          onClick={onClear}
          className="flex-1 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded"
        >
          C
        </button>
        <button
          onClick={() => {
            // Backspace - remove last character
            if (display.length > 1) {
              onInput(display.slice(0, -1));
            } else {
              onClear();
            }
          }}
          className={`flex-1 py-1 text-sm ${colors.hoverBg} ${colors.textPrimary} border ${colors.border} rounded flex items-center justify-center`}
        >
          <Delete className="w-4 h-4" />
        </button>
      </div>
      
      <div className="grid gap-1">
        {buttons.map((row, i) => (
          <div key={i} className="grid grid-cols-4 gap-1">
            {row.map((btn) => (
              <button
                key={btn}
                onClick={() => handleClick(btn)}
                className={`py-2 text-sm rounded ${
                  ['+', '-', '*', '/', '='].includes(btn)
                    ? 'bg-[#0078d4] hover:bg-[#106ebe] text-white'
                    : `${colors.hoverBg} ${colors.textPrimary} border ${colors.border}`
                }`}
              >
                {btn}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Calculator;
