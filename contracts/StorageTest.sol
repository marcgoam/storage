// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract StorageTest {
    uint public x = 33; //0x0
    uint public y = 66; //0x1

    // keccak256(key + 0x2)
    mapping(uint => uint) testing; //0x2

    constructor() {
        testing[33] = 7; // keccak256(33 + 0x2)
        testing[44] = 8; // keccak256(44 + 0x2)
    }
}
