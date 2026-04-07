'use client';

import { useState } from 'react';
import Link from 'next/link';
import CodeBlock from '@/components/CodeBlock';

type Lang = 'node' | 'python' | 'go' | 'php';

const codeExamples: Record<Lang, string> = {
  node: `const popfab = require('@popfab/node');
const client = new popfab.Client({ apiKey: 'sk_test_...' });

// Initiate a payment
const payment = await client.payments.initiate({
  amount: 5000000, // ₦50,000 in kobo
  currency: 'NGN',
  payment_method: 'bank_transfer',
  reference: 'ORD-20240001',
  customer: {
    email: 'customer@example.com',
    name: 'Amaka Obi',
    phone: '+2348012345678'
  },
  metadata: {
    order_id: 'ORD-20240001',
    product: 'Premium Plan'
  }
});

console.log(payment.data.payment_url); // Redirect user here`,

  python: `import popfab

client = popfab.Client(api_key="sk_test_...")

# Initiate a payment
payment = client.payments.initiate(
    amount=5000000,  # ₦50,000 in kobo
    currency="NGN",
    payment_method="bank_transfer",
    reference="ORD-20240001",
    customer={
        "email": "customer@example.com",
        "name": "Amaka Obi",
        "phone": "+2348012345678"
    },
    metadata={
        "order_id": "ORD-20240001",
        "product": "Premium Plan"
    }
)

print(payment.data.payment_url)  # Redirect user here`,

  go: `package main

import (
    "fmt"
    popfab "popfab.dev/sdk"
)

func main() {
    client := popfab.NewClient("sk_test_...")

    // Initiate a payment
    payment, err := client.Payments.Initiate(&popfab.PaymentRequest{
        Amount:        5000000, // ₦50,000 in kobo
        Currency:      "NGN",
        PaymentMethod: "bank_transfer",
        Reference:     "ORD-20240001",
        Customer: &popfab.Customer{
            Email: "customer@example.com",
            Name:  "Amaka Obi",
            Phone: "+2348012345678",
        },
    })
    if err != nil {
        panic(err)
    }

    fmt.Println(payment.Data.PaymentURL)
}`,

  php: `<?php
require_once 'vendor/autoload.php';

use Popfab\\Client;

$client = new Client('sk_test_...');

// Initiate a payment
$payment = $client->payments->initiate([
    'amount'         => 5000000, // ₦50,000 in kobo
    'currency'       => 'NGN',
    'payment_method' => 'bank_transfer',
    'reference'      => 'ORD-20240001',
    'customer'       => [
        'email' => 'customer@example.com',
        'name'  => 'Amaka Obi',
        'phone' => '+2348012345678',
    ],
    'metadata'       => [
        'order_id' => 'ORD-20240001',
        'product'  => 'Premium Plan',
    ],
]);

echo $payment->data->payment_url; // Redirect user here`,
};

const installCommands: Record<Lang, string> = {
  node: 'npm install @popfab/node',
  python: 'pip install popfab',
  go: 'go get popfab.dev/sdk',
  php: 'composer require popfab/php',
};

const langLabels: Record<Lang, string> = {
  node: 'Node.js',
  python: 'Python',
  go: 'Go',
  php: 'PHP',
};

