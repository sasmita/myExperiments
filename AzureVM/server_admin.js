var http = require('http')
var port = process.env.PORT || 1400;

var azure = require('azure-storage');

var accountKey = '';  // Enter account Key
var accountName = ''; // Enter account name

var tableService = azure.createTableService(accountName, accountKey);

var alertTempMsg;

var query1 = new azure.TableQuery()
  .select(['RowKey','Status', 'TimeStamp'])
  .where('EventType eq ?', 'temperature');

tableService.queryEntities('EventSample', query1, null, function(error, result, response){

	var count = (result.entries).length;

	var res = result.entries[count-1].Status._;

	if(res == 'not ok')
	{
		console.log("Alert");
	}	

	if(error) {
      		console.log("Error executing query");
      	}
      	else {
		console.log("Query was successful");
		
		alertTempMsg =
			"<html>" +
			"<script type='text/javascript'> " +
			" if ('" + res + "' == 'not ok')" +
				" { alert ('Please check vending machine temperature! ') }" +
			"</script>" +
			"</html>"
	}
});

var alertStockmsg;

var query2 = new azure.TableQuery()
  .select(['Available'])

tableService.queryEntities('Inventory', query2, null, function(error, result, response){
	ck_count = result.entries[0].Available._;
	pep_count = result.entries[1].Available._;

	if(error) {
      		console.log("Error executing query");
      	}
      	else {
		console.log("Query was successful");

		alertStockMsg =
			"<html>" +
			"<script type='text/javascript'> " +
			" var x = 2 ;" +
			" if ( (" + ck_count+ " <=  x ) || (" + pep_count+" <=  x))" +
				" { alert ('Please refill your stock') }" +
			"</script>" +
			"</html>"
	}
});

var inventoryTable;

var query3 = new azure.TableQuery()
  .select(['Price', 'Available'])

tableService.queryEntities('Inventory', query3, null, function(error, result, response){
	ck_count = result.entries[0].Available._;
	ck_price = result.entries[0].Price._;
	pep_count = result.entries[1].Available._;
	pep_price = result.entries[1].Price._;

      if(error) {
      	console.log("Error executing query");
      }
      else {
	console.log("Query was successful");

      	inventoryTable = 
		" <html> <h1> Intelligent Vending Machine </h1>" + 
		" <h2> Inventory Data </h2>" +
		" <form><input type=button value='Refresh' onClick='history.go()'></form>" +
		" <table style= 'width:100%' border='1'>" +
		   "<tr>" +
		   	"<td> Product </td> " +
		   	"<td> Available </td> " +
		   	"<td> Price </td> " +
		    "<tr>" +
		   	"<td> Coke  </td> " +
		   	"<td>"+ ck_count + "</td> " +
		   	"<td>"+ ck_price + "</td> " +
		    "<tr>" +
		   	"<td> Pepsi </td> " +
		   	"<td>" + pep_count +"</td> " +
		   	"<td>" + pep_price + "</td>" +
		   "</tr>" +
		"</table>" +
		" </html>"	
      }
});

var eventTable;

eventTable = "<html>" +
		" <h2> Events Data </h2>" + 
		" <table style= 'width:100%' border='1'>" +
		   "<tr>" +
		   	"<td> RowKey </td> " +
		   	"<td> EventType </td> " +
		   	"<td> EventDescription </td> " +
		   	"<td> Val </td> " +
		   	"<td> Status </td> " +
		   	"<td> TimeStamp </td> </tr>";
			
			var query4 = new azure.TableQuery()
			.select(['RowKey', 'EventType', 'EventDescription', 'Val', 'Status', 'TimeStamp'])

			tableService.queryEntities('EventSample', query4, null, function(error, result, response){
				var i;

				var row_count = (result.entries).length;

				console.log("total rows in event table is:", row_count);

				for(i = 0; i < row_count ; i++)
				{  	
					result1 = result.entries[i].RowKey._;
					result2 = result.entries[i].EventType._;
					result3 = result.entries[i].EventDescription._;
					result4 = result.entries[i].Val._;
					result5 = result.entries[i].Status._;
					result6 = result.entries[i].TimeStamp._;

					if(error) {
					console.log("Error executing query");
					}
					else {
					console.log("Query was successful");
						    
					eventTable += 	"<tr>" +
							"<td>"+ result1 + "</td> " +
							"<td>"+ result2 + "</td> " +
							"<td>"+ result3 + "</td> " +
							"<td>"+ result4 + "</td> " +
							"<td>"+ result5 + "</td> " +
							"<td>"+ result6 + "</td> " +
							"</tr>"; 
					}
				}
			eventTable += "</table>" + " </html>";
			});

http.createServer(function(req,res){ 
res.writeHead(200, {'Content-Type': 'text/html' });
	res.end(alertTempMsg + alertStockMsg + inventoryTable + eventTable);
	}).listen(port);
