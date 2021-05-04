const fs = require('fs');
const { program } = require('commander');
const { pipeline } = require('stream');
const { exit } = require('process');
const { inputStream } = require('./src/streams/inputStream');
const { outputStream } = require('./src/streams/outputStream');
const { exitStream } = require('./src/streams/exitStream');
const through2 = require('through2');
const { decoded } = require('./src/functions/decoded');
const { encoded } = require('./src/functions/encoded');

program
  .storeOptionsAsProperties(true)
  .option('-a, --action <string>', 'action encode/decode')
  .option('-s, --shift <number>', 'shift')
  .option('-i, --input <string>', 'input file')
  .option('-o, --output <string>', 'output file');

program.parse(process.argv);
const action = program.action;
const shift = program.shift;

pipeline(
  inputStream(program.input),
  through2(
    action.toString() === 'encoded'
      ? encoded(+shift > 26 ? (shift % 26).toFixed() : shift)
      : decoded(+shift > 26 ? (shift % 26).toFixed() : shift)
  ),
  outputStream(program.output),
  (err) => {
    exitStream(err);
  }
);

console.log(action, shift);
