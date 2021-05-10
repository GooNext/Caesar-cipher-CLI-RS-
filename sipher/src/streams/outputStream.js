const os = require('os');
const fs = require('fs');
exports.outputStream = (path) => {
  let reuslt;
  if (path) {
    reuslt = fs.createWriteStream(path, { flags: 'a' });
    reuslt.on('close', function () {
      fs.createWriteStream(path, { flags: 'a' }).write(os.EOL);
    });
  } else {
    reuslt = process.stdout;
  }
  return reuslt;
};
