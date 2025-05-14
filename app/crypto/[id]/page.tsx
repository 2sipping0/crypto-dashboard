import { DashboardHeader } from "@/components/dashboard-header"
import { PriceChart } from "@/components/price-chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getCryptoById } from "@/lib/crypto-data"
import { formatCurrency, formatLargeNumber, formatPercentage } from "@/lib/utils"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CryptoActions } from "./crypto-actions"

interface CryptoDetailPageProps {
  params: {
    id: string
  }
}

export default function CryptoDetailPage({ params }: CryptoDetailPageProps) {
  const crypto = getCryptoById(params.id)

  if (!crypto) {
    notFound()
  }

  const isPriceUp = crypto.price_change_percentage_24h >= 0

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <DashboardHeader />
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <Link
              href="/"
              className="mb-4 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Dashboard
            </Link>

            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div className="flex items-center gap-3">
                <img src={crypto.image || "/placeholder.svg"} alt={crypto.name} className="h-12 w-12 rounded-full" />
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">{crypto.name}</h1>
                  <p className="text-lg text-muted-foreground">{crypto.symbol.toUpperCase()}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-3xl font-bold">{formatCurrency(crypto.current_price)}</p>
                  <p className={`text-sm ${isPriceUp ? "text-green-500" : "text-red-500"}`}>
                    {formatPercentage(crypto.price_change_percentage_24h)} (24h)
                  </p>
                </div>

                <CryptoActions cryptoId={crypto.id} />
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Market Cap</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatLargeNumber(crypto.market_cap)}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Volume (24h)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatLargeNumber(crypto.total_volume)}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Price Change (24h)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${isPriceUp ? "text-green-500" : "text-red-500"}`}>
                  {formatPercentage(crypto.price_change_percentage_24h)}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Tabs defaultValue="chart">
              <TabsList>
                <TabsTrigger value="chart">Price Chart</TabsTrigger>
                <TabsTrigger value="info">Information</TabsTrigger>
                <TabsTrigger value="markets">Markets</TabsTrigger>
              </TabsList>
              <TabsContent value="chart" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <PriceChart data={crypto} />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="info" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>About {crypto.name}</CardTitle>
                    <CardDescription>Overview and key information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        This is where the cryptocurrency description would appear. When you integrate with the CoinGecko
                        API, you can fetch and display detailed information about {crypto.name} here.
                      </p>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <h3 className="mb-2 font-semibold">Key Statistics</h3>
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span className="text-muted-foreground">Market Cap Rank</span>
                              <span>#{crypto.id === "bitcoin" ? "1" : crypto.id === "ethereum" ? "2" : "3"}</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-muted-foreground">Circulating Supply</span>
                              <span>19,000,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-muted-foreground">Max Supply</span>
                              <span>{crypto.id === "bitcoin" ? "21,000,000" : "∞"}</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="mb-2 font-semibold">Links</h3>
                          <ul className="space-y-2">
                            <li>
                              <a href="#" className="flex items-center text-blue-500 hover:underline">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Official Website
                              </a>
                            </li>
                            <li>
                              <a href="#" className="flex items-center text-blue-500 hover:underline">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Explorer
                              </a>
                            </li>
                            <li>
                              <a href="#" className="flex items-center text-blue-500 hover:underline">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Community
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="markets" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Markets</CardTitle>
                    <CardDescription>Where to buy and sell {crypto.name}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border">
                      <div className="grid grid-cols-4 border-b bg-muted/50 p-3 text-sm font-medium">
                        <div>Exchange</div>
                        <div>Pair</div>
                        <div>Price</div>
                        <div>Volume (24h)</div>
                      </div>
                      <div className="divide-y">
                        <div className="grid grid-cols-4 p-3">
                          <div>Binance</div>
                          <div>{crypto.symbol.toUpperCase()}/USDT</div>
                          <div>{formatCurrency(crypto.current_price)}</div>
                          <div>{formatLargeNumber(crypto.total_volume * 0.4)}</div>
                        </div>
                        <div className="grid grid-cols-4 p-3">
                          <div>Coinbase</div>
                          <div>{crypto.symbol.toUpperCase()}/USD</div>
                          <div>{formatCurrency(crypto.current_price * 1.001)}</div>
                          <div>{formatLargeNumber(crypto.total_volume * 0.3)}</div>
                        </div>
                        <div className="grid grid-cols-4 p-3">
                          <div>Kraken</div>
                          <div>{crypto.symbol.toUpperCase()}/EUR</div>
                          <div>{formatCurrency(crypto.current_price * 0.92)}</div>
                          <div>{formatLargeNumber(crypto.total_volume * 0.15)}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
