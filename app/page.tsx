'use client';
import { useNavigation } from '@/components/NavigationProvider';
import BackgroundAudio from '@/components/BackgroundAudio';
import HomeContent    from '@/components/pages/HomeContent';
import AboutContent   from '@/components/pages/AboutContent';
import VideosContent  from '@/components/pages/VideosContent';
import AudiosContent  from '@/components/pages/AudiosContent';
import GalleryContent from '@/components/pages/GalleryContent';
import ServicesContent from '@/components/pages/ServicesContent';
import ContactContent from '@/components/pages/ContactContent';

export default function App() {
  const { page } = useNavigation();

  const content = {
    home:     <HomeContent />,
    about:    <AboutContent />,
    videos:   <VideosContent />,
    audios:   <AudiosContent />,
    gallery:  <GalleryContent />,
    services: <ServicesContent />,
    contact:  <ContactContent />,
  }[page];

  const audioPages = page === 'home' || page === 'about';

  return (
    <>
      {/* BackgroundAudio is mounted once and persists; active prop controls play/pause */}
      <BackgroundAudio active={audioPages} />

      {/* key forces a remount (and the CSS fade-in) on every page change */}
      <div key={page} className="animate-fade-in">
        {content}
      </div>
    </>
  );
}
