// Adding to the same program, display the year you were born when you report your age in a query parameter. For example, when you go to the URL:

// /year?age=32 it will display You were born in 1985..

var express = require('express');
var app = express();

app.get('/year', function(req, res){
	var age = req.query.age;
	var year = 2017 - age;
	res.send('You were born in ' + year + '.')
});

app.listen(3000, function(){
	console.log('Example app listening on port 3000!');
});