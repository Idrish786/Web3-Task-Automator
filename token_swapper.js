const { ethers } = require('ethers');

const config = require('./config.js');

// Decentralized Exchange Swap Execution Module

const UNISWAP_ROUTER_ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

const ERC20_ABI = [

"function approve(address spender, uint256 amount) external returns (bool)",

  "function allowance(address owner, address spender) external view returns (uint256)"

  ];

async function approveToken(wallet, tokenAddress, amount) {

console.log("Checking current token allowance...");

const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, wallet);

try {

  // Simulating the approval transaction

  const tx = await tokenContract.approve(UNISWAP_ROUTER_ADDRESS, amount);
