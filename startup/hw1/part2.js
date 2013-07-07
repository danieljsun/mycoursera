#! /usr/bin/env node
/* global require, console, __filename */
var fs = require('fs');
var outfile = "primes.txt";
var primes = [2,3,5,7,11];
var out = primes.join(',');
fs.writeFileSync(outfile, out);

console.log('Script: ' + __filename + '\nWrote: ' + out + 'To: ' + outfile);
