import OrnamentDivider from '@/components/OrnamentDivider';

const categories = ['All', 'Concerts', 'Studio Sessions', 'Interviews', 'Masterclasses'];

const videos = [
  {
    id: 1, title: 'Raag Yaman — Live at Nehru Centre',
    category: 'Concerts', duration: '18:42', date: 'March 2024',
    icon: '🎭',
    desc: 'A mesmerizing rendition of Raag Yaman at the prestigious Nehru Centre, Mumbai.',
    featured: true,
  },
  {
    id: 2, title: 'Thumri in Bhairavi — Studio Session',
    category: 'Studio Sessions', duration: '9:15', date: 'January 2024',
    icon: '🎙️',
    desc: 'An intimate studio recording showcasing the emotional depth of Thumri.',
    featured: false,
  },
  {
    id: 3, title: 'Singapore International Music Summit',
    category: 'Concerts', duration: '45:00', date: 'November 2023',
    icon: '🌏',
    desc: 'Full concert performance from the International Music Summit.',
    featured: false,
  },
  {
    id: 4, title: 'The Art of Raga — Scroll Interview',
    category: 'Interviews', duration: '22:30', date: 'October 2023',
    icon: '🎤',
    desc: 'Ketaki speaks about classical music, its relevance, and her personal journey.',
    featured: false,
  },
  {
    id: 5, title: 'How to Approach Alap — Masterclass',
    category: 'Masterclasses', duration: '35:00', date: 'August 2023',
    icon: '🎓',
    desc: 'A comprehensive guide to developing the alap in Hindustani classical music.',
    featured: false,
  },
  {
    id: 6, title: 'Raag Bageshri — Evening Raga',
    category: 'Studio Sessions', duration: '14:20', date: 'June 2023',
    icon: '🌙',
    desc: 'A tranquil, late-evening exploration of Raag Bageshri.',
    featured: false,
  },
];

function PlayIcon() {
  return (
    <svg className="w-7 h-7 text-[#C9A84C] ml-1" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

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
        <p className="text-[#C4A8A8] text-sm mt-6 max-w-md mx-auto">
          Performances, studio sessions and masterclasses — witness music come alive.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Category filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-6 py-2 text-[10px] tracking-[0.3em] uppercase border transition-all ${
                cat === 'All'
                  ? 'bg-[#6B1A1A] text-[#FAF6EE] border-[#6B1A1A]'
                  : 'border-[#C9A84C]/35 text-[#6B1A1A] hover:border-[#6B1A1A] hover:bg-[#6B1A1A]/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured video (first item) */}
        <div className="mb-10 card-premium overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3 relative aspect-video bg-gradient-to-br from-[#2D0808] to-[#6B1A1A] flex items-center justify-center cursor-pointer group">
              <span className="text-8xl opacity-25">{videos[0].icon}</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/50 flex items-center justify-center group-hover:bg-[#C9A84C]/25 transition-colors">
                  <PlayIcon />
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-[#C9A84C] text-[#1A0404] text-[9px] tracking-[0.3em] uppercase px-3 py-1 font-semibold">
                  Featured
                </span>
              </div>
              <div className="absolute bottom-3 right-3 bg-[#1A0404]/80 text-[#C9A84C] text-xs px-2 py-0.5">
                {videos[0].duration}
              </div>
            </div>
            <div className="lg:col-span-2 p-8 flex flex-col justify-center">
              <p className="text-[10px] tracking-[0.35em] text-[#C9A84C] uppercase mb-3">
                {videos[0].category} · {videos[0].date}
              </p>
              <h3
                className="text-3xl font-semibold text-[#6B1A1A] mb-4 leading-tight"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                {videos[0].title}
              </h3>
              <p className="text-sm text-[#9B7070] leading-relaxed mb-6">{videos[0].desc}</p>
              <button className="self-start px-7 py-2.5 bg-[#6B1A1A] text-[#FAF6EE] text-[10px] tracking-[0.3em] uppercase hover:bg-[#8B2E2E] transition-colors flex items-center gap-2">
                <span>▶</span> Watch Now
              </button>
            </div>
          </div>
        </div>

        {/* Remaining videos grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.slice(1).map(({ id, title, category, duration, date, icon, desc }) => (
            <div key={id} className="card-premium group overflow-hidden cursor-pointer">
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-[#2D0808] to-[#8B2E2E] flex items-center justify-center">
                <span className="text-5xl opacity-30">{icon}</span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/60 flex items-center justify-center">
                    <PlayIcon />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-[#1A0404]/80 text-[#C9A84C] text-xs px-2 py-0.5">
                  {duration}
                </div>
              </div>
              {/* Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] tracking-[0.3em] text-[#C9A84C] uppercase">{category}</span>
                  <span className="text-[9px] text-[#9B7070]">{date}</span>
                </div>
                <h3
                  className="text-lg font-semibold text-[#6B1A1A] mb-2 leading-snug group-hover:text-[#8B2E2E] transition-colors"
                  style={{ fontFamily: 'var(--font-cormorant), serif' }}
                >
                  {title}
                </h3>
                <p className="text-xs text-[#9B7070] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

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
            href="#"
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
