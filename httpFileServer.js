var http = require('http');
var fs = require('fs'); 

var server = http.createServer(function (req, res) {  
	// request handling logic...  
	var src = fs.createReadStream(process.argv[3]);
	src.pipe(res);

});

server.listen(process.argv[2]);  


/*
	SOLUTION OFFICIELLE

	var http = require('http')  
     var fs = require('fs')  
       
     var server = http.createServer(function (req, res) {  
       res.writeHead(200, { 'content-type': 'text/plain' })  
       
       fs.createReadStream(process.argv[3]).pipe(res)  
     })  
       
     server.listen(Number(process.argv[2]))  
   


*/