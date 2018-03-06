To run performance tests:

1. Deploy the contracts in this directory using deploy.yaml
2. Copy the keys of the 'root' or 'full' user of the chain to keys.json.
3. Enter the PID of the process whose CPU usage you want to monitor in lib/status.js.

Then:

node many_contracts.js

or

node grow_array.js


CSV data is printed to stdout.

Will keep running until Ctrl+C.
