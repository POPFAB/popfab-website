import type { Metadata } from 'next';

const registrationUrl = 'https://forms.gle/c6XfUbT4kPiUHbob6';
const embeddedFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfqhrl_FkAZS7U5feuBAvRVdyNBkGHWLpX54IPBF2VFLCT8ZA/viewform?embedded=true';

export const metadata: Metadata = {
  title: 'Get More Eyes on Your Products | POPFAB Merchant Webinar',
  description:
    'Join POPFAB for a practical online webinar on how customers, creators, and sales partners can promote your products and earn commissions when they make a sale.',
  openGraph: {
    title: 'Get More Eyes on Your Products — POPFAB Merchant Webinar',
    description:
      'Learn how to share product payment links, give partners tracked referral links, and monitor sales and commissions with POPFAB.',
    type: 'website',
    images: ['/images/webinar-hero.jpg'],
  },
};

const agenda = [
  {
    step: '01',
    title: 'Make your product easy to share',
    description: 'Create a clear product offer and a payment link your customers can use to check out.',
  },
  {
    step: '02',
    title: 'Bring creators and sales partners in',
    description: 'Give each partner a tracked link so recommendations can lead back to the right product.',
  },
  {
    step: '03',
    title: 'Follow the sale and commission',
    description: 'See how orders and commissions can be monitored as a referred customer makes a purchase.',
  },
];

const faqs = [
  {
    question: 'Who should register?',
    answer: 'This session is for merchants and product-based businesses that want more people to discover and buy their products.',
  },
  {
    question: 'When is the webinar?',
    answer: 'The date and time are being confirmed. Register with your email and WhatsApp number, and POPFAB will send the confirmed details and joining link using the contact details you provide.',
  },
  {
    question: 'What will I need to provide?',
    answer: 'The registration form asks for your business and contact details, what you sell, where you sell today, and your biggest challenge getting products seen and purchased. There is also an optional early merchant pilot question.',
  },
  {
    question: 'Will I be added to marketing emails?',
    answer: 'No. The form’s product updates and merchant tips question is optional. Your registration details are used to coordinate the webinar and send related reminders.',
  },
];

