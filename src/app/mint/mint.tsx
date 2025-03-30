import { useState } from "react";
import { useAccount, useWriteContract } from "wagmi";
import NFTABI from "@/abi/BaseNFT.json"; // ✅ Ensure this file exists
const contractAddress = "0xb34e38Ae502783eB78771047C46522358778954c"; // Replace with actual contract address

export default function Mint() {
  const { address, isConnected } = useAccount();
  const [htmlContent, setHtmlContent] = useState("");

  const { writeContract, isPending } = useWriteContract(); // ✅ Use new Wagmi function

  const mintNFT = async () => {
    if (!isConnected || !address) return;
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
  const [isHovering, setIsHovering] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const [mintProgress, setMintProgress] = useState(0);
  return (
    <div className="flex flex-col items-center p-4">
      <div className="mt-6">
        <button
          onClick={mintNFT}
          disabled={isMinting}
          className={`w-full py-3 rounded-xl font-bold transition-all duration-300 relative overflow-hidden ${
            isMinting ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r  from-cyan-600 to-emerald-600 opacity-80"></div>
          {isHovering && !isMinting && (
            <div className="absolute inset-0 bg-gradient-to-r h-40   from-cyan-500 to-emerald-500"></div>
          )}

          <div className=" h-7 flex items-center  w-[10rem] justify-center">
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
      </div>
    </div>
  );
}
