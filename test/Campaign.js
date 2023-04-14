const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('Campaign', () => {
  let Campaign;
  let campaign;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async () => {
    [owner, addr1, addr2] = await ethers.getSigners();

    Campaign = await ethers.getContractFactory("Campaign");
    campaign = await Campaign.deploy(100, owner.address);

    await campaign.deployed();
  });

  // check that the contract deployed
  describe("Deployment", () => {
    it("Should set the right owner", async () => {
      expect(await campaign.manager()).to.equal(owner.address);
    });

    it("Should set the minimum contribution", async () => {
      expect(await campaign.minimumContribution()).to.equal(100);
    });
  });

  //checks that an approver can contribue, makes sure the mapping is updated
  describe("Contribute", () => {
    it("Should accept contributions", async () => {
      await campaign.connect(addr1).contribute({ value: 150 });
      expect(await campaign.approvers(addr1.address)).to.equal(true);
      expect(await campaign.approversCount()).to.equal(1);
    });

    it("Should reject contributions below the minimum amount", async () => {
      await expect(campaign.connect(addr1).contribute({ value: 50 })).to.be.revertedWith(
        "Contribution amount is less than minimum"
      );
      expect(await campaign.approversCount()).to.equal(0);
    });
  });

  //checks that the manager can create a payment request
  describe("Create Payment Request", () => {
    it("Should create a payment request", async () => {
      await campaign.connect(addr1).contribute({ value: 150 });
      await campaign.connect(owner).createRequest("Test Request", 100, addr1.address);
      expect(await campaign.requestsCount()).to.equal(1);
    });
  });
}); 
