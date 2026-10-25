import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'IPYNB Solutions | POS & Billing Systems in Sri Lanka',
  description: 'Custom POS, billing and inventory systems for Sri Lankan businesses. One-time payment, on-site setup and staff training, WhatsApp support.',
  keywords: 'POS system Sri Lanka, billing system, business website, custom software Sri Lanka, IPYNB Solutions',
  authors: [{ name: 'IPYNB Solutions' }],
  openGraph: {
    title: 'IPYNB Solutions | POS & Billing Systems in Sri Lanka',
    description: 'Custom POS, billing and inventory systems for Sri Lankan businesses. One-time payment.',
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
  themeColor: '#FAF9F6',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
