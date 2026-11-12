import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Developers | POPFAB payments API',
  description: 'Explore POPFAB’s payment API, SDK examples, sandbox workflow and webhook integration guide.',
  openGraph: {
    title: 'Build with POPFAB',
    description: 'Developer documentation and API examples for POPFAB payment orchestration.',
  },
};

export default function DevelopersLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
