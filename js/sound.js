/* eslint-disable no-undef */
//Create a.music object 
var easyMusic;
var mediumMusic;
var hardMusic;

function music(src) {
  this.music = document.createElement('audio');
  this.music.src = src;
  this.music.setAttribute('preload', 'auto');
  this.music.setAttribute('contols', 'none');
  this.music.style.display = 'none';
  document.body.appendChild(this.music);
  this.play =function() {
    this.music.play();
  };
  this.stop = function() {
    this.music.pause();
  };
}
easyMusic = new music ('../assets/DOOM (2016) OST - Rip & Tear.mp3');
mediumMusic = new music('../assets/DOOM (2016) OST - Flesh & Metal (w build up).mp3');
hardMusic = new music('../assets/Doom 3 Music- Main Theme.mp3');

//To add background music to the game, add new music object when the game word shows up
function startMusic() {
  if(currentUser.difficulty === 'easy') {
    easyMusic.play();
  }
  if(currentUser.difficulty === 'medium') {
    mediumMusic.play();
  }
  if(currentUser.difficulty === 'hard') {
    hardMusic.play();
  }
}

