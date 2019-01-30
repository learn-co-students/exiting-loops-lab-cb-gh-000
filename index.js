function breakOut(array, changeValue, stopValue) {
  for (var counter = 0; counter< array.length; counter ++){
      if (array[counter] === stopValue) {
        break
      }
      array[counter] = changeValue
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (var counter = 0; counter< array.length; counter ++){
      if (array[counter] === skipValue) {
        continue
      }
      array[counter] = changeValue
  }
  return array
}

function findBy (array, findFn) {
  for (var counter = 0; counter< array.length; counter ++){
      if (findFn(array[counter])) {
        return array[counter]
      }
  }
  return null
}
