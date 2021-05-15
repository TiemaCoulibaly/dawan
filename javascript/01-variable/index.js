og("La variable nom: Combé");
console.log("La variable nom: " + nom);

let variable = "c'est pas sorcier";
let variable2 = "c'est pas sorcier";

console.log("La variable prenom: " + prenom);
prenom = "John";
console.log("La variable prenom: " + prenom);

/**
 * Regle de nommages:
 */

// 5var = "Salut";
// ma variable = "Salut"
va5d5sd5sd5c22 = "salut";
// console.log(AGE); // <- erreur, cette variable n'est pas définie
// Uncaught ReferenceError: AGE is not defined

let v3; // undefined
let v1, v2; // undefined

v1 = "Salut";
v2 = v1;

console.log(typeof v2);

var x = 5; //var existe dans une portée globale
let y = 5; //let existe que dans le bloc ou il est cree ou sous bloc
