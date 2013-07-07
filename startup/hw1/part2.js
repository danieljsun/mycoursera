#! /usr/bin/env node
/* global require, console, __filename */
(function() {
	'use strict';
	var fs = require('fs');
	var outfile = "primes.txt";
	var primes = [];
	var n = 2;
	while (primes.length < 100) {
		if (isPrime(n)) {
			primes.push(n);
		}
		n++;
	}
	var out = primes.join(',');
	fs.writeFileSync(outfile, out);

	function isPrime(x) {
		var prime = true;
		var lower = 2;
		var upper = Math.sqrt(x);
		var d = lower;
		while (d <= upper) {
			if (x % d === 0) {
				prime = false;
				break;
			}
			d++;
		}
		return prime;
	}
	console.log('Script: ' + __filename + '\nWrote: ' + out + '\nTo: ' + outfile);
})();
