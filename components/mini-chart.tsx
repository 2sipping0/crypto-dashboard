"use client"

interface MiniChartProps {
  data: number[]
  isPositive: boolean
  height?: number
}

export function MiniChart({ data, isPositive, height = 60 }: MiniChartProps) {
  // Find min and max for scaling
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min

  return (
    <div className="w-full" style={{ height: `${height}px` }}>
      <div className="flex h-full items-end space-x-0.5">
        {data.map((value, index) => {
          const barHeight = range ? ((value - min) / range) * 100 : 50

          return (
            <div key={index} className="flex-1" style={{ height: `${Math.max(5, barHeight)}%` }}>
              <div className={`w-full h-full ${isPositive ? "bg-green-500/20" : "bg-red-500/20"}`}></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
