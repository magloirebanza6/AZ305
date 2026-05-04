import { useState, useRef, useEffect, useCallback } from 'react';

export type WhiteNoiseType = 'none' | 'rain' | 'ocean' | 'forest' | 'cafe' | 'wind' | 'fire';

interface WhiteNoiseState {
  type: WhiteNoiseType;
  volume: number;
  playing: boolean;
}

interface WhiteNoiseActions {
  setType: (type: WhiteNoiseType) => void;
  setVolume: (volume: number) => void;
  toggle: () => void;
  stop: () => void;
}

export function useWhiteNoise(): [WhiteNoiseState, WhiteNoiseActions] {
  const [type, setTypeState] = useState<WhiteNoiseType>('none');
  const [volume, setVolumeState] = useState(50);
  const [playing, setPlaying] = useState(false);

  const audioContextRef = useRef<AudioContext | null>(null);
  const noiseNodeRef = useRef<AudioBufferSourceNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Generate noise buffer based on type
  const createNoiseBuffer = useCallback((ctx: AudioContext, noiseType: string): AudioBuffer => {
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = buffer.getChannelData(0);
    
    switch (noiseType) {
      case 'rain': {
        let lastOut = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          output[i] = (lastOut + (0.02 * white)) / 1.02;
          lastOut = output[i];
          output[i] *= 3.5;
        }
        break;
      }
      case 'ocean': {
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
      }
      case 'forest': {
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
      }
      case 'cafe': {
        let lastCafe = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          output[i] = (lastCafe + (0.05 * white)) / 1.05;
          lastCafe = output[i];
          output[i] = output[i] * 2 + (Math.random() * 2 - 1) * 0.1;
        }
        break;
      }
      case 'wind': {
        let lastWind = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          output[i] = (lastWind + (0.02 * white)) / 1.02;
          lastWind = output[i];
          const mod = Math.sin(i / (ctx.sampleRate / 0.05)) * 0.5 + 0.5;
          output[i] *= 3.5 * (0.5 + mod * 0.5);
        }
        break;
      }
      case 'fire': {
        let lastFire = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          output[i] = (lastFire + (0.03 * white)) / 1.03;
          lastFire = output[i];
          if (Math.random() > 0.998) {
            output[i] += (Math.random() - 0.5) * 0.5;
          }
          output[i] *= 3;
        }
        break;
      }
      default:
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }
    }
    return buffer;
  }, []);

  // Handle playback
  useEffect(() => {
    if (type !== 'none' && playing) {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      
      if (noiseNodeRef.current) {
        try {
          noiseNodeRef.current.stop();
        } catch (e) { /* ignore */ }
        noiseNodeRef.current = null;
      }

      const noiseBuffer = createNoiseBuffer(ctx, type);
      const noiseNode = ctx.createBufferSource();
      noiseNode.buffer = noiseBuffer;
      noiseNode.loop = true;
      
      const gainNode = ctx.createGain();
      gainNode.gain.value = volume / 100;
      
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = type === 'wind' ? 400 : type === 'rain' ? 800 : 2000;
      
      noiseNode.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);
      noiseNode.start();
      
      noiseNodeRef.current = noiseNode;
      gainNodeRef.current = gainNode;
    } else {
      if (noiseNodeRef.current) {
        try {
          noiseNodeRef.current.stop();
        } catch (e) { /* ignore */ }
        noiseNodeRef.current = null;
      }
    }
    
    return () => {
      if (noiseNodeRef.current) {
        try {
          noiseNodeRef.current.stop();
        } catch (e) { /* ignore */ }
        noiseNodeRef.current = null;
      }
    };
  }, [type, playing, createNoiseBuffer]);

  // Update volume
  useEffect(() => {
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.value = volume / 100;
    }
  }, [volume]);

  const setType = useCallback((newType: WhiteNoiseType) => {
    setTypeState(newType);
    if (newType !== 'none') {
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  }, []);

  const setVolume = useCallback((newVolume: number) => {
    setVolumeState(newVolume);
  }, []);

  const toggle = useCallback(() => {
    if (type !== 'none') {
      setPlaying(p => !p);
    }
  }, [type]);

  const stop = useCallback(() => {
    setPlaying(false);
    setTypeState('none');
  }, []);

  return [
    { type, volume, playing },
    { setType, setVolume, toggle, stop }
  ];
}
