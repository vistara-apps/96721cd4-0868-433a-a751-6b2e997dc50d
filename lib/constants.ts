// Base ecosystem tokens for tracking
export const BASE_TOKENS = [
  {
    id: 'ethereum',
    symbol: 'ETH',
    name: 'Ethereum',
    address: '0x4200000000000000000000000000000000000006',
  },
  {
    id: 'usd-coin',
    symbol: 'USDC',
    name: 'USD Coin',
    address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
  },
  {
    id: 'coinbase-wrapped-staked-eth',
    symbol: 'cbETH',
    name: 'Coinbase Wrapped Staked ETH',
    address: '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22',
  },
  {
    id: 'aerodrome-finance',
    symbol: 'AERO',
    name: 'Aerodrome Finance',
    address: '0x940181a94A35A4569E4529A3CDfB74e38FD98631',
  },
  {
    id: 'based-brett',
    symbol: 'BRETT',
    name: 'Based Brett',
    address: '0x532f27101965dd16442E59d40670FaF5eBB142E4',
  },
  {
    id: 'higher',
    symbol: 'HIGHER',
    name: 'Higher',
    address: '0x0578d8A44db98B23BF096A382e016e29a5Ce0ffe',
  },
  {
    id: 'degen-base',
    symbol: 'DEGEN',
    name: 'Degen',
    address: '0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed',
  },
  {
    id: 'seamless-protocol',
    symbol: 'SEAM',
    name: 'Seamless Protocol',
    address: '0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85',
  },
];

export const API_ENDPOINTS = {
  COINGECKO_SIMPLE_PRICE: 'https://api.coingecko.com/api/v3/simple/price',
  COINGECKO_MARKETS: 'https://api.coingecko.com/api/v3/coins/markets',
  COINGECKO_TRENDING: 'https://api.coingecko.com/api/v3/search/trending',
} as const;

export const REFRESH_INTERVAL = 30000; // 30 seconds
export const CACHE_DURATION = 60000; // 1 minute
