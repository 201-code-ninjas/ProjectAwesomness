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
