"use client"

import { Bell, Menu, Moon, Sun, Wallet } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCrypto } from "@/context/crypto-context"

export function DashboardHeader() {
  const { setTheme } = useTheme()
  const [pathname, setPathname] = useState("/")
  const [walletOpen, setWalletOpen] = useState(false)
  const { walletConnected, connectWallet, disconnectWallet } = useCrypto()

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [])

  return (
    <header className="sticky top-0 z-10 border-b bg-background">
      <div className="flex h-16 items-center px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-4 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] sm:w-[300px]">
            <nav className="flex flex-col gap-4 py-4">
              <Link href="/" className={`text-lg font-medium ${pathname === "/" ? "text-primary" : ""}`}>
                Dashboard
              </Link>
              <Link
                href="/portfolio"
                className={`text-lg font-medium ${pathname === "/portfolio" ? "text-primary" : ""}`}
              >
                Portfolio
              </Link>
              <Link href="/news" className={`text-lg font-medium ${pathname === "/news" ? "text-primary" : ""}`}>
                News
              </Link>
              <Link
                href="/settings"
                className={`text-lg font-medium ${pathname === "/settings" ? "text-primary" : ""}`}
              >
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 flex items-center gap-2 font-semibold">
          <div className="flex items-center">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-xl font-bold text-transparent">
              CoinZoro
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex md:flex-1 md:items-center md:gap-6">
          <Link
            href="/"
            className={`text-sm font-medium ${pathname === "/" ? "text-primary" : "text-muted-foreground"}`}
          >
            Dashboard
          </Link>
          <Link
            href="/portfolio"
            className={`text-sm font-medium ${pathname === "/portfolio" ? "text-primary" : "text-muted-foreground"}`}
          >
            Portfolio
          </Link>
          <Link
            href="/news"
            className={`text-sm font-medium ${pathname === "/news" ? "text-primary" : "text-muted-foreground"}`}
          >
            News
          </Link>
          <Link
            href="/settings"
            className={`text-sm font-medium ${pathname === "/settings" ? "text-primary" : "text-muted-foreground"}`}
          >
            Settings
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            size="sm"
            className="ml-2"
            onClick={() => (walletConnected ? disconnectWallet() : setWalletOpen(true))}
          >
            {walletConnected ? "Wallet Connected" : "Connect Wallet"}
          </Button>
        </div>
      </div>

      <Dialog open={walletOpen} onOpenChange={setWalletOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Connect Wallet</DialogTitle>
            <DialogDescription>Choose a wallet provider to connect to CryptoTracker.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Button
              variant="outline"
              className="flex items-center justify-start gap-3 px-4 py-6"
              onClick={() => {
                connectWallet()
                setWalletOpen(false)
              }}
            >
              <Wallet className="h-5 w-5" />
              <div className="flex flex-col items-start">
                <span className="font-medium">MetaMask</span>
                <span className="text-xs text-muted-foreground">Connect to your MetaMask wallet</span>
              </div>
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-start gap-3 px-4 py-6"
              onClick={() => {
                connectWallet()
                setWalletOpen(false)
              }}
            >
              <Wallet className="h-5 w-5" />
              <div className="flex flex-col items-start">
                <span className="font-medium">Coinbase Wallet</span>
                <span className="text-xs text-muted-foreground">Connect to your Coinbase wallet</span>
              </div>
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-start gap-3 px-4 py-6"
              onClick={() => {
                connectWallet()
                setWalletOpen(false)
              }}
            >
              <Wallet className="h-5 w-5" />
              <div className="flex flex-col items-start">
                <span className="font-medium">WalletConnect</span>
                <span className="text-xs text-muted-foreground">Connect using WalletConnect</span>
              </div>
            </Button>
          </div>
          <DialogFooter className="sm:justify-start">
            <Button variant="secondary" onClick={() => setWalletOpen(false)}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  )
}
