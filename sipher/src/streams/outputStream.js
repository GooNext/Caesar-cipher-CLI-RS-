exports.outputStream = (output) => {
  if (output) {
    try {
      fs.accessSync(output);
      return fs.createWriteStream(output, {
        flags: 'a',
      });
    } catch (err) {
      process.stderr.write('Invalid output file');
      exit();
    }
  }
  return process.stdout;
};
