import { Token, CoinGeckoPrice, CoinGeckoMarket } from './types';
import { BASE_TOKENS, API_ENDPOINTS } from './constants';

class ApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'ApiError';
  }
}

export async function fetchTokenPrices(): Promise<Token[]> {
  try {
    const tokenIds = BASE_TOKENS.map(token => token.id).join(',');
    const url = `${API_ENDPOINTS.COINGECKO_SIMPLE_PRICE}?ids=${tokenIds}&vs_currencies=usd&include_24hr_change=true`;
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new ApiError(`Failed to fetch prices: ${response.statusText}`, response.status);
    }

    const data: CoinGeckoPrice = await response.json();
    
    return BASE_TOKENS.map(token => {
      const priceData = data[token.id];
      return {
        id: token.id,
        symbol: token.symbol.toUpperCase(),
        name: token.name,
        address: token.address,
        currentPriceUsd: priceData?.usd || 0,
        priceChange24h: priceData?.usd_24h_change || 0,
        priceChangePercentage24h: priceData?.usd_24h_change || 0,
        lastUpdated: new Date().toISOString(),
      };
    });
  } catch (error) {
    console.error('Error fetching token prices:', error);
    throw error instanceof ApiError ? error : new ApiError('Failed to fetch token prices');
  }
}

export async function fetchTrendingTokens(): Promise<Token[]> {
  try {
    const url = `${API_ENDPOINTS.COINGECKO_MARKETS}?vs_currency=usd&order=volume_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new ApiError(`Failed to fetch trending tokens: ${response.statusText}`, response.status);
    }

    const data: CoinGeckoMarket[] = await response.json();
    
    return data.map(token => ({
      id: token.id,
      symbol: token.symbol.toUpperCase(),
      name: token.name,
      currentPriceUsd: token.current_price,
      priceChange24h: token.price_change_24h,
      priceChangePercentage24h: token.price_change_percentage_24h,
      marketCap: token.market_cap,
      volume24h: token.total_volume,
      image: token.image,
      lastUpdated: token.last_updated,
    }));
  } catch (error) {
    console.error('Error fetching trending tokens:', error);
    throw error instanceof ApiError ? error : new ApiError('Failed to fetch trending tokens');
  }
}

export function formatPrice(price: number): string {
  if (price === 0) return '$0.00';
  
  if (price < 0.01) {
    return `$${price.toFixed(6)}`;
  } else if (price < 1) {
    return `$${price.toFixed(4)}`;
  } else if (price < 100) {
    return `$${price.toFixed(2)}`;
  } else {
    return `$${price.toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    })}`;
  }
}

export function formatPercentage(percentage: number): string {
  const sign = percentage >= 0 ? '+' : '';
  return `${sign}${percentage.toFixed(2)}%`;
}

export function formatMarketCap(marketCap: number): string {
  if (marketCap >= 1e12) {
    return `$${(marketCap / 1e12).toFixed(2)}T`;
  } else if (marketCap >= 1e9) {
    return `$${(marketCap / 1e9).toFixed(2)}B`;
  } else if (marketCap >= 1e6) {
    return `$${(marketCap / 1e6).toFixed(2)}M`;
  } else if (marketCap >= 1e3) {
    return `$${(marketCap / 1e3).toFixed(2)}K`;
  } else {
    return `$${marketCap.toFixed(2)}`;
  }
}
