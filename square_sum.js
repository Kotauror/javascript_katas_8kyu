function squareSum(numbers) {
  var counter = 0;
  numbers.map(function(number) {
    counter += (number * number);
  })

  return counter;

}
