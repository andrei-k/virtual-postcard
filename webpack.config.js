const path = require("path");

module.exports = {
	entry: "./app/assets/scripts/main.js",
	output: {
		filename: "bundled.js",
		path: path.resolve(__dirname, "app")
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "app"),
		},
		hot: true,
		port: 3000,
		host: "0.0.0.0"
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					"style-loader", // Inject CSS to page
					{
						loader: "css-loader", // Translates CSS into CommonJS modules
						options: {
							url: false
						}
					}
				]
			}
		]
	}
}