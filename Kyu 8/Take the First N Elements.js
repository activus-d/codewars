/*
Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
*/
function take(arr, n) {
    // Your code here
    let a = []
    if(arr.length === 0) {
      return a
    }else if(n > arr.length) {
      for(let i = 0; i < arr.length; i++) {
        a.push(arr[i])}
      }else {
            for(let i = 0; i < n; i++) {
        a.push(arr[i])
      }
    }
    return a
}