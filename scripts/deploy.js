
const hre = require("hardhat");
//0x610178dA211FEF7D417bC0e6FeD39F05609AD788
async function main() {
    // Get the ContractFactory of your SimpleContract
    const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding");
    const crowdFunding = await CrowdFunding.deploy();

    await crowdFunding.waitForDeployment();

    console.log(`CrowdFunding deployed to ${crowdFunding.target}`);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});