const quickstart = [
  {
    step: '01',
    title: 'Install the SDK',
    description: 'Pick your language and install the POPFAB SDK. All SDKs are on public package registries.',
    code: {
      node: 'npm install @popfab/node',
      python: 'pip install popfab',
      go: 'go get popfab.dev/sdk',
      php: 'composer require popfab/php',
    },
    lang: 'bash',
  },
  {
    step: '02',
    title: 'Get your API key',
    description: 'Create a free account and copy your test API key from the dashboard. No KYC required in sandbox.',
    code: {
      node: `// In your dashboard: Settings → API Keys
// Copy your test key: sk_test_xxxxxxxxxxxx

const client = new popfab.Client({
  apiKey: process.env.POPFAB_API_KEY
});`,
      python: `# In your dashboard: Settings → API Keys
# Copy your test key: sk_test_xxxxxxxxxxxx

client = popfab.Client(
    api_key=os.environ["POPFAB_API_KEY"]
)`,
      go: `// In your dashboard: Settings → API Keys
// Copy your test key: sk_test_xxxxxxxxxxxx

client := popfab.NewClient(
    os.Getenv("POPFAB_API_KEY"),
)`,
      php: `// In your dashboard: Settings → API Keys
// Copy your test key: sk_test_xxxxxxxxxxxx

$client = new Client($_ENV['POPFAB_API_KEY']);`,
    },
    lang: 'javascript',
  },
  {
    step: '03',
    title: 'Initiate your first payment',
    description: 'Make your first API call. POPFAB selects the best provider, handles failover, and returns a payment URL.',
    code: {
      node: `const payment = await client.payments.initiate({
  amount: 10000, // ₦100 in kobo
  currency: 'NGN',
  payment_method: 'bank_transfer',
  reference: 'TEST-001',
  customer: { email: 'test@example.com' }
});

// Redirect your customer to complete payment
console.log(payment.data.payment_url);
// → https://checkout.popfab.io/pay/ch_xxxxx`,
      python: `payment = client.payments.initiate(
    amount=10000,  # ₦100 in kobo
    currency="NGN",
    payment_method="bank_transfer",
    reference="TEST-001",
    customer={"email": "test@example.com"}
)

# Redirect your customer to complete payment
print(payment.data.payment_url)
# → https://checkout.popfab.io/pay/ch_xxxxx`,
      go: `payment, err := client.Payments.Initiate(&popfab.PaymentRequest{
    Amount:        10000,
    Currency:      "NGN",
    PaymentMethod: "bank_transfer",
    Reference:     "TEST-001",
    Customer: &popfab.Customer{
        Email: "test@example.com",
    },
})

fmt.Println(payment.Data.PaymentURL)
// → https://checkout.popfab.io/pay/ch_xxxxx`,
      php: `$payment = $client->payments->initiate([
    'amount'         => 10000, // ₦100 in kobo
    'currency'       => 'NGN',
    'payment_method' => 'bank_transfer',
    'reference'      => 'TEST-001',
    'customer'       => ['email' => 'test@example.com'],
]);

echo $payment->data->payment_url;
// → https://checkout.popfab.io/pay/ch_xxxxx`,
    },
    lang: 'javascript',
  },
];

const devCallouts = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: '60-sec sandbox',
    description: 'Sign up, get your test API key, and make your first API call, all in under 60 seconds. No KYC, no approval required.',
    color: 'bg-[#10b981]/10',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#4361ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '<500ms response',
    description: 'Our API responds in under 500ms globally. Provider routing decisions are made in under 100ms using our routing engine.',
    color: 'bg-[#4361ee]/10',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#4361ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: 'Human-readable errors',
    description: 'Every error includes a code, a human message, and a link to the relevant docs section. No cryptic status codes.',
    color: 'bg-[#4361ee]/10',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#f5a623]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: 'Webhook inspector',
    description: 'Test webhook delivery in sandbox with our built-in inspector. See payloads, retry failed deliveries, replay events.',
    color: 'bg-[#f5a623]/10',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'OpenAPI spec',
    description: 'Download our OpenAPI 3.1 spec, import into Postman or Insomnia, or generate clients in any language.',
    color: 'bg-[#8b5cf6]/10',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    title: 'Zero cold-start',
    description: 'All POPFAB API endpoints are warm 100% of the time. No serverless cold-start delays. Consistent sub-500ms responses.',
    color: 'bg-[#10b981]/10',
  },
];

