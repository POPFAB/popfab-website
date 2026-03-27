import Link from 'next/link';

const values = [
  {
    title: 'Infrastructure honesty',
    description: "We tell you exactly how our routing engine makes decisions. No black boxes. When POPFAB routes a payment to Paystack over Flutterwave, you can see why — success rate, latency, and method compatibility scores are logged for every transaction.",
    icon: '🔍',
  },
  {
    title: 'African context first',
    description: "We build for the African payment landscape as it actually is — USSD codes on feature phones, bank transfer dominance, Verve card prevalence, CBN regulatory requirements. Not as it looks from a Silicon Valley vantage point.",
    icon: '🌍',
  },
  {
    title: 'Developer respect',
    description: "We write documentation we would want to read. We build SDKs we would want to use. We design error messages that tell you exactly what went wrong and exactly how to fix it. Your time is not ours to waste.",
    icon: '💻',
  },
  {
    title: 'Compliance without complexity',
    description: "CBN licensing, PCI-DSS, NDPR — we handle the regulatory overhead so you don't have to. Our compliance posture is a feature, not a footnote. Enterprise customers can request our full compliance documentation package.",
    icon: '🛡️',
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
    description: "We have a Starter plan for ₦25k/month with a free sandbox. You don't need to book a demo to try POPFAB. Self-serve signup, instant sandbox, clear documentation.",
  },
  {
    heading: 'Not built in South Africa for Nigeria',
    description: "POPFAB is built by Nigerians, in Lagos, for the Nigerian market first. We understand the CBN regulatory environment, the GTBank/Access/Zenith banking dynamics, and why USSD still matters.",
  },
];

const team = [
  {
    name: 'Chuka Obi',
    role: 'Co-founder & CEO',
    background: 'Previously VP Engineering at Interswitch. 8 years in Nigerian payment infrastructure.',
    initial: 'CO',
  },
  {
    name: 'Adaeze Nwachukwu',
    role: 'Co-founder & CTO',
    background: "Previously Staff Engineer at Paystack. Built Paystack's routing layer from the ground up.",
    initial: 'AN',
  },
  {
    name: 'Seun Adeleke',
    role: 'Head of Compliance',
    background: 'Former CBN examiner. Led PSSP licensing for 3 fintechs before POPFAB.',
    initial: 'SA',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0f1e] hero-bg pt-28 pb-24 relative">
        <div className="absolute inset-0 grid-overlay opacity-50" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#4361ee]/15 border border-[#4361ee]/30 rounded-full px-4 py-2 mb-8">
            <span className="text-[#a5b4fc] text-sm font-medium">Built in Lagos · CBN PSSP Licensed</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Nigerian-built.<br />
            <span className="gradient-text">Pan-African mission.</span>
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
                { label: 'Founded', value: '2023', icon: '📅' },
                { label: 'Headquarters', value: 'Lagos, Nigeria', icon: '📍' },
                { label: 'Regulatory status', value: 'CBN PSSP Licensed', icon: '🏛️' },
                { label: 'Providers connected', value: '6 live, 4 in testing', icon: '🔗' },
                { label: 'Security', value: 'PCI-DSS · NDPR Compliant', icon: '🔒' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-5 bg-[#f8fafc] rounded-2xl">
                  <span className="text-2xl">{item.icon}</span>
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
                <div className="text-3xl mb-5">{v.icon}</div>
                <h3 className="font-bold text-[#0a0f1e] text-xl mb-4">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning statement */}
      <section className="py-24 bg-[#0a0f1e] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#4361ee]/15 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#4361ee] text-sm font-semibold uppercase tracking-wider">Team</span>
            <h2 className="text-3xl font-bold text-[#0a0f1e] mt-3">
              Built by people who know Nigerian payments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4361ee] to-[#06b6d4] flex items-center justify-center mx-auto mb-5">
                  <span className="text-white font-bold text-xl">{member.initial}</span>
                </div>
                <h3 className="font-bold text-[#0a0f1e] text-base mb-1">{member.name}</h3>
                <p className="text-[#4361ee] text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.background}</p>
              </div>
            ))}
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
            <Link href="/developers" className="bg-white text-[#4361ee] px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors">
              Start Building Free
            </Link>
            <Link href="/pricing" className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
