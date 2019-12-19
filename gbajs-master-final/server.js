var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8080

var urlencodedParser = bodyParser.urlencoded({ extended: false});

app.use(express.static(__dirname));

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/", function(req, res){
	var data = {name: ''};
	res.render('testingbill', {name: data.name} );
})

app.post("/index", urlencodedParser, function(req, res){
	console.log(req.body);
	var data = {name: 'bill'};
	res.render('index', {name: req.body.who});
})

app.get("/index", function(req, res){
	var data = {name: 'bill'};
	res.render('index', {name: data.name});
})



app.listen(port,function(){

	console.log(" app running on port: " + port)
})