var date = new Date();
console.log("date:", date);
//o/p: Fri Dec 11 2015 15:56:58 GMT-0800 (PST) 

var test = date.toString().split(' ');
console.log(test[0]); 
// o/p: Fri

console.log(date.getMonth()+1 + "/" + date.getDay() + "/" +  date.getFullYear() + " " + test[4]);
//o/p: 12/5/2015 15:56:58 (mm/dd/yyyy hh:mm:ss format)
