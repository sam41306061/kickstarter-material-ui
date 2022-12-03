//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

// contract CampaginFactory {

// }

contract Campaign {
    string public name = "My Campagin 1";
    uint256 public value = 18;
    // address public recipient = '0x90e2b94532734E2999D4919Ea1b5263Bf35d4B0d';
    // bool public complete = true;
    // uint256 public approvalCount = 1;

constructor(string memory _name, uint256 _value){
    name = _name;
    value = _value;
}
}