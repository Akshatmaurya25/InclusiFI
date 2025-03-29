import type React from "react";
import "@/app/globals.css";
import Providers from "./provider";
import Navbar from "@/components/landing/Navbar";

export const metadata = {
  title: "InclusiFI - Blockchain-Based Credit Scoring",
  description:
    "Unlock your credit score with just your wallet address. Secure, anonymous, and accurate blockchain-based credit scoring.",
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/logo-only.png",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/logo-only.png"
          sizes="32x32"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
      </head>

      <body className="min-h-screen bg-black font-sans antialiased">
        {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange> */}
        <Providers>
          <Navbar />
          {children}
        </Providers>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
