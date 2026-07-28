import type { Metadata, Viewport } from 'next';
import './globals.css';
import SiteBackground from '@/components/SiteBackground';

export const metadata: Metadata = {
  title: 'IPYNB Solutions | Custom Business Systems for Sri Lankan Enterprises',
  description: 'We architect custom POS systems, billing platforms, and business websites for Sri Lankan enterprises. Engineering-led. Lifetime ownership. 24/7 support.',
  keywords: 'POS system Sri Lanka, billing system, business website, custom software Sri Lanka, IPYNB Solutions',
  authors: [{ name: 'IPYNB Solutions' }],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'IPYNB Solutions — Custom Business Systems for Sri Lankan Enterprises',
    description: 'Custom-built POS systems, billing platforms, and business websites for Sri Lankan enterprises. Engineering-led. Lifetime ownership. 24/7 WhatsApp support.',
    type: 'website',
    locale: 'en_US',
  },
  verification: {
    google: '4jfUECXEsy9Rvp5gIVVnf40jbf57rDGH2tpdEb4rk-I',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#6366F1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#6366F1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="font-sans relative" suppressHydrationWarning>
        {/* Global animated background — fixed behind everything */}
        <SiteBackground />
        {/* Page content sits above z-0 */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
