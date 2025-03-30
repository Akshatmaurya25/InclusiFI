interface Transaction {
    blockHash: string;
    blockNumber: string;
    confirmations: string;
    contractAddress: string;
    cumulativeGasUsed: string;
    from: string;
    functionName: string;
    gas: string;
    gasPrice: string;
    gasUsed: string;
    hash: string;
    input: string;
    isError: string;
    methodId: string;
    nonce: string;
    timeStamp: string;
    to: string;
    transactionIndex: string;
    txreceipt_status: string;
    value: string;
  }
  
  export const calculateCreditScore = (transactions: Transaction[]): number => {
    if (transactions.length === 0) return 300; 
  
    const totalTransactions = transactions.length;
  
    // Initialize totals
    let totalGasUsed = 0;
    let totalGasPrice = 0;
    let totalCumulativeGasUsed = 0;
    let failedTransactions = 0;
  
    transactions.forEach((tx) => {
      totalGasUsed += parseInt(tx.gasUsed);
      totalGasPrice += parseInt(tx.gasPrice);
      totalCumulativeGasUsed += parseInt(tx.cumulativeGasUsed);
  
      if (tx.isError === "1" || tx.txreceipt_status === "0") {
        failedTransactions++;
      }
    });
  
 
    const avgGasUsed = totalGasUsed / totalTransactions;
    const avgGasPrice = totalGasPrice / totalTransactions;
    const avgCumulativeGasUsed = totalCumulativeGasUsed / totalTransactions;
  
  
    const transactionFactor = Math.min(200, Math.log10(totalTransactions + 1) * 100); 
    const gasEfficiency = Math.max(0, 150 - (avgGasPrice / avgGasUsed) * 500); 
    const priceStability = Math.max(0, 200 - Math.abs(avgCumulativeGasUsed - avgGasUsed) / avgGasUsed * 100); 
    const penalty = failedTransactions * 10; 
  
  
    let score = 300 + transactionFactor + gasEfficiency + priceStability - penalty;
    return Math.min(850, Math.max(300, Math.round(score)));
  };
  

  