/** @module Adaptor */
import {execute as commonExecute, expandReferences, composeNextState } from 'language-common';

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
export function execute(...operations) {
  const initialState = {
    references: [],
    data: null
  }

  return state => {
    return commonExecute(...operations)({
      ...initialState,
      ...state
    })
  };

}

/**
 * Sends an SMS message to a specific phone number
 * @public
 * @example
 * sendSMS("OpenFn", "phoneNumber", "Hello World!")
 * @function
 * @param {String} from - Name or number the message should be sent from.
 * @param {String} toNumber - Destination phone number.
 * @param {String} message - Text message
 * @returns {Operation}
 */
export function sendSMS(params) {

  return state => {

    const { accountSid, authToken } = state.configuration;
    const { body, from, to } = expandReferences(params)(state)

    const client = require('twilio')(accountSid, authToken);

    return new Promise((resolve, reject) => {

      client.messages
      .create({ body, from, to })
      .then(response => {
        if (response.errorCode) {
          console.log(response)
          reject(errorCode)
        }
        console.log(response)
        return response
      })
      .done();
    })
  }
}

export {
  field,
  fields,
  sourceValue,
  alterState,
  each,
  merge,
  dataPath,
  dataValue,
  lastReferenceValue
}
from 'language-common';
