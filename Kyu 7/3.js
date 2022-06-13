/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer value
*/
function sumDigits(number) {
    //get absolute numbers for value
    number = Math.abs(number);
    //convert number to string
    number = String(number);
    //loop over converted number to add the sum of values
    let i = 0;
    let sum = 0;
    while( i < number.length ) {
        sum += Number(number[i]);
        i++
    }
    return sum
}