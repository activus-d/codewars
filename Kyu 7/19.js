/* Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.
Note that the number will always be non-negative (>= 0). */
function insertDash(num) {
   num = String(num)
   num = num.split('')
   num = num.map( (item, i, arr) => 
     +item % 2 === 0 ? item : +item % 2 === 1 && +(arr[i + 1]) % 2 === 1 ? item  + '-' : item
 ).join('')
   return num
 }