var	express 				= require("express"),
		path 						= require("path"),
		app 						= express(),
		bodyParser 			= require("body-parser"),
		mongoose				= require("mongoose"),
		flash						= require("connect-flash"),
		passport 				= require("passport"),
		LocalStrategy 	= require("passport-local"),
		methodOverride  = require("method-override"),
		User						= require("./models/user"),
		seedDB 					= require("./seeds");

app.use(express.static(__dirname + '/views/'));

//app.use('/formSubmit', formRouter);
app.set("view engine", "ejs");


app.get("/", function(req, res) {
	res.render('home');
});

// ================= //
//  Register Routes  //
// ================= //

// show register form
router.get("/register", function(req, res) {
	res.render("register", {page: 'register'});
});

app.get("*", function(req, res) {
	res.send("Sorry, that's not a valid url.");
});

// Tell Express to listen for requests (start server)
app.listen(3000, function() {
	console.log("Server has started.");
});
