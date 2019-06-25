var circleScore = document.getElementById('scoreKeeper');
var ctx = circleScore.getContext('2d');
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
var img = new Image();
img.src = '../assets/scenery-ground.png';

window.onload = function(){
  var canvas = document.getElementById('sceneryGroundImage');
  var ctx = canvas.getContext('2d');

  ctx.drawImage(img,105, 0);
};
