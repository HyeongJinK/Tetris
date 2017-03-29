var fs = require('fs');
var express = require('express');
var userDB = require('../public/js/db/user.js');

var router = express.Router();  

router.get("/", function(req, res) {
	userDB.testf();
    fs.readFile('views/game2_0.html', function(error, data) {
		res.send(data.toString());
	});
});

router.get("/login", function(req, res) {
	//req.id
	//req.password
	console.log("login");
});

module.exports = router;