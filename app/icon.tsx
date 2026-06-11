import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: '#6B1A1A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Musical note ♫ in gold */}
        <div
          style={{
            fontSize: 18,
            color: '#C9A84C',
            lineHeight: 1,
            marginTop: 2,
          }}
        >
          ♫
        </div>
      </div>
    ),
    { width: 32, height: 32 },
  );
}
