const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.jsx',

	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js',
	},

	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		compress: true,
		port: 3000,
	},

	module: {
		rules: [
			{
				test: /.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'swc-loader',
				},
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			filename: './index.html',
			template: path.join(__dirname, 'public/index.html'),
		}),
	],
};
