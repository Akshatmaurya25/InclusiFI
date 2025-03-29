"use client";

import { WagmiConfig, WagmiProvider, createConfig, http } from "wagmi";
import {
  getDefaultConfig,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import {
  mainnet,
  polygon,
  arbitrum,
  optimism,
  sepolia,
  base,
} from "wagmi/chains";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Read Project ID from .env.local
const projectId = process.env.NEXT_PUBLIC_RAINBOW_PROJECT_ID;

if (!projectId) {
  throw new Error("NEXT_PUBLIC_WALLET_PROJECT_ID is missing in .env.local");
}
const queryClient = new QueryClient();
// Create Wagmi config using RainbowKit's default settings
const config = getDefaultConfig({
  appName: "InclusiFi",
  projectId: projectId,
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={lightTheme({
            accentColor: "#7b3fe400",
            accentColorForeground: "#ffffff",
            borderRadius: "medium",
            overlayBlur: "none",
            fontStack: "system",
          })}
        >
          {/* Your App */}
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
