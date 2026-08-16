import Link from 'next/link';

const values = [
  {
    title: 'Infrastructure honesty',
    description: "We tell you exactly how our routing engine makes decisions. No black boxes. When POPFAB routes a payment to Paystack over Flutterwave, you can see why — success rate, latency, and method compatibility scores are logged for every transaction.",
    icon: 'search',
  },
  {
    title: 'African context first',
    description: "We build for the African payment landscape as it actually is: USSD codes on feature phones, bank transfer dominance, Verve card prevalence, local regulatory requirements. Not as it looks from a Silicon Valley vantage point.",
    icon: 'globe',
  },
  {
    title: 'Developer respect',
    description: "We write documentation we would want to read. We build SDKs we would want to use. We design error messages that tell you exactly what went wrong and exactly how to fix it. Your time is not ours to waste.",
    icon: 'code',
  },
  {
    title: 'Compliance without complexity',
    description: "We handle the regulatory overhead so you don't have to. Our compliance posture is a feature, not a footnote. Enterprise customers can request our full compliance documentation package.",
    icon: 'shield',
  },
];

const notList = [
  {
    heading: 'Not a payment gateway',
    description: "POPFAB doesn't issue virtual accounts, hold merchant funds, or settle transactions directly. We're the orchestration layer that sits above your PSPs — routing, failing over, and reconciling. Your settlement relationship stays with Paystack, Flutterwave, or whichever PSP you use.",
  },
  {
    heading: 'Not a replacement for your PSPs',
    description: "We work alongside Paystack, Flutterwave, and the others — not instead of them. You still maintain your PSP relationships and benefit from their products. POPFAB makes all of them work better together.",
  },
  {
    heading: 'Not enterprise-only SaaS',
    description: "You don't need to book a demo to begin exploring POPFAB. Start with the sandbox, review the documentation, and choose a plan that matches your payment volume.",
  },
  {
    heading: 'Not built in South Africa for Nigeria',
    description: "POPFAB is built by Nigerians for the Nigerian market first. We understand the CBN regulatory environment, GTBank/Access/Zenith banking dynamics, state-by-state merchant realities, and why USSD still matters.",
  },
];


export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0f1e] pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
            <span className="text-white/60 text-sm font-medium">Built for Nigeria · Starting in Lagos and Abuja</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Nigerian-built. Pan-African mission.
          </h1>
          <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
            POPFAB exists because African businesses — especially Nigerian ones — deserve payment infrastructure
            that was designed for them, not adapted from somewhere else.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#4361ee] text-sm font-semibold uppercase tracking-wider">Our Mission</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0f1e] mt-3 mb-6 leading-tight">
                Eliminate the infrastructure gap between African businesses and their customers&apos; money.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nigerian businesses today have access to world-class payment providers. But using more than one means building and maintaining custom abstractions, wrestling with 6 different dashboards, and writing reconciliation scripts that inevitably break on public holiday settlement cycles.
              </p>
              <p className="text-gray-600 leading-relaxed">
                POPFAB provides the orchestration layer that makes your payment infrastructure genuinely reliable — without requiring you to become a payment infrastructure expert yourself.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { label: 'Founded', value: '2023', icon: 'calendar' },
                { label: 'Launch markets', value: 'Lagos and Abuja', icon: 'pin' },
                { label: 'Provider access', value: '7 available providers', icon: 'link' },
                { label: 'Security', value: 'NDPR Compliant', icon: 'lock' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-5 bg-[#f8fafc] rounded-2xl">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5b5ce2]/10 text-[#5b5ce2]"><AboutIcon name={item.icon} /></span>
                  <div>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">{item.label}</p>
                    <p className="text-[#0a0f1e] font-bold text-base">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What POPFAB is NOT */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">Clarity</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0f1e] mt-3">
              What POPFAB is NOT
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              We believe in honest positioning. Here is exactly where POPFAB starts and stops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {notList.map((item) => (
              <div key={item.heading} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a0f1e] text-base mb-2">{item.heading}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#4361ee] text-sm font-semibold uppercase tracking-wider">Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0f1e] mt-3">
              What we believe
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="group p-8 border border-gray-100 rounded-2xl hover:border-[#4361ee]/30 hover:shadow-xl transition-all duration-300">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#5b5ce2]/10 text-[#5b5ce2]"><AboutIcon name={v.icon} /></div>
                <h3 className="font-bold text-[#0a0f1e] text-xl mb-4">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning statement */}
      <section className="py-24 bg-[#0a0f1e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight">
            The positioning statement
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
            <p className="text-white text-xl sm:text-2xl leading-relaxed font-medium">
              &ldquo;POPFAB is the payment orchestration layer for African businesses — routing transactions intelligently across providers, absorbing provider failures before they reach customers, and replacing 6 fragmented dashboards with one unified view. We are the plumbing that makes African payment infrastructure production-grade.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#4361ee]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to build on POPFAB?
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Start with a free sandbox. No credit card. No demo required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://developer.popfab.io" className="bg-white text-[#4361ee] px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors">
              Start Building Free
            </a>
            <Link href="/pricing" className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function AboutIcon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    search: 'm21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z',
    globe: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-9-9h18M12 3c2.1 2.46 3.16 5.46 3.16 9S14.1 18.54 12 21c-2.1-2.46-3.16-5.46-3.16-9S9.9 5.46 12 3Z',
    code: 'm8 9-3 3 3 3m8-6 3 3-3 3m-2-10-4 16',
    shield: 'M12 3 5 6v5c0 4.5 2.9 8.33 7 10 4.1-1.67 7-5.5 7-10V6l-7-3Zm-3 9 2 2 4-4',
    calendar: 'M7 3v3m10-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z',
    pin: 'M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
    link: 'M10 13a5 5 0 0 0 7.07.07l2-2A5 5 0 0 0 12 4l-1.15 1.15M14 11a5 5 0 0 0-7.07-.07l-2 2A5 5 0 0 0 12 20l1.15-1.15',
    lock: 'M6 11h12v9H6v-9Zm3 0V8a3 3 0 0 1 6 0v3',
  };
  return <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d={paths[name]} /></svg>;
}
