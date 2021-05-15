//Async va retourné une promesses
//Avec le mot clé return la promesse est en reussite
async function success() {
	return "Bravo !";
}

//Avec le mot clé throw la promesse est en échec
async function fail() {
	throw new Error("dommage..");
}
success().then(console.log);
fail().catch(console.error);

function getNumber() {
	const randTime = Math.floor(Math.random() * 5000 + 1000); // value entre 1s et 5s
	const value = Math.floor(Math.random() * 9); // value entre 0 et 9

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(value);
		}, randTime);
	});
}

async function addition() {
	const a = await getNumber();

	const b = await getNumber();

	console.log(`${a} + ${b} = ${a + b}`);
}
console.log(`-------Début de l'addition`);
addition();
console.log(`-------Fin de l'addition`);
//iife (Innediately Invoked Function Expression)
console.log("------------------------IIFE--------------------------");
(async () => {
	console.log(`-------Début de l'addition`);
	try {
		//Destructuration
		const [a, b] = await Promise.all([getNumber(), getNumber()]);
		console.log(`${a} + ${b} = ${a + b}`);
	} catch (e) {
		console.log(e.message);
	}

	console.log("Fin de laddition fin");
})();
//async va creer une promesse et va attendre une reponse qu'on peut faire attendre grace au await
