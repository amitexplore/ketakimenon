import Link from 'next/link';
import OrnamentDivider from '@/components/OrnamentDivider';

const stats = [
  { count: '200+', label: 'Live Performances' },
  { count: '50+',  label: 'Recordings'        },
  { count: '15+',  label: 'Awards'             },
  { count: '500+', label: 'Students Trained'   },
];

const navCards = [
  { href: '/about',    title: 'About',    desc: 'Her journey, gharana & musical philosophy.',  symbol: '𝄞' },
  { href: '/videos',   title: 'Videos',   desc: 'Performances, concerts, and studio sessions.', symbol: '▶' },
  { href: '/audios',   title: 'Audios',   desc: 'Albums, singles and live recordings.',         symbol: '♫' },
  { href: '/services', title: 'Services', desc: 'Vocal training, events & collaborations.',     symbol: '✦' },
  { href: '/gallery',  title: 'Gallery',  desc: 'Moments from concerts and life in music.',     symbol: '◈' },
  { href: '/contact',  title: 'Contact',  desc: 'Bookings, enquiries and media.',               symbol: '✉' },
];

export default function HomePage() {
  return (
    <div>

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A0404] texture-overlay">
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 45%, rgba(107,26,26,0.55) 0%, transparent 70%)',
          }}
        />

        {/* Content frame */}
        <div className="relative z-10 text-center px-8 max-w-3xl mx-auto py-24">
          {/* Corner bracket decoration */}
          <div className="relative inline-block px-10 py-12 frame-corners">
            <p className="text-[10px] tracking-[0.5em] text-[#C9A84C] uppercase mb-6">
              Official Website of
            </p>

            <h1
              className="text-6xl sm:text-7xl md:text-8xl font-light text-[#FAF6EE] leading-none mb-3"
              style={{ fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic' }}
            >
              Ketaki
            </h1>
            <h1
              className="text-6xl sm:text-7xl md:text-8xl font-semibold text-[#FAF6EE] leading-none tracking-wide"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              Menon
            </h1>

            <OrnamentDivider symbol="✦" className="my-7" light />

            <p
              className="text-[#E8DCC8] text-base sm:text-lg font-light tracking-widest leading-relaxed"
              style={{ fontFamily: 'var(--font-raleway), sans-serif' }}
            >
              Vocalist &nbsp;·&nbsp; Composer &nbsp;·&nbsp; Educator
            </p>
          </div>

          <p className="text-[#9B7070] text-sm mt-8 leading-relaxed max-w-md mx-auto tracking-wide">
            Rooted in the Jaipur-Atrauli Gharana · Performing across India and the world
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
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

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[#9B7070]">
          <span className="text-[9px] tracking-[0.45em] uppercase">Scroll</span>
          <div className="w-px h-10 scroll-indicator" style={{ background: 'linear-gradient(to bottom, #C9A84C, transparent)' }} />
        </div>
      </section>

      {/* ── STATS BAND ──────────────────────────────── */}
      <section className="bg-[#FAF6EE] border-y border-[#C9A84C]/20 py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(({ count, label }, i) => (
            <div key={label} className={`py-4 ${i < 3 ? 'md:border-r border-[#C9A84C]/20' : ''}`}>
              <div
                className="text-4xl font-semibold text-[#6B1A1A] mb-1"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                {count}
              </div>
              <div className="text-[10px] tracking-[0.3em] text-[#9B7070] uppercase">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPLORE CARDS ───────────────────────────── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.45em] text-[#C9A84C] uppercase mb-5">Explore</p>
          <h2
            className="text-5xl font-light italic maroon-display mb-5"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Music. Art. Soul.
          </h2>
          <OrnamentDivider />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {navCards.map(({ href, title, desc, symbol }) => (
            <Link
              key={href}
              href={href}
              className="card-premium group p-8 flex flex-col gap-4"
            >
              <div
                className="text-3xl text-[#C9A84C] leading-none"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                {symbol}
              </div>
              <div>
                <h3
                  className="text-2xl font-semibold text-[#6B1A1A] mb-2 group-hover:text-[#8B2E2E] transition-colors"
                  style={{ fontFamily: 'var(--font-cormorant), serif' }}
                >
                  {title}
                </h3>
                <p className="text-sm text-[#9B7070] leading-relaxed">{desc}</p>
              </div>
              <div className="mt-auto flex items-center gap-2 text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── PULL QUOTE ──────────────────────────────── */}
      <section className="bg-[#6B1A1A] py-20 px-6 relative overflow-hidden texture-overlay">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <OrnamentDivider symbol="❋" className="mb-8" light />
          <blockquote
            className="text-3xl sm:text-4xl font-light italic text-[#FAF6EE] leading-relaxed mb-8"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            &ldquo;Music is the shorthand of emotion —<br />
            every note tells a story that words cannot.&rdquo;
          </blockquote>
          <p className="text-[10px] tracking-[0.45em] text-[#C9A84C] uppercase">— Ketaki Menon</p>
          <OrnamentDivider symbol="❋" className="mt-8" light />
        </div>
      </section>

    </div>
  );
}
