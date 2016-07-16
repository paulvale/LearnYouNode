var map = require('through2-map');  
var http = require('http');


var server = http.createServer(function (req, res) {  
	// request handling logic...   
    req.pipe(map(function (chunk) {  
       return chunk.toString().toUpperCase();
    })).pipe(res);

});

server.listen(process.argv[2]);  


/*
	SOLUTION OFFICIELLE

	var http = require('http')  
     var map = require('through2-map')  
       
     var server = http.createServer(function (req, res) {  
       if (req.method != 'POST')  
         return res.end('send me a POST\n')  
       
       req.pipe(map(function (chunk) {  
         return chunk.toString().toUpperCase()  
       })).pipe(res)  
     })  
       
     server.listen(Number(process.argv[2])) 

*/