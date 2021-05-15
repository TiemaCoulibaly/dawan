export class MyArray {
	// Regroupe tous les arguments sous forme de tableau
	// permet de faire une fonciton qui prend un nombre indeterminé d'arguments
	constructor(...prenoms) {
		// console.log("Prenoms: ", prenoms);
		this.monTableau = prenoms;
	}

	myForEach(maCallBack) {
		for (const element of this.monTableau) {
			maCallBack(element);
		}
	}

	myFilter(maCallBack) {
		const newTableau = [];
		for (const element of this.monTableau) {
			let isSuperieur = maCallBack(element);
			if (isSuperieur) {
				newTableau.push(element);
			}
		}
		return newTableau;
	}

	myMap(maCallBack) {
		const newTableau = [];
		for (const element of this.monTableau) {
			let resultat = maCallBack(element);
			newTableau.push(resultat);
		}
		return newTableau;
	}

	static description() {
		console.log(
			"On est pas obligé d'avoir une instance de la classe, pour utiliser cette methode"
		);
		console.log(
			"On ne peut pas utiliser le mot clef this dans une methode statique car on a pas access au vairable d'instance "
		);
	}
}

export const utilisateurs = [
	{ id: 5, nom: "Doe" },
	{ id: 7, nom: "John" },
];

const movies = [
	{ id: 5, nom: "Avatar" },
	{ id: 7, nom: "Ava" },
];

export default movies;
