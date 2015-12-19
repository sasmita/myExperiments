var azure = require('azure-storage');

/* checking if the request is processed by client */

function check()
{
	var track = 1;
	while(1)
	{
		var query = new azure.TableQuery()
		  .select(['Status'])
		  .where('RowKey eq ?', '5');

		console.log("Executed query");

		tableService.queryEntities('EventSample', query, null, function(error, result, response){
			console.log("hello");
			var chk_sts = result.entries[0].Status._; 
			console.log("status is:", chk_sts);	

			if (chk_sts == "dispensed")
			{
				consle.log(" your product is dispensed");
				track = 0;
			}	
			else if (chk_sts == "failure")
			{
				console.log("please try again, some error occured");
				track = 0;
			}
		});
		if (track == 0)
			break;
	}	
	return;
}

check();

