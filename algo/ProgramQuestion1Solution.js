/* global require, process, console */
(function() {
	'use strict';
	var inversionCounter = 0;
	function mergeRec(left, right) {
		if (left.length === 0) {
			return right;
		}
		if (right.length === 0) {
			return left;
		}

		var d = [];
		if (left[0] < right[0]) {
			d.push(left[0]);
			d.push.apply(d, merge(left.slice(1), right));
		} else {
			d.push(right[0]);
			d.push.apply(d, merge(left, right.slice(1)));
		}
		return d;
	}
	function merge(left, right) {
		var d = [];
		var i = 0, j = 0;
		while (i < left.length && j < right.length) {
			if (left[i] < right[j]) {
				d.push(left[i]);
				i++;
			} else {
				d.push(right[j]);
				j++;
				inversionCounter += left.length - i;
			}
		}
		d.push.apply(d, left.slice(i));
		d.push.apply(d, right.slice(j));
		return d;
	}
	function mergeSort(a) {
		if (a.length <= 1) {
			return a;
		}
		var mid = Math.floor(a.length / 2);
		var left = mergeSort(a.slice(0, mid));
		var right = mergeSort(a.slice(mid));
		return merge(left, right);
	}
	function inversion(a) {
		var aSorted = mergeSort(a);
		//console.log(aSorted.join(' '));
		console.log('inversion counter: %d', inversionCounter);
	}
	
	var fs = require('fs');
	var file = process.argv[2];
	fs.readFile(file, { encoding: 'utf8' }, function(err, data) {
		//console.log('data type is ' + typeof(data));
		//console.log('%sTHEEND', data);
		var a = data
			.trim()// remove trailing \n
			.split('\n')
			.map(function(line) {
				//var n = Number(line);
				//console.log('%d -> %d', line, n);
				//return n;
				return Number(line);
			})
			.filter(function(n) {
				return !isNaN(n);
			});
		//console.log('total: %d', a.length);
		inversion(a);
	});

	//inversion([1]);
	//inversion([1, 2]);
	//inversion([2, 1]);
	//inversion([6, 5, 4, 3, 2, 1]);
	//mergeSort([]).forEach(function(n) {
		//console.log(n);
	//});
	//mergeSort([1]).forEach(function(n) {
		//console.log(n);
	//});
	//mergeSort([2, 1]).forEach(function(n) {
		//console.log(n);
	//});
	//mergeSort([1, 3, 2, 4]).forEach(function(n) {
		//console.log(n);
	//});
	//merge([1, 3], [2, 4]).forEach(function(n) {
		//console.log(n);
	//});
	//merge([1, 3], [4]).forEach(function(n) {
		//console.log(n);
	//});
	//merge([1], [2, 4]).forEach(function(n) {
		//console.log(n);
	//});
	//merge([1, 3], [4]).forEach(function(n) {
		//console.log(n);
	//});
	//merge([1, 3], []).forEach(function(n) {
		//console.log(n);
	//});
	//merge([], [2, 4]).forEach(function(n) {
		//console.log(n);
	//});
})();
