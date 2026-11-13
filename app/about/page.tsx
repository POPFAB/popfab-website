import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About POPFAB | Payment orchestration for African businesses',
  description: 'Learn how POPFAB connects payment providers and gives African businesses a clearer way to manage payment operations.',
  openGraph: {
    title: 'About POPFAB',
    description: 'Payment infrastructure designed around the needs of African businesses.',
  },
};

const principles = [
  { number: '01', title: 'Build for the way payments work here', body: 'Local payment methods, provider differences and settlement details shape the product from the start.' },
  { number: '02', title: 'Make complexity easier to see', body: 'A shared view of payment activity helps product, engineering and operations work from the same information.' },
  { number: '03', title: 'Give teams room to choose', body: 'Keep your provider relationships and decide which connections fit your business and setup.' },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-[#10122a]">
      <section className="story-reveal relative overflow-hidden bg-[#f7f7fb] pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-10">
          <div className="relative z-10">
            <p className="mb-5 text-xs font-bold uppercase tracking-[.16em] text-[#5b5ce2]">About POPFAB</p>
            <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-.045em] sm:text-6xl">Payments are complicated. Your tools shouldn’t be.</h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#626477] sm:text-lg">POPFAB gives African businesses one place to connect payment providers, route transactions and understand what happened after checkout.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://developer.popfab.io" className="rounded-xl bg-[#5b5ce2] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4546c8]">Explore the platform</a>
              <Link href="/providers" className="rounded-xl border border-[#dfe0e9] bg-white px-5 py-3 text-sm font-semibold text-[#25263c] transition hover:border-[#5b5ce2]">Meet the providers</Link>
            </div>
          </div>
          <div role="img" aria-label="Illustrative scene of African fintech colleagues discussing payment operations" className="story-bg-drift relative aspect-[1.25] overflow-hidden rounded-[1.6rem] bg-[#e6e5ef] bg-cover bg-center shadow-[0_28px_70px_rgba(16,18,42,.13)]" style={{ backgroundImage: "url('/images/about-team.jpg')" }}>
            <div className="absolute inset-0 bg-[#10122a]/10" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#10122a]/70 to-transparent p-6 pt-16 text-sm font-medium text-white">Designed around the realities of African payments.</div>
          </div>
        </div>
      </section>

      <section className="story-reveal py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#5b5ce2]">Why we’re here</p>
            <h2 className="mt-4 max-w-sm text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-4xl">One integration can make a fragmented setup easier to manage.</h2>
          </div>
          <div className="max-w-2xl space-y-5 text-[15px] leading-7 text-[#626477] sm:text-base">
            <p>Businesses often add payment providers one at a time. Each connection brings its own API, status names, webhooks and operational dashboard. That makes it harder to build a consistent checkout and get a clear picture of payment activity.</p>
            <p>POPFAB is the orchestration layer between your application and the providers you choose. It gives your team a consistent way to initiate payments, apply routing rules, receive payment events and review activity.</p>
            <p>Your business keeps its provider relationships. Which providers and features are available depends on your account configuration and the provider access enabled for you.</p>
          </div>
        </div>
      </section>

      <section className="story-reveal border-y border-[#ececf2] bg-[#fafafd] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#5b5ce2]">How we work</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">Useful infrastructure starts with clarity.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {principles.map((item) => <article key={item.number} className="border-t border-[#d9d9e4] pt-5">
              <span className="text-xs font-semibold tracking-wider text-[#9697a8]">{item.number}</span>
              <h3 className="mt-5 text-xl font-semibold tracking-[-.02em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#6b6d7d]">{item.body}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="story-reveal py-20 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#5b5ce2]">A better place to start</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">See how POPFAB fits your payment stack.</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#6b6d7d]">Explore the available provider connections, review pricing, or start with the developer documentation.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/pricing" className="rounded-xl border border-[#dfe0e9] px-5 py-3 text-sm font-semibold transition hover:border-[#5b5ce2]">View pricing</Link>
            <a href="https://developer.popfab.io" className="rounded-xl bg-[#5b5ce2] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4546c8]">Start building</a>
          </div>
        </div>
      </section>
    </div>
  );
}
