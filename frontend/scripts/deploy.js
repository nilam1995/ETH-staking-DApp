const hre = require("hardhat");

async function main() {
  const Staking = await hre.ethers.getContractFactory("Staking");
  const staking = await Staking.deploy();

  await staking.deployed();

  console.log(`crowdFunding deployed to ${staking.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
