const fs = require('fs');

fs.readFile('data.txt', 'utf8', function(err, data) {
	
	let parseCarriage = data.split("\n");

	let SQLstring = '';
	for (var i = 0; i<parseCarriage.length; i+=3) {

		SQLstring += "INSERT INTO countries (country, population, size) VALUES ('" + parseCarriage[i] + "', " + parseCarriage[i+1] + ", " + parseCarriage[i+2] + ");" + "\n";
	}
	
	fs.writeFile('seed.sql', SQLstring, function (err) {
  	
  	if (err) throw err;
  		console.log('Replaced!');
	});
});