'use strict';

// var circleScore = document.getElementById('scoreKeeper');
// var ctx = circleScore.getContext('2d');
// ctx.beginPath();
// ctx.arc(100, 75, 50, 0, 2 * Math.PI);
// ctx.stroke();
var canvas = document.getElementById('gamePageCanvas');
var ctx = canvas.getContext('2d');


var groundLevelImg = new Image();
var wallOfDeathGif = new Image();
var heroImage = new Image();
var wallOfWinImg = new Image();

var canvasWidth = 960;
var canvasHeight = 500;
var groundLevel = canvasHeight - 174;
var heroXPosition = canvasWidth/2;

function moveHero(){
  heroXPosition +=10;
  
}

function init(){

  groundLevelImg.src = '../assets/scenery-ground.png';
  wallOfDeathGif.src = '../assets/wallOfDeath.png';
  heroImage.src = '../assets/hero.png';
  wallOfWinImg.src = '../assets/wallOfWin.png';

  window.requestAnimationFrame(draw);
}

function draw(){
  ctx.fillStyle = '#44a8fe';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  ctx.drawImage(groundLevelImg, 0, groundLevel);
  ctx.drawImage(wallOfDeathGif, 0, groundLevel-300);
  ctx.drawImage(heroImage, heroXPosition, groundLevel-126);
  ctx.drawImage(wallOfWinImg, canvasWidth-33, groundLevel-247);

  window.requestAnimationFrame(draw);
}

init();



