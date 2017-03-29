var fs = require('fs');
var express = require('express');
var router = express.Router();  

router.get("/", function(req, res) {
    fs.readFile('views/game2_0.html', function(error, data) {
		res.send(data.toString());
	});
});

router.get("/login", function(req, res) {
	console.log("login");
});

module.exports = router;