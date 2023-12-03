// compile code will go here
const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf-8");

module.exports = solc.compile(source, 1).contracts[":Inbox"];

/*npm install mocha ganache web3
const {web3} = require('web3)
const ganache = require('ganache')

*/
