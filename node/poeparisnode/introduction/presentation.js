// Pour executer un fichier avec node:
// node path/to/file.js
console.log('Hello Node');

const firstname = 'John';
const lastname = 'Doe';
const age = 30;
 
console.log('Hello, %s %s (%d ans) comment allez vous ?', firstname, lastname, age);

console.log('One', 'Two');

/**
 * %s permet d'afficher des chaines de caractères
 * %d permet d'afficher les valeurs numériques
 * %j permet d'afficher des structures JSON
 * %O Affiche un objet avec au maximun 4 profondeurs
 * %o Affiche un objet avec au maximun 2 profondeurs
 */

console.log(`Hello, ${firstname} ${lastname} (${age} ans) comment allez vous ?`);

console.log(`__filename: ${__filename}`);
console.log(`__dirname: ${__dirname}`);

const timer = 1000;

setTimeout( _ => {
    console.log('Je suis executé après %d ms', timer);
}, timer);


// node introduction/presentation.js --version
console.log(process.argv);
console.log(process.env.USER);

const argv = process.argv.slice(2);

if( argv.includes('--version') ) {
    console.log('1.0.0');
    process.exit();
}