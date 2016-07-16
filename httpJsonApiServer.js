var http = require('http');
var url = require('url');


function JsonDate(aDate) {
	var dateObjet = new Object();
	var date = new Date(aDate);
	dateObjet.hour = date.getHours();
	dateObjet.minute = date.getMinutes();
	dateObjet.second = date.getSeconds();

	return JSON.stringify(dateObjet);
}

function JsonUnixDate(aDate){
	var date = new Date(aDate);
	var newDate = date.getTime();
	var dateObjet = new Object();
	dateObjet.unixtime = newDate;
	return JSON.stringify(dateObjet);

}

var server = http.createServer(function (req, res) { 
	if (req.method != 'GET')
		return res.end('Not a GET request.\n');

	var urlInfos = url.parse(req.url, true);

	if (urlInfos.pathname == "/api/parsetime") {
	 	res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JsonDate(urlInfos.query.iso));
	} else if (urlInfos.pathname == "/api/unixtime") {
		res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JsonUnixDate(urlInfos.query.iso));
	}

});

server.listen(process.argv[2]); 


/*
	SOLUTION OFFICIELLE
	var http = require('http')  
     var url = require('url')  
       
     function parsetime (time) {  
       return {  
         hour: time.getHours(),  
         minute: time.getMinutes(),  
         second: time.getSeconds()  
       }  
     }  
       
     function unixtime (time) {  
       return { unixtime : time.getTime() }  
     }  
       
     var server = http.createServer(function (req, res) {  
       var parsedUrl = url.parse(req.url, true)  
       var time = new Date(parsedUrl.query.iso)  
       var result  
       
       if (/^\/api\/parsetime/.test(req.url))  
         result = parsetime(time)  
       else if (/^\/api\/unixtime/.test(req.url))  
         result = unixtime(time)  
       
       if (result) {  
         res.writeHead(200, { 'Content-Type': 'application/json' })  
         res.end(JSON.stringify(result))  
       } else {  
         res.writeHead(404)  
         res.end()  
       }  
     })  
     server.listen(Number(process.argv[2]))

*/ 



