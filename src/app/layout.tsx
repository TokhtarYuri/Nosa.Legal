// src/app/layout.tsx
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <I18nextProviderWrapper>
          {children}
        </I18nextProviderWrapper>
      </body>
    </html>
  );
} 