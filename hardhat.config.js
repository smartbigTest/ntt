require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
require("@nomicfoundation/hardhat-ledger");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.20",
    networks: {
        eth: {
            url: process.env.ETH_MAINNET_RPC_URL,
            ledgerAccounts: [
                "0x8581B506caf4bB6a28FC7e855aBb059FFA991665"
            ] //하드웰렛 이더리움 네트워크 선택 후 레디인 상태에서 해야함 accounts, ledgerAccounts 같이 사용 못함
        },
        sepolia: {
            url: process.env.ETH_SEPOLIA_RPC_URL,
            ledgerAccounts: [
                "0x8581B506caf4bB6a28FC7e855aBb059FFA991665"
            ] //하드웰렛 이더리움 네트워크 선택 후 레디인 상태에서 해야함 accounts, ledgerAccounts 같이 사용 못함
        },
    },
    etherscan: {
        apiKey: {
            sepolia: "6JJ47F2N6U3CHQNHYAAT3PF887ND3R4IFR",
            mainnet: "6JJ47F2N6U3CHQNHYAAT3PF887ND3R4IFR"
        }
    }
};
