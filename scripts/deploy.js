// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const QUEENOFUNIVERSE = await ethers.getContractFactory('QUEENOFUNIVERSE');
    console.log('Deploying QUEENOFUNIVERSE...');
    const queenOfUniverse = await QUEENOFUNIVERSE.deploy();
    await queenOfUniverse.deployed();
    console.log('Box deployed to:', queenOfUniverse.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });