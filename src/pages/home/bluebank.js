// BlueBankAPI.js
module.exports = {};

/**
 * The access token in order to make requests to BlueBank APIs. (Valid for 1 hour.)
 */
const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImdmSUtJSC15WjNwaFJIUnlqbnNISXFaTWFlUExHQUVMelBhdDBDTlk0c0EifQ.eyJleHAiOjE0ODc1MTU4MTYsIm5iZiI6MTQ4NzUxMjIxNiwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2Q1Zjg1NjgyLWY2N2EtNDQ0NC05MzY5LTJjNWVjMWEwZThjZC92Mi4wLyIsInN1YiI6ImVhMTJiN2FlLTcxMTgtNGNlYi1hOWEzLWI3Y2JmZjUyYWYxYSIsImF1ZCI6IjBmN2VmODEwLTJmOWMtNDI0Yy05NDJhLTQ4YzZlYTM2MWQ5YSIsIm5vbmNlIjoiZGVmYXVsdE5vbmNlIiwiaWF0IjoxNDg3NTEyMjE2LCJhdXRoX3RpbWUiOjE0ODc1MTIyMTYsIm9pZCI6ImVhMTJiN2FlLTcxMTgtNGNlYi1hOWEzLWI3Y2JmZjUyYWYxYSIsIm5hbWUiOiJtYXJxdWkiLCJmYW1pbHlfbmFtZSI6Ik1hcmtha2lzIiwiZ2l2ZW5fbmFtZSI6Ikt5cmlha29zIiwiZW1haWxzIjpbImt5ci5tYXJrYWtpc0BnbWFpbC5jb20iXSwidGZwIjoiQjJDXzFfQmx1ZUJhbmtTVVNJIn0.tVL-9j350zOg2Le3frqdDldq3k3mODSeu8qLoqkjG4Vj9sJB0O0xCcCoGrDjgokltJiPIcJ-0DVJapyTg57CtBjyRh-E-czD7BvOWVhMLIGKfnP2XUn6CxthieqfZ3M-KRoTynkcNKn5ij1rv9CdWo22CDlK-afyGmj6ZR24B9V7vmbnGmlDEqKuVi7jhvu4lIeRWMONxnPxRD11YPa1QSdhZubfZQ1Gk29_Gffe1-y_dtcQyB2UnAaAibu4Ybe_q_vupSxlw1i3BJD8Ca_uyYntV4YyIrjHOldh5_nj2_LWgGw7XDPy2KQEbcAJbb-JwhPr6sJrkhpUS_O0LsmIlw';

/**
 * The primary key that displayed in subscription details part. First you have
 * to subscribe to a product (e.g. Blue Bank API v0.7).
 */
const subscriptionKey = '8cda0b0e55334fd5bb7a28e406d2ca90'

/**
 * Defines the options object containing the required HTTP Headers such as
 * 'Authorization' and 'Ocp-Apim-Subscription-Key'.
 */
let options = {
  method: 'GET',
  headers: {
    'Authorization': 'bearer ' + accessToken,
    'Ocp-Apim-Subscription-Key': subscriptionKey
  }
};

blueBank = {}

blueBank.getCustomers = function(callback) {
  callback = (typeof callback === 'function') ? callback : function() {};

  const url = 'https://bluebank.azure-api.net/api/v0.7/customers';
  fetch(url, options).then(function(body) {
    callback(null, body)
  })
}

blueBank.getCustomer = function(customerId, callback) {
  callback = (typeof callback === 'function') ? callback : function() {};

  const url = 'https://bluebank.azure-api.net/api/v0.7/customers/' + customerId
  fetch(url, options).then(function(body) {
    callback(null, body)
  })
}

blueBank.getAccounts = function(customerId, callback) {
  callback = (typeof callback === 'function') ? callback : function() {};

  const url  = 'https://bluebank.azure-api.net/api/v0.7/customers/' + customerId + '/accounts'
  fetch(url, options).then(function(body) {
    callback(null, body)
  })
}

blueBank.getAccount = function(accountId, callback) {
  callback = (typeof callback === 'function') ? callback : function() {};

  const url  = 'https://bluebank.azure-api.net/api/v0.7/accounts/' + accountId
  fetch(url, options).then(function(body) {
    callback(null, body)
  })
}

blueBank.getTransactions = function(accountId, callback) {
  callback = (typeof callback === 'function') ? callback : function() {};

  const url = 'https://bluebank.azure-api.net/api/v0.7/accounts/' + accountId + '/transactions'
  fetch(url, options).then(function(body) {
    callback(null, body)
  })
}

module.exports.blueBank = blueBank;
