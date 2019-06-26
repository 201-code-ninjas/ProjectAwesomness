/* eslint-disable no-undef */
'use strict';

// var circleScore = document.getElementById('scoreKeeper');
// var ctx = circleScore.getContext('2d');
// ctx.beginPath();
// ctx.arc(100, 75, 50, 0, 2 * Math.PI);
// ctx.stroke();

var canvas = document.getElementById('gamePageCanvas');
var ctx = canvas.getContext('2d');
var users = getFromLocalStorage('users');
var currentUser = users[users.length - 1];

var groundLevelImg = new Image();
var wallOfDeathGif = new Image();
var heroImage = new Image();
var wallOfWinImg = new Image();

var canvasWidth = 960;
var canvasHeight = 500;
var groundLevel = canvasHeight - 174;
var heroXPosition = canvasWidth / 2;
var groundXPosition = 0;
var numberOfGround = 1;
var groundEndXPosition = canvasWidth;

var bonusGoal = [[5, 500], [10, 250], [20, 100]];
var wordsTyped = 0;
//bonus score
function scoreMultiplier() {
  for (var i = 0; i < bonusGoal.length; i++) {
    if (wordsTyped <= bonusGoal[i][0]) {
      currentUser.score += bonusGoal[i][1];

      break;
    }
  }

}

//Generating word in the game page
function showWordType() {
  var challangeWord = document.getElementById('wordToType');
  if (currentUser.difficulty === 'easy') {
    var easyWord = pickFromEasyWordList();
    challangeWord.textContent = easyWord;
  }
  if (currentUser.difficulty === 'medium') {
    var mediumWord = pickFromMediumWordList();
    challangeWord.textContent = mediumWord;
  }
  if (currentUser.difficulty === 'hard') {
    var hardWord = pickFromHardWordList();
    challangeWord.textContent = hardWord;
  }
}

showWordType();

//Eventlistner for text form
// var userInput = document.getElementById('gamePageForm');
function handleUserSubmission(event) {

  event.preventDefault();
  wordsTyped++;
  checkUserAnswer();
  showWordType();
  startMusic();
}
document.addEventListener('submit', handleUserSubmission);

//move hero forward
function moveHeroForward() {
  heroXPosition += 100;

}
//move hero backward
function moveHeroBackward() {
  heroXPosition -= 50;

}
//TODO: create multipier for score at the end of lavel
//function to check it the words match 
function checkUserAnswer() {
  var answer = document.getElementById('userEntry').value;
  console.log(document.getElementById('wordToType').textContent);
  if (answer === document.getElementById('wordToType').textContent) {
    moveHeroForward();
    currentUser.score += 5;
  } else {
    moveHeroBackward();
  }
  document.getElementById('gamePageForm').reset();
}


function init() {

  groundLevelImg.src = '../assets/scenery-ground.png';
  wallOfDeathGif.src = '../assets/wallOfDeath.png';
  heroImage.src = '../assets/hero.png';
  wallOfWinImg.src = '../assets/wallOfWin.png';

  window.requestAnimationFrame(draw);
}

function draw() {
  ctx.fillStyle = '#44a8fe';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  ctx.drawImage(groundLevelImg, groundXPosition, groundLevel);

  if (groundEndXPosition < (canvasWidth + 5)) {
    numberOfGround++;
    groundEndXPosition = canvasWidth * numberOfGround;
  }
  for (var i = numberOfGround; i > 1; i--) {
    ctx.drawImage(groundLevelImg, groundXPosition + (canvasWidth * (i-1)), groundLevel);
  }

  ctx.drawImage(wallOfDeathGif, 0, groundLevel - 300);
  ctx.drawImage(heroImage, heroXPosition, groundLevel - 120);
  ctx.drawImage(wallOfWinImg, canvasWidth - 33, groundLevel - 247);

  ctx.fillStyle = '#ff0000';
  ctx.fillRect(canvasWidth - 100, 10, 90, 60);
  ctx.clearRect(canvasWidth - 98, 12, 86, 56);

  ctx.fillStyle = '#000000';
  ctx.font = '30px Arial';
  ctx.fillText('score', canvasWidth - 92, 30);
  ctx.fillText(currentUser.score, canvasWidth - 80, 60);


  heroXPosition -= .5;
  groundXPosition -= .5;
  groundEndXPosition -= .5;
  //if the character dies
  if (heroXPosition <= 15) {
    // save to local storage
    // redirect to leaderboard
    alert('You Suck, Try again');
    saveToLocalStorage('users', users);
    window.location.href = '../pages/leaderBoard.html';
    return;

    //if the character wins 
  } else if (heroXPosition >= canvasWidth - 100) {
    // advance to next level
    // save to local storage
    // if finished hard, redirect to leaderboard
    //get the bonus score
    scoreMultiplier();
    alert('You\'re awesome, Try again');

    if (currentUser.difficulty === 'easy') {
      currentUser.difficulty = 'medium';
      saveToLocalStorage('users', users);
      window.location.reload();
    } else if (currentUser.difficulty === 'medium') {
      currentUser.difficulty = 'hard';
      saveToLocalStorage('users', users);
      window.location.reload();
    } else if (currentUser.difficulty === 'hard') {
      saveToLocalStorage('users', users);
      window.location.href = '../pages/leaderBoard.html';
    }

    return;
  }

  window.requestAnimationFrame(draw);
}

init();



