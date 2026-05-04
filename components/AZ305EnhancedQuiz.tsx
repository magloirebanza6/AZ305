'use client';

import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { 
  CheckCircle, XCircle, RotateCcw, Trophy, BookOpen, Flag, Eye, Clock, Target, 
  ChevronLeft, ChevronRight, Home, List, Calculator, X, LogOut, Menu, Settings,
  Bookmark, HelpCircle, MessageSquare, Lightbulb, Sun, Moon, Type, StickyNote,
  Minus, Plus, Keyboard, BarChart3, Delete, Palette, Timer, Volume2, VolumeX,
  Play, Pause, Square, Coffee, RefreshCw, Printer, FileText, Download
} from 'lucide-react';
import { questions, categories, priorityAreas, Question } from '../data/questions';

type StudyMode = 'exam' | 'practice' | 'flashcard' | 'review' | 'timed';
type AppView = 'intro' | 'quiz' | 'reviewAll' | 'settings';
type Theme = 'light' | 'dark';
type ColorBlindMode = 'none' | 'deuteranopia' | 'protanopia' | 'tritanopia';

interface QuizSettings {
  questionCount: number;
  timePerQuestion: number;
  shuffleQuestions: boolean;
  showExplanations: boolean;
}

interface FlaggedQuestion {
  id: number;
  index: number;
}

interface AZ305EnhancedQuizProps {
  onLogout?: () => void;
}

