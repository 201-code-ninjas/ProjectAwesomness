'use strict';

// eslint-disable-next-line no-undef
var users = getFromLocalStorage('users');
var currentUser = users[users.length - 1];
var leaderBoard = document.getElementById('leader-board');
var displayedScores = 6;

var appendStuff = function(parent, child){
  parent.appendChild(child);
};

var bubbleSort = function(){
  do {
    var swapped = false;
    for (var i = 0; i < users.length-1; i++){
      if (users[i].score < users[i+1].score){
        var temp = users[i];
        users[i] = users[i+1];
        users[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped === true);
};

//Display current user's avatar over scoreboard
var usersAvatar = '';
function displayUsersAvatar () {
  var currentAvatar = currentUser.avatar;
  if (currentAvatar === 'renee') {
    usersAvatar = '../assets/Renee-avatar.png';
  } else if (currentAvatar === 'marisha') {
    usersAvatar = '../assets/marisha.png';
  } else if (currentAvatar === 'chris') {
    usersAvatar = '../assets/chris-avatar.png';
  } else if (currentAvatar === 'sapana') {
    usersAvatar = '../assets/sapana-avatar.png';
  } else {
    usersAvatar = '../assets/hero.png';
  }
}
displayUsersAvatar();
var avatarImage = document.getElementById ('avatarDisplayed');
avatarImage.src = usersAvatar;

var displayScores = function(){
  bubbleSort();

  // for all user objects/saved scores
  // loop through and add them to the table
  for (var i = 0; i < displayedScores; i++) {
    var trEl = document.createElement('tr');
    var nameTdEl = document.createElement('td');
    var scoreTdEl = document.createElement('td');
    nameTdEl.textContent = users[i].username;
    scoreTdEl.textContent = users[i].score;
    appendStuff(trEl, nameTdEl);
    appendStuff(trEl, scoreTdEl);
    appendStuff(leaderBoard, trEl);
  }
};

displayScores();
