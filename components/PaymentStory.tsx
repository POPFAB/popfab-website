'use client';

import { useEffect, useState } from 'react';

const chapters = [
  {
    label: 'One integration',
    title: 'Connect your checkout once.',
    body: 'Use a shared payment API for the providers enabled on your merchant account.',
  },
  {
    label: 'Routing controls',
    title: 'Choose how eligible payments flow.',
    body: 'Set routing rules around the providers and payment methods available to your business.',
  },
  {
    label: 'Payment operations',
    title: 'Follow each payment to its outcome.',
    body: 'See payment status and provider activity together in the POPFAB dashboard.',
  },
];

export default function PaymentStory() {
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const steps = document.querySelectorAll<HTMLElement>('[data-payment-story-step]');
    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible) setActiveChapter(Number((mostVisible.target as HTMLElement).dataset.paymentStoryStep));
      },
      { rootMargin: '-38% 0px -38% 0px', threshold: [0, 0.2, 0.5, 0.8] },
    );

    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="payment-story" aria-labelledby="payment-story-title">
      <div className="payment-story-heading">
        <p className="story-eyebrow">A payment, from start to finish</p>
        <h2 id="payment-story-title">One flow for the work behind checkout.</h2>
      </div>

      <div className="payment-story-grid">
        <div className="payment-story-sticky">
          <div className={`payment-story-scene scene-${activeChapter}`} aria-hidden="true">
            <div className="scene-topline"><span>POPFAB / PAYMENT FLOW</span><span>0{activeChapter + 1} — 03</span></div>
            <div className="scene-orbit scene-orbit-one" />
            <div className="scene-orbit scene-orbit-two" />

            {activeChapter === 0 && (
              <div className="scene-visual scene-api">
                <div className="scene-chip">YOUR CHECKOUT</div>
                <div className="scene-connector"><i /></div>
                <div className="scene-core"><span>POPFAB</span><strong>One payment API</strong></div>
                <div className="scene-provider-row"><span>Paystack</span><span>Flutterwave</span><span>Monnify</span></div>
              </div>
            )}

            {activeChapter === 1 && (
              <div className="scene-visual scene-routing">
                <div className="scene-rule-card"><span>ROUTING RULE</span><strong>Card payments</strong><small>Enabled providers · Live</small></div>
                <div className="scene-route-line"><i /></div>
                <div className="scene-route-target"><b>Paystack</b><span>Selected provider</span></div>
                <div className="scene-route-muted">Other connected providers remain available by your configuration</div>
              </div>
            )}

            {activeChapter === 2 && (
              <div className="scene-visual scene-activity">
                <div className="scene-activity-header"><span>PAYMENT ACTIVITY</span><b>Illustrative example</b></div>
                <div className="scene-activity-row"><small>REFERENCE</small><strong>ORDER-1042</strong></div>
                <div className="scene-activity-row"><small>PROVIDER</small><strong>Paystack</strong></div>
                <div className="scene-activity-status"><i />Successful</div>
                <div className="scene-activity-footer"><span>Payment status</span><span>Provider activity</span><span>Reconciliation</span></div>
              </div>
            )}

            <div className="scene-bottomline"><span>{chapters[activeChapter].label}</span><span className="scene-pulse" /></div>
          </div>
        </div>

        <div className="payment-story-chapters">
          {chapters.map((chapter, index) => (
            <article
              key={chapter.label}
              data-payment-story-step={index}
              className={`payment-story-step ${activeChapter === index ? 'is-active' : ''}`}
            >
              <span className="payment-story-number">0{index + 1}</span>
              <p className="story-eyebrow">{chapter.label}</p>
              <h3>{chapter.title}</h3>
              <p>{chapter.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
