
'use strict';

//Create a.music object
var easyMusic;
var mediumMusic;
var hardMusic;

//source= w3school.com
function music(src) {
  this.music = document.createElement('audio');
  this.music.src = src;
  this.music.setAttribute('preload', 'auto');
  this.music.setAttribute('controls', 'none');
  this.music.style.display = 'none';
  document.body.appendChild(this.music);
  this.play =function() {
    this.music.play();
  };
  this.stop = function() {
    this.music.pause();
  };
}

// eslint-disable-next-line new-cap
easyMusic = new music ('../assets/easy-difficulty-song.mp3');
// eslint-disable-next-line new-cap
mediumMusic = new music('../assets/medium-difficulty-song.mp3');
// eslint-disable-next-line new-cap
hardMusic = new music('../assets/Doom 3 Music- Main Theme.mp3');

//To add background music to the game, add new music object when the game word shows up
// eslint-disable-next-line no-unused-vars
function startMusic() {
  // eslint-disable-next-line no-undef
  if(currentUser.difficulty === 'easy') {
    easyMusic.play();

  }
  // eslint-disable-next-line no-undef
  if(currentUser.difficulty === 'medium') {
    mediumMusic.play();
  }
  // eslint-disable-next-line no-undef
  if(currentUser.difficulty === 'hard') {
    hardMusic.play();
  }

}


