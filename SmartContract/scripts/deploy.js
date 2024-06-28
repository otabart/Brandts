const { ethers } = require('hardhat');

// const main = async () => {
//     const [deployer] = await hre.ethers.getSigners();
//     const accountBalance = await deployer.provider.getBalance(deployer.address);

//     console.log("Deploying contracts with account: ", deployer.address);
//     console.log("Account balance: ", accountBalance.toString());

//     const waveContractFactory = await hre.ethers.getContractFactory("ERC20Token");

//     const _tokenName = "G-Naira"
//     const _tokenSymbol = "GNR"
//     const _tokenDecimal = 18

//     const waveContract = await waveContractFactory.deploy(_tokenName, _tokenSymbol, _tokenDecimal);
//     await waveContract.waitForDeployment();

//     console.log("WavePortal address: ", await waveContract.getAddress());
// };

// const runMain = async () => {
//     try {
//         await main();
//         process.exit(0);
//     } catch (error) {
//         console.log(error);
//         process.exit(1);
//     }
// };

// runMain();

async function main() {
    const payCreators = await ethers.deployContract('CampaignManager');

    await payCreators.waitForDeployment();

    console.log('NFT Contract Deployed at ' + payCreators.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});