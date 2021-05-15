function direBonjour() {
	alert("Bonjour !");
}

function afficherSaisi(event) {
	console.log(event.target.value);
}

function login(event) {
	console.log(event);

	// console.log( event.target[1] ); <- depend de l'ordre dans le HTML
	console.log(event.target.email.value); // <- l'attribut name sur la balise HTML
	console.log(event.target.mdp.value);

	// Supprime le rafraichissement de la page.
	event.preventDefault();
}

let btnElement = document.getElementById("hello");
// 1: le type d'evenement
// 2: la fonction a executé, lorsque l'evenement est declenché

// btnElement.addEventListener("click", direBonjour);
btnElement.addEventListener("click", function () {
	alert("Hello !");
});
