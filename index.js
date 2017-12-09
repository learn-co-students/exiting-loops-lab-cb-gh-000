function breakOut(array, changeValue, stopValue){
  for(let a = 0; a < array.length; a++){
    if(array[a] === stopValue){
      break;
    }
    array[a] = changeValue;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue){
  for(let a = 0; a < array.length; a++) {
    if (array[a]  === skipValue) {
      continue;
    }
    array[a] = changeValue;
  }
  return array;
}

function findBy(array, findFn) {
  for (let a = 0; a < array.length; a++) {
    if (findFn(array[a])) {
      return array[a];
    }
  }
  return null;
}