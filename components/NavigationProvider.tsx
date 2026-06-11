'use client';
import { createContext, useContext, useState, useEffect } from 'react';

export type PageId =
  | 'home' | 'about' | 'videos' | 'audios'
  | 'gallery' | 'services' | 'contact';

interface NavCtx {
  page: PageId;
  navigate: (p: PageId) => void;
}

const Ctx = createContext<NavCtx>({ page: 'home', navigate: () => {} });

const PAGE_TITLES: Record<PageId, string> = {
  home:     'Ketaki Menon | Vocalist & Music Artist',
  about:    'About | Ketaki Menon',
  videos:   'Videos | Ketaki Menon',
  audios:   'Audios | Ketaki Menon',
  gallery:  'Gallery | Ketaki Menon',
  services: 'Services | Ketaki Menon',
  contact:  'Contact | Ketaki Menon',
};

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [page, setPage] = useState<PageId>('home');

  const navigate = (p: PageId) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Keep the browser tab title in sync
  useEffect(() => {
    document.title = PAGE_TITLES[page];
  }, [page]);

  return <Ctx.Provider value={{ page, navigate }}>{children}</Ctx.Provider>;
}

export const useNavigation = () => useContext(Ctx);
