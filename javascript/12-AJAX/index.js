// AJAX: Asynchronous Javascript And XML
// Le principe c'est pouvoir chargé des données et les inclure dans notre page,
// sans jamais rechargé la page.
// "Injecter" les données a un endroit precis de notre page.

// JSON: JavaScript Object Notation

let xhr = new XMLHttpRequest();
// console.log(xhr);

let btnElt = document.querySelector("button");

btnElt.addEventListener("click", function () {
	let xhr = new XMLHttpRequest();

	// ouvrir l'url: open prend 2 arguments:
	// la methode de requete et l'url
	xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

	// xhr.responseType = "json";

	// onload: la methode qui est appellé lorsque xhr a finit de charger la reponse
	xhr.onload = function () {
		// console.log(this.status);
		console.log(this);
		if (this.status >= 200 && this.status < 300) {
			console.log(this.response);
			// JSON.parse() transforme du texte qui respect le format JSON
			//  en Objet javascript
			const utilisateurs = JSON.parse(this.responseText);
			console.log(utilisateurs);
			let ulElt = document.createElement("ul");
			let bodyElt = document.querySelector("body");
			utilisateurs.sort(function (u1, u2) {
				return u1.name > u2.name;
			});
			// utilisateurs.sort((u1, u2) => u1.name > u2.name);
			for (const utilisateur of utilisateurs) {
				let liElt = document.createElement("li");
				liElt.textContent = utilisateur.name;
				ulElt.appendChild(liElt);
			}
			bodyElt.appendChild(ulElt);
		}
	};

	// 404: not found, 403: forbiden ...
	xhr.send();
});

// Fetch permet de recuperer les données d'une URL
// La fonction fetch renvoie une promesse
fetch("https://jsonplaceholder.typicode.com/users").then(function (reponse) {
	// console.log("Reponse: ", reponse.json());
	let json = reponse.json();
	json.then(function (reponse) {
		// console.log(reponse);
	});
});

fetch("https://jsonplaceholder.typicode.com/users")
	.then(function (reponse) {
		// console.log("Reponse: ", reponse.json());
		let json = reponse.json(); //<- renvoie une promesse
		return json;
	})
	.then(function (reponse) {
		console.log(reponse);
	})
	.catch((erreur) => console.error(erreur));

let config = {
	method: "POST",
	body: {
		userId: 999,
		id: 999,
		title: "lorem",
		body:
			"Laboris ea id non eiusmod ex cillum eu nostrud ut qui magna deserunt eu.",
	},
};

fetch("https://jsonplaceholder.typicode.com/posts", config).then(function (
	reponse
) {
	console.log("Reponse: ", reponse);
});
