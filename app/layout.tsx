import type { Metadata, Viewport } from 'next';
import { Montserrat, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'EG&Co. | Everglow Gems Fine Jewelry',
    template: '%s | EG&Co. Everglow Gems',
  },
  description: 'Handcrafted luxury fine jewelry in 18k solid gold, 925 sterling silver, certified natural diamonds, and rare gemstones. Private appointments and bespoke atelier services.',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'EG&Co. | Everglow Gems Fine Jewelry',
    description: 'Bespoke fine jewelry, handcrafted with certified natural diamonds, rare colored gems, and 18k solid gold.',
    url: 'https://everglowgems.com',
    siteName: 'Everglow Gems',
    images: [
      {
        url: '/images/hero/hero-jewelry.jpg',
        width: 1200,
        height: 630,
        alt: 'Everglow Gems Fine Jewelry',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#FAFAF8',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorantGaramond.variable}`}>
      <body className="w-full min-h-screen bg-background text-text antialiased">
        {children}
      </body>
    </html>
  );
}
