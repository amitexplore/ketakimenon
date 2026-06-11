import type { Metadata } from 'next';
import { Cormorant_Garamond, Raleway } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ketaki Menon | Vocalist & Music Artist',
  description: 'Official website of Ketaki Menon – Hindustani Classical Vocalist and Music Educator.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${raleway.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.instagram.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://static.cdninstagram.com" />
      </head>
      <body className="bg-[#FAF6EE] text-[#3D1010] min-h-screen">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
