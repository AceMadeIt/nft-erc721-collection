import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'ARTblown3',
  tokenName: 'ARTblown Club',
  tokenSymbol: 'ABC',
  hiddenMetadataUri: 'ipfs://QmRoryZ2BJ2CtHEWVSty8cChi3VMLiWUkhLuz1UqQxBUWQ/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.000005,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.000007,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.000009,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x2003C45d6Dd39084C858265e1A048da00C2f9C5E",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
