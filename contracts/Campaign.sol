pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Campaign {
    address public manager;
    uint public minimumContribution;
    address[] public approvers;
    uint public numRequests;
    mapping(uint => Request) public requests;


    struct Request {
        string description;
        uint value;
        address payable recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    constructor(uint _minimumContribution, address _manager) {
        minimumContribution = _minimumContribution;
        manager = _manager;
    }

    function contribute() public payable {
        require(msg.value >= minimumContribution, "Contribution amount is less than minimum");
        approvers.push(msg.sender);
    }

    function createRequest(string memory _description, uint _value, address payable _recipient) public onlyManager {
        require(_value <= address(this).balance, "Not enough funds available");
        Request storage newRequest = requests[numRequests];
        newRequest.description = _description;
        newRequest.value = _value;
        newRequest.recipient = _recipient;
        newRequest.complete = false;
        newRequest.approvalCount = 0;
        numRequests++;
    }

    // approveRequest

    // finalizeRequest

    // can be called before or after a function call. sets managers as owner. 
     modifier onlyManager() {
        require(msg.sender == manager, "Only the manager can call this function");
        _;
    }
}
