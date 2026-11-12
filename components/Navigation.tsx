'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Product', href: '/#platform' },
  { label: 'Providers', href: '/providers' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Webinar', href: '/webinar' },
  { label: 'Developers', href: '/developers' },
];

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  if (pathname === '/webinar') {
    return (
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/[.06] bg-[#fbf8f1]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link href="/" aria-label="POPFAB home" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/popfablong-dark.png" alt="POPFAB" className="h-8 w-auto object-contain" />
          </Link>
          <a href="#register" className="inline-flex items-center gap-2 rounded-full bg-[#5b5ce2] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4546c8] sm:px-5">
            Register for the webinar
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 10h11M10 5l5 5-5 5"/></svg>
          </a>
        </div>
      </nav>
    );
  }

  const solid = scrolled || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? 'bg-white/90 backdrop-blur-xl border-b border-[#e7e9f1] shadow-[0_8px_30px_rgba(16,18,42,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Wordmark */}
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={solid ? '/images/popfablong-dark.png' : '/images/popfablong-white.png'}
              alt="POPFAB"
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  solid ? 'text-gray-600 hover:text-[#0a0f1e]' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://app.popfab.io"
              className={`text-sm font-medium transition-colors duration-200 ${
                solid ? 'text-gray-600 hover:text-[#0a0f1e]' : 'text-white/70 hover:text-white'
              }`}
            >
              Log In
            </a>
            <a
              href="https://developer.popfab.io"
                className="bg-[#5b5ce2] hover:bg-[#4546c8] text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-[0_6px_16px_rgba(91,92,226,0.24)] transition-all duration-200 hover:-translate-y-0.5"
            >
              Start Building
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="primary-menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 transition-all duration-300 ${
                  solid || mobileOpen ? 'bg-[#0a0f1e]' : 'bg-white'
                } ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ${
                  solid || mobileOpen ? 'bg-[#0a0f1e]' : 'bg-white'
                } ${mobileOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ${
                  solid || mobileOpen ? 'bg-[#0a0f1e]' : 'bg-white'
                } ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="primary-menu"
        className={`lg:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-[calc(100dvh-4rem)] overflow-y-auto opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-gray-700 hover:text-[#0a0f1e] text-base font-medium py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-gray-100 pt-3 mt-2 flex flex-col gap-2">
            <a
              href="https://app.popfab.io"
              onClick={() => setMobileOpen(false)}
              className="text-gray-700 text-base font-medium py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Log In
            </a>
            <a
              href="https://developer.popfab.io"
              onClick={() => setMobileOpen(false)}
              className="bg-[#5b5ce2] hover:bg-[#4546c8] text-white px-4 py-3 rounded-xl text-base font-semibold text-center shadow-[0_6px_16px_rgba(91,92,226,0.2)] transition-colors"
            >
              Start Building
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
