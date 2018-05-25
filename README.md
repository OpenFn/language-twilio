Language twilio [![Build Status](https://travis-ci.org/OpenFn/language-twilio.svg?branch=master)](https://travis-ci.org/OpenFn/language-twilio)
=================

Language Pack for building expressions and operations to interact with the twilio API.

Documentation
-------------
## sendSMS

#### sample configuration
```json
{
  "apiKey": "mYaP1K3y",
  "apiSecret": "supersecret"
}
```

#### sample expression
```js
sendSMS(
  "OpenFn",
  "0123456789",
  "HelloWorld!")
```

Development
-----------

Clone the repo, run `npm install`.

Run tests using `npm run test` or `npm run test:watch`

Build the project using `make`.
