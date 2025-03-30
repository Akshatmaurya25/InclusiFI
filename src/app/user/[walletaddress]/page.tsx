"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAccount } from "wagmi";
import axios from "axios";
import { AvatarGenerator } from "random-avatar-generator";
import CreditScoreIndicator from "@/components/user/CreditScoreIndicator";
import ReactSpeedometer from "react-d3-speedometer";
import NFTcard from "@/components/user/NFTcard";
import Image from "next/image";
import { BadgeCheckIcon, Check } from "lucide-react";
import TransactionCard from "@/components/user/Transaction";
import { motion } from "framer-motion";
import { calculateCreditScore } from "@/utils/CreditScorer";
import { getAiResponse } from "@/utils/AIsuggestion";
import ReactMarkdown from "react-markdown";
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
  const [credit, setCredit] = useState(300);
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState<string | undefined>();
  const [ailoading, setAiloading] = useState(false);
  const [aiRes, setAiRes] = useState<string>();
  const [chain, setChain] = useState<"ethereum" | "polygon" | "bsc" | "base">(
    "ethereum"
  );
  const [aggregated, setAggregated] = useState({
    gasPrice: 0,
    gasUsed: 0,
    value: 0,
  });

  useEffect(() => {
    if (!transactions.length) return;

    const totals = transactions.reduce(
      (acc, tx) => {
        return {
          gasPrice: acc.gasPrice + parseInt(tx.gasPrice || "0"),
          gasUsed: acc.gasUsed + parseInt(tx.gasUsed || "0"),
          value: acc.value + parseInt(tx.value || "0"),
        };
      },
      { gasPrice: 0, gasUsed: 0, value: 0 }
    );
    console.log(totals, "totals");
    setAggregated(totals);

    const answer = calculateCreditScore(transactions);
    setCredit(answer);
    console.log("Your credit score is", answer);

    const fetchResponse = async () => {
      try {
        setAiloading(true);
        let res = await getAiResponse(answer);
        console.log(res);
        setAiRes(res);
      } catch (error) {
        console.error("Error fetching AI response:", error);
      } finally {
        setAiloading(false);
      }
    };

    fetchResponse();
  }, [transactions]);

  const generator = new AvatarGenerator();
  useEffect(() => {
    const s = generator.generateRandomAvatar();
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
  if (!img) {
    return <div>loading...</div>;
  }

  return (
    <div className="p-6 pt-20 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold py-3">
        Hello, {walletaddress || address}
      </h2>
      <div className="relative w-full h-[200px] rounded-md mb-[88px] bg-gradient-to-r from-cyan-400/50 to-emerald-400/50 flex items-center justify-center">
        <Image
          height={40}
          width={40}
          src={img}
          alt="User Avatar"
          className="w-48 h-48 absolute rounded-full top-20 shadow-lg"
        />
      </div>
      <div className="flex w-full items-center justify-center gap-2">
        <h1 className="text-3xl font-semibold">Akshat Maurya</h1>{" "}
        <BadgeCheckIcon className="text-green-500" size={20} />
      </div>

      <div className="mt-8 overflow-visible max-h-[180px]">
        <ReactSpeedometer
          maxValue={800}
          minValue={300}
          value={credit}
          needleColor="blue"
          startColor="red"
          segments={10}
          endColor="green"
        />
      </div>

      <div>
        <div className="mt-8 flex flex-wrap gap-6 justify-center">
          <StatCard label="Total Gas Price" value={aggregated.gasPrice} />
          <StatCard label="Total Gas Used" value={aggregated.gasUsed} />
          <StatCard label="Total Value" value={aggregated.value} />
          <StatCard
            label="Average Gas Price"
            value={aggregated.gasPrice / transactions.length || 0}
          />
        </div>
      </div>

      <NFTcard
        avatar={img}
        name={"Akshat Maurya"}
        address={address}
        score={700}
      />

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
          {transactions.map((tx, index) => {
            console.log(tx);
            return (
              <div key={index}>
                <TransactionCard {...tx} walletAddress={walletaddress} />
              </div>
            );
          })}
        </ul>
      ) : (
        <p className="mt-4">No transactions found.</p>
      )}

      <div className=" w-[80%] mt-6 bg-gray-900/60 p-6 rounded-lg h-max-[400px] overflow-y-scroll">
        {ailoading && <p>Loading Ai suggestions...</p>}
        {aiRes && !ailoading && <ReactMarkdown>{aiRes}</ReactMarkdown>}
      </div>
    </div>
  );
};

export default TransactionsPage;
const formatNumber = (num: number) => {
  if (num >= 1e12) return (num / 1e12).toFixed(2) + "T"; // Trillion
  if (num >= 1e9) return (num / 1e9).toFixed(2) + "B"; // Billion
  if (num >= 1e6) return (num / 1e6).toFixed(2) + "M"; // Million
  return num.toLocaleString(); // Regular formatting for smaller numbers
};

const StatCard = ({ label, value }: { label: string; value: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 bg-gray-900 shadow-lg rounded-xl w-40 flex flex-col items-center justify-center border border-gray-700"
  >
    <motion.h2
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      className="text-3xl font-bold text-emerald-400"
    >
      {formatNumber(value)}
    </motion.h2>
    <p className="text-gray-400 text-sm">{label}</p>
  </motion.div>
);
