'use strict';

var assert = require('assert');

var Person = function (client) {
	this.client = client;
};

Person.prototype.find = function (params) {
	params = params || {};
	assert(params.domain, 'A domain must be provided');
	return this.client.get('/companies', params);
};

module.exports = Person;
