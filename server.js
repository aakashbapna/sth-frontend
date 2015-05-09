var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 3000;
var webpack = require('webpack');
var	webpackMiddleware = require('webpack-dev-middleware');
var ProgressPlugin = require('webpack/lib/ProgressPlugin');

var outputOptions = {
	colors: true,
	hash: true,
	timings: true,
	assets: true,
	chunks: false,
	chunkModules: false,
	modules: false,
	children: false
};

function Middleware(config) {

	var compiler = webpack(config);

	compiler.apply(new ProgressPlugin(function(percentage, msg) {
		process.stdout.clearLine();
		process.stdout.cursorTo(0);
		process.stdout.write(msg);
	}));

	return webpackMiddleware(compiler, {
		stats: outputOptions
	});

}

app.use('/public', Middleware(require('./webpack.config.js')));

app.get('/*', function(req, res) {
	res.end(fs.readFileSync('index.html'));
});

http.createServer(app).listen(port, function(err) {
	if(err) throw err;
	console.log(' Express server listening on port - ' + port);
});
