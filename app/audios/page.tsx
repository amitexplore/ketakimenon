import OrnamentDivider from '@/components/OrnamentDivider';

const albums = [
  {
    title: 'Raag Prakaash',
    year: '2015', tracks: 8,
    desc: 'Debut album exploring the luminous world of morning ragas — dawn, clarity, devotion.',
    icon: '🌅',
  },
  {
    title: 'Shruti — The Essence',
    year: '2018', tracks: 10,
    desc: 'A deep immersion into semi-classical and bhajan traditions of North India.',
    icon: '🕯️',
  },
  {
    title: 'Naadbrahma',
    year: '2021', tracks: 12,
    desc: 'Fusion compositions bridging Hindustani classical music with world music traditions.',
    icon: '🌍',
  },
];

const tracks = [
  { title: 'Bhairavi Thumri',           album: 'Shruti — The Essence', duration: '9:05',  raga: 'Bhairavi'   },
  { title: 'Yaman Vilambit Khayal',     album: 'Raag Prakaash',        duration: '18:42', raga: 'Yaman'      },
  { title: 'Malkauns Drut',             album: 'Raag Prakaash',        duration: '12:10', raga: 'Malkauns'   },
  { title: 'Bageshri — Bandish',        album: 'Shruti — The Essence', duration: '14:30', raga: 'Bageshri'   },
  { title: 'Desh Fusion',               album: 'Naadbrahma',           duration: '6:48',  raga: 'Desh'       },
  { title: 'Bhimpalasi Evening',        album: 'Naadbrahma',           duration: '10:22', raga: 'Bhimpalasi' },
  { title: 'Sohini Bada Khayal',        album: 'Raag Prakaash',        duration: '22:15', raga: 'Sohini'     },
  { title: 'Pilu Thumri — Panghat Pe',  album: 'Shruti — The Essence', duration: '8:30',  raga: 'Pilu'       },
];

const platforms = [
  { name: 'Spotify',       icon: '♫' },
  { name: 'Apple Music',   icon: '♪' },
  { name: 'YouTube Music', icon: '▶' },
  { name: 'Amazon Music',  icon: '◈' },
];

export default function AudiosPage() {
  return (
    <div>

      {/* ── PAGE HEADER ─── */}
      <div className="bg-[#6B1A1A] py-20 px-6 text-center texture-overlay">
        <p className="text-[10px] tracking-[0.45em] text-[#C9A84C] uppercase mb-5">Listen & Feel</p>
        <h1
          className="text-6xl md:text-7xl font-light italic text-[#FAF6EE] mb-5"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          Audios
        </h1>
        <OrnamentDivider light />
        <p className="text-[#C4A8A8] text-sm mt-6 max-w-md mx-auto">
          Immerse in the world of ragas — available on all major streaming platforms.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Streaming platforms */}
        <div className="flex flex-wrap gap-4 justify-center mb-20">
          {platforms.map(({ name, icon }) => (
            <a
              key={name}
              href="#"
              className="flex items-center gap-3 px-6 py-3 border border-[#C9A84C]/30 bg-white hover:border-[#6B1A1A] hover:bg-[#6B1A1A]/4 transition-all text-sm text-[#6B1A1A] hover:text-[#6B1A1A]"
            >
              <span className="text-[#C9A84C]">{icon}</span>
              {name}
            </a>
          ))}
        </div>

        {/* Albums / Discography */}
        <div className="mb-20">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.45em] text-[#C9A84C] uppercase mb-4">Discography</p>
            <h2
              className="text-4xl font-semibold text-[#6B1A1A] mb-5"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              Albums
            </h2>
            <OrnamentDivider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {albums.map(({ title, year, tracks: tc, desc, icon }) => (
              <div key={title} className="card-premium group overflow-hidden">
                {/* Album cover */}
                <div className="aspect-square bg-gradient-to-br from-[#2D0808] to-[#8B2E2E] flex items-center justify-center relative">
                  <span className="text-8xl opacity-25">{icon}</span>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#1A0404]/40">
                    <button className="px-6 py-2.5 bg-[#C9A84C] text-[#1A0404] text-[10px] tracking-[0.3em] uppercase font-semibold hover:bg-[#E8C97A] transition-colors">
                      ▶ Listen
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[9px] tracking-[0.35em] text-[#C9A84C] uppercase mb-2">
                    {year} · {tc} tracks
                  </p>
                  <h3
                    className="text-2xl font-semibold text-[#6B1A1A] mb-3"
                    style={{ fontFamily: 'var(--font-cormorant), serif' }}
                  >
                    {title}
                  </h3>
                  <p className="text-xs text-[#9B7070] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Track listing */}
        <div>
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.45em] text-[#C9A84C] uppercase mb-4">Selections</p>
            <h2
              className="text-4xl font-semibold text-[#6B1A1A] mb-5"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              Popular Tracks
            </h2>
            <OrnamentDivider />
          </div>

          <div className="border border-[#C9A84C]/20 bg-white overflow-hidden shadow-sm">
            {/* Header row */}
            <div className="grid grid-cols-12 px-6 py-3 border-b border-[#C9A84C]/15 text-[9px] uppercase tracking-[0.3em] text-[#9B7070] bg-[#FAF6EE]">
              <span className="col-span-1">#</span>
              <span className="col-span-4">Title</span>
              <span className="col-span-4 hidden md:block">Album</span>
              <span className="col-span-2 hidden md:block">Raga</span>
              <span className="col-span-1 text-right">Time</span>
            </div>
            {tracks.map(({ title, album, duration, raga }, i) => (
              <div
                key={title}
                className="grid grid-cols-12 px-6 py-4 items-center border-b border-[#C9A84C]/8 hover:bg-[#F9F0F0] group transition-colors cursor-pointer"
              >
                <span className="col-span-1 text-sm text-[#9B7070] group-hover:hidden">{i + 1}</span>
                <span className="col-span-1 text-[#C9A84C] hidden group-hover:block">▶</span>
                <span className="col-span-4 text-sm text-[#3D1010] group-hover:text-[#6B1A1A] transition-colors">
                  {title}
                </span>
                <span className="col-span-4 hidden md:block text-xs text-[#9B7070]">{album}</span>
                <span
                  className="col-span-2 hidden md:block text-xs text-[#C9A84C] italic"
                  style={{ fontFamily: 'var(--font-cormorant), serif' }}
                >
                  {raga}
                </span>
                <span className="col-span-1 text-right text-xs text-[#9B7070]">{duration}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
