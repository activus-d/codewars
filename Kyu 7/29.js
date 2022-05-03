/* 
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
    var vowelsCount = 0;
    let vowels = 'aeiou'
    // enter your majic here
    for( let a = 0; a < str.length; a++ ){
      for( let b = 0; b < vowels.length; b++ ) {
        str[a] === vowels[b] ? vowelsCount++ : ''
      }
    }
    
    return vowelsCount;
}