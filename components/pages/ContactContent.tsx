import OrnamentDivider from '@/components/OrnamentDivider';

const contactCards = [
  {
    symbol: '✉',
    label: 'Email',
    value: 'ketaki10nk@gmail.com',
    sub: 'Bookings & general enquiries',
    href: 'mailto:ketaki10nk@gmail.com',
  },
  {
    symbol: '✆',
    label: 'Phone',
    value: '+91 9665924870',
    sub: 'Monday – Saturday · 10am – 6pm IST',
    href: 'tel:+919665924870',
  },
];

const socials = [
  { name: 'Instagram', handle: '@ketakimenon',          href: 'https://www.instagram.com/ketakimenon?igsh=MWVtOXIzdmNjanYxMQ==' },
  { name: 'YouTube',   handle: 'Ketaki Menon Music',    href: 'https://youtube.com/@ketakinaikmenon7709?si=skK5XTsXqgK8tQS4' },
  { name: 'Facebook',  handle: 'Ketaki Menon Official', href: 'https://www.facebook.com/share/18eFGT62uz/?mibextid=wwXIfr' },
];

export default function ContactContent() {
  return (
    <div>
      <div className="bg-[#6B1A1A] py-20 px-6 text-center texture-overlay">
        <p className="text-[10px] tracking-[0.45em] text-[#C9A84C] uppercase mb-5">Reach Out</p>
        <h1
          className="text-6xl md:text-7xl font-light italic text-[#FAF6EE] mb-5"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          Contact
        </h1>
        <OrnamentDivider light />
        <p className="text-[#C4A8A8] text-sm mt-6 max-w-md mx-auto">
          For bookings, collaborations, recordings, or lessons — we&apos;d love to hear from you.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 space-y-10">
        <div>
          <p className="text-[10px] tracking-[0.45em] text-[#C9A84C] uppercase mb-4">Direct Contact</p>
          <h2
            className="text-3xl font-semibold text-[#6B1A1A] mb-7"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Reach Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactCards.map(({ symbol, label, value, sub, href }) => (
              <a key={label} href={href} className="card-premium flex items-start gap-4 p-6 group">
                <span
                  className="text-2xl text-[#C9A84C] mt-0.5 shrink-0 leading-none"
                  style={{ fontFamily: 'var(--font-cormorant), serif' }}
                >
                  {symbol}
                </span>
                <div>
                  <p className="text-[9px] tracking-[0.3em] text-[#9B7070] uppercase mb-0.5">{label}</p>
                  <p className="text-sm font-semibold text-[#6B1A1A] group-hover:text-[#8B2E2E] transition-colors">{value}</p>
                  <p className="text-xs text-[#9B7070] mt-0.5">{sub}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <OrnamentDivider />

        <div>
          <p className="text-[9px] tracking-[0.35em] text-[#C9A84C] uppercase mb-5">Follow Along</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {socials.map(({ name, handle, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 border border-[#C9A84C]/20 bg-white hover:border-[#6B1A1A] hover:bg-[#F9F0F0] transition-all group"
              >
                <div>
                  <p className="text-sm font-semibold text-[#6B1A1A] group-hover:text-[#8B2E2E] transition-colors">{name}</p>
                  <p className="text-xs text-[#9B7070]">{handle}</p>
                </div>
                <span className="text-[#C9A84C]">→</span>
              </a>
            ))}
          </div>
        </div>

        <div className="border-l-2 border-[#C9A84C] bg-[#F9F0F0] pl-5 py-4 pr-4">
          <p className="text-xs text-[#9B7070] leading-relaxed">
            <span className="text-[#6B1A1A] font-semibold block mb-1">Response time</span>
            Enquiries are typically responded to within 2–3 business days. For urgent bookings, please call directly.
          </p>
        </div>
      </div>
    </div>
  );
}
