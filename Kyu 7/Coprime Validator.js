/*
Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.

The inputs will always be two positive integers between 2 and 99.

Examples
20 and 27:

Factors of 20: 1, 2, 4, 5, 10, 20
Factors of 27: 1, 3, 9, 27
Greatest shared factor: 1
Result: 20 and 27 are coprime
12 and 39:

Factors of 12: 1, 2, 3, 4, 6, 12
Factors of 39: 1, 3, 13, 39
Greatest shared factor: 3
Result: 12 and 39 are not coprime
*/

//get the multples of params
//check against one another to ge highest an add similar num in a single array
//check uif it coprime or not
function isCoprime(x, y) {
    // your code here
    let xMul = []
    let yMul = []
    for( i = 1; i <= x; i++ ) {
        x % i === 0 ? xMul.push(i) : ''
        
    }
    for( i = 1; i <= y; i++ ) {
        y % i === 0 ? yMul.push(i) : ''    
    }

    let check = []
    if( xMul.length < yMul.length ) {
        for( a = 0; a < xMul.length; a++ ) {
            for( b = 0; b < yMul.length; b++ ) {
                xMul[a] === yMul[b] ? check.push(xMul[a]) : ''
            }
        }
    }
    if( xMul.length >= yMul.length ) {
        for( a = 0; a < yMul.length; a++ ) {
            for( b = 0; b < xMul.length; b++ ) {
                yMul[a] === xMul[b] ? check.push(yMul[a]) : ''
            }
        }
    }
    // console.log(xMul)
    // console.log(yMul)
    // console.log(check)
    return check[check.length -1] === 1
}
isCoprime(12, 39)
isCoprime(20, 27)
