import Image from 'next/image';
import Link from 'next/link';

const liveProviders = [
  {
    name: 'Paystack',
    logo: '/images/paystack-logo.png',
    flags: ['🇳🇬'],
    countries: ['Nigeria'],
    methods: ['Card (Visa, Mastercard, Verve)', 'Bank Transfer', 'USSD', 'QR Code'],
    description: "Nigeria's most popular payment gateway. Excellent for consumer-facing apps. Best-in-class card success rates on NGN transactions.",
    uptime: '99.94%',
    avgLatency: '320ms',
  },
  {
    name: 'Flutterwave',
    logo: '/images/flutterwave-logo.png',
    flags: ['🇳🇬', '🇬🇭', '🇰🇪'],
    countries: ['Nigeria', 'Ghana', 'Kenya', '+20 more'],
    methods: ['Card', 'Bank Transfer', 'Mobile Money', 'USSD', 'Barter'],
    description: "Pan-African coverage with the widest method support. Ideal for businesses with cross-border payment needs across Sub-Saharan Africa.",
    uptime: '99.91%',
    avgLatency: '380ms',
  },
  {
    name: 'Monnify',
    logo: '/images/monnify-logo.png',
    flags: ['🇳🇬'],
    countries: ['Nigeria'],
    methods: ['Bank Transfer (instant)', 'USSD', 'Virtual Accounts'],
    description: 'Preferred by businesses that rely heavily on bank transfer collections. Best USSD success rates in the Nigerian market.',
    uptime: '99.89%',
    avgLatency: '290ms',
  },
  {
    name: 'Squad',
    logo: '/images/squad-logo.jpeg',
    flags: ['🇳🇬'],
    countries: ['Nigeria'],
    methods: ['Card', 'Bank Transfer', 'Virtual POS'],
    description: 'GTBank-backed payment infrastructure with strong card acceptance rates. Popular with businesses that serve GTBank customers.',
    uptime: '99.87%',
    avgLatency: '340ms',
  },
  {
    name: 'Interswitch',
    logo: '/images/interswitch-logo.png',
    flags: ['🇳🇬'],
    countries: ['Nigeria'],
    methods: ['Card (Verve, Visa, Mastercard)', 'Quickteller', 'USSD'],
    description: "Nigeria's original payment infrastructure provider. Unmatched Verve card acceptance and access to the Quickteller network.",
    uptime: '99.82%',
    avgLatency: '410ms',
  },
  {
    name: 'Payaza',
    logo: '/images/payaza-logo.jpeg',
    flags: ['🇳🇬'],
    countries: ['Nigeria'],
    methods: ['Card', 'Bank Transfer', 'Pay by Account', 'Open Banking'],
    description: 'Next-gen payment infrastructure with open banking capabilities. Strong for fintech businesses that need account-to-account transfers.',
    uptime: '99.90%',
    avgLatency: '310ms',
  },
];

const comingSoon = [
  {
    name: 'MTN MoMo',
    abbr: 'MM',
    flags: ['🇳🇬', '🇬🇭', '🇺🇬'],
    description: "MTN Mobile Money with coverage across West and East Africa.",
    eta: 'Q2 2024',
  },
  {
    name: 'M-Pesa',
    abbr: 'MP',
    flags: ['🇰🇪', '🇹🇿', '🇺🇬'],
    description: "East Africa's dominant mobile money platform.",
    eta: 'Q2 2024',
  },
  {
    name: 'Hubtel',
    abbr: 'HB',
    flags: ['🇬🇭'],
    description: "Ghana's leading payment platform. Mobile money, card, and direct debit.",
    eta: 'Q3 2024',
  },
  {
    name: 'Peach Payments',
    abbr: 'PP',
    flags: ['🇿🇦', '🇰🇪', '🇳🇬'],
    description: "South Africa and Kenya coverage for Southern and East African markets.",
    eta: 'Q3 2024',
  },
];

const coverageData = [
  { country: 'Nigeria', flag: '🇳🇬', providers: 6, methods: 12, status: 'Full coverage' },
  { country: 'Ghana', flag: '🇬🇭', providers: 2, methods: 5, status: 'Partial, expanding' },
  { country: 'Kenya', flag: '🇰🇪', providers: 2, methods: 4, status: 'Partial, expanding' },
  { country: 'Uganda', flag: '🇺🇬', providers: 1, methods: 2, status: 'Limited' },
  { country: 'Tanzania', flag: '🇹🇿', providers: 1, methods: 2, status: 'Limited' },
  { country: 'South Africa', flag: '🇿🇦', providers: 1, methods: 3, status: 'Coming Q3 2024' },
];

