const fs = require('fs');

exports.inputStream = (path) => {
  let result;
  if (path) {
    result = fs.createReadStream(path);
  } else {
    result = process.stdin;
    console.log('Type your text');
  }
  return result;
};
