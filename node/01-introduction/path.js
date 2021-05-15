const path = require("path");
const file = "./assets/content/hello.txt";

//recupere le path name
console.log("dirname(): %s", path.dirname(file));
//recupere le nom du fichier
console.log("basename(): %s", path.basename(file));
//extenstion du fihier
console.log("extname(): %s", path.extname(file));
//recupere les séparateur
console.log("Séparateur systeme: %s", path.sep);
//construire un path et le joindre
const image = path.join("assets", "images", "images.png");
console.log("Construire un chemin: %s", image);

console.log(
	"Repertoire: %s",
	path.join(__dirname, path.dirname(file), path.sep)
);

//Pour passer d'un repertoire a un autre path.relative(from, to) sont les 2 parametres

const dir_file = path.join(path.dirname(file), path.sep);
const dir_image = path.join(path.dirname(image), path.sep);
const relative = path.relative(dir_file, dir_image);
console.log(
	`Pour passer du dossier ${dir_file} au dossier ${dir_image}, je dois faire ${relative}`
);

//Résoudre un chemin complexe avec le resolve
console.log("join" + path.resolve(__dirname, dir_file, relative));
console.log("resolve" + path.join(__dirname, dir_file, relative));
