"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAccount } from "wagmi";
import axios from "axios";
import { AvatarGenerator } from "random-avatar-generator";
import CreditScoreIndicator from "@/components/user/CreditScoreIndicator";

import NFTcard from "@/components/user/NFTcard";

// Define Block Explorer APIs for supported chains
const EXPLORER_APIS: Record<string, string> = {
  ethereum: "https://api.etherscan.io/api",
  polygon: "https://api.polygonscan.com/api",
  bsc: "https://api.bscscan.com/api",
  base: "https://api.basescan.org/api", // Base Chain Explorer API
};

// Define API Keys for respective chains
const API_KEYS: Record<string, string> = {
  ethereum: "YXF697JVSIIEBJKWP66AKRZ499DWFRGN9X",
  polygon: "YOUR_POLYGONSCAN_API_KEY",
  bsc: "YOUR_BSCSCAN_API_KEY",
  base: "R7R793V85951IDB958U1J6KNE4PUXJ5P4D",
};

const TransactionsPage = () => {
  const { walletaddress } = useParams(); // Get wallet address from URL params
  const { address } = useAccount(); // Get connected wallet address (if applicable)
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState<string | undefined>();
  const [chain, setChain] = useState<"ethereum" | "polygon" | "bsc" | "base">(
    "ethereum"
  );
  const generator = new AvatarGenerator();
  useEffect(() => {
    let s = generator.generateRandomAvatar();
    setImg(s);
  }, []);
  useEffect(() => {
    const fetchTransactions = async () => {
      if (!walletaddress) return; // Wait until we have the address

      setLoading(true);
      try {
        const baseURL = EXPLORER_APIS[chain];
        const apiKey = API_KEYS[chain];

        if (!baseURL || !apiKey) {
          throw new Error("Unsupported chain or missing API key.");
        }

        const url = `${baseURL}?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=${apiKey}`;

        const response = await axios.get(url);
        if (response.data.status !== "1") {
          console.log("this is res", response);
          throw new Error("Failed to fetch transactions");
        }

        setTransactions(response.data.result);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [address, chain]);

  return (
    <div className="p-6 pt-20">
      <h2 className="text-2xl font-bold py-3">
        Hello, {walletaddress || address}
      </h2>
      <div className="relative w-full h-[200px] rounded-md mb-64 bg-gradient-to-r from-cyan-400/50 to-emerald-400/50 flex items-center justify-center">
        <img
          src={img}
          alt="User Avatar"
          className="w-48 h-48 absolute rounded-full top-20 shadow-lg"
        />
      </div>
      <NFTcard avatar={img} name={"Akshat Maurya"} address={address} score={700} />
      <div className="flex gap-6">
        <CreditScoreIndicator score={700} />
      </div>
      {/* Chain Selection Dropdown */}
      <div className="mt-4">
        <label className="mr-2 font-semibold">Select Chain:</label>
        <select
          className="p-2 border rounded"
          value={chain}
          onChange={(e) =>
            setChain(e.target.value as "ethereum" | "polygon" | "bsc" | "base")
          }
        >
          <option value="ethereum">Ethereum</option>
          <option value="polygon">Polygon</option>
          <option value="bsc">Binance Smart Chain</option>
          <option value="base">Base</option> {/* Added Base */}
        </select>
      </div>

      {/* Transaction List */}
      {loading ? (
        <p className="mt-4">Loading transactions...</p>
      ) : transactions.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {transactions.map((tx, index) => (
            <li key={index} className="p-3 border rounded-md">
              <p>
                <strong>Hash:</strong> {tx.hash}
              </p>
              <p>
                <strong>From:</strong> {tx.from}
              </p>
              <p>
                <strong>To:</strong> {tx.to}
              </p>
              <p>
                <strong>Value:</strong> {tx.value} Wei
              </p>
              <p>
                <strong>Timestamp:</strong>{" "}
                {new Date(tx.timeStamp * 1000).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4">No transactions found.</p>
      )}
    </div>
  );
};

export default TransactionsPage;
