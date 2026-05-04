import { useState, useEffect, useCallback } from 'react';

interface TimerState {
  timeRemaining: number | null;
  totalTimeElapsed: number;
  isRunning: boolean;
}

interface TimerActions {
  start: (totalSeconds?: number) => void;
  pause: () => void;
  resume: () => void;
  reset: () => void;
  stop: () => void;
}

export function useTimer(initialTime?: number): [TimerState, TimerActions] {
  const [timeRemaining, setTimeRemaining] = useState<number | null>(initialTime ?? null);
  const [totalTimeElapsed, setTotalTimeElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isRunning) {
      interval = setInterval(() => {
        setTotalTimeElapsed(prev => prev + 1);
        if (timeRemaining !== null && timeRemaining > 0) {
          setTimeRemaining(prev => (prev || 0) - 1);
        }
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeRemaining]);

  const start = useCallback((totalSeconds?: number) => {
    if (totalSeconds !== undefined) {
      setTimeRemaining(totalSeconds);
    }
    setTotalTimeElapsed(0);
    setIsRunning(true);
  }, []);

  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);

  const resume = useCallback(() => {
    setIsRunning(true);
  }, []);

  const reset = useCallback(() => {
    setIsRunning(false);
    setTimeRemaining(initialTime ?? null);
    setTotalTimeElapsed(0);
  }, [initialTime]);

  const stop = useCallback(() => {
    setIsRunning(false);
  }, []);

  return [
    { timeRemaining, totalTimeElapsed, isRunning },
    { start, pause, resume, reset, stop }
  ];
}

// Format time helper
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}
