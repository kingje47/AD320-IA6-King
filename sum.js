var tot = 0;
var temp = 0;
for (var i = 2; i < process.argv.length; i++){
	temp = process.argv[i];
	temp = +temp;
	tot += temp;
}

console.log(tot);