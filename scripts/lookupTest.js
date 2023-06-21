const hre = require("hardhat");

const addr = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

async function lookup() {
  // eth_getStorageAt
  const valueX = await hre.ethers.provider.getStorage(addr, "0x0");
  console.log("The value of X is " + parseInt(valueX));

  const valueY = await hre.ethers.provider.getStorage(addr, "0x1");
  console.log("The value of Y is " + parseInt(valueY));

  console.log("------------------------------------------------------------");

  const key = hre.ethers.toBeHex(33, 32);
  const baseSlot = hre.ethers.toBeHex(0x2, 32).slice(2);
  const slot = hre.ethers.keccak256(key + baseSlot);

  const valueTesting = await hre.ethers.provider.getStorage(addr, slot);
  console.log(
    "The value of Testing in position 33 is " + parseInt(valueTesting)
  );

  const key2 = hre.ethers.toBeHex(44, 32);
  const baseSlot2 = hre.ethers.toBeHex(0x2, 32).slice(2);
  const slot2 = hre.ethers.keccak256(key2 + baseSlot2);

  const valueTesting2 = await hre.ethers.provider.getStorage(addr, slot2);
  console.log(
    "The value of Testing in position 44 is " + parseInt(valueTesting2)
  );
}

lookup();
