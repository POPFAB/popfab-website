"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const footerLinks = {
  Product: [
    { label: 'How It Works', href: '/#platform' },
    { label: 'Providers', href: '/providers' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Platform', href: '/#platform' },
  ],
  Developers: [
    { label: 'Documentation', href: 'https://developer.popfab.io/docs' },
    { label: 'API Reference', href: 'https://developer.popfab.io/docs' },
    { label: 'SDKs', href: 'https://developer.popfab.io' },
    { label: 'Webhooks', href: 'https://developer.popfab.io' },
    { label: 'Sandbox', href: 'https://developer.popfab.io' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Provider network', href: '/providers' },
    { label: 'Pricing', href: '/pricing' },
  ],
};

export default function Footer() {
  const pathname = usePathname();

  if (pathname === '/webinar') {
    return (
      <footer className="bg-[#fbf8f1] px-5 pb-8 pt-5 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-[#e8e2d7] pt-5 text-xs text-[#74727a] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} POPFAB Technologies Ltd.</p>
          <p>We’ll use your details to coordinate the webinar and send related reminders.</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-[#0a0f1e] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/popfablong-white.png"
                alt="POPFAB"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              Payment orchestration for African businesses.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#72d6b4]" />
              <span className="text-xs font-medium text-white/55">Built for African payments</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white/60 font-semibold text-xs uppercase tracking-wider mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('http') ? (
                      <a href={link.href} className="text-white/40 hover:text-white/70 text-sm transition-colors">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-white/40 hover:text-white/70 text-sm transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} POPFAB Technologies Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
