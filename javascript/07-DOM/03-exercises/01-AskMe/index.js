/**
 * Exercice:
 * Lorsque l'on clique sur le bouton "creation bouton",
 * un événement se déclenche et, demande à l'utilisateur
 * combien de button il veut créer.
 * Sa réponse est stockée dans une variable (ex: 'combien' ou 'answer' ... ).
 * l'évémement appelle une fonction nommée combienDeBoutons()
 * qui prend en parametre la reponse de l'utilisateur (ex: 'combien')".
 * la fonction combienDeBoutons s'occupe de créer autant de boutton que demandé
 * qui seront affichés dans la balise <div id="btn">
 */

function handleClick() {
	let combien = prompt("Combien de boutton veut tu crée ?");
	for (let index = 0; index < combien; index++) {
		combienDeBoutons();
	}
}

function combienDeBoutons() {
	let bouton = document.createElement("button");
	bouton.textContent = "Creation de boutton par le user";

	let containerBtn = document.getElementById("btn");
	containerBtn.appendChild(bouton);
}

/* AIDE : */
/* 1) Dans le html, ajouter l'événement onclick sur le button qui appelle une fonction create()
 * 1) Dans le javascript, creer la fonction create()
 * 1) Dans la fonction create(), demander a l'utilisateur combien de bouton il veut creer a l'aide d'un prompt()
 *      "combien de button voulez-vous créer ?"
 * 5) le résultat sera stocké dans une variable (ex: 'combien');
 * 1) la fonction create(), appelle une fonction avec un parametre 'nombre_a_creer' creerBtn(nombre_a_creer)
 * 6) la fonction creerBtn(), doit creer autant de bouton que ce que l'utilisateur à demandé
 */
