'use strict';
//-----------------------------------global variables----------------------------
if (getFromLocalStorage ('users')) {
  var userObjects = getFromLocalStorage ('users');
} else {
  userObjects = [];
}

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
  var avatar = avatarSelector ();
  new UserObject (username, difficulty, avatar);
  saveToLocalStorage('users', userObjects);
  window.location.href = './pages/gamePage.html';
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

function avatarSelector () {
  var avatarSelection = null;
  var avatarSelectionArray = document.getElementsByName ('avatar');
  for (var i = 0; i < avatarSelectionArray.length; i++) {
    if (avatarSelectionArray[i].checked) {
      avatarSelection = avatarSelectionArray[i].value;
      return avatarSelection;
    }
  }
}

//---------------------------------Constructor-----------------------------------
function UserObject (name, difficulty, avatar) {
  this.username = name;
  this.score = 0;
  this.difficulty = difficulty;
  this.avatar = avatar;
  userObjects.push(this);

}
