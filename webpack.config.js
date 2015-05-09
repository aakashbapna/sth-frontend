var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		app: './index.js'
	},
	output: {
		library: 'App',
		libraryTarget: 'umd',
		path: path.join(__dirname, 'public'),
		publicPath: '/',
		pathinfo: true,
		filename: '[name].js'
	},
	devtool: '#source-map',
	resolve: {
		root: [
			path.join(__dirname, 'node_modules')
		]
	},
	resolveLoader: {
		root: [
			path.join(__dirname, 'node_modules')
		]
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel?stage=0'
			},
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.less$/,
				loader: 'style!css!less'
				// loader: ExtractTextPlugin.extract('style', 'css', 'less')
			},
			{
				test: /\.(png|jpg|jpeg)$/,
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('bundle.css'),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				FB_TOKEN: JSON.stringify(process.env.FB_TOKEN)
			}
		})
	]
};