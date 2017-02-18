const request = require('request')

// BlueBankAPI.js
module.exports = {};

/**
 * The access token in order to make requests to BlueBank APIs. (Valid for 1 hour.)
 */
const accessToken = ''

/**
 * The primary key that displayed in subscription details part. First you have
 * to subscribe to a product (e.g. Blue Bank API v0.7).
 */
const subscriptionKey = ''

/**
 * Defines the options object containing the required HTTP Headers such as
 * 'Authorization' and 'Ocp-Apim-Subscription-Key'.
 */
let options = {
  headers: {
    'Authorization': 'bearer ' + accessToken,
    'Ocp-Apim-Subscription-Key': subscriptionKey
  }
};

module.exports.getCustomers = function(callback) {
  callback = (typeof callback === 'function') ? callback : function() {};

  options.url = 'https://bluebank.azure-api.net/api/v0.7/customers'
  request(options, function (error, response, body) {
    if (error) {
      callback(error, null)
      return;
    }
    callback(null, body)
  })
}

module.exports.getCustomer = function(customerId, callback) {
  callback = (typeof callback === 'function') ? callback : function() {};

  options.url = 'https://bluebank.azure-api.net/api/v0.7/customers/' + customerId
  request(options, function (error, response, body) {
    if (error) {
      callback(error, null)
      return;
    }
    callback(null, body)
  })
}

module.exports.getAccounts = function(customerId, callback) {
  callback = (typeof callback === 'function') ? callback : function() {};

  options.url = 'https://bluebank.azure-api.net/api/v0.7/customers/' + customerId + '/accounts'
  request(options, function (error, response, body) {
    if (error) {
      callback(error, null)
      return;
    }
    callback(null, body)
  })
}

module.exports.getAccount = function(accountId, callback) {
  callback = (typeof callback === 'function') ? callback : function() {};

  options.url = 'https://bluebank.azure-api.net/api/v0.7/accounts/' + accountId
  request(options, function (error, response, body) {
    if (error) {
      callback(error, null)
      return;
    }
    callback(null, body)
  })
}

module.exports.getTransactions = function(accountId, callback) {
  callback = (typeof callback === 'function') ? callback : function() {};

  options.url = 'https://bluebank.azure-api.net/api/v0.7/accounts/' + accountId + '/transactions'
  request(options, function (error, response, body) {
    if (error) {
      callback(error, null)
      return;
    }
    callback(null, body)
  })
}
