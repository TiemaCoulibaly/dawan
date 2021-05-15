function hello(bool) {
	// if (bool) {
	// 	return "vrai";
	// } else {
	// 	return "false";
	// }

	// Bonne pratique du if statement, + performant, gain de temps
	if (bool) {
		return "vrai"; // throw try{} catch(e){}
	}
	return "false";
}
console.log(hello(true));

const d = 10;

if (d % 2 == 0) {
	//
}

//best practice
//Yoda code
if (0 == d % 2) {
}
