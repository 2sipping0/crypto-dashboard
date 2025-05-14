import { CryptoCard } from "@/components/crypto-card"
import { DashboardHeader } from "@/components/dashboard-header"
import { PriceChart } from "@/components/price-chart"
import { SearchBar } from "@/components/search-bar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAllCryptos } from "@/lib/crypto-data"
import { WatchlistContent } from "./watchlist-content"

export default function Home() {
  // Get data synchronously - no async/await in the component
  const cryptoData = getAllCryptos()

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <DashboardHeader />
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Crypto Dashboard</h1>
            <SearchBar
              cryptoIds={cryptoData.map((crypto) => ({
                id: crypto.id,
                name: crypto.name,
                symbol: crypto.symbol,
                image: crypto.image,
              }))}
            />
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList>
              <TabsTrigger value="all">All Cryptocurrencies</TabsTrigger>
              <TabsTrigger value="watchlist">My Watchlist</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cryptoData.map((crypto) => (
                  <CryptoCard key={crypto.id} crypto={crypto} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="watchlist" className="mt-4">
              <WatchlistContent />
            </TabsContent>
            <TabsContent value="trending" className="mt-4">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cryptoData.slice(0, 3).map((crypto) => (
                  <CryptoCard key={crypto.id} crypto={crypto} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight">Market Overview</h2>
            <div className="rounded-lg border bg-card p-6">
              <PriceChart data={cryptoData[0]} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
