"use client"

import { ArrowDown, ArrowUp, ExternalLink, Star } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MiniChart } from "@/components/mini-chart"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useCrypto } from "@/context/crypto-context"
import { formatCurrency, formatLargeNumber } from "@/lib/utils"

interface CryptoCardProps {
  crypto: {
    id: string
    name: string
    symbol: string
    current_price: number
    price_change_percentage_24h: number
    market_cap: number
    total_volume: number
    image: string
    sparkline: number[]
  }
}

export function CryptoCard({ crypto }: CryptoCardProps) {
  const { isInWatchlist, addToWatchlist, removeFromWatchlist } = useCrypto()
  const isWatchlisted = isInWatchlist(crypto.id)

  const isPriceUp = crypto.price_change_percentage_24h >= 0

  const handleWatchlistToggle = () => {
    if (isWatchlisted) {
      removeFromWatchlist(crypto.id)
    } else {
      addToWatchlist(crypto.id)
    }
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <img src={crypto.image || "/placeholder.svg"} alt={crypto.name} className="h-8 w-8 rounded-full" />
          <div>
            <h3 className="font-semibold">{crypto.name}</h3>
            <p className="text-sm text-muted-foreground">{crypto.symbol.toUpperCase()}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleWatchlistToggle}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Star className={`h-5 w-5 ${isWatchlisted ? "fill-yellow-400 text-yellow-400" : ""}`} />
                  <span className="sr-only">{isWatchlisted ? "Remove from watchlist" : "Add to watchlist"}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isWatchlisted ? "Remove from watchlist" : "Add to watchlist"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <Link href={`/crypto/${crypto.id}`}>
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">View details</span>
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View details</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-baseline justify-between">
          <div className="text-2xl font-bold">{formatCurrency(crypto.current_price)}</div>
          <div className={`flex items-center gap-1 text-sm ${isPriceUp ? "text-green-500" : "text-red-500"}`}>
            {isPriceUp ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
            {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
          </div>
        </div>
        <MiniChart data={crypto.sparkline} isPositive={isPriceUp} />
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-4 border-t px-6 py-3">
        <div className="text-center">
          <p className="text-xs text-muted-foreground">Market Cap</p>
          <p className="text-sm font-medium">{formatLargeNumber(crypto.market_cap)}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted-foreground">Volume (24h)</p>
          <p className="text-sm font-medium">{formatLargeNumber(crypto.total_volume)}</p>
        </div>
      </CardFooter>
    </Card>
  )
}
