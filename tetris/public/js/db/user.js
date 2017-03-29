var client = require('mysql').createConnection({
  user: 'root',
  password: '1q2w3e4r5t^Y',
  database: 'c9'
});

module.exports.login = function(id, password) {
	console.log("id = "+id);
	console.log("password = "+password);
};