// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
var capitals = function (word) {
    // Write your code here
    let result = []
    for( let i = 0; i < word.length; i++ ) {
      word[i] === (word[i]).toUpperCase() ? result.push(i) : ''
    }
      return result
  };