var express = require ('express');	
var app = express();
var port = process.env.PORT || 8080;

app.set ('view engine', 'ejs');

app.get('/', function(req,res){
	res.render('home')
});

app.get('/about', function(req, res){
	res.render('about')
});

app.listen(port, function(){
   console.log("simpele app");
});