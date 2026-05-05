const { ethers } = require('ethers');

const config = require('./config.js');

// Initialize Base Network RPC Connection

const baseProvider = new ethers.JsonRpcProvider(config.networks.base.rpc);

async function checkBaseGas() {

  try {

    const feeData = await baseProvider.getFeeData();

  const gasPrice = ethers.formatUnits(feeData.gasPrice, 'gwei');

    console.log("Current Base Network Gas:", gasPrice, "Gwei");

    return parseFloat(gasPrice);

  } catch (err) {

  console.error("Failed to fetch Base network gas:", err);

  }

}

async function executeBaseSwap(walletPrivateKey, tokenIn, tokenOut, amount) {

  console.log("Preparing swap transaction on Base...");

const wallet = new ethers.Wallet(walletPrivateKey, baseProvider);

  // Placeholder for DEX router contract connection (e.g., Uniswap or Aerodrome)

const routerAddress = "0x..."; // DEX Router

  console.log("Wallet connected:", wallet.address);

// Verification of sufficient funds before execution

  const balance = await baseProvider.getBalance(wallet.address);

  if (balance === 0n) {
