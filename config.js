module.exports = {

    networks: {

          base: { 
      rpc: "https://mainnet.base.org",
      chainId: 8453
    },

    sui: { 
      rpc: "https://fullnode.mainnet.sui.io:443",
      chainId: null
    }
  },

      security: {

    useResidentialProxies: true,

    delayBetweenTasksMs: 5000,

      maxGasPriceGwei: 25
  }
};
