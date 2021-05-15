function getNumber() {
	const randTime = Math.floor(Math.random() * 5000 + 1000); // value entre 1s et 5s
	const randError = Math.floor(Math.random() * 3 + 1); // 1 sur 3 de sortir une erreur
	const value = Math.floor(Math.random() * 6 + 1); // value entre 1 et 6

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (randError > 1) {
				resolve(value);
			}
			reject(new Error("Cassé"));
		}, randTime);
	});
}
const objPromise = getNumber();
let resultat = null;
objPromise
	.then((value) => {
		resultat = value;
	})
	.catch((error) => {
		resultat = error.message;
	})
	.finally(() => {
		console.log(`Lancé de dé : ${resultat}`);
	});
