import Image from 'next/image';
import Link from 'next/link';
import CodeBlock from '@/components/CodeBlock';
import PaymentStory from '@/components/PaymentStory';

const providers = [
  { name: 'ALATPay', logo: '/images/alatpay.png' },
  { name: 'Paystack', logo: '/images/paystack-logo.png' },
  { name: 'Flutterwave', logo: '/images/flutterwave-logo.png' },
  { name: 'Monnify', logo: '/images/monnify-logo.png' },
  { name: 'Squad', logo: '/images/squad-logo.jpeg' },
  { name: 'Interswitch', logo: '/images/interswitch-logo.png' },
  { name: 'Payaza', logo: '/images/payaza-logo.jpeg' },
];

const code = `const payment = await client.payments.initiate({
  amount: 5000000, // ₦50,000 in kobo
  currency: 'NGN',
  payment_method: 'bank_transfer',
  reference: 'ORDER-001',
  customer: { email: 'customer@example.com' }
});

// Redirect your customer to the returned payment URL`;

export default function HomePage() {
  return (
    <div className="bg-white text-[#10122a]">
      <section className="story-hero relative isolate overflow-hidden bg-[#10122a] pt-28 sm:pt-32">
        <div className="story-hero-art" aria-hidden="true" style={{ backgroundImage: "url('/images/payment-routing-art.jpg')" }} />
        <div className="story-hero-glow" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[78vh] max-w-7xl items-center gap-10 px-5 pb-16 pt-10 sm:px-8 sm:pb-20 lg:grid-cols-[1.08fr_.92fr] lg:gap-14 lg:px-10 lg:pb-24">
          <div className="story-hero-copy">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3.5 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#72d6b4]" />
              <span className="text-xs font-medium text-white/65">Payment orchestration, in motion</span>
            </div>
            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.04] tracking-[-.05em] text-white sm:text-6xl lg:text-[4.2rem]">A clearer way through payment complexity.</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg">Follow a payment from your checkout through provider routing and back to your operations team, all through the POPFAB integration layer.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://developer.popfab.io" className="w-full rounded-xl bg-[#6a6bea] px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#7979f5] sm:w-auto">Explore the developer portal</a>
              <Link href="#payment-journey" className="w-full rounded-xl border border-white/15 px-6 py-3.5 text-center text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white sm:w-auto">Follow the payment journey</Link>
            </div>
            <Link href="#payment-journey" className="story-scroll-cue mt-14 inline-flex items-center gap-3 text-xs font-medium text-white/55">
              <span className="story-scroll-cue-icon" aria-hidden="true">↓</span> Scroll to follow a payment
            </Link>
          </div>
          <div className="story-hero-flow" aria-label="POPFAB payment flow: merchant checkout, payment API, connected providers, and payment activity">
            <div className="hero-flow-node hero-flow-checkout"><span>01</span><strong>Your checkout</strong></div>
            <div className="hero-flow-line"><i /></div>
            <div className="hero-flow-node hero-flow-core"><span>POPFAB</span><strong>One payment API</strong></div>
            <div className="hero-flow-line"><i /></div>
            <div className="hero-flow-destinations"><span>Connected providers</span><div><b>Paystack</b><b>Flutterwave</b><b>Monnify</b></div></div>
            <p>Eligible routing · Shared payment activity</p>
          </div>
        </div>
      </section>

      <section className="story-reveal border-b border-[#ececf2] py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[.14em] text-[#9293a2]">Provider connections</p>
          <div className="provider-marquee -mx-5 overflow-hidden sm:hidden" aria-label="Payment provider connections">
            <div className="provider-marquee-track flex w-max items-center gap-8 px-5">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0 items-center gap-8" aria-hidden={copy === 1}>
                  {providers.map((provider) => <div key={provider.name} className="relative h-10 w-28 shrink-0 grayscale transition hover:grayscale-0"><Image src={provider.logo} alt={copy === 0 ? provider.name : ''} fill sizes="112px" className="object-contain" /></div>)}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden grid-cols-4 gap-5 sm:grid lg:grid-cols-7">
            {providers.map((provider) => <div key={provider.name} className="relative h-10 grayscale transition hover:grayscale-0"><Image src={provider.logo} alt={provider.name} fill sizes="120px" className="object-contain object-left" /></div>)}
          </div>
        </div>
      </section>

      <div id="payment-journey"><PaymentStory /></div>

      <section id="platform" className="story-reveal bg-[#f7f7fb] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#5b5ce2]">For developers</p>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-[-.035em] sm:text-4xl">A familiar API. A more connected payment stack.</h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-[#6b6d7d]">Start in sandbox, review the API reference and configure the providers available to your business.</p>
            <div className="mt-7 flex flex-wrap gap-3"><a href="https://developer.popfab.io" className="rounded-xl bg-[#5b5ce2] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4546c8]">Open developer portal</a><Link href="/developers" className="rounded-xl border border-[#dfe0e9] bg-white px-5 py-3 text-sm font-semibold hover:border-[#5b5ce2]">Developer overview</Link></div>
          </div>
          <CodeBlock code={code} language="javascript" title="Create a payment · Node.js" />
        </div>
      </section>

      <section className="story-reveal py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[.8fr_1.2fr] lg:px-10">
          <div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#5b5ce2]">Pricing</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">Start small. Scale with your usage.</h2><p className="mt-4 max-w-md text-sm leading-6 text-[#6b6d7d]">Use sandbox for testing, then buy credits for eligible live checkouts. See the full breakdown before you begin.</p></div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[{ amount: '₦2.50', label: 'Per credit' }, { amount: '2 credits', label: 'Per completed checkout' }, { amount: '₦100M', label: 'Initial volume allowance*' }].map((item) => <div key={item.label} className="border-t border-[#d9d9e4] pt-4"><p className="text-2xl font-semibold tracking-[-.03em]">{item.amount}</p><p className="mt-2 text-sm text-[#77798a]">{item.label}</p></div>)}
            <div className="sm:col-span-3"><Link href="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold text-[#5051c7] hover:text-[#3435a5]">See pricing and credit packs <span aria-hidden="true">→</span></Link><p className="mt-2 text-xs text-[#9293a2]">*For eligible accounts under the current POPFAB pricing policy.</p></div>
          </div>
        </div>
      </section>

      <section className="story-reveal bg-[#10122a] py-16 text-white sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-10">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#a8a8ff]">Start with POPFAB</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">Bring your payment operation into focus.</h2><p className="mt-4 text-sm leading-6 text-white/60">Explore provider availability, review pricing or start with the developer portal.</p></div>
          <div className="flex flex-wrap gap-3"><Link href="/providers" className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/5">View providers</Link><a href="https://developer.popfab.io" className="rounded-xl bg-[#6a6bea] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7979f5]">Get started</a></div>
        </div>
      </section>
    </div>
  );
}
