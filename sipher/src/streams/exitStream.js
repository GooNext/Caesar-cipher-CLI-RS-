const fs = require('fs');
const { exit, stderr } = require('process');
exports.exitStream = (e) => {
  if (e) {
    stderr.write('Invalid input file');
    exit(e);
    process.exit(2);
  }
};
