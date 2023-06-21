// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.17;

import "./StorageSlot.sol";
import "hardhat/console.sol";

contract Storage {
    constructor() {
        StorageSlot.getUint256Slot(keccak256("marc")).value = 33;
    }

    function check() external view {
        console.log(StorageSlot.getUint256Slot(keccak256("marc")).value);
    }
}
