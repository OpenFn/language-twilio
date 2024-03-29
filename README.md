# _⚠️ MOVED TO [OpenFn/adaptors](https://github.com/OpenFn/adaptors)! ⚠️_

**N.B.: New versions are available at:
https://github.com/OpenFn/adaptors/tree/main/packages/twilio**

# Language twilio (Archived)
Language Pack for building expressions and operations to interact with the
twilio API.

## Documentation

## sendSMS

#### Sample configuration

```json
{
  "accountSid": "secret",
  "authToken": "evenMoreSecret"
}
```

#### sample expression, sending an sms

```js
sendSMS({
  body: dataValue('text'),
  from: '+15005550006',
  to: dataValue('recipient'),
});
```

## local usage

```sh
~/devtools/core/bin/core execute \
  -l ~/devtools/adaptors/language-twilio \
  -s ./tmp/state.json \
  -o ./tmp/output.json \
  -e ./tmp/expression.js
```

## Development

Clone the repo, run `npm install`.

Run tests using `npm run test` or `npm run test:watch`

Build the project and validate the documentation using `npm run build`.
