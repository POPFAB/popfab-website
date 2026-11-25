import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.popfab.io'),
  title: 'POPFAB — Payment Orchestration for African Businesses',
  icons: { icon: '/images/popfab-logo.png', apple: '/images/popfab-logo.png' },
  description:
    'One API to route payments across ALATPay, Paystack, Flutterwave, Monnify, Squad, Interswitch, and Payaza. Automatic failover, smart routing, and unified analytics.',
  keywords:
    'payment orchestration, Nigeria, Africa, Paystack, Flutterwave, Monnify, Squad, Interswitch, payment API',
  openGraph: {
    title: 'POPFAB — Payment Orchestration for African Businesses',
    description:
      'One integration layer for provider routing, payment operations, and unified analytics.',
    type: 'website',
    locale: 'en_NG',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="site-shell min-h-screen flex flex-col bg-white text-[#0a0f1e]">
        <Script id="google-analytics-init" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-P6Z86LFQJP');`,
        }} />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-P6Z86LFQJP" strategy="afterInteractive" />
        <Script id="google-tag-manager-init" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});`,
        }} />
        <Script src="https://www.googletagmanager.com/gtm.js?id=GTM-58X2P9V7" strategy="afterInteractive" />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
