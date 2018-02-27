var game = this.game || (this.game={});
var createjs = createjs || {};

(function(game, cjs){
	game.canvas_game = document.getElementById('canvas_game');
	game.stage_game = new cjs.Stage(game.canvas_game);
	
	game.flow = {
			startOver: function() {		//시작화면
				game.startScene.show();
				game.gameScene.hide();
				game.gameOverScene.hide();
			},
			startGame: function() {		//게임화면
				cjs.Ticker.setPaused(false);
				game.startScene.hide();
				game.gameScene.show();
				game.gameOverScene.hide();
			},
			gameOver: function() {		//게임오버
				cjs.Ticker.setPaused(true);
				game.startScene.hide();
				game.gameScene.hide();
				game.gameOverScene.show();
			},
			nextLevel: function() {
				this.startGame();
			}
	}
}).call(this, game, createjs);

/**
 * TODO
 * 게임판
 * 작대기 두개
 * 공
 * 작대기 아래위 움직임 처리
 * 공 움직임 처리
 * 충돌처리(벽, 작대기)
 * 컴퓨터 작대기 움직임 처리(공 높이 따라가기)
 * 스코어
 */