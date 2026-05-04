import { useState, useCallback } from 'react';

interface CalculatorState {
  display: string;
}

interface CalculatorActions {
  input: (value: string) => void;
  clear: () => void;
  setOperator: (op: string) => void;
  calculate: () => void;
  backspace: () => void;
}

export function useCalculator(): [CalculatorState, CalculatorActions] {
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState<number | null>(null);
  const [operator, setOperatorState] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const input = useCallback((value: string) => {
    if (waitingForOperand) {
      setDisplay(value);
      setWaitingForOperand(false);
    } else {
      setDisplay(prev => prev === '0' ? value : prev + value);
    }
  }, [waitingForOperand]);

  const clear = useCallback(() => {
    setDisplay('0');
    setPrevValue(null);
    setOperatorState(null);
    setWaitingForOperand(false);
  }, []);

  const setOperator = useCallback((op: string) => {
    const current = parseFloat(display);
    
    if (prevValue !== null && operator && !waitingForOperand) {
      // Calculate first if chaining operations
      let result = 0;
      switch (operator) {
        case '+': result = prevValue + current; break;
        case '-': result = prevValue - current; break;
        case '*': result = prevValue * current; break;
        case '/': result = current !== 0 ? prevValue / current : 0; break;
      }
      setDisplay(String(result));
      setPrevValue(result);
    } else {
      setPrevValue(current);
    }
    
    setOperatorState(op);
    setWaitingForOperand(true);
  }, [display, prevValue, operator, waitingForOperand]);

  const calculate = useCallback(() => {
    if (prevValue === null || operator === null) return;
    
    const current = parseFloat(display);
    let result = 0;
    
    switch (operator) {
      case '+': result = prevValue + current; break;
      case '-': result = prevValue - current; break;
      case '*': result = prevValue * current; break;
      case '/': result = current !== 0 ? prevValue / current : 0; break;
    }
    
    setDisplay(String(result));
    setPrevValue(null);
    setOperatorState(null);
    setWaitingForOperand(true);
  }, [display, prevValue, operator]);

  const backspace = useCallback(() => {
    setDisplay(prev => prev.length > 1 ? prev.slice(0, -1) : '0');
  }, []);

  return [
    { display },
    { input, clear, setOperator, calculate, backspace }
  ];
}
