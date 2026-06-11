import type { Metadata } from 'next';
import OrnamentDivider from '@/components/OrnamentDivider';
import InstagramGrid from '@/components/InstagramGrid';

export const metadata: Metadata = {
  title: 'Videos | Ketaki Menon — Live Performances & Concerts',
  description: 'Watch Ketaki Menon perform live — concerts, stage shows, studio sessions, and musical events in India and abroad.',
};

export default function VideosPage() {
  return (
    <div>

      {/* ── PAGE HEADER ─── */}
      <div className="bg-[#6B1A1A] py-20 px-6 text-center texture-overlay">
        <p className="text-[10px] tracking-[0.45em] text-[#C9A84C] uppercase mb-5">Watch & Experience</p>
        <h1
          className="text-6xl md:text-7xl font-light italic text-[#FAF6EE] mb-5"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          Videos
        </h1>
        <OrnamentDivider light />
        <p className="text-[#C4A8A8] text-sm mt-6 max-w-sm mx-auto sm:whitespace-nowrap">
          Performances, studio sessions and concerts — witness music come alive.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <InstagramGrid />

        {/* YouTube CTA */}
        <div className="mt-16 bg-[#F4E8E8] border border-[#C9A84C]/20 p-10 text-center">
          <OrnamentDivider className="mb-6" />
          <h3
            className="text-3xl font-semibold text-[#6B1A1A] mb-3"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Subscribe for New Releases
          </h3>
          <p className="text-sm text-[#9B7070] mb-7">Watch all performances and studio sessions on YouTube.</p>
          <a
            href="https://youtube.com/@ketakinaikmenon7709?si=skK5XTsXqgK8tQS4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 bg-[#6B1A1A] text-[#FAF6EE] text-[10px] tracking-[0.3em] uppercase hover:bg-[#8B2E2E] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
            </svg>
            Subscribe on YouTube
          </a>
        </div>
      </div>

    </div>
  );
}
