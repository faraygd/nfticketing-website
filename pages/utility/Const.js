import { useMetamask, useAddress, useContract } from '@thirdweb-dev/react';

export const address = useAddress();
export const contract = useContract('', 'edition-drop');
export const metamaskWallet = useMetamask();
export const tokenId = process.env.NFT_ID;
export const quantity = 1;

export const mintingNFT = async() => {
  const tx = await contract.erc1155.claim(tokenId, quantity);
  console.log(tx);
}
