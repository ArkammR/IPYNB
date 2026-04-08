import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'IPYNB Solutions | Bespoke Business Systems for Sri Lankan Enterprises',
  description: 'We architect custom POS systems, billing platforms, and business websites for Sri Lankan enterprises. Engineering-led. Lifetime ownership. 24/7 support.',
  keywords: 'POS system Sri Lanka, billing system, business website, custom software Sri Lanka, IPYNB Solutions',
  authors: [{ name: 'IPYNB.site' }],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'IPYNB.site - Sri Lanka\'s Business Solutions Hub',
    description: 'Premium Jupyter notebooks and business solutions for Sri Lankan enterprises',
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
  themeColor: '#1a472a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1a472a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="font-inter" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
