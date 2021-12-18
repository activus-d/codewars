/* Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example:
348597 => [7,9,5,8,4,3]
0 => [0] */
function digitize(n) {
    n = String(n)
    n = n.split('').reverse().map( item => item = Number(item) )
    return n
}