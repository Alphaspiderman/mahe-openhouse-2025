import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import Image from 'next/image';

import InstallButton from '@/components/install-button';

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
  openGraph: {
    type: 'website',
    title: 'MAHE Open House 2025',
    description: 'The complete Open House schedule for MIT Bengaluru.',
    url: 'https://mit-openhouse.alphaspiderman.dev',
  },
};

const fontSans = Work_Sans({
  subsets: ['latin'],
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${fontSans.className} antialiased`}>
        <header className="m-4 flex items-center justify-between">
          <div className="space-y-2">
            <Image
              src={bannerInstitute}
              alt="Institute Banner"
              className="w-24 invert"
              priority
            />
            <Image
              src={bannerLogo}
              alt="Logo Banner"
              className="w-36 invert"
              priority
            />
          </div>

          <InstallButton />
        </header>
        <main className="mx-4 my-8 lg:mx-10">{children}</main>
        <footer className="m-4 items-start font-semibold tracking-tight uppercase">
          Built with 💖, by
          <br />
          <a
            href="https://linkedin.com/in/abhigyantrips"
            className="font-bold underline decoration-1 underline-offset-2 hover:decoration-2"
          >
            Abhigyan Trips
          </a>{' '}
          and{' '}
          <a
            href="https://linkedin.com/in/raghav-gupta-ind"
            className="font-bold underline decoration-1 underline-offset-2 hover:decoration-2"
          >
            Raghav Gupta
          </a>
          .
        </footer>
      </body>
    </html>
  );
}
