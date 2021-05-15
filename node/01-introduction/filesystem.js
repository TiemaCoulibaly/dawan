const fs = require("fs");
const path = require("path");

const pathfile = path.join(__dirname, "assets", "content", "hello.txt");
const content = "Heello World Node\r\n";

//callback hell
fs.mkdir(path.dirname(pathfile), { recursive: true }, (err) => {
	if (err) {
		throw err;
	}
	console.log(
		"Les repertoires \x1b[35m%s \x1b[0mont bien éte créés",
		path.relative(__dirname, path.dirname(pathfile))
	);
	//creer le fichier
	fs.writeFile(pathfile, content, { flag: "a" }, (err) => {
		if (err) throw err;

		console.log(
			`L'écriture dans le fichier \x1b[36m${path.basename(
				pathfile
			)}\x1b[0m est terminé`
		);
		fs.readFile(pathfile, (err, content) => {
			if (err) throw err;
			console.log("-------------------------------");
			console.log(content);
			console.log(content.toString());
			console.log("Contenu du fichier: %s", content);
		});
	});
});
