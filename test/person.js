'use strict';

var expect = require('chai').expect;
var nock = require('nock');
var madkudu = require('..')('test');

describe('person', function () {

	var person_mock;

	before(function () {
		person_mock = nock('https://api.madkudu.com/v1');
	});
	after(nock.cleanAll);

	afterEach(function () {
		person_mock.done();
	});

	var paul = require('./fixtures/person');

	describe('person#find', function () {

		it('can find a person by email', function () {
			person_mock
				.get('/persons?email=paul%40madkudu.com')
				.reply(200, paul);

			return madkudu.person.find({ email: 'paul@madkudu.com' })
				.then(person => {
					expect(person)
						.to.have.include.keys('properties', 'company');
				});
		});

	});
});
