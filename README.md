**⛔️ DEPRECATED ⛔️**

[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

Merged with [AsheTM/sample-erc20](https://github.com/AsheTM/sample-erc20) repository.

<br>

---

# ERC20 Sample Smart Contract

Sample of how to create a ERC20 token.

## Installation

```bash
#!/bin/bash
pnpm install
```

## Deployment

Create ```.env``` file, and provide the following keys: 

* MNEMONIC - MNEMONIC of your wallet
* PROJECT_ID - Infura API Key
* TOKEN_DECIMALS - Number of decimals (Range: [0, 18])
* TOKEN_NAME - Name of the token
* TOKEN_SYMBOL - Symbol of the token
* TOKEN_TOTAL_SUPPLY - Max Total Supply of the token
* ADDRESS_INDEX (Optional) Index of the address wallet with the same MNEMONIC

Then execute: 

```bash
#!/bin/bash
pnpm run migrate:goerli
```

## Tests

To run tests, execute the following: 

```bash
#!/bin/bash
pnpm run test
```
