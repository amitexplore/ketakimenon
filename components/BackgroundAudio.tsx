'use client';
import { useEffect, useRef, useState } from 'react';

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = 26;
    let started = false;

    const removeListeners = () => {
      document.removeEventListener('click',      tryPlay);
      document.removeEventListener('pointerdown', tryPlay);
      document.removeEventListener('touchstart',  tryPlay);
      document.removeEventListener('keydown',     tryPlay);
    };

    const tryPlay = () => {
      if (started) return;
      audio.play()
        .then(() => {
          started = true;
          setPlaying(true);
          removeListeners();
        })
        .catch(() => {});
    };

    // Attempt immediate autoplay first
    audio.play()
      .then(() => { started = true; setPlaying(true); })
      .catch(() => {
        // Blocked — attach to real user-gesture events (scroll is NOT a gesture in browsers)
        document.addEventListener('click',       tryPlay);
        document.addEventListener('pointerdown', tryPlay);
        document.addEventListener('touchstart',  tryPlay, { passive: true });
        document.addEventListener('keydown',     tryPlay);
      });

    const t = setTimeout(() => setVisible(true), 800);
    return () => {
      clearTimeout(t);
      removeListeners();
      audio.pause();
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true));
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/Audio/Benaam%20Si%20Khwaishe.mp3"
        loop
        preload="auto"
      />

      <button
        onClick={toggle}
        title={playing ? 'Pause background music' : 'Play background music'}
        className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full border flex items-center justify-center shadow-lg transition-all duration-500 ${
          playing
            ? 'bg-[#C9A84C] border-[#C9A84C] text-[#1A0404]'
            : 'bg-[#1A0404]/85 border-[#C9A84C]/50 text-[#C9A84C]'
        } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        {playing ? (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        )}
      </button>
    </>
  );
}
