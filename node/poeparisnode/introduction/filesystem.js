const fs = require('fs');
const path = require('path');

const pathfile = path.join(__dirname, 'assets', 'content', 'hello.txt');
const content = 'Hello World\r\n';

// callback hell
fs.mkdir(path.dirname(pathfile), { recursive: true }, (err) => {

    if (err) {
        throw err;
    }

    console.log('Les répertoires \x1b[32m%s\x1b[0m ont bien été créés', path.relative(__dirname, path.dirname(pathfile)));

    fs.writeFile(pathfile, content, { flag: 'a' }, (err) => {
        if(err) throw err;

        console.log(`L'écriture dans le fichier \x1b[32m${path.basename(pathfile)}\x1b[0m est terminée`);

        fs.readFile(pathfile, (err, content) => {
            if(err) throw err;

            console.log(content);
            console.log(content.toString());
            console.log('Contenu du fichier: %s', content);
            console.log(`Contenu du fichier: ${content}`);
        });
    });
});