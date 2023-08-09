pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Campaign {
    
    struct Request {
        uint id;
        string description;
        uint value;
        address payable recipient;
        bool complete;
        uint approvalCount;
    }
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;

    // can be called before or after a function call. sets managers as owner.
    modifier onlyManager() {
        require(
            msg.sender == manager,
            "Only the manager can call this function"
        );
        _; // all code added from the function
    }

    constructor(uint _minimumContribution, address _manager) {
        minimumContribution = _minimumContribution;
        manager = _manager;
    }

    function contribute() public payable {
        require(
            msg.value >= minimumContribution,
            "Contribution amount is less than minimum"
        );
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    
    function createRequest(
        string memory _description,
        uint _value,
        address payable _recipient
    ) public onlyManager {
        require(approvers[msg.sender], "Only approvers can create requests");
        Request memory newRequest = Request({
            id: requests.length,
            description: _description,
            value: _value,
            recipient: _recipient,
            complete: false,
            approvalCount: 0
        });
        requests.push(newRequest);
    }
    function balance() public view returns (uint) {
        return address(this).balance;
    }

    // modifer helps this fuction
    function approverRequest(
        uint _value,
        uint _approvalCount
    ) public {
        require(_value <= address(this).balance, "Not enough funds available");
        require(requests.length >= 0, "No requests available");
        Request storage request = requests[requests.length];
        request.approvalCount = _approvalCount;
    }

    // finalizeRequest
    function finalizeRequest(uint index) public onlyManager {
        Request storage request = requests[index];

        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);

        request.recipient.transfer(request.value);
        request.complete = true;
    }
}
