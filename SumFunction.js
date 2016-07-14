var processLength = process.argv.length;

var sum = 0;

for (var i = 2; i < processLength; i++) {
  sum += Number(process.argv[i]);
}

console.log(sum);

/*
	Correction du site :

 	var result = 0  
       
    for (var i = 2; i < process.argv.length; i++)  
   		result += Number(process.argv[i])  
       
    console.log(result)

*/