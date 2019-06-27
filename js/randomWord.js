'use strict';

//Random function 
function getRandomWord(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Pick up random words from word array
function pickWord(word) {
  if (word === 'easy') {
    return easyWordList[getRandomWord(0, easyWordList.length - 1)];
  }
  if (word === 'medium') {
    return mediumWordList[getRandomWord(0, mediumWordList.length - 1)] ;
  }
  if (word === 'hard') {
    return hardWordList[getRandomWord(0, hardWordList.length - 1)];
  }
}


