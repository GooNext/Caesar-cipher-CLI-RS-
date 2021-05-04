exports.exitStream = (e) => {
  if (e) {
    stderr.write('Invalid input file');
    exit(e);
    process.exit(2);
  }
};
