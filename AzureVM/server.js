var http = require('http')
var port = process.env.PORT || 1200;

var azure = require('azure-storage');

var accountKey = '';  // Enter account key
var accountName = ''; // Enter account name 

var tableService = azure.createTableService(accountName, accountKey);

var query = new azure.TableQuery()
  .select(['Price', 'Available'])

var display;

tableService.queryEntities('Inventory', query, null, function(error, result, response){
	ck_count = result.entries[0].Available._;
	ck_price = result.entries[0].Price._;
	pep_count = result.entries[1].Available._;
	pep_price = result.entries[1].Price._;

      if(error) {
      	console.log("Error executing query");
      }
      else {
	console.log("Query was successful");
	console.log("Coke Count: ", ck_count);
	console.log("Coke Price: ", ck_price);
	console.log("Pepsi Count: ",pep_count);
	console.log("Pepsi Price ", pep_price);

      	display = " <html> <h1> Welcome to IoT Vending Machine </h1>" + 
		" <form name='myform'> Coke Count: <input type='number' id='ck' name='cokecount' value='' min='0' max=" + ck_count + 
			 "  > <br> " + 
			 " Pepsi Count: <input type='number' id='pep' name='pepsicount' min='0', max=" + pep_count+ " >" +
		" </form>" +
		" <body> " +
		" <button onclick='myFunction()'> Buy </button> <p id='demo'></p>" + 
			"<script> function myFunction()" + 
				"{ var coke_val = document.getElementById('ck').value; " +
				"  var pep_val = document.getElementById('pep').value; " +
				"  var price = ( coke_val * " + ck_price + " + pep_val * " + pep_price + "); " +  
				"  var x = '';" + 
				  "if (confirm('Are you sure to buy these items?') == true)" + 
					"{ x = 'you pressed OK!' + '<br>' + ' selected coke: '+ coke_val + '<br>' +'selected pepsi:' + pep_val + '<br>'+ '<br>' + 'your total is: ' + price }" +
				  "else" +
					"{ x = 'you pressed Cancel!'; }" +
				  "document.getElementById('demo').innerHTML = x; }" +
			"</script>" +
		" </body> " +
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
		"</table>"
		" </html>"	
      }
});

http.createServer(function(req,res){ 
res.writeHead(200, {'Content-Type': 'text/html' });
	res.end(display);
	}).listen(port);

