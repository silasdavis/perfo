# perfo

This repo contains code to reproduce a problem with monax. 

## Issue 
Creating many contracts leads to high CPU load and performance problems with the chain.
After stopping the chain the CPU usage drops, but then it is no longer possible to start the chain as this leads to an error "panic: 
Paniced on a Sanity Check: Expected storeHeight (1867) and stateHeight (1866) to match", which seems to be a problem with Tendermint ( see 
https://github.com/tendermint/tendermint/issues/388 ). There has been a fix in Tendermint (version 0.9) but this version is not used yet 
by monax, apparently.

There might be a relation with the following issue: https://github.com/hyperledger/burrow/issues/611

## Version info
Monax CLI Version: 0.17.0 & 0.18

## Instructions
To run tests:

1. Create a simplechain (1 full account) and start the chain
2. Deploy the contracts using deploy.yaml
2. Copy the keys of the 'full' user of the chain to keys.json.
3. Enter the PID of the (Monax) process (e.g. VBoxHeadless) of which CPU usage you want to monitor in lib/status.js.
4. install pidusage: `npm install pidusage`
4. run `node many_contracts.js`or `node grow_array.js`
   CSV data is printed to stdout. Type Ctrl-C to exit.

