const contribution = (n) => {
  return ethers.utils.parseEther(n.toString(), "ether");
};

const wait = (seconds) => {
  const milliseconds = seconds * 1000;
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function main() {
  // Fetch all the deployed addresses
  const signers = await ethers.getSigners();

  // Define campaign addresses
  const campaignAddresses = [
    "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    "0x8464135c8F25Da09e49BC8782676a84730C318bC",
    "0x663F3ad617193148711d28f5334eE4Ed07016602",
  ];

  // Fetch deployed campaigns
  const campaigns = await Promise.all(
    campaignAddresses.map((address) =>
      ethers.getContractAt("Campaign", address)
    )
  );

  campaigns.forEach((campaign, index) => {
    console.log(`Campaign ${index + 1} fetched at: ${campaign.address}`);
  });

  const owner = signers[0];
  const contributors = signers.slice(1, 4); // Use the first 3 signers as contributors
  const amount = contribution(100);

  let transaction, result;

  // Create multiple manager requests for different campaigns
  for (let i = 0; i < campaigns.length; i++) {
    const campaign = campaigns[i];
    transaction = await campaign.connect(owner).createRequest(
      `Manager request ${i + 1}`,
      amount,
      owner.address
    );
    result = await transaction.wait();
    console.log(
      `Created manager request for ${owner.address} in campaign ${i + 1}\n`
    );
  }

  // Make contributions to multiple campaigns
  for (let i = 0; i < campaigns.length; i++) {
    const campaign = campaigns[i];
    const contributor = contributors[i % contributors.length];
    transaction = await campaign.connect(contributor).contribute({
      value: amount,
    });
    await transaction.wait();
    console.log(
      `Contributed ${amount} from ${contributor.address} to campaign ${
        i + 1
      }\n`
    );
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });