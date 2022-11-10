module.exports = async function(deployer) {
  // Use deployer to state migration tasks.
    const SwishFish = artifacts.require("SwishFish");

    await deployer.deploy(SwishFish,"0xEDa73409d4bBD147f4E1295A73a2Ca243a529338","0x34390458758b6eFaAC5680fBEAb8DE17F2951Ad0","0x0B7Ec1b3c2003D23D82b7F4712454934737A38d8","0x0B569e3335895E327395C2B968996FD1689d35e3");
    const contract = await SwishFish.deployed();

    console.log("Contract address:", contract.address)
};
