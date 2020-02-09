const chai = require('chai');
const expect = chai.expect;
const request = require('superagent');
const status = require('http-status');

const apiRoot = 'http://localhost:3000/';

describe('testing server',function(){
	var server;
	
	before(function(done){
	/*	var express = require('express');
		var app = express();

		app.get('/',function(req,res){
			res.send('Hello, World!');
		});

		app.post('/',function(req,res){
			res.sendStatus(405);
		});

		var port = 3000;
		server = app.listen(port,function(){
			console.log('Listening on port ' + port);
		});
		done();*/

		const express = require('express');
		var app = express();
		app.use('/',require('../routes/hello'));
		const port = 3000;
		server = app.listen(port,function(){done();});
	});

	after(function(){
		server.close();
	});

	it('response to GET requests',function(done){
		request.get(apiRoot)
		.end(function(err,res){
			expect(err).to.not.be.an('error');
			expect(res.statusCode).to.equal(status.OK);
			expect(res.text).to.equal('Hello, World!');
			done();
		});
	});

	it('POST request not allowed',function(done){
		request.post(apiRoot)
		.end(function(err,res){
			expect(err).to.be.an('error');
			expect(res.statusCode).to.equal(status.METHOD_NOT_ALLOWED);
			done();
		});
	});
});
