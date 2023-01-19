const ConductorImplementation = artifacts.require("ConductorImplementation");
const fs = require("fs");
const path = require("path");
import { tryNativeToUint8Array, tryUint8ArrayToNative } from "@certusone/wormhole-sdk";
import { web3 } from "@project-serum/anchor";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";

module.exports = async function(deployer, network) {

  const file = fs.readFileSync(path.join(__dirname, "deployedAddresses.json"));
  
  let conductorAddr = file.conductor.conductorAddress; 
  const conductor = await ConductorImplementation.at(conductorAddr);

  for (const contributor of file.contributor) {
    if(contributor.contributorChain == 1){
      let contributorAddressBytes;
      contributorAddressBytes = tryNativeToUint8Array(contributor.contributorAddress, "solana");
      const programId = new web3.PublicKey(contributorAddressBytes);
      const [key, _] = findProgramAddressSync([Buffer.from("emitter")], programId);
      contributorAddressBytes = tryNativeToUint8Array(key.toString(), "solana");

      let contributorAddressHex = uint8ArrayToHex(contributorAddressBytes);

      const tx = await conductor.registerChain(
        contributor.contributorChain,
        `0x${contributorAddressHex}`
      );

      console.log(tx, "\n");
    }
    else {
      const tx = await conductor.registerChain(
        contributor.contributorChain,
        `0x000000000000000000000000${contributor.contributorAddress.subString(2)}`
      );
      console.log(tx, "\n");
    }
  }

};
