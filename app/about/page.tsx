import OrnamentDivider from '@/components/OrnamentDivider';

const timeline = [
  { year: '1992', event: 'Born in Pune into a family with deep roots in Hindustani classical music.' },
  { year: '2000', event: 'Commenced formal training in Hindustani Classical and Light Music Tradition under Pandit R. Sharma.' },
  { year: '2008', event: 'Performed at the Sawai Gandharva Bhimsen Mahotsav — one of India\'s most prestigious classical music festivals.' },
  { year: '2012', event: 'Completed Visharad (Graduate) from Akhil Bharatiya Gandharva Mahavidyalaya with distinction.' },
  { year: '2015', event: 'Debut album "Raag Prakaash" released to national acclaim.' },
  { year: '2018', event: 'Founded Swaranjali Music Academy in Pune, now home to 500+ students.' },
  { year: '2022', event: 'Headlined the International Music Summit in Singapore.' },
  { year: '2024', event: 'Ongoing world tour and second album in production.' },
];

const accolades = [
  { award: 'Sangeet Natak Akademi Award', year: '2021' },
  { award: 'Best Classical Vocalist – IndieMusic Awards', year: '2019' },
  { award: 'Cultural Ambassador – Government of Maharashtra', year: '2020' },
  { award: 'Rolling Stone India – Top 10 Artists to Watch', year: '2018' },
  { award: 'Rotary International Arts Excellence Award', year: '2017' },
  { award: 'Sur Mani Award – Gandharva Mahavidyalaya', year: '2012' },
];

const profile = [
  { label: 'Gharana',   value: 'Jaipur-Atrauli' },
  { label: 'Genre',     value: 'Hindustani Classical, Semi-classical, Fusion' },
  { label: 'Languages', value: 'Hindi · Sanskrit · Marathi · Bengali' },
  { label: 'Based in',  value: 'Pune, India' },
];

export default function AboutPage() {
  return (
    <div>

      {/* ── PAGE HEADER ─── */}
      <div className="bg-[#6B1A1A] py-20 px-6 text-center texture-overlay">
        <p className="text-[10px] tracking-[0.45em] text-[#C9A84C] uppercase mb-5">Her Journey</p>
        <h1
          className="text-6xl md:text-7xl font-light italic text-[#FAF6EE] mb-5"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          About Ketaki
        </h1>
        <OrnamentDivider light />
      </div>

      {/* ── BIO ─────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] bg-[#F4E8E8] border border-[#C9A84C]/25 flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <div className="text-8xl mb-4 opacity-20">♪</div>
                <p className="text-[10px] tracking-[0.3em] text-[#9B7070] uppercase">Portrait Placeholder</p>
              </div>
            </div>
            {/* Decorative offset border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C9A84C]/20 -z-10" />
          </div>

          {/* Bio text */}
          <div className="space-y-6">
            <div>
              <p className="text-[10px] tracking-[0.45em] text-[#C9A84C] uppercase mb-4">Biography</p>
              <h2
                className="text-4xl font-semibold text-[#6B1A1A] mb-6"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                A Voice Shaped by Tradition
              </h2>
            </div>

            <p
              className="text-xl text-[#3D1010] leading-relaxed"
              style={{ fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic' }}
            >
              Ketaki Menon is one of India&apos;s most celebrated vocalists — her voice, rich in texture and emotion, carries both the weight of tradition and the lightness of innovation.
            </p>
            <p className="text-sm text-[#9B7070] leading-relaxed">
              Born and raised in Pune, Ketaki began her musical journey at the age of eight, guided by the legendary Pandit R. Sharma. Over two decades of dedicated practice have taken her to stages across India, Europe, Southeast Asia, and North America.
            </p>
            <p className="text-sm text-[#9B7070] leading-relaxed">
              She is equally revered as an educator, having mentored hundreds of students through her academy, Swaranjali. Ketaki believes that music is a living tradition — one that must be preserved with reverence and shared with courage.
            </p>

            {/* Profile grid */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {profile.map(({ label, value }) => (
                <div key={label} className="border-l-2 border-[#C9A84C] pl-4 py-1">
                  <div className="text-[9px] tracking-[0.35em] text-[#C9A84C] uppercase mb-0.5">{label}</div>
                  <div className="text-sm text-[#3D1010]">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ────────────────────────────────── */}
      <section className="bg-[#F4E8E8] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.45em] text-[#C9A84C] uppercase mb-4">Milestones</p>
            <h2
              className="text-4xl font-semibold text-[#6B1A1A] mb-5"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              Musical Journey
            </h2>
            <OrnamentDivider />
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-16 md:left-1/2 top-0 bottom-0 w-px bg-[#C9A84C]/25 -translate-x-px hidden sm:block" />

            <div className="space-y-8">
              {timeline.map(({ year, event }, i) => (
                <div
                  key={year}
                  className={`flex gap-8 items-start ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="md:w-1/2 flex md:justify-end">
                    <div className={`max-w-xs w-full bg-white border border-[#C9A84C]/20 p-5 shadow-sm ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                      <div
                        className="text-[#C9A84C] text-xl font-semibold mb-2"
                        style={{ fontFamily: 'var(--font-cormorant), serif' }}
                      >
                        {year}
                      </div>
                      <p className="text-sm text-[#9B7070] leading-relaxed">{event}</p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:flex items-center justify-center w-3 h-3 rounded-full bg-[#C9A84C] border-2 border-[#F4E8E8] z-10 mt-5 shrink-0" />
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AWARDS ──────────────────────────────────── */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.45em] text-[#C9A84C] uppercase mb-4">Recognition</p>
          <h2
            className="text-4xl font-semibold text-[#6B1A1A] mb-5"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Awards & Accolades
          </h2>
          <OrnamentDivider />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {accolades.map(({ award, year }) => (
            <div
              key={award}
              className="card-premium p-6 flex gap-4 items-start"
            >
              <span className="text-[#C9A84C] text-lg mt-0.5 shrink-0">✦</span>
              <div>
                <p className="text-sm text-[#3D1010] leading-snug mb-1">{award}</p>
                <p className="text-[10px] tracking-widest text-[#9B7070]">{year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
