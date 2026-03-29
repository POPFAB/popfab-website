'use client';

import { useState } from 'react';
import Link from 'next/link';

const creditPacks = [
  {
    credits: '1,000',
    amountKobo: 250_000,
    price: '2,500',
    checkouts: '500',
    perCheckout: '₦5.00',
    note: 'Great for testing after free tier',
    isPopular: false,
  },
  {
    credits: '10,000',
    amountKobo: 2_500_000,
    price: '25,000',
    checkouts: '5,000',
    perCheckout: '₦5.00',
    note: 'Ideal for growing businesses',
    isPopular: true,
  },
  {
    credits: '50,000',
    amountKobo: 12_500_000,
    price: '125,000',
    checkouts: '25,000',
    perCheckout: '₦5.00',
    note: 'High-volume operations',
    isPopular: false,
  },
];

const featureRows = [
  { label: 'PSP connections', value: 'All 6 (Paystack, Flutterwave, Monnify, Squad, Interswitch, Payaza)' },
  { label: 'Automatic failover', value: 'Yes — <800ms' },
  { label: 'Smart routing', value: 'Yes — AI-powered' },
  { label: 'Webhook delivery', value: 'Yes — all event types' },
  { label: 'Unified analytics', value: 'Real-time dashboard' },
  { label: 'Reconciliation', value: 'Automated, all providers' },
  { label: 'API rate limit', value: 'Generous defaults · contact for higher' },
  { label: 'Support', value: 'Email + docs · priority for high volume' },
  { label: 'Sandbox', value: 'Free forever — no credits consumed' },
];

const faqs = [
  {
    q: 'What is a "completed checkout"?',
    a: 'A completed checkout is any payment that reaches a terminal state — either payment.success or payment.failed — after POPFAB has routed it to a provider. We charge for completed checkouts because we performed work: routing decisions, provider calls, failover logic, and reconciliation records — regardless of outcome.',
  },
  {
    q: 'What is the free tier?',
    a: 'Every merchant gets the first ₦100,000,000 (₦100M) of processed volume completely free. This is measured as the total sum of all payment amounts routed through POPFAB — including both successful and failed payments. Once you cross ₦100M in processed volume, credits are deducted per checkout.',
  },
  {
    q: 'Why charge for failed payments too?',
    a: "When a payment fails, POPFAB still performed routing, attempted failover to backup providers, handled error normalisation, and logged reconciliation data. That infrastructure work has a cost. Think of it like AWS — you pay for the compute even if your request returns an error.",
  },
  {
    q: 'What happens when my credits run out?',
    a: 'Your checkout routing continues — we will not drop payments because of a low credit balance. You will receive a low-balance alert when you have fewer than 200 credits remaining. Top up anytime through the dashboard.',
  },
  {
    q: 'Do sandbox payments consume credits?',
    a: 'No. Sandbox (test environment) payments never consume credits and are not counted toward your ₦100M free-tier volume. Credits are only consumed for live-environment checkouts.',
  },
  {
    q: 'Can I buy credits in custom amounts?',
    a: 'Yes. The packs above are suggestions. You can purchase any amount from ₦250 (1 credit) upwards. Credits never expire.',
  },
  {
    q: 'Is POPFAB regulated?',
    a: "POPFAB operates as a CBN-licensed Payment Solution Service Provider (PSSP). We are PCI-DSS compliant and operate under Nigeria's NDPR framework for data protection.",
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0f1e] pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
            <span className="text-white/60 text-sm font-medium">Transparent NGN pricing · No monthly fees · No lock-in</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Pay per checkout. Not per month.
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Your first ₦100M in processed volume is free. After that, pre-purchase credits and spend them as you grow.
          </p>
        </div>
      </section>

      {/* How it works — 3 steps */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Free tier',
                desc: 'Route your first ₦100M in payment volume at zero cost. No credit card required.',
                highlight: '₦100M free',
              },
              {
                step: '2',
                title: 'Buy credits',
                desc: 'Once your free tier is exhausted, pre-purchase credits. 1 credit = ₦2.50. Credits never expire.',
                highlight: '₦2.50 per credit',
              },
              {
                step: '3',
                title: 'Pay per checkout',
                desc: 'Each completed checkout deducts 2 credits (₦5.00). Charged on success and failure — because we did the work either way.',
                highlight: '₦5.00 per checkout',
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-start">
                <div className="w-8 h-8 rounded-full bg-[#4361ee] text-white text-sm font-bold flex items-center justify-center mb-4 flex-shrink-0">
                  {item.step}
                </div>
                <div className="inline-block bg-[#4361ee]/10 text-[#4361ee] text-xs font-bold px-2.5 py-1 rounded-full mb-3">
                  {item.highlight}
                </div>
                <h3 className="font-bold text-[#0a0f1e] text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credit packs */}
      <section className="py-16 bg-[#f8f9fb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#4361ee] text-xs font-semibold uppercase tracking-wider">Credit Packs</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a0f1e] mt-2">Choose how many credits to start with</h2>
            <p className="text-gray-400 text-sm mt-2">Buy any amount. Mix and match. Credits never expire.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
            {creditPacks.map((pack) => (
              <div
                key={pack.credits}
                className={`relative rounded-2xl p-7 flex flex-col border-2 ${
                  pack.isPopular
                    ? 'border-[#4361ee] bg-white shadow-lg shadow-[#4361ee]/10'
                    : 'border-gray-100 bg-white'
                }`}
              >
                {pack.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#4361ee] text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
                  </div>
                )}
                <div className="mb-5">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-3xl font-bold text-[#0a0f1e]">{pack.credits}</span>
                    <span className="text-gray-400 text-sm">credits</span>
                  </div>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-gray-400 text-sm">₦</span>
                    <span className="text-xl font-semibold text-[#0a0f1e]">{pack.price}</span>
                  </div>
                  <p className="text-gray-400 text-xs mt-1">{pack.note}</p>
                </div>

                <div className="space-y-2.5 mb-6 flex-1">
                  <div className="flex items-center justify-between py-2 border-t border-gray-100">
                    <span className="text-gray-500 text-sm">Checkouts covered</span>
                    <span className="font-semibold text-[#0a0f1e] text-sm">{pack.checkouts}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-t border-gray-100">
                    <span className="text-gray-500 text-sm">Cost per checkout</span>
                    <span className="font-semibold text-[#0a0f1e] text-sm">{pack.perCheckout}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-t border-gray-100">
                    <span className="text-gray-500 text-sm">Credits expire</span>
                    <span className="font-semibold text-[#10b981] text-sm">Never</span>
                  </div>
                </div>

                <a
                  href="https://developer.popfab.io"
                  className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition-colors block ${
                    pack.isPopular
                      ? 'bg-[#4361ee] text-white hover:bg-[#3451de]'
                      : 'border border-gray-200 text-[#0a0f1e] hover:border-[#4361ee] hover:text-[#4361ee]'
                  }`}
                >
                  Buy credits
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm">
            Need a custom volume? <a href="/about" className="text-[#4361ee] hover:underline">Talk to us</a> about high-volume pricing.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#4361ee] text-xs font-semibold uppercase tracking-wider">What's included</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a0f1e] mt-2">Everything, for every merchant</h2>
            <p className="text-gray-400 text-sm mt-2">There are no feature tiers. Every merchant gets the full platform.</p>
          </div>

          <div className="border border-gray-200 rounded-2xl overflow-hidden">
            {featureRows.map((row, i) => (
              <div
                key={row.label}
                className={`flex items-start gap-4 px-6 py-4 ${i < featureRows.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <svg className="w-4 h-4 text-[#10b981] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-1">
                  <span className="text-gray-700 text-sm font-medium">{row.label}</span>
                  <span className="text-gray-500 text-sm sm:text-right">{row.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* vs NjiaPay */}
      <section className="py-16 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#4361ee] text-xs font-semibold uppercase tracking-wider">Why POPFAB</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a0f1e] mt-2">POPFAB vs. NjiaPay</h2>
            <p className="text-gray-400 text-sm mt-2">Built for Nigeria, not adapted from South Africa.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-6 text-gray-400 font-medium text-xs uppercase tracking-wider">Comparison</th>
                  <th className="py-3 px-5 text-center text-xs font-bold text-[#4361ee] uppercase tracking-wider">POPFAB</th>
                  <th className="py-3 px-5 text-center text-xs font-bold text-gray-400 uppercase tracking-wider">NjiaPay</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { feature: 'Pricing model', popfab: 'Credit-based, pay per checkout', njia: 'Monthly subscription + % fee' },
                  { feature: 'Free tier', popfab: 'First ₦100M processed, free', njia: 'No free tier' },
                  { feature: 'Monthly commitment', popfab: 'None — buy credits as needed', njia: 'R1,500 – R15,000/mo minimum' },
                  { feature: 'Nigerian providers', popfab: '6 live (all major PSPs)', njia: '2 Nigerian providers' },
                  { feature: 'Self-serve signup', popfab: 'Yes — sandbox in 60 seconds', njia: 'Book a demo required' },
                  { feature: 'CBN PSSP license', popfab: 'Yes — direct license', njia: 'Operates via partner' },
                  { feature: 'Failover speed', popfab: '<800ms automatic', njia: 'Manual failover rules' },
                  { feature: 'Reconciliation', popfab: 'Auto-generated, all providers', njia: 'Manual per-provider CSV' },
                ].map((row) => (
                  <tr key={row.feature} className="hover:bg-white transition-colors">
                    <td className="py-3.5 pr-6 text-sm text-gray-600 font-medium">{row.feature}</td>
                    <td className="py-3.5 px-5 text-center">
                      <span className="inline-flex items-center justify-center gap-1.5 text-sm text-[#4361ee] font-medium">
                        <svg className="w-3.5 h-3.5 text-[#10b981] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {row.popfab}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 text-center text-sm text-gray-400">{row.njia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#4361ee] text-xs font-semibold uppercase tracking-wider">FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a0f1e] mt-2">Pricing questions answered</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#f8f9fb] border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-semibold text-[#0a0f1e] text-sm pr-4">{faq.q}</span>
                  <svg
                    className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0a0f1e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Start free. Scale as you grow.
          </h2>
          <p className="text-white/50 text-base mb-8 max-w-xl mx-auto">
            Your first ₦100M of processed volume costs nothing. No credit card, no sales call, no waiting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://developer.popfab.io"
              className="w-full sm:w-auto bg-[#4361ee] hover:bg-[#3451de] text-white px-8 py-3.5 rounded-lg font-semibold text-sm transition-colors"
            >
              Start Building Free
            </a>
            <Link
              href="/about"
              className="w-full sm:w-auto border border-white/20 hover:border-white/40 text-white/80 hover:text-white px-8 py-3.5 rounded-lg font-semibold text-sm transition-colors text-center"
            >
              Talk to Sales
            </Link>
          </div>
          <p className="text-white/20 text-xs mt-5">Sandbox is free forever · Credits never expire · No monthly minimums</p>
        </div>
      </section>
    </>
  );
}
