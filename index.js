function breakOut(tab, change, stopV) {
  for(var i = 0;i<tab.length;i++)
  {
    if(tab[i] === stopV)
      return tab;
    tab[i]= change;
  }
}
function keepGoing(tab, change, skipValue) {
  for(var i = 0 ; i <tab.length; ++i)
  {
    if(tab[i] === skipValue)
      continue
    tab[i] = change
  }
  return tab;
}
function findBy(tab, findFn) {
  for(var i in tab)
  {
    if(findFn(tab[i]) == true)
        return tab[i];
  }
  return null;
}
