'use client';
import { useState } from 'react';

const faqs = [
  {
    q: 'Where are you based and where do you perform?',
    a: 'Ketaki is based out of Pune. However can perform anywhere in India and Abroad.',
  },
  {
    q: 'What is your genre?',
    a: 'Ketaki performs original track Bollywood songs, Ghazals, Marathi songs, Devotional Songs, Unplugged Bollywood, Fusion.',
  },
  {
    q: 'How many songs do you know and can perform?',
    a: 'Ketaki has a wide number of songs set for performance in almost every Indian language. However for a specific need of the organiser, Ketaki can mould and set songs for the concert.',
  },
  {
    q: 'Do you sing for a small gathering or get together?',
    a: 'Ketaki performs right from on stage to intimate settings or gatherings. She also does home concerts for small gatherings and festivals.',
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqs.map(({ q, a }, i) => (
        <div
          key={q}
          className="border-l-2 border-[#C9A84C] bg-white shadow-sm overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left group"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span
              className="text-base font-semibold text-[#6B1A1A] group-hover:text-[#8B2E2E] transition-colors pr-4"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              {q}
            </span>
            <span
              className="shrink-0 w-6 h-6 flex items-center justify-center border border-[#C9A84C]/40 text-[#C9A84C] transition-transform duration-300"
              style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
            >
              +
            </span>
          </button>

          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: open === i ? '200px' : '0px' }}
          >
            <p className="text-sm text-[#9B7070] leading-relaxed px-6 pb-5">
              {a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
