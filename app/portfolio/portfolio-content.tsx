"use client"
import { useCrypto } from "@/context/crypto-context"
import { useState } from "react"

export function PortfolioContent() {
  const { walletConnected } = useCrypto()
  const [showAddAsset, setShowAddAsset] = useState(false)
  
  // Mock portfolio data
  const portfolioAssets = [
    {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      amount: 0.45,
      value: 27642.74,
      change: 2.34,
      percentage: 45,
      image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
    },
    {
      id: "ethereum",
      name: "Ethereum",
      symbol: "ETH",
      amount: 3.2,
      value: 10972,
      change: 1.45,
      percentage: 32,
      image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png"
    }
  ]

  return (
    <div className="portfolio-container">
      {walletConnected ? (
        <>
          <h2>Your Portfolio</h2>
          {portfolioAssets.length > 0 ? (
            <div className="assets-list">
              {portfolioAssets.map(asset => (
                <div key={asset.id} className="asset-item">
                  <img src={asset.image} alt={asset.name} className="asset-icon" />
                  <div className="asset-details">
                    <h3>{asset.name} ({asset.symbol})</h3>
                    <p>Amount: {asset.amount}</p>
                    <p>Value: ${asset.value.toLocaleString()}</p>
                    <p className={asset.change >= 0 ? "positive-change" : "negative-change"}>
                      24h: {asset.change >= 0 ? "+" : ""}{asset.change}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No assets in your portfolio yet.</p>
          )}
          <button 
            className="add-asset-btn"
            onClick={() => setShowAddAsset(true)}
          >
            Add Asset
          </button>
          {showAddAsset && (
            <div className="add-asset-modal">
              {/* Add asset form would go here */}
              <button onClick={() => setShowAddAsset(false)}>Close</button>
            </div>
          )}
        </>
      ) : (
        <div className="connect-wallet-prompt">
          <p>Connect your wallet to view your portfolio</p>
        </div>
      )}
    </div>
  )
}