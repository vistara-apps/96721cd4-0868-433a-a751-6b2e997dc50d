'use client';

import { Header } from './components/Header';
import { PriceGrid } from './components/PriceGrid';
import { TrendingSection } from './components/TrendingSection';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-6 max-w-4xl">
      <Header />
      
      <div className="space-y-8">
        <PriceGrid />
        <TrendingSection />
      </div>
      
      <footer className="mt-12 text-center">
        <div className="glass-card p-4">
          <p className="text-textSecondary text-sm">
            Powered by CoinGecko API • Updates every 30 seconds
          </p>
          <p className="text-textSecondary text-xs mt-1">
            BaseBoard - Your real-time Base ecosystem token ticker
          </p>
        </div>
      </footer>
    </main>
  );
}
