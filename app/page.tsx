import fs from 'fs';
import path from 'path';
import SpaApp from '@/components/SpaApp';

const IMAGE_EXTS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif'];
const AUDIO_EXTS = ['.mp3', '.m4a', '.mp4', '.wav', '.ogg', '.flac'];

export default function Page() {
  let photos: string[] = [];
  try {
    const dir = path.join(process.cwd(), 'public', 'photos');
    photos = fs.readdirSync(dir)
      .filter(f => IMAGE_EXTS.includes(path.extname(f).toLowerCase()))
      .sort()
      .map(f => `/photos/${encodeURIComponent(f)}`);
  } catch {}

  let tracks: Array<{ title: string; src: string }> = [];
  try {
    const dir = path.join(process.cwd(), 'public', 'Audio');
    tracks = fs.readdirSync(dir)
      .filter(f => AUDIO_EXTS.includes(path.extname(f).toLowerCase()))
      .sort()
      .map(f => ({
        title: path.basename(f, path.extname(f)),
        src: `/Audio/${encodeURIComponent(f)}`,
      }));
  } catch {}

  return <SpaApp photos={photos} tracks={tracks} />;
}
