var nan = 0 / 0;
console.log(Number(nan));
console.log(Number.NaN == Number.NaN);
if (nan < 0) {
	console.log("var");
} else {
	console.log("not var");
}