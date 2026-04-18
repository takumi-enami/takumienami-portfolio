import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Cormorant_Garamond, Manrope } from 'next/font/google';

import './globals.css';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Takumi Enami Portfolio',
  description: '実務フローに沿ったアプリ開発と業務改善のためのポートフォリオサイト。',
};

export const viewport: Viewport = {
  themeColor: '#f5f3ee',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        <div className="page-shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
