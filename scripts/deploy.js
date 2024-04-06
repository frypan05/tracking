const hre = require("hardhat");

async function main() {
    // Get the ContractFactory of your SimpleContract
    const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding");
    const crowdFunding = await CrowdFunding.deploy();

    await CrowdFunding.deployed();

    console.log(`SimpleContract deployed to: ${contract.address}`);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});