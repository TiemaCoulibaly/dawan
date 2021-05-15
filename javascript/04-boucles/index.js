/**
 * Les boucles permettent de repeter un traitement
 */


// Imaginons qu'on doit recopier un message 10 fois
// console.log("Je ne dois pas...");
// console.log("Je ne dois pas...");

// Initialiser un compteur.
// Tant que ce compteur est inferieur ou egal à 10 
// on affiche le message
// on incrémente ce compteur

let compteur = 1; // index ou 
while (compteur <= 100) {
    console.log(`Ligne ${compteur}: Je ne dois pas recopier sans comprendre`);
    compteur = compteur + 1;
    // compteur += 1
    //compteur++
}

console.log("On quitte la boucle: " + compteur);
do {
    console.log("Je passe ici au moins une fois: " + compteur);
    compteur += 1;
} while(compteur > 1000 && compteur <= 1010);



// for (initialisation; condition; incrementation/decrementation)
for (let index = 0; index < 3; index++) {
    console.log(`Ligne ${index}: Je ne dois pas recopier sans comprendre avec un for`);