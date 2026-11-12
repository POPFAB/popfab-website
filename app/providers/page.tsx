import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment providers | POPFAB',
  description: 'Explore payment provider integrations and methods currently available through POPFAB.',
  openGraph: {
    title: 'Payment providers available through POPFAB',
    description: 'Connect eligible payment providers through one integration layer.',
  },
};

const providers = [
  { name: 'ALATPay', logo: '/images/alatpay.png', home: 'Nigeria', methods: ['Bank transfer', 'Virtual accounts'] },
  { name: 'Paystack', logo: '/images/paystack-logo.png', home: 'Nigeria', methods: ['Cards', 'Bank transfer', 'USSD', 'QR'] },
  { name: 'Flutterwave', logo: '/images/flutterwave-logo.png', home: 'Pan-African', methods: ['Cards', 'Bank transfer', 'Mobile money', 'USSD'] },
  { name: 'Monnify', logo: '/images/monnify-logo.png', home: 'Nigeria', methods: ['Bank transfer', 'USSD', 'Virtual accounts'] },
  { name: 'Squad', logo: '/images/squad-logo.jpeg', home: 'Nigeria', methods: ['Cards', 'Bank transfer', 'Virtual POS'] },
  { name: 'Interswitch', logo: '/images/interswitch-logo.png', home: 'Nigeria', methods: ['Cards', 'Quickteller', 'USSD'] },
  { name: 'Payaza', logo: '/images/payaza-logo.jpeg', home: 'Nigeria', methods: ['Cards', 'Bank transfer', 'Pay by account'] },
];

export default function ProvidersPage() {
  return (
    <div className="bg-white text-[#10122a]">
      <section className="border-b border-[#ececf2] bg-[#f7f7fb] pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-[1.05fr_.95fr] md:items-end lg:px-10">
          <div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#5b5ce2]">Provider network</p><h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-.045em] sm:text-6xl">Keep your provider choices. Simplify the connection.</h1></div>
          <div><p className="max-w-lg text-base leading-7 text-[#626477]">Connect the payment providers your business uses through a shared integration layer. Supported methods and access depend on your merchant setup.</p><Link href="https://developer.popfab.io" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#5051c7] hover:text-[#3435a5]">Explore the developer portal <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 flex min-h-48 flex-col justify-center gap-4 rounded-2xl bg-cover bg-center p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8" style={{ backgroundImage: "linear-gradient(90deg, rgba(255,255,255,.97) 0%, rgba(255,255,255,.91) 46%, rgba(255,255,255,.58) 100%), url('/images/provider-payment-moment.png')" }}>
            <div className="max-w-xl"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#5b5ce2]">Connections</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.035em]">Providers available through POPFAB</h2><p className="mt-3 max-w-md text-sm leading-6 text-[#77798a]">This is the current integration list. Availability for a specific merchant or payment method may vary.</p></div>
          </div>
          <div className="divide-y divide-[#ececf2] border-y border-[#ececf2]">
            {providers.map((provider, index) => <article key={provider.name} className="grid gap-5 py-6 sm:grid-cols-[3rem_12rem_1fr_auto] sm:items-center sm:gap-8">
              <span className="text-xs font-medium text-[#a0a1ae]">0{index + 1}</span>
              <div className="flex items-center gap-4">
                <div className="relative h-11 w-24 shrink-0 rounded-lg bg-white"><Image src={provider.logo} alt={`${provider.name} logo`} fill sizes="96px" className="object-contain" /></div>
                <div><h3 className="font-semibold text-[#25263c]">{provider.name}</h3><p className="mt-1 text-xs text-[#8b8d9b]">{provider.home}</p></div>
              </div>
              <div className="flex flex-wrap gap-2 sm:pl-3">{provider.methods.map((method) => <span key={method} className="rounded-full border border-[#e7e7ef] px-3 py-1.5 text-xs text-[#626477]">{method}</span>)}</div>
              <span className="text-xs font-medium text-[#5b5ce2]">Integrated</span>
            </article>)}
          </div>
          <p className="mt-5 text-xs leading-5 text-[#8b8d9b]">Provider logos and names are shown for identification. POPFAB’s integration does not replace your provider account or provider terms.</p>
        </div>
      </section>

      <section className="border-y border-[#ececf2] bg-[#fafafd] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[.8fr_1.2fr] lg:px-10">
          <div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#5b5ce2]">One integration surface</p><h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-.035em]">Keep provider-specific work out of every checkout.</h2></div>
          <div className="grid gap-6 sm:grid-cols-2">
            <article className="border-t border-[#d9d9e4] pt-4"><h3 className="font-semibold">A consistent payment flow</h3><p className="mt-2 text-sm leading-6 text-[#6b6d7d]">Use POPFAB’s API to initiate payments and receive a common response shape.</p></article>
            <article className="border-t border-[#d9d9e4] pt-4"><h3 className="font-semibold">Routing you can configure</h3><p className="mt-2 text-sm leading-6 text-[#6b6d7d]">Apply routing rules across the providers enabled for your merchant account.</p></article>
            <article className="border-t border-[#d9d9e4] pt-4"><h3 className="font-semibold">Payment activity in one place</h3><p className="mt-2 text-sm leading-6 text-[#6b6d7d]">Review transaction status and provider details through the POPFAB dashboard.</p></article>
            <article className="border-t border-[#d9d9e4] pt-4"><h3 className="font-semibold">Clear account boundaries</h3><p className="mt-2 text-sm leading-6 text-[#6b6d7d]">Your provider accounts and settlement relationships remain with each provider.</p></article>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-10">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#5b5ce2]">Next step</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.035em]">Check which connections fit your account.</h2><p className="mt-4 text-sm leading-6 text-[#6b6d7d]">Review the integration guide or contact POPFAB to discuss your provider requirements.</p></div>
          <div className="flex flex-wrap gap-3"><Link href="/pricing" className="rounded-xl border border-[#dfe0e9] px-5 py-3 text-sm font-semibold hover:border-[#5b5ce2]">View pricing</Link><a href="https://developer.popfab.io" className="rounded-xl bg-[#5b5ce2] px-5 py-3 text-sm font-semibold text-white hover:bg-[#4546c8]">Read the docs</a></div>
        </div>
      </section>
    </div>
  );
}
