const Useless = require('./useless.js');
// const { PI, addition } = require('./CustomMath.js');

const math = require('./CustomMath.js');

const useless = new Useless('John Doe');

console.log( useless.hello() );
// console.log( useless.name ); // undefined
// console.log( useless.#name ); // error private

console.log( math.addition(5, 10) );
console.log(`PI = ${math.PI}`);

math.promise().then( console.log );