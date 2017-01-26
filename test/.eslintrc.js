'use strict';

module.exports = {
  'env': {
    'mocha': true
  },

  'plugins': [
    'mocha'
  ],

  'rules': {
    'max-nested-callbacks': 0,
    'mocha/handle-done-callback': 2,
    'mocha/no-exclusive-tests': 2,
    'mocha/no-global-tests': 2,
	'no-console': 0,
    'no-magic-numbers': 0,
    'require-jsdoc': 0
  }
};
