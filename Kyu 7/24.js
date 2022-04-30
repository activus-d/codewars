/* Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types. */
function findShort(s){
    let lengthOfWords = s.split(' ').map( item => item = item.length ).sort( (a,b) => a - b )
    return lengthOfWords[0]
  }