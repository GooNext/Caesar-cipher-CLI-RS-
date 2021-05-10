exports.encoded = (shift) => {
  console.log(shift);
  return function (chunk, enc, callback) {
    for (let i = 0; i < chunk.length; i++) {
      if (chunk[i] > 61 && chunk[i] < 91) {
        chunk[i] += +shift;
        if (chunk[i] > 90) {
          chunk[i] -= 26;
        }
      }
      if (chunk[i] > 96 && chunk[i] < 123) {
        chunk[i] += +shift;
        if (chunk[i] > 122) {
          chunk[i] -= 26;
        }
      }
    }
    this.push(chunk);
    callback();
  };
};
