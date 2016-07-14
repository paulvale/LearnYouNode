var fs = require('fs');
var myNumber = undefined;

function readFile(callback) {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
  	var str = fileContents.toString();
    var stringArray = str.split('\n');
    myNumber = stringArray.length - 1;
    callback();
  });
}

function logMyNumber() {
  console.log(myNumber);
}

readFile(logMyNumber);

/*
	SOLUTION PROPOSEE 

	var fs = require('fs')  
     var file = process.argv[2]  
       
     fs.readFile(file, function (err, contents) {  
       // fs.readFile(file, 'utf8', callback) can also be used  
       var lines = contents.toString().split('\n').length - 1  
       console.log(lines)  
     }) 
*/