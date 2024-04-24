#!/bin/bash
echo "Starting Ganache"
ganache --chain.vmErrorsOnRPCResponse true --fork.url https://mainnet.infura.io/v3/"${INFURA_API_KEY}" --miner.blockGasLimit 30000000 --wallet.mnemonic brownie --server.port 8545 --chain.chainId 1 --hardfork istanbul --wallet.unlockedAccounts 0xa2dfc431297aee387c05beef507e5335e684fbcd --wallet.unlockedAccounts 0xb8d83908aab38a159f3da47a59d84db8e1838712
