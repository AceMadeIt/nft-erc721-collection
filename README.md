# NFT ERC721 Collection

An all-in-one solution for `ERC721` collections. Build, test and deploy your smart contract, together with a totally
integrated DAPP within a simple yet powerful workspace.

## Disclaimer
This project was created for educational purposes, please refer to the [LICENCE](LICENSE) file for further information.

## Main features
- extremely high gas efficiency (users are going to pay lower gas fees compared to traditional collections)
- whitelist support with customizable list size (using a Merkle Tree for verification)
- automated contract verification through block explorers (e.g. Etherscan)
- simple CLI commands that guide you through all the sale steps (whitelist, pre-sale, public sale)
- built as a Hardhat project with TypeScript support for a better development experience
- includes a fully-featured minting DAPP (React + TypeScript + SCSS + Webpack)
- full support for contract interaction through block explorers (e.g. Etherscan), for all the users that do not trust custom DAPPs (including the `whitelistMint(...)` function)
- customizable minting DAPP (from basic branding to complete customization)
- now based on `ERC721A`

## YouTube tutorials

|Lesson ID|Description|Video link|
|---|---|---|
|`00a`|Basic setup on **Windows 10**|https://youtu.be/zjlg-0622PU|
|`00b`|Basic setup on **macOS Catalina (Intel-based)**|https://youtu.be/acqXzKN5Xys|
|`00c`|Basic setup on **Linux**|https://youtu.be/imuqi6Vg3Zw|
|`01`|Speedrun: create and deploy a smart contract + DAPP (v2.x)|https://youtu.be/AFrsJRLrZEM|
|`02`|The smart contract project|https://youtu.be/XToWWExBLXE|
|`03`|The minting DAPP project|https://youtu.be/gs9mVwkn8u4|
|`04`|Configuration and security|https://youtu.be/pkA86GHU_xw|
|`05`|Managing the collection without leaving Visual Studio Code|https://youtu.be/yOVKEeRMJSs|
|`06`|Managing the contract using Truffle Dashboard|https://youtu.be/fwdIA5UuPmM|
|`07`|Running smart contract functions manually on the block explorer|https://youtu.be/zhvTJhBbtnE|
|`08`|Customizing the look and feel of the DAPP|https://youtu.be/GoDp6yZAY9A|
|`09`|Deploying the DAPP|https://youtu.be/uUrbIXUgVz4|

## Legacy tutorials

|Description|Video link|
|---|---|
|Speedrun: create and deploy a smart contract + DAPP (v1.x)|https://youtu.be/VpXJZSqLO8A|

## Requirements

### Software
- [Visual Studio Code](https://code.visualstudio.com/) (with the [Solidity](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity) extension)
- [NodeJs](https://nodejs.org/) (with the [Yarn package manager](https://yarnpkg.com/getting-started/install))

### Services
- Etherscan free API key _(optional: used for the automated contract verificiation, as well as retrieving the current values for gas cost estimation)_
- Infura free basic plan or higher _(optional: used by the CLI commands in order to perform operations on real blockchains, you can skip this if you deploy and manage your contract [using Truffle Dashboard](https://youtu.be/fwdIA5UuPmM))_
- Coin Market Cap free API key _(optional: used for retrieving the current token price for gas cost estimation in USD)_
#   A R T b l o w n 3  
 