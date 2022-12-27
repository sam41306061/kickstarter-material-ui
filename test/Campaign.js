const { defaultPath } = require("ethers/lib/utils");
const { ethers } = require("hardhat");
const { add, result } = require("lodash");

describe ("Campaign", () => {

    let manager = 'Campgain 1';
    let minimumContribution = 18;
   
    // deployment test
    describe('Deployment', () => {
        it("this is the manager", async ()=> {
            return manager; 
        });
        it('minimum amount set', async ()=> {
            return minimumContribution;
        });
    });

    // contribution
    describe('Contribution', () => {
        describe('Success', () =>{
            const event = result.events[0];
            expect(event.event).to.equal('contribute');
        });
    });

}); 