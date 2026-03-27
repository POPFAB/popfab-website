import Link from 'next/link';

const liveProviders = [
  {
    name: 'Paystack',
    abbr: 'PS',
    color: '#1a8754',
    flags: ['🇳🇬'],
    countries: ['Nigeria'],
    methods: ['Card (Visa, Mastercard, Verve)', 'Bank Transfer', 'USSD', 'QR Code'],
    status: 'live' as const,
    description: "Nigeria's most popular payment gateway. Excellent for consumer-facing apps. Best-in-class card success rates on NGN transactions.",
    uptime: '99.94%',
    avgLatency: '320ms',
  },
  {
    name: 'Flutterwave',
    abbr: 'FW',
    color: '#f5a623',
    flags: ['🇳🇬', '🇬🇭', '🇰🇪'],
    countries: ['Nigeria', 'Ghana', 'Kenya', '+20 more'],
    methods: ['Card', 'Bank Transfer', 'Mobile Money', 'USSD', 'Barter'],
    status: 'live' as const,
    description: "Pan-African coverage with the widest method support. Ideal for businesses with cross-border payment needs across Sub-Saharan Africa.",
    uptime: '99.91%',
    avgLatency: '380ms',
  },
  {
    name: 'Monnify',
    abbr: 'MO',
    color: '#0c5ba0',
    flags: ['🇳🇬'],
    countries: ['Nigeria'],
    methods: ['Bank Transfer (instant)', 'USSD', 'Virtual Accounts'],
    status: 'live' as const,
    description: 'Preferred by businesses that rely heavily on bank transfer collections. Best USSD success rates in the Nigerian market.',
    uptime: '99.89%',
    avgLatency: '290ms',
  },
  {
    name: 'Squad',
    abbr: 'SQ',
    color: '#6c3de0',
    flags: ['🇳🇬'],
    countries: ['Nigeria'],
    methods: ['Card', 'Bank Transfer', 'Virtual POS'],
    status: 'live' as const,
    description: 'GTBank-backed payment infrastructure with strong card acceptance rates. Popular with businesses that serve GTBank customers.',
    uptime: '99.87%',
    avgLatency: '340ms',
  },
  {
    name: 'Interswitch',
    abbr: 'IS',
    color: '#ff5500',
    flags: ['🇳🇬'],
    countries: ['Nigeria'],
    methods: ['Card (Verve, Visa, Mastercard)', 'Quickteller', 'USSD'],
    status: 'live' as const,
    description: "Nigeria's original payment infrastructure provider. Unmatched Verve card acceptance and access to the Quickteller network.",
    uptime: '99.82%',
    avgLatency: '410ms',
  },
  {
    name: 'Payaza',
    abbr: 'PZ',
    color: '#00b4d8',
    flags: ['🇳🇬'],
    countries: ['Nigeria'],
    methods: ['Card', 'Bank Transfer', 'Pay by Account', 'Open Banking'],
    status: 'live' as const,
    description: 'Next-gen payment infrastructure with open banking capabilities. Strong for fintech businesses that need account-to-account transfers.',
    uptime: '99.90%',
    avgLatency: '310ms',
  },
];

const comingSoon = [
  {
    name: 'MTN MoMo',
    abbr: 'MM',
    color: '#ffcc00',
    flags: ['🇳🇬', '🇬🇭', '🇺🇬'],
    description: "MTN Mobile Money with coverage across West and East Africa. Integration in final testing.",
    eta: 'Q2 2024',
  },
  {
    name: 'M-Pesa',
    abbr: 'MP',
    color: '#00a650',
    flags: ['🇰🇪', '🇹🇿', '🇺🇬'],
    description: "East Africa's dominant mobile money platform. Essential for Kenyan and Tanzanian market expansion.",
    eta: 'Q2 2024',
  },
  {
    name: 'Hubtel',
    abbr: 'HB',
    color: '#e8122a',
    flags: ['🇬🇭'],
    description: "Ghana's leading payment platform. Mobile money, card, and direct debit for the Ghanaian market.",
    eta: 'Q3 2024',
  },
  {
    name: 'Peach Payments',
    abbr: 'PP',
    color: '#ff6b35',
    flags: ['🇿🇦', '🇰🇪', '🇳🇬'],
    description: "South Africa and Kenya coverage for businesses expanding into Southern and East African markets.",
    eta: 'Q3 2024',
  },
];

