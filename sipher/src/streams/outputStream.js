const fs = require('fs');
const { exit, stderr } = require('process');
exports.outputStream = (filePath) => {
  let output;
  if (filePath) {
    output = fs.createWriteStream(filePath, { flags: 'a' });
    output.on('close', function () {
      fs.createWriteStream(filePath, { flags: 'a' }).write(os.EOL);
    });
  } else {
    output = process.stdout;
  }
  return output;
};
