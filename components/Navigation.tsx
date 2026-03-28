'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Product', href: '/#product' },
  { label: 'Providers', href: '/providers' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Developers', href: '/developers' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Wordmark */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#4361ee] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-[#0a0f1e]' : 'text-white'}`}>
              POPFAB
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  scrolled ? 'text-gray-600 hover:text-[#0a0f1e]' : 'text-white/70 hover:text-white'
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
                scrolled ? 'text-gray-600 hover:text-[#0a0f1e]' : 'text-white/70 hover:text-white'
              }`}
            >
              Log In
            </a>
            <a
              href="https://developer.popfab.io"
              className="bg-[#4361ee] hover:bg-[#3451de] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
            >
              Start Building
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 transition-all duration-300 ${
                  scrolled ? 'bg-[#0a0f1e]' : 'bg-white'
                } ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ${
                  scrolled ? 'bg-[#0a0f1e]' : 'bg-white'
                } ${mobileOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ${
                  scrolled ? 'bg-[#0a0f1e]' : 'bg-white'
                } ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
              className="text-gray-700 text-base font-medium py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Log In
            </a>
            <a
              href="https://developer.popfab.io"
              className="bg-[#4361ee] hover:bg-[#3451de] text-white px-4 py-3 rounded-lg text-base font-semibold text-center transition-colors"
            >
              Start Building
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
