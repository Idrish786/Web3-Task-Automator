const { JsonRpcProvider, Connection } = require('@mysten/sui.js');

const config = require('./config.js');

// Initialize SUI Network Provider connecting to Mainnet

const connection = new Connection({ fullnode: config.networks.sui.rpc });
​const provider = new JsonRpcProvider(connection);

async function checkSuiBalance(walletAddress) {
try {
const balance = await provider.getCoinBalances({ owner: walletAddress });
