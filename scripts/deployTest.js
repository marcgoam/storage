const hre = require("hardhat");

async function main() {
  const Storage = await hre.ethers.getContractFactory("StorageTest");
  const storage = await Storage.deploy();

  await storage.waitForDeployment();

  console.log(`Contract deployed to ${await storage.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