export default function ProvidersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0f1e] pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#10b981] live-dot flex-shrink-0" />
            <span className="text-white/60 text-sm font-medium">6 providers live · 4 coming soon</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Works with every provider your customers trust.
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Every major Nigerian payment provider. One API. Automatic failover between all of them.
          </p>
        </div>
      </section>

      {/* Live providers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-[#4361ee] text-xs font-semibold uppercase tracking-wider">Live Providers</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a0f1e] mt-2">
              6 providers. All live. All tested.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {liveProviders.map((p) => (
              <div key={p.name} className="bg-white border border-gray-200 hover:border-[#4361ee]/40 rounded-2xl p-6 hover:shadow-md transition-all duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gray-50 rounded-xl p-3 flex items-center justify-center w-16 h-12">
                    <div className="relative w-full h-full">
                      <Image
                        src={p.logo}
                        alt={p.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#10b981]/10 rounded-full px-2.5 py-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] live-dot flex-shrink-0" />
                    <span className="text-[#10b981] text-xs font-bold">Live</span>
                  </div>
                </div>

                <h3 className="font-bold text-[#0a0f1e] text-base mb-1">{p.name}</h3>
                <p className="text-gray-400 text-xs mb-3">{p.flags.join(' ')} {p.countries.join(', ')}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.methods.map((method) => (
                    <span key={method} className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">
                      {method}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-[#0a0f1e] font-bold text-sm">{p.uptime}</div>
                    <div className="text-gray-400 text-xs">30-day uptime</div>
                  </div>
                  <div>
                    <div className="text-[#0a0f1e] font-bold text-sm">{p.avgLatency}</div>
                    <div className="text-gray-400 text-xs">avg latency</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming soon */}
      <section className="py-16 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-[#4361ee] text-xs font-semibold uppercase tracking-wider">Coming Soon</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a0f1e] mt-2">
              Expanding across Africa
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {comingSoon.map((p) => (
              <div key={p.name} className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400 text-xs font-bold">{p.abbr}</span>
                  </div>
                  <span className="bg-gray-100 text-gray-500 text-xs font-medium px-2 py-1 rounded-full">{p.eta}</span>
                </div>
                <h3 className="font-bold text-[#0a0f1e] text-sm mb-1">{p.name}</h3>
                <p className="text-gray-400 text-xs mb-2">{p.flags.join(' ')}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage table */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-[#4361ee] text-xs font-semibold uppercase tracking-wider">Coverage</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a0f1e] mt-2">African market coverage</h2>
          </div>

          <div className="border border-gray-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-[#f8f9fb] border-b border-gray-200">
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Country</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Providers</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Methods</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {coverageData.map((row) => (
                  <tr key={row.country} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{row.flag}</span>
                        <span className="font-medium text-[#0a0f1e] text-sm">{row.country}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 hidden sm:table-cell">
                      <span className="text-[#0a0f1e] font-semibold text-sm">{row.providers}</span>
                    </td>
                    <td className="px-5 py-4 hidden sm:table-cell">
                      <span className="text-gray-500 text-sm">{row.methods}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${
                        row.status === 'Full coverage'
                          ? 'bg-[#10b981]/10 text-[#10b981]'
                          : row.status.includes('Partial')
                          ? 'bg-amber-50 text-amber-600'
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        {row.status === 'Full coverage' && <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] live-dot flex-shrink-0" />}
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f8f9fb]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0a0f1e] mb-4">
            Build with all 6 providers today
          </h2>
          <p className="text-gray-500 mb-8">
            One integration gives you access to every live provider. Automatic failover between all of them.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://developer.popfab.io"
              className="bg-[#4361ee] hover:bg-[#3451de] text-white px-7 py-3.5 rounded-lg font-semibold text-sm transition-colors"
            >
              Start Building Free
            </a>
            <a
              href="https://developer.popfab.io/docs"
              className="border border-gray-200 hover:border-[#4361ee] text-gray-700 hover:text-[#4361ee] px-7 py-3.5 rounded-lg font-semibold text-sm transition-colors"
            >
              View Documentation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
