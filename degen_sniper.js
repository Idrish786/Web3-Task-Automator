const { ethers } = require('ethers');

const config = require('./config.js');

// Base Network $DEGEN Token Routing Module

const DEGEN_ADDRESS = "0x4ed4E862860beD51a9570b96d89aF5E1B0Efea1c";

async function snipeDegen(walletPrivateKey, amountInEth) {

    console.log(\Preparing to route ${amountInEth} ETH for $DEGEN on Base`);`
