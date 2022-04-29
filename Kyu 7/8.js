/*
Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.
Given a number, Find if it is Balanced or not .
*/
function balancedNum(number){
  
    //remove middle number(s)- if number length is even remove 2 middle numbers; if number length is odd remove lone middle numer; if number length is 1 or two then return balanced.
    if( number.length === 1 || number.length === 2 ) {
      return 'Balanced'
    }else {
        number = String(number).split('')//make number a string then convert to an array to remove mid number
        if( number.length % 2 === 0 ) {
        number.splice( (Math.round(number.length / 2) - 1), 2 )  
        }else {
            number.splice( (Math.round(number.length / 2) - 1), 1 )
        }
    }
    //check if the sum of all digits to the left is same as the sum of all digits to the right
    let leftNum = number.slice( 0, (number.length / 2) )
    let rightNum = number.slice( (number.length / 2) )
    if( (leftNum.reduce( (acc,c) => acc + +c, 0 ) ) === (rightNum.reduce( (acc,c) => acc + +c, 0 ) ) ) {
        return 'Balanced'
        }else {
        return 'Not Balanced'
    }
}