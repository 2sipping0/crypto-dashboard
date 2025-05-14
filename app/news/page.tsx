import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <DashboardHeader />
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Crypto News</h1>
            <p className="text-muted-foreground">Stay updated with the latest cryptocurrency news and insights</p>
          </div>

          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All News</TabsTrigger>
              <TabsTrigger value="bitcoin">Bitcoin</TabsTrigger>
              <TabsTrigger value="ethereum">Ethereum</TabsTrigger>
              <TabsTrigger value="defi">DeFi</TabsTrigger>
              <TabsTrigger value="nft">NFTs</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">
                      Bitcoin Surges Past $60,000 as Institutional Adoption Grows
                    </CardTitle>
                    <CardDescription>May 13, 2025 • 5 min read</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 h-40 overflow-hidden rounded-md bg-muted">
                      <img
                        src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400"
                        alt="Bitcoin chart showing upward trend"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      Bitcoin has surged past $60,000 as institutional adoption continues to grow. Major financial
                      institutions are increasingly adding Bitcoin to their balance sheets, driving up demand for the
                      cryptocurrency.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Ethereum 2.0 Upgrade: What You Need to Know</CardTitle>
                    <CardDescription>May 12, 2025 • 8 min read</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 h-40 overflow-hidden rounded-md bg-muted">
                      <img
                        src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400"
                        alt="Ethereum logo with network visualization"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      The Ethereum 2.0 upgrade is set to revolutionize the network with improved scalability, security,
                      and sustainability. This comprehensive guide explains what you need to know about the upcoming
                      changes.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">DeFi Market Cap Reaches New All-Time High</CardTitle>
                    <CardDescription>May 11, 2025 • 6 min read</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 h-40 overflow-hidden rounded-md bg-muted">
                      <img
                        src="https://images.unsplash.com/photo-1639152201720-5e536d254d81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400"
                        alt="DeFi dashboard with charts and metrics"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      The decentralized finance (DeFi) market cap has reached a new all-time high, surpassing $200
                      billion. This growth is driven by increased adoption of DeFi protocols and innovative new
                      projects.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Regulatory Clarity: New Crypto Framework Announced</CardTitle>
                    <CardDescription>May 10, 2025 • 7 min read</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 h-40 overflow-hidden rounded-md bg-muted">
                      <img
                        src="https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400"
                        alt="Government building with crypto symbols"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      Regulators have announced a new framework for cryptocurrency regulation, providing much-needed
                      clarity for businesses and investors. The framework aims to balance innovation with consumer
                      protection.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">NFT Market Rebounds: Sales Volume Up 150% in Q2</CardTitle>
                    <CardDescription>May 9, 2025 • 5 min read</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 h-40 overflow-hidden rounded-md bg-muted">
                      <img
                        src="https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400"
                        alt="Digital art NFT gallery display"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      The NFT market has rebounded strongly in Q2, with sales volume up 150% compared to Q1. This
                      resurgence is driven by new use cases beyond digital art, including gaming and virtual real
                      estate.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Central Bank Digital Currencies: The Future of Money?</CardTitle>
                    <CardDescription>May 8, 2025 • 9 min read</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 h-40 overflow-hidden rounded-md bg-muted">
                      <img
                        src="https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400"
                        alt="Digital currency concept with central bank imagery"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      Central Bank Digital Currencies (CBDCs) are gaining momentum worldwide. This in-depth analysis
                      explores how CBDCs could reshape the financial landscape and their potential impact on
                      cryptocurrencies.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="bitcoin" className="mt-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">
                      Bitcoin Surges Past $60,000 as Institutional Adoption Grows
                    </CardTitle>
                    <CardDescription>May 13, 2025 • 5 min read</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 h-40 overflow-hidden rounded-md bg-muted">
                      <img
                        src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400"
                        alt="Bitcoin chart showing upward trend"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      Bitcoin has surged past $60,000 as institutional adoption continues to grow. Major financial
                      institutions are increasingly adding Bitcoin to their balance sheets, driving up demand for the
                      cryptocurrency.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">
                      Bitcoin Mining Sustainability Initiatives Take Center Stage
                    </CardTitle>
                    <CardDescription>May 10, 2025 • 7 min read</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 h-40 overflow-hidden rounded-md bg-muted">
                      <img
                        src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400"
                        alt="Solar powered Bitcoin mining farm"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      Major Bitcoin mining operations are increasingly turning to renewable energy sources, with solar and 
                      hydroelectric power becoming the preferred options for environmentally conscious miners.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="ethereum" className="mt-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Ethereum 2.0 Upgrade: What You Need to Know</CardTitle>
                    <CardDescription>May 12, 2025 • 8 min read</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 h-40 overflow-hidden rounded-md bg-muted">
                      <img
                        src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400"
                        alt="Ethereum logo with network visualization"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      The Ethereum 2.0 upgrade is set to revolutionize the network with improved scalability, security,
                      and sustainability. This comprehensive guide explains what you need to know about the upcoming
                      changes.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Layer 2 Solutions Drive Ethereum Transaction Costs Down</CardTitle>
                    <CardDescription>May 11, 2025 • 6 min read</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 h-40 overflow-hidden rounded-md bg-muted">
                      <img
                        src="https://images.unsplash.com/photo-1639815188546-c43c240ff4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400"
                        alt="Ethereum layer 2 scaling diagram"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      Ethereum's Layer 2 scaling solutions have significantly reduced transaction costs, making the network 
                      more accessible to everyday users and smaller transactions.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="defi" className="mt-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">DeFi Market Cap Reaches New All-Time High</CardTitle>
                    <CardDescription>May 11, 2025 • 6 min read</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 h-40 overflow-hidden rounded-md bg-muted">
                      <img
                        src="https://images.unsplash.com/photo-1639152201720-5e536d254d81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400"
                        alt="DeFi dashboard with charts and metrics"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      The decentralized finance (DeFi) market cap has reached a new all-time high, surpassing $200
                      billion. This growth is driven by increased adoption of DeFi protocols and innovative new
                      projects.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Real-World Assets Coming to DeFi: What This Means</CardTitle>
                    <CardDescription>May 9, 2025 • 8 min read</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 h-40 overflow-hidden rounded-md bg-muted">
                      <img
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400"
                        alt="Real estate and financial assets with blockchain connection"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      Real-world assets are being tokenized and brought onto DeFi platforms, creating new opportunities for 
                      investors to access previously illiquid markets through blockchain technology.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="nft" className="mt-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">NFT Market Rebounds: Sales Volume Up 150% in Q2</CardTitle>
                    <CardDescription>May 9, 2025 • 5 min read</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 h-40 overflow-hidden rounded-md bg-muted">
                      <img
                        src="https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400"
                        alt="Digital art NFT gallery display"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      The NFT market has rebounded strongly in Q2, with sales volume up 150% compared to Q1. This
                      resurgence is driven by new use cases beyond digital art, including gaming and virtual real
                      estate.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Gaming NFTs: The New Frontier of Digital Ownership</CardTitle>
                    <CardDescription>May 7, 2025 • 7 min read</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 h-40 overflow-hidden rounded-md bg-muted">
                      <img
                        src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400"
                        alt="Gaming characters as NFTs in virtual world"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      Gaming NFTs are revolutionizing player ownership in virtual worlds, allowing gamers to truly own, trade, 
                      and monetize in-game assets across different gaming platforms.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Subscribe to Newsletter</CardTitle>
                <CardDescription>Get the latest crypto news delivered to your inbox</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}