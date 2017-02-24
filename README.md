# madkudu-node
[![npm version](https://badge.fury.io/js/%40madkudu%2Fmadkudu-node.svg)](https://badge.fury.io/js/%40madkudu%2Fmadkudu-node)
[![CircleCI](https://circleci.com/gh/MadKudu/madkudu-node.svg?style=svg)](https://circleci.com/gh/MadKudu/madkudu-node)
[![Code Climate](https://codeclimate.com/github/MadKudu/madkudu-node/badges/gpa.svg)](https://codeclimate.com/github/MadKudu/madkudu-node)

## Installation

```sh
npm install --save madkudu-node
```

```javascript
var madkudu = require('@madkudu/madkudu-node')('api_key');
```

## Persons

```javascript
madkudu.person.find({ email: 'paul@madkudu.com' })
	.then(person => {
		console.log(person);
	});
});
```

## Persons

```javascript
madkudu.company.find({ domain: 'madkudu.com' })
	.then(company => {
		console.log(company);
	});
});
```


## Contributing

### Test commands

```sh
MADKUDU_API_KEY=xxx npm test
```
