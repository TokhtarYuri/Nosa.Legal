import React from 'react';
import './globals.css';
import { Roboto } from 'next/font/google';
import I18nextProviderWrapper from './components/I18nextProviderWrapper/I18nextProviderWrapper';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Nosa Legal',
  description: 'Law office in Slovakia',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Nosa Legal</title>
        <meta name="description" content="Law office in Slovakia" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={roboto.className}>
        <I18nextProviderWrapper>
          {children}
        </I18nextProviderWrapper>
      </body>
    </html>
  );
}
