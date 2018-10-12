var express = require("express");
var app = express();
var path = require("path");
//var formRouter = require('./routes/formRouter');


app.use(express.static(__dirname + '/views/'));

//app.use('/formSubmit', formRouter);
app.set("view engine", "ejs");


app.get("/", function(req, res) {
	res.render('home');
});

app.get("/home", function(req, res) {
	res.render('template-update');
});

app.get("/form", function(req, res) {
	res.render('form');
});

app.get("*", function(req, res) {
	res.send("Sorry, that's not a valid url.");
});

// Tell Express to listen for requests (start server)
app.listen(3000, function() {
	console.log("Server has started.");
});
