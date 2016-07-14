var fs = require('fs');  
var path = require('path');
var file = process.argv[2];  
var fileExtension = "."+process.argv[3];

fs.readdir(file, function (err, contents) {  

	for (var i = 0; i < contents.length; i++) {
		if(path.extname(contents[i]) == fileExtension){
			console.log(contents[i].toString());
		}
	}

});


/*
	// SOLUTION Proposée
 var fs = require('fs')  
     var path = require('path')  
       
     var folder = process.argv[2]  
     var ext = '.' + process.argv[3]  
       
     fs.readdir(folder, function (err, files) {  
       if (err) return console.error(err)  
       files.forEach(function(file) {  
           if (path.extname(file) === ext) {  
               console.log(file)  
           }  
       })  
     })  
   


*/