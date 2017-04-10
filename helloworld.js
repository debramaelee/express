// Make an express program that will display "Hello, world!" at the root URL: /

var express = require('express');
var app = express();

app.get('/hello/:message', function(req, res){
	var message = req.params.message;
	res.send('Hello ' + message + '!');

});

app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});