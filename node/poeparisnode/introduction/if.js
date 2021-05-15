
function hello(bool) {

    /*if(bool) {
        return 'vrai';
    } else {
        return 'faux';
    }*/

    if(bool) {
        return 'vrai'; // throw  try{ }catch(e){ } 
    }

    return 'false';
}

console.log( hello(true) );

const d = 10;

if ( d%2 == 0 ) {
    // ...
}

// Yoda code
if ( 0 == d%2 ) {
    // ...
}

/**
 * 
 * String c = null;
 * 
 * c.equal("coucou"); //error
 * 
 * "coucou".equal(c);
 * 
 */