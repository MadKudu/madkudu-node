```sh
npm install --save madkudu-node
```

```javascript
var madkudu = require('madkudu')('api_key');
```

## Predict

```javascript
madkudu.predict({ email: 'abc@abc.com'})
  .then(results => {
    console.log(results);
  });
```

## Augment

```javascript
madkudu.augment({ email: 'abc@abc.com'})
  .then(results => {
    console.log(results);
  });
```

## Callbacks

All calls also work with callbacks

```javascript
madkudu.augment({ email: 'abc@abc.com'}, function (err, results) {
  if (err) {
    return console.log(err);
  }
  console.log(results);
});
```
