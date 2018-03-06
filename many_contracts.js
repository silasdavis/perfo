const fs = require('fs');
const monax = require('@monax/legacy-contracts');
const status = require('./lib/status');

const jobs = require('./jobs_output.json');
const keys = require('./keys.json');

const chainUrl = "http://192.168.99.100:1337/rpc";


const contractManager = monax.newContractManagerDev(chainUrl, keys);
const abi = JSON.parse(fs.readFileSync('./abi/Factory'));
const address = jobs['deployFactory']

const factory = contractManager.newContractFactory(abi).at(address);

function createContracts() {
  factory.createD((error, n) => {
    if (error) throw error;
    status.print(n);
    return createContracts();
  })
}

function createManyContracts(i,max){
  if ( i == max ){
    console.log(`Reached ${max}`);
    process.exit(0);
  }
  factory.createD((error, n) => {
    if (error) throw error;
    status.print(n);
    return createManyContracts(i+1,max);
  })
}

// createManyContracts(1,100);
createContracts();
