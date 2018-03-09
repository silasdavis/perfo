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
burrow 0.17.1 (git develop branch, 2748007, Tue Mar 6 2018)

bos 0.0.1 (git develop branch, 0ec4d44, Wed Mar 7 2018)

## Instructions
To run tests:

1. Create a chain with 1 full account and 0 participants
```
monax-keys server &
burrow  spec -p0 -f1 | burrow configure -s- -v0 > burrow.toml
burrow > /dev/null 2>&1 &
```
2. Copy keys of full account to keys.json. Private key can be obtained from `~/.monax/keys/data/<address>`, base64 encoded (convert to hex manually).
3. Deploy the contracts
```
bos pkgs do --address <address of full account> --file epm.yaml
```
4. Enter the PID of the burrow process (or any process that you want to monitor) in lib/status.js.
5. install pidusage: `npm install pidusage`
6. run `node many_contracts.js`or `node grow_array.js`
   CSV data is printed to stdout. Type Ctrl-C to exit.

