function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i< array.length ; i++) {
    if (array[i] !== stopValue) {
      array[i] = changeValue;
    }
    else {
      break;
    }
  }
  return array;
}


function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue;
    }
    else {
      array[i] = changeValue;
    }
  }
  return array;
}

function findBy(array, findFn) {
  let found = 0;
  var index;
  for (let i = 0; i < array.length; i++){
    if (findFn(array[i]) === true) {
      found += 1;
      index = i;
      break;
    }
  }
  if (found > 0) {
    return array[index];
  }
  else {
    return null;
  }
}
