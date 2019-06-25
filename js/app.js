'use strict';
//-----------------------------------global variables----------------------------
var userObjects = [];

//---------------------------------------functions-------------------------------

var submitStartButton = document.getElementById ('submit');
submitStartButton.addEventListener('click', handleSubmit);

function handleSubmit () {
  event.preventDefault();
  var username = document.getElementById('usernameValue').value;
  if (username === '') {
    return alert('Please enter a character name');
  }
  var difficulty = difficultySelector();
  new UserObject (username, difficulty);
  saveToLocalStorage('users', userObjects);
}

//This function will identify which difficulty level was selected by the user.  Source: https://stackoverflow.com/questions/9618504/how-to-get-the-selected-radio-button-s-value
function difficultySelector () {
  var difficultySelection = null;
  var difficultySelectionArray = document.getElementsByName ('difficultyList');
  for (var i = 0; i < difficultySelectionArray.length; i++) {
    if (difficultySelectionArray[i].checked) {
      difficultySelection = difficultySelectionArray[i].value;
      return difficultySelection;
    }
  }
}

//---------------------------------Constructor-----------------------------------
function UserObject (name, difficulty) {
  this.username = name;
  this.score = 0;
  this.difficulty = difficulty;
  userObjects.push(this);

}
