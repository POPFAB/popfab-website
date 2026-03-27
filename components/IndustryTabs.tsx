'use client';

import { useState } from 'react';

const industries = [
  {
    id: 'fintech',
    label: 'Fintech & Startups',
    icon: '⚡',
    pain: 'You need to pass CBN PSSP audits, maintain 99.9%+ uptime, and launch new payment methods fast — without building the infrastructure yourself.',
    solution: 'POPFAB handles CBN PSSP compliance for you. Launch with a single CBN-licensed connection. Add Paystack, Flutterwave, and Monnify as fallbacks with zero additional licensing overhead.',
    outcome: 'Reduce time to payment compliance from 6 months to 2 weeks. Achieve 99.95% uptime without managing multiple PSP relationships.',
    metric: '6 months → 2 weeks',
    metricLabel: 'Time to compliance',
    highlight: 'CBN PSSP Licensed',
    highlightColor: 'bg-[#4361ee]/10 text-[#4361ee] border border-[#4361ee]/20',
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    icon: '🛒',
    pain: 'Cart abandonment spikes every time a payment provider has downtime. You\'re losing ₦500k+ per hour during peak shopping periods when Paystack or Flutterwave degrades.',
    solution: 'POPFAB automatically routes to the fastest, most reliable provider in real time. If Paystack degrades, traffic shifts to Flutterwave or Monnify in under 800ms — invisible to your customers.',
    outcome: '12% reduction in cart abandonment. 8 percentage point increase in payment success rates. Full payment continuity during provider outages.',
    metric: '+12%',
    metricLabel: 'Checkout conversion',
    highlight: '<800ms failover',
    highlightColor: 'bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/20',
  },
  {
    id: 'saas',
    label: 'SaaS & Subscriptions',
    icon: '🔄',
    pain: 'Failed recurring payments are costing you revenue. Card declines, bank transfer failures, and USSD timeouts create involuntary churn that your team spends hours manually resolving.',
    solution: 'POPFAB\'s smart retry logic automatically retries failed subscription payments across providers. If a card fails on Paystack, we retry via Flutterwave with intelligent timing based on failure reason.',
    outcome: 'Recover 68% of initially failed recurring payments. Reduce involuntary churn by 4.2 percentage points. Eliminate manual payment recovery workflows.',
    metric: '68%',
    metricLabel: 'Failed payments recovered',
    highlight: 'Smart retry logic',
    highlightColor: 'bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20',
  },
  {
    id: 'enterprise',
    label: 'Enterprise',
    icon: '🏢',
    pain: 'You\'re processing hundreds of millions of naira monthly across 3+ PSPs, with finance teams spending 40+ hours monthly on reconciliation. Each provider has a different CSV format, different settlement cycles, different dispute processes.',
    solution: 'POPFAB unifies every transaction across all providers into a single ledger. One reconciliation file. One settlement timeline. One dispute management interface. Built for treasury teams who need auditability.',
    outcome: 'Reduce reconciliation time from 40 hours to under 4 hours monthly. Single source of truth for all payment data. Full audit trail for regulatory reporting.',
    metric: '90%',
    metricLabel: 'Reconciliation time saved',
    highlight: 'Unified ledger',
    highlightColor: 'bg-orange-500/10 text-orange-500 border border-orange-500/20',
  },
];

export default function IndustryTabs() {
  const [active, setActive] = useState('fintech');
  const current = industries.find((i) => i.id === active)!;

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {industries.map((industry) => (
          <button
            key={industry.id}
            onClick={() => setActive(industry.id)}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              active === industry.id
                ? 'bg-[#4361ee] text-white shadow-lg shadow-[#4361ee]/30'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <span className="mr-2">{industry.icon}</span>
            {industry.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pain + Solution */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-red-50 border border-red-200/60 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">!</span>
              </div>
              <span className="text-red-700 font-semibold text-sm">The Problem</span>
            </div>
            <p className="text-red-900 text-base leading-relaxed">{current.pain}</p>
          </div>

          <div className="bg-[#f0f4ff] border border-[#4361ee]/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-full bg-[#4361ee] flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-[#4361ee] font-semibold text-sm">POPFAB Solution</span>
            </div>
            <p className="text-[#0a0f1e] text-base leading-relaxed">{current.solution}</p>
          </div>
        </div>

        {/* Metrics sidebar */}
        <div className="space-y-4">
          <div className="bg-[#0a0f1e] rounded-2xl p-6 text-white">
            <div className="text-4xl font-bold text-[#4361ee] mb-1">{current.metric}</div>
            <div className="text-white/60 text-sm font-medium mb-4">{current.metricLabel}</div>
            <p className="text-white/70 text-sm leading-relaxed">{current.outcome}</p>
          </div>
          <div className={`rounded-xl px-4 py-3 ${current.highlightColor}`}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-current live-dot" />
              <span className="text-sm font-semibold">{current.highlight}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
