// Une variable stock une valeur
// Une fonction stock un ensemble d'instructions
// Un objet stock des variables(propriétés) et/ou des fonctions(méthodes).
// Une classe est un "moule"/modele qui nous permet de fabriquer(instancier) nos propres objets.

// PascalCase ou UpperCamelCase
//ex: NomDeMaClasse

class Arme {}

class Personnage {
	// La methode qui nous permet d'initialiser nos objets (le nom est imposé)
	constructor(nom, pArme, pdv) {
		// let nom = "John"; <- variable locale a la fonction
		this.nom = nom;
		// this.arme = new Arme();
		this.arme = pArme;
		this.pdv = pdv;
	}

	description() {
		// console.log(`${this.nom} combat avec ${this.arme} et a ${this.pdv} pdv`);
		return `${this.nom} combat avec ${this.arme} et a ${this.pdv} pdv`;
	}

	combattre(degat) {
		console.log("Le combat commence ... ");
		this.pdv -= degat;
		console.log("Aie !");
	}

	// toString() {
	//     return ...
	// }
}

class Guerrier extends Personnage {
	constructor(nom, pArme, pdv, barbe) {
		// super() <= appelle le constructeur de la classe Mere
		// super.description() <= super. on appelle une propriete ou methode de la classe mere
		super(nom, pArme, pdv);
		this.barbe = barbe;
	}

	description() {
		let message = super.description();
		message += ` et a une barbe ${this.barbe}`;
		return message;
	}
}

class Viking extends Guerrier {}

// le javascript appelle le constructeur.
// p1 est une instance de la classe Personnage.
let p1 = new Personnage("John", "Epée", 100);
console.log("p1: " + p1);
console.log(p1.nom);

let p2 = new Personnage("Maude", "Epée Lourde", 150);
console.log(p2);
console.log(p2.nom);

console.log(p2.description());
p2.combattre(10);
console.log(p2.description());

let g1 = new Guerrier("Ella", "Hache", 200, "Rousse");
console.log(g1);
console.log(g1.description());
console.log(g1 instanceof Personnage); // <- PolyMorphisme

let v1 = new Viking("Ella", "Hache", 200, "rousse");
console.log(v1 instanceof Personnage); // <- PolyMorphisme
