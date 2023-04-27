async function main() {
    console.log("Preparing to deploy...")
//fetch contract
const Campaign = await ethers.getContractFactory("Campaign");

// fetch accounts
const accounts = await ethers.getSigners();
console.log(`Accounts fetched:\n${accounts[0].address}\n${accounts[1].address}\n`)

//deploy contract
const campaign = await Campaign.deploy(accounts[0].address, accounts[1].address,10);
await campaign.deploy();
console.log(`Contract deployed to address: ${campaign.address}`);

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });