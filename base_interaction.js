const { ethers } = require('ethers');

const config = require('./config.js');

// Initialize Base Network RPC Connection

const baseProvider = new ethers.JsonRpcProvider(config.networks.base.rpc);

async function checkBaseGas() {

  try {

    const feeData = await baseProvider.getFeeData();
