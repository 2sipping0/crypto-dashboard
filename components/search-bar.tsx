"use client"

import type React from "react"

import { Search, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { searchCryptos } from "@/lib/crypto-data"

interface SearchBarProps {
  cryptoIds?: Array<{
    id: string
    name: string
    symbol: string
    image: string
  }>
}

export function SearchBar({ cryptoIds = [] }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [showResults, setShowResults] = useState(false)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      setShowResults(true)
    }
  }

  const handleSelect = (cryptoId: string) => {
    setShowResults(false)
    setQuery("")
    router.push(`/crypto/${cryptoId}`)
  }

  // Use the search function from our crypto-data lib
  const filteredResults = query.trim() ? searchCryptos(query) : []

  return (
    <div className="relative w-full sm:w-72 md:w-80">
      <form onSubmit={handleSearch} className="relative">
        <Input
          type="search"
          placeholder="Search cryptocurrencies..."
          className="pr-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim() && setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
        />
        {query && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-8 top-0 h-full px-3"
            onClick={() => {
              setQuery("")
            }}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Clear search</span>
          </Button>
        )}
        <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-full px-3">
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
      </form>

      {showResults && filteredResults.length > 0 && (
        <div className="absolute z-10 mt-1 w-full rounded-md border bg-background p-2 shadow-lg">
          <ul className="max-h-60 overflow-auto">
            {filteredResults.map((crypto) => (
              <li
                key={crypto.id}
                className="cursor-pointer rounded-md p-2 hover:bg-accent"
                onClick={() => handleSelect(crypto.id)}
              >
                <div className="flex items-center gap-2">
                  <img src={crypto.image || "/placeholder.svg"} alt={crypto.name} className="h-6 w-6 rounded-full" />
                  <div>
                    <p className="font-medium">{crypto.name}</p>
                    <p className="text-xs text-muted-foreground">{crypto.symbol.toUpperCase()}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