export default function WebinarPage() {
  return (
    <div className="overflow-hidden bg-[#fbf8f1] text-[#171722]">
      <section className="relative isolate flex min-h-[720px] items-end bg-[#15162f] pb-14 pt-28 text-white sm:min-h-[760px] sm:pb-20 sm:pt-32 lg:min-h-[780px]">
        <div className="absolute inset-0 -z-20 bg-[url('/images/webinar-hero.jpg')] bg-cover bg-[center_42%]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,16,38,.94)_0%,rgba(15,16,38,.84)_37%,rgba(15,16,38,.28)_76%,rgba(15,16,38,.16)_100%),linear-gradient(0deg,rgba(15,16,38,.75)_0%,transparent_58%)]" />
        <div className="mx-auto grid w-full max-w-7xl items-end gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-10">
          <div className="max-w-[760px]">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[.17em] text-white/80">
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur">POPFAB merchant webinar</span>
              <span className="hidden h-px w-6 bg-white/40 sm:block" />
              <span className="px-1 py-2">Online · Date to be announced</span>
            </div>
            <h1 className="max-w-[720px] text-[clamp(3.25rem,8vw,6.6rem)] font-semibold leading-[.96] tracking-[-.065em]">
              Get more eyes on <span className="text-[#c5c3ff]">your products.</span>
            </h1>
            <p className="mt-6 max-w-[620px] text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Learn how customers, creators, and sales partners can share your products—and earn a commission when they make a sale.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#register" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#7778ed] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(71,72,186,.35)] transition hover:-translate-y-0.5 hover:bg-[#8586f5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Register for the webinar <ArrowIcon />
              </a>
              <a href="#what-youll-learn" className="inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-white/80 transition hover:text-white">See what you’ll learn <span className="ml-2">↓</span></a>
            </div>
            <p className="mt-4 text-xs text-white/60">Register now. We’ll send the confirmed date, time, and joining link.</p>
          </div>

          <a href="#register" className="group hidden rounded-2xl border border-white/20 bg-[#10122a]/70 p-5 text-white shadow-2xl shadow-black/20 backdrop-blur-md transition hover:-translate-y-1 hover:border-white/35 lg:block">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-semibold uppercase tracking-[.14em] text-white/55">A practical session for</span>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 text-[#c5c3ff]" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M7 17 17 7M7 7h10v10"/></svg>
            </div>
            <p className="mt-5 text-lg font-semibold">Growing product businesses</p>
            <p className="mt-1 text-sm leading-6 text-white/60">Get practical ideas for turning recommendations into trackable sales.</p>
            <div className="mt-5 flex items-center gap-2 border-t border-white/15 pt-4 text-sm font-medium text-[#c5c3ff]">Save your place <ArrowIcon /></div>
          </a>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-white/15" />
      </section>

      <section aria-label="Webinar details" className="border-b border-[#e9e4d9] bg-[#f3efe6]">
        <div className="mx-auto grid max-w-7xl divide-y divide-[#e2dccf] px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-10">
          <div className="flex items-center gap-4 py-5 sm:py-6 sm:pl-1"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#5556c8]"><CalendarIcon /></span><div><p className="text-[11px] font-semibold uppercase tracking-[.13em] text-[#85818a]">When</p><p className="mt-1 text-sm font-semibold">Date to be announced</p></div></div>
          <div className="flex items-center gap-4 py-5 sm:px-6 sm:py-6"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#5556c8]"><MonitorIcon /></span><div><p className="text-[11px] font-semibold uppercase tracking-[.13em] text-[#85818a]">Where</p><p className="mt-1 text-sm font-semibold">Online webinar</p></div></div>
          <div className="flex items-center gap-4 py-5 sm:px-6 sm:py-6"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#5556c8]"><MailIcon /></span><div><p className="text-[11px] font-semibold uppercase tracking-[.13em] text-[#85818a]">After registration</p><p className="mt-1 text-sm font-semibold">Updates by email and WhatsApp</p></div></div>
        </div>
      </section>

      <section id="what-youll-learn" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.82fr_1.18fr] lg:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#5758ca]">The idea behind the session</p>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.04] tracking-[-.05em] sm:text-5xl">Good products grow when more people can share them.</h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#65636d]">You don’t have to rely on your own reach alone. POPFAB will show how product payment links and partner referral links can help customers, creators, and sales partners promote what you sell.</p>
            <a href="#register" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#5051be] hover:text-[#36379d]">Register and get the details <ArrowIcon /></a>
          </div>

          <div className="border-y border-[#e5dfd3]">
            {agenda.map((item) => (
              <article key={item.step} className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-[#e5dfd3] py-6 last:border-b-0 sm:grid-cols-[3.5rem_1fr] sm:gap-5 sm:py-8">
                <span className="pt-1 font-mono text-xs font-semibold tracking-wide text-[#7778d8]">{item.step}</span>
                <div><h3 className="text-xl font-semibold tracking-[-.025em] sm:text-2xl">{item.title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-[#65636d] sm:text-base sm:leading-7">{item.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#17182f] px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-center lg:gap-20">
          <div><p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#bcbcff]">From product to partner sale</p><h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.04em] sm:text-4xl">A simple path to understand.</h2></div>
          <div className="grid gap-3 sm:grid-cols-4">
            <FlowStep number="1" label="Set up your product" />
            <FlowStep number="2" label="Share a tracked link" />
            <FlowStep number="3" label="Customer checks out" />
            <FlowStep number="4" label="Track the commission" last />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div><p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#5758ca]">Before you register</p><h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-[-.04em] sm:text-4xl">A few things you might be wondering.</h2></div>
          <div className="divide-y divide-[#e5dfd3] border-y border-[#e5dfd3]">
            {faqs.map((faq) => <details key={faq.question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-semibold"><span>{faq.question}</span><span aria-hidden="true" className="text-xl font-normal text-[#7778d8] transition group-open:rotate-45">+</span></summary><p className="mt-3 max-w-2xl pr-8 text-sm leading-6 text-[#65636d]">{faq.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section id="register" className="scroll-mt-16 bg-[#efecff] px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#5556c8]">POPFAB merchant webinar</p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-.05em] sm:text-5xl">Get more eyes on your products.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#5e5d6b]">Tell us a little about your business. We’ll send the confirmed webinar date, time, joining link, and reminders using the contact details you provide.</p>
          </div>
          <div className="mx-auto mt-10 max-w-[820px] overflow-hidden rounded-2xl border border-[#dfdbea] bg-white shadow-[0_24px_80px_rgba(40,35,100,.10)] sm:mt-14">
            <iframe
              title="Register for the POPFAB Merchant Webinar: Get More Eyes on Your Products"
              src={embeddedFormUrl}
              loading="lazy"
              className="block h-[2200px] w-full border-0 sm:h-[1900px]"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-center text-xs leading-5 text-[#696777]">
            The form asks about your product, sales channels, and current growth challenge so POPFAB can shape a useful session. Future product updates are optional.{' '}
            <a href={registrationUrl} target="_blank" rel="noreferrer" className="font-semibold text-[#4f50bd] underline underline-offset-2 hover:text-[#35369c]">Open the registration form in a new tab</a>.
          </p>
        </div>
      </section>

      <section className="bg-[#fbf8f1] px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#5758ca]">Your next step</p><h2 className="mt-2 text-2xl font-semibold tracking-[-.035em] sm:text-3xl">Let more people discover what you make.</h2></div>
          <a href="#register" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#5b5ce2] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4546c8]">Register for the webinar <ArrowIcon /></a>
        </div>
      </section>
    </div>
  );
}

function FlowStep({ number, label, last = false }: { number: string; label: string; last?: boolean }) {
  return (
    <div className="relative min-h-28 rounded-xl border border-white/10 bg-white/[.045] p-4 sm:min-h-32">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7778ed] text-xs font-bold text-white">{number}</span>
      <p className="mt-4 max-w-[150px] text-sm font-medium leading-5 text-white/85">{label}</p>
      {!last && <svg aria-hidden="true" viewBox="0 0 20 20" className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 text-[#bcbcff] sm:block" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 10h13m-5-5 5 5-5 5"/></svg>}
    </div>
  );
}

function ArrowIcon() { return <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 10h11M10 5l5 5-5 5"/></svg>; }
function CalendarIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M7.5 3v4M16.5 3v4M3.5 9.5h17"/></svg>; }
function MonitorIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/></svg>; }
function MailIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>; }
