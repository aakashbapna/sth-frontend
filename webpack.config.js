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
		publicPath: '/public/',
		pathinfo: true,
		filename: '[name].js'
	},
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
				loader: 'imagesize?name=[name].[ext]'
			},
			{
				test: /\/whatwg-fetch\/fetch.js$/,
	            loader: 'imports-loader'
		            + '?self=>{}'
		            + '!exports-loader'
		            + '?fetch=self.fetch'
		            + ',Headers=self.Headers'
		            + ',Request=self.Request'
		            + ',Response=self.Response'
	        }
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				FB_APP_ID: JSON.stringify(process.env.FB_APP_ID)
			}
		})
	]
};

if(process.env.NODE_ENV==='production') {
	module.exports.plugins.push(
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				conditionals: true,
				unused: true,
				comparisons: true,
				sequences: true,
				dead_code: true,
				evaluate: true,
				if_return: true,
				join_vars: true
			}
		})
	);
} else {
	module.exports.devtool = '#source-map';
}
