'use client';

import { Token } from '@/lib/types';
import { formatPrice, formatPercentage } from '@/lib/api';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface TokenCardProps {
  token: Token;
  variant?: 'default';
}

export function TokenCard({ token, variant = 'default' }: TokenCardProps) {
  const isPositive = token.priceChangePercentage24h > 0;
  const isNegative = token.priceChangePercentage24h < 0;
  const isNeutral = token.priceChangePercentage24h === 0;

  const getPriceChangeColor = () => {
    if (isPositive) return 'price-positive';
    if (isNegative) return 'price-negative';
    return 'price-neutral';
  };

  const getTrendIcon = () => {
    if (isPositive) return <TrendingUp className="w-4 h-4" />;
    if (isNegative) return <TrendingDown className="w-4 h-4" />;
    return <Minus className="w-4 h-4" />;
  };

  return (
    <div className="metric-card animate-fade-in group hover:scale-[1.02] transition-transform duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center border border-gray-600">
            <span className="text-sm font-bold text-accent">
              {token.symbol.slice(0, 2)}
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-textPrimary group-hover:text-accent transition-colors duration-300">
              {token.symbol}
            </h3>
            <p className="text-sm text-textSecondary truncate max-w-[120px]">
              {token.name}
            </p>
          </div>
        </div>
        
        <div className="text-right">
          <div className="font-bold text-lg text-textPrimary">
            {formatPrice(token.currentPriceUsd)}
          </div>
          <div className={`flex items-center space-x-1 text-sm ${getPriceChangeColor()}`}>
            {getTrendIcon()}
            <span>{formatPercentage(token.priceChangePercentage24h)}</span>
          </div>
        </div>
      </div>
      
      {token.marketCap && (
        <div className="mt-3 pt-3 border-t border-gray-700">
          <div className="flex justify-between text-sm">
            <span className="text-textSecondary">Market Cap</span>
            <span className="text-textPrimary font-medium">
              {token.marketCap >= 1e9 
                ? `$${(token.marketCap / 1e9).toFixed(2)}B`
                : `$${(token.marketCap / 1e6).toFixed(2)}M`
              }
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
