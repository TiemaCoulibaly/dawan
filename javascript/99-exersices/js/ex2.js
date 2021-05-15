//  reprendre le convertisseur Heure -> minutes de Operateurs
//  Faire une boucle: tant que l'utilisateur ne tape pas 2, on recommence la boucle
//  Dans cette boucle on met:
//  Afficher un message à l'utilisateur pour savoir s'il souhaite
//       1- Convertir
//       2- Quitter
//  Si l'utilisateur saisit 1:
//        * demander à l'utilisateur de saisir des heures
//        * demander à l'utilisateur de saisir des minutes
//        * convertir les heures en minutes
//        * afficher le resultat
//  Si l'utilisateur saisit 2:
// let inputVal;
// do {
// 	inputVal = +prompt("1-Convertir 2-Quitter");
// 	switch (inputVal) {
// 		case 1:
// 			var heure = +prompt("Saisir heure");
// 			var minute = +prompt("Saisir minute");
// 			var finalHour = heure * 60;
// 			var finalMinute = minute / 60;
// 			console.log("Heure converti en minute est: " + finalHour);
// 			console.log("Minute converti en heure est: " + finalMinute);
// 			break;
// 		case 2:
// 			console.log("Bye bye");
// 		default:
// 			break;
// 	}
// } while (inputVal !== 2);

/*
 à l'aide de la condition ternaire, la variable nb prendra comme valeur 42
 si :
     nb2 est égal à 6
 Sinon:
     nb sera égal à 9
*/

let nb2;

let nb = nb2 == 6 ? 42 : 9;

console.log("==========TERNAIRE CONDITION==========================");
console.log(nb);
console.log("====================================");

// Faire une fonction qui affiche 'Hello World !'
function helloWorld() {
	console.log("hello wolrd");
}
helloWorld();
// Faire une fonction qui prend un paramètre 'prenom' et affiche Bonjour suivi du prénom
function welcome(prenom) {
	console.log("===========WELCOME=========================");
	console.log("Bonjour " + prenom);
	console.log("====================================");
}
welcome("Dan");
// Faire une fonction qui affiche la multiplication de 2 nombres passés en paramètres

function multiplication(num1, num2) {
	console.log("===============MULTIPLICATION=====================");
	console.log(num1 * num2);
	console.log("====================================");
}
multiplication(3, 4);
// Faire une fonction qui renvoie la soustraction de 2 nombres passés en paramètre
function soustraction(num3, num4) {
	return num3 - num4;
}
let result = soustraction(5, 4);
console.log("===============SOUSTRACTION=====================");
console.log(result);
console.log("====================================");
//  Faire une fonction qui affiche la table de multiplication d'un nombre passé en paramètre

function afficherTable(nombre) {
	let compteur = 0;
	while (compteur <= 10) {
		let resultat = nombre * compteur;
		console.log(`${nombre} x ${compteur} = ${resultat}`);
		compteur++;
	}
}
afficherTable(5);

/*
 Faire une fonction qui convertit des heures en minutes, elle prend 2 arguments: heures et minutes.
 exemple: howManyMinute(heure, minutes): #...
 exemple d'appel: howManyMinute(1,30)  <- renvoie 90
*/
function converterMin(hours, mins) {
	let h = hours * 60;
	let res = h + mins;
	console.log("===============CONVERTISSEUR MINUTE=====================");
	console.log(res);
	console.log("====================================");
}
converterMin(1, 30);

/*
 Faire une fonction qui cherche une lettre dans une chaine de caractères et qui retourne "trouvée" si la lettre a été trouvée
 et 'aucun résultat' dans le cas contraire.
        chaine.charAt(0) -> 'S'
        chaine.charAt(1) -> 'a'
 findChar(chaine, lettre) : #...
 exemple d'appel: findChar("Salut tout le monde", 'u') <- cherche la lettre 'u' dans la chaine
*/
function findChar(chaine, lettre_recherche) {
	let taille = chaine.length;
	let index = 0;
	while (index < taille) {
		let lettre_actuelle = chaine[index];
		if (lettre_actuelle == lettre_recherche) {
			return "Trouvé";
		}
		index++;
	}
	return "Aucun résultat";
}
console.log(findChar("salut tout le monde", "u"));

/*
# Exercice bonus faire un rot 11
# Un rot est un algorithme qui décale les lettres pour chiffrer un message.
# "Le texte chiffré s'obtient en remplaçant chaque lettre du texte clair original par une lettre à distance fixe, toujours du même côté, dans l'ordre de l'alphabet.
# Pour les dernières lettres (dans le cas d'un décalage à droite), on reprend au début."" Wikipedia
# A + 11 = L
# Z + 11 = K
# "Salut"  devient "Dlwfe"
#  indice: charCodeAt(letter) pour convertir un caractère en nombre (table ASCII)
#  indice: String.fromCharCode(ascii) pour convertir du code ASCII en caractère
#  indice: il faut parcourir la chaine caractère par caractère et la transformer
# verifier : https://rot13.com/
# table ascii https://fr.wikibooks.org/wiki/Les_ASCII_de_0_%C3%A0_127/La_table_ASCII#Descriptif3
# chiffrement par decalage: https://fr.wikipedia.org/wiki/Chiffrement_par_d%C3%A9calage
*/
function rotx(message, ROT) {
	let message_cache = "";
	// 65: A
	// S: 83,  83 - 65 -> 18
	// 18 + 11 = 29 % 26 -> 1 et il reste 3
	// 3 + 65 = 68 -> D

	// a: 97 - 97 = 0
	// 0 + 11 = 11
	// 11 % 26 = 0 et il reste 11
	// 11 + 97
	let taille_message = message.length;
	for (let i = 0; i < taille_message; i++) {
		let code = message.charCodeAt(i);
		// console.log(code);
		// 65 = A
		if (code >= 65 && code <= 90) {
			message_cache += String.fromCharCode(((code - 65 + ROT) % 26) + 65);
		} else if (code >= 97 && code <= 122) {
			message_cache += String.fromCharCode(((code - 97 + ROT) % 26) + 97);
		}
	}
	return message_cache;
}

console.log(rotx("Salut", 13));
console.log(rotx("Salut", 11));
