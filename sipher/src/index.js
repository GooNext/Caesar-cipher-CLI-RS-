const fs = require('fs');
const { program } = require('commander');
const { pipeline } = require('stream');
const { exit } = require('process');

program
  .storeOptionsAsProperties(true)
  .option('-a, --action <string>', 'action encode/decode')
  .option('-s, --shift <number>', 'shift')
  .option('-i, --input <string>', 'input file')
  .option('-o, --output <string>', 'output file');
