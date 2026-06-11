// Server component — no client JS needed; iframes are lazy-loaded by the browser.
const reels = [
  'https://www.instagram.com/reel/DT1smFbk3pZ/',
  'https://www.instagram.com/reel/DJT0yCyyvON/',
  'https://www.instagram.com/p/C_vPyeWy-kA/',
  'https://www.instagram.com/tv/CXEEuQxpQhz/',
  'https://www.instagram.com/reel/Cq7ZbD_B8bV/',
  'https://www.instagram.com/reel/C_kXeRPu7TS/',
];

export default function InstagramGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {reels.map((url) => (
        <div key={url} className="card-premium overflow-hidden">
          <iframe
            src={`${url}embed/`}
            title="Instagram video"
            className="w-full block"
            style={{ height: '560px', border: 'none' }}
            loading="lazy"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      ))}
    </div>
  );
}
