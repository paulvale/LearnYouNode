var net = require('net');

var server = net.createServer(function (socket) {  
	var date = new Date();

	var month = ['01','02','03','04','05','06','07','08','09','10','11','12'];

	var data = date.getFullYear()+'-'+month[date.getMonth()]+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+"\n";
	socket.end(data);
});

server.listen(process.argv[2]) ;


/*
	SOLUTION OFFICIELLE

	var net = require('net')  
       
     function zeroFill(i) {  
       return (i < 10 ? '0' : '') + i  
     }  
       
     function now () {  
       var d = new Date()  
       return d.getFullYear() + '-'  
         + zeroFill(d.getMonth() + 1) + '-'  
         + zeroFill(d.getDate()) + ' '  
         + zeroFill(d.getHours()) + ':'  
         + zeroFill(d.getMinutes())  
     }  
       
     var server = net.createServer(function (socket) {  
       socket.end(now() + '\n')  
     })  
       
     server.listen(Number(process.argv[2])) 
*/