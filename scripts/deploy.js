async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const campaignNames = ["Campaign 1", "Campaign 2", "Campaign 3"];
    const campaignFundingGoals = [100, 200, 300]; // in ether

    for (let i = 0; i < campaignNames.length; i++) {
      const Campaign = await ethers.getContractFactory("Campaign");
      const campaign = await Campaign.deploy(campaignFundingGoals[i], deployer.address);
      console.log(`Deploying ${campaignNames[i]}...`);
      await campaign.deployed();
      console.log(`${campaignNames[i]} deployed at: ${campaign.address}`);
  }

  // const Campaign = await ethers.getContractFactory("Campaign");
  // const campaign = await Campaign.deploy(100, deployer.address); // amount of for camp, deployer address 

  console.log("Campaign contract address:", campaign.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
