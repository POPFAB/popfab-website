import Link from 'next/link';

interface Feature {
  label: string;
  included: boolean | string;
}

interface PlanCardProps {
  name: string;
  monthlyPrice: string;
  annualPrice?: string;
  transactionFee: string;
  description: string;
  features: Feature[];
  isPopular?: boolean;
  isEnterprise?: boolean;
  annual?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function PlanCard({
  name,
  monthlyPrice,
  annualPrice,
  transactionFee,
  description,
  features,
  isPopular,
  isEnterprise,
  annual,
  ctaLabel = 'Get started',
  ctaHref = '/developers',
}: PlanCardProps) {
  const displayPrice = annual && annualPrice ? annualPrice : monthlyPrice;

  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col h-full transition-all duration-300 ${
        isPopular
          ? 'bg-[#4361ee] text-white shadow-2xl shadow-[#4361ee]/30 scale-[1.02]'
          : 'bg-white border border-gray-200 hover:border-[#4361ee]/40 hover:shadow-xl'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-[#06b6d4] to-[#4361ee] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className={`text-lg font-bold mb-1 ${isPopular ? 'text-white' : 'text-[#0a0f1e]'}`}>{name}</h3>
        <p className={`text-sm ${isPopular ? 'text-white/80' : 'text-gray-500'}`}>{description}</p>
      </div>

      <div className="mb-6">
        {isEnterprise ? (
          <div>
            <span className={`text-4xl font-bold ${isPopular ? 'text-white' : 'text-[#0a0f1e]'}`}>Custom</span>
            <p className={`text-sm mt-1 ${isPopular ? 'text-white/70' : 'text-gray-500'}`}>Talk to our team</p>
          </div>
        ) : (
          <>
            <div className="flex items-baseline gap-1">
              <span className={`text-sm font-medium ${isPopular ? 'text-white/70' : 'text-gray-400'}`}>₦</span>
              <span className={`text-4xl font-bold ${isPopular ? 'text-white' : 'text-[#0a0f1e]'}`}>
                {displayPrice}
              </span>
              <span className={`text-sm ${isPopular ? 'text-white/70' : 'text-gray-400'}`}>/mo</span>
            </div>
            {annual && annualPrice && (
              <p className={`text-xs mt-1 ${isPopular ? 'text-white/60' : 'text-gray-400'} line-through`}>
                ₦{monthlyPrice}/mo
              </p>
            )}
            <p className={`text-sm mt-2 font-medium ${isPopular ? 'text-white/80' : 'text-[#4361ee]'}`}>
              + {transactionFee} per transaction
            </p>
          </>
        )}
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            {feature.included === false ? (
              <svg
                className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isPopular ? 'text-white/30' : 'text-gray-300'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isPopular ? 'text-[#a5f3fc]' : 'text-[#10b981]'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
            <span
              className={`text-sm ${
                feature.included === false
                  ? isPopular
                    ? 'text-white/30'
                    : 'text-gray-300'
                  : isPopular
                  ? 'text-white/90'
                  : 'text-gray-700'
              }`}
            >
              {typeof feature.included === 'string' ? (
                <>
                  <span className="font-medium">{feature.included}</span> {feature.label}
                </>
              ) : (
                feature.label
              )}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition-all duration-200 block ${
          isPopular
            ? 'bg-white text-[#4361ee] hover:bg-white/90'
            : isEnterprise
            ? 'bg-[#0a0f1e] text-white hover:bg-[#0a0f1e]/80'
            : 'bg-[#4361ee] text-white hover:bg-[#3451de]'
        }`}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
