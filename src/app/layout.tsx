import type { Metadata } from 'next';
import Image from 'next/image';

import bannerInstitute from '@/assets/banner-institute.webp';
import bannerLogo from '@/assets/banner-logo.webp';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'MAHE Open House 2025',
  description: 'The complete Open House schedule for MIT Bengaluru.',
  appleWebApp: {
    title: 'Open House',
    statusBarStyle: 'black-translucent',
    capable: true,
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased">
        <header className="m-4 items-start space-y-2">
          <Image
            src={bannerInstitute}
            alt="Institute Banner"
            className="w-24"
            priority
          />
          <Image src={bannerLogo} alt="Logo Banner" className="w-36" priority />
        </header>
        <main className="mx-10">{children}</main>
      </body>
    </html>
  );
}
