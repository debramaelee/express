// Adding to the same program, say a greeting to the user, given that the user's name is encoded inside the URL. For example, if you go to the URL

// /greet/Kennedy it should say "Hello, Kennedy!"
// /greet/Jamison it should say "Hello, Jamison!"
// /greet/Manny it should say "Hello, Manny!"
// etc...

var express = require('express');
var app = express();

app.get('/greet/:user_name', function(req, res){
	var user_name = req.params.user_name;
	res.send('Hello, ' + user_name + '!');
});

app.listen(3000, function(){
	console.log('Example app listening on port 3000!');
});