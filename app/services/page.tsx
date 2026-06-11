import type { Metadata } from 'next';
import Link from 'next/link';
import OrnamentDivider from '@/components/OrnamentDivider';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Services | Ketaki Menon — Vocal Training, Performances & Recording',
  description: 'Book Ketaki Menon for vocal training, live performances at corporate events, weddings and private gatherings, or professional studio recording sessions.',
};

const services = [
  {
    symbol: 'I',
    title: 'Vocal Training',
    subtitle: 'One-on-One & Group Lessons',
    desc: 'Every singer\'s journey is unique. Ketaki\'s classes focus on building a strong foundation in sur, rhythm, confidence, and musical expression while learning songs you love.',
    featuresLabel: 'Students learn:',
    features: [
      'How to Sing in Tune (Sur Gyan)',
      'Bollywood Songs & Contemporary Music',
      'Voice Training & Breath Control',
      'Stage Confidence & Performance Skills',
      'Expression, Dynamics & Presentation',
      'Personalized Guidance for Every Student',
    ],
  },
  {
    symbol: 'II',
    title: 'Live Performances',
    subtitle: 'Concerts, Events & Ceremonies',
    desc: 'Engaging live performances for corporate events, weddings, private celebrations, cultural programs, and concert audiences. Ketaki\'s repertoire spans Bollywood favorites, timeless melodies, Ghazals, and specially curated themed musical evenings.',
    featuresLabel: '',
    features: [
      'Bollywood & Retro Classics',
      'Ghazal & Light Music Programs',
      'Unplugged Acoustic Performances',
      'Corporate & Private Events',
      'Professional Live Musicians Available',
      'Performances Across India & Internationally',
    ],
  },
  {
    symbol: 'III',
    title: 'Studio Recording',
    subtitle: 'Professional Vocal Sessions',
    desc: 'Ketaki is available for studio and remote recording assignments, offering expressive and polished vocals for musical, devotional, commercial, and creative projects.\n\nWhether recording a single track, a full album, or a custom composition, she approaches each project with professionalism, attention to detail, and a commitment to delivering the emotion the music deserves.',
    featuresLabel: '',
    features: [
      'Solo Vocal Recordings',
      'Devotional & Spiritual Music',
      'Independent Music Projects',
      'Bollywood & Retro Songs',
      'Jingles & Digital Content',
      'Collaboration with Music Directors',
    ],
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
        <p className="text-[#C4A8A8] text-sm mt-6 max-w-lg mx-auto sm:whitespace-nowrap">
          House Concerts &nbsp;|&nbsp; Corporate Events &nbsp;|&nbsp; Private Gatherings &nbsp;|&nbsp; Stage Performance
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map(({ symbol, title, subtitle, desc, featuresLabel, features  }) => (
            <Link key={title} href="/contact" className="card-premium group flex flex-col p-8">
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
              <div className="text-xs text-[#9B7070] leading-relaxed mb-4 flex-1 space-y-2">
                {desc.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
              </div>

              {featuresLabel && (
                <p className="text-[9px] tracking-[0.3em] text-[#C9A84C] uppercase mb-3">{featuresLabel}</p>
              )}
              <ul className="space-y-1.5 mb-6">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-[#6B1A1A]">
                    <span className="w-1 h-1 rounded-full bg-[#C9A84C] shrink-0" /> {f}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[#C9A84C]/15 flex items-center justify-end">
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#9B7070] group-hover:text-[#C9A84C] transition-colors">
                  Enquire →
                </span>
              </div>
            </Link>
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
          <FaqAccordion />
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
