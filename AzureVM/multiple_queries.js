var azure = require('azure-storage');

var accountKey = '';  // Enter account key
var accountName = ''; // Enter account name

var tableService = azure.createTableService(accountName, accountKey);

var query = new azure.TableQuery()
  .select(['Price', 'Available', 'Products'])

tableService.queryEntities('Inventory', query, null, function(error, result, response){
	ck_count = result.entries[0].Available._;
	ck_price = result.entries[0].Price._;
	pep_count = result.entries[1].Available._;
	pep_price = result.entries[1].Price._;
	if(error){
		console.log("Error executing query", error.stack);
	}
	else{
		console.log("Query executed successfully");
		console.log("Coke Count: ", ck_count);
		console.log("Coke Price: ", ck_price);
		console.log("Pepsi Count: ",pep_count);
		console.log("Pepsi Price ", pep_price);
	}
});
