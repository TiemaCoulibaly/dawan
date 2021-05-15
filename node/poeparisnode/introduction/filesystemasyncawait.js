const fs = require('fs').promises;
const path = require('path');

const pathfile = path.join(__dirname, 'assets', 'content', 'asyncawait', 'hello.txt');
const content = 'Hello Async Await\r\n';

( async () => {

    try{
        await fs.mkdir(path.dirname(pathfile), { recursive: true });
        
        const directory = path.dirname(pathfile);
        const relative = path.relative(__dirname, directory);

        console.log('Les répertoires \x1b[32m%s\x1b[0m ont bien été créés', relative);

        await fs.writeFile(pathfile, content, { flag: 'a' });
        console.log(`L'écriture dans le fichier \x1b[32m${path.basename(pathfile)}\x1b[0m est terminée`);

        const resultat = await fs.readFile(pathfile);
        console.log(resultat.toString());
    } catch(e) {
        console.log(e);
    }

})();