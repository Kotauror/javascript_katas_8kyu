function countSheeps(arrayOfSheep) {
  var counter = 0;
  arrayOfSheep.map(function(sheep) {
    if (sheep == true)
      counter += 1
  })
  return counter;
}


function countSheeps(arrayOfSheep) {
  var num = 0;

  for (var i = 0; i < arrayOfSheep.length; i++)
    if (arrayOfSheep[i] == true)
      num++;

  return num;
}
