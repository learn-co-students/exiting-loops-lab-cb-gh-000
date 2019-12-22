function breakOut(array, changeValue, stopValue){
  var i=0;
  for(i=0;i<array.length;i++){
    if(array[i]==stopValue)
    break;
    else
    array[i]=changeValue;
  }
  return array
}
const keepGoing = (array, changeValue, skipValue) =>{
  var i=0;
  for(i=0;i<array.length;i++){
    if(array[i]==skipValue)
    continue;
    else
    array[i]=changeValue;
  }
  return array
}

function findBy(array, findFn){
  var i=0;
  for(i=0;i<array.length;i++){
    if(findFn(array[i]))
    break;
  }
  return i==array.length? null : array[i]
}
