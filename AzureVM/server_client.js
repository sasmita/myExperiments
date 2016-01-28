var http = require('http')
var port = process.env.PORT || 1400;

var azure = require('azure-storage');

var accountKey = '';  //Enter account Key
var accountName = ''; //Enter account name

var tableService = azure.createTableService(accountName, accountKey);

var query = new azure.TableQuery()
  .select(['Price', 'Available'])

var hello;

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

      	hello = " <html> <h1> Intelligent Vending Machine </h1>" + 
		" <form name='myform'> Select Coke : <input type='number' id='ck' name='cokecount' value='' min='0' max=" + ck_count + 
			 "  > <br> " + 
			 " Select Pepsi : <input type='number' id='pep' name='pepsicount' min='0', max=" + pep_count+ " >" +
		" </form>" +
		" <body> " +
		" <button onclick='myFunction()'> Buy </button> <p id='demo'></p>" + 
			"<script> function myFunction()" + 
				"{ var coke_val = document.getElementById('ck').value; " +
				"  var pep_val = document.getElementById('pep').value; " +
				"  var price = ( coke_val * " + ck_price + " + pep_val * " + pep_price + "); " +  
				"  var x = '';" + 
				  "if (confirm('Are you sure to buy these items?') == true)" + 
					"{ x = 'you pressed OK!' + '<br>'+'<br>' + ' selected coke: '+ coke_val + '<br>' +'selected pepsi:' + pep_val + '<br>'+ '<br>' + 'your total is: ' + price + '<br>'+ '<br>' + 'Please wait, while we process your order .....' }" +
				  "else" +
					"{ x = 'you pressed Cancel!'; }" +
				  "document.getElementById('demo').innerHTML = x; }" +
			"</script>" +
		" </body> " +
		" </html>"	
      }
});

http.createServer(function(req,res){ 
res.writeHead(200, {'Content-Type': 'text/html' });
	res.end(hello);
	}).listen(port);

