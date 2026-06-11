'use client';
import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    instgrm?: { Embeds: { process(): void } };
  }
}

const reels = [
  'https://www.instagram.com/reel/DT1smFbk3pZ/',
  'https://www.instagram.com/reel/DJT0yCyyvON/',
  'https://www.instagram.com/p/C_vPyeWy-kA/',
  'https://www.instagram.com/tv/CXEEuQxpQhz/',
  'https://www.instagram.com/reel/Cq7ZbD_B8bV/',
  'https://www.instagram.com/reel/C_kXeRPu7TS/',
];

export default function InstagramGrid() {
  // On first load, onLoad fires. On re-navigation (client-side routing) the script
  // is already loaded so onLoad never fires again — we must re-process manually.
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => window.instgrm?.Embeds.process()}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reels.map((url) => (
          <div key={url} className="card-premium overflow-hidden flex justify-center">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{ maxWidth: '100%', width: '100%', minWidth: 0, margin: 0 }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
