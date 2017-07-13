function breakOut(array, changeValue, stopValue){

   for(let i = 0; array[i]!=stopValue; i++){
     array[i] = changeValue;
   }
   return array;
 }

function keepGoing(array, changeValue, skipValue){

  for(let i = 0; i<array.length; i++){
    if(array[i]==skipValue){
      continue;
    }
    array[i] = changeValue;
   }

   return array;
}

function findBy(array, findFn){

  var r = findFn();
  for(let i=0; i<array.length; i++){

    if(array[i] == r){
      result = array[i];
      return result;
    }
  }



}
