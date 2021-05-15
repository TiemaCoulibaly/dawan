/**
 * Les fonctions nous permettent de factoriser du code.
 * La variable stock une valeur
 * La fonction stock un ensemble d'instructions
 * DRY: Don't Repeat Yourself
 */

console.log("____ Fonction sans parametre ____");
// Declaration d'une fonction
function sayHello() {
	// Bloc d'instructions
	console.log("Bonjour");
	console.log("Tout");
	console.log("Le");
	console.log("Monde");
}

// Execution d'une fonction
sayHello();

/**
 * Imaginons un eleve souvent puni.
 */

function fairePunitionSimple() {
	let compteur = 1;
	while (compteur <= 10) {
		console.log(
			`Ligne ${compteur}: Je ne dois pas recopier sans comprendre`
		);
		compteur++;
	}
}

fairePunitionSimple();
// un peu plus tard dans le code
fairePunitionSimple();
fairePunitionSimple();

console.log("____ Fonction avec parametre ____");
/**
 * Imaginons un eleve beaucoup trop souvent puni.
 */

function fairePunition(combienDeFois) {
	console.log("combienDeFois: " + combienDeFois);
	let index = 1;
	while (index <= combienDeFois) {
		// index <= 10 ou 25 ou 100 etc...
		console.log(`Ligne ${index}: Je ne dois pas recopier sans comprendre`);
		index++;
	}
}

// fairePunition(let combienDeFois = 10);
fairePunition(10);
// fairePunition(let combienDeFois = 25);
fairePunition(25);
// fairePunition(let combienDeFois = 100);
fairePunition(100);

// let nombre = +prompt('Combien de fois je dois recopier ? ');
let nombre = 25;
// fairePunition(let combienDeFois = nombre);
// fairePunition(let combienDeFois = 3);
fairePunition(nombre);

// Les parametres par defaut, doivent etre en derniere position.
function fairePunitionV2(combienDeFois, message) {
	let index = 1;
	while (index <= combienDeFois) {
		// index <= 10 ou 25 ou 100 etc...
		console.log(`Ligne ${index}: ${message}`);
		index++;
	}
}

fairePunitionV2(5, "Je ne dois pas faire ci");
fairePunitionV2(3, "Je ne dois pas faire ça");

console.log("Les parametres par defaut");

// Les parametres par defaut, doivent etre en derniere position.
function fairePunitionV3(message, combienDeFois = 10) {
	let index = 1;
	while (index <= combienDeFois) {
		// index <= 10 ou 25 ou 100 etc...
		console.log(`Ligne ${index}: ${message}`);
		index++;
	}
}

fairePunitionV3("Je ne dois pas faire ça", 5);
fairePunitionV3("Je ne dois pas faire ci");

console.log("=> Des fonctions qui renvoient une valeur");

function carre(nombre) {
	// 5
	// let : portée bloc
	// var: portée fonction
	var resultat = nombre * nombre; // 5x5
	return resultat; //renvoie une valeur (25)
	// console.log("return quitte la fonction donc cette ligne ne sera jamais excutée");
}

/**
 * Si une fonction renvoie une valeur, on peut stocker cette valeur dans une variable:
 */
carre(5);
// console.log(resultat); <- la variable resultat n'existe pas en dehors de la fonction

// let res = 25;
let res = 25;
console.log("Res: " + res);

console.log(carre(7));

// alert('')
// let nombre = prompt('')

function reference(nombre) {
	var resultat = nombre * nombre;
	return resultat;
}

reference(5);

function reference2(tableau) {
	let newTableau = [...tableau];
	newTableau.push("Salut");
	return newTableau;
}

let notes = [];
let new_notes = reference2(notes);
console.log(new_notes);
console.log(notes);
