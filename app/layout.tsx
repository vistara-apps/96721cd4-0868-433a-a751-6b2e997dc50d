import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { ThemeProvider } from './components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BaseBoard - Base Ecosystem Token Ticker',
  description: 'Your real-time Base ecosystem token ticker. Track live prices for top Base tokens.',
  keywords: ['Base', 'crypto', 'tokens', 'prices', 'DeFi', 'blockchain'],
  authors: [{ name: 'BaseBoard Team' }],
  openGraph: {
    title: 'BaseBoard - Base Ecosystem Token Ticker',
    description: 'Your real-time Base ecosystem token ticker',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BaseBoard - Base Ecosystem Token Ticker',
    description: 'Your real-time Base ecosystem token ticker',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Providers>
            <div className="min-h-screen bg-bg">
              {children}
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
