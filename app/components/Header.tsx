'use client';

import { useTheme } from './ThemeProvider';
import { TrendingUp, Settings2 } from 'lucide-react';

export function Header() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: 'default', label: 'Finance Pro' },
    { value: 'base', label: 'Base' },
    { value: 'celo', label: 'Celo' },
    { value: 'solana', label: 'Solana' },
    { value: 'coinbase', label: 'Coinbase' },
  ] as const;

  return (
    <header className="glass-card p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-accent rounded-lg">
            <TrendingUp className="w-6 h-6 text-bg" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-textPrimary">BaseBoard</h1>
            <p className="text-sm text-textSecondary">Base Ecosystem Token Ticker</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Settings2 className="w-4 h-4 text-textSecondary" />
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as any)}
            className="bg-surface text-textPrimary border border-gray-600 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {themes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}
