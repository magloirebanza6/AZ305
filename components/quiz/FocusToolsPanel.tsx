'use client';

import React, { memo } from 'react';
import { 
  Timer, Play, Pause, Square, Coffee, RefreshCw,
  Volume2, VolumeX, Minus, Plus
} from 'lucide-react';
import type { WhiteNoiseType } from '../../hooks/useWhiteNoise';

interface FocusToolsPanelProps {
  // Pomodoro
  pomodoroMinutes: number;
  pomodoroSeconds: number;
  pomodoroRunning: boolean;
  pomodoroMode: 'work' | 'shortBreak' | 'longBreak';
  pomodoroCount: number;
  onPomodoroStart: () => void;
  onPomodoroPause: () => void;
  onPomodoroReset: () => void;
  onPomodoroSetMode: (mode: 'work' | 'shortBreak' | 'longBreak') => void;
  // White Noise
  whiteNoiseType: WhiteNoiseType;
  whiteNoiseVolume: number;
  whiteNoisePlaying: boolean;
  onWhiteNoiseSetType: (type: WhiteNoiseType) => void;
  onWhiteNoiseSetVolume: (volume: number) => void;
  onWhiteNoiseToggle: () => void;
  // Colors
  colors: {
    cardBg: string;
    border: string;
    textPrimary: string;
    textSecondary: string;
    hoverBg: string;
  };
  theme: 'light' | 'dark';
}

const FocusToolsPanel = memo(function FocusToolsPanel({
  pomodoroMinutes,
  pomodoroSeconds,
  pomodoroRunning,
  pomodoroMode,
  pomodoroCount,
  onPomodoroStart,
  onPomodoroPause,
  onPomodoroReset,
  onPomodoroSetMode,
  whiteNoiseType,
  whiteNoiseVolume,
  whiteNoisePlaying,
  onWhiteNoiseSetType,
  onWhiteNoiseSetVolume,
  onWhiteNoiseToggle,
  colors,
  theme
}: FocusToolsPanelProps) {
  const noiseTypes: { value: WhiteNoiseType; label: string; emoji: string }[] = [
    { value: 'none', label: 'Off', emoji: '🔇' },
    { value: 'rain', label: 'Rain', emoji: '🌧️' },
    { value: 'ocean', label: 'Ocean', emoji: '🌊' },
    { value: 'forest', label: 'Forest', emoji: '🌲' },
    { value: 'cafe', label: 'Café', emoji: '☕' },
    { value: 'wind', label: 'Wind', emoji: '💨' },
    { value: 'fire', label: 'Fire', emoji: '🔥' },
  ];

  const pomodoroModes: { value: 'work' | 'shortBreak' | 'longBreak'; label: string; minutes: number }[] = [
    { value: 'work', label: 'Focus', minutes: 25 },
    { value: 'shortBreak', label: 'Short Break', minutes: 5 },
    { value: 'longBreak', label: 'Long Break', minutes: 15 },
  ];

  return (
    <div className={`fixed bottom-4 right-4 ${colors.cardBg} border ${colors.border} rounded-xl shadow-2xl p-4 z-40 w-72`}>
      {/* Pomodoro Timer */}
      <div className="mb-4">
        <div className={`flex items-center gap-2 mb-3 ${colors.textPrimary}`}>
          <Timer className="w-4 h-4 text-[#d13438]" />
          <span className="font-medium text-sm">Pomodoro Timer</span>
          <span className={`ml-auto text-xs ${colors.textSecondary}`}>
            #{pomodoroCount} sessions
          </span>
        </div>
        
        {/* Mode Selection */}
        <div className="flex gap-1 mb-3">
          {pomodoroModes.map((m) => (
            <button
              key={m.value}
              onClick={() => onPomodoroSetMode(m.value)}
              className={`flex-1 py-1 px-2 text-xs rounded transition-colors ${
                pomodoroMode === m.value
                  ? 'bg-[#d13438] text-white'
                  : `${colors.hoverBg} ${colors.textSecondary}`
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
        
        {/* Timer Display */}
        <div className={`text-center py-3 rounded-lg mb-3 ${
          pomodoroMode === 'work' 
            ? theme === 'dark' ? 'bg-[#3b0e0e]' : 'bg-red-50'
            : theme === 'dark' ? 'bg-[#0e3b0e]' : 'bg-green-50'
        }`}>
          <div className={`text-4xl font-mono font-bold ${
            pomodoroMode === 'work' ? 'text-[#d13438]' : 'text-[#107c10]'
          }`}>
            {String(pomodoroMinutes).padStart(2, '0')}:{String(pomodoroSeconds).padStart(2, '0')}
          </div>
          <div className={`text-xs mt-1 ${colors.textSecondary}`}>
            {pomodoroMode === 'work' ? '🎯 Focus Time' : pomodoroMode === 'shortBreak' ? '☕ Short Break' : '🌴 Long Break'}
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex gap-2">
          <button
            onClick={pomodoroRunning ? onPomodoroPause : onPomodoroStart}
            className={`flex-1 flex items-center justify-center gap-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              pomodoroRunning
                ? 'bg-[#ffb900] hover:bg-[#eaa600] text-black'
                : 'bg-[#107c10] hover:bg-[#0b5a0b] text-white'
            }`}
          >
            {pomodoroRunning ? (
              <>
                <Pause className="w-4 h-4" /> Pause
              </>
            ) : (
              <>
                <Play className="w-4 h-4" /> Start
              </>
            )}
          </button>
          <button
            onClick={onPomodoroReset}
            className={`px-3 py-2 rounded-lg ${colors.hoverBg} ${colors.textSecondary} border ${colors.border}`}
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Divider */}
      <div className={`border-t ${colors.border} my-4`} />
      
      {/* White Noise */}
      <div>
        <div className={`flex items-center gap-2 mb-3 ${colors.textPrimary}`}>
          {whiteNoisePlaying ? (
            <Volume2 className="w-4 h-4 text-[#0078d4]" />
          ) : (
            <VolumeX className="w-4 h-4" />
          )}
          <span className="font-medium text-sm">Ambient Sounds</span>
        </div>
        
        {/* Sound Types Grid */}
        <div className="grid grid-cols-4 gap-1 mb-3">
          {noiseTypes.map((noise) => (
            <button
              key={noise.value}
              onClick={() => onWhiteNoiseSetType(noise.value)}
              className={`py-2 px-1 text-xs rounded transition-colors flex flex-col items-center gap-1 ${
                whiteNoiseType === noise.value
                  ? 'bg-[#0078d4] text-white'
                  : `${colors.hoverBg} ${colors.textSecondary}`
              }`}
              title={noise.label}
            >
              <span className="text-base">{noise.emoji}</span>
              <span className="text-[10px]">{noise.label}</span>
            </button>
          ))}
        </div>
        
        {/* Volume Control */}
        {whiteNoiseType !== 'none' && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => onWhiteNoiseSetVolume(Math.max(0, whiteNoiseVolume - 10))}
              className={`p-1 rounded ${colors.hoverBg}`}
            >
              <Minus className="w-3 h-3" />
            </button>
            <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#0078d4] transition-all"
                style={{ width: `${whiteNoiseVolume}%` }}
              />
            </div>
            <button
              onClick={() => onWhiteNoiseSetVolume(Math.min(100, whiteNoiseVolume + 10))}
              className={`p-1 rounded ${colors.hoverBg}`}
            >
              <Plus className="w-3 h-3" />
            </button>
            <span className={`text-xs ${colors.textSecondary} w-8`}>{whiteNoiseVolume}%</span>
          </div>
        )}
      </div>
    </div>
  );
});

export default FocusToolsPanel;
