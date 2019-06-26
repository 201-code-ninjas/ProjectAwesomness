/* eslint-disable no-undef */
'use strict';

var canvas = document.getElementById('gamePageCanvas');
var ctx = canvas.getContext('2d');
var users = getFromLocalStorage('users');
var currentUser = users[users.length - 1];

var groundLevelImg = new Image();
var wallOfDeathGif = new Image();
var heroImage = new Image();
var wallOfWinImg = new Image();
var cloud1 = new Image();
var cloud2 = new Image();
var cloud3 = new Image();
var cloud4 = new Image();
var cloud5 = new Image();
var lightning = new Image();
var volcano1 = new Image();
var volcano2 = new Image();

var canvasWidth = 960;
var canvasHeight = 500;
var groundLevel = canvasHeight - 174;
var heroXPosition = canvasWidth / 2;
var groundXPosition = 0;
var numberOfGround = 1;
var groundEndXPosition = canvasWidth;
var lightningTimer = 0;
var lightningPosition = 0;

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


//Generate user avatar from local storage
function avatarSelection () {
  var currentAvatar = currentUser.avatar;
  if (currentAvatar === 'renee') {
    return '../assets/Renee-avatar.png';
  } else if (currentAvatar === 'marisha') {
    return '../assets/marisha.png';
  } else if (currentAvatar === 'chris') {
    return '../assets/chris-avatar.png';
  } else if (currentAvatar === 'sapana') {
    return '../assets/sapana-avatar.png';
  } else {
    return '../assets/hero.png';
  }
}


showWordType();

//Eventlistner for text form
// var userInput = document.getElementById('gamePageForm');
function handleUserSubmission(event) {
  event.preventDefault();
  wordsTyped++;
  checkUserAnswer();
  startMusic();
  showWordType();
}

function handleKeyPress(event){
  var typedAnswer = document.getElementById('userEntry').value;
  var displayedWord = document.getElementById('wordToType').textContent;

  if (typedAnswer.length > displayedWord.length){
    wordsTyped++;
    checkUserAnswer();
    startMusic();
    showWordType();
  }
}

document.addEventListener('submit', handleUserSubmission);
document.addEventListener('keyup', handleKeyPress);

//move hero forward
function moveHeroForward() {
  heroXPosition += 100;
}

//move hero backward
function moveHeroBackward() {
  heroXPosition -= 50;
}

//function to check it the words match
function checkUserAnswer() {
  var answer = document.getElementById('userEntry').value.trim();
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
  heroImage.src = avatarSelection();
  wallOfWinImg.src = '../assets/wallOfWin.png';
  cloud1.src = '../assets/cloud1.png';
  cloud2.src = '../assets/cloud2.png';
  cloud3.src = '../assets/cloud3.png';
  cloud4.src = '../assets/cloud4.png';
  cloud5.src = '../assets/cloud5.png';
  lightning.src = '../assets/lightning.png';
  volcano1.src = '../assets/volcano1.png';
  volcano2.src = '../assets/volcano2.png';

  window.requestAnimationFrame(draw);
}

function draw() {

  // if level is easy
  if (currentUser.difficulty === 'easy'){
    // draw the blue sky
    var grd = ctx.createLinearGradient(0, 0, 0, groundLevel);
    grd.addColorStop(0,'#44a8fe');
    grd.addColorStop(1,'#73beff');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // clouds in the sky
    ctx.drawImage(cloud1, canvasWidth/4, groundLevel/10);
    ctx.drawImage(cloud2, canvasWidth/8, groundLevel/3.5);
    ctx.drawImage(cloud3, canvasWidth/1.2, groundLevel/4);
    ctx.drawImage(cloud3, canvasWidth/20, 0);
    ctx.drawImage(cloud4, canvasWidth/1.5, groundLevel/50);
    ctx.drawImage(cloud5, canvasWidth/2, groundLevel/2.5);

    // if level is medium
  } else if (currentUser.difficulty === 'medium') {
    // draw the sunset sky
    grd = ctx.createLinearGradient(0, 0, 0, groundLevel);
    grd.addColorStop(0,'#a232a6');
    grd.addColorStop(0.5,'#d65c89');
    grd.addColorStop(1,'#e3825b');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  } else if (currentUser.difficulty === 'hard'){
    // draw the volcano storm background
    grd = ctx.createLinearGradient(0, 0, 0, groundLevel);
    grd.addColorStop(0,'#201d57');
    grd.addColorStop(1,'#3d0b03');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // volcanos
    ctx.drawImage(volcano1, canvasWidth/12, groundLevel-250, 300, 300);
    ctx.drawImage(volcano2, canvasWidth/4, groundLevel-230, 300, 300);
    ctx.drawImage(volcano1, canvasWidth/1.75, groundLevel-300, 350, 350);

    // lightning
    lightningTimer ++;
    if (lightningTimer === 100){
      lightningPosition = Math.random() * (canvasWidth - 200) + 100;
    }
    if (lightningTimer > 100 && lightningTimer < 120){
      ctx.drawImage(lightning, lightningPosition, -50, 60, 425);
    } else if (lightningTimer > 120){
      lightningTimer = 0;
    }
  }

  // draw the grassy ground
  ctx.drawImage(groundLevelImg, groundXPosition, groundLevel);
  if (groundEndXPosition < (canvasWidth + 5)) {
    numberOfGround++;
    groundEndXPosition += canvasWidth;
  }
  for (var i = numberOfGround; i > 1; i--) {
    ctx.drawImage(groundLevelImg, groundXPosition + (canvasWidth * (i-1)), groundLevel);
  }

  // draw the wall, hero, and win wall
  ctx.drawImage(wallOfDeathGif, 0, groundLevel - 300);
  ctx.drawImage(heroImage, heroXPosition, groundLevel - 110, 130, 130);
  ctx.drawImage(wallOfWinImg, canvasWidth - 33, groundLevel - 247);

  // draw the score box and text
  ctx.fillStyle = '#ff0000';
  ctx.fillRect(canvasWidth - 100, 10, 90, 60);
  ctx.clearRect(canvasWidth - 98, 12, 86, 56);
  ctx.fillStyle = '#000000';
  ctx.font = '30px VT323';
  ctx.textAlign = 'center';
  ctx.fillText('score', canvasWidth - 55, 30);
  ctx.fillText(currentUser.score, canvasWidth - 55, 60);

  // move hero and ground backwards at the same speed
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

