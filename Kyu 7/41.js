/*
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
*/
function factorial(n){
    //your code here
    let x = []
    for( let a = 1; a <= n; a++ ) {
      x.push(a)
    }
    return x.reduce( (a,b) => a * b, 1 )
  }