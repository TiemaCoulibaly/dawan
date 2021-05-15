const Useless = require("./useless.js");

const { PI, addition, promise } = require("./CustomMath.js");

const uselessJohn = new Useless("John Doe");

console.log(uselessJohn.hello());
// console.log(uselessJohn.name); undefined
// console.log(uselessJohn.#name); private

console.log(addition(5, 10));
console.log(`PI = ${PI}`);
promise().then(console.log);
