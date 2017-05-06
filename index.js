var breakOut = function(array, changeValue, stopValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] === stopValue) {
      break
  }
  array[i] = changeValue
}
return array
}

var keepGoing = function(array, changeValue, stopValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] === stopValue) {
      continue
  }
  array[i] = changeValue
}
return array
}

var findBy = function(array, FindFn) {
  if (returnVal = FindFn(array)) {
    return returnVal;
  } else {
    return null;
  }
}
