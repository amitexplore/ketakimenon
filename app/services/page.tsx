import Link from 'next/link';
import OrnamentDivider from '@/components/OrnamentDivider';

const services = [
  {
    symbol: 'I',
    title: 'Vocal Training',
    subtitle: 'One-on-One & Group Lessons',
    desc: 'Structured lessons in Hindustani classical vocals for beginners to advanced students. Covering raga theory, bandish, taan, gamak, and emotional expression.',
    features: ['Online & in-person', 'All age groups', 'Beginner to advanced', 'Flexible scheduling'],
    price: 'From ₹2,000 / session',
  },
  {
    symbol: 'II',
    title: 'Live Performances',
    subtitle: 'Concerts, Events & Ceremonies',
    desc: 'Captivating live performances for concerts, corporate events, weddings, cultural festivals, and intimate private gatherings across India and internationally.',
    features: ['Classical & semi-classical', 'Fusion sets available', 'Professional accompanists', 'Pan-India & international'],
    price: 'Custom quote',
  },
  {
    symbol: 'III',
    title: 'Studio Recording',
    subtitle: 'Professional Vocal Sessions',
    desc: 'High-quality studio recordings for albums, film music, devotional content, jingles, and independent projects with state-of-the-art post-production.',
    features: ['State-of-the-art studio', 'Post-production support', 'Composition guidance', 'Fast turnaround'],
    price: 'From ₹8,000 / hour',
  },
  {
    symbol: 'IV',
    title: 'Music Composition',
    subtitle: 'Original Compositions & Arrangements',
    desc: 'Custom compositions in classical, semi-classical, and fusion styles for films, theatre, albums, and brand projects. Lyric writing available.',
    features: ['Raga-based compositions', 'Lyric writing', 'Full arrangement', 'Film & theatre scoring'],
    price: 'Custom quote',
  },
  {
    symbol: 'V',
    title: 'Workshops & Masterclasses',
    subtitle: 'Group Learning Intensives',
    desc: 'Immersive workshops on raga exploration, voice culture, breath control, and the philosophy of Indian classical music — for schools, colleges, and corporates.',
    features: ['Corporate wellness', 'College & school programs', 'Festival workshops', 'Online formats available'],
    price: 'From ₹5,000 / session',
  },
  {
    symbol: 'VI',
    title: 'Cultural Collaborations',
    subtitle: 'Cross-genre & Cross-cultural Projects',
    desc: 'Open to collaborations with artists from other traditions — jazz, electronic, western classical, folk, and world music. Tour, album, and festival curation.',
    features: ['Fusion projects', 'Cross-cultural tours', 'Album collaborations', 'Festival curation'],
    price: 'Custom quote',
  },
];

const faqs = [
  {
    q: 'Do you offer online vocal training sessions?',
    a: 'Yes — online sessions via Zoom or Google Meet are available for students worldwide with flexible time zones.',
  },
  {
    q: 'How do I book a performance for my event?',
    a: 'Use the Contact page or email directly. Please include your event date, location, and type for a custom quote.',
  },
  {
    q: 'Do you teach students with no prior music background?',
    a: 'Absolutely. Courses are structured for all levels — from those who have never sung, to experienced musicians seeking advanced training.',
  },
  {
    q: 'Can you compose music in a specific raga for my project?',
    a: 'Yes — custom compositions are tailored to your vision, timeline, and medium (film, theatre, album, devotional, etc.).',
  },
];

export default function ServicesPage() {
  return (
    <div>

      {/* ── PAGE HEADER ─── */}
      <div className="bg-[#6B1A1A] py-20 px-6 text-center texture-overlay">
        <p className="text-[10px] tracking-[0.45em] text-[#C9A84C] uppercase mb-5">Work Together</p>
        <h1
          className="text-6xl md:text-7xl font-light italic text-[#FAF6EE] mb-5"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          Services Offered
        </h1>
        <OrnamentDivider light />
        <p className="text-[#C4A8A8] text-sm mt-6 max-w-md mx-auto">
          From private lessons to concert stages — explore all the ways to engage with Ketaki&apos;s music.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map(({ symbol, title, subtitle, desc, features, price }) => (
            <div key={title} className="card-premium group flex flex-col p-8">
              {/* Roman numeral accent */}
              <div
                className="text-5xl font-light text-[#C9A84C]/30 mb-5 leading-none"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                {symbol}
              </div>

              <p className="text-[9px] tracking-[0.35em] text-[#C9A84C] uppercase mb-2">{subtitle}</p>
              <h3
                className="text-2xl font-semibold text-[#6B1A1A] mb-3 group-hover:text-[#8B2E2E] transition-colors"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                {title}
              </h3>
              <p className="text-xs text-[#9B7070] leading-relaxed mb-5 flex-1">{desc}</p>

              <ul className="space-y-1.5 mb-6">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-[#6B1A1A]">
                    <span className="w-1 h-1 rounded-full bg-[#C9A84C] shrink-0" /> {f}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[#C9A84C]/15 flex items-center justify-between">
                <span
                  className="text-base font-semibold text-[#6B1A1A]"
                  style={{ fontFamily: 'var(--font-cormorant), serif' }}
                >
                  {price}
                </span>
                <Link
                  href="/contact"
                  className="text-[9px] tracking-[0.3em] uppercase text-[#9B7070] hover:text-[#C9A84C] transition-colors"
                >
                  Enquire →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.45em] text-[#C9A84C] uppercase mb-4">Common Questions</p>
            <h2
              className="text-4xl font-semibold text-[#6B1A1A] mb-5"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              Frequently Asked
            </h2>
            <OrnamentDivider />
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-l-2 border-[#C9A84C] bg-white p-6 shadow-sm">
                <h4 className="text-base font-semibold text-[#6B1A1A] mb-2"
                  style={{ fontFamily: 'var(--font-cormorant), serif' }}
                >
                  {q}
                </h4>
                <p className="text-sm text-[#9B7070] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <div className="bg-[#6B1A1A] texture-overlay text-center py-16 px-8">
          <OrnamentDivider light className="mb-8" />
          <h3
            className="text-4xl font-light italic text-[#FAF6EE] mb-4"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Ready to Begin?
          </h3>
          <p className="text-[#C4A8A8] text-sm mb-8 max-w-md mx-auto">
            Reach out to discuss your vision — whether it&apos;s learning, performing, or creating together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-3.5 bg-[#C9A84C] text-[#1A0404] text-[10px] font-semibold tracking-[0.35em] uppercase hover:bg-[#E8C97A] transition-colors"
          >
            Get in Touch
          </Link>
          <OrnamentDivider light className="mt-8" />
        </div>

      </div>
    </div>
  );
}
