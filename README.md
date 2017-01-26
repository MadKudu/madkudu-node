# madkudu-node
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
		expect(person)
			.to.have.include.keys('properties', 'company');
	});
});
```


## Contributing

### Test commands

```sh
npm run test
```
