const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const ExtractCssPlugin = require("extract-css-chunks-webpack-plugin");

// Va permettre de merger dans le webpack common
module.exports = merge(common, {
	mode: "production",

	module: {
		//rules =>comportement que va avoir le module sur nos fichiers
		rules: [
			{
				//va chercher les fichiers avec l'extension sass ou scss, css et le i=>veut dire insensitive case
				test: /\.(sa|sc|c)ss$/i,
				exclude: /node_modules/,
				use: [ExtractCssPlugin.loader, "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [new ExtractCssPlugin()],
});
