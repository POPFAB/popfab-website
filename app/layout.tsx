import type { Metadata } from 'next';
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
  title: 'POPFAB — Payment Orchestration for African Businesses',
  description:
    'One API to route payments across Paystack, Flutterwave, Monnify, Squad, Interswitch, and Payaza. Automatic failover, smart routing, and unified analytics. CBN PSSP licensed.',
  keywords:
    'payment orchestration, Nigeria, Africa, Paystack, Flutterwave, Monnify, Squad, Interswitch, payment API, CBN PSSP',
  openGraph: {
    title: 'POPFAB — Payment Orchestration for African Businesses',
    description:
      'One API. Every payment provider in Africa. Automatic failover in <800ms, +8pp success rate, unified analytics.',
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
      <body className="min-h-screen flex flex-col bg-white text-[#0a0f1e]">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
