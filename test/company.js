'use strict';

var expect = require('chai').expect;
var nock = require('nock');
var madkudu = require('..')('test');

describe('company', function () {

	var company_mock;

	before(function () {
		company_mock = nock('https://api.madkudu.com/v1');
	});
	after(nock.cleanAll);

	afterEach(function () {
		company_mock.done();
	});

	var company_results = require('./fixtures/company');

	describe('person#find', function () {

		it('can find a person by email', function () {
			company_mock
				.get('/companies?domain=madkudu.com')
				.reply(200, company_results);

			return madkudu.company.find({ domain: 'madkudu.com' })
				.then(company => {
					expect(company)
						.to.have.include.keys('properties');
				});
		});

	});
});
