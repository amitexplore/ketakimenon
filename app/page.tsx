import Link from 'next/link';
import OrnamentDivider from '@/components/OrnamentDivider';
import HeroSection from '@/components/HeroSection';

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
      <HeroSection />

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
