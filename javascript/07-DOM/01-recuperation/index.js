/**
 * DOM : Document Objet Model
 * C'est la representation de notre page HTML sous forme d'objet javascript
 */

// console.log( window );

// Objet automatiquement créé: Document
// console.log( document );
console.dir(document); // <- sur chrome

// On recuperer un Element HTML par son id
let titreElement = document.getElementById("titre1");
console.dir(titreElement);

titreElement.textContent = "Salut !";
titreElement.style.backgroundColor = "coral";
titreElement.style.color = "cornflowerblue";

// document.getElementsByClassName("titres");
// document.getElementsByTagName("body");

let divTextesElt = document.getElementById("textes");

console.log("TextContent: " + divTextesElt.textContent); //Text entre les balises
console.log("InnerHTML: " + divTextesElt.innerHTML); // les balises sous forme de texte
console.log("InnerText: " + divTextesElt.innerText); // le contenu 'visuellement rendu'

divTextesElt.textContent = `<a href="#">Salut !</a>`;
//  /!\ le texte est interpreté => pas tres performant, laisse place au faille XSS
divTextesElt.innerHTML += `<br/><a href="#">Salut !</a>`;

let element = document.querySelector("#titre1");
// s'arrete a la premiere occurence
element = document.querySelector(".titres");
// let elements = document.querySelectorAll('.titres');

element = document.querySelector("body");

function changerTheme() {
	let bodyElement = document.querySelector("body");
	bodyElement.style.backgroundColor = "#1d1d1d";
	bodyElement.style.color = "white";
}

function afficherSaisi(myEvent) {
	// let champInput = document.querySelector('input');
	// console.log(champInput);
	// console.log(champInput.value);

	// console.log(myEvent);
	// console.log(myEvent.target);
	console.log(myEvent.target.value);
}
