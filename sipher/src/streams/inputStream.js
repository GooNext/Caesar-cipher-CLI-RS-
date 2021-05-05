const fs = require('fs');

exports.inputStream = (input) => {
  let inputStream;
  if (input) {
    inputStream = fs.createReadStream(input);
  } else {
    inputStream = process.stdin;
    console.log('Type your text');
  }
  return inputStream;
};
