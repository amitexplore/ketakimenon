'use client';
import { useRef } from 'react';

const videos = [
  { title: 'Ek Baar Dekh Lijiye',       src: '/videos/Ek%20Baar%20Dekh%20Lijiye.mov'          },
  { title: 'Meri Bindiya Teri Nindiya', src: '/videos/Meri%20Bindiya%20Teri%20Nindiya.mp4'     },
  { title: 'Piya Aiso Jiya Me',         src: '/videos/Piya%20Aiso%20Jiya%20Me.mp4'             },
  { title: 'Pyar Hua Chupke Se',        src: '/videos/Pyar%20Hua%20Chupke%20Se.mp4'            },
  { title: 'Rimjhim Gire Saawan',       src: '/videos/Rimjhim%20Gire%20Saawan.mp4'             },
  { title: 'Tere Bina Zindagi Se',      src: '/videos/Tere%20Bina%20Zindagi%20Se.mp4'          },
];

export default function VideoGrid() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const onPlay = (i: number) => {
    videoRefs.current.forEach((el, j) => {
      if (j !== i && el && !el.paused) el.pause();
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map(({ title, src }, i) => (
        <div key={src} className="card-premium overflow-hidden flex flex-col">
          <video
            ref={el => { videoRefs.current[i] = el; }}
            controls
            preload="metadata"
            onPlay={() => onPlay(i)}
            className="w-full aspect-[9/16] bg-[#1A0404] object-contain"
          >
            <source src={src} />
          </video>
          <div className="px-5 py-4">
            <h3
              className="text-lg font-semibold text-[#6B1A1A]"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              {title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
