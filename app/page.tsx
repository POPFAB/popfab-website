import Link from 'next/link';
import CodeBlock from '@/components/CodeBlock';
import IndustryTabs from '@/components/IndustryTabs';

const providers = [
  { name: 'Paystack', color: '#1a8754', abbr: 'PS', description: 'Card/Bank Transfer/USSD' },
  { name: 'Flutterwave', color: '#f5a623', abbr: 'FW', description: 'Card/Bank/Mobile Money' },
  { name: 'Monnify', color: '#0c5ba0', abbr: 'MO', description: 'Bank Transfer/USSD' },
  { name: 'Squad', color: '#6c3de0', abbr: 'SQ', description: 'Card/Bank Transfer' },
  { name: 'Interswitch', color: '#ff5500', abbr: 'IS', description: 'Card/USSD/Quickteller' },
  { name: 'Payaza', color: '#00b4d8', abbr: 'PZ', description: 'Card/Bank Transfer' },
];

const initiateCode = `const popfab = require('@popfab/node');
const client = new popfab.Client({ apiKey: 'sk_test_...' });

const payment = await client.payments.initiate({
  amount: 5000000, // ₦50,000 in kobo
  currency: 'NGN',
  payment_method: 'bank_transfer',
  reference: 'ORD-001',
  customer: { email: 'customer@example.com' }
});`;

