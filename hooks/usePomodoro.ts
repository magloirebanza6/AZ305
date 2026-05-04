import { useState, useRef, useEffect, useCallback } from 'react';

type PomodoroMode = 'work' | 'shortBreak' | 'longBreak';

interface PomodoroState {
  minutes: number;
  seconds: number;
  running: boolean;
  mode: PomodoroMode;
  count: number;
}

interface PomodoroActions {
  start: () => void;
  pause: () => void;
  reset: () => void;
  setMode: (mode: PomodoroMode) => void;
}

export function usePomodoro(
  workMinutes = 25,
  shortBreakMinutes = 5,
  longBreakMinutes = 15
): [PomodoroState, PomodoroActions] {
  const [minutes, setMinutes] = useState(workMinutes);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [mode, setModeState] = useState<PomodoroMode>('work');
  const [count, setCount] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Play notification sound
  const playNotification = useCallback(() => {
    if (typeof window !== 'undefined') {
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdH2Onp+fn5+fnZuXkYuFgH58fYCGjpWbnp+fnp2al5OOiYWAfHl7foSMlJqdnp+enJqXk46JhYB8eXt+hIyUmp2en56cmpiTjoqFgXx5e36EjJSanZ6fnpyamJOOioWBfHl7foSMlJqdnp+enJqYk46KhYF8eXt+hIyUmp2en56cmpeTjomFgHx5e36EjJSanZ6fn5yamJOOioWBfHl7foSMk5qdn5+fnZqXkoyIg398eXuAhY2UnJ+goJ+dmpmUj4qFf3x5e3+Ei5OanJ+fn56amJSPioaBfHp6fYKKkpmenp+fnpuYlI+KhYF8eXt+g4qSmp2en5+em5iUj4qFgXx5e36DipKanZ6fn56bmJSPioWBfHl7foOKkpqdn5+fnpuYlI+KhYF8eXt+g4qSmp2fn5+em5iUj4mFgXx5e36DipKanZ+fn56bmJSPioWBfHl7foOKkZqdnp+fnpuYlI+KhYF8eXt+g4qRmp2en5+em5iUj4qFgXx5e36DipGanZ6fn56bmJOPioWBfHl7foOKkZqdnp+fnpuYk4+KhYF8eXt+g4mRmp2en5+em5iTj4qFgXx5e36DiZGZnZ6fn56bmJOPioWBfHl7foOJkZmdnp+fnpuYk4+KhYF8eXt+g4mRmZ2en5+em5iTj4qFgXx5e36DiZGZnZ6fn56bmJOPioWBfHl7foOJkZmdnp+fnpuYk4+KhYF8eXt+g4mRmZ2en56em5iTj4qFgX18eXuAhYqRl5ydnp6em5qWkoqFgXx8e3+GjJKYnZ+gnp6bmpmTjoqFgXx5e36FjJKYnZ6enp6bmpmTjoqFgXx5e36FjJKYnZ6enp6bmZmTjYqFgXx5e36FjJKYnZ6enp6bmZmTjYqFgXx5fH6FjJKYnZ6enp6amZmTjYqFgXx5fH6FjJKYnJ2enp6amZmTjYqFgXx5fH6FjJGYnJ2enp6amZiTjYqFgXx5fH6FjJGYnJ2enZ6amZiSjYqFgXx5fH6Fi5GYnJ2dnZ6amZiSjYqFgXx5fH6Fi5GXnJ2dnZ6amZiSjYmFgXx5fH6Fi5GXnJ2dnZ6amZiSjYmFgXx5fH6Fi5GXnJ2dnZ6amZiSjYmFgXx5fH6Fi5GXnJ2dnZ6amJiSjYmFgXx5fH6Fi5GXnJ2dnZ6ZmJiSjYmFgXx5fH6Fi5CXnJ2dnZ6ZmJiSjYmFgXx5fH6Fi5CXm52dnZ6ZmJeSjYmFgXx5fH6Fi5CXm52dnZ6ZmJeSjYmFgXx5fH6Fi5CXm52dnZ6ZmJeSjYmFgXx5fH6Fi5CXm52dnZ6ZmJeSjYmFgXx5fH6Fi5CXm52cnJ6ZmJeSjYmFgXx5fH6Fi5CWm5ycnJ6ZmJeSjYmFgXx5fH6FipCWm5ycnJ6ZmJeSjYmFgXx5fH6FipCWm5ycnJ6ZmJeSjYmFgXx5fH6FipCWm5ycnJ6ZmJeSjYmEgXx5fH6FipCWm5ycnJ6ZmJeSjYmEgXx5fH6EipCWm5ycnJ6ZmJaSjYmEgXx5fH6EipCWm5ycnJ6ZmJaSjYmEgXx5fH6EipCWm5ycnJ6ZmJaSjYmEgXx5fH6EipCVm5ycnJ6ZmJaSjYmEgXx5fH6EipCVm5ucnJ6ZmJaSjYmEgHx5fH6EipCVm5ucnJ6ZmJaSjYmEgHx5fH6EipCVm5ucnJ6ZmJaSjYmEgHx5fH6EipCVm5ucnJ6ZmJaSjYmEgHx5fH6EipCVm5ucnJ6ZmJaSjYmEgHx5fH6EipCVm5ucnJ6ZmJaSjYmEgHx5fH6EipCVm5ucnJ6ZmJaSjYmEgHx5fH6EipCVm5ucnJ6ZmJaSjYmEgHx5fH6EipCVm5ucnJ6ZmJaSjImEgHx5fH6EiZCVm5ucnJ6ZmJaSjImEgHx5fH6EiZCVmpucnJ6ZmJaSjImEgHx5fH6EiZCVmpucnJ6ZmJaSjImEgHx5fH6EiZCVmpucnJ6ZmJWSjImEgHx5fH6EiZCVmpucnJ6ZmJWSjImEgHx5fH6EiY+VmpucnJ6ZmJWSjImEgHx5fH6EiY+VmpubmpmYmJWSjImEgHx5fH6EiY+VmpubmpmYmJWSjImEgHx5fH6EiY+VmpubmpmYmJWSjImEgHx5fH6EiY+VmpubmpmYmJWSjImEgHx5fH6EiY+VmpubmpmYl5WSjImEgHx5fH6EiY+VmpubmpmYl5WSjImEgHx5fH6EiY+UmpubmpmYl5WSjImEgHx5fH6EiY+UmpubmpmYl5SSjImEgHx5fH6EiY+UmpubmpmYl5SSjImEgHx5fH6EiY+UmpubmpmYl5SSjImD');
      audio.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => {
          if (prev === 0) {
            if (minutes === 0) {
              // Timer finished
              setRunning(false);
              playNotification();
              
              // Auto-switch modes
              if (mode === 'work') {
                const newCount = count + 1;
                setCount(newCount);
                if (newCount % 4 === 0) {
                  setModeState('longBreak');
                  setMinutes(longBreakMinutes);
                } else {
                  setModeState('shortBreak');
                  setMinutes(shortBreakMinutes);
                }
              } else {
                setModeState('work');
                setMinutes(workMinutes);
              }
              return 0;
            }
            setMinutes(m => m - 1);
            return 59;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [running, minutes, mode, count, workMinutes, shortBreakMinutes, longBreakMinutes, playNotification]);

  const start = useCallback(() => setRunning(true), []);
  const pause = useCallback(() => setRunning(false), []);
  
  const reset = useCallback(() => {
    setRunning(false);
    setSeconds(0);
    switch (mode) {
      case 'work':
        setMinutes(workMinutes);
        break;
      case 'shortBreak':
        setMinutes(shortBreakMinutes);
        break;
      case 'longBreak':
        setMinutes(longBreakMinutes);
        break;
    }
  }, [mode, workMinutes, shortBreakMinutes, longBreakMinutes]);

  const setMode = useCallback((newMode: PomodoroMode) => {
    setModeState(newMode);
    setRunning(false);
    setSeconds(0);
    switch (newMode) {
      case 'work':
        setMinutes(workMinutes);
        break;
      case 'shortBreak':
        setMinutes(shortBreakMinutes);
        break;
      case 'longBreak':
        setMinutes(longBreakMinutes);
        break;
    }
  }, [workMinutes, shortBreakMinutes, longBreakMinutes]);

  return [
    { minutes, seconds, running, mode, count },
    { start, pause, reset, setMode }
  ];
}
