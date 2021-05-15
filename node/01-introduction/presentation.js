//Pour exécuter un fichier avec node:
//mettre dans le terminal => node nomDuFichier.js
console.log("Hello Node");

const firstname = "Tiema";
const lastname = "Couly";
const age = 30;
console.log("Hello %s %s(%d ans)comment allez vous?", firstname, lastname, age);
/**
 * %s permet d'afficher des chaines de caractères
 * %d permet d'afficher les valeurs numériques
 * %j permet d'afficher des structures JSON
 * %O Affiche un objet avec au maximun 4 profondeurs
 * %o Affiche un objet avec au maximun 2 profondeurs
 */

console.log(`Hello ${firstname} ${lastname}`);
//trouver la location du fichier que lon se trouve
console.log(`__filename: ${__filename}`);
//trouver le repertoire que l'on se trouve
console.log(`__dirname: ${__dirname}`);

const timer = 1000;
setTimeout(() => {
	console.log("Je suis executé apres %d ms", timer);
}, timer);

console.log(process.argv);

const argv = process.argv.slice(2);
//exécuter => node 01-introduction --version
if (argv.includes("--version")) {
	console.log("1.0.0");
	process.exit;
}
