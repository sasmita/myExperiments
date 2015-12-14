var http = require('http')
var port = process.env.PORT || 1200;

var azure = require('azure-storage');

var tableService = azure.createTableService(accountName, accountKey);

/* create a query */
var query = new azure.TableQuery()
  .select(['Price', 'Available'])
  .where('RowKey eq ?', '3');

var hello;

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
	      //console.log(result.entries);
	      console.log("Count: ",data);
	      console.log("Price: ",price);

	      hello = " <html> <h1> Welcome to IoT Vending Machine </h1>" + 
			" <form name='myform'> Coke Count: <input type='number' id='ck' name='cokecount' value='' min='0' max=" + data + 
				 "  > <br> " + 
				 " Pepsi Count: <input type='number' id='pep' name='pepsicount' value=''  min='0', max='5' >" +
       			" </form>" +
			" <body>" +
			" <button onclick='myFunction()'> Buy </button> <p id='demo'></p>" + 
				"<script> function myFunction()" + 
					"{ var x; " + 
					  "if (confirm('Are you sure to buy these items?') == true)" + 
					  	"{ x = 'you pressed OK' ; } " +
					  "else { x = 'you pressed Cancel!'; }" +
					  "document.getElementById('demo').innerHTML = x; }" + 
       				"</script>" +	
			" </body> " +
			" <b> Available Coke count: </b>" + data + 
			" <br> " + 
			" <b> Coke Price: </b>" + result.entries[0].Price._ ; +
		        " </html> " 
	}
});

http.createServer(function(req,res){ 
res.writeHead(200, {'Content-Type': 'text/html' });
	res.end(hello);
	}).listen(port);

