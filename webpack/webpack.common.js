const path = require("path");

const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {

	//on défini le point d'entrée
	entry: {
		index: path.resolve(__dirname, "./src/index.js"),
		// main: path.resolve(__dirname, "./src/index.js"),
	},
	//on défini le point de sorti avec le nom du file
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "[name].bundle.js",
	},

	//plugins
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "./src/assets"),
					to: path.resolve(__dirname, "./dist/assets"),
				},
			],
		}),
		new htmlWebpackPlugin({
			template: path.resolve(__dirname, "./src/template.html"), //l'emplacement
			filename: "index.html", //output file
			templateParameters: {
				title: "Formation Webpack", //permet d'envoyer le title dans le html <%= title %>
			},
		}),
		new CleanWebpackPlugin(), //nettoyer les fichier dans le dist pour eviter les conflit de changement
	],
};
