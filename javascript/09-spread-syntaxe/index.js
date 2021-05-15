console.log("\tAffectation par decomposition");

let noms = ["Rick", "Maude", "Ella", "Alain"];

// Sans utiliser la decomposition
let prenom1 = noms[0];
let prenom2 = noms[1];
let prenom3 = noms[2];

// La premiere valeur du tableau va dans la premiere variable etc..
[prenom1, prenom2, prenom3] = noms;
console.log("Prenom1: " + prenom1 + ", Typeof: " + typeof prenom1);
console.log("Prenom2: " + prenom2 + ", Typeof: " + typeof prenom2);
console.log("Prenom3: " + prenom3 + ", Typeof: " + typeof prenom3);

console.log();

let [a, b, ...reste] = noms;
console.log("a: " + a + ", Typeof: " + typeof a);
console.log("b: " + b + ", Typeof: " + typeof b);
console.log("reste: " + reste + ", Typeof: " + typeof reste);

let tab2 = [...noms];
console.log(tab2); // copie du tableau

// On peut utiliser le spread operateur pour faire une fonction
// qui prend un nombre d'arguments indeterminé.
// Tous les arguments sont regroupés dans un tableau.
// parametres
function somme(...nombres) {
	console.log(nombres);
	let resultat = 0;
	for (const nombre of nombres) {
		resultat += nombre;
	}
	console.log("somme: " + resultat);
}

// Arguments
somme(1);
somme(1, 3, 5);
somme(1, 3, 5, 9, 10);

let voiture = {
	couleur: "rouge",
	vitesse: 0,
};

// Destructuration d'un objet
// Attention: la variable doit avoir le meme nom que la propriété
// Les variables sont totalement independantes de l'objet
let { couleur, vitesse } = voiture;

couleur = "Verte";
console.log("couleur: " + couleur);
console.log(voiture);

function getCouleur({ couleur }) {
	console.log("couleur: " + couleur);
}
getCouleur(voiture);

//exemple
function test({ message: variableLocale }) {
	console.log(variableLocale);
}

let obj = {
	message: "Salut tout le monde",
};

test(obj);
