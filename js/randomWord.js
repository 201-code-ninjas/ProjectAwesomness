'use strict';

//Random function 
function getRandomWord(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function to randomly pickup word from easy word list 
var pickFromEasyWordList = function () {
  var index, easyWord;
  index = getRandomWord(0, easyWordList.length-1);
  easyWord = easyWordList[index];
  return easyWord;
};

//function to randomly pickup word from medium word list 
var pickFromMediumWordList = function(){
  var index, mediumWord;
  index = getRandomWord(0, mediumWordList.length-1);
  mediumWord = mediumWordList[index];
  return mediumWord;
};

//function to randomly pickup word from hard word list
var pickFromHardWordList = function() {
  var index, hardWord;
  index = getRandomWord(0, hardWordList.length-1);
  hardWord = hardWordList[index];
  return hardWord;
};



