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


describe("Create Request", () => {
  beforeEach(async () => {
    await campaign.connect(addr1).contribute({ value: 200 });
    await campaign.connect(addr2).contribute({ value: 200 });

    await campaign
      .connect(owner)
      .createRequest("Test Request", 200, addr1.address, 0);
  });

  it("Should transfer funds and mark request as complete", async function () {
    await campaign.connect(addr1).approverRequest(400, 1, "");
    await campaign.connect(addr2).approverRequest(400, 2, "");

    const initialBalance = await ethers.provider.getBalance(addr1.address);
    await campaign.connect(owner).finalizeRequest(0);
    const finalBalance = await ethers.provider.getBalance(addr1.address);

    expect(finalBalance.sub(initialBalance)).to.equal(400);
    expect(await campaign.requests(0)).to.deep.equal({
      id: 0,
      description: "Test Request",
      value: 400,
      recipient: addr1.address,
      complete: true,
      approvalCount: 2,
    });
  });

  // it("Should revert if not enough approvers", async function () {
  //   await campaign.connect(addr1).approverRequest(400, 1, "");
  //   await expect(campaign.connect(owner).finalizeRequest(0)).to.be.revertedWith(
  //     "Request has not been approved by enough approvers"
  //   );
  // });
  // it("Should revert if request is already complete", async ()=> {

  // });

  });
}); 
