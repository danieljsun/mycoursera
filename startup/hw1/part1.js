#! /usr/bin/env node
/* global require, console, __filename */
var fs = require('fs');
var outfile = "hello.txt";
var out = "A startup is a business built to grow rapidly.";
fs.writeFileSync(outfile, out);
console.log('Script: ' + __filename + '\nWrote: ' + out + '\nTo: ' + outfile);
