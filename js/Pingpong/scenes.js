var game = this.game || (this.game={});
var createjs = createjs || {};

var scene = {
		node: document.querySelector('.scene'),
		show: function() {
			this.node.classList.remove('out');
			this.node.classList.add('in');
		},
		hide: function() {
			this.node.classList.remove('in');
			this.node.classList.add('out');
		}
};

(function(game, cjs) {
	var startScene = game.startScene = Object.create(scene);
	startScene.node = document.getElementById('start-scene');
	startScene.setup = function() {
	};

	var gameOverScene = game.gameOverScene = Object.create(scene);
	gameOverScene.node = document.getElementById('gameover-scene');
	gameOverScene.setup = function() {
	};
}).call(this, game, createjs);