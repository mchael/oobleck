window.onload = main;

var circle = new Object();
circle.x = 10;
circle.y = 10;

function main() {
  var game = new Game();
  game.start();
}

function Game() {
  var _game = this;
  var fps = 30;
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  _game.init = function() {
    canvas.width = 800;
    canvas.height = 600;
  }

  _game.start = function() {
    window.requestAnimationFrame(_game.run);
  }

  _game.run = function() {
    setTimeout(function() {
      window.requestAnimationFrame(_game.run);

      update();
      render();

    }, 1000 / fps);
  }

  function update() {
    circle.x += 1.2;
    circle.y += 1.2;
  }

  function render() {
    clearCanvas();

    context.strokeStyle = 'black';
    context.beginPath();
    context.arc(circle.x, circle.y, 50, 0, Math.PI*2, true);
    context.closePath();
    context.stroke();
  }

  function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  _game.init();

  return _game;
}
