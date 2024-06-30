const { ethers } = require('hardhat');

async function main() {
    const payCreators = await ethers.deployContract('CampaignManager');

    await payCreators.waitForDeployment();

    console.log('NFT Contract Deployed at ' + payCreators.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});