'use strict';

function saveToLocalStorage(keyName, obj){
  var stringyObj = JSON.stringify(obj);
  localStorage.setItem(keyName, stringyObj);
}

function getFromLocalStorage(keyName){
  var stringyObj = localStorage.getItem(keyName);
  var obj = JSON.parse(stringyObj);
  return obj;
}



// TEST
var example = [
  {
    username: 'name',
    score: 20,
    difficulty: 'easy',
  },
  {
    username: 'name2',
    score: 55,
    difficulty: 'medium',
  },
];
saveToLocalStorage('users', example);
