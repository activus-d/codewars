/*Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2
Input: []
Output: 0
Input: [-2.398]
Output: -2.398 */
function sum (numbers) {
    "use strict";
    let sum = [];
    numbers.length === [] ? 0 : sum = numbers.reduce( (a,b) => a + b, 0 );
    return sum;
};
//method 2
function sum (numbers) {
    let sum = 0
    return numbers.lenght === 0 ? 0 : sum = numbers.reduce( (acc,c) => acc + c, 0 )
};
//method 3
function sum (numbers) {
    result = 0
      "use strict";
    //to return zero if array is empty
    if(numbers == []) {
        return 0;
    }else{
      numbers.forEach(num => {
        result += num
    })
        return result
    }      
};
