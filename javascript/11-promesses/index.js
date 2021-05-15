// Les promesses sont des objets qui permettent de gerer les traitements asynchrones (plusieurs traitement paralleles);

// Traitement synchrone: on attend que la boucle soit finie avant de passer a la suite.
let compteur = 0;
while (compteur < 10) {
	console.log("Compteur: " + compteur);
	compteur++;
}

/**
 * Callback: une fonction passé en parametre d'une autre fonction
 *  (elle sera appelé plus tard ex: filter, foreach qui prennent des callback)
 */

function uneFonction() {
	console.log("Bonjour");
}

function unAutreFonction(maCallBack) {
	//...
	maCallBack();
	//...
}

unAutreFonction(uneFonction);

function myCallBack(nom) {
	console.log(nom);
}

let noms = ["Ella", "Rick", "John"];
noms.forEach(myCallBack);
noms.filter(myCallBack);
noms.sort(myCallBack);

/**
 * Aynschrone:
 */

// setTimeOut: execute une fonction (callback) au bout d'un certain temps(ms)
console.log("Avant le setTimeOut");
// setTimeout(uneFonction, 2000); // 2000ms = 2s
console.log("Après le setTimeOut");

setTimeout(function () {}, 1000);
setTimeout(() => {}, 1000);

// Objet Promise
console.log("John va ranger ta chambre");
let promesseDeJohn = new Promise(function (myResolve, myReject) {
	// Dans un cas reel, ici c'est le traitement qui prend du temps.
	// goToDB();
	// myResolve();
	console.log("Je te promet de le faire, mais ca va prendre du temps");
	const nombre = Math.random();
	setTimeout(function () {
		if (nombre > 0.5) {
			myResolve(["Rick", "Beth", "Jerry"]); // <- tout s'est bien passé, on envoie le resultat
		} else {
			myReject("Impossible de trouver les utilisateurs"); // <- il y a une erreur, on envoie l'erreur
		}
	}, 2000);
});

function enCasDeSuccess(reponse) {}

// myResolve = function(reponse) {...}
promesseDeJohn
	.then(function (reponse) {
		console.log(reponse);
	})
	.catch(function (erreur) {
		console.error(erreur);
	}); // <- si tout s'est bien passé, on donne la fonction myResolve

function myFetch(url) {
	console.log(url);
	//connexion sur l'url etc..
	return new Promise(function (myResolve, myReject) {
		myResolve(["Rick", "Beth", "Jerry"]);
	});
}

console.log(myFetch("http://bidon.fr"));

let utilisateurs = [];

function traitement(reponse) {
	console.log(reponse);
	let bodyElt = document.querySelector("body");
	let pElt = document.createElement("p");
	pElt.textContent = reponse;
	bodyElt.appendChild(pElt);
	utilisateurs = reponse;
}

myFetch("http://bidon.fr").then(traitement);
console.log("On continue tranquillement");
//ici
console.log(utilisateurs);
