const { expect } = require("chai");
const { ethers } = require("hardhat");



describe("Campaign", () =>{
    let camp;

    beforeEach( async () =>{
        //Fetch the Contract
        const Campaign = await ethers.getContractFactory('Campaign');
        camp = await Campaign.deploy();
    })
    it("Has a Name", async() =>{
        const name = await camp.name();
        expect(name).to.equal('My Campagin 1');
    })
});
