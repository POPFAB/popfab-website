import Image from 'next/image';
import Link from 'next/link';
import CodeBlock from '@/components/CodeBlock';
import IndustryTabs from '@/components/IndustryTabs';

const providers = [
  { name: 'Paystack', logo: '/images/paystack-logo.png', description: 'Card · Bank Transfer · USSD' },
  { name: 'Flutterwave', logo: '/images/flutterwave-logo.png', description: 'Card · Bank · Mobile Money' },
  { name: 'Monnify', logo: '/images/monnify-logo.png', description: 'Bank Transfer · USSD' },
  { name: 'Squad', logo: '/images/squad-logo.jpeg', description: 'Card · Bank Transfer' },
  { name: 'Interswitch', logo: '/images/interswitch-logo.png', description: 'Card · USSD · Quickteller' },
  { name: 'Payaza', logo: '/images/payaza-logo.jpeg', description: 'Card · Bank Transfer' },
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
    quote: "Our reconciliation team went from spending 3 days per month on payment data to about 4 hours. One dashboard, one CSV, everything in one place.",
    author: 'Emeka Nwosu',
    role: 'Head of Finance, Cowrywise',
    metric: '−90%',
    metricLabel: 'reconciliation time',
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
      <section className="bg-[#0a0f1e] min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-[#10b981] live-dot flex-shrink-0" />
              <span className="text-white/60 text-sm font-medium">Nigerian-Built · Pan-African</span>
            </div>
          </div>

          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-5 max-w-4xl mx-auto">
            One API. Every payment provider in Africa.
          </h1>

          <p className="text-center text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Route payments across Paystack, Flutterwave, Monnify, Squad, Interswitch, and Payaza with automatic failover. One integration. Zero downtime.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
            <a
              href="https://developer.popfab.io"
              className="w-full sm:w-auto bg-[#4361ee] hover:bg-[#3451de] text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors text-center"
            >
              Start Building Free
            </a>
            <Link
              href="#product"
              className="w-full sm:w-auto border border-white/20 hover:border-white/40 text-white/80 hover:text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors text-center"
            >
              See How It Works
            </Link>
          </div>

          {/* Provider logos */}
          <div className="border-t border-white/10 pt-10">
            <p className="text-center text-white/30 text-xs font-medium uppercase tracking-wider mb-6">
              Integrated with
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6 max-w-3xl mx-auto">
              {providers.map((p) => (
                <div
                  key={p.name}
                  className="bg-white rounded-xl p-3 flex items-center justify-center aspect-square"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section id="product" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#4361ee] text-xs font-semibold uppercase tracking-wider">The Problem</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0f1e] mt-3 max-w-2xl mx-auto leading-tight">
              Managing multiple PSPs is a full-time job
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Without */}
            <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-red-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-base font-bold">!</span>
                </div>
                <div>
                  <h3 className="font-bold text-red-900">Without POPFAB</h3>
                  <p className="text-red-500 text-sm">3 dashboards, 3 codebases, 3 reconciliation nightmares</p>
                </div>
              </div>
              <div className="space-y-2">
                {['Your App', 'Paystack SDK', 'Flutterwave SDK', 'Monnify SDK'].map((item, i) => (
                  <div key={item}>
                    <div className={`flex items-center gap-3 p-3 rounded-xl ${i === 0 ? 'bg-red-200 border border-red-300' : 'bg-white border border-red-100'}`}>
                      <span className={`text-sm font-medium ${i === 0 ? 'text-red-900' : 'text-gray-500'}`}>{item}</span>
                      {i > 0 && (
                        <div className="ml-auto flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-red-300" />
                          <div className="w-2 h-2 rounded-full bg-orange-300" />
                          <div className="w-2 h-2 rounded-full bg-yellow-300" />
                        </div>
                      )}
                    </div>
                    {i < 3 && <div className="flex justify-center my-1"><div className="w-px h-3 bg-red-200" /></div>}
                  </div>
                ))}
              </div>
            </div>

            {/* With */}
            <div className="bg-[#f0f4ff] border border-[#4361ee]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-[#4361ee] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#0a0f1e]">With POPFAB</h3>
                  <p className="text-[#4361ee] text-sm">One API call. Everything handled automatically.</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#4361ee] border border-[#4361ee]">
                  <span className="text-white text-sm font-medium">Your App</span>
                  <div className="ml-auto bg-white/20 rounded-full px-2 py-0.5">
                    <span className="text-white text-xs font-medium">1 API call</span>
                  </div>
                </div>
                <div className="flex justify-center"><div className="w-px h-3 bg-[#4361ee]" /></div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#4361ee]/30">
                  <span className="text-[#0a0f1e] text-sm font-bold">POPFAB Router</span>
                  <div className="ml-auto bg-[#10b981]/10 rounded-full px-2 py-0.5">
                    <span className="text-[#10b981] text-xs font-bold">Smart routing</span>
                  </div>
                </div>
                <div className="flex justify-around px-8">
                  {[0, 1, 2].map((i) => <div key={i} className="w-px h-3 bg-gray-300" />)}
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {providers.slice(0, 3).map((p) => (
                    <div key={p.name} className="bg-white border border-gray-200 rounded-xl p-3 flex items-center justify-center">
                      <div className="relative w-full h-8">
                        <Image src={p.logo} alt={p.name} fill className="object-contain" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-20 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#4361ee] text-xs font-semibold uppercase tracking-wider">Why POPFAB</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0f1e] mt-3">
              Built for African payment reality
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: 'RELIABILITY',
                accentColor: '#4361ee',
                title: "Your payments don't stop when a provider does.",
                desc: 'When Paystack degrades, POPFAB automatically fails over to Flutterwave or Monnify in under 800ms. Your customers never see the failure.',
                stats: [{ label: 'Failover time', value: '<800ms' }, { label: 'Uptime', value: '99.95%' }],
                icon: (
                  <svg className="w-5 h-5 text-[#4361ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                label: 'INTELLIGENCE',
                accentColor: '#4361ee',
                title: 'Route every transaction to the provider most likely to succeed.',
                desc: 'Our routing engine learns from millions of transactions to predict the optimal provider for each payment based on method, bank, amount, and time of day.',
                stats: [{ label: 'Success rate lift', value: '+8pp avg' }, { label: 'Routing signals', value: '40+ per txn' }],
                icon: (
                  <svg className="w-5 h-5 text-[#4361ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                label: 'CLARITY',
                accentColor: '#4361ee',
                title: 'One dashboard for every naira processed.',
                desc: 'Stop toggling between 6 provider dashboards. POPFAB aggregates all transaction data, settlement reports, and disputes into a single view.',
                stats: [{ label: 'Analytics', value: 'Real-time' }, { label: 'Reconciliation', value: 'Automated' }],
                icon: (
                  <svg className="w-5 h-5 text-[#4361ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
              },
            ].map((prop) => (
              <div key={prop.label} className="bg-white rounded-2xl p-7 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#4361ee]/10 flex items-center justify-center mb-5">
                  {prop.icon}
                </div>
                <span className="text-[#4361ee] text-xs font-bold uppercase tracking-wider">{prop.label}</span>
                <h3 className="text-lg font-bold text-[#0a0f1e] mt-2 mb-3 leading-snug">{prop.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{prop.desc}</p>
                <div className="space-y-2">
                  {prop.stats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between py-2 border-t border-gray-100">
                      <span className="text-gray-500 text-sm">{stat.label}</span>
                      <span className="font-bold text-sm text-[#0a0f1e]">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVIDER WALL */}
      <section className="py-20 bg-white" id="providers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#4361ee] text-xs font-semibold uppercase tracking-wider">Providers</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0f1e] mt-3">
              Works with every provider your customers trust.
            </h2>
            <p className="text-gray-400 text-base mt-3 max-w-xl mx-auto">
              All 6 major Nigerian payment providers connected, tested, and production-ready.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {providers.map((p) => (
              <div
                key={p.name}
                className="bg-white border border-gray-200 hover:border-[#4361ee]/40 rounded-2xl p-5 hover:shadow-md transition-all duration-200 flex flex-col items-center gap-3"
              >
                <div className="relative w-full h-10">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-[#0a0f1e] text-sm">{p.name}</div>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] live-dot" />
                    <span className="text-[#10b981] text-xs font-medium">Live</span>
                  </div>
                </div>
                <div className="w-full pt-2 border-t border-gray-100">
                  {p.description.split(' · ').map((method) => (
                    <div key={method} className="text-gray-400 text-xs text-center leading-loose">{method}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/providers" className="text-[#4361ee] font-medium text-sm hover:underline inline-flex items-center gap-1">
              View provider details and coverage map →
            </Link>
          </div>
        </div>
      </section>

      {/* BIFURCATED JOURNEY */}
      <section className="py-20 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0f1e]">
              Built for two kinds of builders
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Business */}
            <div className="bg-[#0a0f1e] rounded-2xl p-8 sm:p-10">
              <div className="w-10 h-10 rounded-xl bg-[#4361ee]/20 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-[#4361ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-[#4361ee] text-xs font-semibold uppercase tracking-wider mb-2">For Business</div>
              <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                Increase success rates and reduce operational overhead.
              </h3>
              <p className="text-white/50 mb-7 text-sm leading-relaxed">
                Stop losing revenue to provider downtime. Stop spending weeks on reconciliation. POPFAB handles the infrastructure so you can focus on growth.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-7">
                {[
                  { label: 'Success rate lift', value: '+8pp' },
                  { label: 'Platform uptime', value: '99.95%' },
                  { label: 'Reconciliation time', value: '−90%' },
                  { label: 'Integration time', value: '1 day' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 rounded-xl p-4">
                    <div className="text-xl font-bold text-[#4361ee] mb-0.5">{stat.value}</div>
                    <div className="text-white/40 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Link href="#use-cases" className="text-white/70 hover:text-white text-sm font-medium transition-colors inline-flex items-center gap-1">
                See use cases →
              </Link>
            </div>

            {/* Developer */}
            <div className="bg-[#0d1117] border border-white/10 rounded-2xl p-8 sm:p-10">
              <div className="w-10 h-10 rounded-xl bg-[#4361ee]/20 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-[#4361ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="text-[#4361ee] text-xs font-semibold uppercase tracking-wider mb-2">For Developers</div>
              <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                Integrate once. Access every provider. Ship faster.
              </h3>
              <p className="text-white/50 mb-5 text-sm leading-relaxed">
                One SDK replaces 6. TypeScript-first, OpenAPI-documented, sandbox-ready in 60 seconds.
              </p>
              <div className="bg-black/40 border border-white/10 rounded-xl p-4 mb-5 overflow-x-auto">
                <div className="text-[#8b949e] text-xs mb-2 font-mono">{'// Initiate a payment'}</div>
                <div className="font-mono text-sm text-[#e6edf3]">
                  <span className="text-[#ff7b72]">const </span>
                  <span>payment </span>
                  <span className="text-[#ff7b72]">= await </span>
                  <span className="text-[#d2a8ff]">client.payments.initiate</span>
                  <span className="text-[#8b949e]">({'{}'})</span>
                </div>
                <div className="font-mono text-xs text-[#8b949e] mt-1">{'// POPFAB handles routing, failover, retries'}</div>
              </div>
              <div className="flex flex-wrap gap-2 mb-7">
                {['Node.js', 'Python', 'Go', 'PHP', 'OpenAPI'].map((lang) => (
                  <span key={lang} className="bg-white/5 border border-white/10 text-white/50 text-xs font-medium px-3 py-1.5 rounded-lg">{lang}</span>
                ))}
              </div>
              <a href="https://developer.popfab.io" className="text-white/70 hover:text-white text-sm font-medium transition-colors inline-flex items-center gap-1">
                Read the docs →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BY INDUSTRY */}
      <section id="use-cases" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#4361ee] text-xs font-semibold uppercase tracking-wider">Use Cases</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0f1e] mt-3">Built for your industry</h2>
            <p className="text-gray-400 text-base mt-3">POPFAB solves the specific payment problems your business faces.</p>
          </div>
          <IndustryTabs />
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="py-20 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#4361ee] text-xs font-semibold uppercase tracking-wider">Pricing</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0f1e] mt-3">
              Pay per checkout. Not per month.
            </h2>
            <p className="text-gray-400 text-base mt-3">Start free on the first ₦100M you process. Then buy credits as you grow.</p>
          </div>

          {/* How it works strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
            {[
              { step: '1', label: 'Free tier', desc: 'First ₦100M of processed volume is completely free.' },
              { step: '2', label: 'Buy credits', desc: 'Top up at ₦2.50 per credit, no subscription, no commitment.' },
              { step: '3', label: '₦5 per checkout', desc: '2 credits deducted per completed checkout (success or failed).' },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                <div className="w-8 h-8 rounded-full bg-[#4361ee]/10 text-[#4361ee] font-bold text-sm flex items-center justify-center mx-auto mb-3">{s.step}</div>
                <div className="font-semibold text-[#0a0f1e] text-sm mb-1">{s.label}</div>
                <div className="text-gray-400 text-xs leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>

          {/* Credit packs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { credits: '1,000', price: '2,500', checkouts: '500', popular: false },
              { credits: '10,000', price: '25,000', checkouts: '5,000', popular: true },
              { credits: '50,000', price: '125,000', checkouts: '25,000', popular: false },
            ].map((pack) => (
              <div
                key={pack.credits}
                className={`bg-white rounded-2xl p-7 border-2 relative ${pack.popular ? 'border-[#4361ee] shadow-lg shadow-[#4361ee]/10' : 'border-gray-100'}`}
              >
                {pack.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#4361ee] text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
                  </div>
                )}
                <div className="text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">Credit pack</div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-bold text-[#0a0f1e]">{pack.credits}</span>
                  <span className="text-gray-400 text-sm">credits</span>
                </div>
                <div className="flex items-baseline gap-0.5 mb-1">
                  <span className="text-gray-400 text-sm">₦</span>
                  <span className="text-xl font-bold text-[#0a0f1e]">{pack.price}</span>
                </div>
                <p className="text-[#4361ee] text-sm font-medium mb-6">{pack.checkouts} completed checkouts</p>
                <ul className="space-y-2.5 mb-7">
                  {['All providers included', 'Smart failover routing', 'Full analytics dashboard', 'Webhooks & reconciliation', 'Credits never expire'].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#10b981] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className={`w-full block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
                    pack.popular
                      ? 'bg-[#4361ee] text-white hover:bg-[#3451de]'
                      : 'border border-gray-200 text-[#0a0f1e] hover:border-[#4361ee] hover:text-[#4361ee]'
                  }`}
                >
                  Get started
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/pricing" className="text-[#4361ee] font-medium text-sm hover:underline inline-flex items-center gap-1">
              See full pricing details →
            </Link>
          </div>
        </div>
      </section>

      {/* DEVELOPER SECTION */}
      <section className="py-20 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[#4361ee] text-xs font-semibold uppercase tracking-wider">Developer-First</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
                Initiate a payment in 5 lines of code.
              </h2>
              <p className="text-white/50 mb-7 text-sm leading-relaxed">
                Our SDK handles authentication, retry logic, error formatting, and provider routing. You write business logic. We handle the rest.
              </p>
              <CodeBlock code={initiateCode} language="javascript" title="Node.js · @popfab/node" />
              <div className="mt-4 flex flex-wrap gap-2">
                {['npm', 'pip', 'go get', 'composer'].map((pkg) => (
                  <code key={pkg} className="bg-white/5 border border-white/10 text-white/50 text-xs px-3 py-1.5 rounded-lg font-mono">
                    {pkg} install @popfab/…
                  </code>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Sandbox ready in 60 seconds',
                  desc: 'Create an account, grab your test API key, and make your first payment in under a minute. No KYC required in sandbox.',
                  icon: (
                    <svg className="w-5 h-5 text-[#4361ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
                {
                  title: 'SDKs in Node, Python, Go, PHP',
                  desc: 'All SDKs are auto-generated from our OpenAPI spec, idiomatic for each language, and tested on every release.',
                  icon: (
                    <svg className="w-5 h-5 text-[#4361ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  ),
                },
                {
                  title: 'OpenAPI spec available',
                  desc: 'Import into Postman, Insomnia, or generate your own client. Always in sync with the latest API version.',
                  icon: (
                    <svg className="w-5 h-5 text-[#4361ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 bg-white/5 border border-white/10 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-[#4361ee]/20 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}

              <div className="pt-2">
                <a
                  href="https://developer.popfab.io"
                  className="w-full sm:w-auto bg-[#4361ee] hover:bg-[#3451de] text-white px-8 py-3.5 rounded-lg font-semibold text-sm transition-colors inline-flex items-center justify-center gap-2"
                >
                  Start Building free in sandbox
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#4361ee] text-xs font-semibold uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0f1e] mt-3">
              Trusted by payment-serious Nigerian businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-[#f8f9fb] border border-gray-100 rounded-2xl p-7 flex flex-col">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between pt-5 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#4361ee]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#4361ee] font-bold text-sm">{t.author[0]}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-[#0a0f1e] text-sm">{t.author}</div>
                      <div className="text-gray-400 text-xs">{t.role}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-[#4361ee]">{t.metric}</div>
                    <div className="text-gray-400 text-xs">{t.metricLabel}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-20 bg-[#0a0f1e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#10b981] live-dot flex-shrink-0" />
            <span className="text-white/50 text-sm">Production-ready</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Ready to own your payment infrastructure?
          </h2>
          <p className="text-white/50 text-lg mb-9 max-w-xl mx-auto">
            Join Nigerian businesses processing billions in naira with POPFAB. Sandbox is free. Production is fast.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://developer.popfab.io"
              className="w-full sm:w-auto bg-[#4361ee] hover:bg-[#3451de] text-white px-9 py-3.5 rounded-lg text-base font-semibold transition-colors"
            >
              Start Building Free →
            </a>
            <Link
              href="/pricing"
              className="w-full sm:w-auto border border-white/20 hover:border-white/40 text-white/80 hover:text-white px-9 py-3.5 rounded-lg text-base font-semibold transition-colors text-center"
            >
              See Pricing
            </Link>
          </div>
          <p className="text-white/20 text-sm mt-5">No credit card required · Sandbox access is instant · Production in &lt;24h</p>
        </div>
      </section>
    </>
  );
}
