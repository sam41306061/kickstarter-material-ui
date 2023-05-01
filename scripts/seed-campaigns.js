async function main() {
    // fecth all the deployed addresses
    const [deployer] = await ethers.getSigners();
    // fetch the contract
    const Campaign = await ethers.getContractFactory("Campaign");
    console.log(`Deploying contract...${deployer.address}`);
    //console.log(deployer.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
