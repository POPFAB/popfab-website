'use client';

import { useState } from 'react';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    monthlyPrice: '25,000',
    annualPrice: '20,000',
    fee: '0.20%',
    description: 'For early-stage startups testing payment orchestration.',
    isPopular: false,
    isEnterprise: false,
    ctaLabel: 'Start free trial',
    features: {
      pspConnections: '3',
      routing: 'Basic round-robin',
      failoverAttempts: '3',
      analytics: 'Standard (7-day lag)',
      reconciliation: 'Manual CSV export',
      webhooks: 'Standard queue',
      supportSLA: '48h email',
      apiRateLimit: '500 req/min',
    },
  },
  {
    name: 'Growth',
    monthlyPrice: '75,000',
    annualPrice: '60,000',
    fee: '0.15%',
    description: 'For scaling businesses that need intelligent routing.',
    isPopular: true,
    isEnterprise: false,
    ctaLabel: 'Start free trial',
    features: {
      pspConnections: '6',
      routing: 'AI-powered smart routing',
      failoverAttempts: '5',
      analytics: 'Real-time + 90-day history',
      reconciliation: 'Automated daily',
      webhooks: 'Priority queue',
      supportSLA: '24h priority',
      apiRateLimit: '2,000 req/min',
    },
  },
  {
    name: 'Scale',
    monthlyPrice: '200,000',
    annualPrice: '160,000',
    fee: '0.10%',
    description: 'For enterprises with high-volume, mission-critical payments.',
    isPopular: false,
    isEnterprise: false,
    ctaLabel: 'Start free trial',
    features: {
      pspConnections: '6 + custom',
      routing: 'Custom routing rules',
      failoverAttempts: 'Unlimited',
      analytics: 'Real-time + unlimited history',
      reconciliation: 'Real-time auto-reconciliation',
      webhooks: 'Dedicated queue',
      supportSLA: '4h dedicated',
      apiRateLimit: '10,000 req/min',
    },
  },
  {
    name: 'Enterprise',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    fee: 'Negotiated',
    description: 'For large institutions with custom requirements.',
    isPopular: false,
    isEnterprise: true,
    ctaLabel: 'Talk to sales',
    features: {
      pspConnections: 'All + private integrations',
      routing: 'Fully custom logic',
      failoverAttempts: 'Unlimited',
      analytics: 'Custom data exports + BI connectors',
      reconciliation: 'Multi-entity, multi-currency',
      webhooks: 'SLA-backed dedicated infra',
      supportSLA: '1h + TAM assigned',
      apiRateLimit: 'Unlimited',
    },
  },
];

const addons = [
  {
    name: 'Fraud Detection',
    price: '₦30,000/mo',
    description: 'ML-powered transaction scoring. Flag suspicious payments before they hit your providers. Configurable risk thresholds.',
  },
  {
    name: 'Advanced Reconciliation',
    price: '₦50,000/mo',
    description: 'Multi-entity reconciliation with GL account mapping. Direct integration with Sage, QuickBooks, and SAP.',
  },
  {
    name: 'Card Account Updater',
    price: '₦20,000/mo',
    description: 'Automatically update expired or replaced card details for subscriptions. Reduce involuntary churn from card failures.',
  },
  {
    name: 'Multi-Currency FX',
    price: '0.5% FX margin',
    description: 'Accept payments in USD, GBP, EUR. Auto-convert to NGN. Competitive interbank rates.',
  },
  {
    name: 'Dedicated Webhook Queue',
    price: '₦15,000/mo',
    description: 'Isolated webhook infrastructure with guaranteed delivery SLA, replay capability, and event filtering.',
  },
];

const faqs = [
  {
    q: 'Is there a free trial?',
    a: "Yes — all plans include a sandbox environment with no credit card required. You can test all features, generate test transactions, and integrate our SDK before going live. When you're ready, upgrading to production takes under 24 hours.",
  },
  {
    q: 'How does the transaction fee work?',
    a: 'The transaction fee is a percentage of each successful payment processed through POPFAB. For example, on the Growth plan at 0.15%, a ₦100,000 payment costs ₦150. Failed payments are not charged. The fee is billed monthly alongside your platform fee.',
  },
  {
    q: 'Can I change plans later?',
    a: "Absolutely. You can upgrade at any time and the change takes effect immediately — you'll be prorated for the remainder of the billing period. Downgrades take effect at the end of your current billing cycle.",
  },
  {
    q: 'Do you support annual billing?',
    a: 'Yes — annual billing gives you 20% off the monthly rate. You pay upfront for 12 months and receive 2 months free effectively. Annual plans are available on all paid plans.',
  },
  {
    q: 'What currencies does POPFAB support?',
    a: 'POPFAB natively processes NGN (Nigerian Naira). Multi-currency support (USD, GBP, EUR, GHS, KES) is available as an add-on module for businesses accepting international payments or operating across African markets.',
  },
  {
    q: 'Is POPFAB regulated?',
    a: "POPFAB operates as a CBN-licensed Payment Solution Service Provider (PSSP). We are PCI-DSS compliant and operate under Nigeria's NDPR framework for data protection. Enterprise customers can request our compliance documentation package.",
  },
];

type FeatureKey = keyof typeof plans[0]['features'];

const featureLabels: { key: FeatureKey; label: string }[] = [
  { key: 'pspConnections', label: 'PSP Connections' },
  { key: 'routing', label: 'Routing Logic' },
  { key: 'failoverAttempts', label: 'Failover Attempts' },
  { key: 'analytics', label: 'Analytics' },
  { key: 'reconciliation', label: 'Reconciliation' },
  { key: 'webhooks', label: 'Webhooks' },
  { key: 'supportSLA', label: 'Support SLA' },
  { key: 'apiRateLimit', label: 'API Rate Limit' },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0f1e] pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#4361ee]/15 border border-[#4361ee]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#a5b4fc] text-sm font-medium">Transparent NGN pricing · No hidden USD fees</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Simple, honest pricing.
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto mb-10">
            Pay in naira. Scale as you grow. No lock-in. No surprise invoices.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${!annual ? 'bg-white text-[#0a0f1e]' : 'text-white/60 hover:text-white'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${annual ? 'bg-white text-[#0a0f1e]' : 'text-white/60 hover:text-white'}`}
            >
              Annual
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${annual ? 'bg-[#10b981] text-white' : 'bg-[#10b981]/20 text-[#10b981]'}`}>
                20% off
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Plan cards */}
      <section className="bg-[#f8fafc] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-7 flex flex-col ${
                  plan.isPopular
                    ? 'bg-[#4361ee] text-white shadow-2xl shadow-[#4361ee]/30'
                    : 'bg-white border border-gray-200 hover:border-[#4361ee]/40 hover:shadow-xl'
                } transition-all duration-300`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#06b6d4] to-[#4361ee] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <h3 className={`text-lg font-bold mb-1 ${plan.isPopular ? 'text-white' : 'text-[#0a0f1e]'}`}>{plan.name}</h3>
                  <p className={`text-xs ${plan.isPopular ? 'text-white/70' : 'text-gray-500'}`}>{plan.description}</p>
                </div>

                {plan.isEnterprise ? (
                  <div className="mb-5">
                    <span className={`text-3xl font-bold ${plan.isPopular ? 'text-white' : 'text-[#0a0f1e]'}`}>Custom</span>
                    <p className={`text-xs mt-1 ${plan.isPopular ? 'text-white/60' : 'text-gray-500'}`}>Volume-based pricing</p>
                  </div>
                ) : (
                  <div className="mb-5">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-sm ${plan.isPopular ? 'text-white/60' : 'text-gray-400'}`}>₦</span>
                      <span className={`text-3xl font-bold ${plan.isPopular ? 'text-white' : 'text-[#0a0f1e]'}`}>
                        {annual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className={`text-xs ${plan.isPopular ? 'text-white/60' : 'text-gray-400'}`}>/mo</span>
                    </div>
                    {annual && (
                      <p className={`text-xs mt-0.5 line-through ${plan.isPopular ? 'text-white/40' : 'text-gray-300'}`}>
                        ₦{plan.monthlyPrice}/mo
                      </p>
                    )}
                    <p className={`text-sm font-semibold mt-1.5 ${plan.isPopular ? 'text-white/80' : 'text-[#4361ee]'}`}>
                      + {plan.fee} per transaction
                    </p>
                  </div>
                )}

                <ul className="space-y-2.5 mb-7 flex-1">
                  {Object.entries(plan.features).slice(0, 5).map(([key, val]) => (
                    <li key={key} className="flex items-start gap-2">
                      <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.isPopular ? 'text-[#a5f3fc]' : 'text-[#10b981]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-xs ${plan.isPopular ? 'text-white/80' : 'text-gray-600'}`}>{val}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.isEnterprise ? '/about' : '/developers'}
                  className={`w-full py-2.5 rounded-xl font-semibold text-sm text-center transition-all block ${
                    plan.isPopular
                      ? 'bg-white text-[#4361ee] hover:bg-white/90'
                      : plan.isEnterprise
                      ? 'bg-[#0a0f1e] text-white hover:bg-[#0a0f1e]/80'
                      : 'bg-[#4361ee] text-white hover:bg-[#3451de]'
                  }`}
                >
                  {plan.ctaLabel}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mt-8">
            All plans include: sandbox environment · webhook delivery · basic analytics · email support
          </p>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a0f1e]">Full feature comparison</h2>
            <p className="text-gray-500 mt-3">Every detail, side by side.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 pr-6 text-gray-500 font-medium text-sm w-48">Feature</th>
                  {plans.map((plan) => (
                    <th key={plan.name} className={`py-4 px-4 text-center text-sm font-bold ${plan.isPopular ? 'text-[#4361ee]' : 'text-[#0a0f1e]'}`}>
                      {plan.name}
                      {plan.isPopular && (
                        <span className="ml-2 bg-[#4361ee]/10 text-[#4361ee] text-xs px-2 py-0.5 rounded-full">Popular</span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureLabels.map((row, i) => (
                  <tr key={row.key} className={i % 2 === 0 ? 'bg-[#f8fafc]' : 'bg-white'}>
                    <td className="py-4 pr-6 text-sm text-gray-700 font-medium rounded-l-lg">{row.label}</td>
                    {plans.map((plan) => (
                      <td key={plan.name} className={`py-4 px-4 text-center text-sm ${plan.isPopular ? 'text-[#4361ee] font-semibold' : 'text-gray-600'}`}>
                        {plan.features[row.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#4361ee] text-sm font-semibold uppercase tracking-wider">Add-ons</span>
            <h2 className="text-3xl font-bold text-[#0a0f1e] mt-3">Extend your plan with modules</h2>
            <p className="text-gray-500 mt-3">Available on Growth and Scale plans. Add or remove anytime.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon) => (
              <div key={addon.name} className="bg-white border border-gray-200 rounded-2xl p-7 hover:border-[#4361ee]/40 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-[#0a0f1e] text-base">{addon.name}</h3>
                  <span className="text-[#4361ee] font-bold text-sm ml-4 flex-shrink-0">{addon.price}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* vs NjiaPay comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#4361ee] text-sm font-semibold uppercase tracking-wider">Why POPFAB</span>
            <h2 className="text-3xl font-bold text-[#0a0f1e] mt-3">POPFAB vs. NjiaPay</h2>
            <p className="text-gray-500 mt-3">Built for Nigeria, not adapted from South Africa.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 pr-6 text-gray-500 font-medium text-sm">Comparison</th>
                  <th className="py-4 px-6 text-center text-sm font-bold text-[#4361ee] bg-[#4361ee]/5 rounded-t-xl">
                    POPFAB
                  </th>
                  <th className="py-4 px-6 text-center text-sm font-bold text-gray-400">NjiaPay</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Pricing currency', popfab: 'NGN (naira)', njia: 'ZAR (rand)' },
                  { feature: 'Monthly platform fee', popfab: '₦25k – ₦200k/mo', njia: 'R1,500 – R15,000/mo' },
                  { feature: 'Transaction volume caps', popfab: 'No caps', njia: 'Hard volume caps on lower tiers' },
                  { feature: 'Self-serve signup', popfab: 'Yes — instant sandbox', njia: 'Book a demo required' },
                  { feature: 'Nigerian providers', popfab: '6 live (all major PSPs)', njia: '2 Nigerian providers' },
                  { feature: 'CBN PSSP license', popfab: 'Yes — direct license', njia: 'Operates via partner' },
                  { feature: 'Developer docs quality', popfab: 'OpenAPI + SDKs in 4 languages', njia: 'REST docs only' },
                  { feature: 'Failover speed', popfab: '<800ms automatic', njia: 'Manual failover rules' },
                  { feature: 'Analytics', popfab: 'Real-time unified dashboard', njia: 'Provider-by-provider reports' },
                  { feature: 'Reconciliation', popfab: 'Auto-generated, all providers', njia: 'Manual per-provider CSV' },
                ].map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-[#f8fafc]' : 'bg-white'}>
                    <td className="py-3.5 pr-6 text-sm text-gray-700 font-medium">{row.feature}</td>
                    <td className="py-3.5 px-6 text-center text-sm text-[#4361ee] font-semibold bg-[#4361ee]/3">
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 text-[#10b981] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {row.popfab}
                      </span>
                    </td>
                    <td className="py-3.5 px-6 text-center text-sm text-gray-500">{row.njia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#4361ee] text-sm font-semibold uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl font-bold text-[#0a0f1e] mt-3">Pricing questions answered</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#0a0f1e] text-base pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#0a0f1e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Start with a free sandbox today.
          </h2>
          <p className="text-white/60 text-lg mb-8">
            No credit card. No sales call. No waiting. Your sandbox is ready in 60 seconds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/developers" className="bg-[#4361ee] hover:bg-[#3451de] text-white px-8 py-4 rounded-xl font-semibold transition-colors">
              Start Building Free
            </Link>
            <Link href="/about" className="border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-colors">
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
