"use client";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { isSet } from "util/types";
import { useAccount } from "wagmi";

interface TransactionCardProps {
  timeStamp: string;
  walletAddress: string;
  hash: string;
  from: string;
  to: string;
  value: string;
  gasUsed: string;
  gasPrice: string;
  blockNumber: string;
  account: string;
}

const truncateAddress = (address: string) => {
  return address.length > 10
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : address;
};

const formatEther = (value: string) => {
  return (parseInt(value) / 1e18).toFixed(6) + " ETH";
};

const TransactionCard: React.FC<TransactionCardProps> = ({
    walletAddress,
  timeStamp,
  hash,
  from,
  to,
  value,
  gasUsed,
  gasPrice,
  blockNumber,
  account,
}) => {
  const { address } = useAccount();
  const isSent = from.toLowerCase() === walletAddress.toLowerCase();
  console.log("Checking isSent:", { from, walletAddress, isSent });
  const date = new Date(parseInt(timeStamp) * 1000).toLocaleString();
  const formatDate = (timestamp: string) => {
    const timeStampNumber = Number(timestamp);
    if (isNaN(timeStampNumber) || timeStampNumber <= 0) return "Invalid Date";
    const date = new Date(timeStampNumber * 1000);
    return (
      date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }) +
      ", " +
      date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    );
  };
  return (
    <Card className="flex flex-col p-6 min-w-[36rem] border border-[#ffffff41] shadow-md rounded-xl bg-gradient-to-r from-cyan-900/30  to-emerald-800/30 text-white hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            {formatDate(timeStamp)}
          </p>
          <p className="text-xs text-gray-400">Block: #{blockNumber}</p>
        </div>
        <div
          className={`w-10 h-10 flex items-center justify-center border rounded-full ${
            isSent
              ? "border-red-500 text-red-400 bg-red-900"
              : "border-green-500 text-green-400 bg-green-900"
          }`}
        >
            {isSent}
          {isSent ? <ArrowUpRight size={18} /> : <ArrowDownLeft size={18} />}
        </div>
      </div>
      <div className="space-y-2 grid grid-cols-2 text-sm">
        <p className="text-gray-400">
          From: <span className="text-gray-300">{truncateAddress(from)}</span>
        </p>
        <p className="text-gray-400">
          To: <span className="text-gray-300">{truncateAddress(to)}</span>
        </p>
        <p className="text-gray-400">
          Hash: <span className="text-gray-300">{truncateAddress(hash)}</span>
        </p>
        <p className="text-gray-400">
          Value: <span className="text-gray-300">{formatEther(value)}</span>
        </p>
        <p className="text-gray-400">
          Gas Used: <span className="text-gray-300">{gasUsed}</span>
        </p>
        <p className="text-gray-400">
          Gas Price:{" "}
          <span className="text-gray-300">{formatEther(gasPrice)}</span>
        </p>
      </div>
    </Card>
  );
};

export default TransactionCard;
