'use client';

import { useTheme } from '../components/ThemeProvider';
import { TokenCard } from '../components/TokenCard';
import { Header } from '../components/Header';
import { Token } from '@/lib/types';

const sampleTokens: Token[] = [
  {
    id: 'ethereum',
    symbol: 'ETH',
    name: 'Ethereum',
    currentPriceUsd: 2450.32,
    priceChange24h: 125.45,
    priceChangePercentage24h: 5.4,
    marketCap: 294500000000,
  },
  {
    id: 'usd-coin',
    symbol: 'USDC',
    name: 'USD Coin',
    currentPriceUsd: 1.00,
    priceChange24h: -0.001,
    priceChangePercentage24h: -0.1,
    marketCap: 25600000000,
  },
  {
    id: 'based-brett',
    symbol: 'BRETT',
    name: 'Based Brett',
    currentPriceUsd: 0.1234,
    priceChange24h: -0.0045,
    priceChangePercentage24h: -3.5,
    marketCap: 123400000,
  },
];

export default function ThemePreviewPage() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: 'default', label: 'Finance Pro', description: 'Professional finance theme with gold accents' },
    { value: 'base', label: 'Base', description: 'Official Base blue theme' },
    { value: 'celo', label: 'Celo', description: 'Celo yellow theme with sharp borders' },
    { value: 'solana', label: 'Solana', description: 'Purple gradient Solana theme' },
    { value: 'coinbase', label: 'Coinbase', description: 'Coinbase navy theme' },
  ] as const;

  return (
    <main className="container mx-auto px-4 py-6 max-w-4xl">
      <Header />
      
      <div className="space-y-8">
        <div className="glass-card p-6">
          <h2 className="text-2xl font-bold text-textPrimary mb-4">Theme Preview</h2>
          <p className="text-textSecondary mb-6">
            Choose your preferred theme for BaseBoard. Each theme is optimized for different blockchain ecosystems.
          </p>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {themes.map((t) => (
              <button
                key={t.value}
                onClick={() => setTheme(t.value)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                  theme === t.value
                    ? 'border-accent bg-surface'
                    : 'border-gray-600 bg-surface hover:border-gray-500'
                }`}
              >
                <h3 className="font-semibold text-textPrimary mb-1">{t.label}</h3>
                <p className="text-sm text-textSecondary">{t.description}</p>
                {theme === t.value && (
                  <div className="mt-2 text-xs text-accent font-medium">
                    ✓ Currently Active
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-textPrimary">Sample Token Cards</h3>
          <div className="grid gap-4">
            {sampleTokens.map((token) => (
              <TokenCard key={token.id} token={token} />
            ))}
          </div>
        </div>

        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-textPrimary mb-4">Color Palette</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="w-full h-12 bg-bg rounded border border-gray-600"></div>
              <p className="text-xs text-textSecondary">Background</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-12 bg-surface rounded border border-gray-600"></div>
              <p className="text-xs text-textSecondary">Surface</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-12 bg-accent rounded"></div>
              <p className="text-xs text-textSecondary">Accent</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-12 bg-primary rounded"></div>
              <p className="text-xs text-textSecondary">Primary</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
