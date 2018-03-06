const fs = require('fs');
const monax = require('@monax/legacy-contracts');
const status = require('./lib/status');

const jobs = require('./jobs_output.json');
const keys = require('./keys.json');

const chainUrl = "http://192.168.99.100:1337/rpc";

const contractManager = monax.newContractManagerDev(chainUrl, keys);
const abi = JSON.parse(fs.readFileSync('./abi/Storage'));
const address = jobs['deployStorage']

const storage = contractManager.newContractFactory(abi).at(address);

function growArrayForever() {
  storage.grow(1, function(error, n) {
    if (error) throw error;
    status.print(n);
    return growArrayForever();
  })
}

return growArrayForever();
