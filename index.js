let breakOut = (array, changeValue, stopValue) => {
  for (let x = 0; x < array.length; x++) {
    if (array[x] === stopValue) {
      break;
    } else {
      array[x] = changeValue;
    }
  }
  return array
}

let keepGoing = (array, changeValue, skipValue) => {
  for (let x = 0; x < array.length; x++) {
    if (array[x] === skipValue) {
      continue;
    } else {
      array[x] = changeValue;
    }
  }
  return array;
}

let findBy = (array, findFn) => {
  let element = null;
  for (let x = 0; x < array.length; x++) {
    if (findFn(array)) {
      element = x;
    }
  }
  return element
}
