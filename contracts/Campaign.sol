pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract Campaign {
    string public name;
    // uint256 public minimum;
    address public manager;
    // address[] public approvers;

    
    constructor(string memory _name, address _manager){
        name = _name;
        manager = _manager;
        
    }

    // function contribute() public payable {
    //     require(msg.value > minimum);

    //     approvers.push(msg.sender);
    // }
}
