const pu = require('pidusage');

// PID to monitor - hardcoded! (set this yourself)
const PID = 6109;

let val = 0;
let cpu = 0

exports.print = function(prefix) {
  const newVal = Number(new Date());
  const result = val === 0 ? 0 : newVal - val;
  val = newVal;
  console.log(prefix + ';' + result + ';' + parseFloat(cpu).toFixed(1));
}

setInterval(function () {
  pu.stat(PID, function (err, stat) {
    cpu = cpu*0.9 + stat.cpu*0.1;
  })
}, 100)
