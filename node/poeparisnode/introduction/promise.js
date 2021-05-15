
function getNumber() {
    // Math.random() [0, 1[ 
    const randTime = Math.floor( Math.random() * 5000 + 1000); // entre 1s et 5s
    const randError = Math.floor( Math.random() * 3 + 1); // 1/3 de sortir une erreur
    const value = Math.floor( Math.random() * 6 + 1); // entre 1 et 6
    
    return new Promise( (resolve, reject) => {

        setTimeout(_ => {
            if( randError > 1 ) {
                resolve(value);
            } 
            
            reject(new Error('Cassé'));
            
        }, randTime);

    } );
}

const objPromise = getNumber();
let resultat = null;

objPromise.then( (value) => {
    resultat = value;
} ).catch( (error) => {
    resultat = error.message;
} ).finally( _ => {
    console.log(`Lancé de dé: ${resultat}`);
});