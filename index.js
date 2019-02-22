function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if(array[i] == stopValue){
      break;
    }
    array[i] = changeValue;
  }
  return array;
}
const c = Math.floor(Math.random() * 100);
console.log(breakOut([1, 1, 1, 1, 2, 1, 1], c, 2));

function keepGoing(array, changeValue, skipValue){
  for(let i = 0; i < array.length; i++){
    if(array[i] == skipValue){
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}

function findBy(array, findFn){
  for(let i = 0; i < array.length; i++){
    if(findFn(array[i])){
      return array[i];
    }
  }
  return null;

}
