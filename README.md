Language twilio [![Build Status](https://travis-ci.org/OpenFn/language-twilio.svg?branch=master)](https://travis-ci.org/OpenFn/language-twilio)
=================

Language Pack for building expressions and operations to interact with the twilio API.

Documentation
-------------
## sendSMS

#### sample configuration
```json
{
  "accountSid": "secret",
  "authToken": "evenMoreSecret"
}
```

#### sample expression
```js
sendSMS({
  body: state.data.text,
  from: '+15005550006',
  to: state.data.recipient,
});
```

Development
-----------

Clone the repo, run `npm install`.

Run tests using `npm run test` or `npm run test:watch`

Build the project using `make`.
