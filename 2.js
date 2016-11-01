"use strict";
function fib(a, b, sum) {
	let nextFib = a + b;
	
	if (nextFib % 2 === 0) {
		sum = sum + nextFib;
	}
	
	if (nextFib > 4000000) {
		console.log('Total of even values in fibonacci below 4000000: ' + sum);
		return;
	}
	
	console.log(nextFib);
	
	return fib(b, nextFib, sum);
}

fib(0, 1, 0);