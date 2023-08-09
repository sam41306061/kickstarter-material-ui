const contribution = (n) => {
  return ethers.utils.parseEther(n.toString(), "ether");
};

const wait = (seconds) => {
  const milliseconds = seconds * 1000;
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function main() {
  // fecth all the deployed addresses
  const signers = await ethers.getSigners();

  // Fetch network
  // const { chainId } = await ethers.provider.getNetwork()
  // console.log("Using chainId:", chainId);

  // Fetch deployed campaigns
  const Campaign1 = await ethers.getContractAt(
    "Campaign",
    "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  );
  console.log(`Campign 1 as fetched at: ${Campaign1.address}`);

  const Campaign2 = await ethers.getContractAt(
    "Campaign",
    "0x8464135c8F25Da09e49BC8782676a84730C318bC"
  );
  console.log(`Campign 2 as fetched at: ${Campaign2.address}`);

  const Campaign3 = await ethers.getContractAt(
    "Campaign",
    "0x663F3ad617193148711d28f5334eE4Ed07016602"
  );
  console.log(`Campign 3 as fetched at: ${Campaign3.address}\n`);

  const owner = signers[0];
  const contributer = signers[1];
  let amount = contribution(100);

  let transaction, result;
  transaction = await Campaign1.contribute({ value: amount });
  console.log(
    `Contributing to Campaign 1 with a total of  ${amount} from ${contributer.address} to ${owner.address} campaign\n`
  );

  /////////////////////////////////////////////////////////////
  // contributions to all campaigns
  //
  const contributer1 = signers[2];
  const contributer2 = signers[3];
  amount = contribution(200);

  //contribute to campaign 2 approved by contributer1
  transaction = await Campaign2.connect(contributer1).contribute({
    value: amount,
  });
  await transaction.wait();
  console.log(
    `Contributed ${amount} from \n ${owner.address} \n to ${Campaign2.address} campaign\n`
  );

  //contribute to campaign 3 approved by contributer2
  transaction = await Campaign3.connect(contributer2).contribute({
    value: amount,
  });
  await transaction.wait();
  console.log(
    `Contributed ${amount} from \n ${owner.address}\n to ${Campaign3.address} campaign\n`
  );

  //contribute to campaign 1 approved by contributer1
  transaction = await Campaign1.connect(contributer1).contribute({
    value: amount,
  });
  await transaction.wait();
  console.log(
    `Contributed ${amount} from \n  ${owner.address}  \n to ${Campaign1.address} campaign\n`
  );

  /////////////////////////////////////////////////////////////
  //Seed create a request
  //

  // owner create a request for Campaign 1
  transaction = await Campaign1.connect(owner).createRequest(
    "Buy a car",
    contribution(100),
    owner.address
  );
  result = await transaction.wait();
  console.log(
    `Created request for ${owner.address} to ${Campaign1.address} campaign\n`
  );

  // contributors deny request for Campaign 1
  // requestId = result.events[0].args.requestId;
  // console.log(`requestId: ${requestId}`);
  // transaction = await Campaign1.connect(contributer1).denyRequest(requestId);
  // result = await transaction.wait();
  // console.log(`Denied request for ${contributer1.address}\n`);

  /////////////////////////////////////////////////////////////
  // Seed
  //

/////////////////////////////////////////////////////////////
  //Multiple Contributions 
  //
// campagin 1 approved by contributer2 10 times 
for (let i = 0; i < 10; i++) {
  const contributorAddress = signers[i].address;
  const contributor = ethers.provider.getSigner(contributorAddress);
  transaction = await Campaign1.connect(contributor).contribute({
    value: amount,
  });
  await transaction.wait();
  console.log(
    `Contributed ${amount} from \n  ${owner.address}  \n to ${Campaign1.address} campaign\n`
  );
}
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
