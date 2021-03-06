var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 3000;
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var ProgressPlugin = require('webpack/lib/ProgressPlugin');
var request = require('request');
var API = 'https://frozen-meadow-6067.herokuapp.com/Stores';

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

if (process.env.NODE_ENV !== 'production')
	app.use('/public', Middleware(require('./webpack.config.js')));
else
	app.use('/public', express.static(__dirname +'/public'));

app.get('/backend/:storeid?', function(req, res) {
	request.get({
		url: API,
		data: req.body
	}).pipe(res);
});

app.post('/addProduct/:storeId', function(req, res) {
	request.post({
		url: 'https://frozen-meadow-6067.herokuapp.com/Product/' + req.params.storeid,
		data: req.body
	}).pipe(res);
});

app.post('/backend', function(req, res) {
	request.post({
		url: API,
		data: req
	}).pipe(res);
});
app.put('/backend/:storeid', function(req, res) {
	request.put({
		url: API,
		data: req.body
	}).pipe(res);
});
app.del('/backend/:storeid', function(req, res) {
	request.del({
		url: API,
		data: req.body
	}).pipe(res);
});
app.get('/getProductInfo', function(req, res) {
	request.get({
		url: 'http://eandata.com/feed/?v=3&keycode=E492E1B2554DA4E6&mode=json&find=' + req.query.find
	}).pipe(res);
});
app.get('/getProductImage', function(req, res) {
	request.get({
		url: 'http://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=' + req.query.q
	}).pipe(res);
});

app.get('/*', function(req, res) {
	res.end(fs.readFileSync('index.html'));
});

http.createServer(app).listen(port, function(err) {
	if(err) throw err;
	console.log(' Express server listening on port - ' + port);
});
