'use strict';

var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var madkudu = require('..')(process.env.MADKUDU_API_KEY);

describe('person', function () {

	before(function () {
		assert(process.env.MADKUDU_API_KEY);
	});

	describe('person#find', function () {
		this.timeout(5000);

		it('can find a person by email', function () {

			return madkudu.person.find({ email: 'paul@madkudu.com' })
				.then(person => {
					expect(person)
						.to.have.include.keys('properties', 'company');
				});
		});

	});
});
