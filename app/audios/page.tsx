import type { Metadata } from 'next';
import OrnamentDivider from '@/components/OrnamentDivider';
import AudioTrackList from '@/components/AudioTrackList';

export const metadata: Metadata = {
  title: 'Audios | Ketaki Menon — Listen to Recordings',
  description: 'Listen to audio recordings by Ketaki Menon — Bollywood, Ghazal, Marathi, and devotional tracks recorded across her career.',
};

export default function AudiosPage() {
  return (
    <div>

      {/* ── PAGE HEADER ─── */}
      <div className="bg-[#6B1A1A] py-20 px-6 text-center texture-overlay">
        <p className="text-[10px] tracking-[0.45em] text-[#C9A84C] uppercase mb-5">Listen & Feel</p>
        <h1
          className="text-6xl md:text-7xl font-light italic text-[#FAF6EE] mb-5"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          Audios
        </h1>
        <OrnamentDivider light />
        <p className="text-[#C4A8A8] text-sm mt-6 max-w-md mx-auto">
          A selection of recordings — press play to listen.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.45em] text-[#C9A84C] uppercase mb-4">Selections</p>
          <h2
            className="text-4xl font-semibold text-[#6B1A1A] mb-5"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Audio Tracks
          </h2>
          <OrnamentDivider />
        </div>

        <AudioTrackList />
      </div>

    </div>
  );
}
