import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'IPYNB.site | Sri Lanka\'s Premier Jupyter Notebook & Business Solutions',
  description: 'Discover premium Jupyter notebooks, POS systems, billing solutions, and business websites crafted for Sri Lankan enterprises. 500+ businesses trust us. 24/7 support.',
  keywords: 'Jupyter notebooks, POS systems, billing solutions, business websites, Sri Lanka',
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
      <body className="font-inter">
        {children}
      </body>
    </html>
  );
}
