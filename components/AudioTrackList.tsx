'use client';
import { useState, useRef } from 'react';

interface Track { title: string; src: string; }

function mimeType(src: string): string {
  if (src.includes('.mp3')) return 'audio/mpeg';
  if (src.includes('.m4a')) return 'audio/mp4';
  if (src.includes('.mp4')) return 'audio/mp4';
  return '';
}

function fmt(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function AudioTrackList({ tracks }: { tracks: Track[] }) {
  const [durations, setDurations] = useState<Record<number, string>>({});
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  const onMeta = (i: number, e: React.SyntheticEvent<HTMLAudioElement>) => {
    const d = e.currentTarget.duration;
    if (isFinite(d)) setDurations(prev => ({ ...prev, [i]: fmt(d) }));
  };

  const onPlay = (i: number) => {
    audioRefs.current.forEach((el, j) => {
      if (j !== i && el && !el.paused) el.pause();
    });
  };

  return (
    <div className="border border-[#C9A84C]/20 bg-white overflow-hidden shadow-sm">
      {/* Header */}
      <div className="grid grid-cols-[2rem_1fr_3rem] px-6 py-3 border-b border-[#C9A84C]/15 text-[9px] uppercase tracking-[0.3em] text-[#9B7070] bg-[#FAF6EE]">
        <span>#</span>
        <span>Title</span>
        <span className="text-right">Time</span>
      </div>

      {tracks.map(({ title, src }, i) => (
        <div
          key={src}
          className={`px-6 py-5 border-b border-[#C9A84C]/8 hover:bg-[#F9F0F0] transition-colors ${i === tracks.length - 1 ? 'border-0' : ''}`}
        >
          {/* Title row */}
          <div className="grid grid-cols-[2rem_1fr_3rem] items-center mb-3">
            <span className="text-sm text-[#9B7070]">{i + 1}</span>
            <span
              className="text-sm font-medium text-[#3D1010] pr-2"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              {title}
            </span>
            <span className="text-xs text-[#9B7070] text-right tabular-nums">
              {durations[i] ?? '—'}
            </span>
          </div>

          {/* Native audio player */}
          <div className="pl-8">
            <audio
              ref={el => { audioRefs.current[i] = el; }}
              controls
              preload="none"
              onLoadedMetadata={(e) => onMeta(i, e)}
              onPlay={() => onPlay(i)}
              className="w-full h-9"
              style={{ accentColor: '#C9A84C' }}
            >
              <source src={src} type={mimeType(src)} />
            </audio>
          </div>
        </div>
      ))}
    </div>
  );
}
