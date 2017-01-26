'use strict';

var MadKudu = require('./madkudu');

module.exports = function (api_key) {
	return new MadKudu({
		api_key: api_key
	});
};

module.exports.MadKudu = MadKudu;
