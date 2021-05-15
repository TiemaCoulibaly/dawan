// Une variable stock une valeur
// Une fonction stock un ensemble d'instructions
// Un objet stock des variables(propriétés) et/ou des fonctions(méthodes).

function freinerGeneral() {
	console.log("Freinage ! ");
}

let nb = 5;
let nb2 = nb;

let isRadio = true;
let nbRoue = 4;

// objet litteral
let voiture = {
	couleur: "rouge",
	vitesse: 0,
	radio: isRadio,
	nbRoue, // Evite d'ecrire  nbRoue: nbRoue
	freiner: freinerGeneral,
	// fonction annonyme
	accelerer: function (nouvelle_vitesse) {
		console.log("Acceleration !");
		this.vitesse += nouvelle_vitesse;
		this.radio = false;
	},
	description() {
		console.log(`Ma voiture ${this.couleur} roule à ${this.vitesse} km/h`);
	},
};

console.log(voiture);
console.log(`Ma voiture est ${voiture.couleur} `);
console.log(`Ma voiture roule à ${voiture.vitesse} km/h `);

voiture.couleur = "verte";
console.log(`Ma voiture est ${voiture.couleur} `);

voiture.freiner();
console.log(`Ma voiture roule à ${voiture.vitesse} km/h `);
voiture.accelerer(10);
console.log(`Ma voiture roule à ${voiture.vitesse} km/h `);
console.log(`Ma voiture roule à ${voiture.vitesse} km/h `);

// console objet cree automatiquement par javascript

console.log(voiture);

// Tout nos objets hérite de l'object Object. Et par defaut, Object ne sait pas
// Comment est formé nos propres objets. Il faut redefinir le comportement de la
// methode toString().
// Object.toString();

let utilisateur1 = {
	nom: "Doe",
	age: 17,
	adresse: {
		rue: "1 rue bidon",
		codePostale: 75015,
		ville: "Paris",
		toString: function () {
			return `${this.rue}, ${this.codePostale}`;
		},
	},
};

console.log("Nom: " + utilisateur1.nom);
console.log("Adresse: " + utilisateur1.adresse.rue);

// console.log("Adresse: " + JSON.stringify(utilisateur1));

// console.log() appelle automatiquement la methode toString().
console.log("Adresse: " + utilisateur1.adresse);

// utilisateur1["adresse"]
// utilisateur1["adresse"]["rue"]

let prenom = "Maude";
prenom.charAt(0);

console.log(prenom.startsWith("Ma"));
console.log(prenom.endsWith(".com"));

console.log(prenom.includes("au"));
console.log(prenom.indexOf("e"));

console.log(prenom.toLowerCase());
console.log(prenom.toUpperCase());

// Les types primitifs qui ne sont pas modifiable. (inmutable)
// Les objets qui sont modifiables. (mutable)

let nombre = 5;
let nombre2 = nombre; // <- on copie la valeur

// Les objets fonctionnent par références
let voiture2 = voiture;
console.log(voiture2);

console.log(`Ma voiture est ${voiture.couleur} `);
voiture2.couleur = "Orange";
console.log(`Ma voiture est ${voiture.couleur} `);

console.clear();
//pour copier un objet on doit faire:
voiture2 = Object.assign({}, voiture);

console.log(`Ma voiture est ${voiture.couleur} `);
voiture2.couleur = "Verte";
console.log(`Ma voiture est ${voiture.couleur} `);
console.log(`Ma voiture2 est ${voiture2.couleur} `);

let voiture3 = Object.assign(
	{
		marque: "clio",
	},
	voiture2
);
console.log(`Ma voiture3 est`, voiture3);

let voiture4 = {
	...voiture,
};
voiture4.couleur = "Bleue";
console.log(voiture4.couleur);
console.log(voiture.couleur);
