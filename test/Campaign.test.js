const { expect } = require("chai");
const { ethers } = require("hardhat");



describe("Campaign", () =>{
    let camp;

    beforeEach( async () =>{
        //Fetch the Contract
        const Campaign = await ethers.getContractFactory('Campaign');
        camp = await Campaign.deploy('My Campagin 1', '18');
    });
    it("Has a Name", async() =>{
        const name = await camp.name();
        expect(name).to.equal('My Campagin 1');
    });
    it("Has a value", async () =>{
        const value = await camp.value();
        expect( await camp.value()).to.equal('18');
    });
});
