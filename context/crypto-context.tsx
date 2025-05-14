"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { cryptoData } from "@/lib/crypto-data"

type Crypto = (typeof cryptoData)[0]

interface WatchlistItem {
  id: string
  dateAdded: Date
}

interface CryptoContextType {
  watchlist: string[]
  addToWatchlist: (id: string) => void
  removeFromWatchlist: (id: string) => void
  isInWatchlist: (id: string) => boolean
  watchlistCryptos: Crypto[]
  walletConnected: boolean
  connectWallet: () => void
  disconnectWallet: () => void
}

const CryptoContext = createContext<CryptoContextType | undefined>(undefined)

export function CryptoProvider({ children }: { children: ReactNode }) {
  const [watchlist, setWatchlist] = useState<string[]>([])
  const [walletConnected, setWalletConnected] = useState(false)

  // Load watchlist from localStorage on mount
  useEffect(() => {
    try {
      const savedWatchlist = localStorage.getItem("crypto-watchlist")
      if (savedWatchlist) {
        setWatchlist(JSON.parse(savedWatchlist))
      }
    } catch (error) {
      console.error("Failed to load watchlist from localStorage:", error)
    }
  }, [])

  // Save watchlist to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem("crypto-watchlist", JSON.stringify(watchlist))
    } catch (error) {
      console.error("Failed to save watchlist to localStorage:", error)
    }
  }, [watchlist])

  const addToWatchlist = (id: string) => {
    if (!watchlist.includes(id)) {
      setWatchlist([...watchlist, id])
    }
  }

  const removeFromWatchlist = (id: string) => {
    setWatchlist(watchlist.filter((item) => item !== id))
  }

  const isInWatchlist = (id: string) => {
    return watchlist.includes(id)
  }

  const watchlistCryptos = cryptoData.filter((crypto) => watchlist.includes(crypto.id))

  const connectWallet = () => {
    setWalletConnected(true)
    // In a real app, this would connect to a wallet provider
  }

  const disconnectWallet = () => {
    setWalletConnected(false)
    // In a real app, this would disconnect from the wallet provider
  }

  return (
    <CryptoContext.Provider
      value={{
        watchlist,
        addToWatchlist,
        removeFromWatchlist,
        isInWatchlist,
        watchlistCryptos,
        walletConnected,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </CryptoContext.Provider>
  )
}

export function useCrypto() {
  const context = useContext(CryptoContext)
  if (context === undefined) {
    throw new Error("useCrypto must be used within a CryptoProvider")
  }
  return context
}