const webhookPayload = `{
  "event": "payment.success",
  "data": {
    "id": "pay_01HXXXXXXXXXXXXXXXX",
    "reference": "ORD-20240001",
    "amount": 5000000,
    "currency": "NGN",
    "status": "success",
    "provider": "paystack",
    "provider_reference": "T123456789",
    "customer": {
      "email": "customer@example.com",
      "name": "Amaka Obi"
    },
    "metadata": {
      "order_id": "ORD-20240001"
    },
    "created_at": "2024-01-15T14:32:00Z",
    "settled_at": "2024-01-16T00:00:00Z"
  },
  "timestamp": "2024-01-15T14:32:01Z",
  "version": "2024-01"
}`;

export default function DevelopersPage() {
  const [lang, setLang] = useState<Lang>('node');

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0f1e] pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
                <span className="text-white/60 text-sm font-medium">For developers, by developers</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
                One SDK. All six providers. Ship in a day.
              </h1>
              <p className="text-white/60 text-xl mb-8 leading-relaxed">
                Replace 6 PSP integrations with one. TypeScript-first, fully typed, OpenAPI-backed. Your sandbox is live in 60 seconds.
              </p>

              {/* Language selector */}
              <div className="flex flex-wrap gap-2 mb-8">
                {(Object.keys(langLabels) as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      lang === l
                        ? 'bg-[#4361ee] text-white shadow-lg'
                        : 'bg-white/10 text-white/60 hover:text-white hover:bg-white/20'
                    }`}
                  >
                    {langLabels[l]}
                  </button>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href="https://developer.popfab.io"
                  className="bg-[#4361ee] hover:bg-[#3451de] text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  Get API Key
                </a>
                <a
                  href="#docs"
                  className="border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/5 transition-colors"
                >
                  API Reference
                </a>
              </div>
            </div>

            <div>
              <CodeBlock
                code={codeExamples[lang]}
                language={lang === 'go' ? 'go' : lang === 'php' ? 'php' : 'javascript'}
                title={`${langLabels[lang]} · ${lang === 'node' ? '@popfab/node' : lang === 'python' ? 'popfab' : lang === 'go' ? 'popfab.dev/sdk' : 'popfab/php'}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick-start */}
      <section id="docs" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#4361ee] text-sm font-semibold uppercase tracking-wider">Quick Start</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0f1e] mt-3">
              From zero to live payment in 3 steps.
            </h2>
          </div>

          <div className="space-y-12">
            {quickstart.map((step, i) => (
              <div key={step.step} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#4361ee] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0a0f1e]">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed mb-6 ml-16">{step.description}</p>

                  {/* Language tabs for quickstart */}
                  <div className="flex flex-wrap gap-2 mb-4 ml-16">
                    {(Object.keys(langLabels) as Lang[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => setLang(l)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          lang === l
                            ? 'bg-[#4361ee] text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {langLabels[l]}
                      </button>
                    ))}
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <CodeBlock
                    code={step.code[lang]}
                    language={lang === 'go' ? 'go' : 'javascript'}
                    title={`Step ${step.step} · ${langLabels[lang]}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDK cards */}
      <section className="py-20 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#4361ee] text-sm font-semibold uppercase tracking-wider">SDKs</span>
            <h2 className="text-3xl font-bold text-[#0a0f1e] mt-3">Available in your language</h2>
            <p className="text-gray-500 mt-3">All SDKs auto-generated from OpenAPI spec. Always up-to-date.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { lang: 'Node.js', install: 'npm install @popfab/node', pkg: 'npm', color: '#339933', abbr: 'JS', version: 'v2.4.1', weekly: '14.2k' },
              { lang: 'Python', install: 'pip install popfab', pkg: 'pip', color: '#3572A5', abbr: 'Py', version: 'v2.4.1', weekly: '6.8k' },
              { lang: 'Go', install: 'go get popfab.dev/sdk', pkg: 'go', color: '#00ADD8', abbr: 'Go', version: 'v2.4.1', weekly: '2.1k' },
              { lang: 'PHP', install: 'composer require popfab/php', pkg: 'composer', color: '#777BB3', abbr: 'PHP', version: 'v2.4.1', weekly: '3.4k' },
            ].map((sdk) => (
              <div key={sdk.lang} className="bg-white border border-gray-200 rounded-2xl p-7 hover:border-[#4361ee]/40 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: sdk.color }}>
                    {sdk.abbr}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a0f1e] text-sm">{sdk.lang}</h3>
                    <p className="text-gray-400 text-xs">{sdk.version}</p>
                  </div>
                </div>
                <div className="bg-gray-950 rounded-xl p-3 mb-4">
                  <code className="text-green-400 text-xs font-mono">$ {sdk.install}</code>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{sdk.pkg}</span>
                  <span>{sdk.weekly} downloads/wk</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer experience callouts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#4361ee] text-sm font-semibold uppercase tracking-wider">DX</span>
            <h2 className="text-3xl font-bold text-[#0a0f1e] mt-3">A developer experience that respects your time</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {devCallouts.map((item) => (
              <div key={item.title} className="p-7 border border-gray-100 rounded-2xl hover:border-[#4361ee]/30 hover:shadow-lg transition-all">
                <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#0a0f1e] text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webhook tester */}
      <section className="py-20 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[#4361ee] text-sm font-semibold uppercase tracking-wider">Webhooks</span>
              <h2 className="text-3xl font-bold text-white mt-3 mb-4">
                Build webhook handlers with confidence.
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                POPFAB delivers webhooks for every payment event. Our sandbox webhook inspector lets you test handlers before going live: replay events, inspect payloads, and simulate failures.
              </p>

              <div className="space-y-4">
                {[
                  { event: 'payment.initiated', color: 'text-[#4361ee]', desc: 'Payment created, provider selected' },
                  { event: 'payment.success', color: 'text-[#10b981]', desc: 'Payment completed successfully' },
                  { event: 'payment.failed', color: 'text-red-400', desc: 'Payment failed, includes failure reason' },
                  { event: 'payment.refunded', color: 'text-[#f5a623]', desc: 'Full or partial refund processed' },
                  { event: 'payment.disputed', color: 'text-orange-400', desc: 'Dispute raised by customer' },
                ].map((evt) => (
                  <div key={evt.event} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                    <code className={`text-sm font-mono ${evt.color}`}>{evt.event}</code>
                    <span className="text-white/40 text-sm ml-auto">{evt.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white/50 text-sm">Example webhook payload</span>
                <span className="bg-[#10b981]/20 text-[#10b981] text-xs font-bold px-3 py-1 rounded-full">payment.success</span>
              </div>
              <CodeBlock code={webhookPayload} language="javascript" title="Webhook payload · payment.success" />

              <div className="mt-6 p-5 bg-white/5 border border-white/10 rounded-2xl">
                <h4 className="text-white font-semibold mb-3">Webhook security</h4>
                <p className="text-white/50 text-sm mb-4">All webhooks are signed with HMAC-SHA256. Verify the signature before processing:</p>
                <div className="bg-black/40 border border-white/10 rounded-lg p-3 font-mono text-xs text-[#e6edf3] overflow-x-auto">
                  <span className="text-[#ff7b72]">const </span>
                  <span>sig </span>
                  <span className="text-[#ff7b72]">= </span>
                  <span className="text-[#d2a8ff]">popfab.webhooks.verify</span>
                  <span className="text-[#8b949e]">(payload, secret)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#4361ee]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your sandbox is waiting.
          </h2>
          <p className="text-white/80 text-xl mb-8">
            60 seconds from now, you could have your first test payment running.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://developer.popfab.io" className="bg-white text-[#4361ee] px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors">
              Get API Key free
            </a>
            <a href="#docs" className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
              Browse API Reference
            </a>
          </div>
          <p className="text-white/50 text-sm mt-6">OpenAPI spec · Postman collection · GitHub examples</p>
        </div>
      </section>
    </>
  );
}
