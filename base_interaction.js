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
