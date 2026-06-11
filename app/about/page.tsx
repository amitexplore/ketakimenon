import Image from 'next/image';
import OrnamentDivider from '@/components/OrnamentDivider';
import BackgroundAudio from '@/components/BackgroundAudio';

const timeline = [
  { year: '1987', event: 'Born in Dhule into a family with deep interests in Music and professionally inclined.' },
  { year: '1998', event: 'Commenced formal training in Hindustani Classical and Light Music with Shekhar Rudra in Dhule.' },
  { year: '2002', event: 'Completed Sangeet Visharad from Akhil Bharatiya Gandharva Mahavidyalay.' },
  { year: '2003', event: 'Started performing professionally on stage for programs and TV Shows.' },
  { year: '2014', event: 'Performed and won the title of Pune Idol.' },
  { year: '2015', event: 'Went on a tour to UK for performances on stage and embassy.' },
  { year: '2016', event: 'Started taking guidance from renowned music director Pt Hridaynath Mangeshkar.' },
  { year: '2020 onwards', event: 'Performed with renowned Music Director Ashok Patki, renowned singer Swapnil Bandodkar, Bela Shende and Saleel Kulkarni.' },
];

const accolades = [
  { award: 'Sangeet Visharad from Akhil Bharatiya Gandharva Mahavidyalay' },
  { award: 'Pune Idol 2014' },
  { award: 'University Gold Medalist in Light Music' },
  { award: 'Performance in renowned TV shows' },
];

const profile = [
  { label: 'Genre',    value: 'Bollywood · Marathi · Ghazal · Bhajan · Fusion · Unplugged' },
  { label: 'Based in', value: 'Pune, India' },
];

export default function AboutPage() {
  return (
    <div>

      <BackgroundAudio />

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
          {/* Portrait */}
          <div className="relative">
            <div className="aspect-[4/5] border border-[#C9A84C]/25 overflow-hidden relative">
              <Image
                src="/photos/portrait 1.jpeg"
                alt="Ketaki Menon"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Decorative offset border — hidden on mobile to prevent horizontal scroll */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C9A84C]/20 -z-10 hidden sm:block" />
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
              Ketaki Menon is a versatile vocalist with over two decades of experience in music performance, education, and cultural programs.
            </p>
            <p className="text-sm text-[#9B7070] leading-relaxed">
              Known for her expressive singing and strong stage presence, she has performed across a wide range of musical genres, connecting with audiences through both classical foundations and contemporary interpretations. Over the years, Ketaki has participated in numerous concerts, cultural events, private performances, and musical productions, earning appreciation for her dedication to the art of music and her ability to engage listeners of all ages.
            </p>
            <p className="text-sm text-[#9B7070] leading-relaxed">
              Alongside her performing career, she is a passionate music educator who has trained and mentored aspiring singers, helping them develop confidence, technique, and a deeper understanding of music. Through her teaching, she continues to inspire students to explore and nurture their musical potential.
            </p>
            <p className="text-sm text-[#9B7070] leading-relaxed">
              Today, Ketaki remains committed to sharing the joy of music through performances, workshops, and personalized training, bringing together experience, artistry, and a lifelong passion for singing.
            </p>

            {/* Profile grid */}
            <div className="pt-4 grid grid-cols-1 gap-3">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {accolades.map(({ award }) => (
            <div
              key={award}
              className="card-premium p-6 flex gap-4 items-start"
            >
              <span className="text-[#C9A84C] text-lg mt-0.5 shrink-0">✦</span>
              <div>
                <p className="text-sm text-[#3D1010] leading-snug">{award}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
