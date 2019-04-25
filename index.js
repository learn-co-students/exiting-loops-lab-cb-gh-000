function breakOut(arr, value, stopValue)
{
  for(let i = 0; i < arr.length; i++)
  {
    if(arr[i] === stopValue)
    {break;}
    arr[i] = value;
  }

  return arr;
}

function keepGoing(arr, change, skip)
{
  for(let i = 0; i < arr.length; i++)
  {
    if(arr[i] === skip)
    {continue;}
    arr[i] = change;
  }

  return arr;
}

function findBy(arr, findFn)
{
  for(let i = 0; i < arr.length; i++)
  {
    if(findFn(arr[i]))
    {
      return arr[i]
    }
  }

  return null
}
