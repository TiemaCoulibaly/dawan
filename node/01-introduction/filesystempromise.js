const fs = require("fs").promises;
const path = require("path");

const pathfile = path.join(
	__dirname,
	"assets",
	"content",
	"promises",
	"hello.txt"
);
const content = "Heello Promise\r\n";

fs.mkdir(path.dirname(pathfile), { recursive: true })
	.then(() => {
		const directory = path.dirname(pathfile);
		const relative = path.relative(__dirname, directory);
		console.log(
			"Les repertoires \x1b[35m%s \x1b[0mont bien éte créés",
			relative
		);
		return fs.writeFile(pathfile, content, { flag: "a" });
	})
	.then(() => {
		console.log(
			`L'écriture dans le fichier \x1b[36m${path.basename(
				pathfile
			)}\x1b[0m est terminé`
		);
		return fs.readFile(pathfile);
	})
	.then((resultat) => {
		console.log(resultat.toString());
	})
	.catch((err) => {
		console.log(err);
	});
