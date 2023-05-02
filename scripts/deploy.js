async function main() {
  const signers = await ethers.getSigners();
  console.log("Using signers:", signers.map(signer => signer.address));

  const campaignNames = ["Campaign 1", "Campaign 2", "Campaign 3"];
  const campaignFundingGoals = [100, 200, 300]; // in ether
  const campaignAddresses = [
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
  ];

  for (let i = 0; i < campaignNames.length; i++) {
    // Get the signer for the specified address
    const signer = signers.find(s => s.address.toLowerCase() === campaignAddresses[i].toLowerCase());
    if (!signer) {
      console.error(`No signer found for address ${campaignAddresses[i]}. Skipping deployment of ${campaignNames[i]}.`);
      continue;
    }

    const Campaign = await ethers.getContractFactory("Campaign", signer);
    const campaign = await Campaign.deploy(campaignFundingGoals[i], signer.address);
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