export default function AZ305EnhancedQuiz({ onLogout }: AZ305EnhancedQuizProps) {
  const [mounted, setMounted] = useState(false);
  const [appView, setAppView] = useState<AppView>('intro');
  const [theme, setTheme] = useState<Theme>('light');
  const [colorBlindMode, setColorBlindMode] = useState<ColorBlindMode>('none');
  
  // Focus Tools State - separate enabled (setting) from visible (panel open)
  const [focusToolsEnabled, setFocusToolsEnabled] = useState(false);
  const [showFocusPanel, setShowFocusPanel] = useState(false);
  
  // Pomodoro Timer State
  const [pomodoroMinutes, setPomodoroMinutes] = useState(25);
  const [pomodoroSeconds, setPomodoroSeconds] = useState(0);
  const [pomodoroRunning, setPomodoroRunning] = useState(false);
  const [pomodoroMode, setPomodoroMode] = useState<'work' | 'shortBreak' | 'longBreak'>('work');
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const pomodoroIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // White Noise State
  const [whiteNoiseType, setWhiteNoiseType] = useState<'none' | 'rain' | 'ocean' | 'forest' | 'cafe' | 'wind' | 'fire'>('none');
  const [whiteNoiseVolume, setWhiteNoiseVolume] = useState(50);
  const [whiteNoisePlaying, setWhiteNoisePlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const [settings, setSettings] = useState<QuizSettings>({
    questionCount: 20,
    timePerQuestion: 60,
    shuffleQuestions: false,
    showExplanations: true,
  });
  
  // Quiz state - each mode is independent
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Map<number, number[]>>(new Map());
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [studyMode, setStudyMode] = useState<StudyMode>('practice');
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [reviewedCards, setReviewedCards] = useState<Set<number>>(new Set());
  // Track incorrect questions separately for practice mode (for "Review Mistakes" feature)
  const [practiceIncorrect, setPracticeIncorrect] = useState<number[]>([]);
  // Track last exam results for review
  const [lastExamResults, setLastExamResults] = useState<{score: number; total: number; incorrect: number[]} | null>(null);
  // Track exam review questions (separate from practice incorrect)
  const [examReviewQuestions, setExamReviewQuestions] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [totalTimeElapsed, setTotalTimeElapsed] = useState(0);
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [showQuestionList, setShowQuestionList] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [calcDisplay, setCalcDisplay] = useState('0');
  const [calcPrevValue, setCalcPrevValue] = useState<number | null>(null);
  const [calcOperator, setCalcOperator] = useState<string | null>(null);
  
  // New features - Microsoft Learn style
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState<Map<number, string>>(new Map());
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [showKeyboardShortcuts, setShowKeyboardShortcuts] = useState(false);
  const [showSectionProgress, setShowSectionProgress] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Load saved preferences
    const savedTheme = localStorage.getItem('az305-theme') as Theme;
    if (savedTheme) setTheme(savedTheme);
    const savedColorBlind = localStorage.getItem('az305-colorblind') as ColorBlindMode;
    if (savedColorBlind) setColorBlindMode(savedColorBlind);
    const savedFocusTools = localStorage.getItem('az305-focustools');
    if (savedFocusTools === 'true') setFocusToolsEnabled(true);
  }, []);

  // Save theme preference
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('az305-theme', theme);
    }
  }, [theme, mounted]);

  // Save color blind mode preference
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('az305-colorblind', colorBlindMode);
    }
  }, [colorBlindMode, mounted]);

  // Save focus tools preference
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('az305-focustools', focusToolsEnabled.toString());
    }
  }, [focusToolsEnabled, mounted]);

  // Pomodoro Timer Logic
  useEffect(() => {
    if (pomodoroRunning) {
      pomodoroIntervalRef.current = setInterval(() => {
        setPomodoroSeconds(prev => {
          if (prev === 0) {
            if (pomodoroMinutes === 0) {
              // Timer finished
              setPomodoroRunning(false);
              // Play notification sound
              if (typeof window !== 'undefined') {
                const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdH2Onp+fn5+fnZuXkYuFgH58fYCGjpWbnp+fnp2al5OOiYWAfHl7foSMlJqdnp+enJqXk46JhYB8eXt+hIyUmp2en56cmpiTjoqFgXx5e36EjJSanZ6fnpyamJOOioWBfHl7foSMlJqdnp+enJqYk46KhYF8eXt+hIyUmp2en56cmpeTjomFgHx5e36EjJSanZ6fn5yamJOOioWBfHl7foSMk5qdn5+fnZqXkoyIg398eXuAhY2UnJ+goJ+dmpmUj4qFf3x5e3+Ei5OanJ+fn56amJSPioaBfHp6fYKKkpmenp+fnpuYlI+KhYF8eXt+g4qSmp2en5+em5iUj4qFgXx5e36DipKanZ6fn56bmJSPioWBfHl7foOKkpqdn5+fnpuYlI+KhYF8eXt+g4qSmp2fn5+em5iUj4mFgXx5e36DipKanZ+fn56bmJSPioWBfHl7foOKkZqdnp+fnpuYlI+KhYF8eXt+g4qRmp2en5+em5iUj4qFgXx5e36DipGanZ6fn56bmJOPioWBfHl7foOKkZqdnp+fnpuYk4+KhYF8eXt+g4mRmp2en5+em5iTj4qFgXx5e36DiZGZnZ6fn56bmJOPioWBfHl7foOJkZmdnp+fnpuYk4+KhYF8eXt+g4mRmZ2en5+em5iTj4qFgXx5e36DiZGZnZ6fn56bmJOPioWBfHl7foOJkZmdnp+fnpuYk4+KhYF8eXt+g4mRmZ2en56em5iTj4qFgX18eXuAhYqRl5ydnp6em5qWkoqFgXx8e3+GjJKYnZ+gnp6bmpmTjoqFgXx5e36FjJKYnZ6enp6bmpmTjoqFgXx5e36FjJKYnZ6enp6bmZmTjYqFgXx5e36FjJKYnZ6enp6bmZmTjYqFgXx5fH6FjJKYnZ6enp6amZmTjYqFgXx5fH6FjJKYnJ2enp6amZmTjYqFgXx5fH6FjJGYnJ2enp6amZiTjYqFgXx5fH6FjJGYnJ2enZ6amZiSjYqFgXx5fH6Fi5GYnJ2dnZ6amZiSjYqFgXx5fH6Fi5GXnJ2dnZ6amZiSjYmFgXx5fH6Fi5GXnJ2dnZ6amZiSjYmFgXx5fH6Fi5GXnJ2dnZ6amZiSjYmFgXx5fH6Fi5GXnJ2dnZ6amJiSjYmFgXx5fH6Fi5GXnJ2dnZ6ZmJiSjYmFgXx5fH6Fi5CXnJ2dnZ6ZmJiSjYmFgXx5fH6Fi5CXm52dnZ6ZmJeSjYmFgXx5fH6Fi5CXm52dnZ6ZmJeSjYmFgXx5fH6Fi5CXm52dnZ6ZmJeSjYmFgXx5fH6Fi5CXm52dnZ6ZmJeSjYmFgXx5fH6Fi5CXm52cnJ6ZmJeSjYmFgXx5fH6Fi5CWm5ycnJ6ZmJeSjYmFgXx5fH6FipCWm5ycnJ6ZmJeSjYmFgXx5fH6FipCWm5ycnJ6ZmJeSjYmFgXx5fH6FipCWm5ycnJ6ZmJeSjYmEgXx5fH6FipCWm5ycnJ6ZmJeSjYmEgXx5fH6EipCWm5ycnJ6ZmJaSjYmEgXx5fH6EipCWm5ycnJ6ZmJaSjYmEgXx5fH6EipCWm5ycnJ6ZmJaSjYmEgXx5fH6EipCVm5ycnJ6ZmJaSjYmEgXx5fH6EipCVm5ucnJ6ZmJaSjYmEgHx5fH6EipCVm5ucnJ6ZmJaSjYmEgHx5fH6EipCVm5ucnJ6ZmJaSjYmEgHx5fH6EipCVm5ucnJ6ZmJaSjYmEgHx5fH6EipCVm5ucnJ6ZmJaSjYmEgHx5fH6EipCVm5ucnJ6ZmJaSjYmEgHx5fH6EipCVm5ucnJ6ZmJaSjYmEgHx5fH6EipCVm5ucnJ6ZmJaSjYmEgHx5fH6EipCVm5ucnJ6ZmJaSjYmEgHx5fH6EipCVm5ucnJ6ZmJaSjImEgHx5fH6EiZCVm5ucnJ6ZmJaSjImEgHx5fH6EiZCVmpucnJ6ZmJaSjImEgHx5fH6EiZCVmpucnJ6ZmJaSjImEgHx5fH6EiZCVmpucnJ6ZmJWSjImEgHx5fH6EiZCVmpucnJ6ZmJWSjImEgHx5fH6EiY+VmpucnJ6ZmJWSjImEgHx5fH6EiY+VmpubmpmYmJWSjImEgHx5fH6EiY+VmpubmpmYmJWSjImEgHx5fH6EiY+VmpubmpmYmJWSjImEgHx5fH6EiY+VmpubmpmYmJWSjImEgHx5fH6EiY+VmpubmpmYl5WSjImEgHx5fH6EiY+VmpubmpmYl5WSjImEgHx5fH6EiY+UmpubmpmYl5WSjImEgHx5fH6EiY+UmpubmpmYl5SSjImEgHx5fH6EiY+UmpubmpmYl5SSjImEgHx5fH6EiY+UmpubmpmYl5SSjImD');
                audio.play().catch(() => {});
              }
              // Auto-switch to break or back to work
              if (pomodoroMode === 'work') {
                const newCount = pomodoroCount + 1;
                setPomodoroCount(newCount);
                if (newCount % 4 === 0) {
                  setPomodoroMode('longBreak');
                  setPomodoroMinutes(15);
                } else {
                  setPomodoroMode('shortBreak');
                  setPomodoroMinutes(5);
                }
              } else {
                setPomodoroMode('work');
                setPomodoroMinutes(25);
              }
              return 0;
            }
            setPomodoroMinutes(m => m - 1);
            return 59;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (pomodoroIntervalRef.current) {
        clearInterval(pomodoroIntervalRef.current);
      }
    }
    return () => {
      if (pomodoroIntervalRef.current) {
        clearInterval(pomodoroIntervalRef.current);
      }
    };
  }, [pomodoroRunning, pomodoroMinutes, pomodoroMode, pomodoroCount]);

  // Web Audio API context and nodes for white noise generation
  const audioContextRef = useRef<AudioContext | null>(null);
  const noiseNodeRef = useRef<AudioBufferSourceNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const filterNodeRef = useRef<BiquadFilterNode | null>(null);

  // Generate noise buffer based on type
  const createNoiseBuffer = useCallback((ctx: AudioContext, type: string): AudioBuffer => {
    const bufferSize = ctx.sampleRate * 2; // 2 seconds of audio
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = buffer.getChannelData(0);
    
    // Different noise types with different characteristics
    switch (type) {
      case 'rain': // Brown noise + filter for rain-like sound
        let lastOut = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          output[i] = (lastOut + (0.02 * white)) / 1.02;
          lastOut = output[i];
          output[i] *= 3.5;
        }
        break;
      case 'ocean': // Pink noise with slow modulation
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          const wave = Math.sin(i / (ctx.sampleRate / 0.1)) * 0.3 + 0.7;
          output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11 * wave;
          b6 = white * 0.115926;
        }
        break;
      case 'forest': // Filtered pink noise
        let f0 = 0, f1 = 0, f2 = 0, f3 = 0, f4 = 0, f5 = 0, f6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          f0 = 0.99886 * f0 + white * 0.0555179;
          f1 = 0.99332 * f1 + white * 0.0750759;
          f2 = 0.96900 * f2 + white * 0.1538520;
          f3 = 0.86650 * f3 + white * 0.3104856;
          f4 = 0.55000 * f4 + white * 0.5329522;
          f5 = -0.7616 * f5 - white * 0.0168980;
          output[i] = (f0 + f1 + f2 + f3 + f4 + f5 + f6 + white * 0.5362) * 0.08;
          f6 = white * 0.115926;
        }
        break;
      case 'cafe': // Brownian noise with high frequency content
        let lastCafe = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          output[i] = (lastCafe + (0.05 * white)) / 1.05;
          lastCafe = output[i];
          output[i] = output[i] * 2 + (Math.random() * 2 - 1) * 0.1;
        }
        break;
      case 'wind': // Brown noise
        let lastWind = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          output[i] = (lastWind + (0.02 * white)) / 1.02;
          lastWind = output[i];
          const mod = Math.sin(i / (ctx.sampleRate / 0.05)) * 0.5 + 0.5;
          output[i] *= 3.5 * (0.5 + mod * 0.5);
        }
        break;
      case 'fire': // Crackling brown noise
        let lastFire = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          output[i] = (lastFire + (0.03 * white)) / 1.03;
          lastFire = output[i];
          // Add occasional crackles
          if (Math.random() > 0.998) {
            output[i] += (Math.random() - 0.5) * 0.5;
          }
          output[i] *= 3;
        }
        break;
      default: // White noise
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }
    }
    return buffer;
  }, []);

  // Handle white noise playback with Web Audio API
  useEffect(() => {
    if (whiteNoiseType !== 'none' && whiteNoisePlaying) {
      // Create audio context if needed
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      
      // Stop existing noise
      if (noiseNodeRef.current) {
        try {
          noiseNodeRef.current.stop();
        } catch (e) {}
        noiseNodeRef.current = null;
      }

      // Create noise buffer
      const noiseBuffer = createNoiseBuffer(ctx, whiteNoiseType);
      
      // Create and connect nodes
      const noiseNode = ctx.createBufferSource();
      noiseNode.buffer = noiseBuffer;
      noiseNode.loop = true;
      
      const gainNode = ctx.createGain();
      gainNode.gain.value = whiteNoiseVolume / 100;
      
      // Add a filter for smoother sound
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = whiteNoiseType === 'wind' ? 400 : whiteNoiseType === 'rain' ? 800 : 2000;
      
      noiseNode.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      noiseNode.start();
      
      noiseNodeRef.current = noiseNode;
      gainNodeRef.current = gainNode;
      filterNodeRef.current = filter;
    } else {
      // Stop playback
      if (noiseNodeRef.current) {
        try {
          noiseNodeRef.current.stop();
        } catch (e) {}
        noiseNodeRef.current = null;
      }
    }
    
    return () => {
      if (noiseNodeRef.current) {
        try {
          noiseNodeRef.current.stop();
        } catch (e) {}
        noiseNodeRef.current = null;
      }
    };
  }, [whiteNoiseType, whiteNoisePlaying, createNoiseBuffer]);

  // Update volume when changed
  useEffect(() => {
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.value = whiteNoiseVolume / 100;
    }
  }, [whiteNoiseVolume]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  // Color Blind Mode aware status colors - with raw hex values for dynamic styling
  const getStatusColors = () => {
    switch (colorBlindMode) {
      case 'deuteranopia': // Red-Green blindness - use Blue/Orange (very distinct)
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
      case 'protanopia': // Red-Weak - use Blue/Bright Yellow
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
      case 'tritanopia': // Blue-Yellow blindness - use Magenta/Cyan
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
      default: // Normal vision - Green/Red
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
  };

  const statusColors = getStatusColors();

  // Theme-aware colors
  const colors = {
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
    // Status colors from color blind mode
    ...statusColors,
    warningBg: theme === 'dark' ? 'bg-[#3b2e0e]' : 'bg-[#fff4ce]',
    warningBorder: 'border-[#ffb900]',
    // Info/highlight
    infoBg: theme === 'dark' ? 'bg-[#0a2540]' : 'bg-[#eff6fc]',
    infoBorder: theme === 'dark' ? 'border-[#0078d4]/40' : 'border-[#0078d4]/20',
  };

  // Timer for exam simulation
  useEffect(() => {
    if (appView === 'quiz' && studyMode === 'timed' && !quizCompleted) {
      const timer = setInterval(() => {
        setTotalTimeElapsed(prev => prev + 1);
        if (timeRemaining !== null && timeRemaining > 0) {
          setTimeRemaining(prev => (prev || 0) - 1);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [appView, studyMode, quizCompleted, timeRemaining]);

  const filteredQuestions = useMemo(() => {
    if (!mounted) return [];
    
    let filtered = questions;
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(q => q.category === selectedCategory);
    }
    if (studyMode === 'flashcard') {
      filtered = filtered.filter(q => q.type === 'flashcard');
    } else if (studyMode === 'exam' || studyMode === 'practice' || studyMode === 'timed') {
      filtered = filtered.filter(q => q.type === 'multiple-choice');
    } else if (studyMode === 'review') {
      // Review mode: use examReviewQuestions if set, otherwise use practiceIncorrect
      const reviewIds = examReviewQuestions.length > 0 ? examReviewQuestions : practiceIncorrect;
      filtered = filtered.filter(q => reviewIds.includes(q.id));
    }
    
    // Apply question count limit for timed mode
    if (studyMode === 'timed' && settings.questionCount < filtered.length) {
      if (settings.shuffleQuestions) {
        const shuffled = [...filtered].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, settings.questionCount);
      }
      return filtered.slice(0, settings.questionCount);
    }
    
    return settings.shuffleQuestions && studyMode !== 'flashcard' 
      ? [...filtered].sort(() => Math.random() - 0.5)
      : filtered;
  }, [selectedCategory, studyMode, practiceIncorrect, examReviewQuestions, mounted, settings]);

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  const totalQuestions = useMemo(() => mounted ? questions.length : 0, [mounted]);
  const quizQuestions = useMemo(() => mounted ? questions.filter(q => q.type === 'multiple-choice').length : 0, [mounted]);
  const flashcardCount = useMemo(() => mounted ? questions.filter(q => q.type === 'flashcard').length : 0, [mounted]);

  const handleAnswerSelect = useCallback((answerIndex: number) => {
    if (showResult) return;
    
    if (currentQuestion?.multipleAnswers) {
      setSelectedAnswers(prev => 
        prev.includes(answerIndex) 
          ? prev.filter(a => a !== answerIndex)
          : [...prev, answerIndex]
      );
    } else {
      setSelectedAnswers([answerIndex]);
    }
  }, [showResult, currentQuestion?.multipleAnswers]);

  const checkAnswer = useCallback(() => {
    if (!currentQuestion || selectedAnswers.length === 0) return;
    // Only check answers in practice/review modes
    if (studyMode === 'exam' || studyMode === 'timed') return;
    
    setShowResult(true);
    setShowExplanation(true);
    setAnsweredQuestions(prev => new Map(prev).set(currentQuestion.id, selectedAnswers));
    
    const correctAnswers = currentQuestion.correct || [];
    const isCorrect = 
      selectedAnswers.length === correctAnswers.length &&
      selectedAnswers.every(a => correctAnswers.includes(a));
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    } else {
      // Only track incorrect for practice mode (for Review Mistakes feature)
      setPracticeIncorrect(prev => 
        prev.includes(currentQuestion.id) ? prev : [...prev, currentQuestion.id]
      );
    }
  }, [currentQuestion, selectedAnswers, studyMode]);

  const formatQuestionText = (text: string) => {
    return text
      .replace(/(You need to|What should|Which [a-z]+|How should)/g, '\n\n$1')
      .replace(/✑\s*/g, '\n• ')
      .replace(/(NOTE:|Note:)/g, '\n\n$1')
      .replace(/(The solution must meet|The solution must:)/g, '\n\n$1')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  };

  const nextQuestion = useCallback(() => {
    // In exam mode, save answer without revealing correctness
    if ((studyMode === 'exam' || studyMode === 'timed') && currentQuestion && selectedAnswers.length > 0) {
      setAnsweredQuestions(prev => new Map(prev).set(currentQuestion.id, selectedAnswers));
    }
    
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswers([]);
      setShowResult(false);
      setShowExplanation(false);
      if (studyMode === 'timed') {
        setTimeRemaining(settings.timePerQuestion);
      }
    } else {
      // Calculate final score for exam mode
      if (studyMode === 'exam' || studyMode === 'timed') {
        let finalScore = 0;
        const finalIncorrect: number[] = [];
        
        // Include current question's answer in calculation
        const allAnswers = new Map(answeredQuestions);
        if (currentQuestion && selectedAnswers.length > 0) {
          allAnswers.set(currentQuestion.id, selectedAnswers);
        }
        
        filteredQuestions.forEach(q => {
          const selected = allAnswers.get(q.id);
          if (selected) {
            const correctAnswers = q.correct || [];
            const isCorrect = selected.length === correctAnswers.length &&
              selected.every(a => correctAnswers.includes(a));
            if (isCorrect) {
              finalScore++;
            } else {
              finalIncorrect.push(q.id);
            }
          }
        });
        
        setScore(finalScore);
        // Store exam results separately (doesn't affect practice mode)
        setLastExamResults({
          score: finalScore,
          total: filteredQuestions.length,
          incorrect: finalIncorrect
        });
      }
      
      setQuizCompleted(true);
      setAppView('reviewAll');
    }
  }, [currentQuestionIndex, filteredQuestions, studyMode, settings.timePerQuestion, currentQuestion, selectedAnswers, answeredQuestions]);

  const previousQuestion = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswers([]);
      setShowResult(false);
      setShowExplanation(false);
    }
  }, [currentQuestionIndex]);

  const goToQuestion = useCallback((index: number) => {
    setCurrentQuestionIndex(index);
    setSelectedAnswers([]);
    setShowResult(false);
    setShowExplanation(false);
    setShowQuestionList(false);
  }, []);

  const toggleFlag = useCallback(() => {
    if (!currentQuestion) return;
    setFlaggedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(currentQuestion.id)) {
        newSet.delete(currentQuestion.id);
      } else {
        newSet.add(currentQuestion.id);
      }
      return newSet;
    });
  }, [currentQuestion]);

  const resetQuiz = useCallback(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Map());
    setShowExplanation(false);
    setFlippedCards(new Set());
    setReviewedCards(new Set());
    setQuizCompleted(false);
    setTimeRemaining(null);
    setTotalTimeElapsed(0);
    setFlaggedQuestions(new Set());
  }, []);

  const toggleFlipCard = useCallback((questionId: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
        setReviewedCards(r => new Set(r).add(questionId));
      }
      return newSet;
    });
  }, []);

  // Calculator functions
  const calcInput = useCallback((value: string) => {
    setCalcDisplay(prev => prev === '0' ? value : prev + value);
  }, []);

  const calcClear = useCallback(() => {
    setCalcDisplay('0');
    setCalcPrevValue(null);
    setCalcOperator(null);
  }, []);

  const calcSetOperator = useCallback((op: string) => {
    setCalcPrevValue(parseFloat(calcDisplay));
    setCalcOperator(op);
    setCalcDisplay('0');
  }, [calcDisplay]);

  const calcCalculate = useCallback(() => {
    if (calcPrevValue === null || calcOperator === null) return;
    const current = parseFloat(calcDisplay);
    let result = 0;
    switch (calcOperator) {
      case '+': result = calcPrevValue + current; break;
      case '-': result = calcPrevValue - current; break;
      case '×': result = calcPrevValue * current; break;
      case '÷': result = current !== 0 ? calcPrevValue / current : 0; break;
    }
    setCalcDisplay(String(result));
    setCalcPrevValue(null);
    setCalcOperator(null);
  }, [calcDisplay, calcPrevValue, calcOperator]);

  // Notes management
  const updateNote = useCallback((note: string) => {
    if (!currentQuestion) return;
    setNotes(prev => {
      const newMap = new Map(prev);
      if (note.trim()) {
        newMap.set(currentQuestion.id, note);
      } else {
        newMap.delete(currentQuestion.id);
      }
      return newMap;
    });
  }, [currentQuestion]);

  // Font size classes
  const fontSizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  // Calculate section/category progress
  const categoryProgress = useMemo(() => {
    const progress: Record<string, { total: number; answered: number; correct: number }> = {};
    
    filteredQuestions.forEach(q => {
      if (!progress[q.category]) {
        progress[q.category] = { total: 0, answered: 0, correct: 0 };
      }
      progress[q.category].total++;
      
      if (answeredQuestions.has(q.id)) {
        progress[q.category].answered++;
        const selected = answeredQuestions.get(q.id) || [];
        const correctAnswers = q.correct || [];
        const isCorrect = selected.length === correctAnswers.length && 
          selected.every(a => correctAnswers.includes(a));
        if (isCorrect) {
          progress[q.category].correct++;
        }
      }
    });
    
    return progress;
  }, [filteredQuestions, answeredQuestions]);

  // Keyboard shortcuts
  useEffect(() => {
    if (appView !== 'quiz' || showQuestionList || showCalculator || showNotes || showKeyboardShortcuts) return;
    
    const handleKeyPress = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      
      switch (e.key.toLowerCase()) {
        case 'a':
        case 'b':
        case 'c':
        case 'd':
        case 'e':
        case 'f':
          if (!showResult && currentQuestion?.options) {
            const index = e.key.toLowerCase().charCodeAt(0) - 97;
            if (index < currentQuestion.options.length) {
              handleAnswerSelect(index);
            }
          }
          break;
        case 'arrowleft':
          previousQuestion();
          break;
        case 'arrowright':
          // In exam mode, can always move to next if answered
          if (studyMode === 'exam' || studyMode === 'timed') {
            if (selectedAnswers.length > 0) nextQuestion();
          } else if (showResult || studyMode === 'flashcard') {
            nextQuestion();
          }
          break;
        case 'enter':
          // In exam mode, Enter moves to next question
          if (studyMode === 'exam' || studyMode === 'timed') {
            if (selectedAnswers.length > 0) nextQuestion();
          } else if (!showResult && selectedAnswers.length > 0) {
            checkAnswer();
          } else if (showResult) {
            nextQuestion();
          }
          break;
        case 'f':
          if (e.ctrlKey) {
            e.preventDefault();
            toggleFlag();
          }
          break;
        case 'n':
          if (e.ctrlKey) {
            e.preventDefault();
            setShowNotes(prev => !prev);
          }
          break;
        case '?':
          setShowKeyboardShortcuts(prev => !prev);
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [appView, showQuestionList, showCalculator, showNotes, showKeyboardShortcuts, showResult, currentQuestion, selectedAnswers, handleAnswerSelect, previousQuestion, nextQuestion, checkAnswer, toggleFlag, studyMode]);

  const startMode = useCallback((mode: StudyMode, category: string = 'All') => {
    setStudyMode(mode);
    setSelectedCategory(category);
    resetQuiz();
    if (mode === 'timed') {
      setTimeRemaining(settings.timePerQuestion);
    }
    setAppView('quiz');
  }, [settings.timePerQuestion, resetQuiz]);

  const goToIntro = useCallback(() => {
    setAppView('intro');
    resetQuiz();
  }, [resetQuiz]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Print Exam Questions with Answers
  const printExam = useCallback((category: string = 'All', includeAnswers: boolean = true) => {
    const examQuestions = questions.filter(q => 
      q.type === 'multiple-choice' && 
      (category === 'All' || q.category === category)
    );
    
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const questionsHtml = examQuestions.map((q, idx) => `
      <div class="print-question">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
          <span style="font-weight: 600; color: #0078d4;">Question ${idx + 1}</span>
          <span style="font-size: 0.75rem; color: #666; background: #f0f0f0; padding: 0.25rem 0.5rem; border-radius: 4px;">${q.category}</span>
        </div>
        <p style="margin-bottom: 1rem; font-size: 0.95rem; line-height: 1.5;">${q.question}</p>
        <div style="margin-left: 1rem;">
          ${(q.options || []).map((opt, optIdx) => `
            <div style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 0.5rem;">
              <span style="width: 1.5rem; height: 1.5rem; border: 1px solid #ccc; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; flex-shrink: 0;${includeAnswers && (q.correct || []).includes(optIdx) ? ' background: #107c10; color: white; border-color: #107c10;' : ''}">${String.fromCharCode(65 + optIdx)}</span>
              <span style="font-size: 0.9rem; ${includeAnswers && (q.correct || []).includes(optIdx) ? 'font-weight: 600; color: #107c10;' : ''}">${opt}</span>
            </div>
          `).join('')}
        </div>
        ${includeAnswers && q.explanation ? `
          <div style="margin-top: 1rem; padding: 0.75rem; background: #e6f2ff; border-left: 3px solid #0078d4; font-size: 0.85rem;">
            <strong style="color: #0078d4;">Explanation:</strong> ${q.explanation}
          </div>
        ` : ''}
      </div>
    `).join('');

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>AZ-305 Exam Questions${category !== 'All' ? ` - ${category}` : ''}</title>
        <style>
          body {
            font-family: 'Segoe UI', system-ui, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            color: #323130;
            line-height: 1.6;
          }
          .print-header {
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid #0078d4;
          }
          .print-header h1 {
            color: #0078d4;
            margin: 0 0 0.5rem 0;
            font-size: 1.5rem;
          }
          .print-header p {
            color: #666;
            margin: 0;
            font-size: 0.9rem;
          }
          .print-question {
            page-break-inside: avoid;
            break-inside: avoid;
            margin-bottom: 1.5rem;
            border: 1px solid #e1e1e1;
            border-radius: 8px;
            padding: 1rem;
          }
          @media print {
            body { padding: 0; }
            .print-question { border-color: #ccc; }
          }
        </style>
      </head>
      <body>
        <div class="print-header">
          <h1>AZ-305: Designing Microsoft Azure Infrastructure Solutions</h1>
          <p>${examQuestions.length} Questions${category !== 'All' ? ` • Category: ${category}` : ''} • ${includeAnswers ? 'With Answers & Explanations' : 'Questions Only'}</p>
          <p style="margin-top: 0.5rem; font-size: 0.8rem; color: #888;">Generated on ${new Date().toLocaleDateString()}</p>
        </div>
        ${questionsHtml}
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  }, []);

  // Print Flashcards (Case Studies) - Front and Back format for cutting
  const printFlashcards = useCallback((category: string = 'All') => {
    const flashcards = questions.filter(q => 
      q.type === 'flashcard' && 
      (category === 'All' || q.category === category)
    );
    
    // Get base URL for absolute paths (needed for print window)
    const baseUrl = window.location.origin;
    
    // Convert relative path to absolute URL
    const toAbsoluteUrl = (path: string) => {
      if (path.startsWith('http://') || path.startsWith('https://')) {
        return path;
      }
      return `${baseUrl}${path.startsWith('/') ? '' : '/'}${path}`;
    };
    
    // Get all images for a flashcard (handles multiple formats)
    const getFlashcardImages = (q: Question) => {
      const images: string[] = [];
      if (q.frontImages && q.frontImages.length > 0) {
        images.push(...q.frontImages.map(toAbsoluteUrl));
      }
      if (q.imageUrl) {
        images.push(toAbsoluteUrl(q.imageUrl));
      }
      if (q.images && q.images.length > 0) {
        images.push(...q.images.map(toAbsoluteUrl));
      }
      return images;
    };

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const cardsHtml = flashcards.map((q, idx) => {
      const images = getFlashcardImages(q);
      const backImage = q.backImage ? toAbsoluteUrl(q.backImage) : null;
      
      return `
      <div class="flashcard-page">
        <!-- Front Side -->
        <div class="flashcard-side front">
          <div class="card-header">
            <span class="card-number">Card ${idx + 1} of ${flashcards.length}</span>
            <span class="card-side-label">FRONT - QUESTION</span>
          </div>
          <div class="card-category">${q.category}</div>
          <div class="card-content">
            <div class="scenario-label">📋 SCENARIO / QUESTION</div>
            <p class="scenario-text">${q.question}</p>
            ${images.length > 0 ? `
              <div class="image-section">
                ${images.map((img, imgIdx) => `
                  <img src="${img}" alt="Question diagram ${imgIdx + 1}" class="flashcard-image" />
                `).join('')}
              </div>
            ` : ''}
            ${(q.options || []).length > 0 ? `
              <div class="options-section">
                <div class="options-label">📝 OPTIONS / REQUIREMENTS</div>
                <ul class="options-list">
                  ${(q.options || []).map(opt => `<li>${opt}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
          </div>
          <div class="card-footer">
            <span class="flip-instruction">✂️ Cut along dotted line — Answer on back →</span>
          </div>
        </div>
        
        <!-- Cut Line -->
        <div class="cut-line"></div>
        
        <!-- Back Side -->
        <div class="flashcard-side back">
          <div class="card-header">
            <span class="card-number">Card ${idx + 1} of ${flashcards.length}</span>
            <span class="card-side-label">BACK - ANSWER</span>
          </div>
          <div class="card-category">${q.category}</div>
          <div class="card-content answer-content">
            ${backImage ? `
              <div class="answer-label">✅ ANSWER IMAGE</div>
              <div class="image-section">
                <img src="${backImage}" alt="Answer diagram" class="flashcard-image answer-image" crossorigin="anonymous" />
              </div>
            ` : ''}
            ${q.explanation ? `
              <div class="answer-label">${backImage ? '📝 EXPLANATION' : '✅ SOLUTION / ANSWER'}</div>
              <p class="answer-text">${q.explanation}</p>
            ` : !backImage ? `
              <div class="answer-label">✅ SOLUTION</div>
              <p class="answer-text">Refer to the question image above for the HOTSPOT/Drag-Drop answer areas. Review Microsoft Learn documentation for detailed explanations.</p>
            ` : ''}
          </div>
          <div class="card-footer">
            <span class="ms-learn">📚 Microsoft Learn | AZ-305</span>
          </div>
        </div>
      </div>
    `}).join('');

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>AZ-305 Flashcards${category !== 'All' ? ` - ${category}` : ''}</title>
        <style>
          @page {
            size: landscape;
            margin: 0.3cm;
          }
          
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          
          body {
            font-family: 'Segoe UI', system-ui, sans-serif;
            color: #323130;
            line-height: 1.4;
            background: #fff;
          }
          
          /* Top Toolbar */
          .toolbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #8764b8, #0078d4);
            padding: 0.75rem 1.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            z-index: 9999;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          }
          
          .toolbar-left {
            display: flex;
            align-items: center;
            gap: 1rem;
          }
          
          .toolbar-title {
            color: white;
            font-size: 1rem;
            font-weight: 600;
          }
          
          .toolbar-status {
            color: rgba(255,255,255,0.9);
            font-size: 0.85rem;
          }
          
          .toolbar-buttons {
            display: flex;
            gap: 0.75rem;
          }
          
          .toolbar-btn {
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 6px;
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.4rem;
            transition: all 0.2s;
          }
          
          .btn-refresh {
            background: rgba(255,255,255,0.2);
            color: white;
            border: 1px solid rgba(255,255,255,0.3);
          }
          
          .btn-refresh:hover {
            background: rgba(255,255,255,0.3);
          }
          
          .btn-refresh.loading {
            opacity: 0.7;
            cursor: wait;
          }
          
          .btn-print {
            background: white;
            color: #8764b8;
          }
          
          .btn-print:hover {
            background: #f5f0fa;
          }
          
          .spinner {
            width: 14px;
            height: 14px;
            border: 2px solid rgba(255,255,255,0.3);
            border-top-color: white;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
            display: none;
          }
          
          .btn-refresh.loading .spinner {
            display: inline-block;
          }
          
          .btn-refresh.loading .refresh-icon {
            display: none;
          }
          
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          
          /* Add padding for toolbar */
          .content-wrapper {
            padding-top: 60px;
          }
          
          .flashcard-page {
            page-break-after: always;
            display: flex;
            flex-direction: row;
            height: 100vh;
            padding: 0.3cm;
            gap: 0;
          }
          
          .flashcard-page:last-child {
            page-break-after: avoid;
          }
          
          .flashcard-side {
            flex: 1;
            border: 2px solid #8764b8;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            background: #fff;
            max-width: 50%;
          }
          
          .front {
            margin-right: 0.15cm;
            border-color: #0078d4;
          }
          
          .back {
            margin-left: 0.15cm;
            background: linear-gradient(135deg, #f5f0fa 0%, #ede8f5 100%);
            border-color: #8764b8;
          }
          
          .cut-line {
            width: 0;
            border-left: 2px dashed #999;
            position: relative;
          }
          
          .cut-line::before {
            content: '✂';
            position: absolute;
            top: 50%;
            left: -8px;
            transform: translateY(-50%);
            font-size: 14px;
            color: #999;
          }
          
          .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.3rem 0.6rem;
            border-bottom: 1px solid #e1e1e1;
            background: #f8f8f8;
            flex-shrink: 0;
          }
          
          .back .card-header {
            background: #8764b8;
            color: white;
            border-bottom-color: #7356a5;
          }
          
          .front .card-header {
            background: #0078d4;
            color: white;
            border-bottom-color: #106ebe;
          }
          
          .card-number {
            font-size: 0.65rem;
            font-weight: 500;
          }
          
          .card-side-label {
            font-size: 0.6rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 0.15rem 0.4rem;
            background: rgba(255,255,255,0.2);
            border-radius: 3px;
          }
          
          .card-category {
            font-size: 0.6rem;
            color: #666;
            padding: 0.25rem 0.6rem;
            background: #f0f0f0;
            border-bottom: 1px solid #e1e1e1;
            flex-shrink: 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .back .card-category {
            background: #ede8f5;
          }
          
          .card-content {
            flex: 1;
            padding: 0.5rem;
            overflow: auto;
            display: flex;
            flex-direction: column;
          }
          
          .scenario-label, .options-label, .answer-label {
            font-weight: 600;
            font-size: 0.65rem;
            margin-bottom: 0.3rem;
            color: #0078d4;
            flex-shrink: 0;
          }
          
          .back .answer-label {
            color: #5c4b8a;
            font-size: 0.7rem;
          }
          
          .scenario-text {
            font-size: 0.7rem;
            line-height: 1.4;
            margin-bottom: 0.5rem;
            flex-shrink: 0;
          }
          
          .answer-text {
            font-size: 0.75rem;
            color: #323130;
            background: white;
            padding: 0.5rem;
            border-radius: 6px;
            border-left: 3px solid #8764b8;
            line-height: 1.5;
          }
          
          .image-section {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 0;
            margin: 0.3rem 0;
          }
          
          .flashcard-image {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            border: 1px solid #ddd;
            border-radius: 4px;
            background: white;
          }
          
          .answer-image {
            border-color: #8764b8;
          }
          
          .options-section {
            margin-top: 0.5rem;
            padding-top: 0.4rem;
            border-top: 1px dashed #ccc;
            flex-shrink: 0;
          }
          
          .options-label {
            color: #5c4b8a;
          }
          
          .options-list {
            margin: 0;
            padding-left: 1.2rem;
            font-size: 0.65rem;
          }
          
          .options-list li {
            margin-bottom: 0.15rem;
          }
          
          .card-footer {
            padding: 0.25rem 0.6rem;
            border-top: 1px solid #e1e1e1;
            background: #fafafa;
            text-align: center;
            flex-shrink: 0;
          }
          
          .back .card-footer {
            background: #ede8f5;
          }
          
          .flip-instruction {
            font-size: 0.6rem;
            color: #888;
            font-style: italic;
          }
          
          .ms-learn {
            font-size: 0.6rem;
            color: #5c4b8a;
            font-weight: 500;
          }
          
          .print-info {
            page-break-after: always;
            padding: 2rem;
            text-align: center;
          }
          
          .print-info h1 {
            color: #8764b8;
            margin: 0 0 0.5rem 0;
            font-size: 1.5rem;
          }
          
          .print-info p {
            color: #666;
            margin: 0;
            font-size: 0.9rem;
          }
          
          .instructions-box {
            color: #666;
            margin: 1rem auto;
            padding: 1rem;
            background: #f5f0fa;
            border-radius: 8px;
            max-width: 600px;
            font-size: 0.85rem;
            text-align: left;
          }
          
          .instructions-box strong {
            color: #5c4b8a;
          }
          
          @media print {
            .toolbar {
              display: none !important;
            }
            
            .content-wrapper {
              padding-top: 0 !important;
            }
            
            body {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            .flashcard-page {
              height: 100vh;
              page-break-inside: avoid;
            }
            
            .flashcard-image {
              max-height: 200px;
            }
            
            .print-info {
              page-break-after: always;
            }
          }
        </style>
      </head>
      <body>
        <!-- Top Toolbar -->
        <div class="toolbar">
          <div class="toolbar-left">
            <span class="toolbar-title">🎴 AZ-305 Flashcards</span>
            <span class="toolbar-status" id="status">Loading images...</span>
          </div>
          <div class="toolbar-buttons">
            <button class="toolbar-btn btn-refresh" id="refresh-btn" onclick="refreshImages()">
              <span class="refresh-icon">🔄</span>
              <span class="spinner"></span>
              Refresh Images
            </button>
            <button class="toolbar-btn btn-print" onclick="window.print()">
              🖨️ Print
            </button>
          </div>
        </div>
        
        <div class="content-wrapper">
        <div class="print-info">
          <h1>AZ-305: Flashcards</h1>
          <p>${flashcards.length} Cards${category !== 'All' ? ` • ${category}` : ''}</p>
          <p style="color: #888; margin-top: 0.5rem; font-size: 0.8rem;">Generated on ${new Date().toLocaleDateString()}</p>
          <div class="instructions-box">
            <strong>✂️ Instructions:</strong><br/>
            • Print in <strong>landscape mode</strong> for best results<br/>
            • Each page has FRONT (question + image) on the left, BACK (answer) on the right<br/>
            • Cut along the dotted line to create individual cards<br/>
            • Fold in half or paste back-to-back for double-sided cards<br/>
            • Click <strong>Refresh Images</strong> if any images didn't load, then <strong>Print</strong>
          </div>
        </div>
        ${cardsHtml}
        </div>
        
        <script>
          let loadedCount = 0;
          let totalCount = 0;
          
          function updateStatus() {
            const status = document.getElementById('status');
            if (loadedCount >= totalCount) {
              status.textContent = '✅ ' + loadedCount + ' images ready';
            } else {
              status.textContent = '📷 ' + loadedCount + '/' + totalCount + ' images loaded';
            }
          }
          
          function refreshImages() {
            const btn = document.getElementById('refresh-btn');
            const status = document.getElementById('status');
            const images = document.querySelectorAll('img.flashcard-image');
            
            btn.classList.add('loading');
            status.textContent = '🔄 Refreshing images...';
            loadedCount = 0;
            totalCount = images.length;
            
            let processed = 0;
            
            images.forEach(function(img) {
              const originalSrc = img.src.split('?')[0]; // Remove any cache buster
              img.src = originalSrc + '?t=' + Date.now(); // Add cache buster
              
              img.onload = function() {
                loadedCount++;
                processed++;
                updateStatus();
                if (processed >= totalCount) {
                  btn.classList.remove('loading');
                }
              };
              
              img.onerror = function() {
                processed++;
                img.style.opacity = '0.3';
                img.style.border = '2px dashed #d13438';
                updateStatus();
                if (processed >= totalCount) {
                  btn.classList.remove('loading');
                  status.textContent = '⚠️ ' + loadedCount + '/' + totalCount + ' loaded (some failed)';
                }
              };
            });
            
            // Timeout after 30 seconds
            setTimeout(function() {
              btn.classList.remove('loading');
              if (processed < totalCount) {
                status.textContent = '⏱️ Timeout - ' + loadedCount + '/' + totalCount + ' loaded';
              }
            }, 30000);
          }
          
          // Initial count on page load
          (function() {
            const images = document.querySelectorAll('img.flashcard-image');
            totalCount = images.length;
            
            images.forEach(function(img) {
              if (img.complete && img.naturalHeight > 0) {
                loadedCount++;
              } else {
                img.onload = function() {
                  loadedCount++;
                  updateStatus();
                };
                img.onerror = function() {
                  img.style.opacity = '0.3';
                  img.style.border = '2px dashed #d13438';
                };
              }
            });
            
            updateStatus();
          })();
        </script>
      </body>
      </html>
    `);
    printWindow.document.close();
  }, []);

  // Print Questions Only (without answers - for self-testing)
  const printQuestionsOnly = useCallback((category: string = 'All') => {
    printExam(category, false);
  }, [printExam]);

  // Render Focus Tools (panel + floating button) - used across all views
  const renderFocusTools = () => (
    <>
      {/* Focus Tools Floating Panel */}
      {focusToolsEnabled && showFocusPanel && (
        <div className={`fixed bottom-20 right-4 z-50 ${colors.cardBg} rounded-lg shadow-xl border ${colors.border} w-80`}>
          <div className={`flex items-center justify-between p-3 border-b ${colors.border}`}>
            <div className="flex items-center gap-2">
              <Coffee className="w-5 h-5 text-[#0078d4]" />
              <h3 className={`font-semibold ${colors.textPrimary}`}>Focus Tools</h3>
            </div>
            <button onClick={() => setShowFocusPanel(false)} className={`p-1 ${colors.hoverBg} rounded`}>
              <X className={`w-4 h-4 ${colors.textSecondary}`} />
            </button>
          </div>

          {/* Pomodoro Timer */}
          <div className={`p-4 border-b ${colors.border}`}>
            <div className="flex items-center gap-2 mb-3">
              <Timer className="w-4 h-4 text-[#d83b01]" />
              <span className={`font-medium ${colors.textPrimary}`}>Pomodoro Timer</span>
            </div>
            
            {/* Timer Display */}
            <div className={`text-center py-4 rounded-lg mb-3 ${
              pomodoroMode === 'work' 
                ? theme === 'dark' ? 'bg-[#3b0e0e]' : 'bg-[#fde7e9]'
                : theme === 'dark' ? 'bg-[#0e3b0e]' : 'bg-[#dff6dd]'
            }`}>
              <div className={`text-4xl font-mono font-bold ${
                pomodoroMode === 'work' ? 'text-[#d83b01]' : 'text-[#107c10]'
              }`}>
                {String(pomodoroMinutes).padStart(2, '0')}:{String(pomodoroSeconds).padStart(2, '0')}
              </div>
              <div className={`text-sm mt-1 ${colors.textSecondary}`}>
                {pomodoroMode === 'work' ? '🎯 Focus Time' : pomodoroMode === 'shortBreak' ? '☕ Short Break' : '🌴 Long Break'}
              </div>
              <div className={`text-xs ${colors.textMuted} mt-1`}>
                Pomodoros: {pomodoroCount}
              </div>
            </div>

            {/* Timer Controls */}
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => setPomodoroRunning(!pomodoroRunning)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  pomodoroRunning 
                    ? 'bg-[#d83b01] hover:bg-[#c43501] text-white' 
                    : 'bg-[#0078d4] hover:bg-[#106ebe] text-white'
                }`}
              >
                {pomodoroRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {pomodoroRunning ? 'Pause' : 'Start'}
              </button>
              <button
                onClick={() => {
                  setPomodoroRunning(false);
                  setPomodoroMode('work');
                  setPomodoroMinutes(25);
                  setPomodoroSeconds(0);
                }}
                className={`p-2 rounded-lg ${colors.hoverBg} border ${colors.border}`}
                title="Reset"
              >
                <RefreshCw className={`w-4 h-4 ${colors.textSecondary}`} />
              </button>
            </div>

            {/* Quick Mode Buttons */}
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => {
                  setPomodoroRunning(false);
                  setPomodoroMode('work');
                  setPomodoroMinutes(25);
                  setPomodoroSeconds(0);
                }}
                className={`flex-1 text-xs py-1.5 rounded ${
                  pomodoroMode === 'work' ? 'bg-[#d83b01] text-white' : `${colors.hoverBg} ${colors.textSecondary} border ${colors.border}`
                }`}
              >
                Focus (25m)
              </button>
              <button
                onClick={() => {
                  setPomodoroRunning(false);
                  setPomodoroMode('shortBreak');
                  setPomodoroMinutes(5);
                  setPomodoroSeconds(0);
                }}
                className={`flex-1 text-xs py-1.5 rounded ${
                  pomodoroMode === 'shortBreak' ? 'bg-[#107c10] text-white' : `${colors.hoverBg} ${colors.textSecondary} border ${colors.border}`
                }`}
              >
                Short (5m)
              </button>
              <button
                onClick={() => {
                  setPomodoroRunning(false);
                  setPomodoroMode('longBreak');
                  setPomodoroMinutes(15);
                  setPomodoroSeconds(0);
                }}
                className={`flex-1 text-xs py-1.5 rounded ${
                  pomodoroMode === 'longBreak' ? 'bg-[#107c10] text-white' : `${colors.hoverBg} ${colors.textSecondary} border ${colors.border}`
                }`}
              >
                Long (15m)
              </button>
            </div>
          </div>

          {/* White Noise Player */}
          <div className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <Volume2 className="w-4 h-4 text-[#8764b8]" />
              <span className={`font-medium ${colors.textPrimary}`}>Ambient Sounds</span>
            </div>

            {/* Sound Selection */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              {[
                { id: 'none', label: '🔇 Off' },
                { id: 'rain', label: '🌧️ Rain' },
                { id: 'ocean', label: '🌊 Ocean' },
                { id: 'forest', label: '🌲 Forest' },
                { id: 'cafe', label: '☕ Café' },
                { id: 'wind', label: '💨 Wind' },
                { id: 'fire', label: '🔥 Fire' },
              ].map(sound => (
                <button
                  key={sound.id}
                  onClick={() => {
                    setWhiteNoiseType(sound.id as typeof whiteNoiseType);
                    if (sound.id !== 'none') {
                      setWhiteNoisePlaying(true);
                    } else {
                      setWhiteNoisePlaying(false);
                    }
                  }}
                  className={`p-2 text-xs rounded-lg transition-colors ${
                    whiteNoiseType === sound.id
                      ? 'bg-[#8764b8] text-white'
                      : `${colors.hoverBg} ${colors.textSecondary} border ${colors.border}`
                  }`}
                >
                  {sound.label}
                </button>
              ))}
            </div>

            {/* Volume Control */}
            {whiteNoiseType !== 'none' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`text-xs ${colors.textSecondary}`}>Volume</span>
                  <span className={`text-xs ${colors.textSecondary}`}>{whiteNoiseVolume}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <VolumeX className={`w-4 h-4 ${colors.textMuted}`} />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={whiteNoiseVolume}
                    onChange={(e) => {
                      const vol = parseInt(e.target.value);
                      setWhiteNoiseVolume(vol);
                      if (gainNodeRef.current) {
                        gainNodeRef.current.gain.value = vol / 100;
                      }
                    }}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#8764b8]"
                  />
                  <Volume2 className={`w-4 h-4 ${colors.textMuted}`} />
                </div>
                
                {/* Play/Pause Button */}
                <button
                  onClick={() => setWhiteNoisePlaying(!whiteNoisePlaying)}
                  className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg font-medium transition-colors ${
                    whiteNoisePlaying
                      ? 'bg-[#8764b8] text-white'
                      : `${colors.hoverBg} ${colors.textPrimary} border ${colors.border}`
                  }`}
                >
                  {whiteNoisePlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {whiteNoisePlaying ? 'Pause' : 'Play'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Focus Tools Toggle Button */}
      {focusToolsEnabled && (
        <button
          onClick={() => setShowFocusPanel(!showFocusPanel)}
          className={`fixed bottom-4 right-4 z-50 p-3 rounded-full shadow-lg transition-all ${
            showFocusPanel 
              ? 'bg-[#0078d4] text-white' 
              : `${colors.cardBg} ${colors.textPrimary} border ${colors.border} hover:shadow-xl`
          }`}
          title="Focus Tools"
        >
          {pomodoroRunning ? (
            <div className="relative">
              <Timer className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#d83b01] rounded-full animate-pulse"></span>
            </div>
          ) : whiteNoisePlaying ? (
            <div className="relative">
              <Volume2 className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#8764b8] rounded-full animate-pulse"></span>
            </div>
          ) : (
            <Coffee className="w-6 h-6" />
          )}
        </button>
      )}
    </>
  );

  if (!mounted) {
    return (
      <div className={`min-h-screen ${colors.pageBg} flex items-center justify-center`}>
        <div className={`${colors.textSecondary} text-xl`}>Loading AZ-305 Exam...</div>
      </div>
    );
  }

  // Settings View
  if (appView === 'settings') {
    return (
      <div className={`min-h-screen ${colors.pageBg}`}>
        {/* Header */}
        <header className="bg-[#0078d4] text-white px-6 py-3">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-lg">AZ-305 Exam</span>
              <span className="text-white/60">|</span>
              <span>Settings</span>
            </div>
            <button 
              onClick={toggleTheme}
              className="p-2 hover:bg-white/10 rounded transition-colors"
              title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>
        </header>

        <div className="max-w-2xl mx-auto p-8">
          <div className={`${colors.cardBg} rounded shadow-sm border ${colors.border} p-6`}>
            <h2 className={`text-2xl font-semibold ${colors.textPrimary} mb-6`}>Exam Settings</h2>
            
            <div className="space-y-6">
              {/* Theme Toggle */}
              <div className={`flex items-center justify-between py-3 border-b ${colors.border}`}>
                <div>
                  <p className={`font-medium ${colors.textPrimary}`}>Appearance</p>
                  <p className={`text-sm ${colors.textSecondary}`}>Choose light or dark mode</p>
                </div>
                <button 
                  onClick={toggleTheme}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${colors.border} ${colors.hoverBg} transition-colors`}
                >
                  {theme === 'light' ? <Moon className={`w-4 h-4 ${colors.textPrimary}`} /> : <Sun className={`w-4 h-4 ${colors.textPrimary}`} />}
                  <span className={colors.textPrimary}>{theme === 'light' ? 'Dark' : 'Light'}</span>
                </button>
              </div>

              <div>
                <label className={`block text-sm font-medium ${colors.textPrimary} mb-2`}>
                  Questions per Timed/Random Quiz
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={settings.questionCount}
                  onChange={(e) => setSettings(s => ({ ...s, questionCount: parseInt(e.target.value) }))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0078d4]"
                />
                <span className={`text-sm ${colors.textSecondary}`}>{settings.questionCount} questions</span>
              </div>

              <div>
                <label className={`block text-sm font-medium ${colors.textPrimary} mb-2`}>
                  Time per Question (Timed mode)
                </label>
                <input
                  type="range"
                  min="15"
                  max="180"
                  step="15"
                  value={settings.timePerQuestion}
                  onChange={(e) => setSettings(s => ({ ...s, timePerQuestion: parseInt(e.target.value) }))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0078d4]"
                />
                <span className={`text-sm ${colors.textSecondary}`}>{settings.timePerQuestion} seconds</span>
              </div>

              <div className={`flex items-center justify-between py-3 border-t ${colors.border}`}>
                <div>
                  <p className={`font-medium ${colors.textPrimary}`}>Shuffle Questions</p>
                  <p className={`text-sm ${colors.textSecondary}`}>Randomize question order</p>
                </div>
                <button 
                  onClick={() => setSettings(s => ({ ...s, shuffleQuestions: !s.shuffleQuestions }))}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.shuffleQuestions ? 'bg-[#0078d4]' : theme === 'dark' ? 'bg-[#404040]' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${
                    settings.shuffleQuestions ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>

              <div className={`flex items-center justify-between py-3 border-t ${colors.border}`}>
                <div>
                  <p className={`font-medium ${colors.textPrimary}`}>Show Explanations</p>
                  <p className={`text-sm ${colors.textSecondary}`}>Display explanations after answering</p>
                </div>
                <button 
                  onClick={() => setSettings(s => ({ ...s, showExplanations: !s.showExplanations }))}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.showExplanations ? 'bg-[#0078d4]' : theme === 'dark' ? 'bg-[#404040]' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${
                    settings.showExplanations ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>

              {/* Color Blind Mode */}
              <div className={`py-3 border-t ${colors.border}`}>
                <div className="flex items-center gap-2 mb-3">
                  <Palette className={`w-5 h-5 ${colors.textPrimary}`} />
                  <p className={`font-medium ${colors.textPrimary}`}>Color Blind Mode</p>
                </div>
                <p className={`text-sm ${colors.textSecondary} mb-3`}>Select a color scheme optimized for color vision deficiency</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setColorBlindMode('none')}
                    className={`p-3 rounded-lg border text-left transition-colors ${
                      colorBlindMode === 'none' 
                        ? 'border-[#0078d4] bg-[#0078d4]/10' 
                        : `${colors.border} ${colors.hoverBg}`
                    }`}
                  >
                    <p className={`font-medium ${colors.textPrimary} text-sm`}>Normal</p>
                    <p className={`text-xs ${colors.textSecondary}`}>Default colors</p>
                    <div className="flex gap-1 mt-2">
                      <span className="w-4 h-4 rounded bg-[#107c10]"></span>
                      <span className="w-4 h-4 rounded bg-[#d13438]"></span>
                    </div>
                  </button>
                  <button
                    onClick={() => setColorBlindMode('deuteranopia')}
                    className={`p-3 rounded-lg border text-left transition-colors ${
                      colorBlindMode === 'deuteranopia' 
                        ? 'border-[#0078d4] bg-[#0078d4]/10' 
                        : `${colors.border} ${colors.hoverBg}`
                    }`}
                  >
                    <p className={`font-medium ${colors.textPrimary} text-sm`}>Deuteranopia</p>
                    <p className={`text-xs ${colors.textSecondary}`}>Red-Green blindness</p>
                    <div className="flex gap-1 mt-2">
                      <span className="w-4 h-4 rounded bg-[#2980b9]"></span>
                      <span className="w-4 h-4 rounded bg-[#e67e22]"></span>
                    </div>
                  </button>
                  <button
                    onClick={() => setColorBlindMode('protanopia')}
                    className={`p-3 rounded-lg border text-left transition-colors ${
                      colorBlindMode === 'protanopia' 
                        ? 'border-[#0078d4] bg-[#0078d4]/10' 
                        : `${colors.border} ${colors.hoverBg}`
                    }`}
                  >
                    <p className={`font-medium ${colors.textPrimary} text-sm`}>Protanopia</p>
                    <p className={`text-xs ${colors.textSecondary}`}>Red-Weak blindness</p>
                    <div className="flex gap-1 mt-2">
                      <span className="w-4 h-4 rounded bg-[#3498db]"></span>
                      <span className="w-4 h-4 rounded bg-[#f1c40f]"></span>
                    </div>
                  </button>
                  <button
                    onClick={() => setColorBlindMode('tritanopia')}
                    className={`p-3 rounded-lg border text-left transition-colors ${
                      colorBlindMode === 'tritanopia' 
                        ? 'border-[#0078d4] bg-[#0078d4]/10' 
                        : `${colors.border} ${colors.hoverBg}`
                    }`}
                  >
                    <p className={`font-medium ${colors.textPrimary} text-sm`}>Tritanopia</p>
                    <p className={`text-xs ${colors.textSecondary}`}>Blue-Yellow blindness</p>
                    <div className="flex gap-1 mt-2">
                      <span className="w-4 h-4 rounded bg-[#1abc9c]"></span>
                      <span className="w-4 h-4 rounded bg-[#c0392b]"></span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Focus Tools Toggle */}
              <div className={`flex items-center justify-between py-3 border-t ${colors.border}`}>
                <div>
                  <div className="flex items-center gap-2">
                    <Timer className={`w-5 h-5 ${colors.textPrimary}`} />
                    <p className={`font-medium ${colors.textPrimary}`}>Focus Tools</p>
                  </div>
                  <p className={`text-sm ${colors.textSecondary}`}>Enable Pomodoro timer & white noise panel</p>
                </div>
                <button 
                  onClick={() => setFocusToolsEnabled(!focusToolsEnabled)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    focusToolsEnabled ? 'bg-[#0078d4]' : theme === 'dark' ? 'bg-[#404040]' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${
                    focusToolsEnabled ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>
            </div>

            <button 
              onClick={goToIntro}
              className="mt-8 w-full bg-[#0078d4] hover:bg-[#106ebe] text-white font-medium py-3 px-6 rounded transition-colors"
            >
              Save & Return
            </button>
          </div>
        </div>
        {renderFocusTools()}
      </div>
    );
  }

  // Intro/Landing Page
  if (appView === 'intro') {
    return (
      <div className={`min-h-screen ${colors.pageBg}`}>
        {/* Header */}
        <header className="bg-[#0078d4] text-white">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-xl font-bold">AZ-305 Exam</span>
                <div className="h-6 w-px bg-white/30"></div>
                <span className="text-lg">Practice Platform</span>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={toggleTheme}
                  className="p-2 hover:bg-white/10 rounded transition-colors"
                  title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                >
                  {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </button>
                <button 
                  onClick={() => setAppView('settings')}
                  className="p-2 hover:bg-white/10 rounded transition-colors"
                >
                  <Settings className="w-5 h-5" />
                </button>
                {onLogout && (
                  <button 
                    onClick={onLogout}
                    className="flex items-center gap-2 px-3 py-1.5 hover:bg-white/10 rounded transition-colors text-sm"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign out
                  </button>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <div className={`${colors.heroBg} text-white py-16`}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-white/20 px-3 py-1 rounded text-sm font-medium">Exam AZ-305</span>
              </div>
              <h1 className="text-4xl font-semibold mb-4">
                Designing Microsoft Azure Infrastructure Solutions
              </h1>
              <p className="text-xl text-white/80 mb-6">
                Prepare for the Azure Solutions Architect Expert certification with {totalQuestions} practice questions.
              </p>
              <div className="flex items-center gap-6 text-sm text-white/70">
                <span>{quizQuestions} Multiple Choice</span>
                <span>•</span>
                <span>{flashcardCount} Case Studies</span>
                <span>•</span>
                <span>4 Skill Areas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Study Modes */}
          <h2 className="text-xl font-semibold text-[#323130] mb-4">Choose a study mode</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Exam Mode - No feedback until end */}
            <button
              onClick={() => startMode('exam')}
              className={`${colors.cardBg} border ${colors.border} rounded-lg p-5 text-left hover:border-[#0078d4] hover:shadow-md transition-all group`}
            >
              <div className="w-12 h-12 bg-[#0078d4]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0078d4]/20">
                <Target className="w-6 h-6 text-[#0078d4]" />
              </div>
              <h3 className={`font-semibold ${colors.textPrimary} mb-1`}>Exam Mode</h3>
              <p className={`text-sm ${colors.textSecondary} mb-3`}>Real exam simulation - score at end</p>
              <span className="text-xs text-[#0078d4] font-medium">{quizQuestions} questions →</span>
            </button>

            {/* Practice Mode - Check each answer */}
            <button
              onClick={() => startMode('practice')}
              className={`${colors.cardBg} border ${colors.border} rounded-lg p-5 text-left hover:shadow-md transition-all group`}
              style={{ ['--hover-border' as any]: statusColors.successRaw }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors"
                style={{ backgroundColor: `${statusColors.successRaw}15` }}
              >
                <CheckCircle className="w-6 h-6" style={{ color: statusColors.successRaw }} />
              </div>
              <h3 className={`font-semibold ${colors.textPrimary} mb-1`}>Practice Mode</h3>
              <p className={`text-sm ${colors.textSecondary} mb-3`}>Check answers & see explanations</p>
              <span className="text-xs font-medium" style={{ color: statusColors.successRaw }}>{quizQuestions} questions →</span>
            </button>

            {/* Timed Exam */}
            <button
              onClick={() => startMode('timed')}
              className={`${colors.cardBg} border ${colors.border} rounded-lg p-5 text-left hover:border-[#d83b01] hover:shadow-md transition-all group`}
            >
              <div className="w-12 h-12 bg-[#d83b01]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#d83b01]/20">
                <Clock className="w-6 h-6 text-[#d83b01]" />
              </div>
              <h3 className={`font-semibold ${colors.textPrimary} mb-1`}>Timed Exam</h3>
              <p className={`text-sm ${colors.textSecondary} mb-3`}>Exam mode with time pressure</p>
              <span className="text-xs text-[#d83b01] font-medium">{settings.questionCount} questions • {settings.timePerQuestion}s each →</span>
            </button>

            {/* Flashcards */}
            <button
              onClick={() => startMode('flashcard')}
              className={`${colors.cardBg} border ${colors.border} rounded-lg p-5 text-left hover:border-[#8764b8] hover:shadow-md transition-all group`}
            >
              <div className="w-12 h-12 bg-[#8764b8]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#8764b8]/20">
                <BookOpen className="w-6 h-6 text-[#8764b8]" />
              </div>
              <h3 className={`font-semibold ${colors.textPrimary} mb-1`}>Case Studies</h3>
              <p className={`text-sm ${colors.textSecondary} mb-3`}>HOTSPOT & diagram questions</p>
              <span className="text-xs text-[#8764b8] font-medium">{flashcardCount} flashcards →</span>
            </button>
          </div>

          {/* Review Mistakes - only shows for practice mode incorrect answers */}
          {practiceIncorrect.length > 0 && (
            <button
              onClick={() => {
                setExamReviewQuestions([]); // Clear exam review questions
                startMode('review');
              }}
              className={`w-full mb-8 ${colors.warningBg} border ${colors.warningBorder} rounded-lg p-4 text-left hover:opacity-90 transition-colors`}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#ffb900]/20 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-[#ffb900]" />
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold ${colors.textPrimary}`}>Review Incorrect Answers</h3>
                  <p className={`text-sm ${colors.textSecondary}`}>Practice the {practiceIncorrect.length} questions you missed</p>
                </div>
                <ChevronRight className={`w-5 h-5 ${colors.textSecondary}`} />
              </div>
            </button>
          )}

          {/* Skills Measured */}
          <div className={`${colors.cardBg} border ${colors.border} rounded-lg p-6`}>
            <h2 className={`text-lg font-semibold ${colors.textPrimary} mb-4`}>Skills measured</h2>
            <p className={`text-sm ${colors.textSecondary} mb-4`}>Select a category to practice specific skills:</p>
            
            <div className="space-y-2">
              {categories.slice(1).map(cat => {
                const count = questions.filter(q => q.category === cat && q.type === 'multiple-choice').length;
                return (
                  <button
                    key={cat}
                    onClick={() => startMode('practice', cat)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg ${colors.hoverBg} transition-colors text-left group`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#0078d4]"></div>
                      <span className={`${colors.textPrimary} group-hover:text-[#0078d4]`}>{cat}</span>
                    </div>
                    <span className={`text-sm ${colors.textSecondary}`}>{count} questions</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Priority Areas */}
          <div className={`mt-8 ${colors.infoBg} border ${colors.infoBorder} rounded-lg p-6`}>
            <h3 className="font-semibold text-[#0078d4] mb-3 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              Key Study Areas
            </h3>
            <ul className="space-y-2 text-sm text-[#323130]">
              {priorityAreas.map((area, i) => (
                <li key={i} className={`flex items-start gap-2 ${colors.textPrimary}`}>
                  <span className="text-[#0078d4]">•</span>
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Print Materials Section */}
          <div className={`mt-8 ${colors.cardBg} border ${colors.border} rounded-lg p-6`}>
            <h3 className={`font-semibold ${colors.textPrimary} mb-4 flex items-center gap-2`}>
              <Printer className="w-5 h-5 text-[#881798]" />
              Print Study Materials
            </h3>
            <p className={`text-sm ${colors.textSecondary} mb-4`}>
              Generate printable PDF-ready documents for offline study
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* Print Exam Questions */}
              <div className={`border ${colors.border} rounded-lg p-4`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#0078d4]/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#0078d4]" />
                  </div>
                  <div>
                    <h4 className={`font-medium ${colors.textPrimary}`}>Exam Questions</h4>
                    <p className={`text-xs ${colors.textSecondary}`}>{quizQuestions} multiple-choice questions</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <button
                    onClick={() => printExam('All', true)}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-[#0078d4] hover:bg-[#106ebe] text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    <Printer className="w-4 h-4" />
                    Print with Answers
                  </button>
                  <button
                    onClick={() => printQuestionsOnly('All')}
                    className={`w-full flex items-center justify-center gap-2 px-3 py-2 ${colors.hoverBg} ${colors.textPrimary} border ${colors.border} rounded-lg text-sm font-medium transition-colors hover:border-[#0078d4]`}
                  >
                    <FileText className="w-4 h-4" />
                    Print Questions Only
                  </button>
                </div>
                
                {/* Category-specific print */}
                <details className={`mt-3 text-sm ${colors.textSecondary}`}>
                  <summary className="cursor-pointer hover:text-[#0078d4] py-1">Print by category...</summary>
                  <div className="mt-2 space-y-1 pl-2">
                    {categories.slice(1).map(cat => (
                      <button
                        key={cat}
                        onClick={() => printExam(cat, true)}
                        className={`w-full text-left px-2 py-1 rounded ${colors.hoverBg} text-xs truncate`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </details>
              </div>

              {/* Print Flashcards */}
              <div className={`border ${colors.border} rounded-lg p-4`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#8764b8]/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-[#8764b8]" />
                  </div>
                  <div>
                    <h4 className={`font-medium ${colors.textPrimary}`}>Case Studies & Flashcards</h4>
                    <p className={`text-xs ${colors.textSecondary}`}>{flashcardCount} HOTSPOT & diagram cards</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <a
                    href="/AZ305-Flashcards.pdf"
                    target="_blank"
                    download
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-[#8764b8] hover:bg-[#7356a5] text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF ({flashcardCount} cards)
                  </a>
                  <button
                    onClick={() => printFlashcards('All')}
                    className={`w-full flex items-center justify-center gap-2 px-3 py-2 ${colors.hoverBg} ${colors.textPrimary} border ${colors.border} rounded-lg text-sm font-medium transition-colors hover:border-[#8764b8]`}
                  >
                    <Printer className="w-4 h-4" />
                    Print Dynamically
                  </button>
                </div>
                
                {/* Category-specific flashcard print */}
                <details className={`mt-3 text-sm ${colors.textSecondary}`}>
                  <summary className="cursor-pointer hover:text-[#8764b8] py-1">Print by category...</summary>
                  <div className="mt-2 space-y-1 pl-2">
                    {categories.slice(1).map(cat => {
                      const catCount = questions.filter(q => q.type === 'flashcard' && q.category === cat).length;
                      if (catCount === 0) return null;
                      return (
                        <button
                          key={cat}
                          onClick={() => printFlashcards(cat)}
                          className={`w-full text-left px-2 py-1 rounded ${colors.hoverBg} text-xs truncate`}
                        >
                          {cat} ({catCount})
                        </button>
                      );
                    })}
                  </div>
                </details>
              </div>
            </div>
            
            <p className={`mt-4 text-xs ${colors.textMuted} flex items-center gap-1`}>
              <Lightbulb className="w-3 h-3" />
              Tip: Use your browser&apos;s &quot;Save as PDF&quot; option in the print dialog for digital copies
            </p>
          </div>
        </div>
        {renderFocusTools()}
      </div>
    );
  }

  // Review All Questions View (End of Exam)
  if (appView === 'reviewAll') {
    const percentage = filteredQuestions.length > 0 
      ? Math.round((score / filteredQuestions.length) * 100) 
      : 0;
    const passed = percentage >= 70;

    return (
      <div className={`min-h-screen ${colors.pageBg}`}>
        {/* Header */}
        <header className={`${colors.headerBg} border-b ${colors.border} px-6 py-3`}>
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <span className={`font-semibold ${colors.textPrimary}`}>Exam AZ-305 - Results</span>
            <div className="flex items-center gap-4">
              <span className={`text-sm ${colors.textSecondary}`}>Time: {formatTime(totalTimeElapsed)}</span>
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded ${colors.hoverBg} transition-colors`}
              >
                {theme === 'light' ? <Moon className={`w-5 h-5 ${colors.textSecondary}`} /> : <Sun className={`w-5 h-5 ${colors.textSecondary}`} />}
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto p-8">
          {/* Score Card */}
          <div className={`rounded-lg p-8 mb-8 text-center ${passed ? colors.successBg + ' border ' + colors.successBorder : colors.errorBg + ' border ' + colors.errorBorder}`}>
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${passed ? 'bg-[#107c10]' : 'bg-[#d13438]'}`}>
              {passed ? (
                <Trophy className="w-10 h-10 text-white" />
              ) : (
                <X className="w-10 h-10 text-white" />
              )}
            </div>
            <h2 className={`text-3xl font-bold mb-2 ${passed ? colors.successText : colors.errorText}`}>
              {passed ? 'Congratulations!' : 'Keep Practicing!'}
            </h2>
            <p className={`text-5xl font-bold ${colors.textPrimary} mb-2`}>{percentage}%</p>
            <p className={colors.textSecondary}>
              {score} of {filteredQuestions.length} questions correct
            </p>
            <p className={`text-sm ${colors.textSecondary} mt-2`}>
              Passing score: 70% • Your score: {percentage}%
            </p>
          </div>

          {/* Question Review Grid */}
          <div className={`${colors.cardBg} rounded-lg border ${colors.border} p-6 mb-8`}>
            <h3 className={`font-semibold ${colors.textPrimary} mb-4`}>Question Review</h3>
            <div className="grid grid-cols-10 gap-2 mb-6">
              {filteredQuestions.map((q, idx) => {
                const answered = answeredQuestions.has(q.id);
                const userAnswers = answeredQuestions.get(q.id) || [];
                const isCorrect = answered && 
                  userAnswers.length === (q.correct?.length || 0) &&
                  userAnswers.every(a => q.correct?.includes(a));
                const isFlagged = flaggedQuestions.has(q.id);

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentQuestionIndex(idx);
                      setSelectedAnswers(userAnswers);
                      setShowResult(true);
                      setShowExplanation(true);
                      setQuizCompleted(false);
                      setAppView('quiz');
                    }}
                    className={`w-8 h-8 rounded text-xs font-medium relative transition-colors
                      ${!answered ? (theme === 'dark' ? 'bg-[#404040] text-gray-400 hover:bg-[#505050]' : 'bg-gray-100 text-gray-500 hover:bg-gray-200') : 
                        isCorrect ? (theme === 'dark' ? 'bg-[#0e3b0e] text-[#4caf50] hover:bg-[#124712]' : 'bg-[#dff6dd] text-[#107c10] hover:bg-[#c8eac8]') : 
                        (theme === 'dark' ? 'bg-[#3b0e0e] text-[#f44336] hover:bg-[#4a1212]' : 'bg-[#fde7e9] text-[#d13438] hover:bg-[#fcd5d5]')}`}
                  >
                    {idx + 1}
                    {isFlagged && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#ffb900] rounded-full"></span>
                    )}
                  </button>
                );
              })}
            </div>
            
            <div className={`flex items-center gap-6 text-sm ${colors.textSecondary}`}>
              <span className="flex items-center gap-2">
                <span className={`w-4 h-4 rounded ${theme === 'dark' ? 'bg-[#0e3b0e]' : 'bg-[#dff6dd]'}`}></span>
                Correct
              </span>
              <span className="flex items-center gap-2">
                <span className={`w-4 h-4 rounded ${theme === 'dark' ? 'bg-[#3b0e0e]' : 'bg-[#fde7e9]'}`}></span>
                Incorrect
              </span>
              <span className="flex items-center gap-2">
                <span className={`w-4 h-4 rounded ${theme === 'dark' ? 'bg-[#404040]' : 'bg-gray-100'}`}></span>
                Unanswered
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#ffb900] rounded-full"></span>
                Flagged
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              onClick={goToIntro}
              className={`flex-1 ${colors.cardBg} border ${colors.borderLight} ${colors.textPrimary} font-medium py-3 px-6 rounded ${colors.hoverBg} transition-colors`}
            >
              Return to Home
            </button>
            <button
              onClick={resetQuiz}
              className="flex-1 bg-[#0078d4] hover:bg-[#106ebe] text-white font-medium py-3 px-6 rounded transition-colors"
            >
              Retake Exam
            </button>
            {/* For exam mode, show exam results; for practice mode, show practice incorrect */}
            {((studyMode === 'exam' || studyMode === 'timed') && lastExamResults && lastExamResults.incorrect.length > 0) && (
              <button
                onClick={() => {
                  // Set up review mode with exam's incorrect questions
                  setExamReviewQuestions(lastExamResults.incorrect);
                  setStudyMode('review');
                  setSelectedCategory('All');
                  setCurrentQuestionIndex(0);
                  setQuizCompleted(false);
                  setShowResult(false);
                  setSelectedAnswers([]);
                  setAppView('quiz');
                }}
                className="flex-1 bg-[#d83b01] hover:bg-[#c43501] text-white font-medium py-3 px-6 rounded transition-colors"
              >
                Review Mistakes ({lastExamResults.incorrect.length})
              </button>
            )}
            {studyMode === 'practice' && practiceIncorrect.length > 0 && (
              <button
                onClick={() => {
                  setExamReviewQuestions([]); // Clear exam review questions
                  startMode('review');
                }}
                className="flex-1 bg-[#d83b01] hover:bg-[#c43501] text-white font-medium py-3 px-6 rounded transition-colors"
              >
                Review Mistakes ({practiceIncorrect.length})
              </button>
            )}
          </div>
        </div>
        {renderFocusTools()}
      </div>
    );
  }

  // No Questions Available
  if (filteredQuestions.length === 0) {
    return (
      <div className={`min-h-screen ${colors.pageBg} flex items-center justify-center`}>
        <div className={`${colors.cardBg} rounded-lg border ${colors.border} p-8 text-center max-w-md`}>
          <BookOpen className="w-16 h-16 text-[#0078d4] mx-auto mb-4" />
          <h2 className={`text-xl font-semibold ${colors.textPrimary} mb-2`}>No Questions Available</h2>
          <p className={`${colors.textSecondary} mb-6`}>
            {studyMode === 'review' 
              ? "You haven't missed any questions yet. Complete a practice test first!"
              : "No questions match your selected category."}
          </p>
          <button
            onClick={goToIntro}
            className="bg-[#0078d4] hover:bg-[#106ebe] text-white font-medium py-2 px-6 rounded transition-colors"
          >
            Return to Home
          </button>
        </div>
        {renderFocusTools()}
      </div>
    );
  }

  // Main Exam View
  return (
    <div className={`min-h-screen ${colors.pageBg} flex flex-col`}>
      {/* Top Navigation Bar */}
      <header className={`${colors.headerBg} border-b ${colors.borderLight} flex-shrink-0`}>
        <div className="flex items-center justify-between px-4 py-2">
          {/* Left: Exam Info */}
          <div className="flex items-center gap-4">
            <button
              onClick={goToIntro}
              className={`p-2 ${colors.hoverBg} rounded transition-colors`}
              title="Exit exam"
            >
              <Home className={`w-5 h-5 ${colors.textSecondary}`} />
            </button>
            <div className={`h-6 w-px ${theme === 'dark' ? 'bg-[#404040]' : 'bg-gray-300'}`}></div>
            <span className={`font-semibold ${colors.textPrimary}`}>Exam AZ-305</span>
            <span className={`text-sm ${colors.textSecondary} hidden md:inline`}>
              {studyMode === 'exam' ? 'Exam Mode' : 
               studyMode === 'practice' ? 'Practice Mode' :
               studyMode === 'timed' ? 'Timed Exam' : 
               studyMode === 'flashcard' ? 'Case Study' : 
               studyMode === 'review' ? 'Review Mode' : 'Practice'}
            </span>
          </div>

          {/* Center: Timer */}
          {studyMode === 'timed' && (
            <div className={`flex items-center gap-2 ${colors.textPrimary}`}>
              <Clock className="w-4 h-4" />
              <span className="font-mono">
                {timeRemaining !== null && (
                  <span className={timeRemaining < 10 ? 'text-[#d13438] font-bold' : ''}>
                    {formatTime(timeRemaining)}
                  </span>
                )}
              </span>
            </div>
          )}

          {/* Right: Tools */}
          <div className="flex items-center gap-1">
            {/* Font Size */}
            <div className="flex items-center">
              <button
                onClick={() => setFontSize(prev => prev === 'large' ? 'medium' : prev === 'medium' ? 'small' : 'small')}
                className={`p-2 ${colors.hoverBg} rounded-l transition-colors border-r ${colors.border}`}
                title="Decrease font size"
                disabled={fontSize === 'small'}
              >
                <Minus className={`w-4 h-4 ${fontSize === 'small' ? colors.textMuted : colors.textSecondary}`} />
              </button>
              <span className={`px-2 text-xs ${colors.textSecondary}`}>
                <Type className="w-4 h-4" />
              </span>
              <button
                onClick={() => setFontSize(prev => prev === 'small' ? 'medium' : prev === 'medium' ? 'large' : 'large')}
                className={`p-2 ${colors.hoverBg} rounded-r transition-colors`}
                title="Increase font size"
                disabled={fontSize === 'large'}
              >
                <Plus className={`w-4 h-4 ${fontSize === 'large' ? colors.textMuted : colors.textSecondary}`} />
              </button>
            </div>
            
            <div className={`h-6 w-px mx-1 ${theme === 'dark' ? 'bg-[#404040]' : 'bg-gray-300'}`}></div>
            
            <button
              onClick={() => setShowNotes(true)}
              className={`p-2 ${colors.hoverBg} rounded transition-colors relative`}
              title="Notes (Ctrl+N)"
            >
              <StickyNote className={`w-5 h-5 ${colors.textSecondary}`} />
              {currentQuestion && notes.has(currentQuestion.id) && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#ffb900] rounded-full"></span>
              )}
            </button>
            <button
              onClick={toggleTheme}
              className={`p-2 ${colors.hoverBg} rounded transition-colors`}
              title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <Moon className={`w-5 h-5 ${colors.textSecondary}`} /> : <Sun className={`w-5 h-5 ${colors.textSecondary}`} />}
            </button>
            <button
              onClick={() => setShowKeyboardShortcuts(true)}
              className={`p-2 ${colors.hoverBg} rounded transition-colors`}
              title="Keyboard shortcuts (?)"
            >
              <Keyboard className={`w-5 h-5 ${colors.textSecondary}`} />
            </button>
            
            <div className={`h-6 w-px mx-1 ${theme === 'dark' ? 'bg-[#404040]' : 'bg-gray-300'}`}></div>
            
            <button
              onClick={() => setShowQuestionList(true)}
              className={`flex items-center gap-2 px-3 py-1.5 ${colors.hoverBg} rounded transition-colors text-sm ${colors.textPrimary}`}
            >
              <List className="w-4 h-4" />
              <span className="hidden sm:inline">Review</span>
            </button>
            <button
              onClick={() => setShowCalculator(!showCalculator)}
              className={`p-2 ${colors.hoverBg} rounded transition-colors`}
              title="Calculator"
            >
              <Calculator className={`w-5 h-5 ${colors.textSecondary}`} />
            </button>
          </div>
        </div>

        {/* Section Progress Divider - Microsoft Learn Style */}
        {showSectionProgress && studyMode !== 'flashcard' && (
          <div className={`px-4 py-2 ${theme === 'dark' ? 'bg-[#252525]' : 'bg-[#faf9f8]'} border-b ${colors.border}`}>
            <div className="flex items-center gap-6 overflow-x-auto">
              {Object.entries(categoryProgress).map(([category, data]) => (
                <div key={category} className="flex items-center gap-2 flex-shrink-0">
                  <div className={`w-3 h-3 rounded-full ${
                    data.answered === data.total 
                      ? 'bg-[#107c10]' 
                      : data.answered > 0 
                        ? 'bg-[#ffb900]' 
                        : theme === 'dark' ? 'bg-[#404040]' : 'bg-gray-300'
                  }`}></div>
                  <span className={`text-xs ${colors.textSecondary} whitespace-nowrap`}>
                    {category.replace('Design ', '').split(' ').slice(0, 2).join(' ')}
                  </span>
                  <span className={`text-xs font-medium ${colors.textPrimary}`}>
                    {data.answered}/{data.total}
                  </span>
                </div>
              ))}
              <button
                onClick={() => setShowSectionProgress(false)}
                className={`p-1 ${colors.hoverBg} rounded ml-auto flex-shrink-0`}
                title="Hide section progress"
              >
                <X className={`w-3 h-3 ${colors.textSecondary}`} />
              </button>
            </div>
          </div>
        )}

        {/* Progress Bar */}
        <div className={`h-1 ${theme === 'dark' ? 'bg-[#404040]' : 'bg-gray-200'}`}>
          <div 
            className="h-full bg-[#0078d4] transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / filteredQuestions.length) * 100}%` }}
          />
        </div>
      </header>

      {/* Question List Sidebar */}
      {showQuestionList && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowQuestionList(false)}></div>
          <div className={`relative ml-auto w-80 ${colors.cardBg} h-full shadow-xl overflow-y-auto`}>
            <div className={`sticky top-0 ${colors.cardBg} border-b ${colors.border} p-4 flex items-center justify-between`}>
              <h3 className={`font-semibold ${colors.textPrimary}`}>Question Navigator</h3>
              <button onClick={() => setShowQuestionList(false)} className={`p-1 ${colors.hoverBg} rounded`}>
                <X className={`w-5 h-5 ${colors.textSecondary}`} />
              </button>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-5 gap-2">
                {filteredQuestions.map((q, idx) => {
                  const answered = answeredQuestions.has(q.id);
                  const isFlagged = flaggedQuestions.has(q.id);
                  const isCurrent = idx === currentQuestionIndex;

                  return (
                    <button
                      key={q.id}
                      onClick={() => goToQuestion(idx)}
                      className={`w-10 h-10 rounded text-sm font-medium relative transition-colors
                        ${isCurrent ? 'bg-[#0078d4] text-white' : 
                          answered ? (theme === 'dark' ? 'bg-[#0e3b0e] text-[#4caf50]' : 'bg-[#dff6dd] text-[#107c10]') : 
                          (theme === 'dark' ? 'bg-[#404040] text-gray-400 hover:bg-[#505050]' : 'bg-gray-100 text-[#605e5c] hover:bg-gray-200')}`}
                    >
                      {idx + 1}
                      {isFlagged && (
                        <span className={`absolute -top-1 -right-1 w-3 h-3 bg-[#ffb900] rounded-full border-2 ${theme === 'dark' ? 'border-[#2d2d2d]' : 'border-white'}`}></span>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className={`mt-6 space-y-2 text-sm ${colors.textSecondary}`}>
                <div className="flex items-center gap-2">
                  <span className={`w-4 h-4 rounded ${theme === 'dark' ? 'bg-[#0e3b0e]' : 'bg-[#dff6dd]'}`}></span>
                  <span>Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`w-4 h-4 rounded ${theme === 'dark' ? 'bg-[#404040]' : 'bg-gray-100'}`}></span>
                  <span>Not answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-[#0078d4] rounded"></span>
                  <span>Current</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#ffb900] rounded-full"></span>
                  <span>Flagged for review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notes Panel */}
      {showNotes && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowNotes(false)}></div>
          <div className={`relative w-full max-w-lg ${colors.cardBg} rounded-lg shadow-xl mx-4`}>
            <div className={`flex items-center justify-between p-4 border-b ${colors.border}`}>
              <div className="flex items-center gap-2">
                <StickyNote className="w-5 h-5 text-[#ffb900]" />
                <h3 className={`font-semibold ${colors.textPrimary}`}>Notes - Question {currentQuestionIndex + 1}</h3>
              </div>
              <button onClick={() => setShowNotes(false)} className={`p-1 ${colors.hoverBg} rounded`}>
                <X className={`w-5 h-5 ${colors.textSecondary}`} />
              </button>
            </div>
            <div className="p-4">
              <textarea
                value={currentQuestion ? (notes.get(currentQuestion.id) || '') : ''}
                onChange={(e) => updateNote(e.target.value)}
                placeholder="Add your notes here... These will be saved for this question."
                className={`w-full h-48 p-3 ${colors.cardBg} border ${colors.border} rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#0078d4] ${colors.textPrimary}`}
              />
              <p className={`mt-2 text-xs ${colors.textSecondary}`}>
                💡 Notes are saved automatically and persist across questions.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Calculator Modal */}
      {showCalculator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowCalculator(false)}></div>
          <div className={`relative w-72 ${colors.cardBg} rounded-lg shadow-xl mx-4`}>
            <div className={`flex items-center justify-between p-3 border-b ${colors.border}`}>
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#0078d4]" />
                <h3 className={`font-semibold ${colors.textPrimary}`}>Calculator</h3>
              </div>
              <button onClick={() => setShowCalculator(false)} className={`p-1 ${colors.hoverBg} rounded`}>
                <X className={`w-5 h-5 ${colors.textSecondary}`} />
              </button>
            </div>
            <div className="p-3">
              {/* Display */}
              <div className={`${theme === 'dark' ? 'bg-[#1b1b1b]' : 'bg-gray-100'} p-3 rounded-lg mb-3 text-right`}>
                <div className={`text-2xl font-mono ${colors.textPrimary} truncate`}>{calcDisplay}</div>
                {calcOperator && (
                  <div className={`text-xs ${colors.textSecondary}`}>{calcPrevValue} {calcOperator}</div>
                )}
              </div>
              {/* Buttons */}
              <div className="grid grid-cols-4 gap-2">
                {['C', '±', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '⌫', '='].map((btn) => (
                  <button
                    key={btn}
                    onClick={() => {
                      if (btn === 'C') calcClear();
                      else if (btn === '⌫') setCalcDisplay(prev => prev.length > 1 ? prev.slice(0, -1) : '0');
                      else if (btn === '±') setCalcDisplay(prev => prev.startsWith('-') ? prev.slice(1) : '-' + prev);
                      else if (btn === '%') setCalcDisplay(prev => String(parseFloat(prev) / 100));
                      else if (['+', '-', '×', '÷'].includes(btn)) calcSetOperator(btn);
                      else if (btn === '=') calcCalculate();
                      else if (btn === '.') setCalcDisplay(prev => prev.includes('.') ? prev : prev + '.');
                      else calcInput(btn);
                    }}
                    className={`p-3 rounded-lg font-medium transition-colors ${
                      btn === '=' ? 'bg-[#0078d4] text-white hover:bg-[#106ebe]' :
                      ['C', '±', '%'].includes(btn) ? `${theme === 'dark' ? 'bg-[#404040] hover:bg-[#505050]' : 'bg-gray-200 hover:bg-gray-300'} ${colors.textPrimary}` :
                      ['+', '-', '×', '÷'].includes(btn) ? 'bg-[#f3f2f1] text-[#0078d4] hover:bg-[#e1dfdd]' :
                      `${theme === 'dark' ? 'bg-[#2d2d2d] hover:bg-[#3d3d3d]' : 'bg-white hover:bg-gray-50'} ${colors.textPrimary} border ${colors.border}`
                    }`}
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Keyboard Shortcuts Modal */}
      {showKeyboardShortcuts && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowKeyboardShortcuts(false)}></div>
          <div className={`relative w-full max-w-md ${colors.cardBg} rounded-lg shadow-xl mx-4`}>
            <div className={`flex items-center justify-between p-4 border-b ${colors.border}`}>
              <div className="flex items-center gap-2">
                <Keyboard className="w-5 h-5 text-[#0078d4]" />
                <h3 className={`font-semibold ${colors.textPrimary}`}>Keyboard Shortcuts</h3>
              </div>
              <button onClick={() => setShowKeyboardShortcuts(false)} className={`p-1 ${colors.hoverBg} rounded`}>
                <X className={`w-5 h-5 ${colors.textSecondary}`} />
              </button>
            </div>
            <div className="p-4 space-y-3">
              {[
                { key: 'A, B, C, D...', action: 'Select answer option' },
                { key: '←', action: 'Previous question' },
                { key: '→', action: studyMode === 'exam' || studyMode === 'timed' ? 'Next question' : 'Next (after check)' },
                { key: 'Enter', action: studyMode === 'exam' || studyMode === 'timed' ? 'Next question' : 'Check answer / Next' },
                { key: 'Ctrl + F', action: 'Flag for review' },
                { key: 'Ctrl + N', action: 'Open notes' },
                { key: '?', action: 'Show this help' },
              ].map(({ key, action }) => (
                <div key={key} className="flex items-center justify-between">
                  <span className={colors.textSecondary}>{action}</span>
                  <kbd className={`px-2 py-1 ${theme === 'dark' ? 'bg-[#404040]' : 'bg-gray-100'} rounded text-sm font-mono ${colors.textPrimary}`}>
                    {key}
                  </kbd>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mode Info Banner */}
      {(studyMode === 'exam' || studyMode === 'practice') && currentQuestionIndex === 0 && !answeredQuestions.has(currentQuestion?.id || 0) && (
        <div className={`${studyMode === 'exam' ? 'bg-[#0078d4]' : 'bg-[#107c10]'} text-white px-4 py-2 text-center text-sm`}>
          {studyMode === 'exam' ? (
            <span>📝 <strong>Exam Mode:</strong> Answer all questions, then see your score at the end. No feedback during the exam.</span>
          ) : (
            <span>✅ <strong>Practice Mode:</strong> Check each answer immediately and see explanations. Learn as you go!</span>
          )}
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-6">
          {currentQuestion && (
            <>
              {/* Question Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <span className={`text-lg font-semibold ${colors.textPrimary}`}>
                    Question {currentQuestionIndex + 1}
                    <span className={`${colors.textSecondary} font-normal`}> of {filteredQuestions.length}</span>
                  </span>
                  {currentQuestion.multipleAnswers && (
                    <span className={`${colors.warningBg} text-[#8a6d00] text-xs font-medium px-2 py-1 rounded`}>
                      Select all that apply
                    </span>
                  )}
                </div>
                <button
                  onClick={toggleFlag}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded transition-colors text-sm
                    ${flaggedQuestions.has(currentQuestion.id) 
                      ? 'bg-[#ffb900] text-white' 
                      : theme === 'dark' ? 'bg-[#404040] text-gray-400 hover:bg-[#505050]' : 'bg-gray-100 text-[#605e5c] hover:bg-gray-200'}`}
                >
                  <Flag className="w-4 h-4" />
                  {flaggedQuestions.has(currentQuestion.id) ? 'Flagged' : 'Flag'}
                </button>
              </div>

              {/* Category Badge */}
              <div className="mb-4">
                <span className={`text-xs font-medium text-[#0078d4] ${theme === 'dark' ? 'bg-[#0a3d5c]' : 'bg-[#eff6fc]'} px-2 py-1 rounded`}>
                  {currentQuestion.category}
                </span>
              </div>

              {/* Question Card */}
              <div className={`${colors.cardBg} rounded-lg border ${colors.border} shadow-sm`}>
                {/* Flashcard Mode */}
                {studyMode === 'flashcard' && currentQuestion.type === 'flashcard' ? (
                  <div 
                    className="p-6 cursor-pointer min-h-[400px]"
                    onClick={() => toggleFlipCard(currentQuestion.id)}
                  >
                    {!flippedCards.has(currentQuestion.id) ? (
                      <div>
                        <div className="text-center mb-4">
                          <span className={`inline-block px-3 py-1 ${theme === 'dark' ? 'bg-[#0a3d5c]' : 'bg-[#eff6fc]'} text-[#0078d4] rounded text-sm font-medium`}>
                            Click to reveal answer
                          </span>
                        </div>
                        <div className={`${colors.textPrimary} ${fontSizeClasses[fontSize]} whitespace-pre-line leading-relaxed mb-6`}>
                          {formatQuestionText(currentQuestion.question)}
                        </div>
                        {currentQuestion.frontImages && currentQuestion.frontImages.length > 0 && (
                          <div className="space-y-4">
                            {currentQuestion.frontImages.map((img, idx) => (
                              <img 
                                key={idx}
                                src={img} 
                                alt={`Question diagram ${idx + 1}`}
                                className={`max-w-full mx-auto rounded border ${colors.border}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div>
                        <div className="text-center mb-4">
                          <span 
                            className={`inline-block px-3 py-1 rounded text-sm font-medium ${colors.successBg}`}
                            style={{ color: statusColors.successRaw }}
                          >
                            ✓ Answer
                          </span>
                        </div>
                        {currentQuestion.backImage ? (
                          <img 
                            src={currentQuestion.backImage} 
                            alt="Answer"
                            className="max-w-full mx-auto rounded border-2"
                            style={{ borderColor: statusColors.successRaw }}
                          />
                        ) : (
                          <div className={`p-4 ${colors.successBg} rounded-lg`}>
                            <p className={colors.textPrimary}>
                              {currentQuestion.explanation || 'See the discussion link for the answer.'}
                            </p>
                          </div>
                        )}
                        {currentQuestion.sourceLink && (
                          <div className="mt-4 text-center">
                            <a 
                              href={currentQuestion.sourceLink} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#0078d4] hover:underline text-sm"
                              onClick={(e) => e.stopPropagation()}
                            >
                              View Discussion →
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  /* Quiz Mode */
                  <div className="p-6">
                    {/* Question Text */}
                    <div className={`${colors.textPrimary} ${fontSizeClasses[fontSize]} whitespace-pre-line leading-relaxed mb-6`}>
                      {formatQuestionText(currentQuestion.question)}
                    </div>

                    {/* Question Images */}
                    {currentQuestion.images && currentQuestion.images.length > 0 && (
                      <div className="space-y-4 mb-6">
                        {currentQuestion.images.map((img, idx) => (
                          <img 
                            key={idx}
                            src={img} 
                            alt={`Question diagram ${idx + 1}`}
                            className={`max-w-full rounded border ${colors.border}`}
                          />
                        ))}
                      </div>
                    )}

                    {/* Answer Options - Microsoft Style with Color Blind Support */}
                    <div className="space-y-3">
                      {currentQuestion.options?.map((option, index) => {
                        const isSelected = selectedAnswers.includes(index);
                        const isCorrect = currentQuestion.correct?.includes(index);
                        const showCorrectness = showResult;
                        
                        let optionClass = `w-full flex items-start gap-3 p-4 rounded-lg border-2 text-left transition-all ${fontSizeClasses[fontSize]} `;
                        
                        if (showCorrectness) {
                          if (isCorrect) {
                            optionClass += `${colors.successBg} ${colors.successBorder}`;
                          } else if (isSelected && !isCorrect) {
                            optionClass += `${colors.errorBg} ${colors.errorBorder}`;
                          } else {
                            optionClass += theme === 'dark' ? 'bg-[#2d2d2d] border-[#404040]' : 'bg-gray-50 border-gray-200';
                          }
                        } else {
                          optionClass += isSelected 
                            ? (theme === 'dark' ? 'bg-[#0a3d5c] border-[#0078d4]' : 'bg-[#eff6fc] border-[#0078d4]')
                            : (theme === 'dark' ? 'bg-[#2d2d2d] border-[#404040] hover:border-[#0078d4] hover:bg-[#363636]' : 'bg-white border-gray-200 hover:border-[#0078d4] hover:bg-[#faf9f8]');
                        }

                        return (
                          <button
                            key={index}
                            onClick={() => handleAnswerSelect(index)}
                            disabled={showResult}
                            className={optionClass}
                          >
                            {/* Radio/Checkbox */}
                            <div 
                              className={`flex-shrink-0 w-5 h-5 mt-0.5 ${currentQuestion.multipleAnswers ? 'rounded-sm' : 'rounded-full'} border-2 flex items-center justify-center`}
                              style={{
                                borderColor: showCorrectness && isCorrect ? statusColors.successRaw :
                                  showCorrectness && isSelected && !isCorrect ? statusColors.errorRaw :
                                  isSelected ? '#0078d4' : (theme === 'dark' ? '#6b7280' : '#9ca3af'),
                                backgroundColor: showCorrectness && isCorrect ? statusColors.successRaw :
                                  showCorrectness && isSelected && !isCorrect ? statusColors.errorRaw :
                                  isSelected ? '#0078d4' : 'transparent'
                              }}
                            >
                              {(isSelected || (showCorrectness && isCorrect)) && (
                                currentQuestion.multipleAnswers ? (
                                  <CheckCircle className="w-3 h-3 text-white" />
                                ) : (
                                  <div className="w-2 h-2 rounded-full bg-white"></div>
                                )
                              )}
                            </div>
                            
                            {/* Option Label */}
                            <span 
                              className={`font-semibold mr-2 ${isSelected && !showCorrectness ? 'text-[#0078d4]' : !showCorrectness ? colors.textPrimary : ''}`}
                              style={{
                                color: showCorrectness && isCorrect ? statusColors.successRaw :
                                  showCorrectness && isSelected && !isCorrect ? statusColors.errorRaw : undefined
                              }}
                            >
                              {String.fromCharCode(65 + index)}.
                            </span>
                            
                            {/* Option Text */}
                            <span 
                              className={`flex-1 ${!showCorrectness ? colors.textPrimary : ''}`}
                              style={{
                                color: showCorrectness && isCorrect ? statusColors.successRaw :
                                  showCorrectness && isSelected && !isCorrect ? statusColors.errorRaw : undefined
                              }}
                            >
                              {option}
                            </span>

                            {/* Result Icons with color blind support */}
                            {showCorrectness && isCorrect && (
                              <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: statusColors.successRaw }} />
                            )}
                            {showCorrectness && isSelected && !isCorrect && (
                              <XCircle className="w-5 h-5 flex-shrink-0" style={{ color: statusColors.errorRaw }} />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation Panel */}
                    {showResult && settings.showExplanations && (
                      <div className={`mt-6 border-t ${colors.border} pt-6`}>
                        <button
                          onClick={() => setShowExplanation(!showExplanation)}
                          className="flex items-center gap-2 text-[#0078d4] hover:underline font-medium"
                        >
                          <MessageSquare className="w-4 h-4" />
                          {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
                        </button>
                        {showExplanation && (
                          <div className={`mt-4 p-4 ${theme === 'dark' ? 'bg-[#0a3d5c]' : 'bg-[#eff6fc]'} rounded-lg border border-[#0078d4]/20`}>
                            <p className={`${colors.textPrimary} leading-relaxed`}>
                              {currentQuestion.explanation || 'No explanation available for this question.'}
                            </p>
                            {currentQuestion.sourceLink && (
                              <div className="mt-3 pt-3 border-t border-[#0078d4]/20">
                                <a 
                                  href={currentQuestion.sourceLink} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-[#0078d4] hover:underline text-sm"
                                >
                                  Learn more →
                                </a>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </main>

      {/* Bottom Navigation Bar */}
      <footer className={`${colors.headerBg} border-t ${colors.border} flex-shrink-0`}>
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Previous */}
            <button
              onClick={previousQuestion}
              disabled={currentQuestionIndex === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded border ${colors.border} ${colors.textPrimary} ${colors.hoverBg} disabled:opacity-50 disabled:cursor-not-allowed transition-colors`}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            {/* Center: Progress/Score info */}
            <div className={`text-sm ${colors.textSecondary}`}>
              {studyMode === 'exam' || studyMode === 'timed' ? (
                // Exam mode: Show answered count only
                <span>
                  Answered: <span className={`font-semibold ${colors.textPrimary}`}>{answeredQuestions.size}</span> / {filteredQuestions.length}
                </span>
              ) : studyMode === 'practice' || studyMode === 'review' ? (
                // Practice mode: Show score
                <span>
                  Score: <span className={`font-semibold text-[#107c10]`}>{score}</span> / {answeredQuestions.size}
                  {answeredQuestions.size > 0 && (
                    <span className="ml-2">
                      ({Math.round((score / answeredQuestions.size) * 100)}%)
                    </span>
                  )}
                </span>
              ) : null}
            </div>

            {/* Right: Check Answer / Next */}
            <div className="flex items-center gap-3">
              {/* Only show Check Answer in practice/review modes */}
              {(studyMode === 'practice' || studyMode === 'review') && !showResult && (
                <button
                  onClick={checkAnswer}
                  disabled={selectedAnswers.length === 0}
                  className="px-4 py-2 rounded bg-[#107c10] hover:bg-[#0b5c0b] text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Check Answer
                </button>
              )}
              
              {/* Next button behavior depends on mode */}
              {(studyMode === 'exam' || studyMode === 'timed') ? (
                // Exam mode: Next saves answer and moves on
                <button
                  onClick={nextQuestion}
                  disabled={selectedAnswers.length === 0 && !answeredQuestions.has(currentQuestion?.id || 0)}
                  className="flex items-center gap-2 px-4 py-2 rounded bg-[#0078d4] hover:bg-[#106ebe] text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {currentQuestionIndex === filteredQuestions.length - 1 ? 'Submit Exam' : 'Next'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                // Practice mode: Next after checking answer
                <button
                  onClick={nextQuestion}
                  disabled={studyMode !== 'flashcard' && !showResult}
                  className={`flex items-center gap-2 px-4 py-2 rounded text-white font-medium transition-colors ${
                    studyMode !== 'flashcard' && !showResult 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-[#0078d4] hover:bg-[#106ebe]'
                  }`}
                >
                  {currentQuestionIndex === filteredQuestions.length - 1 ? 'Finish' : 'Next'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </footer>

      {renderFocusTools()}
    </div>
  );
}
