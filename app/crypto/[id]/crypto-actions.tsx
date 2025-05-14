"use client"

import { Button } from "@/components/ui/button"
import { useCrypto } from "@/context/crypto-context"
import { Star } from "lucide-react"

export function CryptoActions({ cryptoId }: { cryptoId: string }) {
  const { isInWatchlist, addToWatchlist, removeFromWatchlist, walletConnected } = useCrypto()
  const isWatchlisted = isInWatchlist(cryptoId)

  const handleWatchlistToggle = () => {
    if (isWatchlisted) {
      removeFromWatchlist(cryptoId)
    } else {
      addToWatchlist(cryptoId)
    }
  }

  return (
    <div className="flex gap-2">
      <Button
        variant={isWatchlisted ? "default" : "outline"}
        onClick={handleWatchlistToggle}
        className={isWatchlisted ? "bg-yellow-500 hover:bg-yellow-600" : ""}
      >
        <Star className={`mr-2 h-4 w-4 ${isWatchlisted ? "fill-white" : ""}`} />
        {isWatchlisted ? "Watchlisted" : "Add to Watchlist"}
      </Button>

      {walletConnected && <Button>Buy</Button>}
    </div>
  )
}
