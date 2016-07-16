var fs = require('fs');  
var path = require('path');


module.exports = function(pathFile, fileExt, callback) {
	var fileExtension = "."+fileExt;
	var filesArray = [];

	fs.readdir(pathFile, function (err, contents) { 
		if(err){
			return callback(err);
		} 

		for (var i = 0; i < contents.length; i++) {
			if(path.extname(contents[i]) == fileExtension){
				filesArray.push(contents[i]);
			}
		}

		return callback(null,filesArray);

	});

};

/*
	SOLUTION OFFICIELLE

	var fs = require('fs')  
     var path = require('path')  
       
     module.exports = function (dir, filterStr, callback) {  
       
       fs.readdir(dir, function (err, list) {  
         if (err)  
           return callback(err)  
       
         list = list.filter(function (file) {  
           return path.extname(file) === '.' + filterStr  
         })  
       
         callback(null, list)  
       })  
     }  
   
*/


