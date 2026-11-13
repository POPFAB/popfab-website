import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | POPFAB payment orchestration',
  description: 'Review POPFAB’s credit packs, usage pricing and included payment operations tools.',
  openGraph: {
    title: 'POPFAB pricing',
    description: 'See how POPFAB credit pricing works and compare available credit packs.',
  },
};

const packs = [
  { credits: '1,000', price: '2,500', checkouts: '500' },
  { credits: '10,000', price: '25,000', checkouts: '5,000', popular: true },
  { credits: '50,000', price: '125,000', checkouts: '25,000' },
];

const included = ['Provider connections enabled for your account', 'Routing configuration', 'Payment event webhooks', 'Unified payment activity', 'Sandbox access'];

export default function PricingPage() {
  return (
    <div className="bg-white text-[#10122a]">
      <section className="story-reveal border-b border-[#ececf2] bg-[#f7f7fb] pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[.16em] text-[#5b5ce2]">Pricing</p>
          <div className="mt-5 grid gap-8 md:grid-cols-[1.1fr_.9fr] md:items-end">
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-.045em] sm:text-6xl">Straightforward pricing that scales with your usage.</h1>
            <p className="max-w-lg text-base leading-7 text-[#626477]">Start in sandbox, then use prepaid credits for eligible payment processing. No monthly subscription is shown in this pricing model.</p>
          </div>
        </div>
      </section>

      <section className="story-reveal py-16 sm:py-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.84), rgba(255,255,255,.88)), url('/images/pricing-merchant.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.16em] text-[#5b5ce2]">How billing works</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-.035em]">Know what a credit covers.</h2>
              <p className="mt-4 text-sm leading-6 text-[#6b6d7d]">The displayed rate is ₦2.50 per credit. A completed checkout uses 2 credits (₦5.00). Eligible accounts also receive the first ₦100 million in processed volume at no charge, according to the current POPFAB pricing policy.</p>
              <p className="mt-4 text-xs leading-5 text-[#8b8d9b]">Provider fees and availability are governed by your provider agreement and account configuration. Confirm your account’s current billing terms before going live.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { step: '01', title: 'Explore', body: 'Use sandbox to integrate and test without consuming live credits.' },
                { step: '02', title: 'Top up', body: 'Choose a credit pack and add balance when you are ready.' },
                { step: '03', title: 'Process', body: 'Credits are deducted as eligible checkouts are completed.' },
              ].map((item) => <article key={item.step} className="border-t border-[#d9d9e4] pt-4">
                <span className="text-xs font-semibold tracking-wider text-[#9697a8]">{item.step}</span>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6b6d7d]">{item.body}</p>
              </article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="story-reveal border-y border-[#ececf2] bg-[#fafafd] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.16em] text-[#5b5ce2]">Credit packs</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-.035em]">Pick a starting balance.</h2>
            </div>
            <p className="text-sm text-[#77798a]">All packs use the same ₦2.50 per-credit rate.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {packs.map((pack) => <article key={pack.credits} className={`relative flex flex-col rounded-2xl border bg-white p-6 sm:p-7 ${pack.popular ? 'border-[#5b5ce2] shadow-[0_16px_40px_rgba(91,92,226,.10)]' : 'border-[#e6e6ee]'}`}>
              {pack.popular && <span className="mb-4 self-start rounded-full bg-[#efefff] px-3 py-1 text-xs font-semibold text-[#5051c7]">Popular starting point</span>}
              <p className="text-sm font-medium text-[#77798a]">{pack.credits} credits</p>
              <p className="mt-2 text-3xl font-semibold tracking-[-.04em]">₦{pack.price}</p>
              <div className="my-6 border-t border-[#ececf2] pt-4 text-sm text-[#626477]">
                <div className="flex justify-between gap-4"><span>Estimated completed checkouts</span><strong className="text-[#25263c]">{pack.checkouts}</strong></div>
                <div className="mt-3 flex justify-between gap-4"><span>Cost per completed checkout</span><strong className="text-[#25263c]">₦5.00</strong></div>
              </div>
              <a href="https://developer.popfab.io" className={`mt-auto rounded-xl px-4 py-3 text-center text-sm font-semibold transition ${pack.popular ? 'bg-[#5b5ce2] text-white hover:bg-[#4546c8]' : 'border border-[#dfe0e9] text-[#25263c] hover:border-[#5b5ce2]'}`}>Get started</a>
            </article>)}
          </div>
          <p className="mt-5 text-xs leading-5 text-[#8b8d9b]">Checkout counts are estimates based on the current 2-credit rate and do not include provider charges or other account-specific fees.</p>
        </div>
      </section>

      <section className="story-reveal py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-[.8fr_1.2fr] lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#5b5ce2]">Included</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.035em]">The tools around the payment.</h2>
            <p className="mt-4 text-sm leading-6 text-[#6b6d7d]">Platform features are available according to your account permissions and enabled provider connections.</p>
          </div>
          <ul className="divide-y divide-[#ececf2] border-y border-[#ececf2]">
            {included.map((item) => <li key={item} className="flex items-center gap-3 py-4 text-sm text-[#45465a]"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#efefff] text-[#5b5ce2]">✓</span>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="story-reveal bg-[#10122a] py-16 text-white sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-10">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#a8a8ff]">Ready when you are</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">Start in sandbox. Move at your pace.</h2><p className="mt-4 text-sm leading-6 text-white/60">Read the developer documentation or talk with our team about your payment setup.</p></div>
          <div className="flex flex-wrap gap-3"><a href="https://developer.popfab.io" className="rounded-xl bg-[#6a6bea] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7979f5]">Open developer portal</a><Link href="/about" className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/5">Contact POPFAB</Link></div>
        </div>
      </section>
    </div>
  );
}
