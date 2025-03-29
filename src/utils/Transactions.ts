import axios from "axios";

// Define API keys for different chains (use environment variables in production)
const EXPLORER_APIS: Record<string, string> = {
  ethereum: "https://api.etherscan.io/api",
  polygon: "https://api.polygonscan.com/api",
  bsc: "https://api.bscscan.com/api",
};

const API_KEYS: Record<string, string> = {
  ethereum: process.env.ETHER_API || "YXF697JVSIIEBJKWP66AKRZ499DWFRGN9X",
  polygon: "YOUR_POLYGONSCAN_API_KEY",
  bsc: "YOUR_BSCSCAN_API_KEY",
  base: "R7R793V85951IDB958U1J6KNE4PUXJ5P4D"
};

// Fetch transactions for a given wallet and chain
export const fetchTransactions = async (
  walletAddress: `0x${string}`,
  chain: "ethereum" | "polygon" | "bsc" | "base"
) => {
  try {
    const baseURL = EXPLORER_APIS[chain];
    const apiKey = API_KEYS[chain];

    if (!baseURL || !apiKey) {
      throw new Error("Unsupported chain or missing API key.");
    }

    const url = `${baseURL}?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&sort=desc&apikey=${apiKey}`;

    const response = await axios.get(url);
    if (response.data.status !== "1") throw new Error("Failed to fetch transactions");

    return response.data.result;
  } catch (error) {
    console.error(`Error fetching transactions for ${walletAddress}:`, error);
    return [];
  }
};


