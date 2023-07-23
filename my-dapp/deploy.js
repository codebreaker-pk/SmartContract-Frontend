// deploy.js
async function main() {
    const SimpleContract = await ethers.getContractFactory("SimpleContract");
    const contract = await SimpleContract.deploy();
    await contract.deployed();
    console.log("Contract deployed to address:", contract.address);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  