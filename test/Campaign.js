const { expect } = require("chai");
const { ethers } = require("hardhat");
const { min } = require("moment/moment");



describe("Campaign", () => {
  let campaign;
  let manager;
 

  
  beforeEach(async() =>{
    const Campaign  = await ethers.getContractFactory('Campaign');
    campaign = await Campaign.deploy('Kickstart Me',"0xd115bffabbdd893a6f7cea402e7338643ced44a6");
  });
  it("get the contract name", async () => {
    const name = await campaign.name();
    expect(name).to.equal('Kickstart Me');
  }); 
  it("has a manager", async () => {
    manager = await campaign.manager();
    expect(manager).to.equal(manager);
  });
  // it("has a minimum contribution", async () => {
  //   minimum = await campaign.minimumContribution();
  //   expect(minimum).to.equal(minimum);
  // });
});
