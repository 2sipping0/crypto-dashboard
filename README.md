# Crypto Dashboard

A modern, responsive web application for tracking cryptocurrency prices, trends, and creating personal watchlists.


## Features

- **Comprehensive Crypto Data**: View detailed information about multiple cryptocurrencies
- **Real-time Price Charts**: Visualize price trends with interactive charts
- **Personalized Watchlists**: Save your favorite cryptocurrencies for quick access
- **Trending Cryptocurrencies**: Discover popular and trending crypto assets
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Fast Search**: Quickly find specific cryptocurrencies from the database

## Tech Stack

- **Framework**: Next.js 15
- **UI Library**: React 19
- **Styling**: Tailwind CSS with shadcn/ui components
- **Charts**: Recharts for data visualization
- **State Management**: React hooks
- **Form Handling**: React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js 18.0 or newer

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/2sipping0/crypto-dashboard.git
   cd crypto-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
├── components/             # Reusable UI components
│   ├── crypto-card.tsx     # Individual cryptocurrency card
│   ├── dashboard-header.tsx # Main dashboard header
│   ├── price-chart.tsx     # Chart visualization component
│   ├── search-bar.tsx      # Search functionality
│   └── ui/                 # shadcn/ui components
├── lib/                    # Utility functions and data fetching
│   └── crypto-data.ts      # Functions to get cryptocurrency data
├── app/                    # Next.js App Router
│   ├── page.tsx            # Main dashboard page
│   └── watchlist-content.tsx # Watchlist tab content
├── public/                 # Static assets
└── styles/                 # Global styles
```

## Usage

### Dashboard Navigation

The dashboard consists of three main tabs:

1. **All Cryptocurrencies**: Browse all available cryptocurrencies
2. **My Watchlist**: View cryptocurrencies you've added to your watchlist
3. **Trending**: See currently trending cryptocurrencies

### Search Functionality

Use the search bar at the top of the page to quickly find specific cryptocurrencies by name or symbol.

### Market Overview

The Market Overview section provides a detailed price chart for the selected cryptocurrency.

## Development

### Building for Production

To create a production build:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

### Code Linting

To run the linter:

```bash
npm run lint
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Charts powered by [Recharts](https://recharts.org/)