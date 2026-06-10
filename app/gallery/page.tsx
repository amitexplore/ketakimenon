import OrnamentDivider from '@/components/OrnamentDivider';

const categories = ['All', 'Concerts', 'Studio', 'Events', 'Travel', 'Awards'];

const photos = [
  { id: 1,  title: 'Nehru Centre Concert',         category: 'Concerts', year: '2024', emoji: '🎭', aspect: 'aspect-[3/4]'  },
  { id: 2,  title: 'Recording Session',             category: 'Studio',   year: '2024', emoji: '🎙️', aspect: 'aspect-square' },
  { id: 3,  title: 'Singapore Summit',              category: 'Events',   year: '2023', emoji: '🌏', aspect: 'aspect-[4/3]'  },
  { id: 4,  title: 'Sawai Gandharva Festival',      category: 'Concerts', year: '2023', emoji: '🎵', aspect: 'aspect-square' },
  { id: 5,  title: 'Swaranjali Academy',            category: 'Events',   year: '2023', emoji: '🎓', aspect: 'aspect-[3/4]'  },
  { id: 6,  title: 'IndieMusic Award Ceremony',     category: 'Awards',   year: '2022', emoji: '🏆', aspect: 'aspect-square' },
  { id: 7,  title: 'Varanasi Ghat Morning',         category: 'Travel',   year: '2022', emoji: '🕌', aspect: 'aspect-[4/3]'  },
  { id: 8,  title: 'London Barbican Centre',        category: 'Concerts', year: '2022', emoji: '🎪', aspect: 'aspect-square' },
  { id: 9,  title: 'Naadbrahma Album Launch',       category: 'Events',   year: '2021', emoji: '💿', aspect: 'aspect-[3/4]'  },
  { id: 10, title: 'Studio Portraits',              category: 'Studio',   year: '2021', emoji: '📸', aspect: 'aspect-square' },
  { id: 11, title: 'Jaipur Literary Festival',      category: 'Events',   year: '2020', emoji: '📖', aspect: 'aspect-[4/3]'  },
  { id: 12, title: 'Cultural Ambassador Ceremony',  category: 'Awards',   year: '2020', emoji: '🎖️', aspect: 'aspect-square' },
];

export default function GalleryPage() {
  return (
    <div>

      {/* ── PAGE HEADER ─── */}
      <div className="bg-[#6B1A1A] py-20 px-6 text-center texture-overlay">
        <p className="text-[10px] tracking-[0.45em] text-[#C9A84C] uppercase mb-5">Captured Moments</p>
        <h1
          className="text-6xl md:text-7xl font-light italic text-[#FAF6EE] mb-5"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          Photo Gallery
        </h1>
        <OrnamentDivider light />
        <p className="text-[#C4A8A8] text-sm mt-6 max-w-md mx-auto">
          A visual journey through concerts, recordings, events, and life on the road.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-14">
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

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-gap:16px]">
          {photos.map(({ id, title, category, year, emoji, aspect }) => (
            <div
              key={id}
              className="break-inside-avoid mb-4 card-premium overflow-hidden cursor-pointer group"
            >
              {/* Placeholder image */}
              <div
                className={`w-full bg-gradient-to-br from-[#2D0808] to-[#8B2E2E] flex items-center justify-center relative overflow-hidden ${aspect}`}
              >
                <span className="text-5xl opacity-20">{emoji}</span>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#1A0404]/0 group-hover:bg-[#1A0404]/70 transition-colors duration-300 flex flex-col items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100">
                  <p className="text-[9px] tracking-[0.35em] text-[#C9A84C] uppercase mb-1">{category}</p>
                  <p className="text-sm font-semibold text-[#FAF6EE] leading-snug"
                    style={{ fontFamily: 'var(--font-cormorant), serif' }}
                  >
                    {title}
                  </p>
                  <p className="text-[#C4A8A8] text-xs mt-1">{year}</p>
                </div>
              </div>

              {/* Mobile caption */}
              <div className="px-3 py-2.5 md:hidden bg-white">
                <p className="text-xs font-semibold text-[#6B1A1A]">{title}</p>
                <p className="text-[10px] text-[#C9A84C]">{year}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-16 text-center py-12 px-8 bg-[#F4E8E8] border border-[#C9A84C]/20">
          <OrnamentDivider className="mb-7" />
          <h3
            className="text-3xl font-semibold text-[#6B1A1A] mb-3"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Follow on Instagram
          </h3>
          <p className="text-sm text-[#9B7070] mb-7">
            Behind-the-scenes moments, rehearsals, and updates — every day.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-9 py-3 border border-[#6B1A1A] text-[#6B1A1A] text-[10px] tracking-[0.35em] uppercase hover:bg-[#6B1A1A] hover:text-[#FAF6EE] transition-all font-semibold"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            @ketakimenon
          </a>
          <OrnamentDivider className="mt-7" />
        </div>

      </div>
    </div>
  );
}
