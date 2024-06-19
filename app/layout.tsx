import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import Footer from '^/shared/footer';
import { COPYRIGHT } from '^/shared/footer/text';
import Header from '^/shared/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextM',
  description: 'Practicing Next.js 14 more effectively using Marvel APIs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col items-center justify-between`}
      >
        <Header>
          <span>NextM</span>
          <span>NextM</span>
          <span>NextM</span>
        </Header>
        {children}
        <Footer>{COPYRIGHT}</Footer>
      </body>
    </html>
  );
}
