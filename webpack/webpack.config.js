const path = require("path");

const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	mode: "development",
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
	//modules/loaders
	module: {
		//rules =>comportement que va avoir le module sur nos fichiers
		rules: [
			{
				//va chercher les fichiers avec l'extension sass ou scss et le i=>veut dire insensible case
				test: /\.(sa|sc)ss$/i,
				exclude: /node_modules/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
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
  devServer:{
    contentBase: path.resolve(__dirname, "./dist"),//point de base ou va se trouver notre projet
    hot: true,//active le Hot reload
    port: 3200
  }
};
