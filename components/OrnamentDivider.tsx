interface Props {
  symbol?: string;
  className?: string;
  light?: boolean;
}

export default function OrnamentDivider({ symbol = '✦', className = '', light = false }: Props) {
  const lineColor = light ? 'rgba(201,168,76,0.45)' : 'rgba(201,168,76,0.65)';
  const textColor = light ? 'text-[#E8C97A]' : 'text-[#C9A84C]';

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div
        className="h-px w-14"
        style={{ background: `linear-gradient(90deg, transparent, ${lineColor})` }}
      />
      <span className={`${textColor} text-xs tracking-widest`}>{symbol}</span>
      <div
        className="h-px w-14"
        style={{ background: `linear-gradient(90deg, ${lineColor}, transparent)` }}
      />
    </div>
  );
}
