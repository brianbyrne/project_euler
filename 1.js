var total = 0;
for(var i = 1; i < 1000; i++) {
	if (i % 3 == 0) {
		total = total + i;
	}
	else if (i % 5 == 0) {
		total = total + i;
	}
}

console.log(total);