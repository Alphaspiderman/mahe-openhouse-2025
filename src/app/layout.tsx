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
        <footer className="m-4 items-start font-bold uppercase">
          Built with 💖, <br /> Team{' '}
          <a
            href="https://github.com/Alphaspiderman/mahe-openhouse-2025"
            className="underline decoration-2 underline-offset-2"
          >
            Whitespace as a Service
          </a>
          .
        </footer>
      </body>
    </html>
  );
}
