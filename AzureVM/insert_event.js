var azure = require('azure-storage');

var tableService = azure.createTableService();

var date = new Date();

var test = date.toString().split(' ');

var cal_date = date.getMonth()+1 + "/" + date.getDate() + "/" +  date.getFullYear() + " " + test[4];
console.log(cal_date);

var task = {
	PartitionKey: {'_':'myPartitionKey'},
	RowKey: {'_':'2'},
	EventType: {'_':'dispense'},
	EventDescription: {'_':'tray1'},
	Val: {'_':'150'},
	Status: {'_':'dispensed'},
        TimeStamp: {'_':cal_date}	
};	

tableService.insertEntity('EventSample', task, function(error, result, response){
	if(!error) {
		console.log("Inserted an entry  into the table");	
	}
});

/*
o/p: partitionKey   RowKey  EventType  EventDescription  Val  Status    TimeStamp
     mypartitionKey 2       dispense   tray1             150  dispensed 12/11/2015 11:30:15

Here tary1 refers to coke and val refers to price of each coke
*/
