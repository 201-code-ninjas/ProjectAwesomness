var circleScore = document.getElementById('scoreKeeper');
var ctx = circleScore.getContext('2d');
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
