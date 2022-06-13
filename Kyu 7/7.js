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