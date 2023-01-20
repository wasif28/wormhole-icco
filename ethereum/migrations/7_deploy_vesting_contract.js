const Vesting = artifacts.require("VestingWallet");
const DeploymentConfig = require(`${ethereumRootPath}/icco_deployment_config.js`);

const fs = require("fs");
const path = require("path");

module.exports = async function(deployer, network) {
  const config = DeploymentConfig[network];
  if (!config) {
    throw Error("deployment config undefined");
  }
  
  const nowTime = new Date().getTime / 1000;

  const vestingDetails = {
    _cliffStartTimeInSeconds: (nowTime).toString(),
    _cliffPercentage: "50",
    _linearStartTimeInSeconds: (nowTime + 60).toString(),
    _linearEndTimeInSeconds: (nowTime + 3000).toString(),
    _linearReleasePeriodInSeconds: "60",
  }

  const file = fs.readFileSync(path.join(__dirname, "deployedAddresses.json"));
  const selectedContributor = file.contributors.filter((element) => {
    return (element.network == network);
  })

  await deployer.deploy(Vesting, vestingDetails, selectedContributor.contributorAddress);

  const fp = path.join(__dirname, "vestingAddresses.json");
  const contents = fs.existsSync(fp)
        ? JSON.parse(fs.readFileSync(fp, "utf8"))
        : { Vesting: [] };

  const VestingDetails = {
    network: network,
    chain: parseInt(config.contributorChainId),
    contractAddress: Vesting.address,
    vestingParameters: vestingDetails,
    creationEPOCH: nowTime
  }
  contents.Vesting.push(VestingDetails);

  fs.writeFileSync(fp, JSON.stringify(contents, null, 2), "utf8");

};
