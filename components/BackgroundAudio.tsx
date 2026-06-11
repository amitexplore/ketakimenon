'use client';
import { useEffect, useRef, useState } from 'react';

// #t=26 is an HTML5 media fragment — tells the browser's own engine to start at 26s.
// This works at the network level before any JS runs, and is reliable on iOS/Android.
const SRC = '/Audio/Benaam%20Si%20Khwaishe.mp3#t=26';
const START = 26;

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let started = false;
    let listenersAdded = false;

    const removeListeners = () => {
      document.removeEventListener('click',       tryPlay);
      document.removeEventListener('pointerdown', tryPlay);
      document.removeEventListener('touchstart',  tryPlay);
      document.removeEventListener('keydown',     tryPlay);
    };

    const addListeners = () => {
      if (listenersAdded) return;
      listenersAdded = true;
      document.addEventListener('click',       tryPlay);
      document.addEventListener('pointerdown', tryPlay);
      document.addEventListener('touchstart',  tryPlay, { passive: true });
      document.addEventListener('keydown',     tryPlay);
    };

    // Called from a user-gesture — currentTime assignment is always honoured here.
    const tryPlay = () => {
      if (started) return;
      // JS fallback: set start time inside the gesture handler
      if (audio.currentTime < START - 1) audio.currentTime = START;
      audio.play()
        .then(() => { started = true; setPlaying(true); removeListeners(); })
        .catch(() => {});
    };

    const attemptAutoplay = () => {
      // JS fallback alongside the #t= fragment
      if (audio.currentTime < START - 1) audio.currentTime = START;
      audio.play()
        .then(() => { started = true; setPlaying(true); })
        .catch(addListeners);
    };

    // Wait until the browser knows the duration before attempting anything
    if (audio.readyState >= 1) {
      attemptAutoplay();
    } else {
      audio.addEventListener('loadedmetadata', attemptAutoplay, { once: true });
    }

    const t = setTimeout(() => setVisible(true), 800);
    return () => {
      clearTimeout(t);
      removeListeners();
      audio.removeEventListener('loadedmetadata', attemptAutoplay);
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
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src={SRC} loop preload="auto" />

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
