'use strict';

var users = getFromLocalStorage('users');
var leaderBoard = document.getElementById('leader-board');

var appendStuff = function(parent, child){
  parent.appendChild(child);
};

// TODO: sort the scores so that the highest score appears first

var displayScores = function(){
  // for all user objects/saved scores
  // loop through and add them to the table
  for (var i = 0; i < users.length; i++) {
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
