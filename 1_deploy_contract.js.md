1_deploy_contract.js
====================

   Deploying 'Token'
   -----------------
> transaction hash:    0x332c80722284ddc9d6f6ee72d929a1700a3c7249e33a3e9df811a65d1bf8c80b
> Blocks: 1            Seconds: 17
> contract address:    0x174A5972865F483eF992667D78fDc8bCed82e73A
> block number:        7975593
> block timestamp:     1668777132
> account:             0x3F619E373ca2208a90437b32bDfBDFDCA715dfA4
> balance:             0.100018205081425508
> gas used:            929810 (0xe3012)
> gas price:           61.319401059 gwei
> value sent:          0 ETH
> total cost:          0.05701539229866879 ETH

   Pausing for 2 confirmations...

   -------------------------------
> confirmation number: 1 (block: 7975594)
> confirmation number: 2 (block: 7975595)
> Saving artifacts
   -------------------------------------
> Total cost:     0.05701539229866879 ETH

Summary
=======
> Total deployments:   1
> Final cost:          0.05701539229866879 ETH






    (window as any).ethereum.request({
      method: "wallet_addEthereumChain",
      params: [{
        chainId: "0xd",
        rpcUrls: ["https://staging.diode.io:8443"],
        chainName: "sfdsd",
        nativeCurrency: {
          name: "sDIODE",
          symbol: "sDIODE",
          decimals: 18
        }
      }]
    });
    
    (window as any).ethereum.request({
      method: "wallet_addEthereumChain",
      params: [{
        chainId: "0x5",
        rpcUrls: ["https://goerli.infura.io/v3/"], // https://goerli.blockpi.network/v1/rpc/public
        chainName: "Goerli test network",
        nativeCurrency: {
          name: "GoerliETH",
          symbol: "GoerliETH",
          decimals: 18
        },
        // blockExplorerUrls: ["https://goerli.etherscan.io/"]
      }]
    });

    
    // ethers.getDefaultProvider("goerli");
    // (window as any).ethereum.request({
    //   method: 'wallet_addEthereumChain',
    //   params: [
    //     {
    //       chainId: '0xa',
    //       chainName: 'Optimism',
    //       nativeCurrency: {name: 'Ether', symbol: 'ETH', decimals: 18},
    //       rpcUrls: ['https://mainnet.optimism.io'],
    //       blockExplorerUrls: ['https://optimistic.etherscan.io'],
    //     },
    //   ],
    // }).then(console.warn);