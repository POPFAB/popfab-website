'use client';

import { useState } from 'react';
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
    description: 'Create a test API key from the dashboard and keep it in your local environment while you integrate.',
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
    description: 'Submit a payment request and use the payment URL returned in the API response.',
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
    title: 'Sandbox access',
    description: 'Create a test key and exercise the payment flow before switching to a live configuration.',
    color: 'bg-[#10b981]/10',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#4361ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'A consistent API',
    description: 'Use a shared request and response shape when working with the providers enabled for your account.',
    color: 'bg-[#4361ee]/10',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#4361ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: 'Error details',
    description: 'Use the HTTP status, response body and API reference to diagnose validation and integration issues.',
    color: 'bg-[#4361ee]/10',
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
    title: 'Webhook event reference',
    description: 'Review event names and example payloads before building your webhook handler.',
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
      <section className="story-reveal border-b border-[#ececf2] bg-[#f7f7fb] pt-32 pb-16 sm:pt-40 sm:pb-20" style={{ backgroundImage: "linear-gradient(rgba(247,247,251,.84), rgba(247,247,251,.88)), url('/images/developer-at-work.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#dedff2] bg-white px-4 py-2 mb-6">
                <span className="text-[#5b5ce2] text-xs font-semibold uppercase tracking-wider">Developer resources</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-[-.04em] text-[#10122a] mb-5 leading-[1.08]">
                One API for the providers you choose.
              </h1>
              <p className="text-[#626477] text-lg mb-8 leading-relaxed">
                Build against one payment API, explore the sandbox, and keep provider-specific work out of your application flow.
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
                        : 'bg-white text-[#626477] border border-[#e6e6ee] hover:text-[#10122a] hover:bg-[#f1f1f8]'
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
                  className="border border-[#dfe0e9] text-[#34354b] px-6 py-3 rounded-xl font-semibold hover:border-[#5b5ce2] transition-colors"
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
      <section id="docs" className="story-reveal py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#4361ee] text-sm font-semibold uppercase tracking-wider">Quick Start</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0f1e] mt-3">
              Make your first sandbox payment in 3 steps.
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
      <section className="story-reveal py-20 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#4361ee] text-sm font-semibold uppercase tracking-wider">SDKs</span>
            <h2 className="text-3xl font-bold text-[#0a0f1e] mt-3">Use your preferred language</h2>
            <p className="text-gray-500 mt-3">Check the developer portal for current SDK packages and setup instructions.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { lang: 'Node.js', install: 'npm install @popfab/node', pkg: 'npm', color: '#339933', abbr: 'JS' },
              { lang: 'Python', install: 'pip install popfab', pkg: 'pip', color: '#3572A5', abbr: 'Py' },
              { lang: 'Go', install: 'go get popfab.dev/sdk', pkg: 'go', color: '#00ADD8', abbr: 'Go' },
              { lang: 'PHP', install: 'composer require popfab/php', pkg: 'composer', color: '#777BB3', abbr: 'PHP' },
            ].map((sdk) => (
              <div key={sdk.lang} className="bg-white border border-gray-200 rounded-2xl p-7 hover:border-[#4361ee]/40 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: sdk.color }}>
                    {sdk.abbr}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a0f1e] text-sm">{sdk.lang}</h3>
                    <p className="text-gray-400 text-xs">SDK</p>
                  </div>
                </div>
                <div className="bg-gray-950 rounded-xl p-3 mb-4">
                  <code className="text-green-400 text-xs font-mono">$ {sdk.install}</code>
                </div>
                <div className="text-xs text-gray-400">Install with {sdk.pkg}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer experience callouts */}
      <section className="story-reveal py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#4361ee] text-sm font-semibold uppercase tracking-wider">DX</span>
            <h2 className="text-3xl font-bold text-[#0a0f1e] mt-3">Tools for building and debugging</h2>
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
      <section className="story-reveal py-20 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[#4361ee] text-sm font-semibold uppercase tracking-wider">Webhooks</span>
              <h2 className="text-3xl font-bold text-white mt-3 mb-4">
                Build webhook handlers with confidence.
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Build a handler around POPFAB payment events, then test the behavior in your sandbox environment.
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
      <section className="story-reveal py-20 bg-[#4361ee]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your sandbox is waiting.
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Start with the API guide and make a test request in your sandbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://developer.popfab.io" className="bg-white text-[#4361ee] px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors">
              Get a test API key
            </a>
            <a href="https://developer.popfab.io/docs" className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
              Browse API Reference
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
