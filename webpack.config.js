const path = require("path");

module.exports = {
	entry: "./app/assets/scripts/app.js",
	output: {
		filename: "bundled.js",
		path: path.resolve(__dirname, "app")
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "app"),
		}
		//hot: true,
		//port: 3000
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