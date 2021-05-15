/*
 * Déclarer une variable 'nombre' qui contiendra un nombre entier, et lui affecter la valeur 13.
 */
var nombre = 13;
/*
 * Déclarer une variable nombre2 qui, contiendra le nombre flottant/réel/virgule:  15,5
 */
var nombre2 = 15.5;

/* Déclarer une variable 'b', qui prendra la valeur : true */

var b = true;

/* Déclarer une variable 'langage', qui prendra la valeur : 'Javascript' */

var langage = "Javascript";

/*
 * Déclarer une variable nombre3 qui ne pourra plus changer de valeur après lui avoir
 * donner la valeur 60.
 */

const nombre3 = 60;
/*
 * Déclarer deux variables qui s'appellent nb et nb2 qui auront pour valeur 7 et 6
 */

var nb = 7;
var nb2 = 6;

/* afficher le message 'hello world' si nombre est supérieur ou égal à 4 */

if (nombre >= 4) {
	console.log("hello world");
}
/*
 * Réaliser un switch qui prend nb2 et qui affiche:
 *        - "a" si nombre2 est égal à 3
 *        - "b" si nombre2 est égal à 5
 *        - "c" si nombre2 est égal à 7
 *        - "d" si nombre2 est égal à autre chose.
 */

switch (nb2) {
	case 3:
		console.log("a");
		break;
	case 5:
		console.log("b");
		break;
	case 7:
		console.log("c");
		break;

	default:
		console.log("d");
		break;
}

//  demander à l'utilisateur de saisir un 1er nombre
var firstNumber = prompt("Saisir un nombre");
//  demander à l'utilisateur de saisir un 2ème nombre
var secondNumber = prompt("Saisir un 2eme nombre");
//  additionner les nombres et afficher le résultat
console.log(+firstNumber + +secondNumber);
// TP: Convertir des pouces en centimetres
//  demander à l'utilisateur de saisir des pouces
//  1" (1 pouce) = 2,54 centimètres
//  https://www.pouce-cm.fr/
var pouce = prompt("Convertir des pouces en centimètres");
console.log(pouce * 2.54);

// TP: Convertir des heures en minutes
//  demander à l'utilisateur de saisir des heures
//  demander à l'utilisateur de saisir des minutes
//  convertir les heures & minutes en minutes

var heure = prompt("Saisir heure");
var minute = prompt("Saisir minute");
var finalHour = heure * 60;
var finalMinute = minute / 60;
console.log("Heure converti en minute est: " + finalHour);
console.log("Minute converti en heure est: " + finalMinute);

// TP: Convertir des degres Celcius en degrès Fahrenheit
//  https://www.metric-conversions.org/fr/temperature/fahrenheit-en-celsius.htm
//  demander à l'utilisateur de saisir des degres celcius
//  convertir les °C en °F
var degre = prompt("Saisir degre en Celsius");
var conversion = degre * 1.8 + 32.0;
console.log(conversion + " Fahrenheit");

//  TP
//  Afficher un message à l'utilisateur pour savoir s'il souhaite
//      1- Convertir des pouces en centimètres
//      2- Convertir des centimètres en pouces
//      3- Quitter
//  Si l'utilisateur saisit 1:
//       * Demander a l'utilisateur de saisir un nombre: "Nombre de pouces: "
//       * on convertit
//       * on affiche le resultat
//  Si l'utilisateur saisit 2:
//       * Demander a l'utilisateur de saisir un nombre: "Nombre de centimètre: "
//       * on convertit
//       * on affiche le resultat
// Sinon on affiche:
//       *Je n'ai pas compris

let valueP = prompt(
	" Tapez pour  1- Convertir des pouces en centimètres  ou 2- Convertir des centimètres en pouces"
);

switch (+valueP) {
	case 1:
		var pouce = prompt("Saisir un nombre en pouce");
		var pouceCm = pouce * 2.54;
		console.log(pouce + "pouces est egale a " + pouceCm + "cm");
		break;
	case 2:
		var centimetre = prompt("Saisir un nombre cm");
		var cenPouce = centimetre / 2.54;
		console.log(pouce + "pouces est egale a " + cenPouce + "cm");

		break;

	default:
		console.log("====================================");
		console.log("je nai pas compris");
		console.log("====================================");
		break;
}

// Bonus:
// En partant d'une heure et de minutes données
// ex: heure = 2 et minutes = 45
// Si on ajoute 30 minutes, au minutes, on obtient 3h15
heures = 2;
minutes = 45;
nombre = +prompt("Combien de minutes voulez-vous ajouter ?");

resultat = nombre + minutes; // 30 + 45 = 75 / 60 = 1 et il reste 15
let new_heures = heures + Math.floor(resultat / 60); // 2 + 1 = 3
let new_minutes = resultat % 60; // 120 % 60 = 15

console.log(
	heures +
		"h" +
		minutes +
		" + " +
		nombre +
		" minutes = " +
		new_heures +
		"h" +
		new_minutes +
		"minutes"
);
