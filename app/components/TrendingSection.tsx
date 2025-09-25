'use client';

import { useState, useEffect } from 'react';
import { Token } from '@/lib/types';
import { fetchTrendingTokens } from '@/lib/api';
import { TokenCard } from './TokenCard';
import { LoadingSpinner } from './LoadingSpinner';
import { Fire, AlertCircle } from 'lucide-react';

export function TrendingSection() {
  const [trendingTokens, setTrendingTokens] = useState<Token[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTrendingTokens = async () => {
      try {
        const tokens = await fetchTrendingTokens();
        setTrendingTokens(tokens.slice(0, 5)); // Show top 5 trending
        setError(null);
      } catch (err) {
        console.error('Failed to load trending tokens:', err);
        setError(err instanceof Error ? err.message : 'Failed to load trending tokens');
      } finally {
        setLoading(false);
      }
    };

    loadTrendingTokens();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Fire className="w-5 h-5 text-accent" />
          <h2 className="text-xl font-bold text-textPrimary">Trending</h2>
        </div>
        <LoadingSpinner text="Loading trending tokens..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Fire className="w-5 h-5 text-accent" />
          <h2 className="text-xl font-bold text-textPrimary">Trending</h2>
        </div>
        <div className="glass-card p-4 text-center">
          <AlertCircle className="w-8 h-8 text-negative mx-auto mb-2" />
          <p className="text-textSecondary text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Fire className="w-5 h-5 text-accent" />
        <h2 className="text-xl font-bold text-textPrimary">Trending</h2>
      </div>
      
      <div className="grid gap-4">
        {trendingTokens.map((token, index) => (
          <div key={token.id} className="relative">
            <div className="absolute -left-2 -top-2 w-6 h-6 bg-accent text-bg rounded-full flex items-center justify-center text-xs font-bold z-10">
              {index + 1}
            </div>
            <TokenCard token={token} />
          </div>
        ))}
      </div>
    </div>
  );
}
