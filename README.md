# perfo

This repo contains code to reproduce a problem with monax.

Creating many contracts leads to high CPU load and performance problems with the chain.

Monax CLI Version: 0.17.0 & 0.18

To run tests:

1. Create a simplechain (1 full account) and start the chain
2. Deploy the contracts using deploy.yaml
2. Copy the keys of the 'full' user of the chain to keys.json.
3. Enter the PID of the (Monax) process (e.g. VBoxHeadless) of which CPU usage you want to monitor in lib/status.js.
4. run `node many_contracts.js`or `node grow_array.js`
   CSV data is printed to stdout. Type Ctrl-C to exit.

