var breakOut = function(array, changeValue, stopValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] === stopValue) {
      break
  }
  array[i] = changeValue
}
return array
}
