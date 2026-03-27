interface ProviderBadgeProps {
  name: string;
  status?: 'live' | 'coming-soon';
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}

const providerColors: Record<string, string> = {
  Paystack: '#1a8754',
  Flutterwave: '#f5a623',
  Monnify: '#0c5ba0',
  Squad: '#6c3de0',
  Interswitch: '#ff5500',
  Payaza: '#00b4d8',
  'MTN MoMo': '#ffcc00',
  'M-Pesa': '#00a650',
  Hubtel: '#e8122a',
  'Peach Payments': '#ff6b35',
};

export default function ProviderBadge({ name, status = 'live', color, size = 'md' }: ProviderBadgeProps) {
  const dotColor = color || providerColors[name] || '#4361ee';

  const sizeClasses = {
    sm: 'text-xs px-2 py-1 gap-1.5',
    md: 'text-sm px-3 py-1.5 gap-2',
    lg: 'text-base px-4 py-2 gap-2',
  };

  const dotSizes = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5',
  };

  return (
    <div className={`inline-flex items-center font-medium rounded-full border ${sizeClasses[size]} ${
      status === 'live'
        ? 'bg-[#10b981]/10 border-[#10b981]/30 text-[#10b981]'
        : 'bg-white/5 border-white/20 text-white/40'
    }`}>
      <div
        className={`${dotSizes[size]} rounded-full flex-shrink-0 ${status === 'live' ? 'live-dot' : ''}`}
        style={{ backgroundColor: status === 'live' ? dotColor : '#4a5568' }}
      />
      <span>{name}</span>
      {status === 'live' ? (
        <span className={`${size === 'sm' ? 'text-[10px]' : 'text-xs'} font-bold tracking-wider ml-1`}>LIVE</span>
      ) : (
        <span className={`${size === 'sm' ? 'text-[10px]' : 'text-xs'} font-medium ml-1 text-white/30`}>SOON</span>
      )}
    </div>
  );
}