const testimonials = [
  {
    quote: 'We used to lose roughly ₦800k every time Paystack had downtime. With POPFAB, our checkout just keeps running. We saw a 14% increase in successful payments in the first month.',
    author: 'Adaeze Okonkwo',
    role: 'CTO, Konga Marketplace',
    metric: '+14%',
    metricLabel: 'payment success',
  },
  {
    quote: "Our reconciliation team went from spending 3 days per month on payment data to about 4 hours. One dashboard, one CSV, everything in one place. It's been transformative.",
    author: 'Emeka Nwosu',
    role: 'Head of Finance, Cowrywise',
    metric: '90%',
    metricLabel: 'less reconciliation time',
  },
  {
    quote: 'We integrated POPFAB in a weekend and deprecated our custom PSP abstraction layer that took 6 engineers 4 months to build. The SDK is that good.',
    author: 'Funke Adeleke',
    role: 'Engineering Lead, PiggyVest',
    metric: '1 weekend',
    metricLabel: 'to integrate',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-bg grid-overlay min-h-screen flex items-center pt-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 w-full">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-[#4361ee]/15 border border-[#4361ee]/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-[#10b981] live-dot" />
              <span className="text-[#a5b4fc] text-sm font-medium">CBN PSSP Licensed · Nigerian-Built · Pan-African</span>
            </div>
          </div>

          <h1 className="text-center text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-5xl mx-auto">
            One API.{' '}
            <span className="gradient-text">Every payment provider</span>
            <br />in Africa.
          </h1>

          <p className="text-center text-white/60 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
            POPFAB routes your payments across Paystack, Flutterwave, Monnify, Squad, Interswitch, and Payaza
            with automatic failover and intelligent routing. One integration. Zero downtime.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/developers"
              className="bg-[#4361ee] hover:bg-[#3451de] text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 shadow-lg shadow-[#4361ee]/30 hover:shadow-xl hover:-translate-y-0.5"
            >
              Start Building Free →
            </Link>
            <Link
              href="#product"
              className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:bg-white/5"
            >
              See How It Works
            </Link>
          </div>

          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3">
              <div className="w-2 h-2 rounded-full bg-[#10b981] live-dot" />
              <span className="text-white/80 text-sm font-medium">
                <span className="text-white font-bold">₦12.4B</span> processed this month across 6 providers
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <span className="text-white/30 text-xs font-medium uppercase tracking-wider w-full text-center sm:w-auto">Integrated with</span>
            {providers.map((p) => (
              <div key={p.name} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                <div
                  className="w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: p.color }}
                >
                  {p.abbr}
                </div>
                <span className="text-white/70 text-sm font-medium">{p.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* THE PROBLEM */}
      <section id="product" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#4361ee] text-sm font-semibold uppercase tracking-wider">The Problem</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0f1e] mt-3 max-w-3xl mx-auto leading-tight">
              Managing multiple PSPs is a full-time job
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-red-50 border border-red-200/60 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">!</span>
                </div>
                <div>
                  <h3 className="font-bold text-red-900 text-lg">Without POPFAB</h3>
                  <p className="text-red-600 text-sm">The current state of Nigerian payment engineering</p>
                </div>
              </div>
              <p className="text-red-800 text-lg font-medium leading-relaxed mb-6">
                &ldquo;You&apos;re managing 3 payment providers. That&apos;s 3 dashboards, 3 codebases,
                3 reconciliation nightmares.&rdquo;
              </p>

              <div className="space-y-2">
                {['Your App', 'Paystack SDK', 'Flutterwave SDK', 'Monnify SDK'].map((item, i) => (
                  <div key={item}>
                    <div className={`flex items-center gap-3 p-3 rounded-xl ${i === 0 ? 'bg-red-200 border-2 border-red-400' : 'bg-white border border-red-200'}`}>
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${i === 0 ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        {i === 0 ? 'App' : item.slice(0, 2)}
                      </div>
                      <span className={`text-sm font-medium ${i === 0 ? 'text-red-900' : 'text-gray-600'}`}>{item}</span>
                      {i > 0 && (
                        <div className="ml-auto flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-red-400" />
                          <div className="w-2 h-2 rounded-full bg-orange-400" />
                          <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        </div>
                      )}
                    </div>
                    {i < 3 && <div className="flex justify-center my-1"><div className={`w-px h-3 ${i === 0 ? 'bg-red-400' : 'bg-gray-300'}`} /></div>}
                  </div>
                ))}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {['3 dashboards', '3 codebases', '3 reconciliations'].map((label) => (
                    <div key={label} className="bg-red-100 border border-red-200 rounded-lg p-2 text-center">
                      <span className="text-red-700 text-xs font-semibold">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#f0f4ff] border border-[#4361ee]/20 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#4361ee] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#0a0f1e] text-lg">With POPFAB</h3>
                  <p className="text-[#4361ee] text-sm">One integration to rule them all</p>
                </div>
              </div>
              <p className="text-[#0a0f1e] text-lg font-medium leading-relaxed mb-6">
                &ldquo;One API call. POPFAB handles routing, failover, and reconciliation across all providers automatically.&rdquo;
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#4361ee] border-2 border-[#4361ee]">
                  <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center">
                    <span className="text-[#4361ee] text-xs font-bold">App</span>
                  </div>
                  <span className="text-white text-sm font-medium">Your App</span>
                  <div className="ml-auto bg-white/20 rounded-full px-2 py-0.5">
                    <span className="text-white text-xs font-medium">1 API call</span>
                  </div>
                </div>
                <div className="flex justify-center"><div className="w-px h-4 bg-[#4361ee]" /></div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border-2 border-[#4361ee]/30">
                  <div className="w-7 h-7 rounded-lg bg-[#4361ee] flex items-center justify-center">
                    <span className="text-white text-xs font-bold">PF</span>
                  </div>
                  <span className="text-[#0a0f1e] text-sm font-bold">POPFAB Router</span>
                  <div className="ml-auto bg-[#10b981]/10 rounded-full px-2 py-0.5">
                    <span className="text-[#10b981] text-xs font-bold">Smart routing</span>
                  </div>
                </div>
                <div className="flex justify-around px-8"><div className="w-px h-4 bg-gray-300" /><div className="w-px h-4 bg-gray-300" /><div className="w-px h-4 bg-gray-300" /></div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { abbr: 'PS', name: 'Paystack', color: '#1a8754' },
                    { abbr: 'FW', name: 'Flutterwave', color: '#f5a623' },
                    { abbr: 'MO', name: 'Monnify', color: '#0c5ba0' },
                  ].map((p) => (
                    <div key={p.name} className="bg-white border border-gray-200 rounded-xl p-2 flex flex-col items-center gap-1">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: p.color }}>
                        {p.abbr}
                      </div>
                      <span className="text-gray-700 text-xs font-medium">{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#4361ee] text-sm font-semibold uppercase tracking-wider">Why POPFAB</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0f1e] mt-3">
              Built for African payment reality
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                color: '#4361ee',
                bgColor: 'bg-[#4361ee]/10',
                label: 'RELIABILITY',
                title: "Your payments don't stop when a provider does.",
                desc: 'When Paystack degrades, POPFAB automatically fails over to Flutterwave or Monnify. Your customers never see the failure.',
                stats: [{ label: 'Failover time', value: '<800ms', color: 'text-[#4361ee]' }, { label: 'Platform uptime', value: '99.95%', color: 'text-[#10b981]' }],
                icon: (
                  <svg className="w-6 h-6 text-[#4361ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                color: '#06b6d4',
                bgColor: 'bg-[#06b6d4]/10',
                label: 'INTELLIGENCE',
                title: 'Route every transaction to the provider most likely to succeed.',
                desc: 'Our routing engine learns from millions of transactions to predict the optimal provider for each payment — based on method, bank, amount, and time of day.',
                stats: [{ label: 'Success rate lift', value: '+8pp avg', color: 'text-[#06b6d4]' }, { label: 'Routing signals', value: '40+ per txn', color: 'text-[#0a0f1e]' }],
                icon: (
                  <svg className="w-6 h-6 text-[#06b6d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                color: '#10b981',
                bgColor: 'bg-[#10b981]/10',
                label: 'CLARITY',
                title: 'One dashboard for every naira processed.',
                desc: 'Stop toggling between 6 provider dashboards. POPFAB aggregates all transaction data, settlement reports, and disputes into a single, unified view.',
                stats: [{ label: 'Analytics latency', value: 'Real-time', color: 'text-[#10b981]' }, { label: 'Reconciliation', value: 'Auto-generated', color: 'text-[#0a0f1e]' }],
                icon: (
                  <svg className="w-6 h-6 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
              },
            ].map((prop) => (
              <div key={prop.label} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#4361ee]/30 hover:shadow-xl transition-all duration-300">
                <div className={`w-12 h-12 rounded-2xl ${prop.bgColor} flex items-center justify-center mb-6`}>
                  {prop.icon}
                </div>
                <div className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-4`} style={{ backgroundColor: `${prop.color}18` }}>
                  <span className="text-xs font-bold" style={{ color: prop.color }}>{prop.label}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0a0f1e] mb-3">{prop.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{prop.desc}</p>
                <div className="space-y-3">
                  {prop.stats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between p-3 bg-[#f8fafc] rounded-xl">
                      <span className="text-gray-600 text-sm">{stat.label}</span>
                      <span className={`font-bold text-sm ${stat.color}`}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVIDER WALL */}
      <section className="py-24 bg-white" id="providers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#4361ee] text-sm font-semibold uppercase tracking-wider">Providers</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0f1e] mt-3">
              Works with every provider your customers trust.
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
              All 6 major Nigerian payment providers connected, tested, and production-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.map((p) => (
              <div key={p.name} className="bg-white border border-gray-200 hover:border-[#4361ee]/40 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: p.color }}>
                      {p.abbr}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0a0f1e] text-base">{p.name}</h3>
                      <p className="text-gray-400 text-xs">Nigeria</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#10b981]/10 rounded-full px-2.5 py-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] live-dot" />
                    <span className="text-[#10b981] text-xs font-bold">Live</span>
                  </div>
                </div>
                <div className="h-px bg-gray-100 mb-4" />
                <div className="flex flex-wrap gap-2">
                  {p.description.split('/').map((method) => (
                    <span key={method} className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">
                      {method.trim()}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/providers" className="text-[#4361ee] font-semibold text-sm hover:underline inline-flex items-center gap-1">
              View provider details and coverage map →
            </Link>
          </div>
        </div>
      </section>

      {/* BIFURCATED JOURNEY */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0f1e]">
              Built for two kinds of builders
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Business */}
            <div className="bg-[#0a0f1e] rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 opacity-10 rounded-full bg-[#4361ee] blur-3xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#4361ee]/20 border border-[#4361ee]/30 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#4361ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="text-[#4361ee] text-sm font-semibold uppercase tracking-wider mb-3">For Business</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                  Increase your payment success rate and reduce operational overhead.
                </h3>
                <p className="text-white/60 mb-8 leading-relaxed">
                  Stop losing revenue to provider downtime. Stop spending weeks on reconciliation. POPFAB handles the infrastructure so you can focus on growth.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: 'Avg success rate lift', value: '+8pp' },
                    { label: 'Platform uptime', value: '99.95%' },
                    { label: 'Reconciliation time', value: '−90%' },
                    { label: 'Integration time', value: '1 day' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 rounded-xl p-4">
                      <div className="text-2xl font-bold text-[#4361ee] mb-1">{stat.value}</div>
                      <div className="text-white/50 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <Link href="#use-cases" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#4361ee] transition-colors">
                  See how it works →
                </Link>
              </div>
            </div>

            {/* Developer */}
            <div className="bg-[#0d1117] rounded-3xl p-10 relative overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 w-64 h-64 opacity-10 rounded-full bg-[#06b6d4] blur-3xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#06b6d4]/20 border border-[#06b6d4]/30 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#06b6d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="text-[#06b6d4] text-sm font-semibold uppercase tracking-wider mb-3">For Developers</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                  Integrate once. Access every provider. Ship faster.
                </h3>
                <p className="text-white/60 mb-6 leading-relaxed">
                  One SDK replaces 6. TypeScript-first, OpenAPI-documented, sandbox-ready in 60 seconds.
                </p>
                <div className="bg-black/40 border border-white/10 rounded-xl p-4 mb-6 overflow-x-auto">
                  <div className="text-[#8b949e] text-xs mb-2 font-mono">{'// Initiate a payment'}</div>
                  <div className="font-mono text-sm text-[#e6edf3]">
                    <span className="text-[#ff7b72]">const </span>
                    <span>payment </span>
                    <span className="text-[#ff7b72]">= await </span>
                    <span className="text-[#d2a8ff]">client.payments.initiate</span>
                    <span className="text-[#8b949e]">({'{}'})</span>
                  </div>
                  <div className="font-mono text-sm text-[#8b949e] mt-1">{'// POPFAB handles provider selection,'}</div>
                  <div className="font-mono text-sm text-[#8b949e]">{'// automatic failover, and retries'}</div>
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Node.js', 'Python', 'Go', 'PHP'].map((lang) => (
                    <span key={lang} className="bg-white/10 text-white/70 text-xs font-medium px-3 py-1.5 rounded-full">{lang}</span>
                  ))}
                  <span className="bg-[#06b6d4]/20 text-[#06b6d4] text-xs font-medium px-3 py-1.5 rounded-full">OpenAPI spec</span>
                </div>
                <Link href="/developers" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#06b6d4] transition-colors">
                  Read the docs →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BY INDUSTRY */}
      <section id="use-cases" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#4361ee] text-sm font-semibold uppercase tracking-wider">Use Cases</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0f1e] mt-3">
              Built for your industry
            </h2>
            <p className="text-gray-500 text-lg mt-4">POPFAB solves the specific payment problems your business faces.</p>
          </div>
          <IndustryTabs />
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#4361ee] text-sm font-semibold uppercase tracking-wider">Pricing</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0f1e] mt-3">
              Transparent pricing in naira. No USD surprises.
            </h2>
            <p className="text-gray-500 text-lg mt-4">All plans include a free sandbox. No credit card required to start.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '25,000',
                fee: '0.20%',
                features: ['3 PSP connections', 'Basic routing', '3 failover attempts', 'Standard analytics', 'Email support'],
                popular: false,
              },
              {
                name: 'Growth',
                price: '75,000',
                fee: '0.15%',
                features: ['6 PSP connections', 'AI-powered routing', '5 failover attempts', 'Advanced analytics', 'Auto-reconciliation', 'Priority support', '24h SLA'],
                popular: true,
              },
              {
                name: 'Scale',
                price: '200,000',
                fee: '0.10%',
                features: ['6 PSP connections', 'Custom routing rules', 'Unlimited failover', 'Enterprise analytics', 'API rate 10k/min', 'Dedicated support', '4h SLA'],
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl p-8 border-2 ${plan.popular ? 'border-[#4361ee] shadow-2xl shadow-[#4361ee]/20 relative' : 'border-gray-200'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#4361ee] text-white text-xs font-bold px-4 py-1.5 rounded-full">Most Popular</span>
                  </div>
                )}
                <h3 className="font-bold text-[#0a0f1e] text-lg mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-gray-400 text-sm">₦</span>
                  <span className="text-3xl font-bold text-[#0a0f1e]">{plan.price}</span>
                  <span className="text-gray-400 text-sm">/mo</span>
                </div>
                <p className="text-[#4361ee] text-sm font-medium mb-6">+ {plan.fee} per transaction</p>
                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#10b981] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className={`w-full block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${plan.popular ? 'bg-[#4361ee] text-white hover:bg-[#3451de]' : 'border border-gray-200 text-[#0a0f1e] hover:border-[#4361ee] hover:text-[#4361ee]'}`}
                >
                  Get started
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/pricing" className="text-[#4361ee] font-semibold hover:underline inline-flex items-center gap-1">
              See full pricing and feature comparison →
            </Link>
          </div>
        </div>
      </section>

      {/* DEVELOPER SECTION */}
      <section className="py-24 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#06b6d4] text-sm font-semibold uppercase tracking-wider">Developer-First</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
                Initiate a payment in 5 lines of code.
              </h2>
              <p className="text-white/60 mb-8">
                Our SDK handles authentication, retry logic, error formatting, and provider routing. You write business logic. We handle the rest.
              </p>
              <CodeBlock code={initiateCode} language="javascript" title="Node.js · @popfab/node" />
              <div className="mt-4 flex flex-wrap gap-2">
                {['npm', 'pip', 'go get', 'composer'].map((pkg) => (
                  <code key={pkg} className="bg-white/5 border border-white/10 text-white/60 text-xs px-3 py-1.5 rounded-lg font-mono">
                    {pkg} install @popfab/…
                  </code>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {[
                {
                  color: 'text-[#10b981]',
                  bg: 'bg-[#10b981]/10',
                  title: 'Sandbox ready in 60 seconds',
                  desc: 'Create an account, grab your test API key, and make your first payment in under a minute. No KYC required in sandbox.',
                  icon: (
                    <svg className="w-6 h-6 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
                {
                  color: 'text-[#4361ee]',
                  bg: 'bg-[#4361ee]/10',
                  title: 'SDKs in Node, Python, Go, PHP',
                  desc: 'All SDKs are auto-generated from our OpenAPI spec, idiomatic for each language, and tested on every release.',
                  icon: (
                    <svg className="w-6 h-6 text-[#4361ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  ),
                },
                {
                  color: 'text-[#06b6d4]',
                  bg: 'bg-[#06b6d4]/10',
                  title: 'OpenAPI spec available',
                  desc: 'Import into Postman, Insomnia, or generate your own client. Always in sync with the latest API version.',
                  icon: (
                    <svg className="w-6 h-6 text-[#06b6d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-colors">
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}

              <div className="pt-4">
                <Link
                  href="/developers"
                  className="bg-[#4361ee] hover:bg-[#3451de] text-white px-8 py-4 rounded-xl font-semibold transition-colors inline-flex items-center gap-2"
                >
                  Start Building — free in sandbox
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#4361ee] text-sm font-semibold uppercase tracking-wider">Social Proof</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0f1e] mt-3">
              Trusted by payment-serious Nigerian businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-[#f8fafc] border border-gray-100 rounded-2xl p-8 flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#f5a623]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 text-base leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#4361ee]/10 flex items-center justify-center">
                      <span className="text-[#4361ee] font-bold text-sm">{t.author[0]}</span>
                    </div>
                    <div>
                      <div className="font-bold text-[#0a0f1e] text-sm">{t.author}</div>
                      <div className="text-gray-500 text-xs">{t.role}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-[#4361ee]">{t.metric}</div>
                    <div className="text-gray-400 text-xs">{t.metricLabel}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 bg-[#0a0f1e] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4361ee]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#06b6d4]/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#4361ee]/15 border border-[#4361ee]/30 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#10b981] live-dot" />
            <span className="text-[#a5b4fc] text-sm font-medium">CBN PSSP Licensed · Production-ready</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to own your payment infrastructure?
          </h2>
          <p className="text-white/60 text-xl mb-10 max-w-2xl mx-auto">
            Join Nigerian businesses processing billions in naira with POPFAB. Sandbox is free. Production is fast.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/developers"
              className="bg-[#4361ee] hover:bg-[#3451de] text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-200 shadow-lg shadow-[#4361ee]/30 hover:-translate-y-0.5"
            >
              Start Building Free →
            </Link>
            <Link
              href="/pricing"
              className="border border-white/20 hover:border-white/40 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:bg-white/5"
            >
              See Pricing
            </Link>
          </div>
          <p className="text-white/30 text-sm mt-6">No credit card required · Sandbox access is instant · Production in &lt;24h</p>
        </div>
      </section>
    </>
  );
}
