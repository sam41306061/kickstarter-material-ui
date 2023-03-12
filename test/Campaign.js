const { expect } = require("chai");

describe("Campaign", function() {
  let Campaign;
  let campaign;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function() {
    Campaign = await ethers.getContractFactory("Campaign");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    campaign = await Campaign.deploy(100, owner.address);
    await campaign.deployed();
  });

  describe("Deployment", function() {
    it("Should set the right owner and minimumContribution", async function() {
      expect(await campaign.manager()).to.equal(owner.address);
      expect(await campaign.minimumContribution()).to.equal(100);
    });
  });

  describe("Contribute", function() {
    it("Should add the sender to the approvers list", async function() {
      await campaign.contribute({ value: 200 });
      expect(await campaign.approvers(0)).to.equal(owner.address);
    });

    it("Should throw an error if contribution amount is less than minimum", async function() {
      await expect(campaign.contribute({ value: 50 })).to.be.revertedWith("Contribution amount is less than minimum");
    });
  });

  describe("Create Request", function() {
    it("Should create a request", async function() {
      await campaign.contribute({ value: 200 });
      await campaign.createRequest("Computer system update", 150, addr1.address);

      const request = await campaign.requests(0);
      expect(request.description).to.equal("Computer system update");
      expect(request.value).to.equal(150);
      expect(request.recipient).to.equal(addr1.address);
      expect(request.complete).to.equal(false);
      expect(request.approvalCount).to.equal(0);
    });

    it("Should throw an error if value is greater than the contract balance", async function() {
      await expect(campaign.createRequest("Computer system update", 500, addr1.address)).to.be.revertedWith("Not enough funds available");
    });
  });

  // describe("Approve Request", function() {
  //   it("Should approve a request", async function() {
  //     await campaign.contribute({ value: 200 });
  //     await campaign.createRequest("Computer system update", 150, addr1.address);

  //     await campaign.approveRequest(0);

  //     const request = await campaign.requests(0);
  //     expect(request.approvals[owner.address]).to.equal(true);
  //     expect(request.approvalCount).to.equal(1);
  //   });
  // });

  // describe("Finalize Request", function() {
  //   it("Should finalize a request", async function() {
  //     await campaign.contribute({ value: 200 });
  //     await campaign.createRequest("Buy a new laptop", 150, addr1.address);
  //     await campaign.approveRequest(0);
  //     await campaign.finalizeRequest(0);

  //     const request = await campaign.requests(0);
  //     expect(request.complete).to.equal(true);
  //   });

  //   it("Should throw an error if request has not been approved by more than half of the approvers", async function() {
  //     await campaign.contribute({ value: 200 });
  //     await campaign.createRequest("Buy a new laptop", 150, addr1.address);

  //     await expect(campaign.finalizeRequest(0)).to.be.revertedWith("Not enough approvals");
  //   });
  // });

});
