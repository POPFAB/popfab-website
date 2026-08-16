'use client';

import { useState } from 'react';

const industries = [
  {
    id: 'fintech',
    label: 'Fintech & Startups',
    icon: 'bolt',
    pain: 'You need to launch payment methods quickly without turning provider management into a separate infrastructure project.',
    solution: 'POPFAB gives your team a single connection and a clear way to manage the providers enabled for your business.',
    outcome: 'Create a simpler foundation for shipping payment experiences and evolving your provider strategy.',
    metric: 'One API',
    metricLabel: 'Integration surface',
    highlight: 'Instant onboarding',
    highlightColor: 'bg-[#4361ee]/10 text-[#4361ee] border border-[#4361ee]/20',
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    icon: 'bag',
    pain: 'Cart abandonment can rise when a payment path is unreliable or your customers do not see their preferred payment method.',
    solution: 'POPFAB helps you configure the provider and payment-method paths that best fit your checkout experience.',
    outcome: 'Give customers a more dependable checkout experience while keeping payment operations in one place.',
    metric: 'More choice',
    metricLabel: 'At checkout',
    highlight: 'Provider flexibility',
    highlightColor: 'bg-[#4361ee]/10 text-[#4361ee] border border-[#4361ee]/20',
  },
  {
    id: 'saas',
    label: 'SaaS & Subscriptions',
    icon: 'repeat',
    pain: 'Failed recurring payments are costing you revenue. Card declines, bank transfer failures, and USSD timeouts create involuntary churn that your team spends hours manually resolving.',
    solution: 'POPFAB gives your team one place to observe recurring-payment outcomes across the providers you use and design the workflows that follow.',
    outcome: 'Give your team a consistent way to track recurring-payment outcomes and refine payment recovery workflows.',
    metric: 'Clearer flows',
    metricLabel: 'For payment recovery',
    highlight: 'Unified visibility',
    highlightColor: 'bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20',
  },
  {
    id: 'enterprise',
    label: 'Enterprise',
    icon: 'building',
    pain: 'Multiple PSPs bring different data formats, settlement cycles, and dispute processes—creating avoidable complexity for finance teams.',
    solution: 'POPFAB unifies every transaction across all providers into a single ledger. One reconciliation file. One settlement timeline. One dispute management interface. Built for treasury teams who need auditability.',
    outcome: 'Create a single source of truth for payment data, reconciliation, and reporting workflows.',
    metric: 'One workspace',
    metricLabel: 'For payment operations',
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
                ? 'bg-[#4361ee] text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 shadow-none'
            }`}
          >
            <span className="mr-2 inline-flex align-[-0.15em]"><IndustryIcon name={industry.icon} /></span>
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

function IndustryIcon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    bolt: 'M13 2 3 14h8l-1 8 10-12h-8l1-8Z',
    bag: 'M6 8h12l1 12H5L6 8Zm3 0a3 3 0 0 1 6 0',
    repeat: 'm17 2 4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4m14-1v2a3 3 0 0 1-3 3H3',
    building: 'M4 21V5l8-3 8 3v16M8 9h.01M8 13h.01M16 9h.01M16 13h.01M10 21v-4h4v4',
  };
  return <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d={paths[name]} /></svg>;
}
