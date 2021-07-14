"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.execute = execute;
exports.sendSMS = sendSMS;
Object.defineProperty(exports, "field", {
  enumerable: true,
  get: function () {
    return _languageCommon.field;
  }
});
Object.defineProperty(exports, "fields", {
  enumerable: true,
  get: function () {
    return _languageCommon.fields;
  }
});
Object.defineProperty(exports, "sourceValue", {
  enumerable: true,
  get: function () {
    return _languageCommon.sourceValue;
  }
});
Object.defineProperty(exports, "alterState", {
  enumerable: true,
  get: function () {
    return _languageCommon.alterState;
  }
});
Object.defineProperty(exports, "fn", {
  enumerable: true,
  get: function () {
    return _languageCommon.fn;
  }
});
Object.defineProperty(exports, "http", {
  enumerable: true,
  get: function () {
    return _languageCommon.http;
  }
});
Object.defineProperty(exports, "each", {
  enumerable: true,
  get: function () {
    return _languageCommon.each;
  }
});
Object.defineProperty(exports, "merge", {
  enumerable: true,
  get: function () {
    return _languageCommon.merge;
  }
});
Object.defineProperty(exports, "dataPath", {
  enumerable: true,
  get: function () {
    return _languageCommon.dataPath;
  }
});
Object.defineProperty(exports, "dataValue", {
  enumerable: true,
  get: function () {
    return _languageCommon.dataValue;
  }
});
Object.defineProperty(exports, "lastReferenceValue", {
  enumerable: true,
  get: function () {
    return _languageCommon.lastReferenceValue;
  }
});

var _languageCommon = require("@openfn/language-common");

/** @module Adaptor */

/**
 * Execute a sequence of operations.
 * Wraps `language-common/execute`, and prepends initial state for http.
 * @example
 * execute(
 *   create('foo'),
 *   delete('bar')
 * )(state)
 * @constructor
 * @param {Operations} operations - Operations to be performed.
 * @returns {Operation}
 */
function execute(...operations) {
  const initialState = {
    references: [],
    data: null
  };
  return state => {
    return (0, _languageCommon.execute)(...operations)({ ...initialState,
      ...state
    });
  };
}
/**
 * Sends an SMS message to a specific phone number
 * @public
 * @example
 * sendSMS({
 *  body: dataValue('sampleText'),
 *  from: dataValue('myFromNumber'),
 *  to: dataValue('ukMobile'),
 * });
 * @function
 * @param {Object} params - an object containing 'body', 'from', and 'to' keys.
 * @returns {Operation}
 */


function sendSMS(params) {
  return state => {
    const {
      accountSid,
      authToken
    } = state.configuration;
    const {
      body,
      from,
      to
    } = (0, _languageCommon.expandReferences)(params)(state);

    const client = require('twilio')(accountSid, authToken);

    return new Promise((resolve, reject) => {
      client.messages.create({
        body,
        from,
        to
      }).then(response => {
        if (response.errorCode) {
          console.log(response);
          reject(errorCode);
        }

        console.log(response);
        return response;
      }).done();
    });
  };
} // TODO: write a bulkSms function that takes an array.
// export function bulkSMS(params) {}