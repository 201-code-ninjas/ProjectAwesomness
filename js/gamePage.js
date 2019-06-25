// var circleScore = document.getElementById('scoreKeeper');
// var ctx = circleScore.getContext('2d');
// ctx.beginPath();
// ctx.arc(100, 75, 50, 0, 2 * Math.PI);
// ctx.stroke();

var groundLevelImg = new Image();
groundLevelImg.src = '../assets/scenery-ground.png';

var wallOfDeathGif = new Image();
wallOfDeathGif.src = '../assets/wallOfDeath.png';

var canvasWidth = 960;
var canvasHeight = 500;
var groundLevel = canvasHeight - 174;
// console.log(typeof groundLevelImg);

window.onload = function(){
  var canvas = document.getElementById('gamePageCanvas');
  var ctx = canvas.getContext('2d');

  ctx.drawImage(groundLevelImg, 0, groundLevel);
  ctx.drawImage(wallOfDeathGif, 0, 0);
};
