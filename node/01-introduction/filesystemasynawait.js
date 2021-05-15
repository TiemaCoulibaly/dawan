const fs = require("fs").promises;
const path = require("path");

const pathfile = path.join(
	__dirname,
	"assets",
	"content",
	"asyncawait",
	"hello.txt"
);
const content = "Heello Async Await\r\n";

// Function IIFE qui va etre invoqué immédiatement (()=>{})()
(async () => {
	try {
		await fs.mkdir(path.dirname(pathfile), { recursive: true });
		const directory = path.dirname(pathfile);
		const relative = path.relative(__dirname, directory);
		console.log(
			"Les repertoires ASYNC \x1b[35m%s \x1b[0mont bien éte créés",
			relative
		);
		await fs.writeFile(pathfile, content, { flag: "a" });

		console.log(
			`L'écriture dans le fichier ASYNC \x1b[36m${path.basename(
				pathfile
			)}\x1b[0m est terminé`
		);
		const resultat = await fs.readFile(pathfile);
		console.log(resultat.toString());
	} catch (e) {
		console.log(e);
	}
})();
