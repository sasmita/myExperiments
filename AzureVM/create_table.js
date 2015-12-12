var azure = require('azure-storage');

var tableService = azure.createTableService();

tableService.createTableIfNotExists('EventSample', function(error, result, response){
	if(error) {
		console.log("Error creating table: ");
	}
	else{
		console.log("EventSample table created successfully");	
	}
})
