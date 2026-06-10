'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import OrnamentDivider from './OrnamentDivider';

const KEYFRAMES = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes glowExpand {
    from { opacity: 0; transform: scale(0.75); }
    to   { opacity: 1; transform: scale(1);    }
  }
`;

export default function HeroSection() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const up = (delay: number): React.CSSProperties =>
    ready
      ? { animation: `fadeUp 1.6s cubic-bezier(0.16,1,0.3,1) ${delay}s both` }
      : { opacity: 0, transform: 'translateY(28px)' };

  const fade = (delay: number): React.CSSProperties =>
    ready
      ? { animation: `fadeIn 1.8s ease-out ${delay}s both` }
      : { opacity: 0 };

  const glow = (delay: number): React.CSSProperties =>
    ready
      ? { animation: `glowExpand 3s cubic-bezier(0.16,1,0.3,1) ${delay}s both` }
      : { opacity: 0 };

  return (
    <>
      <style>{KEYFRAMES}</style>

      <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#1A0404] texture-overlay">

        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 45%, rgba(107,26,26,0.55) 0%, transparent 70%)',
            ...glow(0.2),
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex-1 flex items-center justify-center text-center px-8">
          <div className="max-w-3xl mx-auto py-24">

            {/* Corner-bracket frame */}
            <div className="relative inline-block px-10 py-12 frame-corners" style={fade(0.3)}>

              <p
                className="text-[10px] tracking-[0.5em] text-[#C9A84C] uppercase mb-6"
                style={up(0.5)}
              >
                Official Website of
              </p>

              <h1
                className="text-6xl sm:text-7xl md:text-8xl font-light text-[#FAF6EE] leading-none mb-3"
                style={{ fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic', ...up(0.75) }}
              >
                Ketaki
              </h1>

              <h1
                className="text-6xl sm:text-7xl md:text-8xl font-semibold text-[#FAF6EE] leading-none tracking-wide"
                style={{ fontFamily: 'var(--font-cormorant), serif', ...up(0.95) }}
              >
                Menon
              </h1>

              <div style={{ ...fade(1.2), marginTop: '1.75rem', marginBottom: '1.75rem' }}>
                <OrnamentDivider symbol="✦" light />
              </div>

              <p
                className="text-[#E8DCC8] text-base sm:text-lg font-light tracking-widest leading-relaxed"
                style={{ fontFamily: 'var(--font-raleway), sans-serif', ...up(1.4) }}
              >
                Vocalist &nbsp;·&nbsp; Educator
              </p>
            </div>

            <p
              className="text-[#9B7070] text-sm mt-8 leading-relaxed max-w-md mx-auto tracking-wide"
              style={up(1.6)}
            >
              Rooted in Hindustani Classical and Light Music Tradition · Performing across India and the world
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
              style={up(1.8)}
            >
              <Link
                href="/about"
                className="px-9 py-3.5 bg-[#C9A84C] text-[#1A0404] text-[11px] font-semibold tracking-[0.3em] uppercase hover:bg-[#E8C97A] transition-colors"
              >
                Discover Her Story
              </Link>
              <Link
                href="/contact"
                className="px-9 py-3.5 border border-[#C9A84C]/60 text-[#C9A84C] text-[11px] font-semibold tracking-[0.3em] uppercase hover:border-[#C9A84C] hover:bg-[#C9A84C]/8 transition-all"
              >
                Book a Performance
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="relative z-10 flex flex-col items-center gap-3 text-[#9B7070] pb-10"
          style={fade(2.1)}
        >
          <span className="text-[9px] tracking-[0.45em] uppercase">Scroll</span>
          <div
            className="w-px h-10 scroll-indicator"
            style={{ background: 'linear-gradient(to bottom, #C9A84C, transparent)' }}
          />
        </div>
      </section>
    </>
  );
}
