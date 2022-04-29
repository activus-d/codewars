/*
Given a sequence of numbers, find the largest pair sum in the sequence.
For example
[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.
*/
function largestPairSum (numbers) {
    //TODO: Write your Code here
    //sort array from highest to lowest
    numbers = numbers.sort( (a,b) => b - a );
    //add the first two elements in the array
    return numbers[0] + numbers[1]
}