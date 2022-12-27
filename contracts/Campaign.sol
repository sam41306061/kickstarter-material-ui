pragma solidity ^0.8.0;
import "hardhat/console.sol";


contract Campaign {
    // string public description;
    // address public recipient;
    // bool public complete;
    // uint approvalCount;
    // uint value;
     
    //variables for contract
    address public manager;
    uint public minimumContribution;
    address[] public approvers; 

    // Campgain setup
    constructor(uint minimum) public {
         manager = msg.sender;
         minimumContribution = minimum;
    }
    // contribute
    function contribute() public payable{
        require(msg.value > minimumContribution);
        
        approvers.push(msg.sender);
    }
    // createRequest
    //approveRequest
    //finalizeRequest
  
}



