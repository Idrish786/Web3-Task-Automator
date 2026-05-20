const { ethers } = require('ethers');

const config = require('./config.js');

// Base Network $DEGEN Token Routing Module

const DEGEN_ADDRESS = "0x4ed4E862860beD51a9570b96d89aF5E1B0Efea1c";

async function snipeDegen(walletPrivateKey, amountInEth) {

    console.log(\Preparing to route ${amountInEth} ETH for $DEGEN on Base`);`

const provider = new ethers.JsonRpcProvider(config.networks.base.rpc);

    const signer = new ethers.Wallet(walletPrivateKey, provider);

console.log("Checking Base network gas fees...");

    try {

    const feeData = await provider.getFeeData();

        const currentGas = ethers.formatUnits(feeData.gasPrice, "gwei")

    console.log(\Current Network Gwei: ${currentGas}`);`

        if (parseFloat(currentGas) > 30) {

        console.log("Gas too high, aborting swap to save funds.");

            return false;

        }
