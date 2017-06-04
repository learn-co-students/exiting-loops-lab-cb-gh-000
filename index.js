function breakOut(array, changeValue, stopValue) {
  for(let i = 0; i < array.length; i++) {
    let elem = array[i]
    if (elem === stopValue) {
      break
    }
    array[i] = changeValue
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for(let i = 0; i < array.length; i++) {
    let elem = array[i]
    if (elem === skipValue) {
      continue
    }
    array[i] = changeValue
  }
  return array
}

function findBy(array, findFn) {
  for(let i = 0; i < array.length; i++) {
    if(findFn(array[i])) {
      return array[i]
    }
  }
  return null
}
