const path = require('path');

const file = './assets/content/hello.txt';

console.log('dirname(): %s', path.dirname(file));
console.log('basename(): %s', path.basename(file));
console.log('extname(): %s', path.extname(file));

console.log('Séparateur système: %s', path.sep);

const image = path.join('assets', 'images', 'images.png');

console.log('Construire une chemin: %s', image);

console.log('Répertoire: %s', path.join(__dirname, path.dirname(file), path.sep) );

const dir_file = path.join( path.dirname(file), path.sep);
const dir_image = path.join( path.dirname(image), path.sep);
const relative = path.relative(dir_file, dir_image);

console.log(`Pour passer du dossier ${dir_file} au dossier ${dir_image}, 
je dois faire ${ relative }`);

console.log( path.join(__dirname, dir_file, relative) );
console.log( path.resolve(__dirname, dir_file, relative) );