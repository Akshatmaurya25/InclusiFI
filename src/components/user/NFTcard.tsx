import React, { useState, useEffect, useRef } from "react";
import { useAccount, useWriteContract } from "wagmi";
import CreditScoreIndicator from "./CreditScoreIndicator";
import Image from "next/image";

import html2canvas from "html2canvas";
import NFTABI from "@/abi/BaseNFT.json";
import Mint from "@/app/mint/mint";
const NFTcard = (props: any) => {
  const { address } = useAccount();
  const [isHovering, setIsHovering] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const [mintProgress, setMintProgress] = useState(0);
  console.log(props);
  const captureRef = useRef<HTMLDivElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const captureImage = async () => {
    if (!captureRef.current) return;

    const canvas = await html2canvas(captureRef.current);
    const image = canvas.toDataURL("image/png"); // Convert to Base64 PNG
    setImageUrl(image);
    console.log("iamge", image);
    return image;
  };

  const contractAddress = "0xb34e38Ae502783eB78771047C46522358778954c";
  const { writeContract, isPending } = useWriteContract();
  const htmlContent = "InclusiFI";
  const mintNFT = async () => {
    if (!address) return;
    try {
      await writeContract({
        address: contractAddress,
        abi: NFTABI,
        functionName: "mintNFT",
        args: [address, htmlContent],
      });
    } catch (error) {
      console.error("Minting failed:", error);
    }
  };

  const handleMint = async () => {
    setIsMinting(true);
    setMintProgress(50);
    const res = await captureImage();
    console.log(res);
  };

  // Truncate wallet address
  const truncateAddress = (address: `0x${string}`) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  if (!address) {
    return <div>loading</div>;
  }
  return (
    <div
      ref={captureRef}
      className="flex items-center justify-center min-h-screen from-gray-900 via-purple-900/10 to-gray-900 p-6"
    >
      <div
        className="relative w-full max-w-sm rounded-2xl overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          transform: isHovering ? "scale(1.02)" : "scale(1)",
          boxShadow: isHovering
            ? "0 25px 50px -12px rgba(79, 70, 229, 0.4), 0 0 0 1px rgba(79, 70, 229, 0.1), 0 0 40px 5px rgba(79, 70, 229, 0.2)"
            : "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.07)",
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_70%)]"></div>

          {/* Background grid pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        {/* Card Content */}
        <div className="relative z-10 p-6">
          {/* Top section with avatar and price */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative h-16 w-16 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-emerald-500 animate-pulse-slow"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image width={80} height={80} src={props.avatar} alt="" />
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-purple-100">
                  {props.name}
                </h3>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <p className="text-gray-400 text-sm font-mono">
                    {truncateAddress(address)}
                  </p>
                </div>
                <p className="text-gray-500 text-xs mt-1">By {props.name}</p>
              </div>
            </div>
            <div className="">
              <CreditScoreIndicator score={props.score} />
            </div>
          </div>

          {/* NFT Content Preview */}
          <div className="mt-4 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-white/5">
            <div className="aspect-square flex items-center justify-center p-4 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-cyan-500 animate-ping opacity-75"></div>
              <div
                className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-cyan-500 animate-ping opacity-75"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Content placeholder with glow effect */}
              <div className="w-full h-full rounded-lg flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-emerald-900/30 rounded-lg"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg opacity-20 blur-sm"></div>
                <div className="flex flex-col items-center justify-center">
                  <Image
                    height={270}
                    width={270}
                    src={"/Logo_small.svg"}
                    alt="Logo"
                  />

                  <p className="text-gray-300 text-center px-4 relative z-10">
                    Limited edition NFT from the Cosmic Voyager collection. Each
                    piece captures the essence of interstellar exploration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Info section */}
          <div className="mt-6 grid grid-cols-3 gap-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-2 text-center">
              <p className="text-xs text-gray-400">Edition</p>
              <p className="text-sm text-white font-medium">217 / 500</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-2 text-center">
              <p className="text-xs text-gray-400">Network</p>
              <p className="text-sm text-white font-medium">Base</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-2 text-center">
              <p className="text-xs text-gray-400">Royalty</p>
              <p className="text-sm text-white font-medium">3.8%</p>
            </div>
          </div>

          {/* Mint Button */}
          {/* <div className="mt-6">

            <button
              onClick={handleMint}
              disabled={isMinting}
              className={`w-full py-3 rounded-xl font-bold transition-all duration-300 relative overflow-hidden ${
                isMinting ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r  from-cyan-600 to-emerald-600 opacity-80"></div>
              {isHovering && !isMinting && (
                <div className="absolute inset-0 bg-gradient-to-r h-40   from-cyan-500 to-emerald-500"></div>
              )}

              <div className=" h-7 flex items-center justify-center">
                {isMinting ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Minting... {mintProgress}%</span>
                  </div>
                ) : (
                  <span className="relative z-10  text-white flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                    Mint Now
                  </span>
                )}
              </div>
            </button>
          </div> */}
          <Mint />

          {/* Progress Indicator */}
          <div className="w-full bg-gray-800 h-1 mt-4 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${mintProgress}%` }}
            ></div>
          </div>

          {/* Network fee */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">
              Est. network fee: 0.002 MATIC + gas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTcard;
