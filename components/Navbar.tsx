'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/videos', label: 'Videos' },
  { href: '/audios', label: 'Audios' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF6EE]/97 backdrop-blur-sm shadow-sm border-b border-[#C9A84C]/25'
          : 'bg-[#FAF6EE] border-b border-[#C9A84C]/20'
      }`}
    >
      {/* Thin gold top bar */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight group">
          <span
            className="text-xl font-bold tracking-[0.15em] uppercase text-[#6B1A1A] group-hover:text-[#8B2E2E] transition-colors"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Ketaki Menon
          </span>
          <span className="text-[10px] tracking-[0.35em] text-[#C9A84C] uppercase font-light"
            style={{ fontFamily: 'var(--font-raleway), sans-serif' }}>
            Vocalist · Educator
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map(({ href, label }) => (
            <li key={href} className="relative">
              <Link
                href={href}
                className={`text-[11px] tracking-[0.25em] uppercase font-medium transition-colors duration-200 pb-0.5 ${
                  pathname === href
                    ? 'text-[#C9A84C]'
                    : 'text-[#6B1A1A] hover:text-[#C9A84C]'
                }`}
                style={{ fontFamily: 'var(--font-raleway), sans-serif' }}
              >
                {label}
                {pathname === href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#C9A84C]" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#6B1A1A] hover:text-[#C9A84C] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAF6EE] border-t border-[#C9A84C]/20 px-6 py-5">
          <ul className="flex flex-col gap-5">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-[11px] tracking-[0.3em] uppercase font-medium transition-colors ${
                    pathname === href ? 'text-[#C9A84C]' : 'text-[#6B1A1A] hover:text-[#C9A84C]'
                  }`}
                  style={{ fontFamily: 'var(--font-raleway), sans-serif' }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
