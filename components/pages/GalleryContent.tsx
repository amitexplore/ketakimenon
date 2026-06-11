import Image from 'next/image';
import OrnamentDivider from '@/components/OrnamentDivider';

const photos = [
  '/photos/FB_IMG_1509544845056.jpg',
  '/photos/IMG_0286.JPG',
  '/photos/IMG_3740.jpg',
  '/photos/Open%20fa8d5816-dcfc-4e2f-9dbb-14e6cb61918b.png',
  '/photos/Portrait%201.jpeg',
];

export default function GalleryContent() {
  return (
    <div>
      <div className="bg-[#6B1A1A] py-20 px-6 text-center texture-overlay">
        <p className="text-[10px] tracking-[0.45em] text-[#C9A84C] uppercase mb-5">Captured Moments</p>
        <h1
          className="text-6xl md:text-7xl font-light italic text-[#FAF6EE] mb-5"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          Photo Gallery
        </h1>
        <OrnamentDivider light />
        <p className="text-[#C4A8A8] text-sm mt-6 whitespace-nowrap">
          A visual journey through concerts, recordings, events and musical life.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((src) => (
            <div key={src} className="card-premium overflow-hidden aspect-square relative">
              <Image
                src={src}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center py-12 px-8 bg-[#F4E8E8] border border-[#C9A84C]/20">
          <OrnamentDivider className="mb-7" />
          <h3
            className="text-3xl font-semibold text-[#6B1A1A] mb-3"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Follow on Instagram
          </h3>
          <p className="text-sm text-[#9B7070] mb-7">
            Behind-the-scenes moments, rehearsals, and updates — every day.
          </p>
          <a
            href="https://www.instagram.com/ketakimenon?igsh=MWVtOXIzdmNjanYxMQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-3 border border-[#6B1A1A] text-[#6B1A1A] text-[10px] tracking-[0.35em] uppercase hover:bg-[#6B1A1A] hover:text-[#FAF6EE] transition-all font-semibold"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            @ketakimenon
          </a>
          <OrnamentDivider className="mt-7" />
        </div>
      </div>
    </div>
  );
}
