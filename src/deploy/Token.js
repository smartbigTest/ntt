const { ethers } = require("hardhat");

//  실행명령어 
//  npx hardhat run src/deploy/Token.js --network eth
//  npx hardhat run src/deploy/Token.js --network sepolia

// 이더스캔 검증
// npx hardhat verify --network sepolia 0x58C002B77f13342311F70D7D01E22f65Ef115Ee2 10000000000000000000000000
// npx hardhat verify --network eth 0xa60c29111c27F2Ca1cBb4b19c7b32F99aEf2B5AC 10000000000000000000000000
async function main() {
   const initialSupply = ethers.parseEther("10000000"); //10000000000000000000000000
   const Erc20Token = await ethers.getContractFactory("NTT");
   const erc20Token = await Erc20Token.deploy(initialSupply);
   await erc20Token.waitForDeployment()
   console.log(await erc20Token.getAddress());
}

main().catch((error) => {
   console.error(error);
   process.exitCode = 1;
 });