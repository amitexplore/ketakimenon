import type { Metadata } from 'next';
import { Cormorant_Garamond, Raleway } from 'next/font/google';
import './globals.css';
import { NavigationProvider } from '@/components/NavigationProvider';
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
  description: 'Official website of Ketaki Menon – Vocalist and Performer based in Pune, performing across India and the world.',
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
        <NavigationProvider>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </NavigationProvider>
      </body>
    </html>
  );
}
