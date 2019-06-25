var circleScore = document.getElementById('scoreKeeper');
var ctx = circleScore.getContext('2d');
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
var img = new Image();
img.src = '../asset/marisha.png';

window.onload = function(){
  var canvas = document.getElementById('marishaSprite');
  var ctx = canvas.getContext('2d');

  ctx.drawImage(img,10, 10);
};