const coverageData = [
  { country: 'Nigeria', flag: '🇳🇬', providers: 6, methods: 12, status: 'Full coverage' },
  { country: 'Ghana', flag: '🇬🇭', providers: 2, methods: 5, status: 'Partial — expanding' },
  { country: 'Kenya', flag: '🇰🇪', providers: 2, methods: 4, status: 'Partial — expanding' },
  { country: 'Uganda', flag: '🇺🇬', providers: 1, methods: 2, status: 'Limited' },
  { country: 'Tanzania', flag: '🇹🇿', providers: 1, methods: 2, status: 'Limited' },
  { country: 'South Africa', flag: '🇿🇦', providers: 1, methods: 3, status: 'Coming Q3 2024' },
];

export default function ProvidersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0f1e] hero-bg grid-overlay pt-28 pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#4361ee]/15 border border-[#4361ee]/30 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#10b981] live-dot" />
            <span className="text-[#a5b4fc] text-sm font-medium">6 providers live · 4 coming soon</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Works with every provider<br />
            <span className="gradient-text">your customers trust.</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Every major Nigerian payment provider. One API. Automatic failover between all of them.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Live providers grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#4361ee] text-sm font-semibold uppercase tracking-wider">Live Providers</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0f1e] mt-3">
              6 providers. All live. All tested.
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Each provider integration is maintained, monitored, and updated whenever providers release API changes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {liveProviders.map((p) => (
              <div key={p.name} className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#4361ee]/30 hover:shadow-xl transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-sm"
                      style={{ backgroundColor: p.color }}
                    >
                      {p.abbr}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0a0f1e] text-xl">{p.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-lg">{p.flags.join(' ')}</span>
                        <span className="text-gray-400 text-sm">{p.countries.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#10b981]/10 border border-[#10b981]/20 rounded-full px-3 py-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#10b981] live-dot" />
                    <span className="text-[#10b981] text-xs font-bold">LIVE</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{p.description}</p>

                {/* Methods */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Payment Methods</p>
                  <div className="flex flex-wrap gap-2">
                    {p.methods.map((method) => (
                      <span key={method} className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full">
                        {method}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">30-day uptime</p>
                    <p className="text-base font-bold text-[#10b981]">{p.uptime}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Avg API latency</p>
                    <p className="text-base font-bold text-[#0a0f1e]">{p.avgLatency}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#4361ee] text-sm font-semibold uppercase tracking-wider">Coming Soon</span>
            <h2 className="text-3xl font-bold text-[#0a0f1e] mt-3">
              Expanding across Africa
            </h2>
            <p className="text-gray-500 mt-3">
              These integrations are in final testing. Current customers get early access.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {comingSoon.map((p) => (
              <div key={p.name} className="bg-white border border-dashed border-gray-300 rounded-2xl p-6 opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm opacity-60"
                      style={{ backgroundColor: p.color }}
                    >
                      {p.abbr}
                    </div>
                    <h3 className="font-bold text-gray-700 text-sm">{p.name}</h3>
                  </div>
                  <div className="bg-gray-100 rounded-full px-2.5 py-1">
                    <span className="text-gray-500 text-xs font-bold">SOON</span>
                  </div>
                </div>
                <div className="flex gap-1.5 mb-3">
                  {p.flags.map((f) => <span key={f} className="text-base">{f}</span>)}
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{p.description}</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#f5a623]" />
                  <span className="text-[#f5a623] text-xs font-bold">ETA: {p.eta}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm mb-4">Need a specific provider? Let us know and we&apos;ll prioritize it.</p>
            <Link href="/about" className="text-[#4361ee] font-semibold hover:underline text-sm">
              Request a provider integration →
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage map section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#4361ee] text-sm font-semibold uppercase tracking-wider">Coverage</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0f1e] mt-3 mb-5">
                Nigerian-built.<br />Pan-African by design.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                POPFAB started with full coverage of the Nigerian market — all 6 major PSPs, every payment method your customers use. We&apos;re expanding across Africa market by market, prioritizing providers our customers actually need.
              </p>

              <div className="space-y-3">
                {coverageData.map((c) => (
                  <div key={c.country} className="flex items-center gap-4 p-4 bg-[#f8fafc] rounded-xl">
                    <span className="text-2xl">{c.flag}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm text-[#0a0f1e]">{c.country}</span>
                        <span className={`text-xs font-bold ${
                          c.status === 'Full coverage' ? 'text-[#10b981]' :
                          c.status.includes('Partial') ? 'text-[#f5a623]' :
                          'text-gray-400'
                        }`}>{c.status}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span>{c.providers} provider{c.providers !== 1 ? 's' : ''}</span>
                        <span>·</span>
                        <span>{c.methods} payment method{c.methods !== 1 ? 's' : ''}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stylized Africa map representation */}
            <div className="bg-[#0a0f1e] rounded-3xl p-10 relative overflow-hidden min-h-96">
              <div className="absolute inset-0 grid-overlay opacity-30" />
              <div className="relative z-10">
                <h3 className="text-white font-bold text-lg mb-6">Africa Coverage</h3>

                {/* Visual coverage representation */}
                <div className="space-y-4">
                  <div className="text-center mb-8">
                    <div className="inline-flex flex-col items-center">
                      {/* Simplified Africa silhouette using divs */}
                      <div className="w-48 h-64 relative">
                        {/* Nigeria - highlighted */}
                        <div className="absolute top-[35%] left-[30%] w-12 h-10 bg-[#4361ee] rounded-lg opacity-90 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">🇳🇬</span>
                        </div>
                        {/* Ghana */}
                        <div className="absolute top-[38%] left-[18%] w-8 h-7 bg-[#f5a623] rounded opacity-60 flex items-center justify-center">
                          <span className="text-white text-[10px] font-bold">🇬🇭</span>
                        </div>
                        {/* Kenya */}
                        <div className="absolute top-[50%] left-[55%] w-8 h-7 bg-[#06b6d4] rounded opacity-60 flex items-center justify-center">
                          <span className="text-white text-[10px] font-bold">🇰🇪</span>
                        </div>
                        {/* South Africa */}
                        <div className="absolute top-[72%] left-[35%] w-9 h-8 bg-gray-600 rounded opacity-40 flex items-center justify-center">
                          <span className="text-white text-[10px] font-bold">🇿🇦</span>
                        </div>
                        {/* Background continent shape */}
                        <div className="absolute inset-0 border-2 border-white/10 rounded-[30%_40%_30%_40%/40%_30%_40%_30%] opacity-20" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#4361ee]/20 border border-[#4361ee]/30 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-[#4361ee]">6</div>
                      <div className="text-white/50 text-xs">Live in Nigeria</div>
                    </div>
                    <div className="bg-[#f5a623]/10 border border-[#f5a623]/20 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-[#f5a623]">4</div>
                      <div className="text-white/50 text-xs">Coming soon</div>
                    </div>
                    <div className="bg-[#10b981]/10 border border-[#10b981]/20 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-[#10b981]">6</div>
                      <div className="text-white/50 text-xs">Countries covered</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-white">12+</div>
                      <div className="text-white/50 text-xs">Payment methods</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider SLA section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a0f1e]">Provider monitoring, 24/7</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              POPFAB monitors all 6 providers in real time. When a provider degrades, traffic is rerouted automatically — before you notice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Real-time health checks',
                desc: 'Every provider is health-checked every 10 seconds. The moment a provider starts failing, POPFAB adjusts routing weights automatically.',
                stat: '10s',
                statLabel: 'check interval',
                color: 'text-[#4361ee]',
              },
              {
                title: 'Automatic failover',
                desc: 'When a provider health score drops below threshold, transactions are automatically routed to the next best provider in under 800ms.',
                stat: '<800ms',
                statLabel: 'failover time',
                color: 'text-[#10b981]',
              },
              {
                title: 'Status transparency',
                desc: 'POPFAB publishes a real-time status page for all providers. Your engineering team always knows exactly what is happening.',
                stat: '99.95%',
                statLabel: 'platform uptime',
                color: 'text-[#06b6d4]',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all">
                <div className={`text-4xl font-bold ${item.color} mb-2`}>{item.stat}</div>
                <div className="text-gray-400 text-sm mb-5">{item.statLabel}</div>
                <h3 className="font-bold text-[#0a0f1e] text-base mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0f1e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to connect all 6 providers at once?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            One integration. All providers. Automatic failover included.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/developers" className="bg-[#4361ee] hover:bg-[#3451de] text-white px-8 py-4 rounded-xl font-semibold transition-colors">
              Start Building Free
            </Link>
            <Link href="/pricing" className="border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
