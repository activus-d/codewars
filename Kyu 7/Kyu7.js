/*
Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.
Examples (Input -- => Output):
"abcdef"                      -- => "abcdef"
"pqksuvy"                     -- => "kpqsuvy"
"zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"
*/
function sortGiftCode(code){
    //TODO 
    //make string into array of strings
    code = code.split('');
    //sort array
    code = code.sort().join(''); 
    return code
}


/*
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
The solution would work like the following:
getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/
function getEvenNumbers(numbersArray){
    return ( numbersArray.filter( item => item % 2 === 1 ) ) === numbersArray ? [] :
    ( numbersArray.filter( item => item % 2 === 0 ) )
    // filter out the odd numbers
}


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


/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/
function filter_list(l) {
    // Return a new array with the strings filtered out
    l = l.filter( item => item === Number(item) );
    return l
}


/*
Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.
Assume that the input n will always be a positive integer.
Examples: (Input --> output)
2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
*/
function sumCubes(n){
    let i = 1;
    let result = 0
    while(i <= n) {
        result += i * i * i;
        i++
    }
    return result
}


/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/
function reverseWords(str) {
    // Go for it
    str = str.split(' ')
    str = str.map( (item) => item.split('').reverse().join('') );
    return str = str.join(' ')
}


/*
In honor of my grandfather's memory we will write a function using his formula!
Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
*/
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    // your code
    //change parameters into array;
    let result = Array.from(arguments);
    //multiply each number by itself
    result = result.map( age => age * age );
    //add them together
    result = result.reduce( (acc,c) => acc + c, 0 );
    //take the square root of the result
    result = Math.sqrt( result )
    //divide by two and pass rounded down integar
    return parseInt(result / 2)
}


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


/*
Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.
All inputs will be valid.
*/
function digits(n) {
    // code goes here
    return n = String(n).length;
}


/*
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
The four operators are "add", "subtract", "divide", "multiply".
A few examples:(Input1, Input2, Input3 --> Output)
5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
*/
function arithmetic(a, b, operator){
    //your code here!
    let result = 0;
    operator === 'add' ? result = a + b:
    operator === 'subtract' ? result = a - b :
    operator === 'multiply' ? result = a * b :
    operator === 'divide' ? result = a / b :
    result = 0;
    return result;
}


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

/*
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
Notes: Array/list size is at least 2.
Array/list numbers could be a mixture of positives, negatives also zeroes .
Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
Explanation:
Max product obtained from multiplying 5 * 10 = 50 .
adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
Explanation:
The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.
*/
function adjacentElementsProduct(array) {
    // max product
    let i = 0;
    let mulAdjElements = []
    while(i < (array.length - 1)) {
      //multiply the element in the array by the next element to it and push result to an already declared array
      mulAdjElements.push(array[i] * array[i + 1]);
      i++
    }
    return Math.max(...mulAdjElements)
}


/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
#Examples:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"
#Input
A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
#Output
The middle character(s) of the word represented as a string.
*/
function getMiddle(s) {
    //Code goes here!
    //test if string length is even, if even return the 2 middle character of the strings 
    return s.length % 2 === 0 ? s[Math.round((s.length / 2) - 1)] + s[Math.round(s.length / 2)] :
    //if string is odd, return the lone middle character
    s[Math.round(s.length / 2) - 1]
}


/*

*/
function rpsls(pl1,pl2){
    //Your Magnificent Code here
    let playerResult = ''
    //check conditions for player1 winning
    if( (pl1 === 'scissors' && pl2 === 'paper') ||
        (pl1 === 'paper' && pl2 === 'rock') ||
        (pl1 === 'rock' && pl2 === 'lizard') ||
        (pl1 === 'lizard' && pl2 === 'spock') ||
        (pl1 === 'spock' && pl2 === 'scissors') ||
        (pl1 === 'scissors' && pl2 === 'lizard') ||
        (pl1 === 'lizard' && pl2 === 'paper') ||
        (pl1 === 'paper' && pl2 === 'spock') ||
        (pl1 === 'spock' && pl2 === 'rock') ||
        (pl1 === 'rock' && pl2 === 'scissors')
        ) {playerResult = 'Player 1 Won!';
          return playerResult
    }
    //check conditions for player two winning
    else if ( (pl2 === 'scissors' && pl1 === 'paper') ||
        (pl2 === 'paper' && pl1 === 'rock') ||
        (pl2 === 'rock' && pl1 === 'lizard') ||
        (pl2 === 'lizard' && pl1 === 'spock') ||
        (pl2 === 'spock' && pl1 === 'scissors') ||
        (pl2 === 'scissors' && pl1 === 'lizard') ||
        (pl2 === 'lizard' && pl1 === 'paper') ||
        (pl2 === 'paper' && pl1 === 'spock') ||
        (pl2 === 'spock' && pl1 === 'rock') ||
        (pl2 === 'rock' && pl1 === 'scissors') ) {
            playerResult = 'Player 2 Won!';
            return playerResult
        }
    //result is draw if none of the condtions above is true
    playerResult = 'Draw!';
    return playerResult
}


/*
Write a small function that returns the values of an array that are not odd.
All values in the array will be integers. Return the good values in the order they are given.
*/
function noOdds( values ){
    // Return all non-odd values
    let notOdd = [];
    notOdd = values.filter( item => item % 2 === 0);
    return notOdd
}


/*
Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.
*/
let sortme = function( names ){
    return names.sort()
}


/*
Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
i.e.
friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
*/
function friend(friends){
    //your code here
    myFriends = friends.filter( friend => friend.length === 4 );
    return myFriends;
}


/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/
function sumTwoSmallestNumbers(numbers) {  
    //Code here
    numbers.sort( (a,b) => a - b );
    let sum = numbers[0] + numbers[1];
    return sum
}