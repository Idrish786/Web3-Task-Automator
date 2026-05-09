const { ethers } = require('ethers');

const fs = require('fs');

// Utility to safely generate multiple testnet wallets

function generateNewWallet() {

const wallet = ethers.Wallet.createRandom();
  
console.log("New Wallet Successfully Created:", wallet.address);

return { 
    address: wallet.address, 
    privateKey: wallet.privateKey, 
    phrase: wallet.mnemonic.phrase 
  };

}

function saveWalletToDB(walletData) {
