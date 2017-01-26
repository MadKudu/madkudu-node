'use strict';

var assert = require('assert');

var Person = function (client) {
	this.client = client;
};

Person.prototype.find = function (params) {
	params = params || {};
	assert(params.email, 'An email must be provided');
	return this.client.get('/persons', params);
};

module.exports = Person;
