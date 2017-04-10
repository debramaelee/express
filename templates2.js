var express = require('express');
var app = express();

app.set('view engine', 'hbs');

app.get('/greet/:name', function(req, res){
	var name = req.params.name;
	var age = req.query.age;
	var year= 2017 - age;

	res.render('hello.hbs', {
		title: 'Hello',
		name: name,
		age: age
		});
});

app.listen(3000, function(){
	console.log('Example app listening on port 3000!');
});