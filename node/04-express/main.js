// => npm run serve <== || ==> nodemon express/index.js <== To start de server
//A été config dans le package.json avec le path =>	"serve": "nodemon 04-express/index.js"
import express from "express";
import helmet from "helmet";
import path from "path";
import favicon from "serve-favicon";
import nunjucks from "nunjucks";
import routes from "./routes.js";
import bodyParser from "body-parser";

const app = express();

//configuration du templating en lui indiquant le dossier qui va contenir nos templates
nunjucks.configure(path.join(__dirname, "template"), {
	autoescape: true, // <== eviter les attaques xss en échappant les caracteres sensibles
	express: app,
});

//middleware
app.use(helmet());

app.use((req, res, next) => {
	console.log(`Request: ${req.url}`);
	next();
});

//Pour récupérer notre image avec express.static
//on le pointe dans le dossier public
app.use(express.static(path.join(__dirname, "public")));

//On récupere le favicon avec serve-favicon
app.use(favicon(path.join(__dirname, "public", "favicon.jpg")));
//bodyParser
app.use(bodyParser.json()); //content-type: application/json

// => Home page imported from routes.js
app.use(routes);

// app.get("/", (req, res) => {
// let html = `<h1>Accueil</h1>
// <img src="/images/gijoe.jpg" alt="gijoe picture" width=250 height=250/>`;
// res.send(html);

//});

const port = process.env.PORT || 3200;
app.listen(port, "localhost", () => {
	console.log(
		`Personal Node Server is listening on http://localhost:${port}`
	);
	console.log("Shutdown Node Server with CRTL + C");
});
// changer le port sous windows
//      set PORT=9999   --> CMD
//      $env:PORT=9999  --> PowerShell
//      nodemon express/index.js
