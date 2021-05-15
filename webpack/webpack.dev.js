const path = require("path");

const { merge } = require("webpack-merge");
const common = require("./webpack.common");

// Va permettre de merger dans le webpack common
module.exports = merge(common, {
	mode: "development",

	module: {
		//rules =>comportement que va avoir le module sur nos fichiers
		rules: [
			{
				//va chercher les fichiers avec l'extension sass ou scss, css et le i=>veut dire insensible case
				test: /\.(sa|sc|c)ss$/i,
				exclude: /node_modules/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},

	devServer: {
		contentBase: path.resolve(__dirname, "./dist"), //point de base ou va se trouver notre projet
		hot: true, //active le Hot reload
		port: 3200,
	},
});
