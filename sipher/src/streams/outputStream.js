const fs = require('fs');
const { exit, stderr } = require('process');
exports.outputStream = (output) => {
  console.log(output);
  if (output) {
    try {
      fs.accessSync(output);
      return fs.createWriteStream(output, {
        flags: 'a',
      });
    } catch (err) {
      stderr.write('Invalid output file');
      exit();
    }
  }
  return process.stdout;
};
