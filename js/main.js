var verse1 = " bottles of beer on the wall, "
var verse2 = " bottles of beer, take one down, pass it around, "
var verse3 = " bottles of beer on the wall!"

var bottles = 99

while (bottles >= 1) {
	console.log(
		bottles + verse1 + bottles + verse2 + bottles + verse3
		)
	bottles = bottles - 1
};

console.log("No more beer here! *Cue Closing Time by Supersonic*")
// else {
// 	console.log("We're all done here!")
// };
