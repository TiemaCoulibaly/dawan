const fs = require('fs').promises;
const path = require('path');

const pathfile = path.join(__dirname, 'assets', 'content', 'promises', 'hello.txt');
const content = 'Hello Promise\r\n';

fs.mkdir(path.dirname(pathfile), { recursive: true }).then( _ => {
    const directory = path.dirname(pathfile);
    const relative = path.relative(__dirname, directory);

    console.log('Les répertoires \x1b[32m%s\x1b[0m ont bien été créés', relative);

    return fs.writeFile(pathfile, content, { flag: 'a' });

}).then( _ => {
    console.log(`L'écriture dans le fichier \x1b[32m${path.basename(pathfile)}\x1b[0m est terminée`);

    return fs.readFile(pathfile);

}).then( (resultat) => {

    console.log(resultat.toString());

}).catch( (err) => {
    console.log(err);
});