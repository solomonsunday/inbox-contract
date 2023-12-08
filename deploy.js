const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");
const { interface, bytecode } = require("./compile");
require("dotenv").config();

// deploy code will go here

const provider = new HDWalletProvider(
  `${process.env.mnemonic}`,
  "https://goerli.infura.io/v3/e21e775d1b7143e591bd8b41e5f09a72"
);
const web3 = new Web3(provider);

const deploy = async () => {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0], "account");

    const result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: bytecode, arguments: ["Hi there"] })
      .send({ gas: 1000000, from: accounts[0] });

    console.log("contract deploy to", result.options.address);
    provider.engine.stop();
  } catch (error) {
    console.log(error);
  }
};
deploy();
