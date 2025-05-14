"use client"

import { CryptoProvider } from "@/context/crypto-context"
import type { ReactNode } from "react"

export function Providers({ children }: { children: ReactNode }) {
  return <CryptoProvider>{children}</CryptoProvider>
}
