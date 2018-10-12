// 1. Parse the content and update onto firebase (or any database)
// 2. Redirect to feed page.

var express = require('express');
var router = express.Router();

/* Handles when a user posts a trip. Should parse and append to DB
 * Should also account for form id and have a form object. */
router.post('/form', function(req, res, next) { //should contain user id
   // parse the content, map the form to user
   // append to database.
    var form = {city:res.body.cities, countries:res.body.countries, length:res.body.length, cost:res.body.cost, id: assignID(userID)};
    console.log("hey this is " + form.cities);
    res.render('hello world');
    // return dashboard  with the new post
});

// function appendActivity(form) {
//     return
//     }


function assignID(attributes) {
    return 0;
}

module.exports = router;



