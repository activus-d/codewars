/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/
function find_average(array) {
    // your code here
    let average = 0;
    if(array.length === 0) {
      average = 0;
      return average;
    }else {
      array.forEach(num => {
        average += num;
      })
    }
    average = Number(average / array.length);
    return average
  }