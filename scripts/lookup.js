const hre = require("hardhat");

const addr = "0x0165878A594ca255338adfa4d48449f69242Eb8F";

async function lookup() {
  const slot = hre.ethers.keccak256(hre.ethers.toUtf8Bytes("marc"));

  const valueTesting = await hre.ethers.provider.getStorage(addr, slot);
  console.log("The value of Testing in marc slot is " + parseInt(valueTesting));

  const storage = await hre.ethers.getContractAt("Storage", addr);
  await storage.check();
}

lookup();
