'use client';

import { useState, useEffect } from 'react';
import { Token } from '@/lib/types';
import { fetchTokenPrices } from '@/lib/api';
import { TokenCard } from './TokenCard';
import { LoadingSpinner, TokenCardSkeleton } from './LoadingSpinner';
import { REFRESH_INTERVAL } from '@/lib/constants';
import { RefreshCw, AlertCircle } from 'lucide-react';

export function PriceGrid() {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const loadTokens = async (showRefreshing = false) => {
    try {
      if (showRefreshing) setRefreshing(true);
      const tokenData = await fetchTokenPrices();
      setTokens(tokenData);
      setLastUpdated(new Date());
      setError(null);
    } catch (err) {
      console.error('Failed to load tokens:', err);
      setError(err instanceof Error ? err.message : 'Failed to load token prices');
    } finally {
      setLoading(false);
      if (showRefreshing) setRefreshing(false);
    }
  };

  useEffect(() => {
    loadTokens();
    
    const interval = setInterval(() => {
      loadTokens(true);
    }, REFRESH_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    loadTokens(true);
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-textPrimary">Live Prices</h2>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm text-textSecondary">Loading...</span>
          </div>
        </div>
        <div className="grid gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <TokenCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass-card p-6 text-center">
        <AlertCircle className="w-12 h-12 text-negative mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-textPrimary mb-2">
          Failed to Load Prices
        </h3>
        <p className="text-textSecondary mb-4">{error}</p>
        <button
          onClick={handleRefresh}
          className="btn-primary"
          disabled={refreshing}
        >
          {refreshing ? 'Retrying...' : 'Try Again'}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-textPrimary">Live Prices</h2>
        <div className="flex items-center space-x-4">
          {lastUpdated && (
            <div className="flex items-center space-x-2 text-sm text-textSecondary">
              <div className="w-2 h-2 bg-positive rounded-full animate-pulse"></div>
              <span>
                Updated {lastUpdated.toLocaleTimeString()}
              </span>
            </div>
          )}
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="p-2 bg-surface hover:bg-gray-700 rounded-lg transition-colors duration-300 disabled:opacity-50"
            title="Refresh prices"
          >
            <RefreshCw className={`w-4 h-4 text-textSecondary ${refreshing ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>
      
      <div className="grid gap-4">
        {tokens.map((token) => (
          <TokenCard key={token.id} token={token} />
        ))}
      </div>
    </div>
  );
}
