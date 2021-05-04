const fs = require('fs');

exports.inputStream = (input) => {
  if (input) {
    return fs.createReadStream(input, 'utf8');
  }
  return process.stdin;
};
