/* Getting count, creating task, inserting task and updating count value */

var azure = require('azure-storage');

var tableService = azure.createTableService(accountName, accountKey);

var query = new azure.TableQuery()
  .select(['Price', 'Available'])
  .where('RowKey eq ?', '3');

var data = 0;
var price = 0;

tableService.queryEntities('Inventory', query, null, function(error, result, response){
      data = result.entries[0].Available._;	
      price = result.entries[0].Price._;	
      if(error) {
      console.log("Error executing query");
      }
      else {
	      console.log("Query was successful");
	      console.log("Count: ",data);
	      console.log("Price: ",price);
	}
});

var get_count = "";

// Take an example, say y = 2(which means user, selects 2 cokes)

var y = 2;
while(y != 0)
{	
	console.log("y value:", y);
	/* COMPONENT 1 Get the count value: */

	var query = new azure.TableQuery()
		.select(['Count'])
		.where('RowKey eq ?', 'myRowKey');

	tableService.queryEntities('Count', query, null, function(error, result, response){
		get_count = result.entries[0].Count._;
		if(error) {
			console.log("Error executing query: " + error.stack);
		 }
		else {
			console.log("Query was successful");
			console.log("getCount_val : ",get_count);
			
			/* COMPONENT 2 creating & inserting a task */
			
			var x = '1';
			// Increment the count
			get_count = (get_count - 0) + (x - 0);

			console.log("Now get_count is: ", get_count);
			// convert integer to string
			get_count = get_count + "";

			var date = new Date();
			var test = date.toString().split(' ');

			var cal_date = date.getMonth()+1 + "/" + date.getDate() + "/" +  date.getFullYear() + " " + test[4];
			console.log(cal_date);
			
			var task = { 
				 PartitionKey: {'_':'myPartitionKey'}, 
				 RowKey: {'_': get_count },  		 
				 EventType: {'_':'dispense'},
				 EventDescription: {'_':'tray1'},
				 Val: {'_':'150'},
				 Status: {'_':'pending'},
				 TimeStamp: {'_':cal_date}
			}

			tableService.insertEntity('EventSample', task, function(error, result, response){ 
				if(!error) { 
					console.log('Inserted an entry into the table');
				} 
			});
		       	
			/* COMPONENT 3 Updating count value in Count table */
			
			var task = {
				PartitionKey: {'_':'myPartitionKey'},
				RowKey: {'_':'myRowKey'},
				Count: {'_': get_count},
				TimeStamp: {'_':cal_date}	
				};	

			tableService.updateEntity('Count', task, function(error, result, response){
				if(!error) {
					console.log("Update count value into the table");	
				}
			});
		}
	});
	y--;
}	
