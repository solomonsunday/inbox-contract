const ganache = require("ganache");
const { Web3 } = require("web3");
const assert = require("assert");

// updated ganache and web3 imports added for convenience
// contract test code will go here

/*
 Function => purpose
 it => run a test and make an assertion
 describe => Groups together it function
 beforeEach => Execute some general setup code

*/

const web3 = new Web3(ganache.provider());

let accounts;
beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    console.log(accounts);
  });
});

// class Car {
//   park() {
//     return "stopped";
//   }
//   drive() {
//     return "vroom";
//   }
// }
// let car;
// beforeEach(() => {
//   car = new Car();
// });

// describe("Car", () => {
//   it("can park", () => {
//     assert.equal(car.park(), "stopped");
//   });

//   it("can drive", () => {
//     assert.equal(car.drive(), "vroom");
//   });
// });
