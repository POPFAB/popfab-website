import Image from 'next/image';

const liveProviders: Array<{ name: string; logo?: string; logoText?: string; flags: string[]; countries: string[]; methods: string[]; description: string; availability: 'Available' }> = [
  {
    name: 'ALATPay',
    logo: '/images/alatpay.png',
    flags: ['🇳🇬'],
    countries: ['Nigeria'],
    methods: ['Bank Transfer', 'Virtual Accounts'],
    description: 'Wema Bank’s payment platform for bank-transfer collections and virtual accounts through POPFAB.',
    availability: 'Available',
  },
  {
    name: 'Paystack',
    logo: '/images/paystack-logo.png',
    flags: ['🇳🇬'],
    countries: ['Nigeria'],
    methods: ['Card (Visa, Mastercard, Verve)', 'Bank Transfer', 'USSD', 'QR Code'],
    description: "Nigeria's most popular payment gateway. Excellent for consumer-facing apps. Best-in-class card success rates on NGN transactions.",
    availability: 'Available',
  },
  {
    name: 'Flutterwave',
    logo: '/images/flutterwave-logo.png',
    flags: ['🇳🇬', '🇬🇭', '🇰🇪'],
    countries: ['Nigeria', 'Ghana', 'Kenya', '+20 more'],
    methods: ['Card', 'Bank Transfer', 'Mobile Money', 'USSD', 'Barter'],
    description: "Pan-African coverage with the widest method support. Ideal for businesses with cross-border payment needs across Sub-Saharan Africa.",
    availability: 'Available',
  },
  {
    name: 'Monnify',
    logo: '/images/monnify-logo.png',
    flags: ['🇳🇬'],
    countries: ['Nigeria'],
    methods: ['Bank Transfer (instant)', 'USSD', 'Virtual Accounts'],
    description: 'Preferred by businesses that rely heavily on bank transfer collections. Best USSD success rates in the Nigerian market.',
    availability: 'Available',
  },
  {
    name: 'Squad',
    logo: '/images/squad-logo.jpeg',
    flags: ['🇳🇬'],
    countries: ['Nigeria'],
    methods: ['Card', 'Bank Transfer', 'Virtual POS'],
    description: 'GTBank-backed payment infrastructure with strong card acceptance rates. Popular with businesses that serve GTBank customers.',
    availability: 'Available',
  },
  {
    name: 'Interswitch',
    logo: '/images/interswitch-logo.png',
    flags: ['🇳🇬'],
    countries: ['Nigeria'],
    methods: ['Card (Verve, Visa, Mastercard)', 'Quickteller', 'USSD'],
    description: "Nigeria's original payment infrastructure provider. Unmatched Verve card acceptance and access to the Quickteller network.",
    availability: 'Available',
  },
  {
    name: 'Payaza',
    logo: '/images/payaza-logo.jpeg',
    flags: ['🇳🇬'],
    countries: ['Nigeria'],
    methods: ['Card', 'Bank Transfer', 'Pay by Account', 'Open Banking'],
    description: 'Next-gen payment infrastructure with open banking capabilities. Strong for fintech businesses that need account-to-account transfers.',
    availability: 'Available',
  },
];

const comingSoon = [
  {
    name: 'MTN MoMo',
    abbr: 'MM',
    flags: ['🇳🇬', '🇬🇭', '🇺🇬'],
    description: "MTN Mobile Money with coverage across West and East Africa.",
    eta: 'Planned',
  },
  {
    name: 'M-Pesa',
    abbr: 'MP',
    flags: ['🇰🇪', '🇹🇿', '🇺🇬'],
    description: "East Africa's dominant mobile money platform.",
    eta: 'Planned',
  },
  {
    name: 'Hubtel',
    abbr: 'HB',
    flags: ['🇬🇭'],
    description: "Ghana's leading payment platform. Mobile money, card, and direct debit.",
    eta: 'Planned',
  },
  {
    name: 'Peach Payments',
    abbr: 'PP',
    flags: ['🇿🇦', '🇰🇪', '🇳🇬'],
    description: "South Africa and Kenya coverage for Southern and East African markets.",
    eta: 'Planned',
  },
];

const coverageData = [
  { country: 'Nigeria', flag: '🇳🇬', providers: 7, methods: 12, status: 'Full coverage' },
  { country: 'Ghana', flag: '🇬🇭', providers: 2, methods: 5, status: 'Partial, expanding' },
  { country: 'Kenya', flag: '🇰🇪', providers: 2, methods: 4, status: 'Partial, expanding' },
  { country: 'Uganda', flag: '🇺🇬', providers: 1, methods: 2, status: 'Limited' },
  { country: 'Tanzania', flag: '🇹🇿', providers: 1, methods: 2, status: 'Limited' },
  { country: 'South Africa', flag: '🇿🇦', providers: 1, methods: 3, status: 'Planned' },
];

export default function ProvidersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#10122a] pt-28 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(117,118,255,0.22),transparent_30rem)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#10b981] live-dot flex-shrink-0" />
            <span className="text-white/60 text-sm font-medium">Provider ecosystem · Nigeria first</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Provider flexibility without provider sprawl.
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Use one integration layer while retaining choice across the providers that fit your payment strategy.
          </p>
        </div>
      </section>

      {/* Live providers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="eyebrow">Provider availability</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a0f1e] mt-2">
              Choose your provider mix with confidence.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {liveProviders.map((p) => (
              <div key={p.name} className="bg-white border border-gray-200 hover:border-[#4361ee]/40 rounded-2xl p-6 hover:shadow-md transition-all duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gray-50 rounded-xl p-3 flex items-center justify-center w-16 h-12">
                    {p.logo ? <div className="relative h-full w-full"><Image src={p.logo} alt={p.name} fill sizes="64px" className="object-contain" /></div> : <span className="text-sm font-bold tracking-tight text-[#1d4ed8]">{p.logoText}</span>}
                  </div>
                  <div className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 ${p.availability === 'Available' ? 'bg-[#10b981]/10' : 'bg-amber-50'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.availability === 'Available' ? 'bg-[#10b981] live-dot' : 'bg-amber-400'}`} />
                    <span className={`text-xs font-bold ${p.availability === 'Available' ? 'text-[#10b981]' : 'text-amber-600'}`}>{p.availability}</span>
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

                <div className="border-t border-gray-100 pt-4 text-xs leading-relaxed text-gray-400">Availability reflects POPFAB&apos;s current integration access. Confirm the payment methods you need before enabling a provider.</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming soon */}
      <section className="py-16 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="eyebrow">Roadmap</span>
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
            Build your provider strategy on one integration layer
          </h2>
          <p className="text-gray-500 mb-8">
            Start in sandbox, review availability, and add the providers that fit your business.
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
