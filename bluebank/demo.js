var api = require('./bluebank-api')

//
// Gets all customers for this developer account
//
api.getCustomers(function (error, data) {
	console.log(data)
})

//
// Gets the customer with the specified id
//
api.getCustomer('ea12b7ae-7118-4ceb-a9a3-b7cbff52af1a', function (error, data) {
	console.log(data)
})

//
// Gets all accounts for the specified customer
//
api.getAccounts('ea12b7ae-7118-4ceb-a9a3-b7cbff52af1a', function (error, data) {
	console.log(data)
})

//
// Gets the account with the specified id
//
api.getAccount('bc8f261b-8e20-4581-b6e9-ba6b7f04f264', function (error, data) {
	console.log(data)
})

//
// Gets all transactions for the specified account
//
api.getTransactions('bc8f261b-8e20-4581-b6e9-ba6b7f04f264', function (error, data) {
	console.log(data)
})
