// Add to your program the following pages:

// "Meow" at the URL /cats
// "Woof" at the URL /dogs
// "Living together" at the URL /cats_and_dogs

var express = require('express');
var app = express();

app.get('/cats', function(req, res){
	res.send('Meow')
});
app.get('/dogs', function(req, res){
	res.send('Woof');
});
app.get('/cats_and_dogs', function(req, res){
	res.send('Living together')
});

app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});