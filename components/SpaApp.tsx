'use client';
import { useNavigation } from '@/components/NavigationProvider';
import BackgroundAudio from '@/components/BackgroundAudio';
import HomeContent from '@/components/pages/HomeContent';
import AboutContent from '@/components/pages/AboutContent';
import VideosContent from '@/components/pages/VideosContent';
import AudiosContent from '@/components/pages/AudiosContent';
import GalleryContent from '@/components/pages/GalleryContent';
import ServicesContent from '@/components/pages/ServicesContent';
import ContactContent from '@/components/pages/ContactContent';

interface Track { title: string; src: string; }
interface Props { photos: string[]; tracks: Track[]; }

export default function SpaApp({ photos, tracks }: Props) {
  const { page } = useNavigation();

  const content = {
    home:     <HomeContent />,
    about:    <AboutContent />,
    videos:   <VideosContent />,
    audios:   <AudiosContent tracks={tracks} />,
    gallery:  <GalleryContent photos={photos} />,
    services: <ServicesContent />,
    contact:  <ContactContent />,
  }[page];

  const audioPages = page === 'home' || page === 'about';

  return (
    <>
      <BackgroundAudio active={audioPages} />
      <div key={page} className="animate-fade-in">
        {content}
      </div>
    </>
  );
}
