function capitalizeLetters(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word[0].toUpperCase() + word.substr(1);
  }).join(' ');
}
const output = capitalizeLetters("i love javascript");
console.log(output);

// What this function does line by line :)

// line 1: define a function, we pass argument of string(str)
// line 2: we return a string lowercased and split on empty spaces.
// This basically creates an array - [i, love, javascript].
// line 2-3: We call a map method on the array we've created.
// The function(word) is array.map do |word| from ruby
// line 3: we take the first letter of the word and make it upcase.
// line 3: then we add to it the lest of word
// line 4: we join it all with whitespaces.
 
