var http = require('http');
var ex = require("express");
var morgan = require('morgan');
//var io = require('socket.io');
var main = require("./routes/main");
/*
var join = require("./routes/join");
var room = require("./routes/room");
var game = require("./routes/game");
var score = require("./routes/score");
*/
var app = ex();

app.use(morgan('dev'));						// 로깅 설정
app.use(ex.static('public'));	// 리소스 설정
app.use('/jquery', ex.static(__dirname + '/node_modules/jquery/dist'));

// 라우팅
app.get("/beforegame", function(req, res) {
	fs.readFile('views/game.html', function(error, data) {
		res.send(data.toString());
	});
});
app.use("/", main);
/*
app.use("/join", join);
app.use("/room", room);
app.use("/game", game);
app.use("/score", score);
*/
/*
TODO
input
join
*/

// 오류 처리
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('error');
});


//서버 실행
app.listen(80, function() {
    console.log("server start");
});