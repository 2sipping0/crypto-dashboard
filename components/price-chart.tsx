"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PriceChartProps {
  data: {
    id: string
    name: string
    symbol: string
    current_price: number
    timeframes: {
      "24h": number[]
      "7d": number[]
      "30d": number[]
      "1y": number[]
    }
  }
}

export function PriceChart({ data }: PriceChartProps) {
  const [timeframe, setTimeframe] = useState<"24h" | "7d" | "30d" | "1y">("24h")

  // Format price for display
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: price < 1 ? 4 : 2,
      maximumFractionDigits: price < 1 ? 6 : 2,
    }).format(price)
  }

  // Calculate price change
  const priceData = data.timeframes[timeframe]
  const firstPrice = priceData[0]
  const lastPrice = priceData[priceData.length - 1]
  const priceChange = ((lastPrice - firstPrice) / firstPrice) * 100
  const isPriceUp = priceChange >= 0

  return (
    <div>
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-lg font-semibold">{data.name} Price Chart</h3>
          <p className="text-sm text-muted-foreground">{data.symbol.toUpperCase()}/USD</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex">
            <Button
              variant={timeframe === "24h" ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeframe("24h")}
              className="rounded-r-none"
            >
              24H
            </Button>
            <Button
              variant={timeframe === "7d" ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeframe("7d")}
              className="rounded-none border-l-0"
            >
              7D
            </Button>
            <Button
              variant={timeframe === "30d" ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeframe("30d")}
              className="rounded-none border-l-0"
            >
              30D
            </Button>
            <Button
              variant={timeframe === "1y" ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeframe("1y")}
              className="rounded-l-none border-l-0"
            >
              1Y
            </Button>
          </div>
          <Select defaultValue="line">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Chart Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="line">Line Chart</SelectItem>
              <SelectItem value="candle">Candlestick</SelectItem>
              <SelectItem value="bar">Bar Chart</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="relative">
        {/* Simplified chart visualization */}
        <div className="rounded-lg border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Current Price</p>
              <p className="text-2xl font-bold">{formatPrice(data.current_price)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Price Change ({timeframe})</p>
              <p className={`text-lg font-semibold ${isPriceUp ? "text-green-500" : "text-red-500"}`}>
                {isPriceUp ? "+" : ""}
                {priceChange.toFixed(2)}%
              </p>
            </div>
          </div>

          {/* Simple price visualization */}
          <div className="h-[300px] w-full">
            <div className="flex h-full items-end space-x-1">
              {data.timeframes[timeframe].map((price, index) => {
                const min = Math.min(...data.timeframes[timeframe])
                const max = Math.max(...data.timeframes[timeframe])
                const range = max - min
                const height = range ? ((price - min) / range) * 100 : 50

                return (
                  <div key={index} className="flex-1" style={{ height: `${Math.max(5, height)}%` }}>
                    <div
                      className={`w-full h-full ${isPriceUp ? "bg-green-500/20" : "bg-red-500/20"} 
                                 ${isPriceUp ? "border-t-2 border-green-500" : "border-t-2 border-red-500"}`}
                    ></div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Time labels */}
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            {timeframe === "24h" ? (
              <>
                <span>00:00</span>
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
                <span>Now</span>
              </>
            ) : timeframe === "7d" ? (
              <>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </>
            ) : timeframe === "30d" ? (
              <>
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
                <span>Now</span>
              </>
            ) : (
              <>
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
                <span>Jul</span>
                <span>Sep</span>
                <span>Nov</span>
                <span>Now</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
