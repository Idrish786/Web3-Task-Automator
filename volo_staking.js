const { JsonRpcProvider, Connection } = require('@mysten/sui.js');

const config = require('./config.js');

// Automated Volo Liquid Staking on SUI Network

const VOLO_MAINNET_POOL = "0x7fa2292fa99803c3e...volo_pool";

async function stakeSuiToVolo(walletAddress, amountToStake) {

console.log(\Initiating stake of ${amountToStake} SUI into Volo protocol...`);`

    try {

console.log("Building Programmable Transaction Block (PTB)...");

        // Split coins logic for gas management    
