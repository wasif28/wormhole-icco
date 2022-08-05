import { describe, expect, it } from "@jest/globals";
import { ChainId, CHAIN_ID_ETH, CHAIN_ID_BSC } from "@certusone/wormhole-sdk";

import Tilt from "./tilt.json";

const ci = !!process.env.CI;

// see devnet.md
export const ETH_NODE_URL = ci ? "ws://eth-devnet:8545" : "ws://localhost:8545";
export const BSC_NODE_URL = ci ? "ws://eth-devnet:8546" : "ws://localhost:8546";

export const ETH_PRIVATE_KEY1 =
  "0x6370fd033278c143179d81c5526140625662b8daa446c22ee2d73db3707e620c"; // account 2
export const ETH_PRIVATE_KEY2 =
  "0x646f1ce2fdad0e6deeeb5c7e8e5543bdde65e86029e2fd9fc169899c440a7913"; // account 3
export const ETH_PRIVATE_KEY3 =
  "0xadd53f9a7e588d003326d1cbf9e4a43c061aadd9bc938c843a79e7b4fd2ad743"; // account 4
export const ETH_PRIVATE_KEY4 =
  "0x395df67f0c2d2d9fe1ad08d1bc8b6627011959b79c53d7dd6a3536a33ab8a4fd"; // account 5
export const ETH_PRIVATE_KEY5 =
  "0xe485d098507f54e7733a205420dfddbe58db035fa577fc294ebd14db90767a52"; // account 6
export const KYC_PRIVATE_KEYS =
  "0xb0057716d5917badaf911b193b12b910811c1497b5bada8d7711f758981c3773"; // account 9

export const ETH_CORE_BRIDGE_ADDRESS =
  "0xC89Ce4735882C9F0f0FE26686c53074E09B0D550";
export const ETH_TOKEN_BRIDGE_ADDRESS =
  "0x0290FB167208Af455bB137780163b7B7a9a10C16";

// decimals for min/max raise denomination
export const DENOMINATION_DECIMALS = 18;

// contributors only registered with conductor on CHAIN_ID_ETH
export const ETH_TOKEN_SALE_CONDUCTOR_ADDRESS = Tilt.conductorAddress;
export const ETH_TOKEN_SALE_CONDUCTOR_CHAIN_ID = Tilt.conductorChain;
export const TOKEN_SALE_CONTRIBUTOR_ADDRESSES = new Map<ChainId, string>();
TOKEN_SALE_CONTRIBUTOR_ADDRESSES.set(CHAIN_ID_ETH, Tilt.ethContributorAddress);
TOKEN_SALE_CONTRIBUTOR_ADDRESSES.set(CHAIN_ID_BSC, Tilt.bscContributorAddress);

export const WETH_ADDRESS = "0xDDb64fE46a91D46ee29420539FC25FD07c5FEa3E";
export const WBNB_ADDRESS = "0xDDb64fE46a91D46ee29420539FC25FD07c5FEa3E";

export const WORMHOLE_RPC_HOSTS = ci
  ? ["http://guardian:7071"]
  : ["http://localhost:7071"];

describe("consts should exist", () => {
  it("Contributors Defined Is Correct Number", () => {
    expect.assertions(1);
    expect(TOKEN_SALE_CONTRIBUTOR_ADDRESSES.size).toEqual(2);
  });
});
