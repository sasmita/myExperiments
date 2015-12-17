/* functions for executing queries */

var azure = require('azure-storage');

var tableService = azure.createTableService(accountName, accountKey);

var coke_avail = 0;
var coke_price = 0;

var query1 = new azure.TableQuery()
  .select(['Price', 'Available'])
  .where('Products eq ?', 'Coke');


function getCokeCount() {
tableService.queryEntities('Inventory', query1, null, function(error, result, response){
      coke_avail = result.entries[0].Available._;	
      if(error) {
      console.log("Error executing query");
      }
      else {
	      console.log(coke_avail);
	}
  });
}

function getCokePrice() {
tableService.queryEntities('Inventory', query1, null, function(error, result, response){
      coke_price = result.entries[0].Price._;	
      if(error) {
      console.log("Error executing query");
      }
      else {
	      console.log(coke_price);
	}
  });
}

var pepsi_avail = 0;
var pepsi_price = 0;

var query2 = new azure.TableQuery()
  .select(['Price', 'Available'])
  .where('Products eq ?', 'Pepsi');

function getPepsiCount(){
	tableService.queryEntities('Inventory', query2, null, function(error, result, response){
	      pepsi_avail = result.entries[0].Available._;	
	      if(error) {
	      console.log("Error executing query");
	      }
	      else {
		      console.log(pepsi_avail);
		}
	});
}

function getPepsiPrice(){
	tableService.queryEntities('Inventory', query2, null, function(error, result, response){
	      pepsi_price = result.entries[0].Price._;	
	      if(error) {
	      console.log("Error executing query");
	      }
	      else {
		      console.log(pepsi_price);
		}
	});
}

console.log("printing values for Coke");

getCokeCount();
getCokePrice();

console.log("printing values for Pepsi");

getPepsiCount();
getPepsiPrice();
