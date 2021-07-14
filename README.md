# Language twilio [![Build Status](https://travis-ci.org/OpenFn/language-twilio.svg?branch=master)](https://travis-ci.org/OpenFn/language-twilio)

Language Pack for building expressions and operations to interact with the
twilio API.

## Documentation

## sendSMS

#### sample initial state

```json
{
  "configuration": {
    "accountSid": "secret",
    "authToken": "evenMoreSecret"
  },
  "data": {
    "text": "Hello world!",
    "recipientPhoneNumber": "+19148675309"
  }
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

## Development

Clone the repo, run `npm install`.

Run tests using `npm run test` or `npm run test:watch`

Build the project and validate the documentation using `npm run build`.
