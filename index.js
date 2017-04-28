function breakOut(array, changeValue, stopValue) {
  for (var index = 0; index < array.length; index++) {
    if(array[index] === stopValue)
      break;
    array[index] = changeValue;
  }
  return array;
}

function keepGoing(array, changeValue, stopValue) {
  for (var index = 0; index < array.length; index++) {
    if(array[index] === stopValue)
      continue;
    array[index] = changeValue;
  }
  return array;
}

function findBy(array, findFn) {
  for (var index = 0; index < array.length; index++) {
    if(findFn(array[index]))
      return array[index];
  }
  return null;
}
