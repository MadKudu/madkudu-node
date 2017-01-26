## Installation

```sh
npm install --save madkudu-node
```

```javascript
var madkudu = require('madkudu')('api_key');
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


# Contributing

## Testing

```sh
npm run test
```
