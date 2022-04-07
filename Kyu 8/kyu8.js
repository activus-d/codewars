//This code does not execute properly. Try to figure out why.
function multiply(a,b){
    return a * b//return th result
}
multiply(1,1)


/*A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry...
Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive? Return True if yes, False otherwise */
function hero(bullets, dragons){
    //Get Coding!
    if((bullets / dragons) >= 2) {
        return true;
    }else{return false}
}


//We need a function that can transform a number into a string. What ways of achieving this do you know? 123 --> "123"
function numberToString(num) {
    // Return a string of the number here!
    num += '';
    return num
}


//Convert a String to a Number!
var stringToNumber = function(str){
    // put your code here
    str = Number(str)
    return str;
}


//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages. Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0. Example: n= 5, m=5: 25; n=-5, m=5:  0
function paperwork(n, m) {
    if(n < 0) {
        return n = 0;
    }else if(m < 0) {
        return m = 0
    }else {
        return n * m
    }
}
paperwork(5,5)


//Implement a function which convert the given boolean value into its string representation.
function booleanToString(b){
    //your code here
    b = String(b)
    return b
}


/* There was a test in your class and you passed it. Congratulations! But you're an ambitious person. You want to know if you're better than the average student in your class.
 You receive an array with your peers' test scores. Now calculate the average and compare your score! Return True if you're better, else False!
 Note: Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array! */
 function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let average = 0;
    //arrive at sum of classPoints
    for(i = 0; i < classPoints.length; i++) {
        average += classPoints[i]
    }
    //arive at average classPoints
    average = average / classPoints.length
    //test if yourPoints is better than average classPoints
    if(average < yourPoints) {
        return true
    }else {
        return false
    }
}


/*Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9 */
function squareSum(numbers, square){
    let result = 0;
    for(let i = 0; i < numbers.length; i++) {
        result += numbers[i] * numbers[i]
    }
    return result
}


/*After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
Write a code that gives out the total amount for different days(d). */
function rentalCarCost(d) {
    // Your solution here
    let cost = 40;
    if(d >= 7) {
        cost = (cost *  d) - 50;
        return cost;
    }else if(d >= 3) {
        cost = (cost * d) - 20;
        return cost
    }else {
        cost = cost * d;
        return cost;
    }
}


/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number. */
function sumMix(x){
    let sum = 0;
    x.forEach(y => {
        sum = sum + +y
    })
    return sum
}


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
//
function sum (numbers) {
    let sum = 0
    return numbers.lenght === 0 ? 0 : sum = numbers.reduce( (acc,c) => acc + c, 0 )
};
//
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


/*You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function
mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12] */
function mergeArrays(arr1, arr2) {
    return [...new Set(arr1.concat(arr2))].sort( (a,b) => a - b )
}
//
function mergeArrays(arr1, arr2) {
    let merge = [...arr1,...arr2];
    let sorted = [...new Set(merge)].sort( (a,b) => a - b );
    return sorted
}
//
function mergeArrays(arr1, arr2) {
    let newArrays = [...arr1, ...arr2];
    newArrays = newArrays.sort( (a,b) => a - b );
    newArrays = [...new Set(newArrays)];
    return newArrays;
}
//
function mergeArrays(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    arr3 = arr3.sort( (a,b) => a - b );
    arr3 = [...new Set(arr3)];
    return arr3
}


//Implement a function which multiplies two numbers.
function multiply(a, b) {
    let mul = a * b; 
    return mul;
}


/*You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
Write a program that returns the girl's age (0-9) as an integer.
Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old".
The first character in the string is always a number. */
function getAge(inputString){
    // return the girl's correct age as an integer. Happy coding :) 
    inputString = inputString[0];
    return +inputString
}


//Write a function to split a string and convert it into an array of words. Examples (Input -> Output): * "Robin Singh" ==> ["Robin", "Singh"]
function stringToArray(string){

    // code code code
    return string = string.split(' ')
}


//Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x){
    //convert string to array with split()
    x = x.split('');
    x = x.filter( item => item !== ' ' )//filter out empty strings from the array
    return x.join('')//join back to form string
}