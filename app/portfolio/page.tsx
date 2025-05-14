import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PortfolioContent } from "./portfolio-content"

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <DashboardHeader />
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Portfolio</h1>
            <p className="text-muted-foreground">Track and manage your crypto investments</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,345.67</div>
                <p className="text-xs text-green-500">+5.23% ($645.32)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">24h Change</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-500">+2.34%</div>
                <p className="text-xs text-muted-foreground">$289.12</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Profit/Loss</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-500">+$1,234.56</div>
                <p className="text-xs text-muted-foreground">All time</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Tabs defaultValue="assets">
              <TabsList>
                <TabsTrigger value="assets">Assets</TabsTrigger>
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
              </TabsList>
              <TabsContent value="assets" className="mt-4">
                <PortfolioContent />
              </TabsContent>
              <TabsContent value="transactions" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>Your recent cryptocurrency transactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b pb-4">
                        <div>
                          <p className="font-medium">Buy Bitcoin</p>
                          <p className="text-xs text-muted-foreground">May 12, 2025</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-green-500">+0.05 BTC</p>
                          <p className="text-xs text-muted-foreground">$3,071.42</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-b pb-4">
                        <div>
                          <p className="font-medium">Sell Ethereum</p>
                          <p className="text-xs text-muted-foreground">May 10, 2025</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-red-500">-1.2 ETH</p>
                          <p className="text-xs text-muted-foreground">$4,114.51</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-b pb-4">
                        <div>
                          <p className="font-medium">Buy Solana</p>
                          <p className="text-xs text-muted-foreground">May 8, 2025</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-green-500">+10 SOL</p>
                          <p className="text-xs text-muted-foreground">$1,428.70</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="performance" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Portfolio Performance</CardTitle>
                    <CardDescription>Track your investment performance over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full rounded-lg border bg-muted p-4 text-center">
                      <p className="mt-32 text-muted-foreground">Performance chart will be displayed here</p>
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
