"use client"

import { CryptoCard } from "@/components/crypto-card"
import { useCrypto } from "@/context/crypto-context"

export function WatchlistContent() {
  const { watchlistCryptos } = useCrypto()

  if (watchlistCryptos.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-8 text-center">
        <h3 className="text-lg font-medium">Your watchlist is empty</h3>
        <p className="mt-1 text-sm text-muted-foreground">Add cryptocurrencies to your watchlist to track them here.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {watchlistCryptos.map((crypto) => (
        <CryptoCard key={crypto.id} crypto={crypto} />
      ))}
    </div>
  )
}
