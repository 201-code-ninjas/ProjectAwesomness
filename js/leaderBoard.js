'use strict';

var users = getFromLocalStorage('users');
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

// TODO: sort the scores so that the highest score appears first
// [5, 8, 12, 3, 20, 2]
// var temp = array[0]; 5
// array[0] = array[1]; 5 > 8
// array[1] = temp; 8 > 5
// [8, 5]

// TODO: show only top 5


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
