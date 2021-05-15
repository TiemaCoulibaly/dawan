// Un tableau stock un ensemble de valeur

// Tableau vide
let notes = [];
console.log(notes);

notes = [4, 7, 9, 8];
console.log(notes);

// On commence toujours a 0
console.log("La premiere note: " + notes[0]);
console.log("La deuxième note: " + notes[1]);
console.log(`Il y a ${notes.length} éléments mon tableau`);

// notes[4]; <- undefined, le dernier index est 3
let taille_notes = notes.length;
// console.log(`Dernier élément du tableau : ${notes[4 - 1]}`);
// console.log(`Dernier élément du tableau : ${notes[3]}`);
console.log(`Dernier élément du tableau : ${notes[taille_notes - 1]}`);

// Les tableaux sont modifiables.
notes[0] = 7;
console.log(notes);

taille_notes = notes.length;
for (let i = 0; i < taille_notes; i++) {
	const note = notes[i];
	console.log(note);
}

for (const maVariable of notes) {
	console.log("Note: " + maVariable);
}

console.log("_________ Manipulation du tableau _______");

let noms = ["Meliodas", "King", "Diane", "Escanor", "Ban", "Gowther", "Merlin"];

//Ajouter un element a la fin du tableau
noms.push("John");
console.log(noms);

//Supprimer la premiere valeur du tableau
// noms.splice(0, 1);
noms.shift();
console.log(noms);

/* supprimer le dernier element*/
noms.pop();
console.log(noms);

/* inserer un element a la premiere position du tableau */
// noms.splice(0, 0, "Maude");
noms.unshift("Maude");
console.log(noms);

/* Trouver l'index d'un element dans un tableau */
let index = noms.indexOf("Escanor");
console.log(index);

index = noms.indexOf("escanor");
console.log(index);

// Inversé l'ordre le tableau.
noms.reverse();
console.log(noms);

// Trié le tableau par ordre alphabétique
noms.sort();
console.log(noms);
// 65: A
// 97: a

// Récupéré la longueur du tableau
noms.length;

// Ajouter à l'index 2, un nouveau tableau contenant 3 valeurs
// A faire avec une méthode
noms.splice(2, 0, ["a", "b", "c"]); // <- decale les elements pour inserer le nouveau tableau
console.log(noms);

// const tableau = ["a", "b", "c"];
// noms[2] = tableau //<- ecrase la valeur a l'index 3

let ville = "Tokyo;Berlin;Rio;Moscou;Denver;Nairobi;Helsinki";
// Creer un tableau a partir d'une chaine de caractères.
let ville_tableau = ville.split(";");
console.log(ville_tableau);

// console.log( ville.split('') );
// console.log( Array.from(ville) );

console.log(ville_tableau.join(" -> "));

prenom = "Maude";
// Chainage des methodes
let prenomInverser = prenom.split("").reverse().join("");
console.log(prenomInverser);

let lettres = prenom.split("");
let lettreInverse = lettres.reverse();
prenom = lettreInverse.join("");
console.log(prenom);

String.prototype.reverse = function () {
	console.log(this);
	return this.split("").reverse().join("");
};

noms[0].reverse();
"salut".reverse();

prenom = "Ella";
console.log(prenom.reverse());

function compareNombres(a, b) {
	return a - b;
}

const array1 = [1, 30, 4, 21, 100000];
array1.sort(compareNombres);
console.log(array1);

console.log(" ________ foreach, filter, map __________ ");

noms.splice(2, 1);

function afficherNom(nom) {
	console.log("Nom: " + nom);
}

// A l'interieur du forEach
// for (const nom of noms) {
//     afficherNom(nom);
// }

// let nombre = 5;
// afficherTable(nombre);

noms.forEach(afficherNom);

console.log(" => Fonction Anonyme");

// Fonction "jetable".
// Equivalent à: afficherTable(5);
noms.forEach(function (myNom) {
	console.log(myNom);
});

console.log(" => Fonction fléchée");
// Fonction fléchée
noms.forEach((myNom) => {
	console.log(myNom);
});

// Si on a qu'un seul parametre, on peut supprimer les parentheses
// Si on a qu'une seule instruction, on peut supprimer les { }
noms.forEach((myNom) => console.log(myNom));

console.log("________ Filtrer un tableau ______ ");

// Callback c'est fonction passé en parametre d'une autre fonction

// let nouveauTableau = [];
// for (const nom of noms) {
//     let isSup = sup5(nom);
//     if (isSup) {
//         nouveauTableau.push(nom);
//     }
// }

function sup5(nom) {
	let isSup = nom.length > 5;
	return isSup; // True ou False
}

let nouveauTableau = noms.filter(sup5);

nouveauTableau = noms.filter(function (nom) {
	let isSup = nom.length > 5;
	return isSup;
});

nouveauTableau = noms.filter((monParametreNom) => {
	let isSup = monParametreNom.length > 5;
	return isSup;
});

// Si on a qu'un seul parametre, on peut supprimer les parentheses
// Si on a qu'une seule instruction, on peut supprimer les { }
// Si on a qu'une seule instruction sans les { }, on ne doit pas mettre le mot clef return

nouveauTableau = noms.filter((myNom) => myNom.length > 5);

console.log(nouveauTableau);

console.log("________  Fonction map ______ ");

let notesSur10 = [1, 6, 9, 7];

let notesSur20 = notesSur10.map(function (note) {
	return note * 2;
});
console.log(notesSur20);

let nomsEnMajuscule = noms.map((nom) => nom.toUpperCase());
console.log(nomsEnMajuscule);

console.log(
	noms.filter((myNom) => myNom.length > 5).map((nom) => nom.toUpperCase())
);

let bodyElt = document.querySelector("body");

let htmlElements = noms.map((nom) => `<p>${nom}</p>`);
console.log(htmlElements);

htmlElements.forEach((element) => (bodyElt.innerHTML += element));
