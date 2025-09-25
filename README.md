# BaseBoard - Base Ecosystem Token Ticker

Your real-time Base ecosystem token ticker for Farcaster and Base Wallet.

## Features

- **Live Price Ticker**: Real-time prices for popular Base ecosystem tokens
- **Token Discovery**: Trending tokens within the Base ecosystem
- **Professional Finance Theme**: Wall Street meets crypto aesthetic
- **Multi-Theme Support**: Base, Celo, Solana, and Coinbase themes
- **Mobile Optimized**: Perfect for in-frame viewing
- **Auto-Refresh**: Prices update every 30 seconds

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: OnchainKit for Base integration
- **Styling**: Tailwind CSS with custom design system
- **Data**: CoinGecko API for live price feeds
- **TypeScript**: Full type safety throughout

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set environment variables:
   ```
   NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key
   ```
4. Run development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

## API Integration

BaseBoard uses the CoinGecko API to fetch:
- Live token prices and 24h changes
- Market cap and volume data
- Trending token information

## Theme System

BaseBoard supports multiple themes optimized for different blockchain ecosystems:
- **Finance Pro**: Professional gold-accented theme (default)
- **Base**: Official Base blue theme
- **Celo**: Yellow-accented theme with sharp borders
- **Solana**: Purple gradient theme
- **Coinbase**: Navy blue corporate theme

Visit `/theme-preview` to see all available themes.

## Deployment

The app is optimized for deployment on Vercel and other Next.js-compatible platforms.

## License

MIT License - see LICENSE file for details.
