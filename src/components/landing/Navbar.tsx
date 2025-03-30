"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

const Navbar = () => {
  const { address, isConnected } = useAccount();
  return (
    <div>
      {" "}
      <header className="fixed px-6 lg:px-16 top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 justify-center">
            <Image
              src="/landscape_logo.svg"
              height={50}
              width={200}
              alt="logo"
              className="mt-5"
            />
          </Link>
          {/* <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#faq"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav> */}
          <Button className="hidden md:flex bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white border-none">
            <ConnectButton
              accountStatus={{
                smallScreen: "avatar",
                largeScreen: "full",
              }}
            />
            <Link href={`/user/${address}`}>Dashboard</Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-zinc-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
