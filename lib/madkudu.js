'use strict';

var assert = require('assert');
var superagent = require('superagent');

var Person = require('./person');

var MadKudu = function (config) {
	config = config || {};
	assert(this instanceof MadKudu, 'Client must be called with new');

	this.api_key = config.api_key || process.env.MADKUDU_API_KEY;
	this.host = 'https://api.madkudu.com/v1';
	assert(!!this.api_key, 'An API key must be provided');

	this.person = new Person(this);
};

MadKudu.prototype.get = function (route, params) {
	return superagent
		.get(this.host + route)
		.query(params)
		.set('Accept','application/json')
		.auth(this.api_key, '')
		.set('User-Agent', 'bongo')
		.accept('json')
		.then(results => {
			return results.body;
		});
};

module.exports = MadKudu;
